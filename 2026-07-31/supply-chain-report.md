# Supply Chain Security Daily Report
**Date:** 2026-07-31
**Total Reports Found:** 22

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Lerd, an open source Herd-like PHP development environment for Linux and macOS

**Link:** [https://github.com/lerd-env/lerd](https://github.com/lerd-env/lerd)

**Published:** 7/31/2026

**Summary:** Article URL: https://github.com/lerd-env/lerd Comments URL: https://news.ycombinator.com/item?id=49127108 Points: 1 # Comments: 0

---

### 2. Show HN: An Unexpected Computer – Universal computing: echo, ed, test and exec [pdf]

**Link:** [https://seriot.ch/resources/unexpected_computer_pagedout_009.pdf](https://seriot.ch/resources/unexpected_computer_pagedout_009.pdf)

**Published:** 7/31/2026

**Summary:** Article URL: https://seriot.ch/resources/unexpected_computer_pagedout_009.pdf Comments URL: https://news.ycombinator.com/item?id=49127048 Points: 2 # Comments: 0

---

### 3. The First Open-Source Firmware Released for Modern AMD Ryzen AM5 Platform

**Link:** [https://www.phoronix.com/news/OSS-Firmware-MSI-B850-P-WIFI](https://www.phoronix.com/news/OSS-Firmware-MSI-B850-P-WIFI)

**Published:** 7/31/2026

**Summary:** Article URL: https://www.phoronix.com/news/OSS-Firmware-MSI-B850-P-WIFI Comments URL: https://news.ycombinator.com/item?id=49127026 Points: 2 # Comments: 1

---

### 4. Show HN: Usbatlas – simple CLI utility to see what USBIP devices are attached

**Link:** [https://github.com/comalice/usbatlas](https://github.com/comalice/usbatlas)

**Published:** 7/31/2026

**Summary:** Hello HN, This is a simple CLI that I vibe coded to scratch an itch at work. The problem we had was multiple USBIP devices attached to a single Linux server, and we were having a hard time seeing who connected what. Enter `usbatlas`. It's a basic app that lives on top of the Linux device file system and depends on `usbip` [0][1]. It allows you to see what USB devices are attached to your Linux box and where they come from. Currently the device source IP resolution has some issues. I'm working out the kinks right now. Here's an example output:    $ usbatlas --usbip    xHCI Host Controller [serial: xxxx:xx:xx.x]    +- USB2744       +- Lenovo New Calliope USB Keyboard          +- /dev/hidraw0          +- /dev/hidraw1          +- /dev/input/event3          +- /dev/input/event4          +- /dev/input/js0       +- Lenovo USB Optical Mouse          +- /dev/hidraw2          +- /dev/input/event5          +- /dev/input/mouse0    +- Bluetooth 9460/9560 Jefferson Peak (JfP)    +- USB2.1 Hub       +- USB2.1 Hub          +- Saleae Logic       +- FT4232H MiniModule [serial: xxxxxxxx]          +- /dev/ttyUSB4          +- /dev/ttyUSB6          +- /dev/ttyUSB7          +- /dev/ttyUSB8    +- USB2.1 Hub       +- USB2.1 Hub          +- FT4232H MiniModule [serial: xxxxxxxx]             +- /dev/ttyUSB0             +- /dev/ttyUSB1             +- /dev/ttyUSB2             +- /dev/ttyUSB3    xHCI Host Controller [serial: xxxx:xx:xx.x]    +- USB3.1 Hub       +- USB3.1 Hub    +- USB3.1 Hub       +- USB3.1 Hub       +- J-Trace PRO [serial: xxxxxxxx]    USB/IP Virtual Host Controller [serial: xxxxxxxx]    +- FT4232H MiniModule [serial: xxxxxxxx] [usbip]       +- /dev/ttyUSB9       +- /dev/ttyUSB10       +- /dev/ttyUSB11       +- /dev/ttyUSB12    +- FT232R USB UART [serial: xxxxxxxx] [usbip]       +- /dev/ttyUSB13    +- FT4232H MiniModule [serial: xxxxxxxx] [usbip]       +- /dev/ttyUSB14       +- /dev/ttyUSB15       +- /dev/ttyUSB16       +- /dev/ttyUSB17    USB/IP Virtual Host Controller [serial: xxxxxxxx]  https://github.com/dorssel/usbipd-win [1] https://wiki.archlinux.org/title/USB/IP Comments URL: https://news.ycombinator.com/item?id=49127018 Points: 2 # Comments: 0

---

## StepSecurity Blog

### 1. Anthropic Incident: An AI Agent Published a Malicious Package to PyPI and 15 Real Systems Ran It

**Link:** [https://www.stepsecurity.io/blog/anthropic-incident-ai-agent-malicious-package-pypi](https://www.stepsecurity.io/blog/anthropic-incident-ai-agent-malicious-package-pypi)

**Published:** 7/31/2026

**Summary:** An AI agent published a malicious package to PyPI and 15 systems ran it within an hour. What Anthropic's incident means for supply chain security.

---

### 2. Dev Machine Guard Now Inventories AI Agent Skills on Developer Machines 

**Link:** [https://www.stepsecurity.io/blog/dev-machine-guard-now-inventories-ai-agent-skills-on-developer-machines](https://www.stepsecurity.io/blog/dev-machine-guard-now-inventories-ai-agent-skills-on-developer-machines)

**Published:** 7/30/2026

**Summary:** Dev Machine Guard now inventories AI agent skills across your developer fleet. See every skill installed for Claude Code, Codex, GitHub Copilot, and other agents, flag skills with executable code, hooks, or shell commands, trace provenance, and detect version drift.

---

### 3. Compromised npm Packages: @joyfill/components and @joyfill/layouts Ship an Obfuscated Remote Access Trojan

**Link:** [https://www.stepsecurity.io/blog/joyfill-npm-supply-chain-compromise](https://www.stepsecurity.io/blog/joyfill-npm-supply-chain-compromise)

**Published:** 7/30/2026

**Summary:** Malicious beta versions of the Joyfill npm packages @joyfill/components and @joyfill/layouts hide an obfuscated remote access trojan and credential stealer. Full analysis, IOCs, and remediation from StepSecurity.

---

## The Hacker News

### 1. HollowFrame Loader Deploys Matryoshka Backdoor in Spear-Phishing Attack on Law Firm

**Link:** [https://thehackernews.com/2026/07/hollowframe-loader-deploys-matryoshka.html](https://thehackernews.com/2026/07/hollowframe-loader-deploys-matryoshka.html)

**Published:** 7/31/2026

**Summary:** Cybersecurity researchers have shed light on a previously undocumented Go-based loader framework called HollowFrame and a Rust-based malware family tracked as Matryoshka.  According to Blackpoint Cyber, the intrusion sequence begins with a spear-phishing message containing a link to an encrypted archive, which holds a Windows Shortcut (LNK). Executing the file triggers a multi-stage chain that

---

### 2. DPRK-Linked macOS Malvertising Uses Fake Updates to Deliver Crypto-Stealing Malware

**Link:** [https://thehackernews.com/2026/07/dprk-linked-macos-malvertising-uses.html](https://thehackernews.com/2026/07/dprk-linked-macos-malvertising-uses.html)

**Published:** 7/30/2026

**Summary:** Threat actors with ties to North Korea have been attributed to a sophisticated macOS malvertising campaign that involves redirecting users to fake web pages displaying a full-screen non-existent update sequence to deliver malware as part of a new iteration of the long-running Contagious Interview campaign.  The defining aspect of the attack is that bogus macOS software update screen stealthily

---

### 3. The Network Has Become the Control Plane for AI Security

**Link:** [https://thehackernews.com/2026/07/the-network-has-become-control-plane.html](https://thehackernews.com/2026/07/the-network-has-become-control-plane.html)

**Published:** 7/30/2026

**Summary:** Network firewalls are the workhorses of modern cybersecurity. They are trusted to protect the network, blocking malicious traffic and preventing intrusions and breaches. And for decades, network security teams have built controls around a relatively stable model: users connect to applications, applications exchange data, and security tools inspect packets, protocols, and destinations. Firewalls

---

### 4. Hackers Exploit AnySign4PC via Hacked Korean Sites to Install Backdoors Without Prompts

**Link:** [https://thehackernews.com/2026/07/hackers-exploit-anysign4pc-via-hacked.html](https://thehackernews.com/2026/07/hackers-exploit-anysign4pc-via-hacked.html)

**Published:** 7/30/2026

**Summary:** South Korean authorities and four security firms have disclosed a state-sponsored campaign that compromised trusted domestic websites. The attackers used those sites to exploit locally installed financial-security software and infect targeted visitors with SIGNBT or COPPERHEDGE backdoors.  A compromised page could infect a system running a vulnerable AnySign4PC version without a prompt or

---

### 5. Amazon Links Debug and Chalk npm Hijack to North Korea’s Sapphire Sleet

**Link:** [https://thehackernews.com/2026/07/amazon-links-debug-and-chalk-npm-hijack.html](https://thehackernews.com/2026/07/amazon-links-debug-and-chalk-npm-hijack.html)

**Published:** 7/30/2026

**Summary:** Amazon has tied the September 2025 hijack of the npm packages debug and chalk to North Korea. For ten months, the incident sat in the public record as crypto theft: a maintainer phished through a lookalike npm domain and a wallet-draining script pushed into at least 18 packages carrying more than 2 billion weekly downloads between them.  The original Aikido and Wiz reports did not attribute the

---

## Bleeping Computer Security

### 1. ESET tracks rise in malicious AI skills and adaptable malware

**Link:** [https://www.bleepingcomputer.com/news/security/eset-tracks-rise-in-malicious-ai-skills-and-adaptable-malware/](https://www.bleepingcomputer.com/news/security/eset-tracks-rise-in-malicious-ai-skills-and-adaptable-malware/)

**Published:** 7/31/2026

**Summary:** Attackers are adapting established techniques to AI platforms, emerging technologies, and changing user behavior. ESET's new threat report examines the rise of malicious AI skills, AI-assisted malware, ClickFix attacks, record quishing activity, and ransomware tools designed to disable security software. [...]

---

### 2. Anthropic's Claude breached 3 orgs, uploaded PyPI malware during tests

**Link:** [https://www.bleepingcomputer.com/news/security/anthropics-claude-breached-3-orgs-uploaded-pypi-malware-during-tests/](https://www.bleepingcomputer.com/news/security/anthropics-claude-breached-3-orgs-uploaded-pypi-malware-during-tests/)

**Published:** 7/31/2026

**Summary:** One of Anthropic's Claude models built and uploaded a malicious Python package to PyPI during a botched security evaluation, where it ran on 15 real systems and stole credentials from a security vendor. It was one of three incidents affecting real companies. [...]

---

### 3. Amazon links Debug, Chalk NPM supply-chain attacks to North Korean hackers

**Link:** [https://www.bleepingcomputer.com/news/security/amazon-links-debug-chalk-npm-supply-chain-attacks-to-north-korean-hackers/](https://www.bleepingcomputer.com/news/security/amazon-links-debug-chalk-npm-supply-chain-attacks-to-north-korean-hackers/)

**Published:** 7/30/2026

**Summary:** Amazon linked multiple high-profile open-source software supply chain attacks targeting the Node Package Manager (npm) ecosystem to North Korean hackers. [...]

---

## Schneier on Security

### 1. Facial Recognition at Madison Square Garden

**Link:** [https://www.schneier.com/blog/archives/2026/07/facial-recognition-at-madison-square-garden.html](https://www.schneier.com/blog/archives/2026/07/facial-recognition-at-madison-square-garden.html)

**Published:** 7/31/2026

**Summary:** Last month, the story broke (alternate link) that Madison Square Garden uses facial recognition software on everyone entering the facility, and—among other groups—flags activists that oppose using facial recognition. Turns out that the system was shut off for Taylor Swift’s wedding. Evan Greer—one of the people that MSG alerts on—comments: Ironically, Swift herself has reportedly used facial recognition at her own concerts to identify stalkers. This “privacy for me, surveillance for thee” attitude feels like a perfect encapsulation of the future we’re already living in: one where wealthy elites can afford privacy, while the rest of us are forced to live in a corporate surveillance panopticon...

---

### 2. American Being Prosecuted for Wiping His Phone Before Handing It Over to Border Officials

**Link:** [https://www.schneier.com/blog/archives/2026/07/american-being-prosecuted-for-wiping-his-phone-before-handing-it-over-to-border-officials.html](https://www.schneier.com/blog/archives/2026/07/american-being-prosecuted-for-wiping-his-phone-before-handing-it-over-to-border-officials.html)

**Published:** 7/30/2026

**Summary:** He’s being prosecuted for giving border officials a code that wiped his phone: The case centers on a feature included in GrapheneOS, a custom Android operating system that runs in place of the software on most modern Google Pixel devices. Tunick’s attorneys confirmed GrapheneOS was running on his phone. The software feature allows the device owner to set a passcode that deliberately wipes the contents of that device if entered instead of the user’s unlock passcode. Tunick’s case also raises ongoing questions about what constitutional rights can be invoked at the border, which the U.S. government has long asserted is not U.S. soil until a person is authorized to enter...

---

## Sonatype Security Research

### 1. Defining Community Open Source Is Harder Than It Looks

**Link:** [https://www.sonatype.com/blog/defining-community-open-source-is-harder-than-it-looks](https://www.sonatype.com/blog/defining-community-open-source-is-harder-than-it-looks)

**Published:** 7/31/2026

**Summary:** Exemptions sound relatively simple until you try to make them fair.

---

### 2. Walking the Walk on Package Registry Sustainability

**Link:** [https://www.sonatype.com/blog/walking-the-walk-on-package-registry-sustainability](https://www.sonatype.com/blog/walking-the-walk-on-package-registry-sustainability)

**Published:** 7/30/2026

**Summary:** Public package registries are not free extensions of corporate infrastructure. They sit directly in the path of modern software development. Every dependency resolution, automated build, security scan, and release depends on infrastructure that someone has to operate, secure, support, and improve.

---

## GitGuardian Blog

### 1. What Was on This Machine? Answering the Blast Radius Question After a Laptop Compromise

**Link:** [https://blog.gitguardian.com/blast-radius-laptop-compromise/](https://blog.gitguardian.com/blast-radius-laptop-compromise/)

**Published:** 7/30/2026

**Summary:** After a laptop compromise, the hard question is which credentials were on it. See why blast radius scoping is hard, and how to turn it into a revocable list.

---

## CISA Advisories

### 1. CISA Guide Helps Federal Agencies Securely and Effectively Use Open Source Software

**Link:** [https://www.cisa.gov/news-events/news/cisa-guide-helps-federal-agencies-securely-and-effectively-use-open-source-software](https://www.cisa.gov/news-events/news/cisa-guide-helps-federal-agencies-securely-and-effectively-use-open-source-software)

**Published:** 7/30/2026

**Summary:** ...

---

## Kiuwan Blog

### 1. Web Application Security Testing: The Complete Guide

**Link:** [https://www.kiuwan.com/blog/web-application-security-testing/](https://www.kiuwan.com/blog/web-application-security-testing/)

**Published:** 7/30/2026

**Summary:** As the threat landscape continues to evolve, organizations have had to strengthen their cybersecurity posture to overcome more sophisticated and more numerous attacks. Web application security testing has become an increasingly important part of that process, helping teams identify and remediate vulnerabilities at the application layer of their infrastructure before attackers exploit them.  This guide […]

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

**Last Updated:** 2026-07-31T18:56:07.571Z
