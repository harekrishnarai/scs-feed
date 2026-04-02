# Supply Chain Security Daily Report
**Date:** 2026-04-02
**Total Reports Found:** 22

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: SyNumpy – a Header only C++17 library for working with NumPy Arrays

**Link:** [https://github.com/symisc/sy-numpy-cpp](https://github.com/symisc/sy-numpy-cpp)

**Published:** 4/2/2026

**Summary:** Article URL: https://github.com/symisc/sy-numpy-cpp Comments URL: https://news.ycombinator.com/item?id=47618247 Points: 2 # Comments: 0

---

### 2. Show HN: Most products have no idea what their AI agents did yesterday

**Link:** [https://velt.dev/activity-logs](https://velt.dev/activity-logs)

**Published:** 4/2/2026

**Summary:** We build collaboration SDKs at Velt (YC W22). Comments, presence, real-time editing (CRDT), recording, notifications. A pattern we keep seeing: products add AI agents that write, edit, and approve things. Human actions get logged. Agent actions don't. Same workflow, different accountability. We shipped Activity Logs to fix this. Same record for humans and AI agents. Immutable by default. Auto-captures collaboration events, plus createActivity() for your own: https://velt.dev/activity-logs Curious how others are handling this. Comments URL: https://news.ycombinator.com/item?id=47618235 Points: 2 # Comments: 0

---

### 3. Show HN: AptSelect – A local desktop app to test LLMs side-by-side

**Link:** [https://aptselect.com/](https://aptselect.com/)

**Published:** 4/2/2026

**Summary:** Hi HN, Whenever I needed an LLM to reliably output JSON or follow strict formatting rules, I kept having to write throwaway JavaScript scripts just to test the same prompt against OpenAI, Anthropic, and Google APIs to see who actually followed the instructions. It was a tedious workflow, so I built a local desktop UI to just do it for me. What it does: * Sends one prompt to OpenAI, Anthropic, Mistral, and Google simultaneously so you can compare the outputs in a single grid. * Automatically checkpoints your runs. If you tweak a word and the output gets worse, you can just click back to the previous version. * Exposes raw API responses, latency stats, and token usage instead of hiding them behind a chat UI. * Saves your history to a local SQLite file on your disk. * Keeps your API keys encrypted locally (zero telemetry). Yes, it is built on Electron. I sincerely apologize to your RAM. I tried to mitigate the usual bloat by sticking to vanilla JS and native Web Components, so it idles around ~240MB, but it definitely still has some rough edges. My plan is a one-time $29 perpetual license, but right now the public beta is completely free. I'm holding off on charging because I need a solid Merchant of Record to handle global tax compliance. Lemon Squeezy seems appropriate, but I still need to validate it (sadly, Stripe isn't onboarding new customers from India right now). If anyone has recently dealt with a payment processor that handles global compliance for desktop software, I would really appreciate your suggestions. You can grab the Mac, Windows, or Linux binaries here: https://aptselect.com/ If this fits into your workflow, I'd love to hear your feedback, bug reports, or any features you'd actually want in a local prompt runner. Comments URL: https://news.ycombinator.com/item?id=47618145 Points: 2 # Comments: 0

---

## Schneier on Security

### 1. US Bans All Foreign-Made Consumer Routers

**Link:** [https://www.schneier.com/blog/archives/2026/04/us-bans-all-foreign-made-consumer-routers.html](https://www.schneier.com/blog/archives/2026/04/us-bans-all-foreign-made-consumer-routers.html)

**Published:** 4/2/2026

**Summary:** This is for new routers; you don’t have to throw away your existing ones: The Executive Branch determination noted that foreign-produced routers (1) introduce “a supply chain vulnerability that could disrupt the U.S. economy, critical infrastructure, and national defense” and (2) pose “a severe cybersecurity risk that could be leveraged to immediately and severely disrupt U.S. critical infrastructure and directly harm U.S. persons.”  More information: Any new router made outside the US will now need to be approved by the FCC before it can be imported, marketed, or sold in the country...

---

### 2. Possible US Government iPhone Hacking Tool Leaked

**Link:** [https://www.schneier.com/blog/archives/2026/04/possible-us-government-iphone-hacking-tool-leaked.html](https://www.schneier.com/blog/archives/2026/04/possible-us-government-iphone-hacking-tool-leaked.html)

**Published:** 4/2/2026

**Summary:** Wired writes (alternate source): Security researchers at Google on Tuesday released a report describing what they’re calling “Coruna,” a highly sophisticated iPhone hacking toolkit that includes five complete hacking techniques capable of bypassing all the defenses of an iPhone to silently install malware on a device when it visits a website containing the exploitation code. In total, Coruna takes advantage of 23 distinct vulnerabilities in iOS, a rare collection of hacking components that suggests it was created by a well-resourced, likely state-sponsored group of hackers...

---

### 3. Is “Hackback” Official US Cybersecurity Strategy?

**Link:** [https://www.schneier.com/blog/archives/2026/04/is-hackback-official-us-cybersecurity-strategy.html](https://www.schneier.com/blog/archives/2026/04/is-hackback-official-us-cybersecurity-strategy.html)

**Published:** 4/1/2026

**Summary:** The 2026 US “Cyber Strategy for America” document is mostly the same thing we’ve seen out of the White House for over a decade, but with a more aggressive tone. But one sentence stood out: “We will unleash the private sector by creating incentives to identify and disrupt adversary networks and scale our national capabilities.” This sounds like a call for hackback: giving private companies permission to conduct offensive cyber operations. The Economist noticed (alternate link) this, too. I think this is an incredibly dumb idea: In warfare, the notion of counterattack is extremely powerful. Going after the enemy­—its positions, its supply lines, its factories, its infrastructure—­is an age-old military tactic. But in peacetime, we call it revenge, and consider it dangerous. Anyone accused of a crime deserves a fair trial. The accused has the right to defend himself, to face his accuser, to an attorney, and to be presumed innocent until proven guilty...

---

### 4. A Taxonomy of Cognitive Security

**Link:** [https://www.schneier.com/blog/archives/2026/04/a-taxonomy-of-cognitive-security.html](https://www.schneier.com/blog/archives/2026/04/a-taxonomy-of-cognitive-security.html)

**Published:** 4/1/2026

**Summary:** Last week, I listened to a fascinating talk by K. Melton on cognitive security, cognitive hacking, and reality pentesting. The slides from the talk are here, but—even better—Menton has a long essay laying out the basic concepts and ideas. The whole thing is important and well worth reading, and I hesitate to excerpt. Here’s a taste: The NeuroCompiler is where raw sensory data gets interpreted before you’re consciously aware of it. It decides what things mean, and it does this fast, automatic, and mostly invisible. It’s also where the majority of cognitive exploits actually land, right in this sweet spot between perception and conscious thought...

---

## The Hacker News

### 1. Cisco Patches 9.8 CVSS IMC and SSM Flaws Allowing Remote System Compromise

**Link:** [https://thehackernews.com/2026/04/cisco-patches-98-cvss-imc-and-ssm-flaws.html](https://thehackernews.com/2026/04/cisco-patches-98-cvss-imc-and-ssm-flaws.html)

**Published:** 4/2/2026

**Summary:** Cisco has released updates to address a critical security flaw in the Integrated Management Controller (IMC) that, if successfully exploited, could allow an unauthenticated, remote attacker to bypass authentication and gain access to the system with elevated privileges. The vulnerability, tracked as CVE-2026-20093, carries a CVSS score of 9.8 out of a maximum of 10.0. "This

---

### 2. ThreatsDay Bulletin: Pre-Auth Chains, Android Rootkits, CloudTrail Evasion & 10 More Stories

**Link:** [https://thehackernews.com/2026/04/threatsday-bulletin-pre-auth-chains.html](https://thehackernews.com/2026/04/threatsday-bulletin-pre-auth-chains.html)

**Published:** 4/2/2026

**Summary:** The latest ThreatsDay Bulletin is basically a cheat sheet for everything breaking on the internet right now. No corporate fluff or boring lectures here, just a quick and honest look at the messy reality of keeping systems safe this week. Things are moving fast. The list includes researchers chaining small bugs together to create massive backdoors, old software flaws

---

### 3. Researchers Uncover Mining Operation Using ISO Lures to Spread RATs and Crypto Miners

**Link:** [https://thehackernews.com/2026/04/researchers-uncover-mining-operation.html](https://thehackernews.com/2026/04/researchers-uncover-mining-operation.html)

**Published:** 4/2/2026

**Summary:** A financially motivated operation codenamed REF1695 has been observed leveraging fake installers to deploy remote access trojans (RATs) and cryptocurrency miners since November 2023. "Beyond cryptomining, the threat actor monetizes infections through CPA (Cost Per Action) fraud, directing victims to content locker pages under the guise of software registration," Elastic

---

### 4. The State of Trusted Open Source Report

**Link:** [https://thehackernews.com/2026/04/the-state-of-trusted-open-source-report.html](https://thehackernews.com/2026/04/the-state-of-trusted-open-source-report.html)

**Published:** 4/2/2026

**Summary:** In December 2025, we shared the first-ever The State of Trusted Open Source report, featuring insights from our product data and customer base on open source consumption across our catalog of container image projects, versions, images, language libraries, and builds. These insights shed light on what teams pull, deploy, and maintain day to day, alongside the vulnerabilities and

---

### 5. WhatsApp Alerts 200 Users After Fake iOS App Installed Spyware; Italian Firm Faces Action

**Link:** [https://thehackernews.com/2026/04/whatsapp-alerts-200-users-after-fake.html](https://thehackernews.com/2026/04/whatsapp-alerts-200-users-after-fake.html)

**Published:** 4/2/2026

**Summary:** Meta-owned messaging platform WhatsApp said it alerted about 200 users who were tricked into installing a bogus version of its iOS app that was infected with spyware. According to reports from Italian newspaper La Repubblica and news agency ANSA, the vast majority of the targets are located in Italy. It's assessed that the threat actors behind the activity used social engineering

---

## Kiuwan Blog

### 1. 10 Leading Software Composition Analysis Tools for DevSecOps Teams

**Link:** [https://www.kiuwan.com/blog/software-composition-analysis-tools/](https://www.kiuwan.com/blog/software-composition-analysis-tools/)

**Published:** 4/2/2026

**Summary:** TL;DR Software composition analysis (SCA) tools help teams identify vulnerable and outdated open-source components, manage license risk, generate SBOMs, and secure the software supply chain without slowing delivery. In this guide, we compare ten leading SCA tools based on vulnerability detection, license compliance, SBOM support, integrations, remediation workflows, and developer usability. For teams that want […]

---

## StepSecurity Blog

### 1. axios Compromised on npm - Malicious Versions Drop Remote Access Trojan

**Link:** [https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)

**Published:** 4/2/2026

**Summary:** Hijacked maintainer account used to publish poisoned axios releases including 1.14.1 and 0.30.4. The attacker injected a hidden dependency that drops a cross platform RAT. We are actively investigating and will update this post with a full technical analysis.

---

### 2. 10 Layers Deep: How StepSecurity Stops TeamPCP's Trivy Supply Chain Attack on GitHub Actions

**Link:** [https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions](https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions)

**Published:** 4/2/2026

**Summary:** TeamPCP weaponized 76 Trivy version tags overnight. The KICS attack followed the same playbook days later. One security control is not enough. Here is how the StepSecurity platform's ten independent security layers work together to prevent credential exfiltration, detect compromised actions at runtime, and respond to incidents across your entire organization before attackers can succeed.

---

### 3. Malicious IoliteLabs VSCode Extensions Target Solidity Developers on Windows, macOS, and Linux with Backdoor

**Link:** [https://www.stepsecurity.io/blog/malicious-iolitelabs-vscode-extensions-target-solidity-developers-on-windows-macos-and-linux-with-backdoor](https://www.stepsecurity.io/blog/malicious-iolitelabs-vscode-extensions-target-solidity-developers-on-windows-macos-and-linux-with-backdoor)

**Published:** 4/2/2026

**Summary:** A supply chain attack targeting Solidity and Web3 developers has been discovered across three IoliteLabs VSCode extensions (solidity-macos, solidity-windows, and solidity-linux) embedding obfuscated backdoors that download remote payloads and establish persistence on all major platforms. StepSecurity is actively investigating this incident and will publish a full technical analysis with IOCs and remediation guidance shortly.

---

### 4. TeamPCP Plants WAV Steganography Credential Stealer in telnyx PyPI Package

**Link:** [https://www.stepsecurity.io/blog/teampcp-plants-wav-steganography-credential-stealer-in-telnyx-pypi-package](https://www.stepsecurity.io/blog/teampcp-plants-wav-steganography-credential-stealer-in-telnyx-pypi-package)

**Published:** 4/2/2026

**Summary:** On March 27, 2026, TeamPCP injected a WAV steganography-based credential stealer into two releases of the telnyx Python SDK on PyPI. The issue was disclosed in team-telnyx/telnyx-python#235. TeamPCP is the same group behind the litellm supply chain compromise three days earlier, identified by a shared RSA-4096 public key, identical encryption scheme, and the tpcp.tar.gz exfiltration signature present in both attacks.

---

## GitHub Security Blog

### 1. Securing the open source supply chain across GitHub

**Link:** [https://github.blog/security/supply-chain-security/securing-the-open-source-supply-chain-across-github/](https://github.blog/security/supply-chain-security/securing-the-open-source-supply-chain-across-github/)

**Published:** 4/1/2026

**Summary:** Recent attacks on open source focus on exfiltrating secrets; here are the prevention steps you can take today, plus a look at the security capabilities GitHub is working on. The post Securing the open source supply chain across GitHub appeared first on The GitHub Blog.

---

## GitGuardian Blog

### 1. Key Leaks, Vault Failures, and TEE Attacks: Highlights from RWC 2026

**Link:** [https://blog.gitguardian.com/highlights-from-rwc-2026/](https://blog.gitguardian.com/highlights-from-rwc-2026/)

**Published:** 4/1/2026

**Summary:** What resonated most at RWC 2026? GitGuardian highlights key research on private key leaks, password managers, trusted execution environments, and secret sprawl.

---

## Endor Labs Blog

### 1. New research: malware in open source ecosystems surges 14x as attackers hijack trusted packages | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/new-research-malware-in-open-source-ecosystems-surges-14x-as-attackers-hijack-trusted-packages](https://www.endorlabs.com/learn/new-research-malware-in-open-source-ecosystems-surges-14x-as-attackers-hijack-trusted-packages)

**Published:** 4/1/2026

**Summary:** New Endor Labs research reveals 92% of npm account takeovers occurred in 2025, targeting packages with millions of downloads

---

## Bleeping Computer Security

### 1. Routine Access Is Powering Modern Intrusions, a New Threat Report Finds

**Link:** [https://www.bleepingcomputer.com/news/security/routine-access-is-powering-modern-intrusions-a-new-threat-report-finds/](https://www.bleepingcomputer.com/news/security/routine-access-is-powering-modern-intrusions-a-new-threat-report-finds/)

**Published:** 4/1/2026

**Summary:** Modern intrusions increasingly start with valid credentials and routine access, not exploits. Blackpoint Cyber's upcoming threat report shows how VPN abuse, RMM tools, and social engineering drive most incidents. [...]

---

## Sonatype Security Research

### 1. How Sonatype's Container Scanning Protects You From Zero-Days

**Link:** [https://www.sonatype.com/blog/how-sonatypes-container-scanning-protects-you-from-zero-days](https://www.sonatype.com/blog/how-sonatypes-container-scanning-protects-you-from-zero-days)

**Published:** 4/1/2026

**Summary:** Software development moves fast, and engineering teams face intense pressure to deliver applications securely without slowing down. Containers offer incredible speed and portability, allowing developers to build and deploy applications rapidly. But this speed introduces hidden risks when organizations rely on inadequate tools to secure their environments.

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

**Last Updated:** 2026-04-02T18:45:44.593Z
