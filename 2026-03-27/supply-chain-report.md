# Supply Chain Security Daily Report
**Date:** 2026-03-27
**Total Reports Found:** 21

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Custom kernel mode code signing policies on Windows

**Link:** [https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/design/custom-kernel-signers](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/design/custom-kernel-signers)

**Published:** 3/27/2026

**Summary:** Article URL: https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/design/custom-kernel-signers Comments URL: https://news.ycombinator.com/item?id=47546586 Points: 1 # Comments: 1

---

### 2. ZDI-CAN-30207: Unpatched 9.8 RCE zero-day in Telegram

**Link:** [https://www.zerodayinitiative.com/advisories/upcoming/](https://www.zerodayinitiative.com/advisories/upcoming/)

**Published:** 3/27/2026

**Summary:** Article URL: https://www.zerodayinitiative.com/advisories/upcoming/ Comments URL: https://news.ycombinator.com/item?id=47546545 Points: 2 # Comments: 0

---

### 3. Show HN: MUP – Claude builds a presentation while talking, then writes game live

**Link:** [https://www.youtube.com/watch?v=GKeDc1DMLH0](https://www.youtube.com/watch?v=GKeDc1DMLH0)

**Published:** 3/27/2026

**Summary:** MUP (Model UI Protocol) gives LLMs interactive UI panels in the browser. The LLM controls them via function calls; the user interacts with them directly. Both sides see each other's actions in real time. In the demo video, Claude narrates via TTS while simultaneously building an 8-slide presentation — with auto-generated charts, comparison tables, and live theme switching. Then it writes a dice roller from scratch (~50 lines of HTML), the server auto-detects it, and Claude rolls dice through it. All in under 6 minutes. A MUP is just an HTML file. No build step, no framework: npm install -g mup-mcp-server claude mcp add mup -- npx mup-mcp-server Then say "make me a presentation" in Claude Code. Built-in MUPs: slides (with chart engine), voice (TTS/STT), chat, progress tracker. Or write your own — any HTML with a JSON manifest becomes a MUP. It runs as an MCP server. The protocol spec is ~400 lines. Demo: https://youtu.be/GKeDc1DMLH0?si=Y7zBPQ2_LoHRvnJf GitHub: https://github.com/Ricky610329/mup Spec: https://github.com/Ricky610329/mup/blob/main/spec/MUP-Spec.m... Comments URL: https://news.ycombinator.com/item?id=47546430 Points: 1 # Comments: 0

---

### 4. Security-by-Design for LLM-Based Code Generation

**Link:** [https://arxiv.org/abs/2603.11212](https://arxiv.org/abs/2603.11212)

**Published:** 3/27/2026

**Summary:** Article URL: https://arxiv.org/abs/2603.11212 Comments URL: https://news.ycombinator.com/item?id=47546421 Points: 1 # Comments: 1

---

## The Hacker News

### 1. TeamPCP Pushes Malicious Telnyx Versions to PyPI, Hides Stealer in WAV Files

**Link:** [https://thehackernews.com/2026/03/teampcp-pushes-malicious-telnyx.html](https://thehackernews.com/2026/03/teampcp-pushes-malicious-telnyx.html)

**Published:** 3/27/2026

**Summary:** TeamPCP, the threat actor behind the supply chain attack targeting Trivy, KICS, and litellm, has now compromised the telnyx Python package by pushing two malicious versions to steal sensitive data. The two versions, 4.87.1 and 4.87.2, published to the Python Package Index (PyPI) repository on March 27, 2026, concealed their credential harvesting capabilities within a .WAV file. Users are

---

### 2. Open VSX Bug Let Malicious VS Code Extensions Bypass Pre-Publish Security Checks

**Link:** [https://thehackernews.com/2026/03/open-vsx-bug-let-malicious-vs-code.html](https://thehackernews.com/2026/03/open-vsx-bug-let-malicious-vs-code.html)

**Published:** 3/27/2026

**Summary:** Cybersecurity researchers have disclosed details of a now-patched bug impacting Open VSX's pre-publish scanning pipeline to cause the tool to allow a malicious Microsoft Visual Studio Code (VS Code) extension to pass the vetting process and go live in the registry. "The pipeline had a single boolean return value that meant both 'no scanners are configured' and 'all scanners failed to run,'" Koi

---

### 3. AitM Phishing Targets TikTok Business Accounts Using Cloudflare Turnstile Evasion

**Link:** [https://thehackernews.com/2026/03/aitm-phishing-targets-tiktok-business.html](https://thehackernews.com/2026/03/aitm-phishing-targets-tiktok-business.html)

**Published:** 3/27/2026

**Summary:** Threat actors are using adversary-in-the-middle (AitM) phishing pages to seize control of TikTok for Business accounts in a new campaign, according to a report from Push Security. Business accounts associated with social media platforms are a lucrative target, as they can be weaponized by bad actors for malvertising and distributing malware. "TikTok has been historically abused to distribute

---

### 4. Claude Extension Flaw Enabled Zero-Click XSS Prompt Injection via Any Website

**Link:** [https://thehackernews.com/2026/03/claude-extension-flaw-enabled-zero.html](https://thehackernews.com/2026/03/claude-extension-flaw-enabled-zero.html)

**Published:** 3/26/2026

**Summary:** Cybersecurity researchers have disclosed a vulnerability in Anthropic's Claude Google Chrome Extension that could have been exploited to trigger malicious prompts simply by visiting a web page. The flaw "allowed any website to silently inject prompts into that assistant as if the user wrote them," Koi Security researcher Oren Yomtov said in a report shared with The Hacker News. "No clicks, no

---

### 5. WebRTC Skimmer Bypasses CSP to Steal Payment Data from E-Commerce Sites

**Link:** [https://thehackernews.com/2026/03/webrtc-skimmer-bypasses-csp-to-steal.html](https://thehackernews.com/2026/03/webrtc-skimmer-bypasses-csp-to-steal.html)

**Published:** 3/26/2026

**Summary:** Cybersecurity researchers have discovered a new payment skimmer that uses WebRTC data channels as a means to receive payloads and exfiltrate data, effectively bypassing security controls. "Instead of the usual HTTP requests or image beacons, this malware uses WebRTC data channels to load its payload and exfiltrate stolen payment data," Sansec said in a report published this week. The attack,

---

## Endor Labs Blog

### 1. TeamPCP Isn't Done: Threat Actor Behind Trivy and KICS Compromises Now Hits LiteLLM's 95 Million Monthly Downloads on PyPI | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/teampcp-isnt-done](https://www.endorlabs.com/learn/teampcp-isnt-done)

**Published:** 3/27/2026

**Summary:** Two backdoored versions of litellm (1.82.7 and 1.82.8) shipped with a full credential harvester, Kubernetes lateral movement toolkit, and persistent backdoor.

---

### 2. SolarWinds took a nation-state. The next attack just needs an LLM and $5. | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/software-supply-chain-attacks-llm-five-dollars](https://www.endorlabs.com/learn/software-supply-chain-attacks-llm-five-dollars)

**Published:** 3/27/2026

**Summary:** Software supply chain attacks once required nation-state resources, but now AI has collapsed the cost of offense to pocket change.

---

### 3. TeamPCP Strikes Again: Telnyx Compromised Three Days After LiteLLM | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/teampcp-strikes-again-telnyx-compromised-three-days-after-litellm](https://www.endorlabs.com/learn/teampcp-strikes-again-telnyx-compromised-three-days-after-litellm)

**Published:** 3/27/2026

**Summary:** TeamPCP Strikes Again: Telnyx Compromised Three Days After LiteLLM

---

### 4. What We Can Learn About GitHub Actions Security from the Trivy Breach | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/github-actions-security-lessons-from-trivy](https://www.endorlabs.com/learn/github-actions-security-lessons-from-trivy)

**Published:** 3/26/2026

**Summary:** The recent supply chain attack on one of the most trusted open-source security scanners started with a single workflow misconfiguration in GitHub Actions. Here’s what happened, why it matters, and what you can do about it.

---

## StepSecurity Blog

### 1. litellm: Credential Stealer Hidden in PyPI Wheel

**Link:** [https://www.stepsecurity.io/blog/litellm-credential-stealer-hidden-in-pypi-wheel](https://www.stepsecurity.io/blog/litellm-credential-stealer-hidden-in-pypi-wheel)

**Published:** 3/27/2026

**Summary:** On March 24, 2026, a critical supply chain compromise was identified in litellm==1.82.8: the PyPI package contains a malicious litellm_init.pth file

---

### 2. TeamPCP Plants WAV Steganography Credential Stealer in telnyx PyPI Package

**Link:** [https://www.stepsecurity.io/blog/teampcp-plants-wav-steganography-credential-stealer-in-telnyx-pypi-package](https://www.stepsecurity.io/blog/teampcp-plants-wav-steganography-credential-stealer-in-telnyx-pypi-package)

**Published:** 3/27/2026

**Summary:** ...

---

## GitGuardian Blog

### 1. The Team PCP Snowball Effect: A Quantitative Analysis

**Link:** [https://blog.gitguardian.com/team-pcp-snowball-analysis/](https://blog.gitguardian.com/team-pcp-snowball-analysis/)

**Published:** 3/27/2026

**Summary:** Supply chain attacks cascade through ecosystems in ways traditional metrics hardly capture. GitGuardian evaluates the PCP Team incidents and finds damage spread to thousands of public targets.

---

## Sonatype Security Research

### 1. Autonomous Development and AI: Speed vs. Security

**Link:** [https://www.sonatype.com/blog/autonomous-development-and-ai-speed-vs.-security](https://www.sonatype.com/blog/autonomous-development-and-ai-speed-vs.-security)

**Published:** 3/26/2026

**Summary:** AI-assisted development is changing how software gets built. What began as a productivity boost is quickly becoming something bigger.

---

## GitHub Security Blog

### 1. A year of open source vulnerability trends: CVEs, advisories, and malware

**Link:** [https://github.blog/security/supply-chain-security/a-year-of-open-source-vulnerability-trends-cves-advisories-and-malware/](https://github.blog/security/supply-chain-security/a-year-of-open-source-vulnerability-trends-cves-advisories-and-malware/)

**Published:** 3/26/2026

**Summary:** Reviewed advisories hit a four-year low, malware advisories surged, and CNA publishing grew—here’s what changed and what it means for your triage and response.  The post A year of open source vulnerability trends: CVEs, advisories, and malware appeared first on The GitHub Blog.

---

## Kiuwan Blog

### 1. Quality through security: Kiuwan now natively integrates with TestRail

**Link:** [https://www.kiuwan.com/blog/quality-through-security-kiuwan-now-natively-integrates-with-testrail/](https://www.kiuwan.com/blog/quality-through-security-kiuwan-now-natively-integrates-with-testrail/)

**Published:** 3/26/2026

**Summary:** We’re announcing a new native integration between Kiuwan and TestRail that brings security and quality into the same workflow. With this release, Kiuwan users can push Static Application Security Testing results directly into TestRail, so security findings appear alongside functional and regression tests. For teams focused on both secure software delivery and release quality, that […]

---

### 2. 2026 Security Data Breaches: The Complete Tracker of Global Incidents

**Link:** [https://www.kiuwan.com/blog/security-data-breaches/](https://www.kiuwan.com/blog/security-data-breaches/)

**Published:** 3/26/2026

**Summary:** Understanding and tracking security data breaches Security data breaches are one of the biggest challenges organizations face today. Every year, companies deal with data leaks, ransomware attacks, or unauthorized access to sensitive information, often because of preventable mistakes in their software or infrastructure. Staying informed is the first step to staying secure. That’s why we […]

---

## Schneier on Security

### 1. As the US Midterms Approach, AI Is Going to Emerge as a Key Issue Concerning Voters

**Link:** [https://www.schneier.com/blog/archives/2026/03/as-the-us-midterms-approach-ai-is-going-to-emerge-as-a-key-issue-concerning-voters.html](https://www.schneier.com/blog/archives/2026/03/as-the-us-midterms-approach-ai-is-going-to-emerge-as-a-key-issue-concerning-voters.html)

**Published:** 3/26/2026

**Summary:** In December, the Trump administration signed an executive order that neutered states’ ability to regulate AI by ordering his administration to both sue and withhold funds from states that try to do so. This action pointedly supported industry lobbyists keen to avoid any constraints and consequences on their deployment of AI, while undermining the efforts of consumers, advocates, and industry associations concerned about AI’s harms who have spent years pushing for state regulation. Trump’s actions have clarified the ideological alignments around AI within America’s electoral factions. They set down lines on a new playing field for the midterm elections, prompting members of his party, the opposition, and all of us to consider where we stand in the debate over how and where to let AI transform our lives...

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

**Last Updated:** 2026-03-27T18:45:55.499Z
