# Supply Chain Security Feed (SCS-Feed)

An automated daily monitoring system that aggregates supply chain security news, vulnerabilities, and research from multiple trusted cybersecurity sources.

## 🔍 Overview

This project automatically generates daily reports on supply chain security incidents, malicious packages, dependency vulnerabilities, and related cybersecurity threats. The system monitors multiple RSS feeds and APIs to provide comprehensive coverage of the supply chain security landscape.

## 📊 What We Monitor

### News Sources
- **Bleeping Computer Security** - Latest cybersecurity news and incidents
- **The Hacker News** - Breaking security stories and threat intelligence
- **Schneier on Security** - Expert analysis on security topics
- **Krebs on Security** - Investigative cybersecurity journalism
- **CISA Advisories** - Official US government security advisories

### Research & Intelligence
- **OpenSSF Package Analysis** - Open Source Security Foundation package research
- **Sonatype Security Research** - Commercial security research and threat intelligence

### Keywords Monitored
- Supply chain attacks
- Dependency vulnerabilities
- Malicious packages (npm, PyPI, etc.)
- Software supply chain security
- Backdoors and trojans in dependencies
- Zero-day vulnerabilities affecting dependencies

## 🤖 Automation

The system runs automatically every day at midnight UTC using GitHub Actions. It:

1. **Fetches** latest content from all monitored sources
2. **Filters** content using relevant keywords
3. **Generates** a comprehensive markdown report
4. **Commits** the report to the repository
5. **Alerts** on critical findings (configurable)

## 📁 Repository Structure

```
/
├── .github/workflows/
│   └── daily-supply-chain-reports.yml  # GitHub Actions workflow
├── 2025-06-01/                         # Daily report folders (YYYY-MM-DD)
│   ├── supply-chain-report.md          # Main daily report
│   └── summary.json                    # Report metadata
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

## 📈 Daily Reports

Each daily report includes:

- **Executive Summary** - Overview of findings
- **Source-by-Source Breakdown** - Organized by news source
- **Article Details** - Title, link, publication date, and summary
- **Metadata** - Total findings count and source statistics

### Example Report Structure

```markdown
# Supply Chain Security Daily Report
**Date:** 2025-06-01
**Total Reports Found:** 18

## Summary
This automated report aggregates supply chain security-related news...

## The Hacker News
### 1. New Malicious Package Found in npm Registry
**Link:** [Article Link]
**Published:** June 1, 2025
**Summary:** Brief description of the incident...

## Schneier on Security
### 1. Analysis of Recent Supply Chain Attacks
...
```

## 🚀 Manual Execution

You can manually trigger the workflow:

1. Go to the **Actions** tab in GitHub
2. Select **Daily Supply Chain Security Reports**
3. Click **Run workflow**
4. Choose the branch (usually `main`)
5. Click **Run workflow**

## ⚙️ Configuration

### Environment Variables
- `GITHUB_TOKEN` - Automatically provided by GitHub Actions for repository access

### Customization Options

#### Adding New Sources
Edit the workflow file to add new RSS feeds or APIs:

```javascript
const sources = [
  {
    name: "Your Source Name",
    url: "https://example.com/feed.xml",
    type: "rss",
    keywords: ["supply chain", "security", "vulnerability"]
  }
];
```

#### Modifying Keywords
Update the keywords array to focus on specific threats:

```javascript
keywords: ["supply chain", "dependency", "malicious package", "npm", "pypi"]
```

#### Adjusting Schedule
Modify the cron schedule in the workflow file:

```yaml
on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight UTC
```

## 🔧 Technical Details

### Dependencies
- **Node.js 20** - Runtime environment
- **axios** - HTTP client for API requests
- **cheerio** - HTML parsing (if needed)
- **@octokit/rest** - GitHub API integration
- **rss-parser** - RSS feed parsing

### Rate Limiting
- 1-second delay between source requests
- 10-second timeout per request
- 5-minute total execution timeout

### Error Handling
- Individual source failures don't stop the entire process
- Comprehensive logging for debugging
- Graceful degradation when sources are unavailable

## 📋 Report Format

Reports are generated in Markdown format for easy reading and include:

- **Structured headers** for navigation
- **Direct links** to original articles
- **Publication dates** for temporal context
- **Source attribution** for credibility
- **Summary extraction** for quick scanning

## 🔒 Security Considerations

- No sensitive data is stored in reports
- All external requests use appropriate User-Agent headers
- Rate limiting prevents overwhelming source servers
- Repository permissions are minimal (contents: write)

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with manual workflow execution
5. Submit a pull request

### Suggested Improvements
- Add more security news sources
- Implement severity scoring for findings
- Create GitHub issues for critical alerts
- Add email notifications
- Implement trending analysis
- Add RSS feed output for reports

## 📊 Usage Statistics

The system generates a `summary.json` file daily with:
- Total reports found
- Active sources
- Report file path
- Generation timestamp

## 🐛 Troubleshooting

### Common Issues

**Workflow fails to run:**
- Check GitHub Actions permissions
- Verify YAML syntax
- Review error logs in Actions tab

**No reports generated:**
- Sources may be temporarily unavailable
- Keywords might be too restrictive
- Network connectivity issues

**Reports are empty:**
- No matching content found (normal occurrence)
- All sources returned errors
- Keywords need adjustment

### Debug Mode
Enable verbose logging by modifying the Node.js script to include additional `console.log` statements.

## 📜 License

This project is open source. Please ensure compliance with all monitored sources' terms of service when using their content.

## 🔗 Related Projects

- [OpenSSF Scorecard](https://github.com/ossf/scorecard) - Security health metrics for open source
- [Dependency Check](https://owasp.org/www-project-dependency-check/) - OWASP dependency vulnerability scanner
- [Snyk](https://snyk.io/) - Commercial dependency scanning

## 📞 Support

For issues or questions:
1. Check existing GitHub Issues
2. Review workflow logs in Actions tab
3. Create a new issue with relevant details

---

**Last Updated:** June 1, 2025  
**Automation Status:** ✅ Active (Daily at 00:00 UTC)  
**Latest Report:** [Check Latest Reports](../../tree/main)
