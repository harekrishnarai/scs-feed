const axios = require('axios');

async function fetchGitLabCommits(source) {
  try {
    console.log(`Starting fetch for ${source.name}...`);
    const response = await axios.get(source.url, {
      timeout: 10000, // 10 second timeout
      headers: {
        'User-Agent': 'Supply-Chain-Monitor/1.0',
        'Accept': 'application/json'
      }
    });
    
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    
    // Reset time to start of day for accurate comparison
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const yesterdayStart = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
    
    const recentCommits = response.data
      .filter(commit => {
        const commitDate = new Date(commit.created_at);
        const commitDateStart = new Date(commitDate.getFullYear(), commitDate.getMonth(), commitDate.getDate());
        
        // Only include commits from today or yesterday
        if (commitDateStart < yesterdayStart) {
          return false;
        }
        
        // Filter by keywords if provided
        if (source.keywords && source.keywords.length > 0) {
          const content = (commit.title + ' ' + (commit.message || '')).toLowerCase();
          return source.keywords.some(keyword => content.includes(keyword.toLowerCase()));
        }
        
        return true;
      })
      .slice(0, 3)
      .map(commit => ({
        title: commit.title,
        link: commit.web_url,
        pubDate: commit.created_at,
        summary: commit.message ? commit.message.substring(0, 200) + '...' : 'No summary available',
        source: source.name
      }));
    
    console.log(`Found ${recentCommits.length} relevant items from ${source.name}`);
    return recentCommits;
  } catch (error) {
    console.error(`Error fetching ${source.name}:`, error.message);
    return [];
  }
}

// Test the GitLab function
const gitlabSource = {
  name: "Kali Linux Build Scripts",
  url: "https://gitlab.com/api/v4/projects/kalilinux%2Fbuild-scripts%2Fkali-arm/repository/commits",
  type: "gitlab",
  keywords: ["security", "vulnerability", "exploit", "backdoor", "malware", "supply chain", "supply-chain", "dependency", "package", "build", "script", "penetration", "testing"]
};

console.log('Testing GitLab API access...');
fetchGitLabCommits(gitlabSource)
  .then(results => {
    console.log('GitLab test completed successfully!');
    console.log('Results:', JSON.stringify(results, null, 2));
  })
  .catch(error => {
    console.error('GitLab test failed:', error.message);
  });