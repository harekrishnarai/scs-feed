# Supply Chain Security Daily Report
**Date:** 2026-11-14
**Total Reports Found:** 17

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Flipbook Foundry – animated stick figures baked into a font

**Link:** [https://flipbook-foundry.pages.dev/](https://flipbook-foundry.pages.dev/)

**Published:** 11/14/2026

**Summary:** I've always loved flipbooks, the little stick figure running and jumping around the corner of a page. I was curious if I could hi-jack a font file with stick figure glyphs. So I prompted Flipbook Foundry into existence. Each animated frame of the a stick figure's motion is just a glyph in the font. You can drop {walk} into a paragraph and a stick figure walks right through it, at text size, and the words move aside. The text reflow runs on Cheng Lou's awesome pretext library, which is fast enough to animate everything performantly. There's an API for it (framer-motion style, for Svelte / React / plain JS), and the fonts are regular .otf files. Made a little demo page too - check it out and enjoy the swarm! Comments URL: https://news.ycombinator.com/item?id=50499365 Points: 1 # Comments: 0

---

### 2. Show HN: Blaris – Windowless Random-Access LZSS for Constrained Microcontrollers

**Link:** [https://github.com/lis05/blaris](https://github.com/lis05/blaris)

**Published:** 11/14/2026

**Summary:** Hello HN! I'd like to share the project I've been working on for the last couple of months. On microcontrollers with only a few kilobytes of memory (both Flash and SRAM) heatshrink [1] and tamp [2] are the current meta when it comes to decompression of static assets. They are small, configurable, and produce good compression ratio. However, when random-access workflows are concerned (like extracting a single parameter from a configuration file), both compressors require the exact same window to be allocated. This means that, to decompress a small (4-32 bytes) chunk, memory consumption stays the same as when decompression the entire payload. blaris is a Windowless LZSS algorithm, meaning that it is LZSS but does not allocate a window. This allows it to reach the same compression ratio (and sometimes even better) as heatshrink and tamp, while keeping memory usage extremely minimal (around 100 bytes of SRAM). Typical LZ77/LZSS works by copying a byte from the window buffer when resolving a match. Windowless version works by resolving this match using the compressed payload itself - following the chain of matches until it finds a literal run token. To facilitate this, tokens are split into 3 streams: 1. controls (1 byte per value) - encode either literal run length (1 to 16) or 240 different pairs (match_len, match_distance_log2). 2. literals (1 byte per value) - raw literals. 3. distance bits (bit-packed) - contains bit-packed match offsets. Because controls are 1 byte and determine the size of the token, we can traverse all 3 streams in both directions, which enables the windowless LZSS! There are additional optimizations used to speed this up: 1. checkpoints contain decoder state at each 2^SPREAD_LOG positions, which enables the decoder to jump to the closest checkpoint in constant time. 2. matches' offsets can be forced to align to a power of two, increasing the match range paying the price of unaligned matches. 3. optimal parser on compression side comes up with the best possible representation of the input. 4. chain-flattening can significantly reduce average number of match to match hops while sacrificing just 1-2% of the compression ratio. When decompressing small slices (4-32 bytes), blaris significantly outperforms both heatshrink and tamp (500x for 1B reads). For bigger slices, since its decompression time depends linearly on the data, blaris performs worse, but it isn't really made for that. And the best part, it is extremely lightweight in terms of memory. When compiled for RV32IMC architecture, it takes only 548-784 bytes of Flash memory, while using just 104-112B of SRAM regardless of the file size. For comparison, heatshrink is 1300-1464 bytes of Flash and uses 206-16594 bytes of SRAM depending on the window size, and tamp is 2238-3238 bytes of Flash while also using 520-16672 bytes of SRAM. [1] https://github.com/atomicobject/heatshrink [2] https://github.com/BrianPugh/tamp Comments URL: https://news.ycombinator.com/item?id=50499357 Points: 1 # Comments: 0

---

### 3. The VHDL standard's float package gets sqrt(2) wrong

**Link:** [https://github.com/lmtlssss/speedrunpapi/tree/main/hardware/audit/ieee-float-pkg](https://github.com/lmtlssss/speedrunpapi/tree/main/hardware/audit/ieee-float-pkg)

**Published:** 11/14/2026

**Summary:** Article URL: https://github.com/lmtlssss/speedrunpapi/tree/main/hardware/audit/ieee-float-pkg Comments URL: https://news.ycombinator.com/item?id=50499188 Points: 4 # Comments: 0

---

### 4. Why Brains Don't Compute: Summing Up (2021)

**Link:** [https://link.springer.com/chapter/10.1007/978-3-030-71064-4_25](https://link.springer.com/chapter/10.1007/978-3-030-71064-4_25)

**Published:** 11/14/2026

**Summary:** Article URL: https://link.springer.com/chapter/10.1007/978-3-030-71064-4_25 Comments URL: https://news.ycombinator.com/item?id=50499168 Points: 2 # Comments: 0

---

## Schneier on Security

### 1. Friday Squid Blogging: Pacific Flying Squid Populations Dropping in Korean Waters

**Link:** [https://www.schneier.com/blog/archives/2026/11/friday-squid-blogging-pacific-flying-squid-populations-dropping-in-korean-waters.html](https://www.schneier.com/blog/archives/2026/11/friday-squid-blogging-pacific-flying-squid-populations-dropping-in-korean-waters.html)

**Published:** 11/13/2026

**Summary:** Climate change is the issue. As usual, you can also use this squid post to talk about the security stories in the news that I haven’t covered. Blog moderation policy.

---

### 2. AI Doesn’t Have to Go Rogue to Break the World

**Link:** [https://www.schneier.com/blog/archives/2026/11/ai-doesnt-have-to-go-rogue-to-break-the-world.html](https://www.schneier.com/blog/archives/2026/11/ai-doesnt-have-to-go-rogue-to-break-the-world.html)

**Published:** 11/13/2026

**Summary:** This essay is adapted from a keynote speech delivered at the DEF CON 34 conference in Las Vegas on August 7, 2026. The essay originally appeared in CyberScoop. I want to talk about AI hacking. There are three aspects: people hacking AI systems, people using AI to hack other systems, and AIs hacking systems on their own, not even maliciously. The last two matter more than the first. The third is the weirdest and potentially the most destabilizing. I started writing about this in 2021 and in my 2022 book, A Hacker’s Mind. Back then I said it was mostly still science fiction, but not stupid science fiction. We’re seeing it more and more, especially in the past year. The trends I’m describing don’t require a major breakthrough in AI. They’re starting to happen now, and they’ll happen more often as AIs get better at autonomous problem-solving. And it will involve far more than computer code...

---

## StepSecurity Blog

### 1. The Take-Home Test That Runs on Your Work Laptop: Inside the AccuraSoftHire Fake Interview Campaign

**Link:** [https://www.stepsecurity.io/blog/accurasofthire-fake-interview-developer-machines](https://www.stepsecurity.io/blog/accurasofthire-fake-interview-developer-machines)

**Published:** 11/13/2026

**Summary:** Binance says its $6.34 billion theft began when an engineer ran a fake interview assignment on his work computer. JFrog has now exposed a fake company, AccuraSoftHire, built to run the same trick. We decoded the attacker's server history from a public Ethereum wallet and found npm packages from the interview task that stayed installable for up to seven months. Here is what to check on your developer machines.

---

### 2. ARTEX: Attackers Adopted This AI Pentesting Tool in Three Months. Leaked Secrets Are Its Fastest Way In.

**Link:** [https://www.stepsecurity.io/blog/artex-ai-pentesting-tool-attackers-leaked-secrets](https://www.stepsecurity.io/blog/artex-ai-pentesting-tool-attackers-leaked-secrets)

**Published:** 11/13/2026

**Summary:** ARTEX is an open-source tool where AI agents run a penetration test on their own. Since August 2026, state-aligned groups, criminal crews and one runaway research agent have pointed ARTEX at hundreds of organizations. In one case, an agent went from a GitHub search for leaked secrets to stolen cloud data in five minutes. This post covers what ARTEX is, who uses ARTEX, how to spot ARTEX activity, and how you remove its easiest way in.

---

## Endor Labs Blog

### 1. Hijacked GitHub Accounts Push “wfx” CI Secret Stealer to Thousands of Repositories | Endor Labs

**Link:** [https://www.endorlabs.com/learn/github-actions-supply-chain-attack-targeting-ci-secrets-at-scale](https://www.endorlabs.com/learn/github-actions-supply-chain-attack-targeting-ci-secrets-at-scale)

**Published:** 11/13/2026

**Summary:** Stolen GitHub credentials let attackers push a CI secret stealer into thousands of repositories. Learn how the attack works, what it steals, and what to rotate.

---

### 2. How to Benchmark AI Code Security Review Tools | Endor Labs

**Link:** [https://www.endorlabs.com/learn/benchmark-ai-code-security-review-tools](https://www.endorlabs.com/learn/benchmark-ai-code-security-review-tools)

**Published:** 11/13/2026

**Summary:** Benchmark AI code security review tools before you buy. Seed 8 flaw categories with decoys, run PRs on your own stack, and score evidence, triage, and fixes.

---

## GitGuardian Blog

### 1. A Valid Signature Isn’t Enough: Attributing and Validating Leaked JWTs

**Link:** [https://blog.gitguardian.com/a-valid-signature-isnt-enough-attributing-and-validating-leaked-jwts/](https://blog.gitguardian.com/a-valid-signature-isnt-enough-attributing-and-validating-leaked-jwts/)

**Published:** 11/13/2026

**Summary:** During a six-month internship with the GitGuardian security research team, Florent Leroy built the attribution rules and live checkers described in this post. Since Aug. 5, they run in production.

---

### 2. wfx-loot: A CI Secret Stealer Pushed With Stolen GitHub Credentials

**Link:** [https://blog.gitguardian.com/wfx-loot-a-ci-secret-stealer-pushed-with-stolen-github-credentials/](https://blog.gitguardian.com/wfx-loot-a-ci-secret-stealer-pushed-with-stolen-github-credentials/)

**Published:** 11/13/2026

**Summary:** A threat actor used stolen GitHub credentials to push a CI secret stealer into more than 17,000 public repositories. GitHub held the malicious workflows. An npm hook got past the hold and ran. Here is how the bypass worked and what to rotate if you were hit.

---

## The Hacker News

### 1. New Mior and Skyfall Attacks Let Rogue Cloud Hosts Steal Secrets From AMD SEV-SNP VMs

**Link:** [https://thehackernews.com/2026/11/new-mior-and-skyfall-attacks-let-rogue.html](https://thehackernews.com/2026/11/new-mior-and-skyfall-attacks-let-rogue.html)

**Published:** 11/13/2026

**Summary:** Two attacks made public this week allow a malicious host to read data inside AMD SEV-SNP-protected virtual machines (VMs), which are built to keep the server's operator out.  One of them, Mior, can also modify a VM's memory and fake the signed report confirming which software it runs. Both need control of the server's hypervisor, and Mior also needs control of the server's BIOS. Researchers

---

### 2. Operation Endgame Takes Down Gootloader, CastleRAT and StealC Servers, Seizes 6.4M Stolen Logins

**Link:** [https://thehackernews.com/2026/11/operation-endgame-takes-down-gootloader.html](https://thehackernews.com/2026/11/operation-endgame-takes-down-gootloader.html)

**Published:** 11/13/2026

**Summary:** An international police operation took down servers behind Gootloader, CastleRAT and StealC this week. Criminals used the three malware tools to gain access to computers, steal passwords, and launch ransomware attacks.  Police also seized about 6.4 million stolen logins belonging to more than 40,000 victims, according to Germany's Federal Criminal Police Office (BKA).  Gootloader is a loader:

---

### 3. Hackers Exploit PHP2Shell Flaws in Check Point Gateways to Deploy TSGA Backdoor and Wipe ESXi Files

**Link:** [https://thehackernews.com/2026/11/hackers-exploit-php2shell-flaws-in.html](https://thehackernews.com/2026/11/hackers-exploit-php2shell-flaws-in.html)

**Published:** 11/13/2026

**Summary:** An unknown threat actor has been observed targeting unpatched Check Point Security Gateways to obtain initial access via the PHP2Shell vulnerabilities and then a previously unreported local privilege escalation flaw in Gaia OS  to deploy a backdoor called TSGA.  The activity, detailed by Check Point, began on October 30, 2026, and targeted Israeli organizations, with a broader follow-up

---

## Bleeping Computer Security

### 1. How one AI agent exposed five critical enterprise security gaps

**Link:** [https://www.bleepingcomputer.com/news/security/how-one-ai-agent-exposed-five-critical-enterprise-security-gaps/](https://www.bleepingcomputer.com/news/security/how-one-ai-agent-exposed-five-critical-enterprise-security-gaps/)

**Published:** 11/13/2026

**Summary:** An AI agent built to automate invoice processing could be manipulated into changing vendor bank details through a malicious email, without triggering traditional security alerts. Token Security examines five critical AI agent security gaps and shares practical guidance from industry security leaders on preventing them. [...]

---

### 2. Police arrest 354 suspects in dark web cybercrime crackdown

**Link:** [https://www.bleepingcomputer.com/news/security/police-arrest-354-vendors-buyers-in-global-cybercrime-crackdown/](https://www.bleepingcomputer.com/news/security/police-arrest-354-vendors-buyers-in-global-cybercrime-crackdown/)

**Published:** 11/13/2026

**Summary:** Authorities arrested 354 suspects in a joint international operation targeting vendors and buyers on the Archetyp, Nemesis, Tor2Door, Bohemia, and Kingdom dark web marketplaces. [...]

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

**Last Updated:** 2026-11-14T18:31:34.182Z
