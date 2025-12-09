# Supply Chain Security Daily Report
**Date:** 2025-12-09
**Total Reports Found:** 13

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: AvocadoDB – Deterministic RAG (same query, same context, every time)

**Link:** [https://news.ycombinator.com/item?id=46208483](https://news.ycombinator.com/item?id=46208483)

**Published:** 12/9/2025

**Summary:** RAG systems return different context for the same query. This makes debugging impossible and outputs unpredictable. AvocadoDB guarantees determinism - same query, same context, verifiable by SHA-256 hash. - 100% deterministic (not probabilistic top-k) - Pure Rust, 40-60ms latency, local embeddings - 95%+ token utilization (vs 60-70% typical)   - Exact file + line citations - $0 cost (no API required) Install: cargo install avocado-cli https://avocadodb.ai https://github.com/servesys-labs/avacadodb Built this after burning too many hours debugging  inconsistent RAG outputs. Happy to discuss the architecture. Comments URL: https://news.ycombinator.com/item?id=46208483 Points: 1 # Comments: 0

---

## The Hacker News

### 1. Four Threat Clusters Using CastleLoader as GrayBravo Expands Its Malware Service Infrastructure

**Link:** [https://thehackernews.com/2025/12/four-threat-clusters-using-castleloader.html](https://thehackernews.com/2025/12/four-threat-clusters-using-castleloader.html)

**Published:** 12/9/2025

**Summary:** Four distinct threat activity clusters have been observed leveraging a malware loader known as CastleLoader, strengthening the previous assessment that the tool is offered to other threat actors under a malware-as-a-service (MaaS) model. The threat actor behind CastleLoader has been assigned the name GrayBravo by Recorded Future's Insikt Group, which was previously tracking it as TAG-150.

---

### 2. Researchers Find Malicious VS Code, Go, npm, and Rust Packages Stealing Developer Data

**Link:** [https://thehackernews.com/2025/12/researchers-find-malicious-vs-code-go.html](https://thehackernews.com/2025/12/researchers-find-malicious-vs-code-go.html)

**Published:** 12/9/2025

**Summary:** Cybersecurity researchers have discovered two new extensions on Microsoft Visual Studio Code (VS Code) Marketplace that are designed to infect developer machines with stealer malware. The VS Code extensions masquerade as a premium dark theme and an artificial intelligence (AI)-powered coding assistant, but, in actuality, harbor covert functionality to download additional payloads, take

---

### 3. Experts Confirm JS#SMUGGLER Uses Compromised Sites to Deploy NetSupport RAT

**Link:** [https://thehackernews.com/2025/12/experts-confirm-jssmuggler-uses.html](https://thehackernews.com/2025/12/experts-confirm-jssmuggler-uses.html)

**Published:** 12/8/2025

**Summary:** Cybersecurity researchers are calling attention to a new campaign dubbed JS#SMUGGLER that has been observed leveraging compromised websites as a distribution vector for a remote access trojan named NetSupport RAT. The attack chain, analyzed by Securonix, involves three main moving parts: An obfuscated JavaScript loader injected into a website, an HTML Application (HTA) that runs encrypted

---

### 4. ⚡ Weekly Recap: USB Malware, React2Shell, WhatsApp Worms, AI IDE Bugs & More

**Link:** [https://thehackernews.com/2025/12/weekly-recap-usb-malware-react2shell.html](https://thehackernews.com/2025/12/weekly-recap-usb-malware-react2shell.html)

**Published:** 12/8/2025

**Summary:** It’s been a week of chaos in code and calm in headlines. A bug that broke the internet’s favorite framework, hackers chasing AI tools, fake apps stealing cash, and record-breaking cyberattacks — all within days. If you blink, you’ll miss how fast the threat map is changing. New flaws are being found, published, and exploited in hours instead of weeks. AI-powered tools meant to help developers

---

### 5. Android Malware FvncBot, SeedSnatcher, and ClayRat Gain Stronger Data Theft Features

**Link:** [https://thehackernews.com/2025/12/android-malware-fvncbot-seedsnatcher.html](https://thehackernews.com/2025/12/android-malware-fvncbot-seedsnatcher.html)

**Published:** 12/8/2025

**Summary:** Cybersecurity researchers have disclosed details of two new Android malware families dubbed FvncBot and SeedSnatcher, as another upgraded version of ClayRat has been spotted in the wild. The findings come from Intel 471, CYFIRMA, and Zimperium, respectively. FvncBot, which masquerades as a security app developed by mBank, targets mobile banking users in Poland. What's notable about the malware

---

## Sonatype Security Research

### 1. Sonatype Guide: Giving AI the Context It Needs

**Link:** [https://www.sonatype.com/blog/sonatype-guide-giving-ai-the-context-it-needs](https://www.sonatype.com/blog/sonatype-guide-giving-ai-the-context-it-needs)

**Published:** 12/9/2025

**Summary:** AI coding assistants promised to transform software development. And in many ways, they have: coding tasks that once took hours now take minutes, boilerplate nearly writes itself, and entire teams have leveled up their velocity.

---

## JFrog Security Blog

### 1. CVE-2025-55182 and CVE-2025-66478 (“React2Shell”): All you need to know – UPDATED

**Link:** [https://jfrog.com/blog/2025-55182-and-2025-66478-react2shell-all-you-need-to-know/](https://jfrog.com/blog/2025-55182-and-2025-66478-react2shell-all-you-need-to-know/)

**Published:** 12/9/2025

**Summary:** IMPORTANT UPDATE:  React2Shell Continues to Attack Cloud Infrastructure  (Dec 9th, 2025) JFrog Security Research continues to track the React2Shell vulnerability. Recent developments include the original POC from the researcher who found this vulnerability. This POC shows the simplicity of exploiting this CVE and reflects the real severity and impact of this CVE. JFrog continues to …

---

### 2. Stop Treating Models Like Magic, Start Treating Them Like Binaries

**Link:** [https://jfrog.com/blog/stop-treating-models-like-magic-start-treating-them-like-binaries/](https://jfrog.com/blog/stop-treating-models-like-magic-start-treating-them-like-binaries/)

**Published:** 12/9/2025

**Summary:** In my previous posts, we discussed the where and the how of managing your ML assets. We showed you how JFrog Artifactory acts as a powerful, universal model registry (the “where”) and how the FrogML SDK serves as the gateway to get your models and metadata into it (the “how”). Now, let’s talk about the …

---

## Kiuwan Blog

### 1. SBOM tools explained: Formats, use cases, and top solutions

**Link:** [https://www.kiuwan.com/blog/sbom-tools/](https://www.kiuwan.com/blog/sbom-tools/)

**Published:** 12/9/2025

**Summary:** Every organization that builds or buys software now relies on SBOM tools to protect its supply chain. As attacks on open-source and third-party code rise, software bills of materials (SBOMs) give teams visibility into what’s running inside their applications — making it easier to find weak spots and stay compliant as standards evolve. They pull […]

---

## Bleeping Computer Security

### 1. FinCEN says ransomware gangs extorted over $2.1B from 2022 to 2024

**Link:** [https://www.bleepingcomputer.com/news/security/fincen-says-ransomware-gangs-extorted-over-21b-from-2022-to-2024/](https://www.bleepingcomputer.com/news/security/fincen-says-ransomware-gangs-extorted-over-21b-from-2022-to-2024/)

**Published:** 12/8/2025

**Summary:** A new report by the Financial Crimes Enforcement Network (FinCEN) shows that ransomware activity peaked in 2023 before falling in 2024, following a series of law enforcement actions targeting the ALPHV/BlackCat and LockBit ransomware gangs. [...]

---

## CircleCI Blog

### 1. Getting started with Cursor and CircleCI: Adding AI to CI/CD workflows

**Link:** [https://circleci.com/blog/getting-started-with-cursor-and-circleci/](https://circleci.com/blog/getting-started-with-cursor-and-circleci/)

**Published:** 12/8/2025

**Summary:** ...

---

## Schneier on Security

### 1. Substitution Cipher Based on The Voynich Manuscript

**Link:** [https://www.schneier.com/blog/archives/2025/12/substitution-cipher-based-on-the-voynich-manuscript.html](https://www.schneier.com/blog/archives/2025/12/substitution-cipher-based-on-the-voynich-manuscript.html)

**Published:** 12/8/2025

**Summary:** Here’s a fun paper: “The Naibbe cipher: a substitution cipher that encrypts Latin and Italian as Voynich Manuscript-like ciphertext“: Abstract: In this article, I investigate the hypothesis that the Voynich Manuscript (MS 408, Yale University Beinecke Library) is compatible with being a ciphertext by attempting to develop a historically plausible cipher that can replicate the manuscript’s unusual properties. The resulting cipher­a verbose homophonic substitution cipher I call the Naibbe cipher­can be done entirely by hand with 15th-century materials, and when it encrypts a wide range of Latin and Italian plaintexts, the resulting ciphertexts remain fully decipherable and also reliably reproduce many key statistical properties of the Voynich Manuscript at once. My results suggest that the so-called “ciphertext hypothesis” for the Voynich Manuscript remains viable, while also placing constraints on plausible substitution cipher structures...

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

**Last Updated:** 2025-12-09T18:40:46.634Z
