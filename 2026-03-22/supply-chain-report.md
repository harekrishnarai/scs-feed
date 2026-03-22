# Supply Chain Security Daily Report
**Date:** 2026-03-22
**Total Reports Found:** 10

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Trump's Eye Is on Cuba

**Link:** [https://www.theatlantic.com/national-security/2026/03/trump-plan-cuba/686497/](https://www.theatlantic.com/national-security/2026/03/trump-plan-cuba/686497/)

**Published:** 3/22/2026

**Summary:** Article URL: https://www.theatlantic.com/national-security/2026/03/trump-plan-cuba/686497/ Comments URL: https://news.ycombinator.com/item?id=47480465 Points: 2 # Comments: 1

---

### 2. Delve Deep Dive – companies with potentially auto-generated compliance reports

**Link:** [https://peakmaven.com/deepdelve/](https://peakmaven.com/deepdelve/)

**Published:** 3/22/2026

**Summary:** Article URL: https://peakmaven.com/deepdelve/ Comments URL: https://news.ycombinator.com/item?id=47480449 Points: 1 # Comments: 0

---

### 3. I'm 11 and trained a custom MoE LLM for $1

**Link:** [https://news.ycombinator.com/item?id=47480445](https://news.ycombinator.com/item?id=47480445)

**Published:** 3/22/2026

**Summary:** # I'm 11 years old and I trained my own LLM from scratch. 50 people downloaded it in 24 hours. Hey r/LocalLLaMA, I'm Arthur, I'm 11 years old, and I just released *Wind Arc 1.6* — a custom architecture LLM I built and trained myself. ## What it is Wind Arc 1.6 is a 3.6B parameter model with a custom architecture I designed: - *Mixture of Experts FFN* — 4 routed experts + 1 shared expert per layer (replaces standard MLP) - *YaRN RoPE* — extends context from 8k → 32k tokens - *Hybrid Attention* — full attention every 4th layer, sliding window otherwise - *QK-Norm* for training stability Base: Qwen3-1.7B with the FFN layers completely replaced by my custom MoE. (Fully custom) ## How I trained it - Hardware: 1× RTX 5090 rented from Nova Cloud - Cost: literally $1 - Time: 55 minutes - Final loss: 2.66 Data mix: smoltalk + python-codes-25k + FineWeb-Edu + custom identity and Christian Q&A data I wrote myself. ## What it's good at - Python and general coding with explanations - Christian questions (Bible, theology, Christian living) - General chat and learning ## The honest truth It's not GPT-4. Loss of 2.66 on a 1.7B base with 55 minutes of training isn't going to beat frontier models. But it runs locally, it's open source, and it's mine. I still need to do SFT (the identity responses aren't perfect yet) and GGUF conversion is blocked by the custom MoE architecture. Working on both. ## Why I built it I'm building *North.ai* — an AI startup focused on powerful models that run on small hardware. Wind Arc is our flagship model. Our platform Neurotype will let anyone train, deploy, and use AI without needing expensive cloud budgets. I've trained 10+ models. This is the first one I'm actually proud enough to release. ## Links HuggingFace: https://huggingface.co/arthu1/wind-arc-1-6 Would love feedback from people who actually know what they're doing. Be honest — I can take it. — Arthur, age 11 Comments URL: https://news.ycombinator.com/item?id=47480445 Points: 2 # Comments: 0

---

### 4. Show HN: 518K Vietnamese legal documents (1924–2026)

**Link:** [https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents](https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents)

**Published:** 3/22/2026

**Summary:** I scraped and open-sourced a corpus of 518,255 Vietnamese legal documents — laws, decrees, circulars, decisions — spanning a century of legislation. Metadata + full Markdown text, ~3.6 GB parquet, CC BY 4.0. Vietnamese legal text is nearly absent from existing NLP datasets despite Vietnam having one of the more prolific legislative systems in Southeast Asia. Comments URL: https://news.ycombinator.com/item?id=47480363 Points: 1 # Comments: 0

---

## StepSecurity Blog

### 1. Trivy Compromised a Second Time - Malicious v0.69.4 Release, aquasecurity/setup-trivy, aquasecurity/trivy-action GitHub Actions Compromised

**Link:** [https://www.stepsecurity.io/blog/trivy-compromised-a-second-time---malicious-v0-69-4-release](https://www.stepsecurity.io/blog/trivy-compromised-a-second-time---malicious-v0-69-4-release)

**Published:** 3/22/2026

**Summary:** On March 19, 2026, trivy — a widely used open source vulnerability scanner maintained by Aqua Security — experienced a second security incident. Three weeks after the hackerbot-claw incident on February 28 that resulted in a repository takeover, a new compromised release (v0.69.4) was published to the trivy repository. The original incident disclosure discussion (#10265) was also deleted during this period, and version tags on the aquasecurity/setup-trivy GitHub Action were removed. Trivy maintainers deleted the v0.69.4 tag and Homebrew downgraded to v0.69.3. The following is a factual account of what we observed through public GitHub data.

---

### 2. hackerbot-claw: An AI-Powered Bot Actively Exploiting GitHub Actions - Microsoft, DataDog, and CNCF Projects Hit So Far

**Link:** [https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation](https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation)

**Published:** 3/21/2026

**Summary:** A week-long automated attack campaign targeted CI/CD pipelines across major open source repositories, achieving remote code execution in at least 4 out of 5 targets. The attacker, an autonomous bot called hackerbot-claw, used 5 different exploitation techniques and successfully exfiltrated a GitHub token with write permissions from one of the most popular repositories on GitHub. This post breaks down each attack, shows the evidence, and explains what you can do to protect your workflows.

---

## Endor Labs Blog

### 1. CanisterWorm: Malicious npm Packages Deploy Self-Propagating Supply Chain Worm | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/canisterworm](https://www.endorlabs.com/learn/canisterworm)

**Published:** 3/22/2026

**Summary:** A recently discovered campaign of malicious npm packages uses installation scripts to steal developer credentials and deploy a self-propagating worm that infects the victim's own software portfolio.

---

## Bleeping Computer Security

### 1. Trivy vulnerability scanner breach pushed infostealer via GitHub Actions

**Link:** [https://www.bleepingcomputer.com/news/security/trivy-vulnerability-scanner-breach-pushed-infostealer-via-github-actions/](https://www.bleepingcomputer.com/news/security/trivy-vulnerability-scanner-breach-pushed-infostealer-via-github-actions/)

**Published:** 3/21/2026

**Summary:** The Trivy vulnerability scanner was compromised in a supply-chain attack by threat actors known as TeamPCP, which distributed credential-stealing malware through official releases and GitHub Actions. [...]

---

## The Hacker News

### 1. FBI Warns Russian Hackers Target Signal, WhatsApp in Mass Phishing Attacks

**Link:** [https://thehackernews.com/2026/03/fbi-warns-russian-hackers-target-signal.html](https://thehackernews.com/2026/03/fbi-warns-russian-hackers-target-signal.html)

**Published:** 3/21/2026

**Summary:** Threat actors affiliated with Russian Intelligence Services are conducting phishing campaigns to compromise commercial messaging applications (CMAs) like WhatsApp and Signal to seize control of accounts belonging to individuals with high intelligence value, the U.S. Cybersecurity and Infrastructure Security Agency (CISA) and Federal Bureau of Investigation (FBI) said Friday. "The campaign

---

### 2. Trivy Supply Chain Attack Triggers Self-Spreading CanisterWorm Across 47 npm Packages

**Link:** [https://thehackernews.com/2026/03/trivy-supply-chain-attack-triggers-self.html](https://thehackernews.com/2026/03/trivy-supply-chain-attack-triggers-self.html)

**Published:** 3/21/2026

**Summary:** The threat actors behind the supply chain attack targeting the popular Trivy scanner are suspected to be conducting follow-on attacks that have led to the compromise of a large number of npm packages with a previously undocumented self-propagating worm dubbed CanisterWorm. The name is a reference to the fact that the malware uses an ICP canister, which refers to tamperproof smart contracts on

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

**Last Updated:** 2026-03-22T18:43:44.184Z
