# Supply Chain Security Daily Report
**Date:** 2026-03-10
**Total Reports Found:** 21

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Free prompt injection scanner – paste your AI prompt, see where it breaks

**Link:** [https://aiunbreakable.com/tools/prompt-vulnerability-scanner](https://aiunbreakable.com/tools/prompt-vulnerability-scanner)

**Published:** 3/10/2026

**Summary:** Article URL: https://aiunbreakable.com/tools/prompt-vulnerability-scanner Comments URL: https://news.ycombinator.com/item?id=47327086 Points: 1 # Comments: 0

---

### 2. Unpowered SSD data retention test:no data corruption on USB sticks after 6 years

**Link:** [https://www.tomshardware.com/pc-components/usb-flash-drives/unpowered-flash-drive-data-retention-test-shows-promising-results-after-six-years-results-show-no-data-corruption-on-usb-sticks-challenging-conventional-wisdom](https://www.tomshardware.com/pc-components/usb-flash-drives/unpowered-flash-drive-data-retention-test-shows-promising-results-after-six-years-results-show-no-data-corruption-on-usb-sticks-challenging-conventional-wisdom)

**Published:** 3/10/2026

**Summary:** Article URL: https://www.tomshardware.com/pc-components/usb-flash-drives/unpowered-flash-drive-data-retention-test-shows-promising-results-after-six-years-results-show-no-data-corruption-on-usb-sticks-challenging-conventional-wisdom Comments URL: https://news.ycombinator.com/item?id=47327042 Points: 1 # Comments: 0

---

### 3. Russia-backed hackers breach Signal, WhatsApp accounts of officials, journalists

**Link:** [https://www.reuters.com/world/europe/russia-backed-hackers-breach-signal-whatsapp-accounts-officials-journalists-2026-03-09/](https://www.reuters.com/world/europe/russia-backed-hackers-breach-signal-whatsapp-accounts-officials-journalists-2026-03-09/)

**Published:** 3/10/2026

**Summary:** Article URL: https://www.reuters.com/world/europe/russia-backed-hackers-breach-signal-whatsapp-accounts-officials-journalists-2026-03-09/ Comments URL: https://news.ycombinator.com/item?id=47327038 Points: 2 # Comments: 1

---

### 4. Show HN: Railyard – open and secure runtime for Claude Code

**Link:** [https://news.ycombinator.com/item?id=47327033](https://news.ycombinator.com/item?id=47327033)

**Published:** 3/10/2026

**Summary:** We're a small startup (but have ~15 years of experience building software), so we try to run Claude Code as autonomously as possible. The goal is to spend most of our time talking to customers instead of babysitting the agent. But --dangerously-skip-permissions felt a bit too wild west for us. So we built a runtime to make autonomous use safer. Railyard is an open-source runtime that sits between Claude Code and the shell and adds guardrails to agent commands. Every command Claude runs goes through Railyard first. Most commands pass straight through. The ones that could cause damage (for example terraform destroy) get blocked or require approval. Under the hood it runs commands inside an OS-level sandbox (sandbox-exec on macOS and bwrap on Linux) and applies deterministic rules. There’s no LLM scoring commands or guessing about intent — a command either matches a rule or it doesn’t. The check takes about 2ms. By default it blocks destructive commands like terraform destroy or rm -rf, prevents access to sensitive paths like ~/.ssh, ~/.aws, and /etc, restricts certain network calls, and catches simple evasion tricks like base64, hex, or variable obfuscation. It also snapshots file writes so you can roll back a session if something goes wrong. In practice this lets us run Claude Code with --dangerously-skip-permissions, but with guardrails underneath so we can move fast without breaking or deleting production assets. We built this because we wanted Claude Code to behave more like a software factory. Factories run at high volume, but only because the production line has quality and safety checks. Railyard is the guardrail layer that makes that possible for us. Repo: https://github.com/railyarddev/railyard It's MIT licensed and free to use. If you're experimenting with autonomous agents, feel free to clone it and try it out. I'm especially curious how people push or break these guardrails. Happy to answer any questions about how it works. Comments URL: https://news.ycombinator.com/item?id=47327033 Points: 1 # Comments: 0

---

### 5. More tokens, less cost: why optimizing for token count is wrong

**Link:** [https://news.ycombinator.com/item?id=47326918](https://news.ycombinator.com/item?id=47326918)

**Published:** 3/10/2026

**Summary:** I ran a controlled benchmark on AI coding agents (42 runs, FastAPI, Claude Sonnet 4.6) and found something that broke my mental model of LLM costs. The setup: I built an MCP server that pre-indexes a codebase into a dependency graph and serves pre-ranked context to the agent in a single call, instead of letting the agent explore files on its own. The expected result: less input context → lower cost. Straightforward. The actual result: total tokens processed went UP 20% (23.4M vs 19.6M) while total cost went DOWN 58% ($6.89 vs $16.29). The explanation is in how Anthropic prices tokens. There are three pricing tiers: Output tokens: most expensive (3-5x input price) Input tokens (cache miss): full price Input tokens (cache hit): 90% discount The agent with pre-indexed context processes more total tokens because the structured context payload is injected every turn. But the token MIX shifts dramatically: Output tokens:     10,588 → 3,965  (-63%) Cache read rate:   93.8% → 95.3% Cache creation:    6.1% → 4.6% Output tokens dominate the cost equation. When the agent receives 40K tokens of unfiltered context, it generates verbose orientation narration ("let me look at this file... I can see that..."). When it receives 8K tokens of graph-ranked context, it skips straight to the answer. 504 output tokens per task → 189. The cache effect compounds this: structured, consistent context across turns hits the cache more reliably than ad-hoc file reads that change every turn. So the additional input tokens cost almost nothing (90% discount) while the output token reduction saves the most expensive tokens. The general principle: with tiered token pricing, optimizing for total token count is wrong. You should optimize for token mix — push volume from expensive tiers (output, cache miss) to cheap tiers (cache hit). More total tokens can cost less if you shift the distribution. This seems obvious in retrospect but I haven't seen it discussed much. Most context engineering work focuses on reducing input tokens. The bigger lever might be reducing output tokens by improving input signal-to-noise ratio — the model writes less when it doesn't have to think out loud about what it's reading. The tool is vexp (https://vexp.dev) — local-first context engine, Rust + tree-sitter + SQLite. Free tier available. Comments URL: https://news.ycombinator.com/item?id=47326918 Points: 1 # Comments: 4

---

## The Hacker News

### 1. KadNap Malware Infects 14,000+ Edge Devices to Power Stealth Proxy Botnet

**Link:** [https://thehackernews.com/2026/03/kadnap-malware-infects-14000-edge.html](https://thehackernews.com/2026/03/kadnap-malware-infects-14000-edge.html)

**Published:** 3/10/2026

**Summary:** Cybersecurity researchers have discovered a new malware called KadNap that's primarily targeting Asus routers to enlist them into a botnet for proxying malicious traffic. The malware, first detected in the wild in August 2025, has expanded to over 14,000 infected devices, with more than 60% of victims located in the U.S., according to the Black Lotus Labs team at Lumen. A lesser number of

---

### 2. The Zero-Day Scramble is Avoidable: A Guide to Attack Surface Reduction

**Link:** [https://thehackernews.com/2026/03/the-zero-day-scramble-is-avoidable.html](https://thehackernews.com/2026/03/the-zero-day-scramble-is-avoidable.html)

**Published:** 3/10/2026

**Summary:** You can't control when the next critical vulnerability drops. You can control how much of your environment is exposed when it does. The problem is that most teams have more internet-facing exposure than they realise. Intruder's Head of Security digs into why this happens and how teams can manage it deliberately. Time-to-exploit is shrinking The larger and less controlled your attack surface is,

---

### 3. APT28 Uses BEARDSHELL and COVENANT Malware to Spy on Ukrainian Military

**Link:** [https://thehackernews.com/2026/03/apt28-uses-beardshell-and-covenant.html](https://thehackernews.com/2026/03/apt28-uses-beardshell-and-covenant.html)

**Published:** 3/10/2026

**Summary:** The Russian state-sponsored hacking group tracked as APT28 has been observed using a pair of implants dubbed BEARDSHELL and COVENANT to facilitate long‑term surveillance of Ukrainian military personnel. The two malware families have been put to use since April 2024, ESET said in a new report shared with The Hacker News. APT28, also tracked as Blue Athena, BlueDelta, Fancy Bear, Fighting Ursa,

---

### 4. Malicious npm Package Posing as OpenClaw Installer Deploys RAT, Steals macOS Credentials

**Link:** [https://thehackernews.com/2026/03/malicious-npm-package-posing-as.html](https://thehackernews.com/2026/03/malicious-npm-package-posing-as.html)

**Published:** 3/9/2026

**Summary:** Cybersecurity researchers have discovered a malicious npm package that masquerades as an OpenClaw installer to deploy a remote access trojan (RAT) and steal sensitive data from compromised hosts. The package, named "@openclaw-ai/openclawai," was uploaded to the registry by a user named "openclaw-ai" on March 3, 2026. It has been downloaded 178 times to date. The library is still available for

---

### 5. UNC4899 Breached Crypto Firm After Developer AirDropped Trojanized File to Work Device

**Link:** [https://thehackernews.com/2026/03/unc4899-used-airdrop-file-transfer-and.html](https://thehackernews.com/2026/03/unc4899-used-airdrop-file-transfer-and.html)

**Published:** 3/9/2026

**Summary:** The North Korean threat actor known as UNC4899 is suspected to be behind a sophisticated cloud compromise campaign targeting a cryptocurrency organization in 2025 to steal millions of dollars in cryptocurrency. The activity has been attributed with moderate confidence to the state-sponsored adversary, which is also tracked under the cryptonyms Jade Sleet, PUKCHONG, Slow Pisces, and

---

## StepSecurity Blog

### 1. kubernetes-el Compromised: How a Pwn Request Exploited a Popular Emacs Package

**Link:** [https://www.stepsecurity.io/blog/kubernetes-el-compromised-how-a-pwn-request-exploited-a-popular-emacs-package](https://www.stepsecurity.io/blog/kubernetes-el-compromised-how-a-pwn-request-exploited-a-popular-emacs-package)

**Published:** 3/10/2026

**Summary:** On March 5, 2026, a threat actor exploited a classic "Pwn Request" vulnerability in the CI workflow of kubernetes-el/kubernetes-el, a popular Emacs package for managing Kubernetes clusters. The attacker stole the repository's GITHUB_TOKEN (with full write permissions), exfiltrated CI/CD secrets, defaced the repository, and injected destructive code.

---

### 2. xygeni-action Compromised: C2 Reverse Shell Backdoor Injected via Tag Poisoning

**Link:** [https://www.stepsecurity.io/blog/xygeni-action-compromised-c2-reverse-shell-backdoor-injected-via-tag-poisoning](https://www.stepsecurity.io/blog/xygeni-action-compromised-c2-reverse-shell-backdoor-injected-via-tag-poisoning)

**Published:** 3/9/2026

**Summary:** The official Xygeni GitHub Action (xygeni-action) was compromised on March 3, 2026, when an attacker using stolen maintainer credentials injected a full C2 reverse shell backdoor and silently moved the mutable v5 tag to the malicious commit - affecting all repositories referencing @v5 without any visible change to their workflow files. The v5 tag remains poisoned as of March 9; users should immediately pin to v6.4.0 or a specific commit SHA, and StepSecurity's Harden-Runner would have detected and blocked the C2 callback to 91.214.78.178.

---

## Endor Labs Blog

### 1. Intelligence and governance in the software supply chain with Endor Labs and Cloudsmith | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/intelligence-and-governance-in-the-software-supply-chain-with-endor-labs-and-cloudsmith](https://www.endorlabs.com/learn/intelligence-and-governance-in-the-software-supply-chain-with-endor-labs-and-cloudsmith)

**Published:** 3/10/2026

**Summary:** Endor Labs and Cloudsmith combine deep vulnerability intelligence with artifact governance to secure the modern software and AI supply chain.

---

## Bleeping Computer Security

### 1. The New Turing Test: How Threats Use Geometry to Prove 'Humanness'

**Link:** [https://www.bleepingcomputer.com/news/security/the-new-turing-test-how-threats-use-geometry-to-prove-humanness/](https://www.bleepingcomputer.com/news/security/the-new-turing-test-how-threats-use-geometry-to-prove-humanness/)

**Published:** 3/10/2026

**Summary:** Malware is evolving to evade sandboxes by pretending to be a real human behind the keyboard. The Picus Red Report 2026 shows 80% of top attacker techniques now focus on evasion and persistence, including geometry-based cursor tests and CPU timing checks. [...]

---

### 2. Google: Cloud attacks exploit flaws more than weak credentials

**Link:** [https://www.bleepingcomputer.com/news/security/google-cloud-attacks-exploit-flaws-more-than-weak-credentials/](https://www.bleepingcomputer.com/news/security/google-cloud-attacks-exploit-flaws-more-than-weak-credentials/)

**Published:** 3/9/2026

**Summary:** Hackers are increasingly exploiting newly disclosed vulnerabilities in third-party software to gain initial access to cloud environments, with the window for attacks shrinking from weeks to just days. [...]

---

### 3. Microsoft Teams will tag third-party bots trying to join meetings

**Link:** [https://www.bleepingcomputer.com/news/microsoft/microsoft-teams-will-tag-third-party-bots-in-meeting-lobbies/](https://www.bleepingcomputer.com/news/microsoft/microsoft-teams-will-tag-third-party-bots-in-meeting-lobbies/)

**Published:** 3/9/2026

**Summary:** Microsoft says Teams will soon automatically tag third-party bots in lobbies, allowing organizers to control whether they can join meetings. [...]

---

## Sonatype Security Research

### 1. OMB Rolled Back the Rules. Security Did Not Get Easier

**Link:** [https://www.sonatype.com/blog/omb-rolled-back-the-rules.-security-did-not-get-easier](https://www.sonatype.com/blog/omb-rolled-back-the-rules.-security-did-not-get-easier)

**Published:** 3/10/2026

**Summary:** The U.S. Office of Management and Budget (OMB)'s decision to rescind M-22-18 and M-23-16 and replace them with M-26-05 has been framed as a win for flexibility and a rollback of security theater. That framing is not entirely wrong, but it misses something fundamental about how modern software actually fails. There are pieces of this shift that are directionally correct, and others that risk undoing what little consistency the federal software ecosystem had finally begun to build.

---

## JFrog Security Blog

### 1. Beyond Mirroring: 5 Reasons Your DevOps Strategy Depends on Repository Federation

**Link:** [https://jfrog.com/blog/beyond-mirroring-with-jfrog-repository-federation/](https://jfrog.com/blog/beyond-mirroring-with-jfrog-repository-federation/)

**Published:** 3/10/2026

**Summary:** For today’s leading enterprise computing environments, the concept of  “centralized headquarters” is a relic. Today, R&D happens on different continents, spanning cloud, on-prem and hybrid environments, while stretching across multiple regulatory jurisdictions. But here is the hard truth: Most global organizations are still managing their binaries using legacy mirroring or “blind” infrastructure-level syncing. They treat …

---

### 2. Trusted AI Adoption (Part 1): Consolidation

**Link:** [https://jfrog.com/blog/trusted-ai-adoption-part-1-consolidation/](https://jfrog.com/blog/trusted-ai-adoption-part-1-consolidation/)

**Published:** 3/9/2026

**Summary:** Imagine your lead Software Engineer walks into your office and says, “Good news! I just deployed that critical update to production. I wrote the code on my personal laptop, didn’t run it through CI/CD, skipped the security scan, and just copied the files directly to the server with a USB drive.” You would fire them. …

---

## Schneier on Security

### 1. Jailbreaking the F-35 Fighter Jet

**Link:** [https://www.schneier.com/blog/archives/2026/03/jailbreaking-the-f-35-fighter-jet.html](https://www.schneier.com/blog/archives/2026/03/jailbreaking-the-f-35-fighter-jet.html)

**Published:** 3/10/2026

**Summary:** Countries around the world are becoming increasingly concerned about their dependencies on the US. If you’ve purchase US-made F-35 fighter jets, you are dependent on the US for software maintenance. The Dutch Defense Secretary recently said that he could jailbreak the planes to accept third-party software.

---

## GitGuardian Blog

### 1. ConFoo 2026: Guardrails for Agentic AI, Prompts, and Supply Chains

**Link:** [https://blog.gitguardian.com/confoo-2026/](https://blog.gitguardian.com/confoo-2026/)

**Published:** 3/9/2026

**Summary:** Read the takeaways from ConFoo 2026, including putting guardrails where requests happen, auditing tool calls, treat dependency updates like production access.

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

**Last Updated:** 2026-03-10T18:44:50.035Z
