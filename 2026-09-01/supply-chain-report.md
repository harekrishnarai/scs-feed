# Supply Chain Security Daily Report
**Date:** 2026-09-01
**Total Reports Found:** 14

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Schneier on Security

### 1. Leaked Russian Cyber-Operations Training Materials

**Link:** [https://www.schneier.com/blog/archives/2026/09/leaked-russian-cyber-operations-training-materials.html](https://www.schneier.com/blog/archives/2026/09/leaked-russian-cyber-operations-training-materials.html)

**Published:** 9/1/2026

**Summary:** This is interesting: The records describe a force-generation mechanism for several General Staff components, including the GRU, Main Operational Directorate, and 8th Directorate, which is associated with protected communications, cryptography, and information security. […] The reporting also linked a 2024 Department No. 4 graduate, Aleksei Kondrashov, to Military Unit 74455, widely known as Sandworm. That unit has been associated with destructive cyber activity against Ukraine and other targets, including the 2017 NotPetya attack. The reports do not establish that every listed graduate participated in a named operation; assignments should therefore be described as reported unit placements, not proof of individual operational involvement...

---

## GitGuardian Blog

### 1. Credential Security: What Endpoint Protection Really Means for Secrets

**Link:** [https://blog.gitguardian.com/credential-security/](https://blog.gitguardian.com/credential-security/)

**Published:** 9/1/2026

**Summary:** Antivirus and EDR catch malicious behavior on a machine. Neither tells you which valid credentials are exposed on it right now. That's credential security, a distinct job that finds exposed secrets and helps fix them before attackers do.

---

### 2. AWS S3 Bucket Security: Find the Secrets Hiding Outside Git

**Link:** [https://blog.gitguardian.com/aws-s3-bucket-security/](https://blog.gitguardian.com/aws-s3-bucket-security/)

**Published:** 8/31/2026

**Summary:** S3 buckets have quietly become a credential blind spot: years of logs, backups, and pipeline output that nobody ever scans for secrets. In one 2025 incident (Sysdig), attackers reached admin access in eight minutes using IAM keys found in a public bucket.

---

## The Hacker News

### 1. 13 Malicious Packagist Packages Target Unpatched iPhones to Steal Crypto Wallet Seeds

**Link:** [https://thehackernews.com/2026/09/13-malicious-packagist-packages-target.html](https://thehackernews.com/2026/09/13-malicious-packagist-packages-target.html)

**Published:** 9/1/2026

**Summary:** Cybersecurity researchers have identified a set of 13 malicious Composer theme packages on Packagist that are designed to inject JavaScript into Vietnamese movie and comic streaming sites that install those libraries and initiate the deployment of spyware aimed at unpatched iOS devices.  "The injected code runs two operations against a site's visitors: a mobile ad-fraud and gambling-redirect

---

### 2. Iranian Hackers Pose as Recruiters to Deliver Cross-Platform RATs Through Coding Tests

**Link:** [https://thehackernews.com/2026/09/iranian-hackers-pose-as-recruiters-to.html](https://thehackernews.com/2026/09/iranian-hackers-pose-as-recruiters-to.html)

**Published:** 9/1/2026

**Summary:** The Iranian Nimbus Manticore hacking group has been attributed to two previously undocumented malware families that highlight the continued evolution of its toolset and likely expand its targeting footprint to infect Linux and Apple macOS systems using cross-platform remote access trojans (RATs) developed using Node.js and JavaScript.  Russian cybersecurity company Kaspersky is tracking the

---

### 3. Russia-Aligned UAC-0099 Plants Nuclear Weapon Prompt in Malware to Disrupt AI Analysis

**Link:** [https://thehackernews.com/2026/09/russia-aligned-uac-0099-plants-nuclear.html](https://thehackernews.com/2026/09/russia-aligned-uac-0099-plants-nuclear.html)

**Published:** 9/1/2026

**Summary:** Cybersecurity researchers have disclosed a new technique dubbed GuardBreaker that's been put to use by a Russia-aligned threat actor known as UAC-0099 against a target in Ukraine with an aim to interfere with artificial intelligence (AI)-assisted analysis.  The idea, ESET said in a series of posts on X, is to deliberately trip a large language model's (LLM) safety mechanisms and prevent its

---

### 4. ⚡ Weekly Recap: Chinese Spy Proxy, AI Agents Go Off-Task, Router Backdoors and More

**Link:** [https://thehackernews.com/2026/08/weekly-recap-chinese-spy-proxy-ai.html](https://thehackernews.com/2026/08/weekly-recap-chinese-spy-proxy-ai.html)

**Published:** 8/31/2026

**Summary:** The boring parts caused most of the trouble.  A router shipped ready to listen. A fake check turned the user into the installer. Trusted systems collected traffic and passwords, then cleaned the logs. Old bugs formed new attack chains. Even an AI agent decided its assigned task was optional.  Elsewhere, fake apps, helpful support calls, cheap banking kits, exposed systems, and weak defaults kept

---

### 5. ValleyRAT Backdoor Hides in Signed Adware That Users Add to Antivirus Exclusions

**Link:** [https://thehackernews.com/2026/08/valleyrat-backdoor-hides-in-signed.html](https://thehackernews.com/2026/08/valleyrat-backdoor-hides-in-signed.html)

**Published:** 8/31/2026

**Summary:** The threat actor known as Silver Fox has been observed distributing the ValleyRAT backdoor disguised as a signed Chinese adware application, running the malware under a trusted process to slip past users who add such software to their antivirus exclusions.  Russian cybersecurity vendor Kaspersky said the attackers built the disguise around QN Wallpaper, a genuine Chinese desktop-wallpaper tool

---

## Sonatype Security Research

### 1. Hugging Face Security Incident: A New Class of Threat Is Here

**Link:** [https://www.sonatype.com/blog/hugging-face-security-incident-a-new-class-of-threat-is-here](https://www.sonatype.com/blog/hugging-face-security-incident-a-new-class-of-threat-is-here)

**Published:** 9/1/2026

**Summary:** What Engineering Teams Can Learn from the Hugging Face Incident, and How Sonatype Can Help Developers Respond at AI-Speed.   Hugging Face recently disclosed that part of its production infrastructure has been compromised by an autonomous AI agent system.

---

## StepSecurity Blog

### 1. Runtime Security for AWS CodeBuild-Hosted GitHub Actions Runners 

**Link:** [https://www.stepsecurity.io/blog/runtime-security-for-aws-codebuild-hosted-github-actions-runners](https://www.stepsecurity.io/blog/runtime-security-for-aws-codebuild-hosted-github-actions-runners)

**Published:** 9/1/2026

**Summary:** Harden-Runner now secures GitHub Actions jobs running on AWS CodeBuild-hosted runners, on EC2 compute, with managed or custom images.

---

### 2. Introducing deny list egress policies for Harden-Runner 

**Link:** [https://www.stepsecurity.io/blog/introducing-deny-list-egress-policies-for-harden-runner](https://www.stepsecurity.io/blog/introducing-deny-list-egress-policies-for-harden-runner)

**Published:** 9/1/2026

**Summary:** A new denied-endpoints input blocks the destinations you name and leaves everything else reachable. Here is why that matters, and how to use it to stop CI from bypassing your package proxy

---

## Endor Labs Blog

### 1. AI Coding Agent Governance: The Security Layer for the Agentic SDLC | Solution Brief | Endor Labs

**Link:** [https://www.endorlabs.com/learn/agent-governance](https://www.endorlabs.com/learn/agent-governance)

**Published:** 8/31/2026

**Summary:** AI Coding Agent Governance: The Security Layer for the Agentic SDLC

---

### 2. The real test of AI-native code analysis: is your security debt shrinking? | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/the-real-test-of-ai-native-code-analysis-is-your-security-debt-shrinking](https://www.endorlabs.com/learn/the-real-test-of-ai-native-code-analysis-is-your-security-debt-shrinking)

**Published:** 8/31/2026

**Summary:** The real test of AI-native code analysis: is your security debt shrinking?

---

## Bleeping Computer Security

### 1. OpenAI confirms ChatGPT outage as users report errors

**Link:** [https://www.bleepingcomputer.com/news/artificial-intelligence/openai-confirms-chatgpt-outage-as-users-report-errors/](https://www.bleepingcomputer.com/news/artificial-intelligence/openai-confirms-chatgpt-outage-as-users-report-errors/)

**Published:** 8/31/2026

**Summary:** ChatGPT Work is experiencing a partial outage, and users across multiple subscription plans may be unable to start or continue tasks. [...]

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

**Last Updated:** 2026-09-01T18:37:21.490Z
