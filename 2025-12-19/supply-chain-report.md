# Supply Chain Security Daily Report
**Date:** 2025-12-19
**Total Reports Found:** 13

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Cerebras set to file for US IPO

**Link:** [https://www.reuters.com/business/ai-chip-firm-cerebras-set-file-us-ipo-after-delay-sources-say-2025-12-19/](https://www.reuters.com/business/ai-chip-firm-cerebras-set-file-us-ipo-after-delay-sources-say-2025-12-19/)

**Published:** 12/19/2025

**Summary:** Article URL: https://www.reuters.com/business/ai-chip-firm-cerebras-set-file-us-ipo-after-delay-sources-say-2025-12-19/ Comments URL: https://news.ycombinator.com/item?id=46329147 Points: 1 # Comments: 0

---

### 2. Ask HN: How are you building your MCP servers?

**Link:** [https://news.ycombinator.com/item?id=46329125](https://news.ycombinator.com/item?id=46329125)

**Published:** 12/19/2025

**Summary:** I'm working on an MCP server at my employer so that end users can interact with the system through Claude and ChatGPT. The system has existing REST endpoints that use OAuth scopes. Our naive first approach was adding a thin layer of prompts around these endpoints. We simply exposed all the normal REST endpoints we'd expose to a developer as tools (for example, GET /employees becomes list_employees with a brief description for the LLM). It works well enough; users can fetch data and make updates against the system. However, we're finding that, especially with ChatGPT, this is leading to a few problems: 1. Various actions the user wants to take involve hitting multiple endpoints in sequence. The LLM does not always follow directions to hit these endpoints correctly. As a result, a single tool needs to be responsible for some orchestration if it is to be reliable. 2. Exposing UUIDs of resources to the user is confusing, especially when ChatGPT asks whether it is okay to send that data in a tool call. We're thinking it would be better to identify a resource by a combination of fields that produce a unique, human-meaningful composite key (for example, first/last name versus an employee UUID). 3. OpenAI's lack of vertical UI support means widgets have to support multiple states and handle multiple tool calls. It is not currently possible on their app platform to instruct the LLM to produce a new widget from an existing one; you can only encourage it to make the correct calls in sequence. The more I develop in this area, the more I think MCP tools should diverge from simply wrapping REST endpoints and instead implement more user-friendly and LLM-friendly tools with their own custom logic. Does this align with what others are finding, or is it better to keep the tools as thin wrappers around existing REST endpoints? Where do other engineers see this going? Comments URL: https://news.ycombinator.com/item?id=46329125 Points: 1 # Comments: 0

---

### 3. Why we're taking legal action against SerpApi's unlawful scraping

**Link:** [https://blog.google/technology/safety-security/serpapi-lawsuit/](https://blog.google/technology/safety-security/serpapi-lawsuit/)

**Published:** 12/19/2025

**Summary:** Article URL: https://blog.google/technology/safety-security/serpapi-lawsuit/ Comments URL: https://news.ycombinator.com/item?id=46329109 Points: 3 # Comments: 1

---

### 4. Show HN: Open-Source Browser Use LLM (30B, A3B)

**Link:** [https://huggingface.co/browser-use/bu-30b-a3b-preview](https://huggingface.co/browser-use/bu-30b-a3b-preview)

**Published:** 12/19/2025

**Summary:** Our first model brings SoTA Browser Use capabilities in a small and fast model that can be hosted on a single GPU. It’s much much faster than anything out there and around 15x cheaper than Sonnet 4.5. The wonderful name comes from: 30B parameters, 3B active, SoTA quality at real-time speed (and the model is based on Qwen/Qwen3-VL-30B-A3B-Instruct). This model is heavily trained to be used with browser-use OSS library and provides comprehensive browsing capabilities with superior DOM understanding and visual reasoning. Comments URL: https://news.ycombinator.com/item?id=46329054 Points: 1 # Comments: 0

---

## The Hacker News

### 1. Cracked Software and YouTube Videos Spread CountLoader and GachiLoader Malware

**Link:** [https://thehackernews.com/2025/12/cracked-software-and-youtube-videos.html](https://thehackernews.com/2025/12/cracked-software-and-youtube-videos.html)

**Published:** 12/19/2025

**Summary:** Cybersecurity researchers have disclosed details of a new campaign that has used cracked software distribution sites as a distribution vector for a new version of a modular and stealthy loader known as CountLoader. The campaign "uses CountLoader as the initial tool in a multistage attack for access, evasion, and delivery of additional malware families," Cyderes Howler Cell Threat Intelligence

---

### 2. China-Aligned Threat Group Uses Windows Group Policy to Deploy Espionage Malware

**Link:** [https://thehackernews.com/2025/12/china-aligned-threat-group-uses-windows.html](https://thehackernews.com/2025/12/china-aligned-threat-group-uses-windows.html)

**Published:** 12/18/2025

**Summary:** A previously undocumented China-aligned threat cluster dubbed LongNosedGoblin has been attributed to a series of cyber attacks targeting governmental entities in Southeast Asia and Japan. The end goal of these attacks is cyber espionage, Slovak cybersecurity company ESET said in a report published today. The threat activity cluster has been assessed to be active since at least September 2023. "

---

### 3. Kimsuky Spreads DocSwap Android Malware via QR Phishing Posing as Delivery App

**Link:** [https://thehackernews.com/2025/12/kimsuky-spreads-docswap-android-malware.html](https://thehackernews.com/2025/12/kimsuky-spreads-docswap-android-malware.html)

**Published:** 12/18/2025

**Summary:** The North Korean threat actor known as Kimsuky has been linked to a new campaign that distributes a new variant of Android malware called DocSwap via QR codes hosted on phishing sites mimicking Seoul-based logistics firm CJ Logistics (formerly CJ Korea Express). "The threat actor leveraged QR codes and notification pop-ups to lure victims into installing and executing the malware on their mobile

---

### 4. CISA Flags Critical ASUS Live Update Flaw After Evidence of Active Exploitation

**Link:** [https://thehackernews.com/2025/12/cisa-flags-critical-asus-live-update.html](https://thehackernews.com/2025/12/cisa-flags-critical-asus-live-update.html)

**Published:** 12/18/2025

**Summary:** The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday added a critical flaw impacting ASUS Live Update to its Known Exploited Vulnerabilities (KEV) catalog, citing evidence of active exploitation. The vulnerability, tracked as CVE-2025-59374 (CVSS score: 9.3), has been described as an "embedded malicious code vulnerability" introduced by means of a supply chain compromise

---

## Bleeping Computer Security

### 1. University of Sydney suffers data breach exposing student and staff info

**Link:** [https://www.bleepingcomputer.com/news/security/university-of-sydney-suffers-data-breach-exposing-student-and-staff-info/](https://www.bleepingcomputer.com/news/security/university-of-sydney-suffers-data-breach-exposing-student-and-staff-info/)

**Published:** 12/18/2025

**Summary:** Hackers gained access to an online coding repository belonging to the University of Sydney and stole files with personal information of staff and students. [...]

---

## Schneier on Security

### 1. Someone Boarded a Plane at Heathrow Without a Ticket or Passport

**Link:** [https://www.schneier.com/blog/archives/2025/12/someone-boarded-a-plane-at-heathrow-without-a-ticket-or-passport.html](https://www.schneier.com/blog/archives/2025/12/someone-boarded-a-plane-at-heathrow-without-a-ticket-or-passport.html)

**Published:** 12/18/2025

**Summary:** I’m sure there’s a story here: Sources say the man had tailgated his way through to security screening and passed security, meaning he was not detected carrying any banned items. The man deceived the BA check-in agent by posing as a family member who had their passports and boarding passes inspected in the usual way.

---

## GitGuardian Blog

### 1. Building a Multi-Agent Security Pipeline with Google's A2A Protocol and GitGuardian

**Link:** [https://blog.gitguardian.com/building-a-multi-agent-security-pipeline-with-googles-a2a-protocol-and-gitguardian/](https://blog.gitguardian.com/building-a-multi-agent-security-pipeline-with-googles-a2a-protocol-and-gitguardian/)

**Published:** 12/18/2025

**Summary:** I built a demo showing how to wire up multiple AI agents using Google's Agent Development Kit (ADK) and the A2A protocol, with GitGuardian scanning content for secrets.

---

## Kiuwan Blog

### 1. How SAST and Application Hardening Work Together to Strengthen Software Security

**Link:** [https://www.kiuwan.com/blog/sast-and-application-hardening/](https://www.kiuwan.com/blog/sast-and-application-hardening/)

**Published:** 12/18/2025

**Summary:** Security teams often treat Static Application Security Testing (SAST) and application hardening as separate disciplines. One scans code for vulnerabilities before release; the other protects the running application from tampering and reverse engineering after deployment. In reality, the two approaches complement each other. Together, they close the loop between secure development and secure runtime by […]

---

## Sonatype Security Research

### 1. 2025 Federal Retrospective: The Year of Resilient Innovation

**Link:** [https://www.sonatype.com/blog/2025-federal-retrospective-the-year-of-resilient-innovation](https://www.sonatype.com/blog/2025-federal-retrospective-the-year-of-resilient-innovation)

**Published:** 12/18/2025

**Summary:** Resiliency has been top of mind in 2025, and recent high-profile CVEs serve as holiday reminders that adversaries aren't slowing down. But what changed this year was how the federal community responded. Increasingly, exploitability drove the clock: when vulnerabilities surfaced as actively exploited, agencies leaned on a more operational posture where "Are we exposed?" and "How fast can we fix it?" mattered as much as "How severe is it?" In that environment, 2025 was defined by a single, powerful transition: the shift from planning modernization to executing it at scale. For years, agencies have discussed digital transformation, zero trust, and the promise of AI. This year, those themes moved from strategy decks into day-to-day delivery.

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

**Last Updated:** 2025-12-19T18:41:56.013Z
