# Supply Chain Security Daily Report
**Date:** 2025-09-23
**Total Reports Found:** 26

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. The Magical Number Seven, Plus or Minus Two (1956)

**Link:** [https://fermatslibrary.com/s/the-magical-number-seven-plus-or-minus-two](https://fermatslibrary.com/s/the-magical-number-seven-plus-or-minus-two)

**Published:** 9/23/2025

**Summary:** Article URL: https://fermatslibrary.com/s/the-magical-number-seven-plus-or-minus-two Comments URL: https://news.ycombinator.com/item?id=45350911 Points: 1 # Comments: 0

---

### 2. Show HN: SyGra – Graph-oriented Synthetic data generation Pipeline for LLMs

**Link:** [https://github.com/ServiceNow/SyGra](https://github.com/ServiceNow/SyGra)

**Published:** 9/23/2025

**Summary:** We're open-sourcing SyGra, a framework for building reproducible synthetic-data pipelines for LLM training and evaluation (SFT, DPO, agent simulation, multimodal). Problem: High-quality datasets are scarce, expensive, and often sensitive. When teams turn to synthetic data, the difficulty isn't single prompts—it's the end-to-end system: designing branching/looping workflows, coordinating multiple inference backends/APIs and tool calls, enforcing validation + schema compliance + quality tagging at scale, and running fault-tolerant jobs with resumability, sharding, and streaming. Ad-hoc notebooks/scripts don't capture that lifecycle. What SyGra is: A graph-oriented framework where you define nodes (LLM calls, samplers, transforms, agents, subgraphs) and edges (conditional / parallel / loops). Author pipelines in low-code YAML (CLI-runnable) or compose in Python. Emphasis on structured outputs and reproducibility. Key capabilities: - Graph model: reusable subgraphs; conditional/parallel edges; loops - Quality: dual-stage quality tagging (heuristics + LLM-based scoring); OASST-style conversation formatting - Backends: vLLM, Hugging Face TGI, Azure OpenAI, Ollama (Triton-compatible) - Data I/O: Hugging Face datasets (read/write, streaming) + local files; schema + metadata tracking - Execution: async runtime; checkpointing/resume; sharding support; multimodal inputs (image/audio/text); agent/tool nodes via LangGraph - Reproducibility: deterministic configs, seeds, artifact paths, and provenance logs - Modes: CLI (execute YAML graphs) or Python APIs (embed in notebooks/apps) - License: Apache-2.0 Links: - Repo & README: https://github.com/ServiceNow/SyGra - PyPI: https://pypi.org/project/sygra/ - Paper (design rationale): https://arxiv.org/abs/2508.15432 Disclosure: I'm part of the team behind SyGra. Comments URL: https://news.ycombinator.com/item?id=45350786 Points: 1 # Comments: 0

---

### 3. Ask HN: How do you orchestrate multiple agents?

**Link:** [https://news.ycombinator.com/item?id=45350772](https://news.ycombinator.com/item?id=45350772)

**Published:** 9/23/2025

**Summary:** Similar to Kubernetes managing and orchestrating long running stateful and stateless services, is there a framework or open source platform you are using to orchestrate spawning, restarting when necessary and managing states of multiple agents? Comments URL: https://news.ycombinator.com/item?id=45350772 Points: 1 # Comments: 0

---

### 4. Stress Testing Deliberative Alignment for Anti-Scheming Training

**Link:** [https://www.apolloresearch.ai/research/stress-testing-anti-scheming-training](https://www.apolloresearch.ai/research/stress-testing-anti-scheming-training)

**Published:** 9/23/2025

**Summary:** Article URL: https://www.apolloresearch.ai/research/stress-testing-anti-scheming-training Comments URL: https://news.ycombinator.com/item?id=45350766 Points: 1 # Comments: 0

---

### 5. Show HN: Open-source Todoist Clone that you can run on your personal Supabase

**Link:** [https://github.com/aksanoble/hasu](https://github.com/aksanoble/hasu)

**Published:** 9/23/2025

**Summary:** I know there are a gazillion todoist clone already but please bare with me. :) I was beginning to start dabbling with vibe coding over the past few weeks, and what better project to start with than Todoist, my favorite to-do application. This demo: I’m a paid user of Todoist and have been using it for the past 10 years, so I naturally wanted to see how far I could go with wipe coding by building a version of Todoist that I could personally use. When I thought about sharing it with others and making it easier for anyone to self-host, I also built a wrapper around Supabase that you can connect to your personal Supabase. Do check it out! Any feedback is most welcome, and it’s also open source. Comments URL: https://news.ycombinator.com/item?id=45350756 Points: 1 # Comments: 0

---

## Endor Labs Blog

### 1. npm Malware Outbreak: Tinycolor and CrowdStrike Packages Compromised | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/npm-malware-outbreak-tinycolor-and-crowdstrike-packages-compromised](https://www.endorlabs.com/learn/npm-malware-outbreak-tinycolor-and-crowdstrike-packages-compromised)

**Published:** 9/23/2025

**Summary:** A virus-like npm malware attack has spread to 180+ packages so far, including CrowdStrike and Tinycolor

---

### 2. Why Cooldown Windows Belong in Every npm Security Strategy | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/why-cooldown-windows-belong-in-every-npm-security-strategy](https://www.endorlabs.com/learn/why-cooldown-windows-belong-in-every-npm-security-strategy)

**Published:** 9/23/2025

**Summary:** Block risky npm releases before they spread. Endor Labs’ new cooldown policy enforces wait times to stop malware attacks.

---

### 3. Zero Trust for Open Source: Why Enterprises Need a New AppSec Playbook | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/zero-trust-for-open-source-why-enterprises-need-a-new-appsec-playbook](https://www.endorlabs.com/learn/zero-trust-for-open-source-why-enterprises-need-a-new-appsec-playbook)

**Published:** 9/22/2025

**Summary:** Enterprises must extend Zero Trust security principles to open source: assume nothing is safe, verify every dependency, and enforce guardrails across the software supply chain.

---

### 4. It’s Time to Take Malware Seriously (Attackers Do) | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/its-time-to-take-malware-seriously-attackers-do](https://www.endorlabs.com/learn/its-time-to-take-malware-seriously-attackers-do)

**Published:** 9/22/2025

**Summary:** Too often, malware isn’t a priority until there’s a high-profile attack. But with the recent escalation of attacks, it’s time to make malware a first-party citizen in application security programs.

---

## StepSecurity Blog

### 1. Shai-Hulud: Self-Replicating Worm Compromises 500+ NPM Packages

**Link:** [https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised)

**Published:** 9/23/2025

**Summary:** The Shai-Hulud worm has infected over 500 NPM packages including @ctrl/tinycolor in an unprecedented self-propagating supply chain attack. The malware harvests AWS/GCP/Azure credentials using TruffleHog, establishes persistence through GitHub Actions backdoors, and automatically spreads to other maintainer packages - marking the first successful worm attack in the NPM ecosystem.

---

### 2. s1ngularity: Popular Nx Build System Package Compromised with Data-Stealing Malware

**Link:** [https://www.stepsecurity.io/blog/supply-chain-security-alert-popular-nx-build-system-package-compromised-with-data-stealing-malware](https://www.stepsecurity.io/blog/supply-chain-security-alert-popular-nx-build-system-package-compromised-with-data-stealing-malware)

**Published:** 9/23/2025

**Summary:** s1ngularity attack hijacked Nx package on npm to steal cryptocurrency wallets, GitHub/npm tokens, SSH keys, and environment secrets - the first documented case of malware weaponizing AI CLI tools for reconnaissance and data exfiltration.

---

## Bleeping Computer Security

### 1. Libraesva ESG issues emergency fix for bug exploited by state hackers

**Link:** [https://www.bleepingcomputer.com/news/security/libraesva-esg-issues-emergency-fix-for-bug-exploited-by-state-hackers/](https://www.bleepingcomputer.com/news/security/libraesva-esg-issues-emergency-fix-for-bug-exploited-by-state-hackers/)

**Published:** 9/23/2025

**Summary:** Libraesva rolled out an emergency update for its Email Security Gateway solution to fix a vulnerability exploited by threat actors believed to be state sponsored. [...]

---

### 2. GitHub tightens npm security with mandatory 2FA, access tokens

**Link:** [https://www.bleepingcomputer.com/news/security/github-tightens-npm-security-with-mandatory-2fa-access-tokens/](https://www.bleepingcomputer.com/news/security/github-tightens-npm-security-with-mandatory-2fa-access-tokens/)

**Published:** 9/23/2025

**Summary:** GitHub is introducing a set of defenses against supply-chain attacks on the platform that led to multiple large-scale incidents recently. [...]

---

### 3. NPM package caught using QR Code to fetch cookie-stealing malware

**Link:** [https://www.bleepingcomputer.com/news/security/npm-package-caught-using-qr-code-to-fetch-cookie-stealing-malware/](https://www.bleepingcomputer.com/news/security/npm-package-caught-using-qr-code-to-fetch-cookie-stealing-malware/)

**Published:** 9/23/2025

**Summary:** Newly discovered npm package 'fezbox' employs QR codes to hide a second-stage payload to steal cookies from a user's web browser. The package, masquerading as a utility library, leverages this innovative steganographic technique to harvest sensitive data, such as user credentials, from a compromised machine. [...]

---

### 4. Automaker giant Stellantis confirms data breach after Salesforce hack

**Link:** [https://www.bleepingcomputer.com/news/security/automaker-giant-stellantis-confirms-data-breach-after-salesforce-hack/](https://www.bleepingcomputer.com/news/security/automaker-giant-stellantis-confirms-data-breach-after-salesforce-hack/)

**Published:** 9/22/2025

**Summary:** Automotive manufacturing giant Stellantis has confirmed that attackers stole some of its North American customers' data after gaining access to a third-party service provider's platform. [...]

---

### 5. New EDR-Freeze tool uses Windows WER to suspend security software

**Link:** [https://www.bleepingcomputer.com/news/security/new-edr-freeze-tool-uses-windows-wer-to-suspend-security-software/](https://www.bleepingcomputer.com/news/security/new-edr-freeze-tool-uses-windows-wer-to-suspend-security-software/)

**Published:** 9/22/2025

**Summary:** A new method and proof-of-concept tool called EDR-Freeze demonstrates that evading security solutions is possible from user mode with Microsoft's Windows Error Reporting (WER) system. [...]

---

## GitGuardian Blog

### 1. GitGuardian Introduces One-Click Secret Revocation to Accelerate Incident Response

**Link:** [https://blog.gitguardian.com/gitguardian-introduces-one-click-secret-revocation-to-accelerate-incident-response/](https://blog.gitguardian.com/gitguardian-introduces-one-click-secret-revocation-to-accelerate-incident-response/)

**Published:** 9/23/2025

**Summary:** Secure your secrets with GitGuardian's new one-click revocation. Instantly neutralize exposed secrets to close the attack window and automate your incident response.

---

## The Hacker News

### 1. ShadowV2 Botnet Exploits Misconfigured AWS Docker Containers for DDoS-for-Hire Service

**Link:** [https://thehackernews.com/2025/09/shadowv2-botnet-exploits-misconfigured.html](https://thehackernews.com/2025/09/shadowv2-botnet-exploits-misconfigured.html)

**Published:** 9/23/2025

**Summary:** Cybersecurity researchers have disclosed details of a new botnet that customers can rent access to conduct distributed denial-of-service (DDoS) attacks against targets of interest. The ShadowV2 botnet, according to Darktrace, predominantly targets misconfigured Docker containers on Amazon Web Services (AWS) cloud servers to deploy a Go-based malware that turns infected systems into attack nodes

---

### 2. GitHub Mandates 2FA and Short-Lived Tokens to Strengthen npm Supply Chain Security

**Link:** [https://thehackernews.com/2025/09/github-mandates-2fa-and-short-lived.html](https://thehackernews.com/2025/09/github-mandates-2fa-and-short-lived.html)

**Published:** 9/23/2025

**Summary:** GitHub on Monday announced that it will be changing its authentication and publishing options "in the near future" in response to a recent wave of supply chain attacks targeting the npm ecosystem, including the Shai-Hulud attack. This includes steps to address threats posed by token abuse and self-replicating malware by allowing local publishing with required two-factor authentication (2FA),

---

### 3. BadIIS Malware Spreads via SEO Poisoning — Redirects Traffic, Plants Web Shells

**Link:** [https://thehackernews.com/2025/09/badiis-malware-spreads-via-seo.html](https://thehackernews.com/2025/09/badiis-malware-spreads-via-seo.html)

**Published:** 9/23/2025

**Summary:** Cybersecurity researchers are calling attention to a search engine optimization (SEO) poisoning campaign likely undertaken by a Chinese-speaking threat actor using a malware called BadIIS in attacks targeting East and Southeast Asia, particularly with a focus on Vietnam. The activity, dubbed Operation Rewrite, is being tracked by Palo Alto Networks Unit 42 under the moniker CL-UNK-1037, where "

---

### 4. ComicForm and SectorJ149 Hackers Deploy Formbook Malware in Eurasian Cyberattacks

**Link:** [https://thehackernews.com/2025/09/comicform-and-sectorj149-hackers-deploy.html](https://thehackernews.com/2025/09/comicform-and-sectorj149-hackers-deploy.html)

**Published:** 9/22/2025

**Summary:** Organizations in Belarus, Kazakhstan, and Russia have emerged as the target of a phishing campaign undertaken by a previously undocumented hacking group called ComicForm since at least April 2025. The activity primarily targeted industrial, financial, tourism, biotechnology, research, and trade sectors, cybersecurity company F6 said in an analysis published last week. The attack chain involves

---

### 5. ⚡ Weekly Recap: Chrome 0-Day, AI Hacking Tools, DDR5 Bit-Flips, npm Worm & More

**Link:** [https://thehackernews.com/2025/09/weekly-recap-chrome-0-day-ai-hacking.html](https://thehackernews.com/2025/09/weekly-recap-chrome-0-day-ai-hacking.html)

**Published:** 9/22/2025

**Summary:** The security landscape now moves at a pace no patch cycle can match. Attackers aren’t waiting for quarterly updates or monthly fixes—they adapt within hours, blending fresh techniques with old, forgotten flaws to create new openings. A vulnerability closed yesterday can become the blueprint for tomorrow’s breach. This week’s recap explores the trends driving that constant churn: how threat

---

## Schneier on Security

### 1. Apple’s New Memory Integrity Enforcement

**Link:** [https://www.schneier.com/blog/archives/2025/09/apples-new-memory-integrity-enforcement.html](https://www.schneier.com/blog/archives/2025/09/apples-new-memory-integrity-enforcement.html)

**Published:** 9/23/2025

**Summary:** Apple has introduced a new hardware/software security feature in the iPhone 17: “Memory Integrity Enforcement,” targeting the memory safety vulnerabilities that spyware products like Pegasus tend to use to get unauthorized system access. From Wired: In recent years, a movement has been steadily growing across the global tech industry to address a ubiquitous and insidious type of bugs known as memory-safety vulnerabilities. A computer’s memory is a shared resource among all programs, and memory safety issues crop up when software can pull data that should be off limits from a computer’s memory or manipulate data in memory that shouldn’t be accessible to the program. When developers—­even experienced and security-conscious developers—­write software in ubiquitous, historic programming languages, like C and C++, it’s easy to make mistakes that lead to memory safety vulnerabilities. That’s why proactive tools like ...

---

### 2. Details About Chinese Surveillance and Propaganda Companies

**Link:** [https://www.schneier.com/blog/archives/2025/09/details-about-chinese-surveillance-and-propaganda-companies.html](https://www.schneier.com/blog/archives/2025/09/details-about-chinese-surveillance-and-propaganda-companies.html)

**Published:** 9/22/2025

**Summary:** Details from leaked documents: While people often look at China’s Great Firewall as a single, all-powerful government system unique to China, the actual process of developing and maintaining it works the same way as surveillance technology in the West. Geedge collaborates with academic institutions on research and development, adapts its business strategy to fit different clients’ needs, and even repurposes leftover infrastructure from its competitors. […] The parallels with the West are hard to miss. A number of American surveillance and propaganda firms also started as academic projects before they were spun out into startups and grew by chasing government contracts. The difference is that in China, these companies operate with far less transparency. Their work comes to light only when a trove of documents slips onto the internet...

---

## Sonatype Security Research

### 1. From Abuse to Alignment: Why We Need Sustainable Open Source Infrastructure

**Link:** [https://www.sonatype.com/blog/from-abuse-to-alignment-why-we-need-sustainable-open-source-infrastructure](https://www.sonatype.com/blog/from-abuse-to-alignment-why-we-need-sustainable-open-source-infrastructure)

**Published:** 9/23/2025

**Summary:** Open source doesn't run on any individual project, foundation, or company — it runs on shared infrastructure. That's why we've come together with other stewards to issue a Joint Statement on Sustainable Stewardship.

---

## GitHub Security Blog

### 1. Our plan for a more secure npm supply chain

**Link:** [https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/](https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/)

**Published:** 9/23/2025

**Summary:** Addressing a surge in package registry attacks, GitHub is strengthening npm's security with stricter authentication, granular tokens, and enhanced trusted publishing to restore trust in the open source ecosystem. The post Our plan for a more secure npm supply chain appeared first on The GitHub Blog.

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

**Last Updated:** 2025-09-23T18:39:20.361Z
