/**
 * Telegram Notification Module for SCS-Feed
 * 
 * This module sends the daily supply chain security report to Telegram users/groups
 * configured via environment variables in GitHub repository secrets.
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

/**
 * Send a message to a Telegram chat
 * 
 * @param {string} botToken - The Telegram bot token
 * @param {string} chatId - The Telegram chat ID to send the message to
 * @param {string} message - The message text to send
 * @returns {Promise} - Promise resolving to the Telegram API response
 */
async function sendTelegramMessage(botToken, chatId, message) {
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await axios.post(apiUrl, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
      disable_web_page_preview: false
    });
    return response.data;
  } catch (error) {
    const telegramDescription = error?.response?.data?.description || '';
    const isMarkdownParseError = telegramDescription.includes("can't parse entities");

    if (isMarkdownParseError) {
      try {
        console.warn('Markdown parsing failed, retrying as plain text...');
        const fallbackResponse = await axios.post(apiUrl, {
          chat_id: chatId,
          text: message,
          disable_web_page_preview: false
        });
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error('Fallback plain text send also failed:', fallbackError.message);
        if (fallbackError.response) {
          console.error('Telegram fallback API response:', fallbackError.response.data);
        }
        throw fallbackError;
      }
    }

    console.error('Error sending Telegram message:', error.message);
    if (error.response) {
      console.error('Telegram API response:', error.response.data);
    }
    throw error;
  }
}

/**
 * Format the supply chain report for Telegram
 * The message is split into chunks if it exceeds Telegram's message size limit
 * 
 * @param {string} reportContent - Original markdown report content
 * @returns {Array<string>} - Array of message chunks ready to send
 */
function formatReportForTelegram(reportContent) {
  // Telegram message size limit is 4096 characters
  const MAX_MESSAGE_SIZE = 4000; // Using slightly smaller limit to be safe
  
  // Extract key sections for a more concise summary
  let lines = reportContent.split('\n');
  
  // Get the header (title and date)
  const headerLines = lines.slice(0, 5);
  
  // Find Summary section
  const summaryStartIndex = lines.findIndex(line => line.startsWith('## Summary'));
  const summaryEndIndex = lines.findIndex((line, i) => i > summaryStartIndex && line.startsWith('## '));
  const summaryLines = summaryStartIndex !== -1 ? 
    lines.slice(summaryStartIndex, summaryEndIndex !== -1 ? summaryEndIndex : undefined) : [];
  
  // Create an overview of reports by source
  const sourceSections = [];
  let currentSourceIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## ') && !line.includes('Summary') && !line.includes('About This Report')) {
      currentSourceIndex = sourceSections.length;
      sourceSections.push({
        title: line,
        reports: []
      });
    } else if (currentSourceIndex >= 0 && line.startsWith('### ')) {
      sourceSections[currentSourceIndex].reports.push(line.substring(4));
    }
  }
  
  // Construct telegram messages
  const messages = [];
  
  // First message contains header, summary, and report count by source
  let mainMessage = headerLines.join('\n') + '\n\n';
  if (summaryLines.length > 0) {
    mainMessage += summaryLines.join('\n') + '\n\n';
  }
  
  mainMessage += '🔍 *Reports by Source:*\n\n';
  
  let totalReports = 0;
  for (const source of sourceSections) {
    const sourceLine = `${source.title.replace('##', '•')} - ${source.reports.length} reports\n`;
    mainMessage += sourceLine;
    totalReports += source.reports.length;
  }
  
  mainMessage += `\n📊 *Total Reports Found: ${totalReports}*\n`;
  mainMessage += '\n👉 _All reports will be sent in the following messages._';
  
  messages.push(mainMessage);
  
  // Additional messages contain all reports with details
  let recentReports = '';
  let reportsAdded = 0;
  const MAX_REPORTS_PER_MESSAGE = 5; // Limit per message to avoid hitting Telegram limits
  
  for (const source of sourceSections) {
    if (source.reports.length > 0) {
      // Start a new message section for this source
      let sourceReports = `${source.title}\n\n`;
      let sourceReportsCount = 0;
      
      // Find the report titles and links for this source
      const sourceStartIndex = lines.findIndex(line => line === source.title);
      if (sourceStartIndex !== -1) {
        for (let i = sourceStartIndex + 1; i < lines.length; i++) {
          const line = lines[i];
          if (line.startsWith('### ')) {
            sourceReports += `${line}\n`;
            
            // Get the link and published date if available
            for (let j = i + 1; j < i + 10; j++) {
              if (lines[j] && lines[j].includes('**Link:**')) {
                sourceReports += `${lines[j]}\n`;
              }
              if (lines[j] && lines[j].includes('**Published:**')) {
                sourceReports += `${lines[j]}\n\n`;
                break;
              }
            }
            
            sourceReportsCount++;
            reportsAdded++;
            
            // If we've added enough reports for this message, start a new one
            if (sourceReportsCount >= MAX_REPORTS_PER_MESSAGE) {
              if (recentReports.length > 0) {
                messages.push('📋 *All Reports:*\n\n' + recentReports);
              }
              recentReports = sourceReports;
              sourceReports = '';
              sourceReportsCount = 0;
            } else {
              recentReports += sourceReports;
              sourceReports = `${source.title}\n\n`; // Reset for next batch
            }
          } else if (line.startsWith('## ')) {
            break;
          }
        }
      }
      
      // Add any remaining source reports
      if (sourceReports.length > source.title.length + 4) {
        recentReports += sourceReports;
      }
    }
  }
  
  if (recentReports.length > 0) {
    messages.push('📋 *All Reports:*\n\n' + recentReports);
  }
  
  // Split any message that exceeds size limit
  const finalMessages = [];
  for (const message of messages) {
    if (message.length <= MAX_MESSAGE_SIZE) {
      finalMessages.push(message);
    } else {
      // Split message into chunks
      let remaining = message;
      while (remaining.length > 0) {
        let chunk;
        if (remaining.length <= MAX_MESSAGE_SIZE) {
          chunk = remaining;
          remaining = '';
        } else {
          // Find a good splitting point
          let splitIndex = remaining.lastIndexOf('\n', MAX_MESSAGE_SIZE);
          if (splitIndex === -1) {
            splitIndex = MAX_MESSAGE_SIZE;
          }
          
          chunk = remaining.substring(0, splitIndex);
          remaining = remaining.substring(splitIndex + 1);
          
          // Add continuation marker
          chunk += '\n_(continued)_';
          remaining = '_(continuation)_\n' + remaining;
        }
        
        finalMessages.push(chunk);
      }
    }
  }
  
  return finalMessages;
}

