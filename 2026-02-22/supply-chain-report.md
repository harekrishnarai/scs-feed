# Supply Chain Security Daily Report
**Date:** 2026-02-22
**Total Reports Found:** 4

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Forge-Specific Git Repository Folders

**Link:** [https://nesbitt.io/2026/02/22/forge-specific-repository-folders.html](https://nesbitt.io/2026/02/22/forge-specific-repository-folders.html)

**Published:** 2/22/2026

**Summary:** Article URL: https://nesbitt.io/2026/02/22/forge-specific-repository-folders.html Comments URL: https://news.ycombinator.com/item?id=47111640 Points: 1 # Comments: 0

---

### 2. Show HN: OpenGem – A Load-Balanced Gemini API Proxy (No API Key Required)

**Link:** [https://github.com/arifozgun/OpenGem](https://github.com/arifozgun/OpenGem)

**Published:** 2/22/2026

**Summary:** Hi HN! I built OpenGem, an open-source, load-balanced proxy for the Gemini API that requires absolutely no paid API keys. GitHub: https://github.com/arifozgun/OpenGem The Context: Like many developers, I was constantly hitting "429 Quota Exceeded" errors while building AI agents and processing large payloads on free tiers. I wanted to build freely without calculating API costs for every test request. How it works: I reverse-engineered the official Gemini CLI authentication to get standard API access. However, a single free Google account quota depletes quickly. To solve this, I built a Smart Load Balancer at the core of OpenGem. What it does: - You connect multiple idle/free Google accounts to the dashboard via OAuth. - OpenGem acts as a standard endpoint (`POST /v1beta/models/{model}`). - It routes traffic to the least-used account. If an account hits a real 429 quota limit, OpenGem instantly detects it, puts that account on a 60-minute cooldown, and seamlessly retries with the next available account. It differentiates between simple RPM bursts and actual limits. Tech specs: - Fully compatible with official Google SDKs (`@google/genai`), LangChain, and standard SSE streaming (no broken [DONE] chunks). - Supports native "tools" (Function Calling) for agentic workflows. - Raised payload limit to 50MB for massive contexts. - AES-256-GCM encryption for all sensitive configs and OAuth tokens at rest. - Toggle between Firebase Firestore or a fully offline Local JSON database. It’s strictly for educational purposes and personal research to bypass the friction of testing/prototyping. The entire project is MIT licensed. I’m currently running it with my own side projects and it handles heavy agent tasks flawlessly. I would love any feedback on the load balancing logic, security implementations, or just general thoughts! Comments URL: https://news.ycombinator.com/item?id=47111607 Points: 1 # Comments: 0

---

## Endor Labs Blog

### 1. CVE-2026-25896: Entity Encoding Bypass in fast-xml-parser | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/cve-2026-25896-fast-xml-parser](https://www.endorlabs.com/learn/cve-2026-25896-fast-xml-parser)

**Published:** 2/21/2026

**Summary:** CVE-2026-25896 allows XSS and injection attacks by shadowing XML built-in entities in fast-xml-parser via regex wildcard in entity name

---

## The Hacker News

### 1. AI-Assisted Threat Actor Compromises 600+ FortiGate Devices in 55 Countries

**Link:** [https://thehackernews.com/2026/02/ai-assisted-threat-actor-compromises.html](https://thehackernews.com/2026/02/ai-assisted-threat-actor-compromises.html)

**Published:** 2/21/2026

**Summary:** A Russian-speaking, financially motivated threat actor has been observed taking advantage of commercial generative artificial intelligence (AI) services to compromise over 600 FortiGate devices located in 55 countries. That's according to new findings from Amazon Threat Intelligence, which said it observed the activity between January 11 and February 18, 2026. "No exploitation of FortiGate

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

**Last Updated:** 2026-02-22T18:43:30.315Z
