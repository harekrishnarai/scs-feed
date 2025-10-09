# Supply Chain Security Daily Report
**Date:** 2025-10-09
**Total Reports Found:** 12

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Non-intrusive compile_commands.json Extractor for Bazel

**Link:** [https://github.com/Arech/yacce](https://github.com/Arech/yacce)

**Published:** 10/9/2025

**Summary:** Wanted to share a thing born out of my frustration from using hedronvision's compile-commands.json extractor for Bazel. I'm working on a medium sized Bazel project in my company, and the project doesn't have and will not have integration of a 3rd party unnecessary code into its build system. The intrusiveness required for hedronvision's extractor makes working with different checkouts a real pain, so I implemented a different approach based on supervising on what a bazel server is doing  with strace. This works super well with my workloads, and is super convenient to use - basically prepend any build script eventually doing `bazel build` with prefix `yacce -- ` and run it. But due to strace use it has its own limitations: its Linux (strace) only and compilation must happen locally (so no RBE is supported). If that isn't a no-go for you, you might want to give it a try with `pip install yacce`. Source code and the docs are all on the github: https://github.com/Arech/yacce Comments URL: https://news.ycombinator.com/item?id=45531132 Points: 1 # Comments: 0

---

## The Hacker News

### 1. From HealthKick to GOVERSHELL: The Evolution of UTA0388's Espionage Malware

**Link:** [https://thehackernews.com/2025/10/from-healthkick-to-govershell-evolution.html](https://thehackernews.com/2025/10/from-healthkick-to-govershell-evolution.html)

**Published:** 10/9/2025

**Summary:** A China-aligned threat actor codenamed UTA0388 has been attributed to a series of spear-phishing campaigns targeting North America, Asia, and Europe that are designed to deliver a Go-based implant known as GOVERSHELL. "The initially observed campaigns were tailored to the targets, and the messages purported to be sent by senior researchers and analysts from legitimate-sounding, completely

---

### 2. From Phishing to Malware: AI Becomes Russia's New Cyber Weapon in War on Ukraine

**Link:** [https://thehackernews.com/2025/10/from-phishing-to-malware-ai-becomes.html](https://thehackernews.com/2025/10/from-phishing-to-malware-ai-becomes.html)

**Published:** 10/9/2025

**Summary:** Russian hackers' adoption of artificial intelligence (AI) in cyber attacks against Ukraine has reached a new level in the first half of 2025 (H1 2025), the country's State Service for Special Communications and Information Protection (SSSCIP) said. "Hackers now employ it not only to generate phishing messages, but some of the malware samples we have analyzed show clear signs of being generated

---

### 3. Hackers Exploit WordPress Sites to Power Next-Gen ClickFix Phishing Attacks

**Link:** [https://thehackernews.com/2025/10/hackers-exploit-wordpress-themes-to.html](https://thehackernews.com/2025/10/hackers-exploit-wordpress-themes-to.html)

**Published:** 10/8/2025

**Summary:** Cybersecurity researchers are calling attention to a nefarious campaign targeting WordPress sites to make malicious JavaScript injections that are designed to redirect users to sketchy sites. "Site visitors get injected content that was drive-by malware like fake Cloudflare verification," Sucuri researcher Puja Srivastava said in an analysis published last week. The website security company

---

### 4. Chinese Hackers Weaponize Open-Source Nezha Tool in New Attack Wave

**Link:** [https://thehackernews.com/2025/10/chinese-hackers-weaponize-open-source.html](https://thehackernews.com/2025/10/chinese-hackers-weaponize-open-source.html)

**Published:** 10/8/2025

**Summary:** Threat actors with suspected ties to China have turned a legitimate open-source monitoring tool called Nezha into an attack weapon, using it to deliver a known malware called Gh0st RAT to targets. The activity, observed by cybersecurity company Huntress in August 2025, is characterized by the use of an unusual technique called log poisoning (aka log injection) to plant a web shell on a web

---

### 5. OpenAI Disrupts Russian, North Korean, and Chinese Hackers Misusing ChatGPT for Cyberattacks

**Link:** [https://thehackernews.com/2025/10/openai-disrupts-russian-north-korean.html](https://thehackernews.com/2025/10/openai-disrupts-russian-north-korean.html)

**Published:** 10/8/2025

**Summary:** OpenAI on Tuesday said it disrupted three activity clusters for misusing its ChatGPT artificial intelligence (AI) tool to facilitate malware development. This includes a Russian‑language threat actor, who is said to have used the chatbot to help develop and refine a remote access trojan (RAT), a credential stealer with an aim to evade detection. The operator also used several ChatGPT accounts to

---

## Endor Labs Blog

### 1. Fireside Chat: Building a High-Trust Product Security Program at Zebra | Video | Endor Labs

**Link:** [https://www.endorlabs.com/learn/fireside-chat-building-a-high-trust-product-security-program-at-zebra](https://www.endorlabs.com/learn/fireside-chat-building-a-high-trust-product-security-program-at-zebra)

**Published:** 10/9/2025

**Summary:** Learn how Zebra Technologies builds a successful Product Security program by using reachability and risk ranking to prioritize critical vulnerabilities, making fixes fast and building developer trust.

---

### 2. Fireside Chat: CISOs on AI, Shift Left, and Building Trust at People.ai and AppLovin | Video | Endor Labs

**Link:** [https://www.endorlabs.com/learn/fireside-chat-cisos-on-ai-shift-left-and-building-trust-at-people-ai-and-applovin](https://www.endorlabs.com/learn/fireside-chat-cisos-on-ai-shift-left-and-building-trust-at-people-ai-and-applovin)

**Published:** 10/9/2025

**Summary:** Learn how top security leaders think about using AI code assistants to achieve the shift-left dream, increase release velocity, and build developer trust.

---

## GitGuardian Blog

### 1. Terraform Secrets Management Best Practices: Secret Managers and Ephemeral Resources

**Link:** [https://blog.gitguardian.com/terraform-secrets-management/](https://blog.gitguardian.com/terraform-secrets-management/)

**Published:** 10/9/2025

**Summary:** In this blog, we will explore Terraform secrets management best practices, ephemeral resources, and some examples of securely orchestrating AWS infrastructure with AWS Secrets Manager.

---

## Schneier on Security

### 1. Flok License Plate Surveillance

**Link:** [https://www.schneier.com/blog/archives/2025/10/flok-license-plate-surveillance.html](https://www.schneier.com/blog/archives/2025/10/flok-license-plate-surveillance.html)

**Published:** 10/8/2025

**Summary:** The company Flok is surveilling us as we drive: A retired veteran named Lee Schmidt wanted to know how often Norfolk, Virginia’s 176 Flock Safety automated license-plate-reader cameras were tracking him. The answer, according to a U.S. District Court lawsuit filed in September, was more than four times a day, or 526 times from mid-February to early July. No, there’s no warrant out for Schmidt’s arrest, nor is there a warrant for Schmidt’s co-plaintiff, Crystal Arrington, whom the system tagged 849 times in roughly the same period. You might think this sounds like it violates the Fourth Amendment, which protects American citizens from unreasonable searches and seizures without probable cause. Well, so does the American Civil Liberties Union. Norfolk, Virginia Judge Jamilah LeCruise also agrees, and in 2024 she ruled that plate-reader data obtained without a search warrant couldn’t be used against a defendant in a robbery case...

---

## Sonatype Security Research

### 1. Modernizing Federal DevSecOps for CMMC and Beyond

**Link:** [https://www.sonatype.com/blog/modernizing-federal-devsecops-for-cmmc-and-beyond](https://www.sonatype.com/blog/modernizing-federal-devsecops-for-cmmc-and-beyond)

**Published:** 10/8/2025

**Summary:** The Cybersecurity Maturity Model Certification (CMMC) 2.0 marks a clear shift from box-checking to modernization. Compliance is, of course, important. However, this evolution highlights the need to revise our approach to how software is developed, governed, and delivered across federal systems.

---

## JFrog Security Blog

### 1. Enhancing JFrog Internal Operations with Near Zero Downtime Migration

**Link:** [https://jfrog.com/blog/near-zero-downtime-database-migration/](https://jfrog.com/blog/near-zero-downtime-database-migration/)

**Published:** 10/8/2025

**Summary:** Data migrations have long been a significant source of anxiety for businesses and IT teams alike. The thought of moving critical databases often conjures images of prolonged downtime, service interruptions, and the ever-present risk of data loss. Indeed, statistics show that “90% of businesses experience unexpected downtime during database migrations, leading to significant revenue loss …

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

**Last Updated:** 2025-10-09T18:39:09.794Z
