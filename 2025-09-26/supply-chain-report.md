# Supply Chain Security Daily Report
**Date:** 2025-09-26
**Total Reports Found:** 20

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Baptisms of Fire

**Link:** [https://yakirhavin.com/blog/baptisms-of-fire/](https://yakirhavin.com/blog/baptisms-of-fire/)

**Published:** 9/26/2025

**Summary:** Article URL: https://yakirhavin.com/blog/baptisms-of-fire/ Comments URL: https://news.ycombinator.com/item?id=45389522 Points: 1 # Comments: 0

---

### 2. Devious malware has jumped from Meta to Google Ads and YouTube to spread

**Link:** [https://www.techradar.com/pro/security/this-devious-malware-has-jumped-from-meta-over-to-google-ads-and-youtube-to-spread-heres-how-to-stay-safe](https://www.techradar.com/pro/security/this-devious-malware-has-jumped-from-meta-over-to-google-ads-and-youtube-to-spread-heres-how-to-stay-safe)

**Published:** 9/26/2025

**Summary:** Article URL: https://www.techradar.com/pro/security/this-devious-malware-has-jumped-from-meta-over-to-google-ads-and-youtube-to-spread-heres-how-to-stay-safe Comments URL: https://news.ycombinator.com/item?id=45389500 Points: 4 # Comments: 0

---

### 3. Show HN: Magnitude MCP – vision-first browser interaction for Claude Code

**Link:** [https://github.com/sagekit/magnitude/tree/main/packages/magnitude-mcp](https://github.com/sagekit/magnitude/tree/main/packages/magnitude-mcp)

**Published:** 9/26/2025

**Summary:** Hey HN - Anders and Tom here. We made a browser MCP using the same vision-first scaffolding as our SOTA (94% WebVoyager) browser agent Magnitude. This approach is more flexible and robust than DOM-based interactions and avoids all the associated edge cases. It works particularly well with Claude Code, since Claude is already trained for computer-use tasks and can interact with browser elements precisely using vision alone. It's 100% open source. The setup is very simple if you want to try it: ``` npm i -g magnitude-mcp@latest claude mcp add magnitude -- npx magnitude-mcp ``` Then spin up Claude Code and ask it to do something in the browser. The MCP allows Claude Code (or any coding agent) to: - Open a browser with a persistent profile - Click, type, drag, etc. using pixel-based coordinates - Automatically stay aware of current state with a screenshot after each interaction - Coordinate multiple actions at once for efficiency We made this MCP because we realized it would be really helpful in our own engineering workloads. We are building a massive number of first-party integrations for Sagekit (our workflow automation platform), and to do so we need to give Claude Code as many tools as possible to act with a high degree of autonomy, including a browser it can use reliably. The only downside is that only certain models can use the MCP effectively, because not all models can pinpoint exact pixel coordinates based on a screenshot. These models roughly include Claude (Sonnet 3.7, Sonnet 4, Opus 4), Qwen 2.5 VL-based models (Qwen 2.5 VL 72B, UI TARS, etc.), and a few others specifically trained for it. Given that we personally use Claude for all our coding anyway, this seemed acceptable. After using Claude Code to build 15+ integrations in a week, it became obvious that certain tools are necessary to take us out of the dev loop more often and produce high quality code autonomously. A browser was an obvious place to start, and we already had a browser agent we could repurpose. So far, this is what we've personally found it useful for: - Seeing and interacting with web apps as it builds features or fixes issues - Configuring dummy data that can't be accessed programmatically - Browsing documentation on sites where fetch doesn't work - Improvised frontend testing Anyway, we thought we would share in case other engineers find it useful in their workloads. It can also be used in non-engineering work (like booking a flight!!) if you so desire. Comments URL: https://news.ycombinator.com/item?id=45389441 Points: 1 # Comments: 0

---

## The Hacker News

### 1. Researchers Expose SVG and PureRAT Phishing Threats Targeting Ukraine and Vietnam

**Link:** [https://thehackernews.com/2025/09/researchers-expose-svg-and-purerat.html](https://thehackernews.com/2025/09/researchers-expose-svg-and-purerat.html)

**Published:** 9/26/2025

**Summary:** A new campaign has been observed impersonating Ukrainian government agencies in phishing attacks to deliver CountLoader, which is then used to drop Amatera Stealer and PureMiner. "The phishing emails contain malicious Scalable Vector Graphics (SVG) files designed to trick recipients into opening harmful attachments," Fortinet FortiGuard Labs researcher Yurren Wan said in a report shared with The

---

### 2. New COLDRIVER Malware Campaign Joins BO Team and Bearlyfy in Russia-Focused Cyberattacks

**Link:** [https://thehackernews.com/2025/09/new-coldriver-malware-campaign-joins-bo.html](https://thehackernews.com/2025/09/new-coldriver-malware-campaign-joins-bo.html)

**Published:** 9/26/2025

**Summary:** The Russian advanced persistent threat (APT) group known as COLDRIVER has been attributed to a fresh round of ClickFix-style attacks designed to deliver two new "lightweight" malware families tracked as BAITSWITCH and SIMPLEFIX. Zscaler ThreatLabz, which detected the new multi-stage ClickFix campaign earlier this month, described BAITSWITCH as a downloader that ultimately drops SIMPLEFIX, a

---

### 3. New macOS XCSSET Variant Targets Firefox with Clipper and Persistence Module

**Link:** [https://thehackernews.com/2025/09/new-macos-xcsset-variant-targets.html](https://thehackernews.com/2025/09/new-macos-xcsset-variant-targets.html)

**Published:** 9/26/2025

**Summary:** Cybersecurity researchers have discovered an updated version of a known Apple macOS malware called XCSSET that has been observed in limited attacks. "This new variant of XCSSET brings key changes related to browser targeting, clipboard hijacking, and persistence mechanisms," the Microsoft Threat Intelligence team said in a Thursday report. "It employs sophisticated encryption and obfuscation

---

### 4. Cisco ASA Firewall Zero-Day Exploits Deploy RayInitiator and LINE VIPER Malware

**Link:** [https://thehackernews.com/2025/09/cisco-asa-firewall-zero-day-exploits.html](https://thehackernews.com/2025/09/cisco-asa-firewall-zero-day-exploits.html)

**Published:** 9/26/2025

**Summary:** The U.K. National Cyber Security Centre (NCSC) has revealed that threat actors have exploited the recently disclosed security flaws impacting Cisco firewalls as part of zero-day attacks to deliver previously undocumented malware families like RayInitiator and LINE VIPER. "The RayInitiator and LINE VIPER malware represent a significant evolution on that used in the previous campaign, both in

---

### 5. Vane Viper Generates 1 Trillion DNS Queries to Power Global Malware and Ad Fraud Network

**Link:** [https://thehackernews.com/2025/09/vane-viper-generates-1-trillion-dns.html](https://thehackernews.com/2025/09/vane-viper-generates-1-trillion-dns.html)

**Published:** 9/25/2025

**Summary:** The threat actor known as Vane Viper has been outed as a purveyor of malicious ad technology (adtech), while relying on a tangled web of shell companies and opaque ownership structures to deliberately evade responsibility. "Vane Viper has provided core infrastructure in widespread malvertising, ad fraud, and cyberthreat proliferation for at least a decade," Infoblox said in a technical report

---

## GitHub Security Blog

### 1. Kicking off Cybersecurity Awareness Month 2025: Researcher Spotlights and Enhanced Incentives

**Link:** [https://github.blog/security/vulnerability-research/kicking-off-cybersecurity-awareness-month-2025-researcher-spotlights-and-enhanced-incentives/](https://github.blog/security/vulnerability-research/kicking-off-cybersecurity-awareness-month-2025-researcher-spotlights-and-enhanced-incentives/)

**Published:** 9/26/2025

**Summary:** For this year’s Cybersecurity Awareness Month, GitHub’s Bug Bounty team is excited to offer some additional incentives to security researchers! The post Kicking off Cybersecurity Awareness Month 2025: Researcher Spotlights and Enhanced Incentives appeared first on The GitHub Blog.

---

## GitGuardian Blog

### 1. OWASP AppSecDays France 2025: Learning To Defend The Global Supply Chain Together

**Link:** [https://blog.gitguardian.com/owasp-appsecdays-france-2025/](https://blog.gitguardian.com/owasp-appsecdays-france-2025/)

**Published:** 9/26/2025

**Summary:** OWASP AppSecDays France 2025 explored supply chain trust, CI/CD as the new perimeter and passkeys, showing how shared guardrails make secure delivery possible.

---

## Schneier on Security

### 1. Digital Threat Modeling Under Authoritarianism

**Link:** [https://www.schneier.com/blog/archives/2025/09/digital-threat-modeling-under-authoritarianism.html](https://www.schneier.com/blog/archives/2025/09/digital-threat-modeling-under-authoritarianism.html)

**Published:** 9/26/2025

**Summary:** Today’s world requires us to make complex and nuanced decisions about our digital security. Evaluating when to use a secure messaging app like Signal or WhatsApp, which passwords to store on your smartphone, or what to share on social media requires us to assess risks and make judgments accordingly. Arriving at any conclusion is an exercise in threat modeling. In security, threat modeling is the process of determining what security measures make sense in your particular situation. It’s a way to think about potential risks, possible defenses, and the costs of both. It’s how experts avoid being distracted by irrelevant risks or overburdened by undue costs...

---

## Endor Labs Blog

### 1. npm Malware Outbreak: Tinycolor and CrowdStrike Packages Compromised | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/npm-malware-outbreak-tinycolor-and-crowdstrike-packages-compromised](https://www.endorlabs.com/learn/npm-malware-outbreak-tinycolor-and-crowdstrike-packages-compromised)

**Published:** 9/25/2025

**Summary:** A virus-like npm malware attack has spread to 180+ packages so far, including CrowdStrike and Tinycolor

---

## Bleeping Computer Security

### 1. Microsoft warns of new XCSSET macOS malware variant targeting Xcode devs

**Link:** [https://www.bleepingcomputer.com/news/security/microsoft-warns-of-new-xcsset-macos-malware-variant-targeting-xcode-devs/](https://www.bleepingcomputer.com/news/security/microsoft-warns-of-new-xcsset-macos-malware-variant-targeting-xcode-devs/)

**Published:** 9/25/2025

**Summary:** Microsoft Threat Intelligence reports that a new variant of the XCSSET macOS malware has been detected in limited attacks, incorporating several new features, including enhanced browser targeting, clipboard hijacking, and improved persistence mechanisms. [...]

---

### 2. Unofficial Postmark MCP npm silently stole users' emails

**Link:** [https://www.bleepingcomputer.com/news/security/unofficial-postmark-mcp-npm-silently-stole-users-emails/](https://www.bleepingcomputer.com/news/security/unofficial-postmark-mcp-npm-silently-stole-users-emails/)

**Published:** 9/25/2025

**Summary:** A npm package copying the official 'postmark-mcp' project on GitHub turned bad with the latest update that added a single line of code to exfiltrate all its users' email communication. [...]

---

### 3. Co-op says it lost $107 million after Scattered Spider attack

**Link:** [https://www.bleepingcomputer.com/news/security/co-op-says-it-lost-107-million-after-scattered-spider-attack/](https://www.bleepingcomputer.com/news/security/co-op-says-it-lost-107-million-after-scattered-spider-attack/)

**Published:** 9/25/2025

**Summary:** The Co-operative Group in the U.K. released its interim financial results report for the first half of 2025 with a massive loss in operating profit of £80 million ($107 million) due to the cyberattack it suffered last April. [...]

---

### 4. Malicious Rust packages on Crates.io steal crypto wallet keys

**Link:** [https://www.bleepingcomputer.com/news/security/malicious-rust-packages-on-cratesio-steal-crypto-wallet-keys/](https://www.bleepingcomputer.com/news/security/malicious-rust-packages-on-cratesio-steal-crypto-wallet-keys/)

**Published:** 9/25/2025

**Summary:** Two malicious packages with nearly 8,500 downloads in Rust's official crate repository scanned developers' systems to steal cryptocurrency private keys and other secrets. [...]

---

## CircleCI Blog

### 1. Audit log streaming for real-time security visibility in your CI/CD pipeline

**Link:** [https://circleci.com/blog/cicd-visibility-audit-log-streaming/](https://circleci.com/blog/cicd-visibility-audit-log-streaming/)

**Published:** 9/25/2025

**Summary:** ...

---

## Sonatype Security Research

### 1. From Chaos to Control: Establishing an OSPO for Strategic Governance

**Link:** [https://www.sonatype.com/blog/from-chaos-to-control-establishing-an-ospo-for-strategic-governance](https://www.sonatype.com/blog/from-chaos-to-control-establishing-an-ospo-for-strategic-governance)

**Published:** 9/25/2025

**Summary:** The rise of open source software during the AI boom presents a dual outlook of unprecedented opportunities and risks. Governance gaps, security vulnerabilities, and compliance challenges can ripple across engineering teams, slowing innovation while exposing organizations to unnecessary threats.

---

## Kiuwan Blog

### 1. AI code security: Risks, best practices, and tools 

**Link:** [https://www.kiuwan.com/blog/ai-code-security/](https://www.kiuwan.com/blog/ai-code-security/)

**Published:** 9/25/2025

**Summary:** AI coding assistants can help you ship faster, but they can also ship vulnerabilities straight into production. Unfortunately, this increase in efficiency has been accompanied by greater security risks. Recent research shows that roughly 25-30% of code created by models like GitHub Copilot contains Common Weakness Enumerations (CWEs). That means AI code security needs to […]

---

## CISA Advisories

### 1. CISA Issues Emergency Directive Requiring Federal Agencies to Identify and Mitigate Cisco Zero-Day Vulnerabilities

**Link:** [https://www.cisa.gov/news-events/news/cisa-issues-emergency-directive-requiring-federal-agencies-identify-and-mitigate-cisco-zero-day](https://www.cisa.gov/news-events/news/cisa-issues-emergency-directive-requiring-federal-agencies-identify-and-mitigate-cisco-zero-day)

**Published:** 9/25/2025

**Summary:** ...

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

**Last Updated:** 2025-09-26T18:38:09.279Z
