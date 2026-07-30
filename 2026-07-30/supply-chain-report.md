# Supply Chain Security Daily Report
**Date:** 2026-07-30
**Total Reports Found:** 28

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. I'm a senior estimator, I open sourced my construction takeoff tool

**Link:** [https://github.com/Kentucky-ai/opentakeoff](https://github.com/Kentucky-ai/opentakeoff)

**Published:** 7/30/2026

**Summary:** Article URL: https://github.com/Kentucky-ai/opentakeoff Comments URL: https://news.ycombinator.com/item?id=49113911 Points: 2 # Comments: 0

---

### 2. Show HN: Leia – a CLI to oneshot playlists onto Yoto MYO cards

**Link:** [https://github.com/nsokin/leia](https://github.com/nsokin/leia)

**Published:** 7/30/2026

**Summary:** Might be useful for anyone with a Yoto and eager kids. Simple cli and agent skill to go from a audio/video playlist url (bulk loading) to a Yoto MYO card. Yt-dlp to download media and the yoto dev api to upload audio to your MYO account. Useful for loading whole seasons or series in one go. Handles downloading, organising chapters, writing titles, dedupes, artwork/icons, and managing/fitting card limits. Runs locally. Works exactly where you're thinking. Comments URL: https://news.ycombinator.com/item?id=49113859 Points: 2 # Comments: 0

---

## Bleeping Computer Security

### 1. Amazon links Debug, Chalk NPM supply-chain attacks to North Korean hackers

**Link:** [https://www.bleepingcomputer.com/news/security/amazon-links-debug-chalk-npm-supply-chain-attacks-to-north-korean-hackers/](https://www.bleepingcomputer.com/news/security/amazon-links-debug-chalk-npm-supply-chain-attacks-to-north-korean-hackers/)

**Published:** 7/30/2026

**Summary:** Amazon linked multiple high-profile open-source software supply chain attacks targeting the Node Package Manager (npm) ecosystem to North Korean hackers. [...]

---

### 2. OpenAI agent used exposed credentials at 4 services in Hugging Face breach

**Link:** [https://www.bleepingcomputer.com/news/security/openai-agent-used-exposed-credentials-at-4-services-in-hugging-face-breach/](https://www.bleepingcomputer.com/news/security/openai-agent-used-exposed-credentials-at-4-services-in-hugging-face-breach/)

**Published:** 7/29/2026

**Summary:** In a new update, OpenAI says its AI models also used publicly exposed credentials to compromise accounts on four third-party services during the recent attack on Hugging Face, expanding the scope of the four-day security incident to other organizations. [...]

---

## Schneier on Security

### 1. American Being Prosecuted for Wiping His Phone Before Handing It Over to Border Officials

**Link:** [https://www.schneier.com/blog/archives/2026/07/american-being-prosecuted-for-wiping-his-phone-before-handing-it-over-to-border-officials.html](https://www.schneier.com/blog/archives/2026/07/american-being-prosecuted-for-wiping-his-phone-before-handing-it-over-to-border-officials.html)

**Published:** 7/30/2026

**Summary:** He’s being prosecuted for giving border officials a code that wiped his phone: The case centers on a feature included in GrapheneOS, a custom Android operating system that runs in place of the software on most modern Google Pixel devices. Tunick’s attorneys confirmed GrapheneOS was running on his phone. The software feature allows the device owner to set a passcode that deliberately wipes the contents of that device if entered instead of the user’s unlock passcode. Tunick’s case also raises ongoing questions about what constitutional rights can be invoked at the border, which the U.S. government has long asserted is not U.S. soil until a person is authorized to enter...

---

### 2. Measuring the Tendency of AI Agents to Go Rogue

**Link:** [https://www.schneier.com/blog/archives/2026/07/measuring-the-tendency-of-ai-agents-to-go-rogue.html](https://www.schneier.com/blog/archives/2026/07/measuring-the-tendency-of-ai-agents-to-go-rogue.html)

**Published:** 7/29/2026

**Summary:** This essay was written with Barath Raghavan, and originally appeared in The Guardian. In July, Hugging Face, a company that hosts much of the world’s AI software and open-source AI models, was hacked. A malicious dataset had been used to run code on one of its servers. Whoever was behind it captured internal security credentials and moved through systems over a weekend, running thousands of actions from a swarm of temporary server environments. It looked like the work of a sophisticated criminal group. It was not. It was one of OpenAI’s new, still unreleased GPT models...

---

### 3. Long-Lived Vulnerability in Microsoft Secure Boot

**Link:** [https://www.schneier.com/blog/archives/2026/07/long-lived-vulnerability-in-microsoft-secure-boot.html](https://www.schneier.com/blog/archives/2026/07/long-lived-vulnerability-in-microsoft-secure-boot.html)

**Published:** 7/29/2026

**Summary:** Microsoft’s Secure Boot has had a serious vulnerability for most of its existence. An industry-wide standard Microsoft invented to protect Windows, and later Linux, devices from firmware infections has been trivial to bypass for 13 of its 14 years of existence. The discovery was made by researchers at security firm ESET after identifying 11 firmware images, at least one from 2013, that were known to be defective but remained signed by the software company anyway. The images are known as shims, which were invented to extend Secure Boot to Linux devices and utility software. Using a technique simple enough to be performed by novice hackers, these old, forgotten shims can be used to completely circumvent the protection, which is embedded into the UEFI (Unified Extensible Firmware Interface) of the device’s motherboard. The gaffe is the result of the failure by Microsoft, which oversees the signing of shims, to revoke the publicly available images once vulnerabilities were found in them...

---

### 4. Measuring LLMs’ Ability to Perform Cryptanalysis

**Link:** [https://www.schneier.com/blog/archives/2026/07/measuring-llms-ability-to-perform-cryptanalysis.html](https://www.schneier.com/blog/archives/2026/07/measuring-llms-ability-to-perform-cryptanalysis.html)

**Published:** 7/29/2026

**Summary:** There’s new benchmark measuring AI’s ability to perform mathematical cryptanalysis. Anthropic’s frontier model actually found new attacks. The benchmark: “CryptanalysisBench: Can LLMs do Cryptanalysis?” The idea is to benchmark the ability of LLMs to discover new mathematical cryptanalytic attacks against a series of historical algorithms. Abstract: Cryptanalysis—the task of finding attacks against cryptographic schemes—its at the intersection of mathematical reasoning and cybersecurity, two areas where LLMs have advanced fastest. Cryptanalysis represents both a clean testbed for frontier reasoning (as practical attacks can be automatically verified) and a domain with unusually high stakes, since the primitives under study underpin our digital security. In this paper we ask whether LLMs can do cryptanalysis, and find that the answer is increasingly yes. We introduce CryptanalysisBench, 191 tasks across six families of cryptographic primitives (block ciphers, hash functions, etc.) drawn primarily from four NIST standardization competitions. Our benchmark consists of three tiers: (i) primitives with known practical breaks; (ii) primitives with no known practical break, evaluated both at full strength and as scaled-down variants; and (iii) a challenge set of production primitives at the frontier of cryptanalysis. Five frontier models (Claude Opus 4.8, Sonnet 5, Mythos 5, GPT-5.5, and the open-weights GLM-5.2) break 65%­86% of Tier 1 schemes, 6­12 Tier-2 schemes at full strength, and 24­61 across all scaled-down variants. Beyond deriving known results, models produce novel cryptanalysis, such as a key-recovery attack that exploits a design flaw in the SpoC AEAD and an error in KINDI’s published CCA-security proof, both to the best of our knowledge not previously known...

---

## GitGuardian Blog

### 1. What Was on This Machine? Answering the Blast Radius Question After a Laptop Compromise

**Link:** [https://blog.gitguardian.com/blast-radius-laptop-compromise/](https://blog.gitguardian.com/blast-radius-laptop-compromise/)

**Published:** 7/30/2026

**Summary:** After a laptop compromise, the hard question is which credentials were on it. See why blast radius scoping is hard, and how to turn it into a revocable list.

---

### 2. An AI Agent Breached Hugging Face. The Attack Playbook Was Older Than the Attacker

**Link:** [https://blog.gitguardian.com/hugging-face-breach-ai-agent-security/](https://blog.gitguardian.com/hugging-face-breach-ai-agent-security/)

**Published:** 7/29/2026

**Summary:** OpenAI's models escaped a benchmark sandbox and ended up inside Hugging Face's production systems. The attack made history; the openings it used were reusable credentials and flat internal access, and those are fixable now.

---

## Sonatype Security Research

### 1. Walking the Walk on Package Registry Sustainability

**Link:** [https://www.sonatype.com/blog/walking-the-walk-on-package-registry-sustainability](https://www.sonatype.com/blog/walking-the-walk-on-package-registry-sustainability)

**Published:** 7/30/2026

**Summary:** Public package registries are not free extensions of corporate infrastructure. They sit directly in the path of modern software development. Every dependency resolution, automated build, security scan, and release depends on infrastructure that someone has to operate, secure, support, and improve.

---

## CISA Advisories

### 1. CISA Guide Helps Federal Agencies Securely and Effectively Use Open Source Software

**Link:** [https://www.cisa.gov/news-events/news/cisa-guide-helps-federal-agencies-securely-and-effectively-use-open-source-software](https://www.cisa.gov/news-events/news/cisa-guide-helps-federal-agencies-securely-and-effectively-use-open-source-software)

**Published:** 7/30/2026

**Summary:** ...

---

### 2. CISA and Partners Unveil Updated Software Bill of Materials Resource That Improves Transparency, Security and Risk-Informed Decision Making

**Link:** [https://www.cisa.gov/news-events/news/cisa-and-partners-unveil-updated-software-bill-materials-resource-improves-transparency-security-and](https://www.cisa.gov/news-events/news/cisa-and-partners-unveil-updated-software-bill-materials-resource-improves-transparency-security-and)

**Published:** 7/29/2026

**Summary:** ...

---

## The Hacker News

### 1. The Network Has Become the Control Plane for AI Security

**Link:** [https://thehackernews.com/2026/07/the-network-has-become-control-plane.html](https://thehackernews.com/2026/07/the-network-has-become-control-plane.html)

**Published:** 7/30/2026

**Summary:** Network firewalls are the workhorses of modern cybersecurity. They are trusted to protect the network, blocking malicious traffic and preventing intrusions and breaches. And for decades, network security teams have built controls around a relatively stable model: users connect to applications, applications exchange data, and security tools inspect packets, protocols, and destinations. Firewalls

---

### 2. Hackers Exploit AnySign4PC via Hacked Korean Sites to Install Backdoors Without Prompts

**Link:** [https://thehackernews.com/2026/07/hackers-exploit-anysign4pc-via-hacked.html](https://thehackernews.com/2026/07/hackers-exploit-anysign4pc-via-hacked.html)

**Published:** 7/30/2026

**Summary:** South Korean authorities and four security firms have disclosed a state-sponsored campaign that compromised trusted domestic websites. The attackers used those sites to exploit locally installed financial-security software and infect targeted visitors with SIGNBT or COPPERHEDGE backdoors.  A compromised page could infect a system running a vulnerable AnySign4PC version without a prompt or

---

### 3. Amazon Links Debug and Chalk npm Hijack to North Korea’s Sapphire Sleet

**Link:** [https://thehackernews.com/2026/07/amazon-links-debug-and-chalk-npm-hijack.html](https://thehackernews.com/2026/07/amazon-links-debug-and-chalk-npm-hijack.html)

**Published:** 7/30/2026

**Summary:** Amazon has tied the September 2025 hijack of the npm packages debug and chalk to North Korea. For ten months, the incident sat in the public record as crypto theft: a maintainer phished through a lookalike npm domain and a wallet-draining script pushed into at least 18 packages carrying more than 2 billion weekly downloads between them.  The original Aikido and Wiz reports did not attribute the

---

### 4. Three Critical VMware Flaws Allow Auth Bypass, Code Execution, and VM Escape

**Link:** [https://thehackernews.com/2026/07/three-critical-vmware-flaws-allow-auth.html](https://thehackernews.com/2026/07/three-critical-vmware-flaws-allow-auth.html)

**Published:** 7/29/2026

**Summary:** Broadcom has released security updates to address multiple security flaws impacting VMware ESX, vCenter, Workstation, and Fusion, three of which have been designated as critical in severity.  The first of the three critical-rated flaws is CVE-2026-59309 (CVSS score: 9.8), which has been described as an authentication bypass in VMware vCenter.  "A malicious actor with network access to vCenter

---

### 5. Researchers Show a Single Malicious Webpage Visit Can Compromise Tor Browser

**Link:** [https://thehackernews.com/2026/07/researchers-show-single-malicious.html](https://thehackernews.com/2026/07/researchers-show-single-malicious.html)

**Published:** 7/29/2026

**Summary:** Nebula Security says a patched Firefox JIT flaw could be triggered by simply visiting a malicious webpage and was also used to compromise Tor Browser.  Tracked as CVE-2026-10702, the bug provides arbitrary code execution inside the browser's renderer process. Mozilla rated it High and fixed it in the Firefox 151.0.3 update.  "No settings or additional user interaction are required," Eten Zou,

---

## Kiuwan Blog

### 1. Web Application Security Testing: The Complete Guide

**Link:** [https://www.kiuwan.com/blog/web-application-security-testing/](https://www.kiuwan.com/blog/web-application-security-testing/)

**Published:** 7/30/2026

**Summary:** As the threat landscape continues to evolve, organizations have had to strengthen their cybersecurity posture to overcome more sophisticated and more numerous attacks. Web application security testing has become an increasingly important part of that process, helping teams identify and remediate vulnerabilities at the application layer of their infrastructure before attackers exploit them.  This guide […]

---

## Endor Labs Blog

### 1. Critical Security Controls for Governing AI Coding Agents | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/critical-controls-coding-agents](https://www.endorlabs.com/learn/critical-controls-coding-agents)

**Published:** 7/29/2026

**Summary:** Six places to enforce coding agent governance on the developer's machine, and why in-agent hooks are the one deterministic control between intent and action.

---

### 2. Securing Open Source Dependencies: A Developer's Guide | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/securing-open-source-dependencies-a-developers-guide](https://www.endorlabs.com/learn/securing-open-source-dependencies-a-developers-guide)

**Published:** 7/29/2026

**Summary:** Securing Open Source Dependencies: A Developer's Guide

---

### 3. Dependency Confusion: How Attackers Poison Your Build | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/dependency-confusion-how-attackers-poison-your-build](https://www.endorlabs.com/learn/dependency-confusion-how-attackers-poison-your-build)

**Published:** 7/29/2026

**Summary:** Dependency Confusion: How Attackers Poison Your Build

---

### 4. AI-Generated Malware and the Software Supply Chain | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/ai-generated-malware-and-the-software-supply-chain](https://www.endorlabs.com/learn/ai-generated-malware-and-the-software-supply-chain)

**Published:** 7/29/2026

**Summary:** AI-Generated Malware and the Software Supply Chain

---

### 5. When AI Imports Vulnerable Dependencies: Securing AI-Generated Code | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/when-ai-imports-vulnerable-dependencies-securing-ai-generated-code](https://www.endorlabs.com/learn/when-ai-imports-vulnerable-dependencies-securing-ai-generated-code)

**Published:** 7/29/2026

**Summary:** When AI Imports Vulnerable Dependencies: Securing AI-Generated Code

---

## JFrog Security Blog

### 1. How to Control AI Assets Before They Become Shadow AI

**Link:** [https://jfrog.com/blog/agent-guard-control-ai-assets-before-they-become-shadow-ai/](https://jfrog.com/blog/agent-guard-control-ai-assets-before-they-become-shadow-ai/)

**Published:** 7/29/2026

**Summary:** A developer on your team just told Claude Code to connect to a new MCP server, the protocol coding agents use to reach organizational tools and data. Nobody in security reviewed it. Nobody in security even knows it happened. For two-thirds of enterprises, the primary obstacle to scaling agentic development isn’t budget or headcount — …

---

## GitHub Security Blog

### 1. Tame Dependabot: Group your updates, slow the cadence, keep security fast

**Link:** [https://github.blog/security/supply-chain-security/tame-dependabot-group-your-updates-slow-the-cadence-keep-security-fast/](https://github.blog/security/supply-chain-security/tame-dependabot-group-your-updates-slow-the-cadence-keep-security-fast/)

**Published:** 7/29/2026

**Summary:** Dependabot keeps your dependencies current, but its defaults can flood your repository with pull requests. Here's how grouping updates, slowing the cadence, and keeping security fixes fast cut the noise on a Microsoft open source project. The post Tame Dependabot: Group your updates, slow the cadence, keep security fast appeared first on The GitHub Blog.

---

## StepSecurity Blog

### 1. Dev Machine Guard Now Inventories AI Agent Skills on Developer Machines 

**Link:** [https://www.stepsecurity.io/blog/dev-machine-guard-now-inventories-ai-agent-skills-on-developer-machines](https://www.stepsecurity.io/blog/dev-machine-guard-now-inventories-ai-agent-skills-on-developer-machines)

**Published:** 7/29/2026

**Summary:** Dev Machine Guard now inventories AI agent skills across your developer fleet. See every skill installed for Claude Code, Codex, GitHub Copilot, and other agents, flag skills with executable code, hooks, or shell commands, trace provenance, and detect version drift.

---

### 2. Compromised npm Packages: @joyfill/components and @joyfill/layouts Ship an Obfuscated Remote Access Trojan

**Link:** [https://www.stepsecurity.io/blog/joyfill-npm-supply-chain-compromise](https://www.stepsecurity.io/blog/joyfill-npm-supply-chain-compromise)

**Published:** 7/29/2026

**Summary:** Malicious beta versions of the Joyfill npm packages @joyfill/components and @joyfill/layouts hide an obfuscated remote access trojan and credential stealer. Full analysis, IOCs, and remediation from StepSecurity.

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

**Last Updated:** 2026-07-30T18:57:29.231Z
