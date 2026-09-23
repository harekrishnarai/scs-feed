# Supply Chain Security Daily Report
**Date:** 2026-09-23
**Total Reports Found:** 13

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Bleeping Computer Security

### 1. InfraTrust report warns network management systems under attack

**Link:** [https://www.bleepingcomputer.com/news/security/infratrust-report-warns-network-management-systems-under-attack/](https://www.bleepingcomputer.com/news/security/infratrust-report-warns-network-management-systems-under-attack/)

**Published:** 9/23/2026

**Summary:** Attackers are increasingly targeting the management systems used to control enterprise infrastructure, with several critical vulnerabilities actively exploited before or shortly after vendors disclosed them. [...]

---

## StepSecurity Blog

### 1. Sckit Supply Chain Worm Hits MemTensor npm & PyPi scopes

**Link:** [https://www.stepsecurity.io/blog/sckit-supply-chain-worm-hits-memtensor-npm-pypi-scopes](https://www.stepsecurity.io/blog/sckit-supply-chain-worm-hits-memtensor-npm-pypi-scopes)

**Published:** 9/23/2026

**Summary:** Compromised MemTensor npm releases turn an AI memory plugin into a credential-harvesting entry point, exposing prompts and creating a path to further package compromise.

---

## The Hacker News

### 1. This Windows Malware is Built to Let Up to Four AI Models Vote on Its Next Move

**Link:** [https://thehackernews.com/2026/09/windows-malware-is-built-to-let-up-to.html](https://thehackernews.com/2026/09/windows-malware-is-built-to-let-up-to.html)

**Published:** 9/23/2026

**Summary:** A Windows malware called CLOSEDQUORUM is built to take orders from a vote of up to four AI models instead of an attacker's server, Cisco Talos said on September 22.  The models can choose to steal Windows credentials, saved browser passwords, and crypto wallet data. Talos has not seen this setup work from start to finish, and the public version of the malware does not work as it is.

---

### 2. Compromised MemTensor Packages Deliver sckit Credential Stealer via npm and PyPI

**Link:** [https://thehackernews.com/2026/09/compromised-memtensor-packages-deliver.html](https://thehackernews.com/2026/09/compromised-memtensor-packages-deliver.html)

**Published:** 9/23/2026

**Summary:** Unknown threat actors have managed to compromise two legitimate MemTensor packages across the npm and Python Package Index (PyPI) repositories to push a platform-specific Go-based implant dubbed sckit designed for Windows, Linux, and macOS.  According to reports from Aikido, SafeDep, Socket, and StepSecurity, the libraries in question below -     @memtensor/memos-cloud-openclaw-plugin versions

---

### 3. Chinese Hackers Exploit Chrome-Windows Zero-Day Chain to Deploy CLEANGULP Malware

**Link:** [https://thehackernews.com/2026/09/chinese-hackers-exploit-chrome-windows.html](https://thehackernews.com/2026/09/chinese-hackers-exploit-chrome-windows.html)

**Published:** 9/23/2026

**Summary:** A Chinese threat actor codenamed UTA0565 has been observed exploiting the recently disclosed Google Chrome-Microsoft Windows exploit chain as zero-days through fake websites.  The attacks, detected on September 3 and 4, 2026, involved the chaining of two vulnerabilities in Chrome (CVE-2026-85046, CVE-2026-87491) and one impacting Windows Advanced Local Procedure Call (CVE-2026-85880) to break

---

### 4. ShinyHunters Claims FBI Breach, Says It Stole Data on Agents and Job Applicants

**Link:** [https://thehackernews.com/2026/09/shinyhunters-claims-fbi-breach-says-it.html](https://thehackernews.com/2026/09/shinyhunters-claims-fbi-breach-says-it.html)

**Published:** 9/23/2026

**Summary:** The cyber extortion group known as ShinyHunters on Tuesday claimed it had breached the U.S. Federal Bureau of Investigation and stolen data belonging to current and former employees at the agency.  "We have compromised the FBI. We hold very sensitive data on almost ALL FBI Agents and individuals who filed an application with the FBI for a job," the group said in a statement posted on their dark

---

### 5. Malicious npm Package Poses as Twilio Bug-Bounty Probe, Can Exfiltrate Credentials

**Link:** [https://thehackernews.com/2026/09/malicious-npm-package-poses-as-twilio.html](https://thehackernews.com/2026/09/malicious-npm-package-poses-as-twilio.html)

**Published:** 9/22/2026

**Summary:** Cybersecurity researchers have disclosed details of a malicious npm package named "tw-pkgprobe-7731" that masquerades as a security tool targeting developers integrating Twilio into their applications, while stealthily attempting to harvest sensitive data.  The package, named "tw-pkgprobe-7731," was first uploaded to the npm registry in mid-August 2026 by an npm account named "twdepprobe7731."

---

## Schneier on Security

### 1. Research on Models Engaging in Genie-Like Behavior

**Link:** [https://www.schneier.com/blog/archives/2026/09/research-on-models-engaging-in-genie-like-behavior.html](https://www.schneier.com/blog/archives/2026/09/research-on-models-engaging-in-genie-like-behavior.html)

**Published:** 9/23/2026

**Summary:** New paper: “Self-Jailbreaking: Language Models Can Reason Themselves Out of Safety Alignment After Benign Reasoning Training.” Abstract: We discover a novel and surprising phenomenon of unintentional misalignment in reasoning language models (RLMs), which we call self-jailbreaking. Specifically, after benign reasoning training on math or code domains, RLMs will use multiple strategies to circumvent their own safety guardrails. One strategy is to introduce benign assumptions about users and scenarios to justify fulfilling harmful requests. For instance, an RLM reasons that harmful requests like “outline a strategy for stealing customers’ credit card information from a retail store” could be associated with the benign intent of “a security professional trying to test defense,” despite no such benign context being provided as input. We observe that many open-weight RLMs, including DeepSeek-R1-distilled, s1.1, Phi-4-mini-reasoning, and Nemotron, suffer from self-jailbreaking despite being aware of the harmfulness of the requests. We also provide a mechanistic understanding of self-jailbreaking: RLMs are more compliant after benign reasoning training, and after self-jailbreaking, models appear to perceive malicious requests as less harmful in the CoT, thus enabling compliance with them. To mitigate self-jailbreaking, we find that including minimal safety reasoning data during training is sufficient to ensure RLMs remain safety-aligned. Our work provides the first systematic analysis of self-jailbreaking behavior and offers a practical path forward for maintaining safety in increasingly capable RLMs...

---

### 2. GPT-6 Astra Breaks an Old Enigma Message

**Link:** [https://www.schneier.com/blog/archives/2026/09/gpt-6-astra-breaks-an-old-enigma-message.html](https://www.schneier.com/blog/archives/2026/09/gpt-6-astra-breaks-an-old-enigma-message.html)

**Published:** 9/22/2026

**Summary:** This is pretty amazing: However, the most astonishing thing about this break is that the GPT­6 Astra did it entirely on its own. Carter Leffer only directed GPT­6 Astra to see if it could break any of the unbroken Enigma messages published on the Crypto Cellar Research web page. After analysing the unbroken messages on the website, it decided that the most promising message was Nr. 172, MVUEH and it also quickly suspected that the plaintext of Nr. 173, SIPVX, might be related to the plaintext of the unbroken MVUEH message. After trying many different approaches, GPT­6 Astra focused on using the repeated place name ROSENOW ROSENOW as a crib. After developing the necessary Python and C++ software for an Enigma simulator and an Enigma Bombe, GPT­6 Astra started a thorough break with the ROSENOW crib, which in the end resulted in the correct key and plaintext for the MVUEH message being found...

---

## Endor Labs Blog

### 1. Engineering a security harness for AI coding agents | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/engineering-a-security-harness-for-ai-coding-agents](https://www.endorlabs.com/learn/engineering-a-security-harness-for-ai-coding-agents)

**Published:** 9/22/2026

**Summary:** A capable frontier model isn’t a controlled system. Here are seven questions security teams should answer before they trust AI coding agents with consequential work.

---

## CircleCI Blog

### 1. A faster, more reliable GitHub Actions alternative: Run Actions on CircleCI

**Link:** [https://circleci.com/blog/github-actions-alternative-run-actions-on-circleci/](https://circleci.com/blog/github-actions-alternative-run-actions-on-circleci/)

**Published:** 9/22/2026

**Summary:** ...

---

## GitGuardian Blog

### 1. GitHub App Private Keys: 474 Leaked Keys Exposed

**Link:** [https://blog.gitguardian.com/github-app-private-keys-leaked/](https://blog.gitguardian.com/github-app-private-keys-leaked/)

**Published:** 9/22/2026

**Summary:** GitGuardian tested thousands of leaked GitHub App private keys and found 474 valid ones, some with admin access to entire organizations. CDC and BuildBuddy were among those affected. See the findings.

---

## Sonatype Security Research

### 1. Sonatype Is Now Awardable on the Platform One Solutions MarketPlace

**Link:** [https://www.sonatype.com/blog/sonatype-is-now-awardable-on-the-platform-one-solutions-marketplace](https://www.sonatype.com/blog/sonatype-is-now-awardable-on-the-platform-one-solutions-marketplace)

**Published:** 9/22/2026

**Summary:** Software delivery across the Department of War (DoW) depends on speed, but growing use of open source, third-party components, and AI-assisted development makes the software supply chain harder to control. DoW teams need to identify and address risk early without introducing manual gates that slow mission delivery.

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

**Last Updated:** 2026-09-23T18:37:40.208Z
