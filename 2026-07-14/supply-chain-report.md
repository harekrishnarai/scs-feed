# Supply Chain Security Daily Report
**Date:** 2026-07-14
**Total Reports Found:** 20

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Beyond the Dashboard: Where Competitive Advantage Lives

**Link:** [https://www.library.hbs.edu/working-knowledge/beyond-the-dashboard-where-competitive-advantage-really-lives](https://www.library.hbs.edu/working-knowledge/beyond-the-dashboard-where-competitive-advantage-really-lives)

**Published:** 7/14/2026

**Summary:** Article URL: https://www.library.hbs.edu/working-knowledge/beyond-the-dashboard-where-competitive-advantage-really-lives Comments URL: https://news.ycombinator.com/item?id=48911147 Points: 1 # Comments: 0

---

## StepSecurity Blog

### 1. Coordinated AsyncAPI Supply Chain Attack: Miasma RAT Delivered via Compromised CI/CD Pipelines in Two Repositories

**Link:** [https://www.stepsecurity.io/blog/compromised-next-branch-pushes-malicious-asyncapi-generator-generator-helpers-and-generator-components-to-npm](https://www.stepsecurity.io/blog/compromised-next-branch-pushes-malicious-asyncapi-generator-generator-helpers-and-generator-components-to-npm)

**Published:** 7/14/2026

**Summary:** On July 14, 2026 at 07:10 UTC, three packages in the AsyncAPI generator monorepo (@asyncapi/generator@3.3.1, @asyncapi/generator-helpers@1.1.1, and @asyncapi/generator-components@0.7.1) were published to npm carrying an obfuscated dropper that fires the moment the library is loaded, not on install. The packages were published through the project's own legitimate GitHub Actions release workflow and carry valid npm OIDC provenance attestations, because the attacker didn't steal an npm token: they gained push access to the repository's next branch and let the project's real CI/CD pipeline do the publishing for them.

---

### 2. Introducing Secret Exfiltration Protection for GitHub Actions 

**Link:** [https://www.stepsecurity.io/blog/introducing-secret-exfiltration-protection-for-github-actions](https://www.stepsecurity.io/blog/introducing-secret-exfiltration-protection-for-github-actions)

**Published:** 7/13/2026

**Summary:** StepSecurity now blocks and detects secret exfiltration in GitHub Actions, stopping attacks that plant malicious workflows to steal your repository secrets.

---

## The Hacker News

### 1. LabubaRAT Masquerades as NVIDIA Software to Control Windows Hosts

**Link:** [https://thehackernews.com/2026/07/labubarat-masquerades-as-nvidia.html](https://thehackernews.com/2026/07/labubarat-masquerades-as-nvidia.html)

**Published:** 7/14/2026

**Summary:** Cybersecurity researchers have flagged a previously undocumented Rust-based remote access trojan (RAT) codenamed LabubaRAT that masquerades as NVIDIA software to blend into target environments.  "LabubaRAT creates a reusable foothold for hands-on activity," Blackpoint Cyber researchers Sam Decker and Nevan Beal said in an analysis published today. "Once deployed, it can profile the host,

---

### 2. 11 Old Microsoft-Signed Linux UEFI Shims Could Let Attackers Bypass Secure Boot

**Link:** [https://thehackernews.com/2026/07/11-old-microsoft-signed-linux-uefi.html](https://thehackernews.com/2026/07/11-old-microsoft-signed-linux-uefi.html)

**Published:** 7/14/2026

**Summary:** Cybersecurity researchers have discovered 11 old, Microsoft-signed, Unified Extensible Firmware Interface (UEFI) applications that could be abused to bypass Secure Boot on most systems using the modern firmware standard.  "An attacker exploiting one of these vulnerable applications can execute untrusted code during system boot, enabling deployment of malicious UEFI bootkits or other malware,"

---

### 3. U.S. Sanctions First VPN Service and Malware Cryptor Seller Over Ransomware Support

**Link:** [https://thehackernews.com/2026/07/us-sanctions-first-vpn-service-and.html](https://thehackernews.com/2026/07/us-sanctions-first-vpn-service-and.html)

**Published:** 7/14/2026

**Summary:** The U.S. Treasury Department's Office of Foreign Assets Control (OFAC) has designated two individuals and a VPN service provider for enabling ransomware actors' and other cybercriminals' malicious activities, including ransomware attacks against Americans.  The VPN, named First VPN Service (1VPNS), has been accused of offering its tools to ransomware groups, along with its 45-year-old Ukrainian

---

### 4. 148 npm Packages Disguised as Student Proxies Turned Browsers Into a DDoS Botnet

**Link:** [https://thehackernews.com/2026/07/148-npm-packages-disguised-as-student.html](https://thehackernews.com/2026/07/148-npm-packages-disguised-as-student.html)

**Published:** 7/14/2026

**Summary:** A campaign of 148 npm packages disguised as student web proxies turned visitors' browsers into a distributed denial-of-service botnet for roughly two weeks in May, according to new research from JFrog.  The packages did not go after the developers who might install them. The operators used the registry as free hosting for a booby-trapped proxy site and let the students who came to dodge

---

### 5. Microsoft Maps Three Salesforce Attack Paths Tied to a Year of ShinyHunters Activity

**Link:** [https://thehackernews.com/2026/07/microsoft-maps-year-long-shinyhunters.html](https://thehackernews.com/2026/07/microsoft-maps-year-long-shinyhunters.html)

**Published:** 7/14/2026

**Summary:** Attackers whose methods line up with the data-extortion group ShinyHunters have spent the past year walking into corporate Salesforce environments without exploiting a single flaw in the platform.  The way in has been the trust the organization had already extended, usually through the OAuth connections that tie Salesforce to the apps and third-party vendors around it.  In

---

## Schneier on Security

### 1. Upcoming Speaking Engagements

**Link:** [https://www.schneier.com/blog/archives/2026/07/upcoming-speaking-engagements-58.html](https://www.schneier.com/blog/archives/2026/07/upcoming-speaking-engagements-58.html)

**Published:** 7/14/2026

**Summary:** This is a current list of where and when I am scheduled to speak: I’m speaking (virtually) at the Policy-Relevant Privacy Research Workshop in Calgary, Canada, on Monday, July 20, 2026. I’m speaking at Boston Leadership Exchange in Boston, Massachusetts, USA, on Wednesday, July 22, 2026. I’m speaking at Cognitive Security Conference in Las Vegas, Nevada, USA. The conference runs August 6-7, 2026; my speaking time is TBD. I’m speaking at DEF CON 34 in Las Vegas, Nevada, USA. The conventions runs August 6-9, 2026; my speaking time is TBD...

---

## Endor Labs Blog

### 1. How Unprotected Release Branches Let Attackers Compromise AsyncAPI | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/how-unprotected-release-branches-let-attackers-compromise-asyncapi](https://www.endorlabs.com/learn/how-unprotected-release-branches-let-attackers-compromise-asyncapi)

**Published:** 7/14/2026

**Summary:** Five official @asyncapi npm packages shipped malware through legitimate GitHub Actions publish pipelines

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

### 5. When AI Imports Vulnerable Dependencies: Securing AI-Generated Code | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/when-ai-imports-vulnerable-dependencies-securing-ai-generated-code](https://www.endorlabs.com/learn/when-ai-imports-vulnerable-dependencies-securing-ai-generated-code)

**Published:** 7/13/2026

**Summary:** When AI Imports Vulnerable Dependencies: Securing AI-Generated Code

---

## GitGuardian Blog

### 1. Identity Infrastructure: Why Credentials Are the Layer Directories Don't Secure

**Link:** [https://blog.gitguardian.com/identity-infrastructure/](https://blog.gitguardian.com/identity-infrastructure/)

**Published:** 7/14/2026

**Summary:** Learn why modern identity infrastructure security depends on credential exposure detection, not just directory management, and how to close the gaps that lead to breaches.

---

## CISA Advisories

### 1. CISA Joins NSA, FBI, DC3 and International Partners Warning of Russian Cyber Threat Activity Targeting Communications, Energy, Government and Other Critical Infrastructure Sectors

**Link:** [https://www.cisa.gov/news-events/news/cisa-joins-nsa-fbi-dc3-and-international-partners-warning-russian-cyber-threat-activity-targeting](https://www.cisa.gov/news-events/news/cisa-joins-nsa-fbi-dc3-and-international-partners-warning-russian-cyber-threat-activity-targeting)

**Published:** 7/14/2026

**Summary:** ...

---

## Sonatype Security Research

### 1. Request for Comments: CARE and Maven Central

**Link:** [https://www.sonatype.com/blog/request-for-comments-care-and-maven-central](https://www.sonatype.com/blog/request-for-comments-care-and-maven-central)

**Published:** 7/13/2026

**Summary:** For most of Maven Central's history, publishing has followed a simple model: maintainers publish releases, users consume them, and when something goes wrong, the fix comes through the same channel.

---

## Bleeping Computer Security

### 1. Hackers backdoor Jscrambler npm package with infostealer malware

**Link:** [https://www.bleepingcomputer.com/news/security/hackers-backdoor-jscrambler-npm-package-with-infostealer-malware/](https://www.bleepingcomputer.com/news/security/hackers-backdoor-jscrambler-npm-package-with-infostealer-malware/)

**Published:** 7/13/2026

**Summary:** The Jscrambler client-side web security company disclosed that a threat actor published a malicious version of its npm package that has been downloaded almost 1,500 times. [...]

---

### 2. New CrashStealer malware poses as Apple crash reporting tool

**Link:** [https://www.bleepingcomputer.com/news/security/new-crashstealer-malware-poses-as-apple-crash-reporting-tool/](https://www.bleepingcomputer.com/news/security/new-crashstealer-malware-poses-as-apple-crash-reporting-tool/)

**Published:** 7/13/2026

**Summary:** A new macOS information-stealing malware called CrashStealer pretends to be Apple's crash-reporting tool to steal credentials, keychain data, and crypto wallets. [...]

---

## Krebs on Security

### 1. Lessons Learned from CISA’s Recent GitHub Leak

**Link:** [https://krebsonsecurity.com/2026/07/lessons-learned-from-cisas-recent-github-leak/](https://krebsonsecurity.com/2026/07/lessons-learned-from-cisas-recent-github-leak/)

**Published:** 7/13/2026

**Summary:** The Cybersecurity and Infrastructure Security Agency (CISA) has issued a postmortem on a data leak in which a contractor published dozens of internal CISA credentials -- including AWS Govcloud keys -- in a public GitHub repository for almost six months before being notified by KrebsOnSecurity. Experts say the gaps identified in the agency's initial response provide important lessons that all security teams should absorb.

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

**Last Updated:** 2026-07-14T18:49:45.126Z
