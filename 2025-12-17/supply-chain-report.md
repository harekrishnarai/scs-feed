# Supply Chain Security Daily Report
**Date:** 2025-12-17
**Total Reports Found:** 15

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: AI agent that investigates CloudWatch alarms – 5-min Terraform deploy

**Link:** [https://aiopscrew.com](https://aiopscrew.com)

**Published:** 12/17/2025

**Summary:** Hey HN, I built this because I was tired of spending 20-30 minutes investigating every CloudWatch alarm that fired. AWS just released CloudWatch Investigations (June 2025) which does similar things, but requires significant setup and lives in the console. Mine takes a different approach. CloudWatch AI Agent: When an alarm fires, an AI agent autonomously investigates and sends findings to Slack. Deploy via Terraform in 5 minutes. How it works: - Terraform module (Apache 2.0) deploys Lambda + SNS integration - Alarm triggers → AI agent queries your AWS environment (read-only) - Analyzes metrics, logs, EC2/RDS/Lambda configs, alarm history - Sends root cause analysis + ready-to-run CLI commands to Slack - ~30 seconds total vs AWS CloudWatch Investigations: - CloudWatch Investigations: Console-based, requires investigation groups, IAM role setup, CloudTrail→CloudWatch Logs config, limited to 2 concurrent investigations - Mine: Terraform apply, works immediately, Slack-native, unlimited investigations The Terraform module is fully open source. The Lambda code is obfuscated (contains AI orchestration logic, prompts) - this is the core IP. Business model is $5/mo API key subscription. Cost: $5/mo + ~$0.001 per alarm (AWS Bedrock usage) Why build this when AWS has a free native solution? 1. Infrastructure-as-code teams want Terraform deployment, not console configuration 2. Slack-native workflow vs AWS console workflow 3. No investigation limits (AWS caps at 150 enhanced/month) 4. 5 minutes vs 2-3 hours of setup I'm a solo AWS engineer. Built this for myself, now productizing it. The obfuscated Lambda is a tradeoff - I know trust is an issue, but the Terraform is fully auditable, IAM permissions are read-only, and everything runs in your account with CloudTrail logging. Not for everyone (especially teams with strict "no obfuscated code" policies), but for Terraform-first DevOps teams who want simple tooling, it solves a real pain point. Site: https://aiopscrew.com Happy to answer questions about the implementation, security model, or why I made specific design decisions. Comments URL: https://news.ycombinator.com/item?id=46303588 Points: 1 # Comments: 0

---

### 2. Top Open Source licenses in 2025

**Link:** [https://opensource.org/blog/top-open-source-licenses-in-2025](https://opensource.org/blog/top-open-source-licenses-in-2025)

**Published:** 12/17/2025

**Summary:** Article URL: https://opensource.org/blog/top-open-source-licenses-in-2025 Comments URL: https://news.ycombinator.com/item?id=46303391 Points: 2 # Comments: 0

---

### 3. Looking for a Remote Job in Python/Django/Flask

**Link:** [https://news.ycombinator.com/item?id=46303378](https://news.ycombinator.com/item?id=46303378)

**Published:** 12/17/2025

**Summary:** Hello there! My name is Tambe Hanslett. I'm a self-taught software developer. I'm currently seeking a part-time or full-time remote position. I'm open to backend or frontend roles. I'm also available for contract jobs. Visa sponsored Offers are also on my list if available. For Contract-based Jobs I charge between 10-60$/hour One-time Projects: Price is Negotiable My Preferred Stack Backend: Python, Django, Flask Frontend: html/css/js, Vue.js Database: Postgresql, MySQL, MongoDB(work in progress) Other tools: Redis Cache, Docker, Git, GitHub, GraphQL OS: Linux(90% of the time), Windows My Dev Environment: Ubuntu Linux, Tmux, Neovim, i3-wm Other tech stacks I've used in the past Frontend + Backend php, Laravel, Inertia.js + Vue.js Desktop Application Development PyQT, Pyinstaller Some projects I've completed and hosted for some clients I worked with in the past Client Projects 1. https://sibast.org [Laravel + inertiajs] 2. https://www.dirthunterscleaningservices.us/ [Python, Flask, GraphQl] 3. https://ztfmusic.com [Python, Django] 4. https://dainty-mochi-2d3608.netlify.app/ [HTML, CSS, JS] 5. https://github.com/HanslettTheDev/quotes-web-app [Python, Flask] Desktop Applications 1. https://github.com/HanslettTheDev/NWBS-Desktop [Python, PyQt, QT Designer] 2. https://github.com/HanslettTheDev/Book_Store [Python, PyQT, License Generator] Notable OpenSource Contributions 1. https://github.com/osscameroon/TypePen [Notepad app with Flask, Pywebview 2. https://github.com/PyAr/pyafipws/pulls?q=is%3Amerged+is%3Apr+author%3AHanslettTheDev+ [GSOC 2023] 3. https://github.com/r0x0r/pywebview/pull/958 [Pywebview - A lightweight library for building desktop apps with html|css|js ] 4. https://github.com/pallets/click/issues/3076 [Not complete yet] Get in touch with me Telegram: https://t.me/VenomRaider Email: HanslettTheDev@gmail.com X(formerly Twitter): https://x.com/AkwaLett Github Profile: https://github.com/HanslettTheDev LinkedIn Profile: https://linkedin.com/in/iamvenom/ I'm not currently working, and I'm open to starting immediately. Any leads or recommendations will be greatly appreciated Thank you! Comments URL: https://news.ycombinator.com/item?id=46303378 Points: 1 # Comments: 0

---

## GitGuardian Blog

### 1. Getting To AWS IAM Outbound Identity Federation With GitGuardian

**Link:** [https://blog.gitguardian.com/aws-iam-outbound-identity-federation-with-gitguardian/](https://blog.gitguardian.com/aws-iam-outbound-identity-federation-with-gitguardian/)

**Published:** 12/17/2025

**Summary:** Secure all your non-human identities across providers and without secrets. Explore how AWS and GitGuardian can help organizations migrate to short-lived tokens.

---

### 2. GitGuardian Launches Channel Partner Program to Scale Non-human Identity Security

**Link:** [https://blog.gitguardian.com/gitguardian-launches-channel-partner-program/](https://blog.gitguardian.com/gitguardian-launches-channel-partner-program/)

**Published:** 12/16/2025

**Summary:** New program offers competitive margins, technical training, and dedicated support to help partners capitalize on growing demand for secrets security solutions.

---

## The Hacker News

### 1. New ForumTroll Phishing Attacks Target Russian Scholars Using Fake eLibrary Emails

**Link:** [https://thehackernews.com/2025/12/new-forumtroll-phishing-attacks-target.html](https://thehackernews.com/2025/12/new-forumtroll-phishing-attacks-target.html)

**Published:** 12/17/2025

**Summary:** The threat actor linked to Operation ForumTroll has been attributed to a fresh set of phishing attacks targeting individuals within Russia, according to Kaspersky. The Russian cybersecurity vendor said it detected the new activity in October 2025. The origins of the threat actor are presently unknown. "While the spring cyberattacks focused on organizations, the fall campaign honed in on

---

### 2. China-Linked Ink Dragon Hacks Governments Using ShadowPad and FINALDRAFT Malware

**Link:** [https://thehackernews.com/2025/12/china-linked-ink-dragon-hacks.html](https://thehackernews.com/2025/12/china-linked-ink-dragon-hacks.html)

**Published:** 12/17/2025

**Summary:** The threat actor known as Jewelbug has been increasingly focusing on government targets in Europe since July 2025, even as it continues to attack entities located in Southeast Asia and South America. Check Point Research is tracking the cluster under the name Ink Dragon. It's also referenced by the broader cybersecurity community under the names CL-STA-0049, Earth Alux, and REF7707. The

---

### 3. GhostPoster Malware Found in 17 Firefox Add-ons with 50,000+ Downloads

**Link:** [https://thehackernews.com/2025/12/ghostposter-malware-found-in-17-firefox.html](https://thehackernews.com/2025/12/ghostposter-malware-found-in-17-firefox.html)

**Published:** 12/17/2025

**Summary:** A new campaign named GhostPoster has leveraged logo files associated with 17 Mozilla Firefox browser add-ons to embed malicious JavaScript code designed to hijack affiliate links, inject tracking code, and commit click and ad fraud. The extensions have been collectively downloaded over 50,000 times, according to Koi Security, which discovered the campaign. The add-ons are no longer available.

---

### 4. Compromised IAM Credentials Power a Large AWS Crypto Mining Campaign

**Link:** [https://thehackernews.com/2025/12/compromised-iam-credentials-power-large.html](https://thehackernews.com/2025/12/compromised-iam-credentials-power-large.html)

**Published:** 12/16/2025

**Summary:** An ongoing campaign has been observed targeting Amazon Web Services (AWS) customers using compromised Identity and Access Management (IAM) credentials to enable cryptocurrency mining. The activity, first detected by Amazon's GuardDuty managed threat detection service and its automated security monitoring systems on November 2, 2025, employs never-before-seen persistence techniques to hamper

---

### 5. Rogue NuGet Package Poses as Tracer.Fody, Steals Cryptocurrency Wallet Data

**Link:** [https://thehackernews.com/2025/12/rogue-nuget-package-poses-as-tracerfody.html](https://thehackernews.com/2025/12/rogue-nuget-package-poses-as-tracerfody.html)

**Published:** 12/16/2025

**Summary:** Cybersecurity researchers have discovered a new malicious NuGet package that typosquats and impersonates the popular .NET tracing library and its author to sneak in a cryptocurrency wallet stealer. The malicious package, named "Tracer.Fody.NLog," remained on the repository for nearly six years. It was published by a user named "csnemess" on February 26, 2020. It masquerades as "Tracer.Fody,"

---

## Schneier on Security

### 1. Deliberate Internet Shutdowns

**Link:** [https://www.schneier.com/blog/archives/2025/12/deliberate-internet-shutdowns.html](https://www.schneier.com/blog/archives/2025/12/deliberate-internet-shutdowns.html)

**Published:** 12/17/2025

**Summary:** For two days in September, Afghanistan had no internet. No satellite failed; no cable was cut. This was a deliberate outage, mandated by the Taliban government. It followed a more localized shutdown two weeks prior, reportedly instituted “to prevent immoral activities.” No additional explanation was given. The timing couldn’t have been worse: communities still reeling from a major earthquake lost emergency communications, flights were grounded, and banking was interrupted. Afghanistan’s blackout is part of a wider pattern. Just since the end of September, there were also major nationwide internet shutdowns in ...

---

## JFrog Security Blog

### 1. How to Detect and Eliminate Shadow AI in 5 Steps

**Link:** [https://jfrog.com/blog/how-to-detect-and-eliminate-shadow-ai-in-5-steps/](https://jfrog.com/blog/how-to-detect-and-eliminate-shadow-ai-in-5-steps/)

**Published:** 12/16/2025

**Summary:** The pressure to integrate AI is immense. Your developers need to move fast, and they’re finding ways to get the job done. But this rush for innovation often happens outside of established governance, creating a sprawling, invisible risk known as Shadow AI. To secure your organization, you must first understand what Shadow AI actually is. …

---

## Kiuwan Blog

### 1. Web Application Security Testing: The Complete Guide

**Link:** [https://www.kiuwan.com/blog/web-application-security-testing/](https://www.kiuwan.com/blog/web-application-security-testing/)

**Published:** 12/16/2025

**Summary:** As the threat landscape continues to evolve, organizations have had to strengthen their cybersecurity posture to overcome more sophisticated and more numerous attacks. Web application security testing has become an increasingly important part of that process, helping teams identify and remediate vulnerabilities at the application layer of their infrastructure before an attacker exploits them.  This […]

---

## Sonatype Security Research

### 1. The First Mile of Trusted AI Development

**Link:** [https://www.sonatype.com/blog/the-first-mile-of-trusted-ai-development](https://www.sonatype.com/blog/the-first-mile-of-trusted-ai-development)

**Published:** 12/16/2025

**Summary:** We've Been Building Toward This Moment   For months, I've been writing about a growing tension at the center of AI-powered development: AI can now generate code at extraordinary speed, yet our ability to govern that code hasn't evolved to match it. In a series of articles, I explored the emerging failure modes and the deeper structural gaps they reveal:

---

## StepSecurity Blog

### 1. Bake Harden-Runner Into GitHub's Custom Runner Images for Organization-Wide CI/CD Security 

**Link:** [https://www.stepsecurity.io/blog/bake-harden-runner-into-githubs-custom-runner-images-for-organization-wide-ci-cd-security](https://www.stepsecurity.io/blog/bake-harden-runner-into-githubs-custom-runner-images-for-organization-wide-ci-cd-security)

**Published:** 12/16/2025

**Summary:** GitHub's new custom runner images let you embed Harden-Runner directly into your infrastructure, providing automatic runtime protection across all workflows without modifying a single workflow file

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

**Last Updated:** 2025-12-17T18:43:19.462Z
