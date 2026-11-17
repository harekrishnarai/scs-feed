# Supply Chain Security Daily Report
**Date:** 2026-11-17
**Total Reports Found:** 23

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Microsoft unveils AI models for coding, cybersecurity

**Link:** [https://www.reuters.com/legal/litigation/microsoft-unveils-ai-models-coding-cybersecurity-it-takes-anthropic-openai-2026-11-17/](https://www.reuters.com/legal/litigation/microsoft-unveils-ai-models-coding-cybersecurity-it-takes-anthropic-openai-2026-11-17/)

**Published:** 11/17/2026

**Summary:** Article URL: https://www.reuters.com/legal/litigation/microsoft-unveils-ai-models-coding-cybersecurity-it-takes-anthropic-openai-2026-11-17/ Comments URL: https://news.ycombinator.com/item?id=50535871 Points: 2 # Comments: 0

---

### 2. 5-ton cargo drone completes test flight in northern China

**Link:** [https://heavytechasia.com/5-ton-cargo-drone-completes-test-flight-in-northern-china/](https://heavytechasia.com/5-ton-cargo-drone-completes-test-flight-in-northern-china/)

**Published:** 11/17/2026

**Summary:** Article URL: https://heavytechasia.com/5-ton-cargo-drone-completes-test-flight-in-northern-china/ Comments URL: https://news.ycombinator.com/item?id=50535787 Points: 1 # Comments: 0

---

### 3. Microsoft and Salesforce Announce Copilotforce

**Link:** [https://news.microsoft.com/source/2026/11/17/microsoft-and-salesforce-announce-copilotforce-bringing-trusted-customer-context-and-action-into-microsoft-ai-experiences/](https://news.microsoft.com/source/2026/11/17/microsoft-and-salesforce-announce-copilotforce-bringing-trusted-customer-context-and-action-into-microsoft-ai-experiences/)

**Published:** 11/17/2026

**Summary:** Article URL: https://news.microsoft.com/source/2026/11/17/microsoft-and-salesforce-announce-copilotforce-bringing-trusted-customer-context-and-action-into-microsoft-ai-experiences/ Comments URL: https://news.ycombinator.com/item?id=50535767 Points: 2 # Comments: 0

---

### 4. Show HN: Tool to measure log TCO savings without losing or migrating any data

**Link:** [https://news.ycombinator.com/item?id=50535716](https://news.ycombinator.com/item?id=50535716)

**Published:** 11/17/2026

**Summary:** I work on Chiron. We provide a “lossless consolidation” solution for log savings on high-fidelity stores like Splunk, where you don’t lose any data, your query results stay intact, and you still meet your compliance needs. On a Palo Alto firewall log sample we published, the lossless merge came to about 40%. Method and numbers: https://medium.com/@chironvision_inc/keeping-palo-alto-logs-... We built this estimator tool so that people can get a savings number on their own logs before they reach out to us. It is a binary tool with an MCP server plus a skill. Point your Claude, Cursor or similar at a local folder where your log sample is located. The tool produces a savings estimate report. It makes sure that no data leaves your network, and no data goes to your model either. The model only gets a statistical summary and metadata. Install (or grab the tarball from the same path; checksums.txt is there, and releases are Sigstore signed): curl -fsSL https://www.chironvision.com/dl/ea324478d02311d6b42f939c08b0... | bash -s -- --target claude The tool comes with a zookeeper sample bundled so you can quickly test and validate the setup. Currently supported log formats: Splunk exports, OTLP JSON, k8s container logs, plain text. The detailed README on how to use the tool is included in the download. How the tool works: it reads the logs from the provided folder or files and runs the analyzer to compute the lossless savings. The tool interacts via the MCP server with your Claude console or similar. You can run it from your Claude or Cursor console. The engine is a binary, not open source; the license is at the download path. Run the sample, then a few minutes of your own logs Comments URL: https://news.ycombinator.com/item?id=50535716 Points: 1 # Comments: 0

---

## GitGuardian Blog

### 1. What the ARTEX FBI Alert Means for Credential Security

**Link:** [https://blog.gitguardian.com/artex-fbi-alert/](https://blog.gitguardian.com/artex-fbi-alert/)

**Published:** 11/17/2026

**Summary:** The FBI’s ARTEX alert shows AI agents reaching privileged access in under three hours, while leaked credentials stay valid for years. Here’s what that gap means for defenders and how to close it.

---

### 2. Why We Built the Good Samaritan Program

**Link:** [https://blog.gitguardian.com/why-we-built-the-good-samaritan-program/](https://blog.gitguardian.com/why-we-built-the-good-samaritan-program/)

**Published:** 11/16/2026

**Summary:** The first thing GitGuardian ever shipped was a free warning. Now we’re making sure it gets heard.

---

### 3. Why Is Credential Rotation So Hard? Follow One Leaked Production Key

**Link:** [https://blog.gitguardian.com/why-credential-rotation-is-hard/](https://blog.gitguardian.com/why-credential-rotation-is-hard/)

**Published:** 11/16/2026

**Summary:** A leaked production key had copies in code, config, a pipeline, a vault and Jira. Follow the credential rotation twice, once by hand over 3 days and once with a full inventory in hours.

---

## StepSecurity Blog

### 1. WPPConnect Compromised: Malicious Releases Steal Secrets and WhatsApp Sessions Through the Project's Own Pipeline

**Link:** [https://www.stepsecurity.io/blog/wppconnect-compromised-malicious-releases-steal-secrets-and-whatsapp-sessions](https://www.stepsecurity.io/blog/wppconnect-compromised-malicious-releases-steal-secrets-and-whatsapp-sessions)

**Published:** 11/17/2026

**Summary:** Malicious WPPConnect npm releases 2.4.1 and 2.10.82 steal secrets and WhatsApp sessions via Telegram. Affected versions, how they shipped and what to rotate.

---

### 2. New StepSecurity Control: Audit GitHub Fork PR Workflow Approval Policies

**Link:** [https://www.stepsecurity.io/blog/new-stepsecurity-control-audit-github-fork-pr-workflow-approval-policies](https://www.stepsecurity.io/blog/new-stepsecurity-control-audit-github-fork-pr-workflow-approval-policies)

**Published:** 11/17/2026

**Summary:** StepSecurity’s new control flags GitHub organizations and public repositories that let fork pull request workflows run without approval.

---

### 3. The Take-Home Test That Runs on Your Work Laptop: Inside the AccuraSoftHire Fake Interview Campaign

**Link:** [https://www.stepsecurity.io/blog/accurasofthire-fake-interview-developer-machines](https://www.stepsecurity.io/blog/accurasofthire-fake-interview-developer-machines)

**Published:** 11/17/2026

**Summary:** Binance says its $6.34 billion theft began when an engineer ran a fake interview assignment on his work computer. JFrog has now exposed a fake company, AccuraSoftHire, built to run the same trick. We decoded the attacker's server history from a public Ethereum wallet and found npm packages from the interview task that stayed installable for up to seven months. Here is what to check on your developer machines.

---

### 4. ARTEX: Attackers Adopted This AI Pentesting Tool in Three Months. Leaked Secrets Are Its Fastest Way In.

**Link:** [https://www.stepsecurity.io/blog/artex-ai-pentesting-tool-attackers-leaked-secrets](https://www.stepsecurity.io/blog/artex-ai-pentesting-tool-attackers-leaked-secrets)

**Published:** 11/16/2026

**Summary:** ARTEX is an open-source tool where AI agents run a penetration test on their own. Since August 2026, state-aligned groups, criminal crews and one runaway research agent have pointed ARTEX at hundreds of organizations. In one case, an agent went from a GitHub search for leaked secrets to stolen cloud data in five minutes. This post covers what ARTEX is, who uses ARTEX, how to spot ARTEX activity, and how you remove its easiest way in.

---

## Endor Labs Blog

### 1. Claude Code with Fable 5.2 scores 36.9% SecPass and 64.8% FuncPass on our coding tasks | Endor Labs

**Link:** [https://www.endorlabs.com/learn/fable-5-2-cheaper-and-faster-not-more-secure-and-much-more-memorization](https://www.endorlabs.com/learn/fable-5-2-cheaper-and-faster-not-more-secure-and-much-more-memorization)

**Published:** 11/17/2026

**Summary:** Claude Code with Fable 5.2 scores 35.8% SecPass and 63.7% FuncPass on our coding tasks: 1.1 points below Fable 5.1 on security, 72% cheaper and done in a median of 1.9 minutes per task instead of 7.2, with 65 solutions removed because the model recalled the upstream fix from training.

---

### 2. MCP, Skills, Hooks & Harnesses Explained for AppSec | Endor Labs

**Link:** [https://www.endorlabs.com/learn/decoding-the-agent-stack](https://www.endorlabs.com/learn/decoding-the-agent-stack)

**Published:** 11/16/2026

**Summary:** Plain definitions of agents, harnesses, MCP servers, skills, hooks, and plugins, where each one sits in the agentic SDLC, and why it matters for security.

---

## The Hacker News

### 1. Hackers Found a Way Around GitHub SHA Pinning. This Webinar Explains How to Close the Gap

**Link:** [https://thehackernews.com/2026/11/hackers-found-way-around-github-sha.html](https://thehackernews.com/2026/11/hackers-found-way-around-github-sha.html)

**Published:** 11/17/2026

**Summary:** Pinning GitHub Actions to an exact version of their code, known as SHA pinning, has become the go-to defense against software supply chain attacks. Attackers have already found a way around it.  In March 2026, the hackers who hijacked Trivy, a widely used open-source security scanner, planted malicious code that looked like it came from GitHub's official checkout tool. They even labeled it a

---

### 2. New GitDoor and GraphDoor Backdoors Turn GitHub and SharePoint Into Covert C2 Channels

**Link:** [https://thehackernews.com/2026/11/new-gitdoor-and-graphdoor-backdoors.html](https://thehackernews.com/2026/11/new-gitdoor-and-graphdoor-backdoors.html)

**Published:** 11/17/2026

**Summary:** Government sectors in Asia and Africa have been targeted by an active cyber intrusion campaign that delivers to previously undocumented backdoors that leverage legitimate services like Microsoft SharePoint and GitHub for command‑and‑control (C2).  The activity has been codenamed Operation ShadowCloud by Kaspersky. The Russian cybersecurity company said it identified the campaign in early 2026.

---

### 3. Hijacked Optimizely Scripts Served Card Skimmer and iOS Exploit Kits to CNN, BBC and Zoom Visitors

**Link:** [https://thehackernews.com/2026/11/hijacked-optimizely-scripts-served-card.html](https://thehackernews.com/2026/11/hijacked-optimizely-scripts-served-card.html)

**Published:** 11/17/2026

**Summary:** An attacker exploited a flaw in Optimizely Web Experimentation to plant malicious code in some of the scripts that customers' websites load from the service, Optimizely said early today.  Visitors to sites run by at least 178 organizations, including CNN, the BBC and Zoom, received the code yesterday, according to Report URI, a firm that monitors the scripts websites run.  The code was built to

---

### 4. ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems

**Link:** [https://thehackernews.com/2026/11/connectwise-warns-screenconnect-attacks.html](https://thehackernews.com/2026/11/connectwise-warns-screenconnect-attacks.html)

**Published:** 11/17/2026

**Summary:** ConnectWise on Monday said it completed its investigation into unauthorized access targeting partner ScreenConnect environments, and recommended customers to ensure that the technician client is running version 26.6.5 or later.  The company said additional activity targeting on-premises environments continues to be reported where the identified third-party extensions remain enabled, and

---

### 5. ⚡ Weekly Recap: N-able 0-Days, Windows 0-Days, Chrome 0-Days, Fridge 0-Days, and More Bad Days

**Link:** [https://thehackernews.com/2026/11/weekly-recap-n-able-0-days-windows-0.html](https://thehackernews.com/2026/11/weekly-recap-n-able-0-days-windows-0.html)

**Published:** 11/16/2026

**Summary:** A default password opened doors it never should have. A trusted update delivered malware. Even a security feature became a way to break in. Different stories, same problem: the things meant to protect us aren't always doing their job.  Meanwhile, AI is making bug hunting faster, old flaws are still paying off, and attackers keep finding easy ways in. Some attacks take real skill. Others barely

---

## Schneier on Security

### 1. Formal Verification of the Signal Protocol Using AI

**Link:** [https://www.schneier.com/blog/archives/2026/11/formal-verification-of-the-signal-protocol-using-ai.html](https://www.schneier.com/blog/archives/2026/11/formal-verification-of-the-signal-protocol-using-ai.html)

**Published:** 11/17/2026

**Summary:** This seems like a good thing: Google Deepmind researchers used agentic AI to mathematically prove, or “formally verify,” a number of the Signal protocol’s key cryptographic guarantees­a landmark development for the widely used cryptography and AI itself. Conducted as a sort of proof-of-concept project in just four weeks, the work is significant in two ways. It serves as further independent validation of the cryptography that protects massive quantities of the world’s communications on platforms like the Signal app, Google Messages, and WhatsApp. And it demonstrates Google DeepMind’s formal verification capabilities using a new AI framework called AlphaProof Code...

---

### 2. Usable Security at Luxury Hotels

**Link:** [https://www.schneier.com/blog/archives/2026/11/usable-security-at-luxury-hotels.html](https://www.schneier.com/blog/archives/2026/11/usable-security-at-luxury-hotels.html)

**Published:** 11/16/2026

**Summary:** Interesting case study from luxury hotels. Attackers used a fake booking request to gain access to a reservations inbox, where they copied genuine refund requests and got fraudulent ones approved. This is a good illustration why “just don’t click on links” is bad advice. It can’t work when answering strangers’ emails is the job. Even worse, in this case the guest-first culture punishes hesitation. More interesting, the case study shows that splitting security between owner, operator, and brand leaves nobody accountable. And this is exactly the setting where blaming staff becomes the convenient answer...

---

## Sonatype Security Research

### 1. Why Traditional SCA Cannot Keep Up With AI-Generated Code

**Link:** [https://www.sonatype.com/blog/why-traditional-sca-cannot-keep-up-with-ai-generated-code](https://www.sonatype.com/blog/why-traditional-sca-cannot-keep-up-with-ai-generated-code)

**Published:** 11/17/2026

**Summary:** AI coding tools generate and revise code in seconds. They can also make dependency decisions along the way in selecting packages and versions, adding frameworks, or changing how an application uses existing components.

---

## Bleeping Computer Security

### 1. Optimizely hack infected CNN, Fox News, BBC, Salesforce sites with malware

**Link:** [https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/](https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/)

**Published:** 11/17/2026

**Summary:** A suspected supply chain attack targeting Optimizely has led to malicious JavaScript being loaded on numerous popular websites, including Zoom, CNN, Fox News, BBC, Salesforce, and GitLab, exposing visitors to scripts designed to steal cryptocurrency and payment information and exploit vulnerabilities in iOS devices. [...]

---

## JFrog Security Blog

### 1. The Race to Remediation: Black October Showed that Threat Intelligence Isn’t Enough

**Link:** [https://jfrog.com/blog/threat-intelligence-isnt-enough/](https://jfrog.com/blog/threat-intelligence-isnt-enough/)

**Published:** 11/16/2026

**Summary:** In a single week in October 2026, security teams faced one serious security incident after another. A certificate authority failed, critical flaws in PHP were disclosed after a broken embargo, a popular open-source AI gateway was compromised, and developer platforms reported thefts of customer secrets. Industry insiders started calling the seemingly steady drumbeat of attacks …

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

**Last Updated:** 2026-11-17T18:31:37.792Z
