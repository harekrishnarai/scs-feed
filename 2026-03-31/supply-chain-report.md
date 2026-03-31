# Supply Chain Security Daily Report
**Date:** 2026-03-31
**Total Reports Found:** 27

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Claude Wrote a Full FreeBSD Remote Kernel RCE with Root Shell (CVE-2026-4747)

**Link:** [https://blog.calif.io/p/mad-bugs-claude-wrote-a-full-freebsd](https://blog.calif.io/p/mad-bugs-claude-wrote-a-full-freebsd)

**Published:** 3/31/2026

**Summary:** Article URL: https://blog.calif.io/p/mad-bugs-claude-wrote-a-full-freebsd Comments URL: https://news.ycombinator.com/item?id=47591546 Points: 1 # Comments: 0

---

### 2. Add the missing source to Claude Code

**Link:** [https://github.com/anthropics/claude-code/pull/41611/](https://github.com/anthropics/claude-code/pull/41611/)

**Published:** 3/31/2026

**Summary:** Article URL: https://github.com/anthropics/claude-code/pull/41611/ Comments URL: https://news.ycombinator.com/item?id=47591521 Points: 1 # Comments: 0

---

### 3. Show HN: Dograh – voice agents that pick Recordings over TTS using LLM

**Link:** [https://github.com/dograh-hq/dograh](https://github.com/dograh-hq/dograh)

**Published:** 3/31/2026

**Summary:** TL;DR: Dograh is an open-source platform to build voice AI agents with drag-and-drop workflows. New in v1.20: Gemini 3.1 live support, Pre-recorded audio support for lower latency and more natural responses. Fully self-hostable, no vendor lock-in. Hi HN, We’re the Dograh team (YC alumni). While building voice bots, we found that wiring WebRTC/ Telephony + STT + LLM + TTS took more time than the bots themselves. Teams are spending weeks on plumbing - handling call flows, extracting variables, dealing with telephony edge cases, and redeploying for small changes. Tools like Vapi/Retell are easy to start with but come with lock-in and platform fees. So we built Dograh: a 100% open-source platform that handles the full stack, with a visual workflow builder and self-hosting by default. Dograh v1.20 introduces two major additions: 1. Gemini 3.1 Live support  Run fully real-time voice agents using Gemini’s streaming APIs, without stitching together separate STT + LLM + TTS components. 2. Pre-recorded audio (hybrid voice)  Upload real voice clips (greetings, confirmations, etc.), and the agent plays them instantly while using TTS only for dynamic responses. This reduces latency, improves naturalness, and cuts TTS costs. It also includes: - Plug-and-play LLM / STT / TTS (including self-hosted models) - Telephony integrations (Twilio, Vonage, Telnyx) along with Call Transfer - Post-call QA, transcripts, and variable extraction - Observability via Langfuse (OpenTelemetry traces + prompt playground) Try it now: If you have Docker, you can run the below command for a 2-minute setup (no API keys needed out of the box). https://gist.github.com/a6kme/072252bf885270787bbb8376687c67... [ sorry, HN wont let me post the entire command ] Looking Ahead: We’re expanding self-hosted model support: you can already bring any LLM (e.g. Llama, Qwen) or TTS (Kokoro, Voxtral) by configuring API endpoints. We are working on updates that will enable anyone to run  everything on a single server - your AI models along with Dograh Orchestration. Looking forward to hearing thoughts of the community. Comments URL: https://news.ycombinator.com/item?id=47591510 Points: 1 # Comments: 0

---

### 4. Show HN: Domscribe – Deterministic DOM-to-source mapping for AI coding agents

**Link:** [https://github.com/patchorbit/domscribe](https://github.com/patchorbit/domscribe)

**Published:** 3/31/2026

**Summary:** Hey HN! I built Domscribe to solve a problem that was eating my productivity. I spend a lot of my time working with AI coding agents. The thing that kept eating at my productivity though was that every time I asked an agent to fix something on the frontend, the actual edit took maybe 200 tokens. But before that happened, the agent would go on this whole journey, grepping through the codebase and at times having to backtrack. That search loop could burn 5,000-10,000 tokens before a single line of code changed. The agent has zero awareness of what's actually rendering in the browser because the rendered DOM and the source tree are two completely different topologies. So I started thinking about this differently; what if we could optimize a solution to the search problem by giving the agents the right context? What if every DOM element already knew exactly where it came from in source? That's the core idea behind Domscribe. At build time, an AST transform walks your JSX and Vue templates, assigns every element a deterministic ID via xxhash64 content hashing, and writes a manifest mapping each ID to its exact file, line, and column. The IDs are stable across HMR; same file content and element position always produces the same ID. At runtime, framework adapters walk the React fiber tree or inspect Vue VNodes to capture live props, state, and component metadata. A local relay daemon connects the browser and your agent via MCP. The result is two workflows that didn't exist before. Your agent can query any source location and get back only what's actually rendering there; live DOM snapshot, props, state, the works. And from the other direction, you can click any element in the browser overlay, type "make this button use the primary color" in plain English, and Domscribe resolves the exact file:line:col so your agent edits the right file on the first try. (I should mention that the overlay runs as Lit web components inside shadow DOM, specifically so it can't mess with your app's styles.) One thing I'm genuinely proud of is the architecture. I spent a LOT of time making sure this wasn't just a tool that works for React-and-Vite-and-nothing-else. The transform layer has a ParserInterface that the injector consumes without knowing which parser produced the AST (the Acorn, Babel, and Vue SFC parsers are all implementations of the same interface), and the ID injection logic is completely abstracted away. Adding a new template syntax (Lit, Svelte, Stencil) means implementing one interface. On the runtime side, a FrameworkAdapter interface defines methods such as captureProps, captureState, and getComponentInstance; and the React and Vue adapters are built on the same public interface that any community contributor would use. No internal escape hatches. I took the same approach with bundler support (Vite, Webpack, Turbopack) and agent support (Claude Code, Cursor, GitHub Copilot CLI, Gemini CLI - all via first-party plugins that bundle the MCP config and a skill file). But the MCP layer means any compatible agent works out of the box. PII redaction is built in and on by default. All captured data passes through pattern matching for emails, phone numbers, API keys, JWTs etc. before it leaves the browser. Everything is stripped in production builds; zero data-ds attributes and zero overlay scripts. It's enforced by CI tests that run against every real fixture. (Speaking of tests: the entire integration and e2e suite runs against real published packages via a local Verdaccio registry. ) Anyway, MIT licensed, fully open source, the whole codebase is right there on GitHub. I'd genuinely love feedback on the architecture and the approach. And I'm especially curious if anyone has thoughts on extending the ParserInterface to other template syntaxes; that's the piece I'm most excited about people contributing to. Comments URL: https://news.ycombinator.com/item?id=47591487 Points: 1 # Comments: 0

---

### 5. Open-source security tests for AI agents (MCP, A2A, x402, AIUC-1)

**Link:** [https://github.com/msaleme/red-team-blue-team-agent-fabric](https://github.com/msaleme/red-team-blue-team-agent-fabric)

**Published:** 3/31/2026

**Summary:** Article URL: https://github.com/msaleme/red-team-blue-team-agent-fabric Comments URL: https://news.ycombinator.com/item?id=47591410 Points: 1 # Comments: 0

---

## StepSecurity Blog

### 1. axios Compromised on npm - Malicious Versions Drop Remote Access Trojan

**Link:** [https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)

**Published:** 3/31/2026

**Summary:** Hijacked maintainer account used to publish poisoned axios releases including 1.14.1 and 0.30.4. The attacker injected a hidden dependency that drops a cross platform RAT. We are actively investigating and will update this post with a full technical analysis.

---

### 2. 10 Layers Deep: How StepSecurity Stops TeamPCP's Trivy Supply Chain Attack on GitHub Actions

**Link:** [https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions](https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions)

**Published:** 3/31/2026

**Summary:** TeamPCP weaponized 76 Trivy version tags overnight. The KICS attack followed the same playbook days later. One security control is not enough. Here is how the StepSecurity platform's ten independent security layers work together to prevent credential exfiltration, detect compromised actions at runtime, and respond to incidents across your entire organization before attackers can succeed.

---

### 3. Malicious IoliteLabs VSCode Extensions Target Solidity Developers on Windows, macOS, and Linux with Backdoor

**Link:** [https://www.stepsecurity.io/blog/malicious-iolitelabs-vscode-extensions-target-solidity-developers-on-windows-macos-and-linux-with-backdoor](https://www.stepsecurity.io/blog/malicious-iolitelabs-vscode-extensions-target-solidity-developers-on-windows-macos-and-linux-with-backdoor)

**Published:** 3/30/2026

**Summary:** A supply chain attack targeting Solidity and Web3 developers has been discovered across three IoliteLabs VSCode extensions (solidity-macos, solidity-windows, and solidity-linux) embedding obfuscated backdoors that download remote payloads and establish persistence on all major platforms. StepSecurity is actively investigating this incident and will publish a full technical analysis with IOCs and remediation guidance shortly.

---

### 4. TeamPCP Plants WAV Steganography Credential Stealer in telnyx PyPI Package

**Link:** [https://www.stepsecurity.io/blog/teampcp-plants-wav-steganography-credential-stealer-in-telnyx-pypi-package](https://www.stepsecurity.io/blog/teampcp-plants-wav-steganography-credential-stealer-in-telnyx-pypi-package)

**Published:** 3/30/2026

**Summary:** On March 27, 2026, TeamPCP injected a WAV steganography-based credential stealer into two releases of the telnyx Python SDK on PyPI. The issue was disclosed in team-telnyx/telnyx-python#235. TeamPCP is the same group behind the litellm supply chain compromise three days earlier, identified by a shared RSA-4096 public key, identical encryption scheme, and the tpcp.tar.gz exfiltration signature present in both attacks.

---

## Bleeping Computer Security

### 1. Cisco source code stolen in Trivy-linked dev environment breach

**Link:** [https://www.bleepingcomputer.com/news/security/cisco-source-code-stolen-in-trivy-linked-dev-environment-breach/](https://www.bleepingcomputer.com/news/security/cisco-source-code-stolen-in-trivy-linked-dev-environment-breach/)

**Published:** 3/31/2026

**Summary:** Cisco has suffered a cyberattack after threat actors used stolen credentials from the recent Trivy supply chain attack to breach its internal development environment and steal source code belonging to the company and its customers. [...]

---

### 2. Hackers compromise Axios npm package to drop cross-platform malware

**Link:** [https://www.bleepingcomputer.com/news/security/hackers-compromise-axios-npm-package-to-drop-cross-platform-malware/](https://www.bleepingcomputer.com/news/security/hackers-compromise-axios-npm-package-to-drop-cross-platform-malware/)

**Published:** 3/31/2026

**Summary:** Hackers hijacked the npm account of the Axios package, a JavaScript HTTP client with 100M+ weekly downloads, to deliver remote access trojans to Linux, Windows, and macOS systems. [...]

---

## Endor Labs Blog

### 1. Axios compromised: hijacked maintainer account pushes malicious npm versions | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/npm-axios-compromise](https://www.endorlabs.com/learn/npm-axios-compromise)

**Published:** 3/31/2026

**Summary:** Two malicious versions of the widely-used npm package axios were published

---

### 2. How to Defend Against NPM Software Supply Chain Attacks | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/how-to-defend-against-npm-software-supply-chain-attacks](https://www.endorlabs.com/learn/how-to-defend-against-npm-software-supply-chain-attacks)

**Published:** 3/31/2026

**Summary:** Practical steps security teams and developers can take to reduce risks from software supply chain attacks targeting the npm registry.

---

### 3. Malware Package Firewall: Block Threats Before They Hit Your Code | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/best-malware-package-firewall](https://www.endorlabs.com/learn/best-malware-package-firewall)

**Published:** 3/31/2026

**Summary:** Malware package firewalls block malicious open source code before installation. Compare 5 leading tools by detection accuracy, coverage, and developer fit.

---

### 4. TeamPCP Strikes Again: Telnyx Compromised Three Days After LiteLLM | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/teampcp-strikes-again-telnyx-compromised-three-days-after-litellm](https://www.endorlabs.com/learn/teampcp-strikes-again-telnyx-compromised-three-days-after-litellm)

**Published:** 3/31/2026

**Summary:** TeamPCP Strikes Again: Telnyx Compromised Three Days After LiteLLM

---

### 5. CanisterWorm: Malicious npm Packages Deploy Self-Propagating Supply Chain Worm | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/canisterworm](https://www.endorlabs.com/learn/canisterworm)

**Published:** 3/30/2026

**Summary:** A recently discovered campaign of malicious npm packages uses installation scripts to steal developer credentials and deploy a self-propagating worm that infects the victim's own software portfolio.

---

## GitGuardian Blog

### 1. Between AI Urgency and AI Fatigue at RSAC 2026

**Link:** [https://blog.gitguardian.com/rsac-2026/](https://blog.gitguardian.com/rsac-2026/)

**Published:** 3/31/2026

**Summary:** AI was everywhere at RSAC 2026, but the real focus was operational security: managing agents, protecting secrets, and controlling trusted integrations at scale.

---

## The Hacker News

### 1. Vertex AI Vulnerability Exposes Google Cloud Data and Private Artifacts

**Link:** [https://thehackernews.com/2026/03/vertex-ai-vulnerability-exposes-google.html](https://thehackernews.com/2026/03/vertex-ai-vulnerability-exposes-google.html)

**Published:** 3/31/2026

**Summary:** Cybersecurity researchers have disclosed a security "blind spot" in Google Cloud's Vertex AI platform that could allow artificial intelligence (AI) agents to be weaponized by an attacker to gain unauthorized access to sensitive data and compromise an organization's cloud environment. According to Palo Alto Networks Unit 42, the issue relates to how the Vertex AI permission model can be misused

---

### 2. Silver Fox Expands Asia Cyber Campaign with AtlasCross RAT and Fake Domains

**Link:** [https://thehackernews.com/2026/03/silver-fox-expands-asia-cyber-campaign.html](https://thehackernews.com/2026/03/silver-fox-expands-asia-cyber-campaign.html)

**Published:** 3/31/2026

**Summary:** Chinese-speaking users are the target of an active campaign that uses typosquatted domains impersonating trusted software brands to deliver a previously undocumented remote access trojan named AtlasCross RAT. "The operation covers VPN clients, encrypted messengers, video conferencing tools, cryptocurrency trackers, and e-commerce applications, with eleven confirmed delivery domains impersonating

---

### 3. Axios Supply Chain Attack Pushes Cross-Platform RAT via Compromised npm Account

**Link:** [https://thehackernews.com/2026/03/axios-supply-chain-attack-pushes-cross.html](https://thehackernews.com/2026/03/axios-supply-chain-attack-pushes-cross.html)

**Published:** 3/31/2026

**Summary:** The popular HTTP client known as Axios has suffered a supply chain attack after two newly published versions of the npm package introduced a malicious dependency that delivers a trojan capable of targeting Windows, macOS, and Linux systems. Versions 1.14.1 and 0.30.4 of Axios have been found to inject "plain-crypto-js" version 4.2.1 as a fake dependency. According to StepSecurity, the two

---

### 4. OpenAI Patches ChatGPT Data Exfiltration Flaw and Codex GitHub Token Vulnerability

**Link:** [https://thehackernews.com/2026/03/openai-patches-chatgpt-data.html](https://thehackernews.com/2026/03/openai-patches-chatgpt-data.html)

**Published:** 3/30/2026

**Summary:** A previously unknown vulnerability in OpenAI ChatGPT allowed sensitive conversation data to be exfiltrated without user knowledge or consent, according to new findings from Check Point. "A single malicious prompt could turn an otherwise ordinary conversation into a covert exfiltration channel, leaking user messages, uploaded files, and other sensitive content," the cybersecurity company said in

---

### 5. DeepLoad Malware Uses ClickFix and WMI Persistence to Steal Browser Credentials

**Link:** [https://thehackernews.com/2026/03/deepload-malware-uses-clickfix-and-wmi.html](https://thehackernews.com/2026/03/deepload-malware-uses-clickfix-and-wmi.html)

**Published:** 3/30/2026

**Summary:** A new campaign has leveraged the ClickFix social engineering tactic as a way to distribute a previously undocumented malware loader referred to as DeepLoad. "It likely uses AI-assisted obfuscation and process injection to evade static scanning, while credential theft starts immediately and captures passwords and sessions even if the primary loader is blocked," ReliaQuest researchers Thassanai

---

## Sonatype Security Research

### 1. Is Your Repository Ready for What's Next?

**Link:** [https://www.sonatype.com/blog/is-your-repository-ready-for-whats-next](https://www.sonatype.com/blog/is-your-repository-ready-for-whats-next)

**Published:** 3/31/2026

**Summary:** Most software teams don't start out planning to adopt an enterprise artifact repository.

---

## Schneier on Security

### 1. Inventors of Quantum Cryptography Win Turing Award

**Link:** [https://www.schneier.com/blog/archives/2026/03/inventors-of-quantum-cryptography-win-turing-award.html](https://www.schneier.com/blog/archives/2026/03/inventors-of-quantum-cryptography-win-turing-award.html)

**Published:** 3/31/2026

**Summary:** Charles Bennett and Gilles Brassard have won the 2026 Turing Award for inventing quantum cryptography. I am incredibly pleased to see them get this recognition. I have always thought the technology to be fantastic, even though I think it’s largely unnecessary. I wrote up my thoughts back in 2008, in an <a href+https://www.schneier.com/essays/archives/2008/10/quantum_cryptography.html”>essay titled “Quantum Cryptography: As Awesome As It Is Pointless.” Back then, I wrote: While I like the science of quantum cryptography—my undergraduate degree was in physics—I don’t see any commercial value in it. I don’t believe it solves any security problem that needs solving. I don’t believe that it’s worth paying for, and I can’t imagine anyone but a few technophiles buying and deploying it. Systems that use it don’t magically become unbreakable, because the quantum part doesn’t address the weak points of the system...

---

### 2. Apple’s Camera Indicator Lights

**Link:** [https://www.schneier.com/blog/archives/2026/03/apples-camera-indicator-lights.html](https://www.schneier.com/blog/archives/2026/03/apples-camera-indicator-lights.html)

**Published:** 3/30/2026

**Summary:** A thoughtful review of Apple’s system to alert users that the camera is on. It’s really well-designed, and important in a world where malware could surreptitiously start recording. The reason it’s tempting to think that a dedicated camera indicator light is more secure than an on-display indicator is the fact that hardware is generally more secure than software, because it’s harder to tamper with. With hardware, a dedicated hardware indicator light can be connected to the camera hardware such that if the camera is accessed, the light must turn on, with no way for software running on the device, no matter its privileges, to change that. With an indicator light that is rendered on the display, it’s not foolish to worry that malicious software, with sufficient privileges, could draw over the pixels on the display where the camera indicator is rendered, disguising that the camera is in use...

---

## JFrog Security Blog

### 1. Accelerating Secure Software Delivery in Southeast Asia: Why the “Surge of Binaries” Demands a Unified Strategy

**Link:** [https://jfrog.com/blog/accelerating-secure-software-delivery-southeast-asia-izeno/](https://jfrog.com/blog/accelerating-secure-software-delivery-southeast-asia-izeno/)

**Published:** 3/31/2026

**Summary:** For years, the conversation around digital transformation in Southeast Asia focused on “getting to the cloud.” Today, that conversation has shifted. Our region is no longer just adopting the cloud; we are leapfrogging traditional development cycles by integrating AI and cloud-native architectures at a staggering pace. However, this acceleration has created a byproduct that many …

---

### 2. From Shai-Hulud to LiteLLM: Supply Chain Attackers Are Coming for Your Agents

**Link:** [https://jfrog.com/blog/supply-chain-attackers-are-coming-for-your-agents/](https://jfrog.com/blog/supply-chain-attackers-are-coming-for-your-agents/)

**Published:** 3/30/2026

**Summary:** The LiteLLM supply chain compromise of March 24, 2026, is not an isolated incident. It is the latest and perhaps most dangerous chapter in an evolving attacker playbook that JFrog Security Research has been tracking for years. The target has shifted from developers to the AI agents that developers now rely on to build software. …

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

**Last Updated:** 2026-03-31T18:46:25.990Z
