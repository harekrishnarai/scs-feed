# Supply Chain Security Daily Report
**Date:** 2025-12-03
**Total Reports Found:** 17

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Antiidle – A Free, Open-Source Anti-Idle Tool

**Link:** [https://github.com/uppnrise/antiidle](https://github.com/uppnrise/antiidle)

**Published:** 12/3/2025

**Summary:** Article URL: https://github.com/uppnrise/antiidle Comments URL: https://news.ycombinator.com/item?id=46138131 Points: 1 # Comments: 0

---

### 2. Show HN: MemState – Transactional, type-safe memory for AI agents (SQLite/Redis)

**Link:** [https://github.com/scream4ik/MemState](https://github.com/scream4ik/MemState)

**Published:** 12/3/2025

**Summary:** I wanted to share MemState, an open-source library I've been building for strict agent state management. It acts as a Git-like layer for Python agents: unlike standard vector memory, it enforces Pydantic schemas and supports transactional rollbacks (Time Travel) to prevent state corruption. Key technical features: * Strict Schemas: Uses Pydantic to validate memory on write. If an LLM tries to save a string into an int field, the transaction fails before corruption happens. * Time Travel: Every change is an append-only transaction. You can call memory.rollback(1) to undo an agent's hallucination. * Constraints: Enforce logic like Singleton facts (e.g., only one "User Profile" per session). * No Vectors required: It uses SQLite's JSON1 extension for structured filtering, which is faster and deterministic for state lookups. It includes a native checkpointer for LangGraph, so you can persist agent threads to SQLite with full history auditability. It's open source (Apache 2.0). Would love to hear your feedback on the architecture! Comments URL: https://news.ycombinator.com/item?id=46138027 Points: 1 # Comments: 0

---

### 3. Pipe dreams to pipeline realities: an Aspire Pipelines story

**Link:** [https://devblogs.microsoft.com/aspire/aspire-pipelines/](https://devblogs.microsoft.com/aspire/aspire-pipelines/)

**Published:** 12/3/2025

**Summary:** Article URL: https://devblogs.microsoft.com/aspire/aspire-pipelines/ Comments URL: https://news.ycombinator.com/item?id=46137975 Points: 1 # Comments: 0

---

## The Hacker News

### 1. Critical RSC Bugs in React and Next.js Allow Unauthenticated Remote Code Execution

**Link:** [https://thehackernews.com/2025/12/critical-rsc-bugs-in-react-and-nextjs.html](https://thehackernews.com/2025/12/critical-rsc-bugs-in-react-and-nextjs.html)

**Published:** 12/3/2025

**Summary:** A maximum-severity security flaw has been disclosed in React Server Components (RSC) that, if successfully exploited, could result in remote code execution. The vulnerability, tracked as CVE-2025-55182, carries a CVSS score of 10.0. It allows "unauthenticated remote code execution by exploiting a flaw in how React decodes payloads sent to React Server Function endpoints," the React Team said in

---

### 2. Brazil Hit by Banking Trojan Spread via WhatsApp Worm and RelayNFC NFC Relay Fraud

**Link:** [https://thehackernews.com/2025/12/brazil-hit-by-banking-trojan-spread-via.html](https://thehackernews.com/2025/12/brazil-hit-by-banking-trojan-spread-via.html)

**Published:** 12/3/2025

**Summary:** The threat actor known as Water Saci is actively evolving its tactics, switching to a sophisticated, highly layered infection chain that uses HTML Application (HTA) files and PDFs to propagate via WhatsApp a worm that deploys a banking trojan in attacks targeting users in Brazil. The latest wave is characterized by the attackers shifting from PowerShell to a Python-based variant that spreads the

---

### 3. Picklescan Bugs Allow Malicious PyTorch Models to Evade Scans and Execute Code

**Link:** [https://thehackernews.com/2025/12/picklescan-bugs-allow-malicious-pytorch.html](https://thehackernews.com/2025/12/picklescan-bugs-allow-malicious-pytorch.html)

**Published:** 12/3/2025

**Summary:** Three critical security flaws have been disclosed in an open-source utility called Picklescan that could allow malicious actors to execute arbitrary code by loading untrusted PyTorch models, effectively bypassing the tool's protections. Picklescan, developed and maintained by Matthieu Maitre (@mmaitre314), is a security scanner that's designed to parse Python pickle files and detect suspicious

---

### 4. Malicious Rust Crate Delivers OS-Specific Malware to Web3 Developer Systems

**Link:** [https://thehackernews.com/2025/12/malicious-rust-crate-delivers-os.html](https://thehackernews.com/2025/12/malicious-rust-crate-delivers-os.html)

**Published:** 12/3/2025

**Summary:** Cybersecurity researchers have discovered a malicious Rust package that's capable of targeting Windows, macOS, and Linux systems, and features malicious functionality to stealthily execute on developer machines by masquerading as an Ethereum Virtual Machine (EVM) unit helper tool. The Rust crate, named "evm-units," was uploaded to crates.io in mid-April 2025 by a user named "ablerust,"

---

### 5. Researchers Capture Lazarus APT's Remote-Worker Scheme Live on Camera

**Link:** [https://thehackernews.com/2025/12/researchers-capture-lazarus-apts-remote.html](https://thehackernews.com/2025/12/researchers-capture-lazarus-apts-remote.html)

**Published:** 12/2/2025

**Summary:** A joint investigation led by Mauro Eldritch, founder of BCA LTD, conducted together with threat-intel initiative NorthScan and ANY.RUN, a solution for interactive malware analysis and threat intelligence, has uncovered one of North Korea’s most persistent infiltration schemes: a network of remote IT workers tied to Lazarus Group’s Famous Chollima division. For the first time, researchers managed

---

## StepSecurity Blog

### 1. How Harden Runner Detected the Sha1-Hulud Supply Chain Attack in CNCF's Backstage Repository

**Link:** [https://www.stepsecurity.io/blog/how-harden-runner-detected-the-sha1-hulud-supply-chain-attack-in-cncfs-backstage-repository](https://www.stepsecurity.io/blog/how-harden-runner-detected-the-sha1-hulud-supply-chain-attack-in-cncfs-backstage-repository)

**Published:** 12/3/2025

**Summary:** A case study on detecting npm supply chain attacks through runtime monitoring and baseline anomaly detection

---

### 2. Sha1-Hulud: The Second Coming - Zapier, ENS Domains, and Other Prominent NPM Packages Compromised

**Link:** [https://www.stepsecurity.io/blog/sha1-hulud-the-second-coming-zapier-ens-domains-and-other-prominent-npm-packages-compromised](https://www.stepsecurity.io/blog/sha1-hulud-the-second-coming-zapier-ens-domains-and-other-prominent-npm-packages-compromised)

**Published:** 12/2/2025

**Summary:** Sha1-Hulud: The Second Coming

---

## Kiuwan Blog

### 1. Defending Your Software Supply Chain: How to Use Kiuwan Against Shai-Hulud, Log4J, and Polyfill Attacks

**Link:** [https://www.kiuwan.com/blog/shai-hulud-software-supply-chain-security/](https://www.kiuwan.com/blog/shai-hulud-software-supply-chain-security/)

**Published:** 12/3/2025

**Summary:** A practical guide to detecting and responding to open source supply chain compromises using SAST, SCA, and proactive security monitoring.   The threat landscape: When your dependencies become attack vectors  Software supply chain attacks have evolved from theoretical risks to front-page news. The attacks keep coming, and they’re getting more sophisticated:  Log4Shell (2021) Log4Shell (2021) taught […]

---

### 2. Rethinking ASPM: From Signal Chaos to Defense in Depth

**Link:** [https://www.kiuwan.com/blog/aspm-defense-in-depth/](https://www.kiuwan.com/blog/aspm-defense-in-depth/)

**Published:** 12/2/2025

**Summary:** Rethinking ASPM: From Signal Chaos to Defense in Depth   We’ve reached an inflection point in application security. Teams are drowning in signals from SAST scanners, SCA tools, pull request checks, and code quality analyzers— each requiring attention and management. Application Security Posture Management (ASPM) has emerged to address this challenge but what does ASPM […]

---

## GitGuardian Blog

### 1. Lessons in Testing, Performance, and Legacy Systems from /dev/mtl 2025

**Link:** [https://blog.gitguardian.com/dev-mtl-2025/](https://blog.gitguardian.com/dev-mtl-2025/)

**Published:** 12/3/2025

**Summary:** Montreal's recent community event revealed how feature flags, observability, and lifecycle discipline help teams manage complexity without compromising security or stability.

---

### 2. Mutual TLS (mTLS) Authentication - A Complete Guide 

**Link:** [https://blog.gitguardian.com/mutual-tls-mtls-authentication/](https://blog.gitguardian.com/mutual-tls-mtls-authentication/)

**Published:** 12/2/2025

**Summary:** mTLS, or mutual Transport Layer Security, is a mechanism that establishes two-way authentication between two parties, ensuring they are who they claim to be.

---

## JFrog Security Blog

### 1. Level Up Your Container Security: Introducing the JFrog Kubelet Credential Provider

**Link:** [https://jfrog.com/blog/level-up-your-container-security-introducing-the-jfrog-kubelet-credential-provider/](https://jfrog.com/blog/level-up-your-container-security-introducing-the-jfrog-kubelet-credential-provider/)

**Published:** 12/3/2025

**Summary:** Amazon Elastic Kubernetes Service (Amazon EKS) is a fully managed, compliant Kubernetes service that simplifies running, managing, and scaling containerized applications. EKS automatically handles the availability and scalability of the Kubernetes control plane, allowing teams of any size or skill level to focus on building and deploying production-ready applications across diverse environments, including AWS, on-premises, …

---

### 2. PyTorch Users at Risk: Unveiling 3 Zero-Day PickleScan Vulnerabilities

**Link:** [https://jfrog.com/blog/unveiling-3-zero-day-vulnerabilities-in-picklescan/](https://jfrog.com/blog/unveiling-3-zero-day-vulnerabilities-in-picklescan/)

**Published:** 12/2/2025

**Summary:** AI Model Scanning as the First Layer of Security JFrog Security Research found 3 zero-day critical vulnerabilities in PickleScan, which would allow attackers to bypass the most popular Pickle model scanning tool. PickleScan is a widely used, industry-standard tool for scanning ML models and ensuring they contain no malicious content. Each discovered vulnerability enables attackers …

---

## Endor Labs Blog

### 1. Rubrik Hits Aggressive SLAs via Endor Labs | Customer Story | Endor Labs

**Link:** [https://www.endorlabs.com/learn/rubrik-hits-aggressive-slas-via-endor-labs](https://www.endorlabs.com/learn/rubrik-hits-aggressive-slas-via-endor-labs)

**Published:** 12/2/2025

**Summary:** Founded in 2014, Rubrik is a comprehensive data security platform that delivers complete cyber resilience with both cyber posture and cyber recovery. Rubrik uses Endor Labs for SCA, SAST, container scanning, and secret detection.

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

**Last Updated:** 2025-12-03T18:42:56.273Z
