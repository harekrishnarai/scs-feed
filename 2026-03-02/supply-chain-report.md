# Supply Chain Security Daily Report
**Date:** 2026-03-02
**Total Reports Found:** 13

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: War.direct – Real-time conflict intelligence dashboard for the Iran war

**Link:** [https://war.direct](https://war.direct)

**Published:** 3/2/2026

**Summary:** Built this over a weekend as a public service when the US-Israel-Iran conflict broke out. Non-commercial, no      ads, no paywall.   What it does:   - 25+ live TV channels (Al Jazeera, BBC, CNN, Reuters, etc.)   - Battlespace map with verified strike markers (source-linked)   - Live flight radar via adsb.lol   - Naval vessel tracking (curated OSINT positions)   - AI-curated conflict timeline (GPT-4o extracts events from 10 RSS feeds)   - Reddit OSINT dispatches from r/worldnews, r/geopolitics   - Emergency helplines for 12 countries   - Timezone switcher (IST, Iran, Israel, Dubai, GMT, EST)   Comments URL: https://news.ycombinator.com/item?id=47222164 Points: 1 # Comments: 0

---

### 2. Show HN: Valkey-powered semantic memory for Claude Code sessions

**Link:** [https://news.ycombinator.com/item?id=47222054](https://news.ycombinator.com/item?id=47222054)

**Published:** 3/2/2026

**Summary:** I wanted to explore Valkey's vector search capabilities for AI workloads and had been looking for an excuse to build something with Bun. This weekend I combined both into a memory layer for Claude Code. https://github.com/BetterDB-inc/memory The problem: Claude Code has CLAUDE.md and auto memory, but it's flat text with no semantic retrieval. You end up repeating context, especially around things not to do. BetterDB Memory hooks into Claude Code's lifecycle (SessionStart, PostToolUse, PreToolUse, Stop), summarizes each session, generates embeddings, and stores everything in Valkey using FT.SEARCH with HNSW. Next session, relevant memories surface automatically via vector similarity search. The interesting technical bit is that Valkey handles all of it - vector search, hash storage for structured memory data, sorted sets for knowledge indexing, lists for compression queues. No separate vector database. There's also an aging pipeline that applies exponential decay to old memories based on recency, clusters similar ones via cosine similarity, and merges them to keep the memory store from growing unbounded. Self-hostable with Ollama for embeddings and summarization, or plug in any LLM provider. Runs on Bun, ships as compiled binaries. MIT licensed. Comments URL: https://news.ycombinator.com/item?id=47222054 Points: 1 # Comments: 0

---

### 3. Comparing Python packages for A/B test analysis (with code examples)

**Link:** [https://e10v.me/python-packages-for-ab-test-analysis/](https://e10v.me/python-packages-for-ab-test-analysis/)

**Published:** 3/2/2026

**Summary:** Article URL: https://e10v.me/python-packages-for-ab-test-analysis/ Comments URL: https://news.ycombinator.com/item?id=47222045 Points: 1 # Comments: 1

---

### 4. Type-Safe JDBC: Schema-First Native SQL in Java

**Link:** [https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-sql](https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-sql)

**Published:** 3/2/2026

**Summary:** Article URL: https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-sql Comments URL: https://news.ycombinator.com/item?id=47222011 Points: 2 # Comments: 1

---

## StepSecurity Blog

### 1. hackerbot-claw: An AI-Powered Bot Actively Exploiting GitHub Actions - Microsoft, DataDog, and CNCF Projects Hit So Far

**Link:** [https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation](https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation)

**Published:** 3/2/2026

**Summary:** A week-long automated attack campaign targeted CI/CD pipelines across major open source repositories, achieving remote code execution in at least 4 out of 5 targets. The attacker, an autonomous bot called hackerbot-claw, used 5 different exploitation techniques and successfully exfiltrated a GitHub token with write permissions from one of the most popular repositories on GitHub. This post breaks down each attack, shows the evidence, and explains what you can do to protect your workflows.

---

### 2. How StepSecurity Caught a Release Storm in Microsoft’s @types Packages 

**Link:** [https://www.stepsecurity.io/blog/how-stepsecurity-caught-a-release-storm-in-microsofts-types-packages](https://www.stepsecurity.io/blog/how-stepsecurity-caught-a-release-storm-in-microsofts-types-packages)

**Published:** 3/1/2026

**Summary:** StepSecurity AI Package Analyst detected 70+ ghost releases across npm's most trusted TypeScript packages.

---

### 3. Harden Runner Now Supports Windows and macOS GitHub Actions Runners 

**Link:** [https://www.stepsecurity.io/blog/harden-runner-now-supports-windows-and-macos-github-actions-runners](https://www.stepsecurity.io/blog/harden-runner-now-supports-windows-and-macos-github-actions-runners)

**Published:** 3/1/2026

**Summary:** Harden Runner now supports Windows and macOS GitHub Actions runners, delivering EDR-level runtime security across Linux, Windows, and macOS CI/CD pipelines

---

### 4. Securing Vibe Coding and AI Coding Agents: An End-to-End Approach with StepSecurity 

**Link:** [https://www.stepsecurity.io/blog/securing-vibe-coding-and-ai-coding-agents-an-end-to-end-approach-with-stepsecurity](https://www.stepsecurity.io/blog/securing-vibe-coding-and-ai-coding-agents-an-end-to-end-approach-with-stepsecurity)

**Published:** 3/1/2026

**Summary:** AI coding agents install packages, create pull requests, push commits, and run autonomously in CI/CD pipelines. Here's how to secure every stage of that workflow

---

## JFrog Security Blog

### 1. The Tide of AI – Surfing the Tsunami of Binaries

**Link:** [https://jfrog.com/blog/surfing-the-tsunami-of-binaries/](https://jfrog.com/blog/surfing-the-tsunami-of-binaries/)

**Published:** 3/2/2026

**Summary:** AI is creating an overwhelming surge of digital artifacts and software components. The key to success is learning how to ride, secure, govern, and manage that wave – rather than being overwhelmed by it. This weekend, I asked my team to watch Chasing Mavericks. Jay Moriarity (not J-Frog, but stay with me) was one of …

---

## The Hacker News

### 1. New Chrome Vulnerability Let Malicious Extensions Escalate Privileges via Gemini Panel

**Link:** [https://thehackernews.com/2026/03/new-chrome-vulnerability-let-malicious.html](https://thehackernews.com/2026/03/new-chrome-vulnerability-let-malicious.html)

**Published:** 3/2/2026

**Summary:** Cybersecurity researchers have disclosed details of a now-patched security flaw in Google Chrome that could have permitted attackers to escalate privileges and gain access to local files on the system. The vulnerability, tracked as CVE-2026-0628 (CVSS score: 8.8), has been described as a case of insufficient policy enforcement in the WebView tag. It was patched by Google in early January 2026

---

### 2. North Korean Hackers Publish 26 npm Packages Hiding Pastebin C2 for Cross-Platform RAT

**Link:** [https://thehackernews.com/2026/03/north-korean-hackers-publish-26-npm.html](https://thehackernews.com/2026/03/north-korean-hackers-publish-26-npm.html)

**Published:** 3/2/2026

**Summary:** Cybersecurity researchers have disclosed a new iteration of the ongoing Contagious Interview campaign, where the North Korean threat actors have published a set of 26 malicious packages to the npm registry. The packages masquerade as developer tools, but contain functionality to extract the actual command-and-control (C2) by using seemingly harmless Pastebin content as a dead drop resolver and

---

## Endor Labs Blog

### 1. EU Cyber Resilience Act | Ebook/Report | Endor Labs

**Link:** [https://www.endorlabs.com/learn/eu-cyber-resilience-act](https://www.endorlabs.com/learn/eu-cyber-resilience-act)

**Published:** 3/2/2026

**Summary:** A practical guide for application security teams.

---

## Bleeping Computer Security

### 1. Anthropic confirms Claude is down in a worldwide outage

**Link:** [https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-a-worldwide-outage/](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-a-worldwide-outage/)

**Published:** 3/2/2026

**Summary:** Claude appears to be having a major outage right now, with elevated errors reported across all platforms. [...]

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

**Last Updated:** 2026-03-02T18:44:59.471Z
