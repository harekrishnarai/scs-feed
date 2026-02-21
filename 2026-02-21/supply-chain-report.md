# Supply Chain Security Daily Report
**Date:** 2026-02-21
**Total Reports Found:** 11

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. I Donut believe, third party validation [video]

**Link:** [https://www.youtube.com/watch?v=uiOma6v_EZY](https://www.youtube.com/watch?v=uiOma6v_EZY)

**Published:** 2/21/2026

**Summary:** Article URL: https://www.youtube.com/watch?v=uiOma6v_EZY Comments URL: https://news.ycombinator.com/item?id=47103404 Points: 1 # Comments: 0

---

### 2. Show HN: Raypher–eBPF-based runtime security and hardware identity for AI agents

**Link:** [https://github.com/kidigapeet/Raypher-core](https://github.com/kidigapeet/Raypher-core)

**Published:** 2/21/2026

**Summary:** Hey HN, I’m the founder of Raypher . We are building a kernel-level execution guard and cryptographic identity layer specifically designed for autonomous AI agents(opencalw). curent AI agents(open claw) are big security risks our Mission is to make a security feture that will enable developers to make agents and ship them faster without worrying about security risks The Problem: Right now, the agentic ecosystem (OpenClaw, LangChain, MCPs) is giving LLMs "hands" with almost zero runtime boundaries. Legacy cybersecurity tools are completely failing here for two reasons: API Latency: They rely on API polling to check if an agent's SaaS integration is misconfigured. If an agent enters an infinite loop and hallucinates a command to drop a production database, a 2-second API polling delay is an eternity. Identity Fallacy: They use software tokens (OAuth/API keys) to track agent identity. If an attacker tricks an agent into leaking its config.json, the attacker becomes the agent. How Raypher Works: We realized securing probabilistic AI required moving out of the application layer and into the OS kernel. The eBPF Network Guillotine: We run a lightweight Rust daemon locally that hooks into the Linux kernel via eBPF. We don’t poll logs. We intercept the system calls and network sockets. If an agent violates its policy.yaml (e.g., trying to access a restricted subnet or execute rm -rf), we drop the veth packet in microseconds before it leaves the machine. Silicon-Bound Identity (TPM): We bind the agent’s cryptographic identity directly to the physical hardware (TPM 2.0 on motherboards or AWS Nitro Enclaves). You cannot phish or copy-paste silicon. Zero Latency (IBEV): Security tools that require a cloud round-trip kill agent performance. We built "Intent-Bound Ephemeral Visas" (IBEV) using gRPC ring buffers. The agent mints its permission visa locally and offline. If our cloud goes down, your agents keep running safely on the cached policy. Raypher gives you a local dashboard to track exactly what your agents are doing and hard-caps their OpenAI API spend so a rogue loop doesn't bankrupt you. I’d love to hear your thoughts on our eBPF architecture, how we are handling the TPM attestation, or just the state of AI agent security in general. I’ll be in the comments all day to answer technical questions! Comments URL: https://news.ycombinator.com/item?id=47103312 Points: 2 # Comments: 0

---

### 3. Show HN: Wiredigg – Real-Time Network Analysis with ML and Ollama Support

**Link:** [https://news.ycombinator.com/item?id=47103291](https://news.ycombinator.com/item?id=47103291)

**Published:** 2/21/2026

**Summary:** I built Wiredigg, an open-source network traffic analysis and security tool written in Python. It combines real-time packet capture, protocol inspection, machine learning-based anomaly detection, and local LLM analysis via Ollama. The goal is to provide interactive network visibility with AI-assisted threat interpretation, while remaining local-first and easy to run. A Windows executable build is also available. Repo: https://github.com/JustVugg/Wiredigg ⸻What it does Real-time packet capture  • Live traffic sniffing  • Protocol analysis (TCP, UDP, ICMP, HTTP, etc.)  • Filtering by IP, port, and protocol  • Promiscuous mode support Machine learning anomaly detection  • Detection of unusual traffic patterns  • Threat classification with severity levels  • False-positive marking and incremental retraining  • User-assisted model refinement Ollama integration (local LLM)  • Sends flagged anomalies to a locally running model via Ollama  • Generates contextual, human-readable explanations  • Adds reasoning on top of statistical detections  • Fully offline if Ollama is local Threat intelligence & dashboards  • Malicious IP/domain checks  • Interactive tables and traffic statistics  • Graph-based visualizations  • Exportable reports (HTML, JSON, text) IoT & device analysis  • Device identification and classification  • Behavioral pattern analysis  • Risk evaluation based on traffic activity Custom packet tools  • Manual packet crafting for testing  • Control over IP, port, protocol, and payload Running it From source: git clone https://github.com/JustVugg/Wiredigg pip install -r requirements.txt python wiredigg.py Administrator/root privileges are required for packet capture. Alternatively, you can use the provided Windows .exe build. ⸻Why I built it Many packet analyzers are either:  • CLI-heavy and technical  • Or large enterprise systems I wanted something:  • Visual  • AI-augmented  • Local-first  • Extensible in Python  • Usable for labs, small networks, and learning Happy to get feedback, especially on the ML and Ollama integration approach. Comments URL: https://news.ycombinator.com/item?id=47103291 Points: 1 # Comments: 0

---

## Endor Labs Blog

### 1. CVE-2026-25896: Entity Encoding Bypass in fast-xml-parser | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/cve-2026-25896-fast-xml-parser](https://www.endorlabs.com/learn/cve-2026-25896-fast-xml-parser)

**Published:** 2/21/2026

**Summary:** CVE-2026-25896 allows XSS and injection attacks by shadowing XML built-in entities in fast-xml-parser via regex wildcard in entity name

---

### 2. AI SAST Finding: Path Traversal in OpenClaw via LLM Guardrail Bypass | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/ai-sast-finding-path-traversal-in-openclaw-via-llm-guardrail-bypass](https://www.endorlabs.com/learn/ai-sast-finding-path-traversal-in-openclaw-via-llm-guardrail-bypass)

**Published:** 2/20/2026

**Summary:** How Endor Labs' AI SAST engine identified a path traversal vulnerability in OpenClaw's apply_patch tool tracked as (GHSA-r5fq-947m-xm57)

---

## The Hacker News

### 1. AI-Assisted Threat Actor Compromises 600+ FortiGate Devices in 55 Countries

**Link:** [https://thehackernews.com/2026/02/ai-assisted-threat-actor-compromises.html](https://thehackernews.com/2026/02/ai-assisted-threat-actor-compromises.html)

**Published:** 2/21/2026

**Summary:** A Russian-speaking, financially motivated threat actor has been observed taking advantage of commercial generative artificial intelligence (AI) services to compromise over 600 FortiGate devices located in 55 countries. That's according to new findings from Amazon Threat Intelligence, which said it observed the activity between January 11 and February 18, 2026. "No exploitation of FortiGate

---

### 2. BeyondTrust Flaw Used for Web Shells, Backdoors, and Data Exfiltration

**Link:** [https://thehackernews.com/2026/02/beyondtrust-flaw-used-for-web-shells.html](https://thehackernews.com/2026/02/beyondtrust-flaw-used-for-web-shells.html)

**Published:** 2/20/2026

**Summary:** Threat actors have been observed exploiting a recently disclosed critical security flaw impacting BeyondTrust Remote Support (RS) and Privileged Remote Access (PRA) products to conduct a wide range of malicious actions, including deploying VShell and  The vulnerability, tracked as CVE-2026-1731 (CVSS score: 9.9), allows attackers to execute operating system commands in the context of the

---

### 3. Cline CLI 2.3.0 Supply Chain Attack Installed OpenClaw on Developer Systems

**Link:** [https://thehackernews.com/2026/02/cline-cli-230-supply-chain-attack.html](https://thehackernews.com/2026/02/cline-cli-230-supply-chain-attack.html)

**Published:** 2/20/2026

**Summary:** In yet another software supply chain attack, the open-source, artificial intelligence (AI)-powered coding assistant Cline CLI was updated to stealthily install OpenClaw, a self-hosted autonomous AI agent that has become exceedingly popular in the past few months. "On February 17, 2026, at 3:26 AM PT, an unauthorized party used a compromised npm publish token to publish an update to Cline CLI

---

### 4. ClickFix Campaign Abuses Compromised Sites to Deploy MIMICRAT Malware

**Link:** [https://thehackernews.com/2026/02/clickfix-campaign-abuses-compromised.html](https://thehackernews.com/2026/02/clickfix-campaign-abuses-compromised.html)

**Published:** 2/20/2026

**Summary:** Cybersecurity researchers have disclosed details of a new ClickFix campaign that abuses compromised legitimate sites to deliver a previously undocumented remote access trojan (RAT) called MIMICRAT (aka AstarionRAT). "The campaign demonstrates a high level of operational sophistication: compromised sites spanning multiple industries and geographies serve as delivery infrastructure, a multi-stage

---

### 5. Identity Cyber Scores: The New Metric Shaping Cyber Insurance in 2026

**Link:** [https://thehackernews.com/2026/02/identity-cyber-scores-new-metric.html](https://thehackernews.com/2026/02/identity-cyber-scores-new-metric.html)

**Published:** 2/20/2026

**Summary:** With one in three cyber-attacks now involving compromised employee accounts, insurers and regulators are placing far greater emphasis on identity posture when assessing cyber risk.  For many organizations, however, these assessments remain largely opaque. Elements such as password hygiene, privileged access management, and the extent of multi-factor authentication (MFA) coverage are

---

## Schneier on Security

### 1. Friday Squid Blogging: Squid Cartoon

**Link:** [https://www.schneier.com/blog/archives/2026/02/friday-squid-blogging-squid-cartoon-3.html](https://www.schneier.com/blog/archives/2026/02/friday-squid-blogging-squid-cartoon-3.html)

**Published:** 2/20/2026

**Summary:** I like this one. As usual, you can also use this squid post to talk about the security stories in the news that I haven’t covered. Blog moderation policy.

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

**Last Updated:** 2026-02-21T18:43:33.189Z
