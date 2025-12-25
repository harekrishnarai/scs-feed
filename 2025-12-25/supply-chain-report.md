# Supply Chain Security Daily Report
**Date:** 2025-12-25
**Total Reports Found:** 8

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: I Patched Agents SDK to Work with React Native

**Link:** [https://testflight.apple.com/join/TvcaP2q6](https://testflight.apple.com/join/TvcaP2q6)

**Published:** 12/25/2025

**Summary:** For the last two weeks, I was struggling to make Agents SDK work with React-Native. The problem is they never made support for it. After two weeks of trying different approaches, using a server as a proxy, or trying to make my own web socket, I almost gave up. Then I decided to do a little bit of digging and found out that actually someone in July tried to propose a PR with a fix to make React-Native work with Agents SDK. However, the maintainers ghosted that PR. After some digging, I have made my own patch, and successfully made Agents SDK work with React-Native. Secondly, I've reached out on every platform possible to both maintainers for the Agents SDK repository, and finally got a response through Instagram, surprisingly. The lesson is that I've learned is: - I can patch any open source library to make it work for my purposes.  - Second, as a nobody, you can reach out to people through many, many channels, and they will respond to you through one of them. P.S. It's a TestFlight App, so you might wanna open it on your iPhone. Comments URL: https://news.ycombinator.com/item?id=46386160 Points: 1 # Comments: 0

---

### 2. Show HN: I created interactive buttons for chatbots

**Link:** [https://news.ycombinator.com/item?id=46386095](https://news.ycombinator.com/item?id=46386095)

**Published:** 12/25/2025

**Summary:** It's about to be 2026 and we're still stuck in the CLI era when it comes to chatbots. So, I created an open source library called Quint. Quint is a small React library that lets you build structured, deterministic interactions on top of LLMs. Instead of everything being raw text, you can define explicit choices where a click can reveal information, send structured input back to the model, or do both, with full control over where the output appears. Quint only manages state and behavior, not presentation. Therefore, you can fully customize the buttons and reveal UI through your own components and styles. The core idea is simple: separate what the model receives, what the user sees, and where that output is rendered. This makes things like MCQs, explanations, role-play branches, and localized UI expansion predictable instead of hacky. Quint doesn’t depend on any AI provider and works even without an LLM. All model interaction happens through callbacks, so you can plug in OpenAI, Gemini, Claude, or a mock function. It’s early (v0.1.0), but the core abstraction is stable. I’d love feedback on whether this is a useful direction or if there are obvious flaws I’m missing. This is just the start. Soon we'll have entire ui elements that can be rendered by LLMs making every interaction easy asf for the avg end user. Repo + docs: https://github.com/ItsM0rty/quint npm: https://www.npmjs.com/package/@itsm0rty/quint Comments URL: https://news.ycombinator.com/item?id=46386095 Points: 1 # Comments: 0

---

### 3. Orchestrating 5000 Workers Without Distributed Locks: Rediscovering TDMA

**Link:** [https://news.ycombinator.com/item?id=46386053](https://news.ycombinator.com/item?id=46386053)

**Published:** 12/25/2025

**Summary:** I needed to orchestrate 500-5000 batch workers (ML training, ETL) using Go and SQLite. Every tutorial said: use etcd, Consul, or ZooKeeper. But why do these processes need to talk to each other at all? THE INSIGHT What if orchestrators never run simultaneously? Runner-0 executes at T=0s, 10s, 20s... Runner-1 executes at T=2s, 12s, 22s... Runner-2 executes at T=4s, 14s, 24s... Runner-3 executes at T=6s, 16s, 26s... Runner-4 executes at T=8s, 18s, 28s... Time-Division Multiple Access (TDMA). Same pattern GSM uses for radio. GO IMPLEMENTATION type Runner struct {     ID, TotalRunners int     CycleTime time.Duration } func (r Runner) Start() {     slot := r.CycleTime / time.Duration(r.TotalRunners)     offset := time.Duration(r.ID)  slot     for {         time.Sleep(time.Until(computeNextSlot(offset)))         r.reconcile() // Check workers, start if needed     } Each runner gets 2s in a 10s cycle. No overlap = zero coordination. SQLITE CONFIG PRAGMA journal_mode=WAL; dbWrite.SetMaxOpenConns(1)  // One writer dbRead.SetMaxOpenConns(10)  // Concurrent reads With TDMA, busy_timeout never triggers. THE MATH Capacity = SlotDuration / TimePerWorker          = 2000ms / 10ms = 200 workers per runner 5 runners = 1000 workers 25 runners = 5000 workers (25s cycle, 12.5s avg latency) For batch jobs running hours, 10s detection latency is irrelevant. BENCHMARKS (real data from docs/papers) System       | Writes/s | Latency | Nodes | Use Case etcd         | 10,000   | 25ms    | 3-5   | Config ZooKeeper    | 8,000    | 50ms    | 5     | Election Temporal     | 2,000    | 100ms   | 15-20 | Workflows Airflow      | 300      | 2s      | 2-3   | Batch TDMA-SPI     | 40       | 5s avg  | 1-5   | Batch WHAT YOU GAIN: - Zero consensus protocols (no Raft/Paxos) - Single-node deployment possible - Deterministic behavior - Radical simplicity WHAT YOU SACRIFICE: - Real-time response (1000 ops/sec) - Arbitrary scale (limit ~5000 workers) UNIVERSAL PATTERN Wireless Sensor Networks: DD-TDMA (IEEE 2007) - same pattern Kubernetes Controllers: Reconcile every 5-10s (implicit TDMA) Build Systems: Time-slice job claims vs SELECT FOR UPDATE WHY ISN'T THIS COMMON? 1. Cultural bias: Industry teaches "add consensus layer" as default 2. TDMA sounds old: It's from 1980s telecoms (but old ≠ bad) 3. SQLite underestimated: Actually handles 50K-100K writes/sec on NVMe 4. Most examples optimize for microservices (1000s ops/sec), not batch WHEN NOT TO USE:  Microservices (10,000 operations/sec required GOOD FOR:  Batch processing  ML training orchestration  ETL pipelines (hourly/daily)  Video/image processing  Anything where task duration >> detection latency THE REAL LESSON Modern distributed systems thinking: 1. Assume coordination needed 2. Pick consensus protocol 3. Deal with complexity Alternative: 1. Can processes avoid each other? (temporal isolation) 2. Can data be partitioned? (spatial isolation) 3. Is eventual consistency OK? If yes to all three: you might not need coordination at all. CONCLUSION I built a simple orchestrator for batch workers and rediscovered a 40-year-old telecom pattern that eliminates distributed coordination entirely. The pattern: TDMA + spatial partitioning + SQLite The application to workflow orchestration seems novel. If Kubernetes feels like overkill, maybe time-slicing is enough. Sometimes the best distributed system is one that doesn't need to be distributed. --- Full writeup: [blog link] Code: [github link] Discussion: Anyone else using time-based scheduling for coordination-free systems? What about high clock skew networks? Comments URL: https://news.ycombinator.com/item?id=46386053 Points: 1 # Comments: 0

---

### 4. We removed 80% of our agent's tools

**Link:** [https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools](https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools)

**Published:** 12/25/2025

**Summary:** Article URL: https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools Comments URL: https://news.ycombinator.com/item?id=46386030 Points: 1 # Comments: 1

---

### 5. All I Want for Xmas Is Your Secrets: LangGrinch Hits LangChain (CVE-2025-68664)

**Link:** [https://cyata.ai/blog/langgrinch-langchain-core-cve-2025-68664/](https://cyata.ai/blog/langgrinch-langchain-core-cve-2025-68664/)

**Published:** 12/25/2025

**Summary:** Article URL: https://cyata.ai/blog/langgrinch-langchain-core-cve-2025-68664/ Comments URL: https://news.ycombinator.com/item?id=46386009 Points: 3 # Comments: 1

---

## The Hacker News

### 1. ThreatsDay Bulletin: Stealth Loaders, AI Chatbot Flaws AI Exploits, Docker Hack, and 15 More Stories

**Link:** [https://thehackernews.com/2025/12/threatsday-bulletin-stealth-loaders-ai.html](https://thehackernews.com/2025/12/threatsday-bulletin-stealth-loaders-ai.html)

**Published:** 12/25/2025

**Summary:** It’s getting harder to tell where normal tech ends and malicious intent begins. Attackers are no longer just breaking in — they’re blending in, hijacking everyday tools, trusted apps, and even AI assistants. What used to feel like clear-cut “hacker stories” now looks more like a mirror of the systems we all use. This week’s findings show a pattern: precision, patience, and persuasion. The

---

## Bleeping Computer Security

### 1. OpenAI is reportedly testing Claude-like Skills for ChatGPT

**Link:** [https://www.bleepingcomputer.com/news/artificial-intelligence/openai-is-reportedly-testing-claude-like-skills-for-chatgpt/](https://www.bleepingcomputer.com/news/artificial-intelligence/openai-is-reportedly-testing-claude-like-skills-for-chatgpt/)

**Published:** 12/24/2025

**Summary:** OpenAI is testing a new ChatGPT feature called "Skills," which will be similar to Claude's feature, also called Skills. [...]

---

## Schneier on Security

### 1. Urban VPN Proxy Surreptitiously Intercepts AI Chats

**Link:** [https://www.schneier.com/blog/archives/2025/12/urban-vpn-proxy-surreptitiously-intercepts-ai-chats.html](https://www.schneier.com/blog/archives/2025/12/urban-vpn-proxy-surreptitiously-intercepts-ai-chats.html)

**Published:** 12/24/2025

**Summary:** This is pretty scary: Urban VPN Proxy targets conversations across ten AI platforms: ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, DeepSeek, Grok (xAI), Meta AI. For each platform, the extension includes a dedicated “executor” script designed to intercept and capture conversations. The harvesting is enabled by default through hardcoded flags in the extension’s configuration. There is no user-facing toggle to disable this. The only way to stop the data collection is to uninstall the extension entirely. […] The data collection operates independently of the VPN functionality. Whether the VPN is connected or not, the harvesting runs continuously in the background...

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

**Last Updated:** 2025-12-25T18:41:35.102Z
