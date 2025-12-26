# Supply Chain Security Daily Report
**Date:** 2025-12-26
**Total Reports Found:** 10

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Tixl: Open-source realtime motion graphics

**Link:** [https://github.com/tixl3d/tixl](https://github.com/tixl3d/tixl)

**Published:** 12/26/2025

**Summary:** Article URL: https://github.com/tixl3d/tixl Comments URL: https://news.ycombinator.com/item?id=46394651 Points: 1 # Comments: 0

---

### 2. BitVault – A time-delayed multisig Wallet Solution delivering utmost security

**Link:** [https://www.bitvault.sv/](https://www.bitvault.sv/)

**Published:** 12/26/2025

**Summary:** Article URL: https://www.bitvault.sv/ Comments URL: https://news.ycombinator.com/item?id=46394564 Points: 1 # Comments: 1

---

### 3. Show HN: StegCore – a decision boundary for AI systems (truth ≠ permission)

**Link:** [https://github.com/StegVerse-Labs/StegCore](https://github.com/StegVerse-Labs/StegCore)

**Published:** 12/26/2025

**Summary:** TL;DR Most systems treat “verified” as “allowed.” StegCore separates those concepts. StegCore is a small, docs-first project that defines a decision boundary: given verified continuity (from an external system), it answers allow / deny / defer, with explicit constraints like quorum, guardian review, veto windows, or time-locks. No policy engine yet. No AGI claims. Just the missing layer. ⸻The problem Modern automation — especially AI-driven automation — usually collapses three things into one:  1. Truth (is this authentic / verified?)  2. Authority (is this allowed?)  3. Execution (do the thing) That works… until it doesn’t. When something goes wrong, there’s no clean place to:  • pause an action  • require consent  • escalate to a human  • recover without shutting everything down Verified truth alone doesn’t tell you what is permitted. ⸻What StegCore does StegCore defines a narrow interface: Given verified continuity, can this actor perform this action right now — and under what constraints? Inputs:  • verified continuity evidence (opaque to StegCore; e.g. from StegID)  • actor class (human / AI / system)  • action intent  • policy context (structure only) Output:  • allow, deny, or defer  • a stable, machine-readable reason code  • optional constraints (quorum, guardian, veto window, time-lock, escalation) StegCore:  • does not verify receipts  • does not store identity  • does not execute actions  • does not claim autonomy or intelligence It declares decisions. Other systems act (or don’t). ⸻Why “defer” matters Most systems only support allow or deny. In real systems, the safest answer is often:  • “not yet”  • “with consent”  • “after review”  • “after a delay” StegCore treats defer as a first-class outcome, not a workaround. That’s the difference between:  • brittle automation and  • recoverable automation ⸻What’s in the repo today  •  Clear decision model and policy shape docs (authoritative)  •  Explicit agent lifecycle (intent → continuity → decision → execution)  •  A minimal, deterministic decision interface with tests  •  Scaffolding for state/audit signals (not continuity truth) There is no policy engine yet. That’s intentional. The docs are the contract; code is subordinate. ⸻What this is not  • Not an AGI claim  • Not an auth system  • Not identity management  • Not a rules engine  • Not a replacement for existing security tooling It’s a missing layer that can sit between verification and execution. ⸻Why this exists We kept seeing the same failure mode: “The system was technically correct, but it shouldn’t have been allowed to do that.” StegCore exists to make “allowed” explicit. ⸻Positioning (locked) We’re not building general intelligence. We are enabling: AI systems that are accountable, recoverable, and constrained by verifiable continuity. ⸻Status  • v0.1  • docs-first  • minimal decision boundary implemented  • open to feedback before any policy runtime is built Repo: https://github.com/StegVerse-Labs/StegCore ⸻Questions we’d love feedback on  • Is the separation between truth and permission clear?  • Are “defer” + constraints useful in your systems?  • Where does this boundary already exist implicitly, but undocumented?  • What would you want before trusting a decision runtime? Thanks for reading — happy to answer questions and clarify boundaries. Comments URL: https://news.ycombinator.com/item?id=46394552 Points: 1 # Comments: 0

---

### 4. Ask HN: How to gain a solid understanding of IMUs?

**Link:** [https://news.ycombinator.com/item?id=46394498](https://news.ycombinator.com/item?id=46394498)

**Published:** 12/26/2025

**Summary:** My background is primarily software (Python, AI/ML, large-scale data). This is my first serious hardware-heavy product. I’m working on a company concept that depends on embedded IMUs, and I’m trying to front-load learning so I don’t lock myself into poor architectural, software or component decisions early on, especially those pitfalls that someone with more knowledge/expertise would know how to avoid. I understand “learning by doing” is essential, but I suspect there are canonical pitfalls and resources I should study before committing deeply to hardware. Here are the parameters of the project: * The IMU environment will be abusive, with vibrations and impacts. The vibrations and impacts are not the object of analysis (i.e. noise), but I do want to account for them so they do not pollute the data and design the platform so the platform survives. * I will need low-power/sleep/wake-on-accel in order to achieve the desired battery life. * The IMUs will transmit to a gateway via bluetooth in short bursts of less than 60 seconds, 10-20 times per day, and sleep the rest of the time. * There could be 20-40 IMUs transmitting simultaneously. * The production IMU platform needs to be very short, i.e. height = 3-6mm. * The implementation requires that the batteries on board are not rechargeable, but last the life of the IMU unit, i.e. 2+ years. * The way the IMU units are implemented, there should be an opportunity to sample the unit at rest for calibration purposes, e.g. biases, etc. Here are some subject areas I have marked for further study/inquiry: * Handling biases * Kalman filtering * Error propagation in single/double integration, i.e. velocity and position * Low-power configuration * Bluetooth communications * Battery/power options that meet the 2+ year goal I am seeking guidance/wisdom to better prepare myself for the core challenges I will face on the IMU/hardware portion of this project. Specifically, I am seeking cherished, esteemed, favorite resources on the following subjects areas as well as the addition of any resources/subjects you deem important: * Underlying IMU physics, i.e. first principles * Handling bias/calibration * Error propagation, single/double integration * Kalman filtering for IMU data * Bluetooth comms for IMUs * Low-power/sleep configurations * Battery/power options, i.e. under 5mm, 2+ years * IATF-16949 compliant manufacturers and how it will benefit the project? Perspectives/opinions? I have made the standard appeals to Google search and GPT, but I am not convinced I have found all the preliminary materials required for this project to succeed. Here is an example of a resource that I think is informative, but again, I don't have the expertise to make that judgement definitively: An Introduction to Inertial Navigation by Oliver J. Woodman FWIW, I am using the Seeed Studio XIAO nRF52840 Sense for prototyping. The inquiry above is for both prototyping and production. Comments URL: https://news.ycombinator.com/item?id=46394498 Points: 1 # Comments: 0

---

## The Hacker News

### 1. Trust Wallet Chrome Extension Breach Caused $7 Million Crypto Loss via Malicious Code

**Link:** [https://thehackernews.com/2025/12/trust-wallet-chrome-extension-bug.html](https://thehackernews.com/2025/12/trust-wallet-chrome-extension-bug.html)

**Published:** 12/26/2025

**Summary:** Trust Wallet is urging users to update its Google Chrome extension to the latest version following what it described as a "security incident" that led to the loss of approximately $7 million. The issue, the multi‑chain, non‑custodial cryptocurrency wallet service said, impacts version 2.68. The extension has about one million users, according to the Chrome Web Store listing. Users are advised to

---

### 2. China-Linked Evasive Panda Ran DNS Poisoning Campaign to Deliver MgBot Malware

**Link:** [https://thehackernews.com/2025/12/china-linked-evasive-panda-ran-dns.html](https://thehackernews.com/2025/12/china-linked-evasive-panda-ran-dns.html)

**Published:** 12/26/2025

**Summary:** A China-linked advanced persistent threat (APT) group has been attributed to a highly-targeted cyber espionage campaign in which the adversary poisoned Domain Name System (DNS) requests to deliver its signature MgBot backdoor in attacks targeting victims in Türkiye, China, and India. The activity, Kaspersky said, was observed between November 2022 and November 2024. It has been linked to a

---

### 3. Critical LangChain Core Vulnerability Exposes Secrets via Serialization Injection

**Link:** [https://thehackernews.com/2025/12/critical-langchain-core-vulnerability.html](https://thehackernews.com/2025/12/critical-langchain-core-vulnerability.html)

**Published:** 12/26/2025

**Summary:** A critical security flaw has been disclosed in LangChain Core that could be exploited by an attacker to steal sensitive secrets and even influence large language model (LLM) responses through prompt injection. LangChain Core (i.e., langchain-core) is a core Python package that's part of the LangChain ecosystem, providing the core interfaces and model-agnostic abstractions for building

---

### 4. ThreatsDay Bulletin: Stealth Loaders, AI Chatbot Flaws AI Exploits, Docker Hack, and 15 More Stories

**Link:** [https://thehackernews.com/2025/12/threatsday-bulletin-stealth-loaders-ai.html](https://thehackernews.com/2025/12/threatsday-bulletin-stealth-loaders-ai.html)

**Published:** 12/25/2025

**Summary:** It’s getting harder to tell where normal tech ends and malicious intent begins. Attackers are no longer just breaking in — they’re blending in, hijacking everyday tools, trusted apps, and even AI assistants. What used to feel like clear-cut “hacker stories” now looks more like a mirror of the systems we all use. This week’s findings show a pattern: precision, patience, and persuasion. The

---

## GitGuardian Blog

### 1. Vault or Revoke: Guidance and Governance for Incident Response Teams

**Link:** [https://blog.gitguardian.com/vault-or-revoke-guidance-and-governance-for-incident-response-teams/](https://blog.gitguardian.com/vault-or-revoke-guidance-and-governance-for-incident-response-teams/)

**Published:** 12/26/2025

**Summary:** Learn how to guide IR teams on when to revoke or vault secrets, reducing risk and preventing service disruption with context-rich governance.

---

## Bleeping Computer Security

### 1. Trust Wallet confirms extension hack led to $7 million crypto theft

**Link:** [https://www.bleepingcomputer.com/news/security/trust-wallet-confirms-extension-hack-led-to-7-million-crypto-theft/](https://www.bleepingcomputer.com/news/security/trust-wallet-confirms-extension-hack-led-to-7-million-crypto-theft/)

**Published:** 12/26/2025

**Summary:** Several users of the Trust Wallet Chrome extension report having their cryptocurrency wallets drained after installing a compromised extension update released on December 24, prompting an urgent response from the company and warnings to affected users. Simultaneously, BleepingComputer observed a phishing domain launched by hackers. [...]

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

**Last Updated:** 2025-12-26T18:41:19.837Z
