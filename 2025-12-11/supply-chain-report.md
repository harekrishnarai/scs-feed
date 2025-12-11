# Supply Chain Security Daily Report
**Date:** 2025-12-11
**Total Reports Found:** 17

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: CyberCage – Security platform for AI tools and MCP servers

**Link:** [https://cybercage.io/](https://cybercage.io/)

**Published:** 12/11/2025

**Summary:** We've been building with AI tools and noticed there wasn't a good way to manage MCP servers across a team or see what's actually flowing to LLM providers. Who's running what? Which tools are approved? What data is going where? So we built CyberCage (https://cybercage.io). # What it does: ## MCP Management - Auto or manual discovery of MCP servers, with approval workflows - Manage allowed MCP servers org-wide (down to individual tools) - Secure MCP catalog (integrates with GitHub's MCP Catalog) ## Operations - Manage allowed AI applications org-wide - Full audit logs (Splunk integration available) - Notifications via Slack, Teams, Webex, webhooks # Works with: - AI IDEs: Claude Code, Cursor, VS Code, Windsurf, Antigravity - Low-code platforms: n8n (native integration) # In private beta: - On-device network agent for configured AI domains - Content inspection for PII and sensitive data - Packet metadata anomaly analysis # Coming soon: - BYOLLM (bring your own models for inspection) - Browser extensions We built this for visibility and control over AI tooling without slowing teams down. P.S. We're planning to open source CyberSmol v1.0, a small model fine-tuned for modern AI threat detection, once it's ready. Happy to answer questions ♥ Comments URL: https://news.ycombinator.com/item?id=46235072 Points: 3 # Comments: 1

---

### 2. Show HN: Security audit that checks what other tools miss

**Link:** [https://domainoptic.com/](https://domainoptic.com/)

**Published:** 12/11/2025

**Summary:** Built this after almost shipping Stripe key in a production bundle. It runs 6 checks in a few seconds: - SSL Certificate - validity, expiration, protocol - DNS Health - SPF, DKIM, DMARC (email spoofing protection)   - Security Headers - CSP, HSTS, X-Frame-Options - Blacklist Status - spam/malware list checks - Secret Scanner - finds leaked API keys in public JS bundles (AWS, Stripe, Firebase, etc.) - Ghost API Hunter - exposed Swagger docs, GraphQL endpoints, debug routes Everything gets A+ to F grades with plain English explanations. The last two are the differentiators, most SSL checkers exist, but few tools passively scan your frontend for shipped secrets or forgotten /api endpoints. Free, no signup. Looking for feedback on false positive rates and what other checks would be useful. Comments URL: https://news.ycombinator.com/item?id=46235067 Points: 1 # Comments: 0

---

### 3. Comparing AI Agents to Cybersecurity Professionals in Real-World Pen Testing

**Link:** [https://arxiv.org/abs/2512.09882](https://arxiv.org/abs/2512.09882)

**Published:** 12/11/2025

**Summary:** Article URL: https://arxiv.org/abs/2512.09882 Comments URL: https://news.ycombinator.com/item?id=46235022 Points: 1 # Comments: 1

---

### 4. Marco Rubio bans Calibri font at State Department for being too DEI

**Link:** [https://techcrunch.com/2025/12/10/marco-rubio-bans-calibri-font-at-state-department-for-being-too-dei/](https://techcrunch.com/2025/12/10/marco-rubio-bans-calibri-font-at-state-department-for-being-too-dei/)

**Published:** 12/11/2025

**Summary:** Article URL: https://techcrunch.com/2025/12/10/marco-rubio-bans-calibri-font-at-state-department-for-being-too-dei/ Comments URL: https://news.ycombinator.com/item?id=46235003 Points: 1 # Comments: 0

---

### 5. Over 10k Docker Hub images found leaking credentials, auth keys

**Link:** [https://www.bleepingcomputer.com/news/security/over-10-000-docker-hub-images-found-leaking-credentials-auth-keys/](https://www.bleepingcomputer.com/news/security/over-10-000-docker-hub-images-found-leaking-credentials-auth-keys/)

**Published:** 12/11/2025

**Summary:** Article URL: https://www.bleepingcomputer.com/news/security/over-10-000-docker-hub-images-found-leaking-credentials-auth-keys/ Comments URL: https://news.ycombinator.com/item?id=46234960 Points: 3 # Comments: 0

---

## StepSecurity Blog

### 1.  StepSecurity Is Now Available on Azure Marketplace 

**Link:** [https://www.stepsecurity.io/blog/stepsecurity-is-now-available-on-azure-marketplace](https://www.stepsecurity.io/blog/stepsecurity-is-now-available-on-azure-marketplace)

**Published:** 12/11/2025

**Summary:** The StepSecurity App is now available on Azure Marketplace—simplifying procurement, deployment, and CI/CD security in one place.

---

## Schneier on Security

### 1. AIs Exploiting Smart Contracts

**Link:** [https://www.schneier.com/blog/archives/2025/12/ais-exploiting-smart-contracts.html](https://www.schneier.com/blog/archives/2025/12/ais-exploiting-smart-contracts.html)

**Published:** 12/11/2025

**Summary:** I have long maintained that smart contracts are a dumb idea: that a human process is actually a security feature. Here’s some interesting research on training AIs to automatically exploit smart contracts: AI models are increasingly good at cyber tasks, as we’ve written about before. But what is the economic impact of these capabilities? In a recent MATS and Anthropic Fellows project, our scholars investigated this question by evaluating AI agents’ ability to exploit smart contracts on Smart CONtracts Exploitation benchmark (SCONE-bench)­a new benchmark they built comprising 405 contracts that were actually exploited between 2020 and 2025. On contracts exploited after the latest knowledge cutoffs (June 2025 for Opus 4.5 and March 2025 for other models), Claude Opus 4.5, Claude Sonnet 4.5, and GPT-5 developed exploits collectively worth $4.6 million, establishing a concrete lower bound for the economic harm these capabilities could enable. Going beyond retrospective analysis, we evaluated both Sonnet 4.5 and GPT-5 in simulation against 2,849 recently deployed contracts without any known vulnerabilities. Both agents uncovered two novel zero-day vulnerabilities and produced exploits worth $3,694, with GPT-5 doing so at an API cost of $3,476. This demonstrates as a proof-of-concept that profitable, real-world autonomous exploitation is technically feasible, a finding that underscores the need for proactive adoption of AI for defense...

---

## Kiuwan Blog

### 1. 5 Code Review Tools for Better Software Quality

**Link:** [https://www.kiuwan.com/blog/code-review-tools/](https://www.kiuwan.com/blog/code-review-tools/)

**Published:** 12/11/2025

**Summary:** Code review tools come in many forms—manual, automated, or even AI-driven. Regardless of the format, the goal is the same: catch bugs early, enforce standards, maintain traceability, and ship better code. The right choice depends on your codebase, workflow, industry, and, most importantly, your review model. In this guide, we’ll review GitHub, Gerrit, Patchwork Tracking […]

---

## The Hacker News

### 1. ThreatsDay Bulletin: Spyware Alerts, Mirai Strikes, Docker Leaks, ValleyRAT Rootkit — and 20 More Stories

**Link:** [https://thehackernews.com/2025/12/threatsday-bulletin-spyware-alerts.html](https://thehackernews.com/2025/12/threatsday-bulletin-spyware-alerts.html)

**Published:** 12/11/2025

**Summary:** This week’s cyber stories show how fast the online world can turn risky. Hackers are sneaking malware into movie downloads, browser add-ons, and even software updates people trust. Tech giants and governments are racing to plug new holes while arguing over privacy and control. And researchers keep uncovering just how much of our digital life is still wide open. The new Threatsday Bulletin

---

### 2. NANOREMOTE Malware Uses Google Drive API for Hidden Control on Windows Systems

**Link:** [https://thehackernews.com/2025/12/nanoremote-malware-uses-google-drive.html](https://thehackernews.com/2025/12/nanoremote-malware-uses-google-drive.html)

**Published:** 12/11/2025

**Summary:** Cybersecurity researchers have disclosed details of a new fully-featured Windows backdoor called NANOREMOTE that uses the Google Drive API for command-and-control (C2) purposes. According to a report from Elastic Security Labs, the malware shares code similarities with another implant codenamed FINALDRAFT (aka Squidoor) that employs Microsoft Graph API for C2. FINALDRAFT is attributed to a

---

### 3. WIRTE Leverages AshenLoader Sideloading to Install the AshTag Espionage Backdoor

**Link:** [https://thehackernews.com/2025/12/wirte-leverages-ashenloader-sideloading.html](https://thehackernews.com/2025/12/wirte-leverages-ashenloader-sideloading.html)

**Published:** 12/11/2025

**Summary:** An advanced persistent threat (APT) known as WIRTE has been attributed to attacks targeting government and diplomatic entities across the Middle East with a previously undocumented malware suite dubbed AshTag since 2020. Palo Alto Networks Unit 42 is tracking the activity cluster under the name Ashen Lepus. Artifacts uploaded to the VirusTotal platform show that the threat actor has trained its

---

### 4. Unpatched Gogs Zero-Day Exploited Across 700+ Instances Amid Active Attacks

**Link:** [https://thehackernews.com/2025/12/unpatched-gogs-zero-day-exploited.html](https://thehackernews.com/2025/12/unpatched-gogs-zero-day-exploited.html)

**Published:** 12/11/2025

**Summary:** A high-severity unpatched security vulnerability in Gogs has come under active exploitation, with more than 700 compromised instances accessible over the internet, according to new findings from Wiz. The flaw, tracked as CVE-2025-8110 (CVSS score: 8.7), is a case of file overwrite in the file update API of the Go-based self-hosted Git service. A fix for the issue is said to be currently in the

---

### 5. Chrome Targeted by Active In-the-Wild Exploit Tied to Undisclosed High-Severity Flaw

**Link:** [https://thehackernews.com/2025/12/chrome-targeted-by-active-in-wild.html](https://thehackernews.com/2025/12/chrome-targeted-by-active-in-wild.html)

**Published:** 12/11/2025

**Summary:** Google on Wednesday shipped security updates for its Chrome browser to address three security flaws, including one it said has come under active exploitation in the wild. The vulnerability, rated high in severity, is being tracked under the Chromium issue tracker ID "466192044." Unlike other disclosures, Google has opted to keep information about the CVE identifier, the affected component, and

---

## Endor Labs Blog

### 1. Rubrik Hits Aggressive SLAs via Endor Labs | Customer Story | Endor Labs

**Link:** [https://www.endorlabs.com/learn/rubrik-hits-aggressive-slas-via-endor-labs](https://www.endorlabs.com/learn/rubrik-hits-aggressive-slas-via-endor-labs)

**Published:** 12/10/2025

**Summary:** Rubrik uses Endor Labs for application security, including: SCA, SAST, container scanning, and secret detection.

---

## Bleeping Computer Security

### 1. Why a secure software development life cycle is critical for manufacturers

**Link:** [https://www.bleepingcomputer.com/news/security/why-a-secure-software-development-life-cycle-is-critical-for-manufacturers/](https://www.bleepingcomputer.com/news/security/why-a-secure-software-development-life-cycle-is-critical-for-manufacturers/)

**Published:** 12/10/2025

**Summary:** Recent supply-chain breaches show how attackers exploit development tools, compromised credentials, and malicious NPM packages to infiltrate manufacturing and production environments. Acronis explains why secure software development life cycle (SSDLC) practices are now critical for evaluating partners and protecting systems. [...]

---

## GitGuardian Blog

### 1. How To Use ggshield To Avoid Hardcoded Secrets [cheat sheet included]

**Link:** [https://blog.gitguardian.com/how-to-use-ggshield-to-avoid-hardcoded-secrets-cheat-sheet-included/](https://blog.gitguardian.com/how-to-use-ggshield-to-avoid-hardcoded-secrets-cheat-sheet-included/)

**Published:** 12/10/2025

**Summary:** ggshield, GitGuardian’s CLI, can help you keep your secrets out of your repos, pipelines, and much more. Download our handy cheat sheet to help you make the most out of our CLI.

---

## Sonatype Security Research

### 1. Unnecessary Risk: The Persistence of Open Source Vulnerabilities

**Link:** [https://www.sonatype.com/blog/unnecessary-risk-the-persistence-of-open-source-vulnerabilities](https://www.sonatype.com/blog/unnecessary-risk-the-persistence-of-open-source-vulnerabilities)

**Published:** 12/10/2025

**Summary:** Log4Shell was supposed to be the wake-up call that changed everything. Four years later, the data says otherwise.

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

**Last Updated:** 2025-12-11T18:42:54.424Z
