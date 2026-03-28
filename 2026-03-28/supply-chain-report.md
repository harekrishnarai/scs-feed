# Supply Chain Security Daily Report
**Date:** 2026-03-28
**Total Reports Found:** 14

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. OpenCiv1 – open-source rewrite of Civ1

**Link:** [https://github.com/rajko-horvat/OpenCiv1](https://github.com/rajko-horvat/OpenCiv1)

**Published:** 3/28/2026

**Summary:** Article URL: https://github.com/rajko-horvat/OpenCiv1 Comments URL: https://news.ycombinator.com/item?id=47557064 Points: 1 # Comments: 0

---

## Bleeping Computer Security

### 1. New Infinity Stealer malware grabs macOS data via ClickFix lures

**Link:** [https://www.bleepingcomputer.com/news/security/new-infinity-stealer-malware-grabs-macos-data-via-clickfix-lures/](https://www.bleepingcomputer.com/news/security/new-infinity-stealer-malware-grabs-macos-data-via-clickfix-lures/)

**Published:** 3/28/2026

**Summary:** A new info-stealing malware named Infinity Stealer is targeting macOS systems with a Python payload packaged as an executable using the open-source Nuitka compiler. [...]

---

### 2. Backdoored Telnyx PyPI package pushes malware hidden in WAV audio

**Link:** [https://www.bleepingcomputer.com/news/security/backdoored-telnyx-pypi-package-pushes-malware-hidden-in-wav-audio/](https://www.bleepingcomputer.com/news/security/backdoored-telnyx-pypi-package-pushes-malware-hidden-in-wav-audio/)

**Published:** 3/27/2026

**Summary:** TeamPCP hackers compromised the Telnyx package on the Python Package Index today, uploading malicious versions that deliver credential-stealing malware hidden inside a WAV file. [...]

---

## StepSecurity Blog

### 1. TeamPCP Plants WAV Steganography Credential Stealer in telnyx PyPI Package

**Link:** [https://www.stepsecurity.io/blog/teampcp-plants-wav-steganography-credential-stealer-in-telnyx-pypi-package](https://www.stepsecurity.io/blog/teampcp-plants-wav-steganography-credential-stealer-in-telnyx-pypi-package)

**Published:** 3/28/2026

**Summary:** ...

---

### 2. litellm: Credential Stealer Hidden in PyPI Wheel

**Link:** [https://www.stepsecurity.io/blog/litellm-credential-stealer-hidden-in-pypi-wheel](https://www.stepsecurity.io/blog/litellm-credential-stealer-hidden-in-pypi-wheel)

**Published:** 3/28/2026

**Summary:** On March 24, 2026, a critical supply chain compromise was identified in litellm==1.82.8: the PyPI package contains a malicious litellm_init.pth file

---

## Endor Labs Blog

### 1. A Practitioner’s Guide to Responding to the TeamPCP Supply Chain Attacks | Ebook/Report | Endor Labs

**Link:** [https://www.endorlabs.com/learn/a-practitioners-guide-to-responding-to-the-teampcp-supply-chain-attacks](https://www.endorlabs.com/learn/a-practitioners-guide-to-responding-to-the-teampcp-supply-chain-attacks)

**Published:** 3/27/2026

**Summary:** Investigating, remediating, and hardening your environment in the wake of the TeamPCP campaign — from an organization that went through the process itself.

---

### 2. TeamPCP Strikes Again: Telnyx Compromised Three Days After LiteLLM | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/teampcp-strikes-again-telnyx-compromised-three-days-after-litellm](https://www.endorlabs.com/learn/teampcp-strikes-again-telnyx-compromised-three-days-after-litellm)

**Published:** 3/27/2026

**Summary:** TeamPCP Strikes Again: Telnyx Compromised Three Days After LiteLLM

---

### 3. SolarWinds took a nation-state. The next attack just needs an LLM and $5. | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/software-supply-chain-attacks-llm-five-dollars](https://www.endorlabs.com/learn/software-supply-chain-attacks-llm-five-dollars)

**Published:** 3/27/2026

**Summary:** Software supply chain attacks once required nation-state resources, but now AI has collapsed the cost of offense to pocket change.

---

### 4. TeamPCP Isn't Done: Threat Actor Behind Trivy and KICS Compromises Now Hits LiteLLM's 95 Million Monthly Downloads on PyPI | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/teampcp-isnt-done](https://www.endorlabs.com/learn/teampcp-isnt-done)

**Published:** 3/27/2026

**Summary:** Two backdoored versions of litellm (1.82.7 and 1.82.8) shipped with a full credential harvester, Kubernetes lateral movement toolkit, and persistent backdoor.

---

### 5. Malicious 'Pyronut' Package Backdoors Telegram Bots with Remote Code Execution | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/malicious-pyronut-package-backdoors-telegram-bots-with-remote-code-execution](https://www.endorlabs.com/learn/malicious-pyronut-package-backdoors-telegram-bots-with-remote-code-execution)

**Published:** 3/27/2026

**Summary:** The malicious Python package pyronut copies the entire project description and code of the popular pyrogram Telegram framework to pass itself off as the real thing, while silently installing a runtime backdoor that grants the attacker arbitrary Python and shell command execution on every victim's machine.

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

## GitGuardian Blog

### 1. The Team PCP Snowball Effect: A Quantitative Analysis

**Link:** [https://blog.gitguardian.com/team-pcp-snowball-analysis/](https://blog.gitguardian.com/team-pcp-snowball-analysis/)

**Published:** 3/27/2026

**Summary:** Supply chain attacks cascade through ecosystems in ways traditional metrics hardly capture. GitGuardian evaluates the PCP Team incidents and finds damage spread to thousands of public targets.

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

**Last Updated:** 2026-03-28T18:44:05.107Z
