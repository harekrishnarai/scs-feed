# Supply Chain Security Daily Report
**Date:** 2026-02-19
**Total Reports Found:** 16

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. A CLI for managing FIDO2 security keys

**Link:** [https://github.com/mohammadv184/skm](https://github.com/mohammadv184/skm)

**Published:** 2/19/2026

**Summary:** Article URL: https://github.com/mohammadv184/skm Comments URL: https://news.ycombinator.com/item?id=47077331 Points: 1 # Comments: 0

---

### 2. Show HN: Argeo – AI Visibility and Generative Engine Optimization (Geo) Advisory

**Link:** [https://www.argeo.ai/en](https://www.argeo.ai/en)

**Published:** 2/19/2026

**Summary:** Hi HN, I'm Faruk, founder of ARGEO (argeo.ai). We're an advisory firm focused on AI visibility and Generative Engine Optimization (GEO) — helping brands manage how AI systems like ChatGPT, Claude, and Gemini interpret and reference them. The core insight: traditional SEO optimizes for search engine crawlers, but AI systems form brand understanding differently — through training data patterns, citation authority, and semantic consistency. We call this gap "Perception Control." I've written about this on Medium and published a whitepaper on SSRN. Happy to discuss the technical side of how LLMs form entity associations, or the broader implications for brand strategy in an AI-mediated world. What's your experience with AI systems referencing (or misrepresenting) your projects? Comments URL: https://news.ycombinator.com/item?id=47077314 Points: 1 # Comments: 0

---

### 3. Upright: An Open Source Synthetic Monitoring System

**Link:** [https://dev.37signals.com/introducing-upright/](https://dev.37signals.com/introducing-upright/)

**Published:** 2/19/2026

**Summary:** Article URL: https://dev.37signals.com/introducing-upright/ Comments URL: https://news.ycombinator.com/item?id=47077299 Points: 1 # Comments: 0

---

### 4. Show HN: AgentLint – Real-time guardrails for AI coding agents

**Link:** [https://github.com/mauhpr/agentlint](https://github.com/mauhpr/agentlint)

**Published:** 2/19/2026

**Summary:** I've been using Claude Code as my primary coding tool for a few months. In long sessions I kept hitting the same problems: hardcoded API keys in config files, force-pushes to main, 15+ file edits without running tests, .env files with real credentials. AgentLint hooks into Claude Code's lifecycle events (PreToolUse, PostToolUse, Stop) and evaluates rules against each tool call. PreToolUse rules can block actions (exit code 2), PostToolUse rules inject warnings into context, and Stop rules generate a session report. It ships with 10 universal rules, YAML config, and a custom rules API if you want project-specific checks. Everything runs locally in a subprocess — no network calls, no external dependencies beyond click and pyyaml. Architecture is simple: CLI parses stdin JSON from the hook → loads config → engine evaluates matching rules → reporter formats output. Session state persists via JSON files so rules like drift-detector can track cumulative behavior across invocations. 238 tests, 96% coverage. Python 3.11+. Curious what rules others would want — the custom rules API lets you subclass Rule and drop a .py file in a directory. Comments URL: https://news.ycombinator.com/item?id=47077242 Points: 1 # Comments: 0

---

### 5. Show HN: BasaltCRM – Open-Source AI-Native CRM (Next.js 16, Prisma, TypeScript)

**Link:** [https://github.com/BasaltHQ/crm-official/releases/tag/v1.2.0](https://github.com/BasaltHQ/crm-official/releases/tag/v1.2.0)

**Published:** 2/19/2026

**Summary:** Hi HN, I just released v1.2.0 of BasaltCRM, an open-source, AI-native CRM built with Next.js 16, TypeScript, and Prisma. This release, "The Intelligent Workspace," moves beyond data storage and focuses on active workflow assistance. We've added CRM University for educational deep-linking, an integrated Knowledge Base for support cases, and a new onboarding engine. Key technical updates in this version: • Migrated the entire codebase from ESLint/Prettier to Biome for 10x faster linting/formatting. • Refactored instructional components into a provider-based "LearnLink" system. • Hardened the AI theme engine to ensure charts (Tremor/Recharts) and UI elements dynamically inherit theme variables without hardcoded overrides. • Implemented a robust account ingestion engine for bulk data handling. The goal is to provide a platform that handles the heavy lifting of lead discovery and automated outreach using real-time web intelligence rather than stale databases. I'd love to hear your feedback on the architecture, especially our approach to multi-model AI integration. Website: https://crm.basalthq.com  Repo: https://github.com/BasaltHQ/crm-official Comments URL: https://news.ycombinator.com/item?id=47077170 Points: 1 # Comments: 0

---

## Sonatype Security Research

### 1. Why LLMs Make Terrible Databases and Why That Matters for Trusted AI

**Link:** [https://www.sonatype.com/blog/why-llms-make-terrible-databases-and-why-that-matters-for-trusted-ai](https://www.sonatype.com/blog/why-llms-make-terrible-databases-and-why-that-matters-for-trusted-ai)

**Published:** 2/19/2026

**Summary:** Large language models (LLMs) are now embedded across the SDLC. They summarize documentation, generate code, explain vulnerabilities, and assist with architectural decisions.

---

## Kiuwan Blog

### 1. SBOM Best Practices: Building Accurate Software Bills of Materials

**Link:** [https://www.kiuwan.com/blog/a-guide-to-sbom-best-practices-and-fundamentals/](https://www.kiuwan.com/blog/a-guide-to-sbom-best-practices-and-fundamentals/)

**Published:** 2/19/2026

**Summary:** Few modern software products are built entirely from scratch. Instead, they rely on a foundation of open-source libraries, third-party components, and proprietary code. This presents a unique problem, developers and stakeholders need a clear view of what external code is in their software. This is where a Software Bill of Materials (SBOM) becomes invaluable. An […]

---

## Schneier on Security

### 1. Malicious AI

**Link:** [https://www.schneier.com/blog/archives/2026/02/malicious-ai.html](https://www.schneier.com/blog/archives/2026/02/malicious-ai.html)

**Published:** 2/19/2026

**Summary:** Interesting: Summary: An AI agent of unknown ownership autonomously wrote and published a personalized hit piece about me after I rejected its code, attempting to damage my reputation and shame me into accepting its changes into a mainstream python library. This represents a first-of-its-kind case study of misaligned AI behavior in the wild, and raises serious concerns about currently deployed AI agents executing blackmail threats.  Part 2 of the story. And a Wall Street Journal article.

---

### 2. AI Found Twelve New Vulnerabilities in OpenSSL

**Link:** [https://www.schneier.com/blog/archives/2026/02/ai-found-twelve-new-vulnerabilities-in-openssl.html](https://www.schneier.com/blog/archives/2026/02/ai-found-twelve-new-vulnerabilities-in-openssl.html)

**Published:** 2/18/2026

**Summary:** The title of the post is”What AI Security Research Looks Like When It Works,” and I agree: In the latest OpenSSL security release> on January 27, 2026, twelve new zero-day vulnerabilities (meaning unknown to the maintainers at time of disclosure) were announced. Our AI system is responsible for the original discovery of all twelve, each found and responsibly disclosed to the OpenSSL team during the fall and winter of 2025. Of those, 10 were assigned CVE-2025 identifiers and 2 received CVE-2026 identifiers. Adding the 10 to the three we already found in the ...

---

## The Hacker News

### 1. Fake IPTV Apps Spread Massiv Android Malware Targeting Mobile Banking Users

**Link:** [https://thehackernews.com/2026/02/fake-iptv-apps-spread-massiv-android.html](https://thehackernews.com/2026/02/fake-iptv-apps-spread-massiv-android.html)

**Published:** 2/19/2026

**Summary:** Cybersecurity researchers have disclosed details of a new Android trojan called Massiv that's designed to facilitate device takeover (DTO) attacks for financial theft. The malware, according to ThreatFabric, masquerades as seemingly harmless IPTV apps to deceive victims, indicating that the activity is primarily singling out users looking for the online TV applications. "This new threat, while

---

### 2. CRESCENTHARVEST Campaign Targets Iran Protest Supporters With RAT Malware

**Link:** [https://thehackernews.com/2026/02/crescentharvest-campaign-targets-iran.html](https://thehackernews.com/2026/02/crescentharvest-campaign-targets-iran.html)

**Published:** 2/19/2026

**Summary:** Cybersecurity researchers have disclosed details of a new campaign dubbed CRESCENTHARVEST, likely targeting supporters of Iran's ongoing protests to conduct information theft and long-term espionage. The Acronis Threat Research Unit (TRU) said it observed the activity after January 9, with the attacks designed to deliver a malicious payload that serves as a remote access trojan (RAT) and

---

### 3. Notepad++ Fixes Hijacked Update Mechanism Used to Deliver Targeted Malware

**Link:** [https://thehackernews.com/2026/02/notepad-fixes-hijacked-update-mechanism.html](https://thehackernews.com/2026/02/notepad-fixes-hijacked-update-mechanism.html)

**Published:** 2/18/2026

**Summary:** Notepad++ has released a security fix to plug gaps that were exploited by an advanced threat actor from China to hijack the software update mechanism to selectively deliver malware to targets of interest. The version 8.9.2 update incorporates what maintainer Don Ho calls a "double lock" design that aims to make the update process "robust and effectively unexploitable." This includes verification

---

## Endor Labs Blog

### 1. Supply Chain Attack targeting Cline installs OpenClaw | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/supply-chain-attack-targeting-cline-installs-openclaw](https://www.endorlabs.com/learn/supply-chain-attack-targeting-cline-installs-openclaw)

**Published:** 2/18/2026

**Summary:** A compromised release of the popular Cline CLI npm package silently installs OpenClaw globally on any machine.

---

### 2. How AI SAST Traced Data Flows to Uncover Six OpenClaw Vulnerabilities | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/how-ai-sast-traced-data-flows-to-uncover-six-openclaw-vulnerabilities](https://www.endorlabs.com/learn/how-ai-sast-traced-data-flows-to-uncover-six-openclaw-vulnerabilities)

**Published:** 2/18/2026

**Summary:** We discovered six vulnerabilities in OpenClaw using Endor Labs’ AI SAST data flow analysis and validated working exploits.

---

## CircleCI Blog

### 1. Build and test your first Kubernetes operator with Go, Kubebuilder, and CircleCI

**Link:** [https://circleci.com/blog/build-and-test-your-first-kubernetes-operator-with-go-kubebuilder/](https://circleci.com/blog/build-and-test-your-first-kubernetes-operator-with-go-kubebuilder/)

**Published:** 2/18/2026

**Summary:** ...

---

## StepSecurity Blog

### 1. Cline Supply Chain Attack Detected: cline@2.3.0 Silently Installs OpenClaw

**Link:** [https://www.stepsecurity.io/blog/cline-supply-chain-attack-detected-cline-2-3-0-silently-installs-openclaw](https://www.stepsecurity.io/blog/cline-supply-chain-attack-detected-cline-2-3-0-silently-installs-openclaw)

**Published:** 2/18/2026

**Summary:** cline@2.3.0

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

**Last Updated:** 2026-02-19T18:45:29.635Z
