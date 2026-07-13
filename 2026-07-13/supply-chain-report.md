# Supply Chain Security Daily Report
**Date:** 2026-07-13
**Total Reports Found:** 14

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: kassette – Durable agent workflows backed by object storage

**Link:** [https://github.com/lostinpatterns/kassette](https://github.com/lostinpatterns/kassette)

**Published:** 7/13/2026

**Summary:** Agent runs often fail after expensive model calls and executing tools that have real-world side effects. This problem is made even worse by how common it is to deploy agents to serverless environments. When your agent dies, it needs to be restarted, but doing so safely isn't easy and everyone building agents has to solve this same problem of durability. The stack you're running probably already has half of what you need for durable execution already though, ie, a queue or job runner that can invoke work at least once. kassette gives you the other half by journaling completed steps to object storage (or a filesystem) so that it can replay them when you retry the same run again. This means you can have durability without having to add a workflow service or even a SQL database. kassette is a tiny, zero-dependency TypeScript library that you can use to build agentic workflows that are just ordinary async functions. Each object storage backed run is a single object that serializes appends via CAS while session numbers fence zombies. Agentic workloads are usually dominated by (relatively) small number of slow llm/tool calls or waiting on approval so this simple design (writes grow large, full journal in a single read) has worked well (more here: https://lostinpatterns.github.io/kassette/docs/object-storag...). repo: https://github.com/lostinpatterns/kassette docs: https://lostinpatterns.github.io/kassette/ Comments URL: https://news.ycombinator.com/item?id=48896793 Points: 2 # Comments: 0

---

### 2. Claude Brute Force attacked my Excel File and opened it

**Link:** [https://www.banyanoutcomes.com/attention/2026-07-13-claude-brute-force-password-encrypted-excel-file/](https://www.banyanoutcomes.com/attention/2026-07-13-claude-brute-force-password-encrypted-excel-file/)

**Published:** 7/13/2026

**Summary:** Article URL: https://www.banyanoutcomes.com/attention/2026-07-13-claude-brute-force-password-encrypted-excel-file/ Comments URL: https://news.ycombinator.com/item?id=48896781 Points: 1 # Comments: 0

---

### 3. Show HN: Ankole – Claude Tag open source alternative

**Link:** [https://github.com/AgentBull/ankole](https://github.com/AgentBull/ankole)

**Published:** 7/13/2026

**Summary:** Article URL: https://github.com/AgentBull/ankole Comments URL: https://news.ycombinator.com/item?id=48896706 Points: 1 # Comments: 0

---

## Endor Labs Blog

### 1. When AI Imports Vulnerable Dependencies: Securing AI-Generated Code | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/when-ai-imports-vulnerable-dependencies-securing-ai-generated-code](https://www.endorlabs.com/learn/when-ai-imports-vulnerable-dependencies-securing-ai-generated-code)

**Published:** 7/13/2026

**Summary:** When AI Imports Vulnerable Dependencies: Securing AI-Generated Code

---

### 2. Securing Open Source Dependencies: A Developer's Guide | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/securing-open-source-dependencies-a-developers-guide](https://www.endorlabs.com/learn/securing-open-source-dependencies-a-developers-guide)

**Published:** 7/13/2026

**Summary:** Securing Open Source Dependencies: A Developer's Guide

---

### 3. Dependency Confusion: How Attackers Poison Your Build | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/dependency-confusion-how-attackers-poison-your-build](https://www.endorlabs.com/learn/dependency-confusion-how-attackers-poison-your-build)

**Published:** 7/13/2026

**Summary:** Dependency Confusion: How Attackers Poison Your Build

---

### 4. AI-Generated Malware and the Software Supply Chain | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/ai-generated-malware-and-the-software-supply-chain](https://www.endorlabs.com/learn/ai-generated-malware-and-the-software-supply-chain)

**Published:** 7/13/2026

**Summary:** AI-Generated Malware and the Software Supply Chain

---

### 5. Slopsquatting: When AI Agents Hallucinate Malicious Packages | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/slopsquatting-when-ai-agents-hallucinate-malicious-packages](https://www.endorlabs.com/learn/slopsquatting-when-ai-agents-hallucinate-malicious-packages)

**Published:** 7/13/2026

**Summary:** Slopsquatting: When AI Agents Hallucinate Malicious Packages

---

## The Hacker News

### 1. CrashStealer macOS Malware Uses Notarized Dropper to Pass Gatekeeper Checks

**Link:** [https://thehackernews.com/2026/07/crashstealer-macos-malware-uses.html](https://thehackernews.com/2026/07/crashstealer-macos-malware-uses.html)

**Published:** 7/13/2026

**Summary:** Cybersecurity researchers have flagged a new macOS information stealer called CrashStealer that's capable of harvesting sensitive data from compromised systems.  Unlike other information stealers that are built on AppleScript droppers or Objective-C-based wrappers, CrashStealer is implemented in native C++, according to Jamf Threat Labs.  "It validates the victim's login password locally before

---

### 2. Forg365 PhaaS Targets Microsoft 365 with Device Code and AitM Session Theft

**Link:** [https://thehackernews.com/2026/07/forg365-phaas-targets-microsoft-365.html](https://thehackernews.com/2026/07/forg365-phaas-targets-microsoft-365.html)

**Published:** 7/13/2026

**Summary:** A new phishing-as-a-service (PhaaS) operation called Forg365 is using a combination of device code phishing, adversary-in-the-middle (AitM) tactics, antibot evasion, artificial intelligence (AI)-assisted lure creation, and post-compromise mailbox operations targeting Microsoft 365 accounts.  Distributed via Telegram and costing $400 a month (or $3,800 per year), attack chains leverage phishing

---

## Krebs on Security

### 1. Lessons Learned from CISA’s Recent GitHub Leak

**Link:** [https://krebsonsecurity.com/2026/07/lessons-learned-from-cisas-recent-github-leak/](https://krebsonsecurity.com/2026/07/lessons-learned-from-cisas-recent-github-leak/)

**Published:** 7/13/2026

**Summary:** The Cybersecurity and Infrastructure Security Agency (CISA) has issued a postmortem on a data leak in which a contractor published dozens of internal CISA credentials -- including AWS Govcloud keys -- in a public GitHub repository for almost six months before being notified by KrebsOnSecurity. Experts say the gaps identified in the agency's initial response provide important lessons that all security teams should absorb.

---

## StepSecurity Blog

### 1. Introducing Secret Exfiltration Protection for GitHub Actions 

**Link:** [https://www.stepsecurity.io/blog/introducing-secret-exfiltration-protection-for-github-actions](https://www.stepsecurity.io/blog/introducing-secret-exfiltration-protection-for-github-actions)

**Published:** 7/13/2026

**Summary:** StepSecurity now blocks and detects secret exfiltration in GitHub Actions, stopping attacks that plant malicious workflows to steal your repository secrets.

---

### 2. jscrambler npm package publishes malicious preinstall binary

**Link:** [https://www.stepsecurity.io/blog/jscrambler-npm-package-publishes-malicious-preinstall-binary](https://www.stepsecurity.io/blog/jscrambler-npm-package-publishes-malicious-preinstall-binary)

**Published:** 7/12/2026

**Summary:** On July 11, 2026, version 8.14.0 of jscrambler was published to npm carrying a malicious preinstall hook that drops and executes a platform-specific native binary on Linux, Windows, and macOS. jscrambler is the official CLI client for the Jscrambler Code Integrity API, a commercial JavaScript obfuscation and web-app protection service, with a clean version history dating back to 0.1.0. The compromised release was flagged by StepSecurity's AI Release Analyzer with a suspicion score of 0 (the maximum suspicion rating) on publish.

---

## GitGuardian Blog

### 1. What CISA Got Right After Its GitHub Leak: Lessons Every Organization Should Copy

**Link:** [https://blog.gitguardian.com/cisa-github-leak-incident-response-lessons/](https://blog.gitguardian.com/cisa-github-leak-incident-response-lessons/)

**Published:** 7/12/2026

**Summary:** After the CISA GitHub leak, the agency published a candid incident postmortem. Here are six lessons security teams should copy, from secrets scanning to key rotation.

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

**Last Updated:** 2026-07-13T18:57:41.039Z
