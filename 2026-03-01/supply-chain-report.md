# Supply Chain Security Daily Report
**Date:** 2026-03-01
**Total Reports Found:** 10

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: MCP file tools silently eat your context window.I built one that doesnt

**Link:** [https://github.com/ckanthony/Chisel](https://github.com/ckanthony/Chisel)

**Published:** 3/1/2026

**Summary:** Hi, I am Anthony. Every token your filesystem tools consume is context the model cannot use for reasoning. Most MCP file servers are O(file size) on every operation: reads return the whole file, edits rewrite the whole file. The context window fills up before the agent gets anything meaningful done, and the problem compounds silently as your files grow. Chisel makes edits O(diff) and reads O(match). The agent sends a unified diff instead of a full rewrite, and queries with grep or sed instead of reading entire files. On a 500-line file this is nearly two orders of magnitude less context per operation. The savings scale linearly with file size, so the larger your codebase, the more it matters. The other thing I cared about was security. Path confinement is enforced at the kernel level via cap-std and openat with O_NOFOLLOW, not a userspace prefix check. Shell commands run via direct execve against a fixed compile-time whitelist — no sh -c wrapper, no arbitrary execution. Atomic writes use a tmp-and-rename so a failed patch never corrupts the target file. It ships as a standalone MCP server, as chisel-core, a plain sync Rust library you can embed in your own MCP server, and as a WASM build for Node.js and Python runtimes, you can bring your own MCP and build on top of it. Would love feedback, especially from anyone building agents that do heavy file manipulation. GitHub: https://github.com/ckanthony/Chisel Comments URL: https://news.ycombinator.com/item?id=47209377 Points: 2 # Comments: 1

---

### 2. Aura-State: Formally Verified LLM State Machine Compiler

**Link:** [https://news.ycombinator.com/item?id=47209315](https://news.ycombinator.com/item?id=47209315)

**Published:** 3/1/2026

**Summary:** I noticed a pattern: every LLM framework today lets the AI manage state and do math. Then we wonder why pipelines hallucinate numbers and break at 3 AM. I took a different approach and built Aura-State, an open-source Python framework that compiles LLM workflows into formally verified state machines. Instead of hoping the AI figures it out, I brought in real algorithms from hardware verification and statistical learning: CTL Model Checking: the same technique used to verify flight control systems, now applied to LLM workflow graphs. Proves safety properties before execution. Z3 Theorem Prover: every LLM extraction gets formally proven against business constraints. If the total ≠ price × quantity, Z3 catches it with a counterexample. Conformal Prediction: distribution-free 95% confidence intervals on every extracted field. Not just "the LLM said $450k" but "95% CI: [$448k, $452k]." MCTS Routing: Monte Carlo Tree Search (the algorithm behind AlphaGo) scores ambiguous state transitions mathematically. Sandboxed Math: English math rules compile to Python AST. Zero hallucination calculations. I ran a live benchmark against 10 real-estate sales transcripts using GPT-4o-mini: → 100% budget extraction accuracy ($0 mean error) → 20/20 Z3 proof obligations passed → 3/3 temporal safety properties proven → 65 automated tests passing The gap between "it usually works" and "it provably works" is smaller than people think. Would love feedback from anyone building production LLM systems; what would you want formally verified? https://github.com/munshi007/Aura-State Comments URL: https://news.ycombinator.com/item?id=47209315 Points: 2 # Comments: 0

---

### 3. DEF Con 33 – Exploiting Shadow Data from AI Models and Embeddings [video]

**Link:** [https://www.youtube.com/watch?v=O7BI4jfEFwA](https://www.youtube.com/watch?v=O7BI4jfEFwA)

**Published:** 3/1/2026

**Summary:** Article URL: https://www.youtube.com/watch?v=O7BI4jfEFwA Comments URL: https://news.ycombinator.com/item?id=47209207 Points: 3 # Comments: 0

---

## StepSecurity Blog

### 1. hackerbot-claw: An AI-Powered Bot Actively Exploiting GitHub Actions - Microsoft, DataDog, and CNCF Projects Hit So Far

**Link:** [https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation](https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation)

**Published:** 3/1/2026

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

## The Hacker News

### 1. ClawJacked Flaw Lets Malicious Sites Hijack Local OpenClaw AI Agents via WebSocket

**Link:** [https://thehackernews.com/2026/02/clawjacked-flaw-lets-malicious-sites.html](https://thehackernews.com/2026/02/clawjacked-flaw-lets-malicious-sites.html)

**Published:** 2/28/2026

**Summary:** OpenClaw has fixed a high-severity security issue that, if successfully exploited, could have allowed a malicious website to connect to a locally running artificial intelligence (AI) agent and take over control. "Our vulnerability lives in the core system itself – no plugins, no marketplace, no user-installed extensions – just the bare OpenClaw gateway, running exactly as documented," Oasis

---

### 2. Pentagon Designates Anthropic Supply Chain Risk Over AI Military Dispute

**Link:** [https://thehackernews.com/2026/02/pentagon-designates-anthropic-supply.html](https://thehackernews.com/2026/02/pentagon-designates-anthropic-supply.html)

**Published:** 2/28/2026

**Summary:** Anthropic on Friday hit back after U.S. Secretary of Defense Pete Hegseth directed the Pentagon to designate the artificial intelligence (AI) upstart as a "supply chain risk." "This action follows months of negotiations that reached an impasse over two exceptions we requested to the lawful use of our AI model, Claude: the mass domestic surveillance of Americans and fully autonomous weapons," the

---

## Krebs on Security

### 1. Who is the Kimwolf Botmaster “Dort”?

**Link:** [https://krebsonsecurity.com/2026/02/who-is-the-kimwolf-botmaster-dort/](https://krebsonsecurity.com/2026/02/who-is-the-kimwolf-botmaster-dort/)

**Published:** 2/28/2026

**Summary:** In early January 2026, KrebsOnSecurity revealed how a security researcher disclosed a vulnerability that was used to assemble Kimwolf, the world's largest and most disruptive botnet. Since then, the person in control of Kimwolf -- who goes by the handle "Dort" -- has coordinated a barrage of distributed denial-of-service (DDoS), doxing and email flooding attacks against the researcher and this author, and more recently caused a SWAT team to be sent to the researcher's home. This post examines what is knowable about Dort based on public information.

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

**Last Updated:** 2026-03-01T18:43:17.327Z
