# Supply Chain Security Daily Report
**Date:** 2026-10-19
**Total Reports Found:** 9

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## The Hacker News

### 1. Popular WordPress SEO Plugin Rank Math PRO Hijacked to Deliver Self-Restoring Backdoor

**Link:** [https://thehackernews.com/2026/10/popular-wordpress-seo-plugin-rank-math.html](https://thehackernews.com/2026/10/popular-wordpress-seo-plugin-rank-math.html)

**Published:** 10/19/2026

**Summary:** Copies of Rank Math PRO, the paid version of the Rank Math SEO plugin for WordPress, that were downloaded from rankmath.com or delivered as updates between 20:02 UTC on October 15 and 07:12 UTC on October 16 contained malware, Rank Math said in a security notice published on October 16.  Any site that installed and activated one of those copies should be treated as compromised, and the

---

### 2. GhostAction Attackers Plant Credential Stealer Disguised as Font in 94 GitHub Repositories

**Link:** [https://thehackernews.com/2026/10/ghostaction-attackers-plant-credential.html](https://thehackernews.com/2026/10/ghostaction-attackers-plant-credential.html)

**Published:** 10/19/2026

**Summary:** The threat actor behind the GhostAction supply chain attack has expanded beyond injecting malicious GitHub Actions workflows into compromised projects to phish open-source developers and deliver a stealer malware disguised within a fake font file.  The latest evolution, detailed by OpenSourceMalware, signals that the attackers are actively refining their modus operandi in response to steps

---

### 3. Fake Web3 Accelerator Uses npm Packages to Spread Malware and Hijack AI Agent Traffic

**Link:** [https://thehackernews.com/2026/10/fake-web3-accelerator-uses-npm-packages.html](https://thehackernews.com/2026/10/fake-web3-accelerator-uses-npm-packages.html)

**Published:** 10/19/2026

**Summary:** A fake Web3 accelerator has been observed pushing information stealers and backdoors to Windows and macOS systems using malicious npm packages under the pretext of offering free artificial intelligence (AI) credits for Anthropic Claude and Google Gemini, coding tools, and security audits.  "The tools delivered information-stealing malware and backdoors for macOS and Windows machines," Elastic

---

### 4. OpenCode Console Breach May Have Exposed OpenAI, Anthropic, and Google API Keys

**Link:** [https://thehackernews.com/2026/10/opencode-console-breach-may-have.html](https://thehackernews.com/2026/10/opencode-console-breach-may-have.html)

**Published:** 10/19/2026

**Summary:** An intruder reached a legacy system at OpenCode on the night of October 16 and may have exposed the third-party AI provider keys that users had saved in OpenCode Console, the company said.  Console is OpenCode's optional hosted service: a workspace saves its own OpenAI, Anthropic, or Google key there, and Console uses that key to call the provider so team members can use the models without

---

### 5. ConnectWise Suspends Cloud Backup After Attackers Compromise Microsoft 365 Tenants

**Link:** [https://thehackernews.com/2026/10/connectwise-suspends-cloud-backup-after.html](https://thehackernews.com/2026/10/connectwise-suspends-cloud-backup-after.html)

**Published:** 10/18/2026

**Summary:** ConnectWise on Saturday said it has disabled seven ConnectWise application identities as it continues its investigation into an incident in which unknown threat actors obtained unauthorized access to the application identities and compromised Microsoft 365 tenants.  The disabled identities are listed below -     ConnectWise Cloud Backup - 506e08f9-6e9a-4da4-942b-a099a03644ae   ConnectWise

---

## GitGuardian Blog

### 1. Leaked API Keys in LLMs: How AI Agents Expose Secrets

**Link:** [https://blog.gitguardian.com/llm-api-key-leakage/](https://blog.gitguardian.com/llm-api-key-leakage/)

**Published:** 10/19/2026

**Summary:** Researchers pulled real, leaked API keys out of three LLMs using only API output. Here is how AI agents carry secrets from developer laptops into model context, and how to stop them before the model sees them.

---

## Krebs on Security

### 1. Feds Suspect Ransom Negotiator Ran ShinyHunters Extortion Site

**Link:** [https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/](https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/)

**Published:** 10/19/2026

**Summary:** U.S. federal investigators pursuing the ShinyHunters hacking group that recently stole highly sensitive data from the FBI have identified executives at two different ransomware negotiation firms who maintained unusually close relations with the extortion group, KrebsOnSecurity has learned. Sources close to the investigation say one of the executives in the United States even helped ShinyHunters operate a website that pressured victims into paying a ransom.

---

## Schneier on Security

### 1. Training AIs to Solve CAPTCHAs

**Link:** [https://www.schneier.com/blog/archives/2026/10/training-ais-to-solve-captchas.html](https://www.schneier.com/blog/archives/2026/10/training-ais-to-solve-captchas.html)

**Published:** 10/19/2026

**Summary:** Interesting research: Abstract: Vision-language models (VLMs) can solve visual CAPTCHAs without task-specific training, but the agents built on them approach every challenge from scratch. For such an agent, the hundredth instance of a familiar puzzle costs as much time and compute as the first. Specialized detectors invert the trade-off, answering in milliseconds but only for categories they were trained on. Neither improves with exposure. We study what changes when a solver improves with use. Our system pairs a fine-tuned YOLOv8 detector with an open-weight VLM behind a confidence-based router, and runs entirely from screenshots and operating-system input events, with no browser automation or DOM access. It reaches 85.4% overall and 84.2% macro accuracy across 16 classes, exceeding either component alone. Every answer VLM produces also serves as a training label, so the detector absorbs categories it was never trained for, typically after one or two encounters and without human annotation. The same loop also repairs it. A CAPTCHA operator can perturb images against the publicly released detector and drive its accuracy to 0%, but the perturbations leave VLM untouched, and its labels let the detector recover. Under a year-long simulated arms race in which the CAPTCHA operator re-crafts its perturbations each month, the solver recovers every round, and a cheap ~70%-accurate open-weight teacher hardens it as effectively as a perfect oracle. Visual CAPTCHA defenses that assume a failing bot stays failing therefore understate how quickly an adaptive solver returns...

---

## StepSecurity Blog

### 1. OpenCode Security Breach: Distillation Attack Hit Console Users With Linked AI Providers. How to Find OpenCode on Developer Machines and Respond

**Link:** [https://www.stepsecurity.io/blog/opencode-security-breach](https://www.stepsecurity.io/blog/opencode-security-breach)

**Published:** 10/18/2026

**Summary:** OpenCode reported a breach affecting Console users with linked AI providers. Here is what the vendor has said, and how to find OpenCode on your developer machines.

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

**Last Updated:** 2026-10-19T18:42:01.231Z
