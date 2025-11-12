# Supply Chain Security Daily Report
**Date:** 2025-11-12
**Total Reports Found:** 22

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Ask HN: What's your way to deploy ComfyUI to production?

**Link:** [https://news.ycombinator.com/item?id=45903927](https://news.ycombinator.com/item?id=45903927)

**Published:** 11/12/2025

**Summary:** We're working with a customer who needs to rapidly iterate on ComfyUI graphs locally and deploy them to production. The biggest pains we're seeing:  - managing custom node dependencies - GPU cold starts - API wrapper complexity - version control across environments. Curious how others are solving this ? are you using RunPod/Modal/Replicate serverless, self-hosting with Docker, or something else? What are the biggest bottlenecks you're hitting? Comments URL: https://news.ycombinator.com/item?id=45903927 Points: 1 # Comments: 0

---

### 2. Debating Modern Postgres Architectures: Shared Nothing vs. Shared Everything

**Link:** [https://news.ycombinator.com/item?id=45903862](https://news.ycombinator.com/item?id=45903862)

**Published:** 11/12/2025

**Summary:** Over the past few months, a couple Postgres Bare Metal (NVMe) offerings have been released. I’ve been thinking a lot about shared-nothing (serverless) versus shared-everything (bare-metal) architectures. I also went through the technical architectures of a few existing open-source serverless solutions and gained a good understanding of their internals. The multi-tenant storage layer provides great flexibility for features like instant provisioning and instant forking, but achieving true serverless inevitably means sacrificing some latency (even with aggressive prefetching). The architecture involves several components, such as the safekeeper (for WAL), page server (for heap), cold storage (S3), and more, each adding some overhead. This results in additional latency across the network, compute (page server), and storage (S3) layers. This also offers the ability to price very low. With Bare Metal, storage is tightly coupled with compute, and disk access happens on the order of microseconds rather than milliseconds. I view the disk (specially with NVMe) almost as a second-level memory, which can significantly improve performance when a Postgres workload is memory bound leading to dis -access i. However, this architecture offers less flexibility in scaling, storage and compute must scale together, and presents challenges for instant provisioning and forking. That said, one could argue that cloud providers have evolved considerably, offering a broad range of bare-metal instance types. There’s a user base that finds value in both Serverless and Base Metal architectures. I see serverless as being best suited for customers who prioritize flexibility, aren’t super latency sensitive and don’t anticipate scaling significantly in the near to medium term, where memory or disk might become a bottleneck. In contrast, Bare Metal can greatly benefit workloads that are expected to scale rapidly and where memory or disk performance becomes a critical factor. Coming to my views on the future, I lean toward shared-everything (Metal) over shared-nothing (serverless), especially for OLTP workloads, where tail latencies really matter, and in contrast to OLAP workloads, every millisecond matters. I find Bare Metal to offer significantly better efficiency (price and performance at scale) while still providing enough flexibility. Metal also stays native to open-source Postgres, no forks or brittle extensions, which means it can keep up with the fast improvements happening in Postgres’ storage layer: async I/O, better checkpoints, vacuum, logical replication, and many other features. From my experience working with thousands of Postgres customers at Citus, Microsoft, and ClickHouse, memory and disk I/O are always the biggest pain points as they scale. Metal helps address this, enabling customers to scale 2x–10x more efficiently as they grow. This need is even more pressing in today’s AI-driven world, where customers are and will hit memory and disk limits much sooner than before. As AI adoption accelerates and more companies make AI accessible across thousands of verticals, it’s becoming clear that planning for scale from day one is no longer optional, it’s essential. When it comes to future innovation in this area, one obvious area is making the powerful Metal/NVMe architecture accessible to everyone — through enterprise-grade managed services, which is already starting to take shape. Next, I think the focus will be on overcoming the flexibility challenges of Bare Metal architectures: how do we lower the cost barrier to entry, enable instant provisioning and forking, achieve infinite scale through approaches like sharding, and more. Comments URL: https://news.ycombinator.com/item?id=45903862 Points: 1 # Comments: 0

---

### 3. Attackers turned Citrix, Cisco 0-day exploits into custom-malware hellscape

**Link:** [https://www.theregister.com/2025/11/12/amazon_cisco_citrix_0day_exploits/](https://www.theregister.com/2025/11/12/amazon_cisco_citrix_0day_exploits/)

**Published:** 11/12/2025

**Summary:** Article URL: https://www.theregister.com/2025/11/12/amazon_cisco_citrix_0day_exploits/ Comments URL: https://news.ycombinator.com/item?id=45903822 Points: 1 # Comments: 0

---

## Bleeping Computer Security

### 1. Windows 11 now supports 3rd-party apps for native passkey management

**Link:** [https://www.bleepingcomputer.com/news/security/windows-11-now-supports-3rd-party-apps-for-native-passkey-management/](https://www.bleepingcomputer.com/news/security/windows-11-now-supports-3rd-party-apps-for-native-passkey-management/)

**Published:** 11/12/2025

**Summary:** Microsoft announced that passwordless authentication is now easier on Windows 11 through native support for third-party passkey managers, the first ones supported being 1Password and Bitwarden. [...]

---

### 2. Rhadamanthys infostealer disrupted as cybercriminals lose server access

**Link:** [https://www.bleepingcomputer.com/news/security/rhadamanthys-infostealer-disrupted-as-cybercriminals-lose-server-access/](https://www.bleepingcomputer.com/news/security/rhadamanthys-infostealer-disrupted-as-cybercriminals-lose-server-access/)

**Published:** 11/12/2025

**Summary:** The Rhadamanthys infostealer operation has been disrupted, with numerous "customers" of the malware-as-a-service reporting that they no longer have access to their servers. [...]

---

## StepSecurity Blog

### 1. Introducing npm Package Search: Find Where Any Package Was Introduced Across Your GitHub Organizations 

**Link:** [https://www.stepsecurity.io/blog/introducing-npm-package-search-find-where-any-package-was-introduced-across-your-github-organizations](https://www.stepsecurity.io/blog/introducing-npm-package-search-find-where-any-package-was-introduced-across-your-github-organizations)

**Published:** 11/12/2025

**Summary:** Instantly trace any npm package to its origin—across every repository, pull request, and contributor—with StepSecurity’s NPM Package Search.

---

## Endor Labs Blog

### 1. Code-to-Cloud Application Risk Management with Upwind and Endor Labs | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/code-to-cloud-application-risk-management-with-upwind-and-endor-labs](https://www.endorlabs.com/learn/code-to-cloud-application-risk-management-with-upwind-and-endor-labs)

**Published:** 11/12/2025

**Summary:** Together Endor Labs and Upwind deliver complete visibility across code and cloud for strong security posture management across the SLDC.

---

### 2. Happier DOMs: The perils of running untrusted JavaScript code outside of a web browser  | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/happier-doms-the-perils-of-running-untrusted-javascript-code-outside-of-a-web-browser](https://www.endorlabs.com/learn/happier-doms-the-perils-of-running-untrusted-javascript-code-outside-of-a-web-browser)

**Published:** 11/11/2025

**Summary:** Endor Labs reveals critical RCE flaws in Happy DOM, showing how weak JavaScript sandboxes enable prototype pollution and unsafe code execution in Node.js.

---

### 3. The Great Indonesian TEA Theft: Analyzing a NPM Spam Campaign | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/the-great-indonesian-tea-theft-analyzing-a-npm-spam-campaign](https://www.endorlabs.com/learn/the-great-indonesian-tea-theft-analyzing-a-npm-spam-campaign)

**Published:** 11/11/2025

**Summary:** How a sophisticated spam campaign hijacked popular NPM packages with Indonesian food names as part of a global software supply chain attack.

---

### 4. Critical SQL Injection Vulnerability in Django (CVE-2025-64459)  | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/critical-sql-injection-vulnerability-in-django-cve-2025-64459](https://www.endorlabs.com/learn/critical-sql-injection-vulnerability-in-django-cve-2025-64459)

**Published:** 11/11/2025

**Summary:** Critical SQL Injection Vulnerability in Django (CVE-2025-64459). Learn what happened, root cause, impact, and how to mitigate.

---

## Sonatype Security Research

### 1. Mastering Software Governance in Air-Gapped Critical Mission Environments

**Link:** [https://www.sonatype.com/blog/mastering-software-governance-in-air-gapped-critical-mission-environments](https://www.sonatype.com/blog/mastering-software-governance-in-air-gapped-critical-mission-environments)

**Published:** 11/12/2025

**Summary:** In national security and defense, air-gapped networks remain the gold standard for protecting mission-critical systems. By physically isolating networks from external connectivity, they're protected against remote intrusion, espionage, and supply chain compromise. For programs that operate under DoD Impact Level 6 (IL6), NATO Secret, GEHEIM, or similar constraints, this isolation is non-negotiable.

---

### 2. Stop Open Source Malware at the Gate with Repository Firewall

**Link:** [https://www.sonatype.com/blog/stop-open-source-malware-at-the-gate-with-repository-firewall](https://www.sonatype.com/blog/stop-open-source-malware-at-the-gate-with-repository-firewall)

**Published:** 11/11/2025

**Summary:** Open source components form the backbone of innovation, but they also introduce significant security risks.

---

## GitGuardian Blog

### 1. Queen City Con 0x3: Hacking And Embracing Resiliency

**Link:** [https://blog.gitguardian.com/queen-city-con-0x3/](https://blog.gitguardian.com/queen-city-con-0x3/)

**Published:** 11/12/2025

**Summary:** Queen City Con 2025 highlighted identity, cloud risk, and detection gaps. Learn why defaults and identity sprawl, not zero-days, are still the greatest security threat.

---

### 2. Q3 2025: NHI Security Gets More Real

**Link:** [https://blog.gitguardian.com/q3-2025-nhi-security-gets-more-real/](https://blog.gitguardian.com/q3-2025-nhi-security-gets-more-real/)

**Published:** 11/11/2025

**Summary:** Unified Non-Human Identity (NHI) security platform now features integrated Public Monitoring, one-click secret revocation for GitHub/GitLab/OpenAI, and enhanced graph intelligence. Close the attack window with automated remediation and expanded visibility.

---

## The Hacker News

### 1. Amazon Uncovers Attacks Exploited Cisco ISE and Citrix NetScaler as Zero-Day Flaws

**Link:** [https://thehackernews.com/2025/11/amazon-uncovers-attacks-exploited-cisco.html](https://thehackernews.com/2025/11/amazon-uncovers-attacks-exploited-cisco.html)

**Published:** 11/12/2025

**Summary:** Amazon's threat intelligence team on Wednesday disclosed that it observed an advanced threat actor exploiting two then-zero-day security flaws in Cisco Identity Service Engine (ISE) and Citrix NetScaler ADC products as part of attacks designed to deliver custom malware. "This discovery highlights the trend of threat actors focusing on critical identity and network access control infrastructure –

---

### 2. Active Directory Under Siege: Why Critical Infrastructure Needs Stronger Security

**Link:** [https://thehackernews.com/2025/11/active-directory-under-siege-why.html](https://thehackernews.com/2025/11/active-directory-under-siege-why.html)

**Published:** 11/12/2025

**Summary:** Active Directory remains the authentication backbone for over 90% of Fortune 1000 companies. AD's importance has grown as companies adopt hybrid and cloud infrastructure, but so has its complexity. Every application, user, and device traces back to AD for authentication and authorization, making it the ultimate target. For attackers, it represents the holy grail: compromise Active

---

### 3. WhatsApp Malware 'Maverick' Hijacks Browser Sessions to Target Brazil's Biggest Banks

**Link:** [https://thehackernews.com/2025/11/whatsapp-malware-maverick-hijacks.html](https://thehackernews.com/2025/11/whatsapp-malware-maverick-hijacks.html)

**Published:** 11/11/2025

**Summary:** Threat hunters have uncovered similarities between a banking malware called Coyote and a newly disclosed malicious program dubbed Maverick that has been propagated via WhatsApp. According to a report from CyberProof, both malware strains are written in .NET, target Brazilian users and banks, and feature identical functionality to decrypt, targeting banking URLs and monitor banking applications.

---

### 4. GootLoader Is Back, Using a New Font Trick to Hide Malware on WordPress Sites

**Link:** [https://thehackernews.com/2025/11/gootloader-is-back-using-new-font-trick.html](https://thehackernews.com/2025/11/gootloader-is-back-using-new-font-trick.html)

**Published:** 11/11/2025

**Summary:** The malware known as GootLoader has resurfaced yet again after a brief spike in activity earlier this March, according to new findings from Huntress. The cybersecurity company said it observed three GootLoader infections since October 27, 2025, out of which two resulted in hands-on keyboard intrusions with domain controller compromise taking place within 17 hours of initial infection. "

---

### 5. CISO's Expert Guide To AI Supply Chain Attacks

**Link:** [https://thehackernews.com/2025/11/cisos-expert-guide-to-ai-supply-chain.html](https://thehackernews.com/2025/11/cisos-expert-guide-to-ai-supply-chain.html)

**Published:** 11/11/2025

**Summary:** AI-enabled supply chain attacks jumped 156% last year. Discover why traditional defenses are failing and what CISOs must do now to protect their organizations. Download the full CISO’s expert guide to AI Supply chain attacks here.  TL;DR  AI-enabled supply chain attacks are exploding in scale and sophistication - Malicious package uploads to open-source repositories jumped 156% in

---

## Schneier on Security

### 1. On Hacking Back

**Link:** [https://www.schneier.com/blog/archives/2025/11/on-hacking-back.html](https://www.schneier.com/blog/archives/2025/11/on-hacking-back.html)

**Published:** 11/12/2025

**Summary:** Former DoJ attorney John Carlin writes about hackback, which he defines thus: “A hack back is a type of cyber response that incorporates a counterattack designed to proactively engage with, disable, or collect evidence about an attacker. Although hack backs can take on various forms, they are—­by definition­—not passive defensive measures.” His conclusion: As the law currently stands, specific forms of purely defense measures are authorized so long as they affect only the victim’s system or data. At the other end of the spectrum, offensive measures that involve accessing or otherwise causing damage or loss to the hacker’s systems are likely prohibited, absent government oversight or authorization. And even then parties should proceed with caution in light of the heightened risks of misattribution, collateral damage, and retaliation...

---

## JFrog Security Blog

### 1. The Security Imperative: Trust, Speed, and Integral Defense

**Link:** [https://jfrog.com/blog/the-security-imperative-trust-speed-integral-defense/](https://jfrog.com/blog/the-security-imperative-trust-speed-integral-defense/)

**Published:** 11/11/2025

**Summary:** The systemic nature of software supply chain attacks is growing more complex, creating a critical tension between speed and security. The Israeli National Cyber Directorate’s (INCD) recent “Breaking the Chain” report validates that the most significant threats live outside your first-party code, highlighting a crisis of trust in the open-source-software (OSS) supply chain. While the …

---

## Kiuwan Blog

### 1. 12 Ways AI Is Improving Cloud Security

**Link:** [https://www.kiuwan.com/blog/ai-in-cloud-security/](https://www.kiuwan.com/blog/ai-in-cloud-security/)

**Published:** 11/11/2025

**Summary:** As both AI and cyberattacks grow in sophistication, traditional security methods designed for static, on-premises environments no longer cut it.  AI in cloud security helps teams spot threats in real time, anticipate risks before they escalate, and respond automatically—giving defenders a fighting chance against attackers who are also using automation to move faster. The good […]

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

**Last Updated:** 2025-11-12T18:39:17.489Z
