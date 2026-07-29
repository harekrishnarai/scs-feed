# Supply Chain Security Daily Report
**Date:** 2026-07-29
**Total Reports Found:** 23

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Turning a Dumb AC Unit Smart (Without Losing My Security Deposit)

**Link:** [https://prilik.com/blog/post/automating-ac-nyc/](https://prilik.com/blog/post/automating-ac-nyc/)

**Published:** 7/29/2026

**Summary:** Article URL: https://prilik.com/blog/post/automating-ac-nyc/ Comments URL: https://news.ycombinator.com/item?id=49101198 Points: 2 # Comments: 0

---

### 2. Managing Edge Resources Scale a Peer-to-Peer CDN for On-Demand Video Streaming

**Link:** [https://dl.acm.org/doi/10.1145/3816021](https://dl.acm.org/doi/10.1145/3816021)

**Published:** 7/29/2026

**Summary:** Article URL: https://dl.acm.org/doi/10.1145/3816021 Comments URL: https://news.ycombinator.com/item?id=49101116 Points: 1 # Comments: 1

---

## Endor Labs Blog

### 1. Critical Security Controls for Governing AI Coding Agents | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/critical-controls-coding-agents](https://www.endorlabs.com/learn/critical-controls-coding-agents)

**Published:** 7/29/2026

**Summary:** Six places to enforce coding agent governance on the developer's machine, and why in-agent hooks are the one deterministic control between intent and action.

---

## JFrog Security Blog

### 1. How to Control AI Assets Before They Become Shadow AI

**Link:** [https://jfrog.com/blog/agent-guard-control-ai-assets-before-they-become-shadow-ai/](https://jfrog.com/blog/agent-guard-control-ai-assets-before-they-become-shadow-ai/)

**Published:** 7/29/2026

**Summary:** A developer on your team just told Claude Code to connect to a new MCP server, the protocol coding agents use to reach organizational tools and data. Nobody in security reviewed it. Nobody in security even knows it happened. For two-thirds of enterprises, the primary obstacle to scaling agentic development isn’t budget or headcount — …

---

## Schneier on Security

### 1. Measuring the Tendency of AI Agents to Go Rogue

**Link:** [https://www.schneier.com/blog/archives/2026/07/measuring-the-tendency-of-ai-agents-to-go-rogue.html](https://www.schneier.com/blog/archives/2026/07/measuring-the-tendency-of-ai-agents-to-go-rogue.html)

**Published:** 7/29/2026

**Summary:** This essay was written with Barath Raghavan, and originally appeared in The Guardian. In July, Hugging Face, a company that hosts much of the world’s AI software and open-source AI models, was hacked. A malicious dataset had been used to run code on one of its servers. Whoever was behind it captured internal security credentials and moved through systems over a weekend, running thousands of actions from a swarm of temporary server environments. It looked like the work of a sophisticated criminal group. It was not. It was one of OpenAI’s new, still unreleased GPT models...

---

### 2. Long-Lived Vulnerability in Microsoft Secure Boot

**Link:** [https://www.schneier.com/blog/archives/2026/07/long-lived-vulnerability-in-microsoft-secure-boot.html](https://www.schneier.com/blog/archives/2026/07/long-lived-vulnerability-in-microsoft-secure-boot.html)

**Published:** 7/29/2026

**Summary:** Microsoft’s Secure Boot has had a serious vulnerability for most of its existence. An industry-wide standard Microsoft invented to protect Windows, and later Linux, devices from firmware infections has been trivial to bypass for 13 of its 14 years of existence. The discovery was made by researchers at security firm ESET after identifying 11 firmware images, at least one from 2013, that were known to be defective but remained signed by the software company anyway. The images are known as shims, which were invented to extend Secure Boot to Linux devices and utility software. Using a technique simple enough to be performed by novice hackers, these old, forgotten shims can be used to completely circumvent the protection, which is embedded into the UEFI (Unified Extensible Firmware Interface) of the device’s motherboard. The gaffe is the result of the failure by Microsoft, which oversees the signing of shims, to revoke the publicly available images once vulnerabilities were found in them...

---

### 3. Measuring LLMs’ Ability to Perform Cryptanalysis

**Link:** [https://www.schneier.com/blog/archives/2026/07/measuring-llms-ability-to-perform-cryptanalysis.html](https://www.schneier.com/blog/archives/2026/07/measuring-llms-ability-to-perform-cryptanalysis.html)

**Published:** 7/29/2026

**Summary:** There’s new benchmark measuring AI’s ability to perform mathematical cryptanalysis. Anthropic’s frontier model actually found new attacks. The benchmark: “CryptanalysisBench: Can LLMs do Cryptanalysis?” The idea is to benchmark the ability of LLMs to discover new mathematical cryptanalytic attacks against a series of historical algorithms. Abstract: Cryptanalysis—the task of finding attacks against cryptographic schemes—its at the intersection of mathematical reasoning and cybersecurity, two areas where LLMs have advanced fastest. Cryptanalysis represents both a clean testbed for frontier reasoning (as practical attacks can be automatically verified) and a domain with unusually high stakes, since the primitives under study underpin our digital security. In this paper we ask whether LLMs can do cryptanalysis, and find that the answer is increasingly yes. We introduce CryptanalysisBench, 191 tasks across six families of cryptographic primitives (block ciphers, hash functions, etc.) drawn primarily from four NIST standardization competitions. Our benchmark consists of three tiers: (i) primitives with known practical breaks; (ii) primitives with no known practical break, evaluated both at full strength and as scaled-down variants; and (iii) a challenge set of production primitives at the frontier of cryptanalysis. Five frontier models (Claude Opus 4.8, Sonnet 5, Mythos 5, GPT-5.5, and the open-weights GLM-5.2) break 65%­86% of Tier 1 schemes, 6­12 Tier-2 schemes at full strength, and 24­61 across all scaled-down variants. Beyond deriving known results, models produce novel cryptanalysis, such as a key-recovery attack that exploits a design flaw in the SpoC AEAD and an error in KINDI’s published CCA-security proof, both to the best of our knowledge not previously known...

---

## Bleeping Computer Security

### 1. OpenAI agent used exposed credentials at 4 services in Hugging Face breach

**Link:** [https://www.bleepingcomputer.com/news/security/openai-agent-used-exposed-credentials-at-4-services-in-hugging-face-breach/](https://www.bleepingcomputer.com/news/security/openai-agent-used-exposed-credentials-at-4-services-in-hugging-face-breach/)

**Published:** 7/29/2026

**Summary:** In a new update, OpenAI says its AI models also used publicly exposed credentials to compromise accounts on four third-party services during the recent attack on Hugging Face, expanding the scope of the four-day security incident to other organizations. [...]

---

## GitHub Security Blog

### 1. Tame Dependabot: Group your updates, slow the cadence, keep security fast

**Link:** [https://github.blog/security/supply-chain-security/tame-dependabot-group-your-updates-slow-the-cadence-keep-security-fast/](https://github.blog/security/supply-chain-security/tame-dependabot-group-your-updates-slow-the-cadence-keep-security-fast/)

**Published:** 7/29/2026

**Summary:** Dependabot keeps your dependencies current, but its defaults can flood your repository with pull requests. Here's how grouping updates, slowing the cadence, and keeping security fixes fast cut the noise on a Microsoft open source project. The post Tame Dependabot: Group your updates, slow the cadence, keep security fast appeared first on The GitHub Blog.

---

### 2. Disrupting supply chain attacks on npm and GitHub Actions

**Link:** [https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/](https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/)

**Published:** 7/28/2026

**Summary:** Explore the changes we've shipped across npm and GitHub Actions over the past few months to disrupt supply chain attack techniques and limit their impact. The post Disrupting supply chain attacks on npm and GitHub Actions appeared first on The GitHub Blog.

---

## GitGuardian Blog

### 1. An AI Agent Breached Hugging Face. The Attack Playbook Was Older Than the Attacker

**Link:** [https://blog.gitguardian.com/hugging-face-breach-ai-agent-security/](https://blog.gitguardian.com/hugging-face-breach-ai-agent-security/)

**Published:** 7/29/2026

**Summary:** OpenAI's models escaped a benchmark sandbox and ended up inside Hugging Face's production systems. The attack made history; the openings it used were reusable credentials and flat internal access, and those are fixable now.

---

### 2. How to Reduce Time to Revoke for Exposed Credentials

**Link:** [https://blog.gitguardian.com/how-to-reduce-time-to-revoke-for-exposed-credentials/](https://blog.gitguardian.com/how-to-reduce-time-to-revoke-for-exposed-credentials/)

**Published:** 7/28/2026

**Summary:** Learn how to measure time to revoke for exposed credentials using validation and invalidation timestamps, remediation SLAs, and CISO reporting metrics.

---

## The Hacker News

### 1. Three Critical VMware Flaws Allow Auth Bypass, Code Execution, and VM Escape

**Link:** [https://thehackernews.com/2026/07/three-critical-vmware-flaws-allow-auth.html](https://thehackernews.com/2026/07/three-critical-vmware-flaws-allow-auth.html)

**Published:** 7/29/2026

**Summary:** Broadcom has released security updates to address multiple security flaws impacting VMware ESX, vCenter, Workstation, and Fusion, three of which have been designated as critical in severity.  The first of the three critical-rated flaws is CVE-2026-59309 (CVSS score: 9.8), which has been described as an authentication bypass in VMware vCenter.  "A malicious actor with network access to vCenter

---

### 2. Researchers Show a Single Malicious Webpage Visit Can Compromise Tor Browser

**Link:** [https://thehackernews.com/2026/07/researchers-show-single-malicious.html](https://thehackernews.com/2026/07/researchers-show-single-malicious.html)

**Published:** 7/29/2026

**Summary:** Nebula Security says a patched Firefox JIT flaw could be triggered by simply visiting a malicious webpage and was also used to compromise Tor Browser.  Tracked as CVE-2026-10702, the bug provides arbitrary code execution inside the browser's renderer process. Mozilla rated it High and fixed it in the Firefox 151.0.3 update.  "No settings or additional user interaction are required," Eten Zou,

---

### 3. OpenAI Agent Used Exposed Credentials Across Four Services During Hugging Face Breach

**Link:** [https://thehackernews.com/2026/07/openai-agent-used-exposed-credentials.html](https://thehackernews.com/2026/07/openai-agent-used-exposed-credentials.html)

**Published:** 7/29/2026

**Summary:** OpenAI on Tuesday revealed the rogue artificial intelligence (AI) agent that escaped its sealed evaluation environment and broke into Hugging Face's production environment also hacked multiple third-party accounts and services as part of the attack.  The latest disclosure shows that the security incident, which stemmed from an internal security test, was more extensive in scope than previously

---

### 4. New Gitea RCE Lets Repository Writers Plant a Git Hook to Run Shell Commands

**Link:** [https://thehackernews.com/2026/07/new-gitea-rce-lets-repository-writers.html](https://thehackernews.com/2026/07/new-gitea-rce-lets-repository-writers.html)

**Published:** 7/29/2026

**Summary:** Gitea, the self-hosted Git platform, has patched a critical remote code execution vulnerability. A user with ordinary repository write access can turn attacker-controlled patch content into a live Git hook and run shell commands as the Gitea service account.  Tracked as CVE-2026-60004 (CVSS score: 9.8), the flaw affects Gitea versions 1.17 and later before 1.27.1 and is fixed in 1.27.1. The

---

### 5. Flying Eagle Android RAT Traces Found on 170 Servers as Source Code Circulates

**Link:** [https://thehackernews.com/2026/07/flying-eagle-android-rat-traces-found.html](https://thehackernews.com/2026/07/flying-eagle-android-rat-traces-found.html)

**Published:** 7/29/2026

**Summary:** Source code for the Flying Eagle Android remote access trojan (RAT) framework is circulating through criminal Telegram channels. Hunt.io and independent researcher NetAskari traced matching control panels and certificates to 170 internet servers.  They linked the framework to a fake "公安一网通办" Public Security service application targeting Android users in China. The kit supports payment-password

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

### 3. 2026 Mid-Year Update: On Pace for Our Biggest Year Yet

**Link:** [https://www.stepsecurity.io/blog/2026-mid-year-update-on-pace-for-our-biggest-year-yet](https://www.stepsecurity.io/blog/2026-mid-year-update-on-pace-for-our-biggest-year-yet)

**Published:** 7/28/2026

**Summary:** After 5x ARR growth in 2024 and again in 2025, StepSecurity is on pace for its biggest year yet in 2026. What is driving it, and why supply chain security is inflecting.

---

## CISA Advisories

### 1. CISA and Partners Unveil Updated Software Bill of Materials Resource That Improves Transparency, Security and Risk-Informed Decision Making

**Link:** [https://www.cisa.gov/news-events/news/cisa-and-partners-unveil-updated-software-bill-materials-resource-improves-transparency-security-and](https://www.cisa.gov/news-events/news/cisa-and-partners-unveil-updated-software-bill-materials-resource-improves-transparency-security-and)

**Published:** 7/29/2026

**Summary:** ...

---

### 2. CISA Joins Australia and Others to Publish Guidance to Isolate Operational Technology and Enabling Systems in Critical Infrastructure

**Link:** [https://www.cisa.gov/news-events/news/cisa-joins-australia-and-others-publish-guidance-isolate-operational-technology-and-enabling-systems](https://www.cisa.gov/news-events/news/cisa-joins-australia-and-others-publish-guidance-isolate-operational-technology-and-enabling-systems)

**Published:** 7/28/2026

**Summary:** ...

---

## Sonatype Security Research

### 1. AI Changes the Software Supply Chain and How We Secure It

**Link:** [https://www.sonatype.com/blog/ai-changes-the-software-supply-chain-and-how-we-secure-it](https://www.sonatype.com/blog/ai-changes-the-software-supply-chain-and-how-we-secure-it)

**Published:** 7/28/2026

**Summary:** Artificial intelligence is expanding the software supply chain beyond traditional software components, introducing new dependencies that require security leaders to rethink how software is governed.

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

**Last Updated:** 2026-07-29T18:46:42.259Z
