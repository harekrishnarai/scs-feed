# Supply Chain Security Daily Report
**Date:** 2026-08-20
**Total Reports Found:** 18

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Emoji Based Janet Packages and Codebases

**Link:** [https://hachyderm.io/@janet_catcus/117128090262354367](https://hachyderm.io/@janet_catcus/117128090262354367)

**Published:** 8/20/2026

**Summary:** Article URL: https://hachyderm.io/@janet_catcus/117128090262354367 Comments URL: https://news.ycombinator.com/item?id=49378434 Points: 1 # Comments: 0

---

### 2. TrueForge – The open-source agent harness

**Link:** [https://github.com/truefoundry/trueforge](https://github.com/truefoundry/trueforge)

**Published:** 8/20/2026

**Summary:** Article URL: https://github.com/truefoundry/trueforge Comments URL: https://news.ycombinator.com/item?id=49378419 Points: 1 # Comments: 0

---

### 3. Show HN: Kandelo – a POSIX-compatible multi-process WASM kernel for the browser

**Link:** [https://kandelo.dev/20260819-demo/](https://kandelo.dev/20260819-demo/)

**Published:** 8/20/2026

**Summary:** Kandelo is an open-source, Wasm-based multi-process kernel that runs POSIX programs in browsers and Node.js. Kandelo is still experimental, but it already runs a substantial range of existing software. Demos: Some notes: The demos have been tested in desktop browsers. Unfortunately, YMMV on mobile today. Some of the disk images are large (~50MB) and may take a while to boot initially. Main set, with Shell (bash, vim, nethack, and more), Nginx, PHP, WordPress, and Doom: Note: There's a Node.js demo, but it is currently broken. https://kandelo.dev/20260819-demo/ LÖVE game engine: https://kandelo.dev/20260819-demo-love/ SNKRX running under LÖVE: https://kandelo.dev/20260819-demo-love/?vfs=love-snkrx-abi44... Commander Keen running in DOSBox: https://kandelo.dev/20260819-demo-dos/?demo=keen LXDE desktop PoC: https://kandelo.dev/20260819-demo-lxde/?demo=desktop-lxde Main ask: Do you have use cases for this? We are trying Kandelo as a new foundation for WordPress Playground which runs server-side WordPress entirely in the browser. Kandelo also looks promising as a sandbox for running agents in the the browser and on the command line. On the side, we've been playing with porting games and desktop environments and even compiling runnable programs within Kandelo. Yet it feels like there are many possibilities we haven't considered. Is there a way you would like to use something like this? Background I wanted an authentic OS-level foundation for running systems software in the browser and started this as a vibe-coded exploration. I figured it would end up being too slow and that we would have to offer many different ways to compromise default POSIX behavior to get anything usable. But after weeks of fighting agents, insisting on genuine POSIX compatibility as the default, I was surprised at how well the system worked without those compromises. Nginx, PHP, Python, Ruby, Redis, and even MariaDB were able to be built using the SDK with minimal hacks. Then we started porting games, having fun, and playing to see how far we could push it. Notes on architecture: There is a central, single-worker kernel, aiming to provide all supportable POSIX syscalls. Each process is a dedicated worker with independent memory. Each process thread is a dedicated worker that shares memory with threads from the same process. Syscalls are done with the process SharedArrayBuffer and the Atomics API. fork() is supported. The system is centered around virtual file system (VFS) images, and the VFS can contain lazy references to programs that may or may not be used. Vim is such a reference in the shell demo. On GitHub: https://github.com/Automattic/kandelo Comments URL: https://news.ycombinator.com/item?id=49378305 Points: 1 # Comments: 0

---

### 4. Show HN: Language Audio Trainer – Learn languages without looking at the screen

**Link:** [https://playling.netlify.app/](https://playling.netlify.app/)

**Published:** 8/20/2026

**Summary:** I recently built a language learning app with a slightly different approach. I deliberately didn't want it to be another Duolingo-like app. I think users should be able to choose what they want to learn and when. The main idea behind Language Audio Trainer is that you can simply press Play and listen to useful phrases in the background with the screen off — while walking, driving, cooking, etc. You can skip or repeat phrases, change the speech speed and number of repetitions, and choose the translation direction. There is also a flashcard mode for when you want to study more actively. I'd be interested to hear what you think about this approach to language learning. iOS: https://apps.apple.com/app/playling-language-trainer/id67619... Android: https://play.google.com/store/apps/details?id=com.playling.a... Comments URL: https://news.ycombinator.com/item?id=49378214 Points: 1 # Comments: 0

---

## JFrog Security Blog

### 1. Don’t Break the Agent: Lessons in Token Optimization

**Link:** [https://jfrog.com/blog/dont-break-the-agent-lessons-in-token-optimization/](https://jfrog.com/blog/dont-break-the-agent-lessons-in-token-optimization/)

**Published:** 8/20/2026

**Summary:** This one is for the curious souls who wonder how somebody actually builds a harness optimizer — and, more to the point, how they know it works. When we launched JFrog Boost into public preview, we told the story of the bill that broke us and the 100 billion tokens we clawed back across JFrog …

---

## StepSecurity Blog

### 1. Rust Supply-Chain Attack: arrayref, internment, and append-only-vec Poisoned by the proc-macro1 Build-Time Dropper

**Link:** [https://www.stepsecurity.io/blog/arrayref-rust-crate-supply-chain-attack](https://www.stepsecurity.io/blog/arrayref-rust-crate-supply-chain-attack)

**Published:** 8/20/2026

**Summary:** Three Rust crates are compromised: arrayref 0.3.10, internment 0.8.7, and append-only-vec 0.1.9 each added a typosquatted build-time dependency (proc-macro1, proc-macro-en) whose build script downloads and runs a remote binary during cargo build. Full technical analysis: timeline, dropper dissection, runtime detection, IOCs, and remediation.

---

## GitGuardian Blog

### 1. Machine-Speed Credential Abuse: What the ChainDrop npm Worm Changes

**Link:** [https://blog.gitguardian.com/chaindrop-npm-worm-credential-abuse/](https://blog.gitguardian.com/chaindrop-npm-worm-credential-abuse/)

**Published:** 8/20/2026

**Summary:** ChainDrop hijacked 444 npm packages and 2B monthly downloads via a Claude Code hook. AI agents have collapsed the gap between credential theft and abuse

---

## The Hacker News

### 1. Isolated-vm Flaw Lets Sandboxed JavaScript Escape to Host for Potential RCE

**Link:** [https://thehackernews.com/2026/08/isolated-vm-flaw-lets-sandboxed.html](https://thehackernews.com/2026/08/isolated-vm-flaw-lets-sandboxed.html)

**Published:** 8/20/2026

**Summary:** Cybersecurity researchers have disclosed a critical security flaw in isolated-vm, a popular open-source sandbox with more than 2,900 stars and 190 forks on GitHub, that could allow attackers to escape the confines of the isolated environment.  The vulnerability ("GHSA-864f-rcv7-6rh4"), which has yet to be assigned a CVE identifier, impacts all versions of the library before and including 7.0.0.

---

### 2. CDN Tsunami Attack Abuses HTTP/3 Translation for Up to 350x DoS Amplification

**Link:** [https://thehackernews.com/2026/08/cdn-tsunami-attack-abuses-http3.html](https://thehackernews.com/2026/08/cdn-tsunami-attack-abuses-http3.html)

**Published:** 8/20/2026

**Summary:** Cybersecurity researchers have disclosed two denial-of-service (DoS) attacks that exploit how major content delivery networks (CDNs) convert client-facing HTTP/3 traffic into HTTP/1.1 requests to the websites they front, amplifying a low-bandwidth request stream by up to 350x against the origin server.  The attacks, collectively named "CDN Tsunami," were evaluated against Alibaba, Baidu,

---

### 3. Manic Android Malware Exfiltrates Data From Offline Phones via Nearby Infected Devices

**Link:** [https://thehackernews.com/2026/08/manic-android-malware-exfiltrates-data.html](https://thehackernews.com/2026/08/manic-android-malware-exfiltrates-data.html)

**Published:** 8/20/2026

**Summary:** A new Android threat codenamed Manic has been observed actively targeting Ukrainian banks, government and identity services, and messaging applications, as well as Russian and European financial institutions, global fintech and cryptocurrency services, and military-focused communications.  "Manic sits at the intersection of Android banking malware and mobile spyware, combining financial-fraud

---

### 4. ToxicPanda 2.0 and GoldDigger Expand Android Banking Attacks with On-Device Fraud

**Link:** [https://thehackernews.com/2026/08/toxicpanda-20-and-golddigger-expand.html](https://thehackernews.com/2026/08/toxicpanda-20-and-golddigger-expand.html)

**Published:** 8/20/2026

**Summary:** Cybersecurity researchers have shed light on an updated version of ToxicPanda (aka TgToxic) that comes with "significant enhancements," including a set of 167 remote commands and expands its targeting footprint globally.  Zimperium zLabs, in a Wednesday report, said the Android malware also features a PIN harvesting workflow targeting more than 140 banking and cryptocurrency applications.

---

### 5. 40 Malicious Firefox Extensions Pose as Web3 Products to Steal Wallet Secrets

**Link:** [https://thehackernews.com/2026/08/40-malicious-firefox-extensions-pose-as.html](https://thehackernews.com/2026/08/40-malicious-firefox-extensions-pose-as.html)

**Published:** 8/20/2026

**Summary:** A set of 40 Mozilla Firefox extensions has been found to engage in cryptocurrency wallet theft by masquerading as OKX, Rabby Wallet, TronLink, and other Web3 products.  According to the Socket Threat Research team, the extensions are part of a broader set of 77 browser add-ons that share source code and infrastructure overlaps. The campaign, dubbed Offside Wallet Theft Factory, is believed to

---

## Endor Labs Blog

### 1. How JavaScript Sandboxes Work | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/heaps-of-built-ins-how-javascript-sandboxes-work](https://www.endorlabs.com/learn/heaps-of-built-ins-how-javascript-sandboxes-work)

**Published:** 8/20/2026

**Summary:** How V8 Isolates improve JavaScript sandboxing—and where the real risks remain

---

### 2. We discovered a critical vulnerability in isolated-vm a sandbox that is widely used in popular AI-related projects | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/ghsa-864f-rcv7-6rh4-critical-type-confusion-vulnerability-in-isolated-vm](https://www.endorlabs.com/learn/ghsa-864f-rcv7-6rh4-critical-type-confusion-vulnerability-in-isolated-vm)

**Published:** 8/20/2026

**Summary:** ws, Open Source Meta Description: We discovered a critical vulnerability in isolated-vm (1M+ weekly downloads), a sandbox that is widely used in popular AI-related projects like n8n, Activepieces, or Mastra AI. We demonstrated how attackers can weaponize this vulnerability to achieve control-flow hijacking and sandbox escape.

---

### 3. When you can't upgrade: open source examples of Endor Patches | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/when-you-cant-upgrade-open-source-examples-of-endor-patches](https://www.endorlabs.com/learn/when-you-cant-upgrade-open-source-examples-of-endor-patches)

**Published:** 8/19/2026

**Summary:** When you can't upgrade: open source examples of Endor Patches

---

### 4. What is a security harness for AI coding agents? | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/what-is-a-security-harness-for-ai-coding-agents](https://www.endorlabs.com/learn/what-is-a-security-harness-for-ai-coding-agents)

**Published:** 8/19/2026

**Summary:** Learn how a security harness keeps AI coding agents safe by governing access, code, and dependencies without slowing developers down

---

## Sonatype Security Research

### 1. An Air Gap Doesn't Remove the Supply Chain. It Makes Every Crossing a Decision.

**Link:** [https://www.sonatype.com/blog/an-air-gap-doesnt-remove-the-supply-chain.-it-makes-every-crossing-a-decision](https://www.sonatype.com/blog/an-air-gap-doesnt-remove-the-supply-chain.-it-makes-every-crossing-a-decision)

**Published:** 8/20/2026

**Summary:** For years, air-gapped environments have been the gold standard for protecting classified systems and critical infrastructure. Isolate the network, remove the path, reduce the risk. The logic held, and it still does. An air gap does exactly what it was designed to do.

---

## Schneier on Security

### 1. ICE Collecting DNA Samples

**Link:** [https://www.schneier.com/blog/archives/2026/08/ice-collecting-dna-samples.html](https://www.schneier.com/blog/archives/2026/08/ice-collecting-dna-samples.html)

**Published:** 8/19/2026

**Summary:** ICE collected nearly a million DNA samples last year.

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

**Last Updated:** 2026-08-20T18:43:41.147Z