/**
 * Send the supply chain security report to Telegram
 * 
 * @param {string} reportPath - Path to the markdown report file
 * @returns {Promise<void>}
 */
async function sendReportToTelegram(reportPath) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = process.env.TELEGRAM_CHAT_IDS
    ? process.env.TELEGRAM_CHAT_IDS.split(',').map((chatId) => chatId.trim()).filter(Boolean)
    : [];
  
  if (!botToken || chatIds.length === 0) {
    console.log('Telegram notification skipped: Bot token or chat IDs not configured');
    return;
  }
  
  try {
    console.log('Preparing Telegram notification...');
    const reportContent = fs.readFileSync(reportPath, 'utf8');
    const messageChunks = formatReportForTelegram(reportContent);
    
    console.log(`Sending Telegram notification to ${chatIds.length} recipients...`);
    
    for (const chatId of chatIds) {
      for (const [index, chunk] of messageChunks.entries()) {
        console.log(`Sending chunk ${index + 1}/${messageChunks.length} to chat ${chatId}`);
        await sendTelegramMessage(botToken, chatId, chunk);
        
        // Add a small delay between messages to avoid hitting Telegram API limits
        if (messageChunks.length > 1) {
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
      }
      
      // Add a final message with repository link
      const repoUrl = process.env.GITHUB_SERVER_URL + '/' + process.env.GITHUB_REPOSITORY;
      const linkMessage = `📊 *View Today's Full Report*\n${repoUrl}/${reportPath.split('/').slice(-2)[0]}/supply-chain-report.md`;
      await sendTelegramMessage(botToken, chatId, linkMessage);
      
      console.log(`Successfully sent notification to chat ${chatId}`);
    }
    
    console.log('Telegram notifications completed successfully');
  } catch (error) {
    console.error('Error in Telegram notification process:', error.message);
    // Don't fail the workflow if notifications fail
  }
}

module.exports = {
  sendReportToTelegram
};
