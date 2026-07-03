# Supply Chain Security Daily Report
**Date:** 2026-07-03
**Total Reports Found:** 15

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Emra – A workspace where every app you build shares one db

**Link:** [https://emra.app](https://emra.app)

**Published:** 7/3/2026

**Summary:** Hey HN, I'm really excited to share Emra with you. The yc description would be: It's like "Notion meets Lovable". It's a workspace where you build full apps using AI and every app sits on one shared database and service layer. Generated apps are always editable, and (coming soon:) can interact with each other in the workspace. I'm of the opinion that the cost of software will go rapidly to zero (I don't think that's too surprising to any of you), but there will always be room for effort and creativity. Emra is essentially built for the future where every person is a developer. Essentially personal software for everyone. So far I've built notes apps with a 3d graph view to see connections, a video editing app and a canvas design tool (figma clone) with export capabilities, as well as a collection of project management tools and games. Right now the most satisfying thing is being able to fix a bug I run into in around the same amount of time that it takes to send a bug report in any traditional app. We're using the best models to make this work at the moment. Basically anything Opus 4.6 or later, as far as I'm concerned is the baseline of what we can use to make this happen. Our agent is currently only capable of building, though that will change rapidly, and we are pretty proud that our build loop is more token efficient than using Claude Code or other harnesses. Arguably we are in the same category as Dreamer (Meta acquired) or Wabi (raised $20m), but at the moment we're bootstrapped and working to deliver as much value to users as possible. Users will be soon be able to download their data and apps at any time (I like to think of it as extending obsidians "file over app" philosophy to file+app). In general, I think for a platform like this to exist, we want to be as value aligned with users as possible. So our focus is on providing a solid service layer that abstracts away the complexity of most modern full stack applications. Ideally, people using Emra pay for hosting or usage and we earn our spot rather than locking you in. On the technical side, we feel good right now. We know there will be some scaling + security challenges, but honestly, our biggest hurdle at the moment is rebuilding existing applications in a way that makes them actually worth using inside of Emra, basically solving that blank page problem. We are building apps on an SDK that we plan on open sourcing over the next month or so, and will also provide a CLI tool so people can build Emra apps inside of Claude Code or other agents (this is how we are actually building many of our app store apps).  I'm also still trying to nail down the messaging. Initially I had planned on aggressively focusing on consumer, but the cost to build an app is still prohibitive, so we're going to keep testing different approaches. We're still very early, so I'd really appreciate any honest feedback. And I'm happy to answer any questions you might have. Comments URL: https://news.ycombinator.com/item?id=48778145 Points: 2 # Comments: 1

---

### 2. Croatia got eliminated from the World Cup by a closed-source sensor

**Link:** [https://twitter.com/l3d1c/status/2073004611632353575](https://twitter.com/l3d1c/status/2073004611632353575)

**Published:** 7/3/2026

**Summary:** Article URL: https://twitter.com/l3d1c/status/2073004611632353575 Comments URL: https://news.ycombinator.com/item?id=48778143 Points: 2 # Comments: 0

---

## The Hacker News

### 1. North Korea-Linked npm Packages Mimic Rollup Polyfills to Steal Developer Secrets

**Link:** [https://thehackernews.com/2026/07/north-korea-linked-npm-packages-mimic.html](https://thehackernews.com/2026/07/north-korea-linked-npm-packages-mimic.html)

**Published:** 7/3/2026

**Summary:** Threat actors with ties to North Korea have been linked to a fresh set of malicious npm packages that masquerade as Rollup polyfill tooling to facilitate remote access and data theft.  According to JFrog, the packages "rollup-packages-polyfill-core" and "rollup-runtime-polyfill-core" mimic the legitimate "rollup-plugin-polyfill-node" project, down to the description, repository metadata, and

---

### 2. Ransomware Groups Turn to Citrix Bleed 2, BYOVD, and Supply Chain Credentials

**Link:** [https://thehackernews.com/2026/07/ransomware-groups-turn-to-citrix-bleed.html](https://thehackernews.com/2026/07/ransomware-groups-turn-to-citrix-bleed.html)

**Published:** 7/2/2026

**Summary:** Threat actors associated with the Anubis ransomware operation have been observed exploiting the Citrix Bleed 2 (CVE-2025-5777) vulnerability to obtain initial access.  "Although tactics differ between affiliates, common patterns emerged in tradecraft through use of legitimate Remote Management and Monitoring (RMM) tooling, credential access, and hands-on-keyboard procedures used for lateral

---

### 3. ToddyCat-Linked Umbrij Malware Abuses OAuth to Access Gmail via Google API

**Link:** [https://thehackernews.com/2026/07/toddycat-linked-umbrij-malware-abuses.html](https://thehackernews.com/2026/07/toddycat-linked-umbrij-malware-abuses.html)

**Published:** 7/2/2026

**Summary:** The threat actor known as ToddyCat has been attributed to a new malware called Umbrij that's designed to gain surreptitious access to a victim's email correspondence via the Google API.  "In this campaign, the attackers focused their attention on corporate email communications hosted on Gmail, targeting access compromise via APIs," Kaspersky said in a detailed report published this week. "

---

### 4. New ChocoPoC RAT Targets Vulnerability Researchers via Fake PoC Exploit Repos

**Link:** [https://thehackernews.com/2026/07/new-chocopoc-rat-targets-vulnerability.html](https://thehackernews.com/2026/07/new-chocopoc-rat-targets-vulnerability.html)

**Published:** 7/2/2026

**Summary:** Attackers are hiding a data-stealing trojan inside fake exploit code aimed at the people who hunt bugs for a living. The malware, called ChocoPoC, travels in Python proof-of-concept (PoC) repositories on GitHub that claim to exploit hot new CVEs.  Run one, and it quietly lifts your saved passwords, browser cookies, and files, then hands the attacker a shell on your machine. YesWeHack and

---

## Endor Labs Blog

### 1. Endor Labs’ AI SAST Finds Zero Day Memory-Amplification DoS in Anthropic’s buffa library | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/endor-labs-ai-sast-finds-zero-day-cve-2026-55407-buffa](https://www.endorlabs.com/learn/endor-labs-ai-sast-finds-zero-day-cve-2026-55407-buffa)

**Published:** 7/2/2026

**Summary:** We identified an unbounded-allocation data flow in buffa's protobuf decoder that I developed into a ~22x memory-amplification denial of service for CVE-2026-55407

---

### 2. Claude Sonnet 5 with Claude Code: strong on function, average on security, and unusually honest | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/claude-sonnet-5-with-claude-code-strong-on-function-average-on-security-and-unusually-honest](https://www.endorlabs.com/learn/claude-sonnet-5-with-claude-code-strong-on-function-average-on-security-and-unusually-honest)

**Published:** 7/2/2026

**Summary:** Claude Sonnet 5 with Claude Code: strong on function, average on security, and unusually honest

---

## Krebs on Security

### 1. FBI Seizes NetNut Proxy Platform, Popa Botnet

**Link:** [https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/](https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/)

**Published:** 7/2/2026

**Summary:** The Federal Bureau of Investigation (FBI) said today it worked with industry partners to seize hundreds of domains associated with NetNut, a sprawling residential proxy service operated by the publicly-traded Israeli company Alarum Technologies [NASDAQ: ALAR]. The action comes roughly two weeks after KrebsOnSecurity published findings from multiple security firms connecting NetNut to the Popa botnet, a collection of at least two million devices that have been compromised by malicious software with little or no consent from victims.

---

## StepSecurity Blog

### 1. StepSecurity Maintained Actions Are Now Free for Public Repos 

**Link:** [https://www.stepsecurity.io/blog/stepsecurity-maintained-actions-are-now-free-for-public-repos](https://www.stepsecurity.io/blog/stepsecurity-maintained-actions-are-now-free-for-public-repos)

**Published:** 7/2/2026

**Summary:** StepSecurity Maintained Actions are now free for public repos. Secure, drop-in replacements for risky third-party GitHub Actions, reviewed and actively maintained.

---

### 2. 10 Layers Deep: How StepSecurity Stops TeamPCP's Trivy Supply Chain Attack on GitHub Actions

**Link:** [https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions](https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions)

**Published:** 7/2/2026

**Summary:** TeamPCP weaponized 76 Trivy version tags overnight. The KICS attack followed the same playbook days later. One security control is not enough. Here is how the StepSecurity platform's ten independent security layers work together to prevent credential exfiltration, detect compromised actions at runtime, and respond to incidents across your entire organization before attackers can succeed.

---

## GitHub Security Blog

### 1. How GitHub used secret scanning to reach inbox zero

**Link:** [https://github.blog/security/application-security/how-github-used-secret-scanning-to-reach-inbox-zero/](https://github.blog/security/application-security/how-github-used-secret-scanning-to-reach-inbox-zero/)

**Published:** 7/2/2026

**Summary:** GitHub had 20,000+ secret scanning alerts across 15,000 repositories. Here's how we separated signal from noise, built remediation workflows, and reached inbox zero in nine months. The post How GitHub used secret scanning to reach inbox zero appeared first on The GitHub Blog.

---

## Kiuwan Blog

### 1. SBOM Analysis: A Complete Guide for DevSecOps Teams

**Link:** [https://www.kiuwan.com/blog/sbom-analysis/](https://www.kiuwan.com/blog/sbom-analysis/)

**Published:** 7/2/2026

**Summary:** SBOM analysis is the process of examining a Software Bill of Materials (SBOM) to identify vulnerabilities, license risks, outdated components, and compliance gaps across the software your application depends on. Generating an SBOM tells you what is in your software. Analyzing it tells you what that inventory means for your security posture, remediation priorities, and […]

---

## Schneier on Security

### 1. Cybersecurity Mission Creep in the US

**Link:** [https://www.schneier.com/blog/archives/2026/07/cybersecurity-mission-creep-in-the-us.html](https://www.schneier.com/blog/archives/2026/07/cybersecurity-mission-creep-in-the-us.html)

**Published:** 7/2/2026

**Summary:** Interesting paper: “Cybersecurity Mission Creep.” Abstract: Cybersecurity is experiencing mission creep. Policymakers are casting more and more problems as issues of cybersecurity. So reframed, wildly different policy issues, from misinformation, to child social media safety laws, to antitrust regulations, to alleged journalist misconduct, to anti-sex trafficking statutes become what this Article calls “cybersecuritized.” Before this reframing, these issues present as important but not existential. But once cybersecuritization positions the issues as threats intensified by their technological nature, they gain access to the politics and law of urgency and exceptionalism and invite troubling governance responses...

---

## Bleeping Computer Security

### 1. CISA: Microsoft SharePoint RCE flaw now actively exploited

**Link:** [https://www.bleepingcomputer.com/news/security/cisa-microsoft-sharepoint-rce-flaw-now-actively-exploited/](https://www.bleepingcomputer.com/news/security/cisa-microsoft-sharepoint-rce-flaw-now-actively-exploited/)

**Published:** 7/2/2026

**Summary:** CISA warned on Wednesday that attackers have begun exploiting a high-severity Microsoft SharePoint remote code execution vulnerability patched in May. [...]

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

**Last Updated:** 2026-07-03T18:51:27.034Z
