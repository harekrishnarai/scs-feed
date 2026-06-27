# Supply Chain Security Daily Report
**Date:** 2026-06-27
**Total Reports Found:** 12

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Bleeping Computer Security

### 1. Clean GitHub repo tricks AI coding agents into running malware

**Link:** [https://www.bleepingcomputer.com/news/security/clean-github-repo-tricks-ai-coding-agents-into-running-malware/](https://www.bleepingcomputer.com/news/security/clean-github-repo-tricks-ai-coding-agents-into-running-malware/)

**Published:** 6/27/2026

**Summary:** An agentic coding tool tasked with cloning and setting up a seemingly benign GitHub repository could execute a malicious payload that remains invisible to security scanners, AI agents, and human reviewers. [...]

---

### 2. Polymarket customers lose $3 million in supply-chain attack

**Link:** [https://www.bleepingcomputer.com/news/security/polymarket-customers-lose-3-million-in-supply-chain-attack/](https://www.bleepingcomputer.com/news/security/polymarket-customers-lose-3-million-in-supply-chain-attack/)

**Published:** 6/26/2026

**Summary:** Polymarket says it will fully reimburse customers who lost an estimated $3 million after hackers injected a malicious script into the platform's frontend following a breach at a third-party vendor. [...]

---

## Endor Labs Blog

### 1. Open source carries the world. Patching it at Mythos-scale can't fall to maintainers alone. | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/mythos-zero-day-patches-project-akrites](https://www.endorlabs.com/learn/mythos-zero-day-patches-project-akrites)

**Published:** 6/26/2026

**Summary:** We’re launching Endor Zero-Day Patches and joining the Linux Foundation’s Project Akrites as a founding member to help enterprises and open-source maintainers patch at AI speed and scale.

---

## The Hacker News

### 1. New SharkLoader Malware Deploys Cobalt Strike in StrikeShark Cyberattacks

**Link:** [https://thehackernews.com/2026/06/new-sharkloader-malware-deploys-cobalt.html](https://thehackernews.com/2026/06/new-sharkloader-malware-deploys-cobalt.html)

**Published:** 6/26/2026

**Summary:** A newly discovered cyber attack campaign has been observed delivering a previously undocumented malware family called SharkLoader that acts as a loader for deploying Cobalt Strike Beacon on compromised hosts.  Kaspersky, which is tracking the activity under the moniker StrikeShark, said the campaign has targeted a diplomatic organization in Indonesia, government organizations in Taiwan,

---

### 2. Chinese-Speaking APT Deploys New TinyRCT Backdoor in Southeast Asia Campaign

**Link:** [https://thehackernews.com/2026/06/chinese-speaking-apt-deploys-new.html](https://thehackernews.com/2026/06/chinese-speaking-apt-deploys-new.html)

**Published:** 6/26/2026

**Summary:** A Chinese-speaking advanced persistent threat (APT) actor has been linked to a new custom backdoor called TinyRCT as part of cyber attacks aimed at government entities and critical infrastructure in Southeast Asia.  The activity, particularly aimed at state-owned enterprises in the energy and government sectors, has been attributed to a threat actor called CL-STA-1062, which Palo Alto Networks

---

### 3. New Linux pedit COW Exploit Enables Root Access by Poisoning Cached Binaries

**Link:** [https://thehackernews.com/2026/06/new-linux-pedit-cow-exploit-enables.html](https://thehackernews.com/2026/06/new-linux-pedit-cow-exploit-enables.html)

**Published:** 6/26/2026

**Summary:** A flaw in the Linux kernel's traffic-control subsystem can let a local unprivileged user gain root on affected systems.  CVE-2026-46331, nicknamed "pedit COW," is an out-of-bounds write in the packet-editing action (act_pedit) that corrupts shared page-cache memory. A public, working exploit appeared within a day of the CVE assignment on June 16. Red Hat rates the flaw as

---

### 4. Amazon Q Developer Flaw Could Let Malicious Repos Run Code via MCP Configs

**Link:** [https://thehackernews.com/2026/06/amazon-q-developer-flaw-could-let.html](https://thehackernews.com/2026/06/amazon-q-developer-flaw-could-let.html)

**Published:** 6/26/2026

**Summary:** A high-severity flaw in Amazon Q Developer let a malicious repository run commands and steal a developer's cloud credentials. The path was short: a developer opens the repo, trusts the workspace, and Amazon Q does the rest. Amazon has patched it.  Tracked as CVE-2026-12957 (CVSS 8.5), the bug sat in how Amazon's AI coding assistant handled Model Context Protocol (MCP) servers.  Wiz

---

### 5. Miasma Malware Targets npm Packages and GitHub Actions in Supply Chain Attack

**Link:** [https://thehackernews.com/2026/06/miasma-malware-targets-npm-packages-and.html](https://thehackernews.com/2026/06/miasma-malware-targets-npm-packages-and.html)

**Published:** 6/26/2026

**Summary:** Cybersecurity researchers have flagged yet another evolution of the supply chain attack linked to the Mini Shai-Hulud, Miasma, and Hades malware family that has compromised a new set of npm packages, even as it has propagated to the Go ecosystem.  "The latest activity includes malicious npm releases affecting LeoPlatform and RStreams packages, GitHub Actions workflow abuse, and a related Go

---

## Schneier on Security

### 1. Meta Is Testing Facial Recognition for Police and Military

**Link:** [https://www.schneier.com/blog/archives/2026/06/meta-is-testing-facial-recognition-for-police-and-military.html](https://www.schneier.com/blog/archives/2026/06/meta-is-testing-facial-recognition-for-police-and-military.html)

**Published:** 6/26/2026

**Summary:** We know that ICE wants to deploy eyeglasses with facial recognition that can identify people in real time. Turns out Meta is prototyping the feature with a Pentagon supplier. (Alternate news story.)

---

### 2. One Million Passports Leaked Online

**Link:** [https://www.schneier.com/blog/archives/2026/06/one-million-passports-leaked-online.html](https://www.schneier.com/blog/archives/2026/06/one-million-passports-leaked-online.html)

**Published:** 6/26/2026

**Summary:** A database of almost a million passports from around the world was leaked online. Note what happened. A high-value credential—a passport—was used in an ancillary low-value authentication system: ID verification for cannabis dispensaries. And it’s the low-value system that got hacked, putting the high-value credential at risk.

---

## StepSecurity Blog

### 1. Multiple @immobiliarelabs Backstage Plugins Compromised on npm

**Link:** [https://www.stepsecurity.io/blog/immobiliarelabs-npm-packages-compromised](https://www.stepsecurity.io/blog/immobiliarelabs-npm-packages-compromised)

**Published:** 6/26/2026

**Summary:** Compromised versions run a malicious payload at npm install time through a binding.gyp node-gyp hook, harvesting credentials from sources like GitHub Actions secrets, cloud provider keys, and package registry tokens, while trying to persist in AI coding assistant configs. Static analysis of version 2.1.2 against the clean 2.1.1 release revealed a new 5 MB index.js and an added binding.gyp, both absent from earlier releases.

---

## GitGuardian Blog

### 1. AI Is the Newest Developer To Misunderstand Secrets In Your Git History

**Link:** [https://blog.gitguardian.com/ai-and-secrets-in-git-history/](https://blog.gitguardian.com/ai-and-secrets-in-git-history/)

**Published:** 6/26/2026

**Summary:** AI assistants are repeating a common Git mistake: committing fixes that remove secrets only from the latest code, not from repository history. GitGuardian AI Skills can help.

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

**Last Updated:** 2026-06-27T18:51:24.402Z
