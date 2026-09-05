# Supply Chain Security Daily Report
**Date:** 2026-09-05
**Total Reports Found:** 7

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Mapping codebases via 3js force graphs

**Link:** [https://creview.io/](https://creview.io/)

**Published:** 9/5/2026

**Summary:** Article URL: https://creview.io/ Comments URL: https://news.ycombinator.com/item?id=49579145 Points: 2 # Comments: 2

---

### 2. Google skates

**Link:** [https://pluralistic.net/2026/09/05/divorce-court/](https://pluralistic.net/2026/09/05/divorce-court/)

**Published:** 9/5/2026

**Summary:** Article URL: https://pluralistic.net/2026/09/05/divorce-court/ Comments URL: https://news.ycombinator.com/item?id=49579065 Points: 2 # Comments: 0

---

## Schneier on Security

### 1. Friday Squid Blogging: Squid on a Stick at the New York State Fair

**Link:** [https://www.schneier.com/blog/archives/2026/09/friday-squid-blogging-squid-on-a-stick-at-the-new-york-state-fair.html](https://www.schneier.com/blog/archives/2026/09/friday-squid-blogging-squid-on-a-stick-at-the-new-york-state-fair.html)

**Published:** 9/4/2026

**Summary:** Looks tasty. As usual, you can also use this squid post to talk about the security stories in the news that I haven’t covered. Blog moderation policy.

---

### 2. Using a VM to Contain an AI Agent

**Link:** [https://www.schneier.com/blog/archives/2026/09/using-a-vm-to-contain-an-ai-agent.html](https://www.schneier.com/blog/archives/2026/09/using-a-vm-to-contain-an-ai-agent.html)

**Published:** 9/4/2026

**Summary:** It won’t work: My suspicion was that GPT 5.6-Cyber would succeed, but the frequency and manner of its success removed all doubt. We have to reassess sandboxing quality for capable AI agents, and in general the software stack with which they interact. An off-the-shelf VM is not enough to contain a modern, cyber-capable AI agent. There is simply too much attack surface. Even innocuous features (like running with a display) add extra, exploitable attack surface.

---

### 3. Security Vulnerability in a Voting System

**Link:** [https://www.schneier.com/blog/archives/2026/09/security-vulnerability-in-a-voting-system.html](https://www.schneier.com/blog/archives/2026/09/security-vulnerability-in-a-voting-system.html)

**Published:** 9/4/2026

**Summary:** It’s a vulnerability that allows someone to recover the order of ballots cast, newly exploited with AI tools. Nearly four years since the original vulnerability was disclosed, I was still able to use it to analyze voter behavior in Georgia (one of the 21 states that uses affected scanners) in the recent May 2026 primary. Notably, I never touched a voting machine, exploited a network, examined source code, or accessed anything non-public. After pointing a coding agent to the original vulnerability paper, I supplied it with two data sources highlighted in the paper: the early-voting list for each county, and the  “CVR” (cast-vote record) file, containing every ballot and its selections (but not the voters’ names or other identifying information). The CVR file is available upon request, precisely because a public, ballot-level record is what makes election results independently verifiable...

---

### 4. AI Coding Agents Are Installing Unknown/Untrusted Code on Corporate Networks

**Link:** [https://www.schneier.com/blog/archives/2026/09/ai-coding-agents-are-installing-unknown-untrusted-code-on-corporate-networks.html](https://www.schneier.com/blog/archives/2026/09/ai-coding-agents-are-installing-unknown-untrusted-code-on-corporate-networks.html)

**Published:** 9/4/2026

**Summary:** We cannot forget that AI coding agents are not yet trustworthy: Researchers at a stealth startup in Israel scanned 6,214 live domains belonging to defense contractors, Fortune 500, and Big Tech companies. Of the 8,265 llms.txt and llms-full.txt files they found (many sites hosted both an llms.txt and an llms-full.txt file), 120 of them, each on a different site, pointed to one or more code packages or domain names that weren’t registered. To test what happens when an AI agent processes such files, the researchers registered a handful of the unclaimed names and hosted packages that caused any machine executing them to reach out to their server. Within an hour, the researchers received a phone-home response from a Fortune 500 company. Over time, they got a few dozen more, some from more Fortune 500 companies and others from startups. Their beacon also recorded the chain of parent processes that spawned each install, ultimately revealing that coding agents, including Claude, OpenAI’s Codex, and Nous Research’s Hermes, were involved. Anthropic, OpenAI, and Nous Research did not respond to requests for comment by the time of publication...

---

## The Hacker News

### 1. New Ted Backdoor Hides Inside Victims' Own HAProxy Builds to Intercept Web Traffic

**Link:** [https://thehackernews.com/2026/09/new-ted-backdoor-hides-inside-victims.html](https://thehackernews.com/2026/09/new-ted-backdoor-hides-inside-victims.html)

**Published:** 9/4/2026

**Summary:** A previously undocumented Linux toolkit has been found compiled directly into the trojanized HAProxy load balancers of two South Korean organizations, where it intercepted web traffic and served altered pages to selected visitors.  The attackers named the implant ted in debug strings left in the binary. It is not a HAProxy vulnerability, and installing it requires code execution on the host and

---

## About This Report

This report is automatically generated daily by monitoring various cybersecurity news sources, RSS feeds, and research repositories for supply chain security-related content.

**Monitored Sources:**
- Bleeping Computer Security
- The Hacker News
- Schneier on Security
- Krebs on Security
- CISA Advisories
- Endor Labs Blog
- Checkmarx Blog
- GitHub Security Blog
- Cisco Outshift
- JFrog Security Blog
- Kiuwan Blog
- CircleCI Blog
- Socket.dev RSS
- GitGuardian Blog
- StepSecurity Blog
- Hacker News
- Sonatype Security Research

**Keywords Monitored:** supply chain, dependency, package, malicious package, software supply, npm, pypi, backdoor, vulnerability

**Last Updated:** 2026-09-05T18:34:14.750Z
