# Supply Chain Security Daily Report
**Date:** 2026-02-24
**Total Reports Found:** 20

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Fastdedup – Rust dataset deduplication (2:55 vs. 7:55 688MB vs. 22GB)

**Link:** [https://wapplewhite4.github.io/fastdedup/](https://wapplewhite4.github.io/fastdedup/)

**Published:** 2/24/2026

**Summary:** I've been working on a Rust CLI for dataset deduplication and wanted to share benchmark results. Ran on FineWeb sample-10BT (14.8M records, 29GB) on a single machine. Exact dedup vs DuckDB + SHA-256: 2:55 vs 7:55 wall clock (2.7x faster) 688MB vs 21.9GB peak RAM (32x less) Single core vs 4+ cores Duplicate counts match exactly (51,392 both ways) Fuzzy dedup (MinHash + LSH) vs datatrove: 36:44 vs 3h50m+ — datatrove stage 1 alone ran for 3h50m and we killed it datatrove's bottleneck turned out to be spaCy word tokenization on every document before shingling. fastdedup uses character n-grams directly which is significantly cheaper 23GB vs 1.1GB RAM — this is a real trade-off, not a win. datatrove streams to disk; fastdedup holds the LSH index in memory for speed Honest caveats: Fuzzy dedup needs ~23GB RAM at this scale — cloud workload, not a laptop workload datatrove is built for distributed execution, tasks=1 isn't its intended config — this is how someone would run it locally Tiered storage to spill LSH index to disk is on the roadmap Demo: https://huggingface.co/spaces/wapplewhite4/fastdedup-demo Repo: https://github.com/wapplewhite4/fastdedup Happy to answer questions about implementation or methodology. Comments URL: https://news.ycombinator.com/item?id=47140760 Points: 1 # Comments: 0

---

### 2. Show HN: YouAM – An address, contact card, and encrypted inbox for AI agents

**Link:** [https://news.ycombinator.com/item?id=47140699](https://news.ycombinator.com/item?id=47140699)

**Published:** 2/24/2026

**Summary:** I built YouAM because AI agents have no standard way to find or message each other. If you have a LangGraph agent and I have a CrewAI agent, there's no "email" between them. YouAM fixes that. Every agent gets: - A routable address: name::youam.network - A signed contact card (name, public key, relay endpoint) - An encrypted inbox with store-and-forward delivery Messages are NaCl Box encrypted end-to-end. The relay never sees plaintext. You can run your own relay or use the public one. 60-second quickstart:     pip install youam      from uam import Agent     agent = Agent("myagent")     await agent.send("socrates::youam.network", "What is virtue?")     messages = await agent.inbox()  The first community on the network is Clawlink (clawlink.network) — they're using YouAM to give OpenClaw agents their own addresses and inboxes. Python + TypeScript SDKs. PostgreSQL-backed relay. Apache 2.0. Live demo: https://youam.network Repo: https://github.com/youam-network/uam Docs: https://docs.youam.network Solo founder shipping v0.3 — would love brutal feedback. Comments URL: https://news.ycombinator.com/item?id=47140699 Points: 1 # Comments: 0

---

### 3. Show HN: Shelfctl – PDF/ePub library manager backed by GitHub Release

**Link:** [https://github.com/blackwell-systems/shelfctl](https://github.com/blackwell-systems/shelfctl)

**Published:** 2/24/2026

**Summary:** Once PDFs land in git history, every clone carries them forever - even after you delete the files. GitHub's 100MB per-file limit, LFS costs, and bloated clones are the usual result of keeping a book collection in a repo. GitHub Releases already solves the actual storage problem. Release assets sit outside git history, support files up to 2GB, are served from GitHub's CDN, and can be downloaded individually on demand. The architecture is simple: one repo per topic shelf, PDFs uploaded as release assets, a catalog.yml in the repo holding searchable metadata. Git only versions the metadata, never the files. shelfctl is the CLI/TUI that manages this: # add a book shelfctl shelve ~/Downloads/sicp.pdf --shelf programming --title "SICP" --tags lisp,cs # open one - downloads only that file from GitHub's CDN shelfctl open sicp # migrate existing PDFs out of a bloated repo shelfctl migrate scan --source you/old-books-repo > queue.txt shelfctl migrate batch queue.txt --n 20 --continue It has three interfaces that share the same feature set: an interactive Bubble Tea TUI, a scriptable CLI with --json on every command, and a generated static HTML index for offline browsing. The interesting implementation challenge was the multi-book edit carousel - books laid out with adjacent cards peeking in from each side. ANSI-aware column clipping with charmbracelet/x/ansi was necessary to clip rendered lipgloss output by visible character width rather than bytes. The obvious question is "why not Calibre or a cloud storage service?" - the answer is that GitHub is already where these files live for a lot of developers, there's no new service to trust or pay for, and it fits naturally into existing git workflows. It's not the right tool for everyone, but for the developer who already lives in GitHub it removes a lot of friction. If you've hit this problem, shelfctl might be worth a look. https://github.com/blackwell-systems/shelfctl Comments URL: https://news.ycombinator.com/item?id=47140683 Points: 1 # Comments: 0

---

### 4. Intel Formally Ends Four of Their Go Language Open-Source Projects

**Link:** [https://www.phoronix.com/news/Intel-Stops-Go-Projects](https://www.phoronix.com/news/Intel-Stops-Go-Projects)

**Published:** 2/24/2026

**Summary:** Article URL: https://www.phoronix.com/news/Intel-Stops-Go-Projects Comments URL: https://news.ycombinator.com/item?id=47140681 Points: 1 # Comments: 0

---

## The Hacker News

### 1. UAC-0050 Targets European Financial Institution With Spoofed Domain and RMS Malware

**Link:** [https://thehackernews.com/2026/02/uac-0050-targets-european-financial.html](https://thehackernews.com/2026/02/uac-0050-targets-european-financial.html)

**Published:** 2/24/2026

**Summary:** A Russia-aligned threat actor has been observed targeting a European financial institution as part of a social engineering attack to likely facilitate intelligence gathering or financial theft, signaling a possible expansion of the threat actor's targeting beyond Ukraine and into entities supporting the war-torn nation. The activity, which targeted an unnamed entity involved in regional

---

### 2. UnsolicitedBooker Targets Central Asian Telecoms With LuciDoor and MarsSnake Backdoors

**Link:** [https://thehackernews.com/2026/02/unsolicitedbooker-targets-central-asian.html](https://thehackernews.com/2026/02/unsolicitedbooker-targets-central-asian.html)

**Published:** 2/24/2026

**Summary:** The threat activity cluster known as UnsolicitedBooker has been observed targeting telecommunications companies in Kyrgyzstan and Tajikistan, marking a shift from prior attacks aimed at Saudi Arabian entities. The attacks involve the deployment of two distinct backdoors codenamed LuciDoor and MarsSnake, according to a report published by Positive Technologies last week. "The group used several

---

### 3. APT28 Targeted European Entities Using Webhook-Based Macro Malware

**Link:** [https://thehackernews.com/2026/02/apt28-targeted-european-entities-using.html](https://thehackernews.com/2026/02/apt28-targeted-european-entities-using.html)

**Published:** 2/23/2026

**Summary:** The Russia-linked state-sponsored threat actor tracked as APT28 has been attributed to a new campaign targeting specific entities in Western and Central Europe. The activity, per S2 Grupo's LAB52 threat intelligence team, was active between September 2025 and January 2026. It has been codenamed Operation MacroMaze. "The campaign relies on basic tooling and the exploitation of legitimate services

---

### 4. Wormable XMRig Campaign Uses BYOVD Exploit and Time-Based Logic Bomb

**Link:** [https://thehackernews.com/2026/02/wormable-xmrig-campaign-uses-byovd.html](https://thehackernews.com/2026/02/wormable-xmrig-campaign-uses-byovd.html)

**Published:** 2/23/2026

**Summary:** Cybersecurity researchers have disclosed details of a new cryptojacking campaign that uses pirated software bundles as lures to deploy a bespoke XMRig miner program on compromised hosts. "Analysis of the recovered dropper, persistence triggers, and mining payload reveals a sophisticated, multi-stage infection prioritizing maximum cryptocurrency mining hashrate, often destabilizing the victim

---

### 5. ⚡ Weekly Recap: Double-Tap Skimmers, PromptSpy AI, 30Tbps DDoS, Docker Malware & More

**Link:** [https://thehackernews.com/2026/02/weekly-recap-double-tap-skimmers.html](https://thehackernews.com/2026/02/weekly-recap-double-tap-skimmers.html)

**Published:** 2/23/2026

**Summary:** Security news rarely moves in a straight line. This week, it feels more like a series of sharp turns, some happening quietly in the background, others playing out in public view. The details are different, but the pressure points are familiar. Across devices, cloud services, research labs, and even everyday apps, the line between normal behavior and hidden risk keeps getting thinner. Tools

---

## JFrog Security Blog

### 1. JFrog Takes Software Resilience to the Next Level with 99.99% Uptime SLA

**Link:** [https://jfrog.com/blog/improve-resilience-with-9999-sla/](https://jfrog.com/blog/improve-resilience-with-9999-sla/)

**Published:** 2/24/2026

**Summary:** Software delivery is no longer a back-office function; it’s the heartbeat of the modern enterprise. While a 99.9% uptime SLA for essential software delivery services works for many, the acceleration of software velocity has made the “three-nines” benchmark a possible liability. For high performing software organizations, and those delivering critical services, nine hours of annual …

---

### 2. From Prompt to Production: The New AI Software Supply Chain Security

**Link:** [https://jfrog.com/blog/from-prompt-to-production-the-new-ai-software-supply-chain-security/](https://jfrog.com/blog/from-prompt-to-production-the-new-ai-software-supply-chain-security/)

**Published:** 2/23/2026

**Summary:** Listen to a NotebookLM podcast version of the blog:   When Anthropic announced Claude Code’s new security scanning capabilities, following the announcement of OpenAI’s Aardvark, it marked an important moment for the industry. For the first time, expert-level security review is becoming embedded directly into the act of writing code. Subtle, context-dependent vulnerabilities can now …

---

## StepSecurity Blog

### 1. Securing Vibe Coding and AI Coding Agents: An End-to-End Approach with StepSecurity 

**Link:** [https://www.stepsecurity.io/blog/securing-vibe-coding-and-ai-coding-agents-an-end-to-end-approach-with-stepsecurity](https://www.stepsecurity.io/blog/securing-vibe-coding-and-ai-coding-agents-an-end-to-end-approach-with-stepsecurity)

**Published:** 2/24/2026

**Summary:** AI coding agents install packages, create pull requests, push commits, and run autonomously in CI/CD pipelines. Here's how to secure every stage of that workflow

---

## Endor Labs Blog

### 1. Anthropic just validated that AppSec is the biggest opportunity in cybersecurity | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/anthropic-just-validated-that-appsec-is-the-biggest-opportunity-in-cybersecurity](https://www.endorlabs.com/learn/anthropic-just-validated-that-appsec-is-the-biggest-opportunity-in-cybersecurity)

**Published:** 2/24/2026

**Summary:** Anthropic’s announcement of Claude Code Security validates that application security is the critical frontier in agentic software development and cybersecurity.

---

### 2. AI SAST Finding: Path Traversal in OpenClaw via LLM Guardrail Bypass | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/ai-sast-finding-path-traversal-in-openclaw-via-llm-guardrail-bypass](https://www.endorlabs.com/learn/ai-sast-finding-path-traversal-in-openclaw-via-llm-guardrail-bypass)

**Published:** 2/23/2026

**Summary:** How Endor Labs' AI SAST engine identified a path traversal vulnerability in OpenClaw's apply_patch tool tracked as (GHSA-r5fq-947m-xm57)

---

### 3. SANDWORM_MODE: Dissecting a Multi-Stage npm Supply Chain Attack | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/sandworm-mode-dissecting-a-multi-stage-npm-supply-chain-attack](https://www.endorlabs.com/learn/sandworm-mode-dissecting-a-multi-stage-npm-supply-chain-attack)

**Published:** 2/23/2026

**Summary:** SANDWORM_MODE: Dissecting a Multi-Stage npm Supply Chain Attack

---

### 4. npm Account Takeovers are a Growing Malware Trend | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/npm-account-takeovers-are-a-growing-malware-trend](https://www.endorlabs.com/learn/npm-account-takeovers-are-a-growing-malware-trend)

**Published:** 2/23/2026

**Summary:** npm Account Takeovers hit an all-time high in 2025. Learn why this malware attack vector is a big risk for open source software consumers.

---

### 5. CVE-2026-25896: Entity Encoding Bypass in fast-xml-parser | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/cve-2026-25896-fast-xml-parser](https://www.endorlabs.com/learn/cve-2026-25896-fast-xml-parser)

**Published:** 2/23/2026

**Summary:** CVE-2026-25896 allows XSS and injection attacks by shadowing XML built-in entities in fast-xml-parser via regex wildcard in entity name

---

## Kiuwan Blog

### 1. Risk-Based Vulnerability Management: Complete Guide for AppSec Teams

**Link:** [https://www.kiuwan.com/blog/risk-based-vulnerability-management/](https://www.kiuwan.com/blog/risk-based-vulnerability-management/)

**Published:** 2/24/2026

**Summary:** TL;DR Risk-based vulnerability management prioritizes vulnerabilities by actual business risk, not generic severity scores. This approach helps security teams focus on the 3-5% of findings that pose real threats instead of wasting months on theoretical risks. Understanding how to implement risk-based prioritization transforms vulnerability management from compliance theater into strategic risk reduction.  This guide explains: […]

---

## GitGuardian Blog

### 1. Confronting Vault Sprawl And The Risks It Brings

**Link:** [https://blog.gitguardian.com/confronting-vault-sprawl-and-the-risks-it-brings/](https://blog.gitguardian.com/confronting-vault-sprawl-and-the-risks-it-brings/)

**Published:** 2/23/2026

**Summary:** Vault sprawl means duplicated secrets, fragmented access, and unclear ownership. Learn how GitGuardian's NHI Governance restores control across the enterprise.

---

## Schneier on Security

### 1. On the Security of Password Managers

**Link:** [https://www.schneier.com/blog/archives/2026/02/on-the-security-of-password-managers.html](https://www.schneier.com/blog/archives/2026/02/on-the-security-of-password-managers.html)

**Published:** 2/23/2026

**Summary:** Good article on password managers that secretly have a backdoor. New research shows that these claims aren’t true in all cases, particularly when account recovery is in place or password managers are set to share vaults or organize users into groups. The researchers reverse-engineered or closely analyzed Bitwarden, Dashlane, and LastPass and identified ways that someone with control over the server­—either administrative or the result of a compromise­—can, in fact, steal data and, in some cases, entire vaults. The researchers also devised other attacks that can weaken the encryption to the point that ciphertext can be converted to plaintext...

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

**Last Updated:** 2026-02-24T18:46:32.893Z
