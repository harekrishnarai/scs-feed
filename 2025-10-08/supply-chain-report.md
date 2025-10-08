# Supply Chain Security Daily Report
**Date:** 2025-10-08
**Total Reports Found:** 14

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Quant, the AI stock trading analyst

**Link:** [https://news.ycombinator.com/item?id=45519169](https://news.ycombinator.com/item?id=45519169)

**Published:** 10/8/2025

**Summary:** Today we're releasing Quant, and AI analyst that connects to 600+ exchanges with 1000+ built-in analysis tools. Andrew, CTO, has a background building software at hedge funds so we put his knowledge and experience into this application. The core idea: if you already know spreadsheets, you shouldn't need to learn Python/R or set up complex infrastructure to do serious quantitative analysis. One way to think of Quant is a low-cost Bloomberg Terminal alternative. What's inside: Portfolio optimization (including Dalio's risk parity approach), Monte Carlo simulations for backtesting Sharpe ratio, Black-Scholes, and risk analysis Real-time data from 10,000+ sources via connectors. Direct execution to platforms like Robinhood AI assistants that can explain concepts and analyze your positions The AI layer is particularly useful for learning - it can walk you through why certain strategies work, explain the math behind models, or help debug your analysis. We're offering a free tier to start, and we'd genuinely love feedback from folks here who've built their own trading systems or struggled with existing tools. Try it at: https://sourcetable.com/quant Happy to answer questions about the architecture, data pipelines, or design decisions. Comments URL: https://news.ycombinator.com/item?id=45519169 Points: 2 # Comments: 0

---

### 2. Show HN: Twoway, a Go package for HPKE encrypted request-response flows

**Link:** [https://github.com/confidentsecurity/twoway](https://github.com/confidentsecurity/twoway)

**Published:** 10/8/2025

**Summary:** Hey HN, I'm Willem from Confident Security, we've built CONFSEC, a provably private AI inference engine. Today, we're excited to open-source twoway: https://github.com/confidentsecurity/twoway twoway is a Go package that makes it easy to implement secure, encrypted request-response flows. It powers CONFSEC's blind prompt handling, ensuring no one, not even us, can see client requests. We built twoway on Cloudflare's circl/hpke, it uses Hybrid Public key Encryption to implement two flows: - A one-to-one flow where a sender communicates with a single receiver. This flow is fully compatible with RFC 9458 Oblivious HTTP (OHTTP), and the chunked OHTTP draft RFC. - A one-to-many flow where a sender communicates with one or more receivers. Similar to the Apple's PCC's request flow. Other features include: - Compatibility with any transport, twoway deals with just the messages. - Chunked messages. - Allows for custom HPKE implementations for specialized needs like cryptographic hardware modules. Our README has clear examples to get you started, all you need to do is go get and try an encrypted "Hello world" exchange. Our team will be popping in to answer questions, we'd love to hear your feedback. Cheers! Willem Comments URL: https://news.ycombinator.com/item?id=45519157 Points: 1 # Comments: 0

---

## The Hacker News

### 1. Hackers Exploit WordPress Sites to Power Next-Gen ClickFix Phishing Attacks

**Link:** [https://thehackernews.com/2025/10/hackers-exploit-wordpress-themes-to.html](https://thehackernews.com/2025/10/hackers-exploit-wordpress-themes-to.html)

**Published:** 10/8/2025

**Summary:** Cybersecurity researchers are calling attention to a nefarious campaign targeting WordPress sites to make malicious JavaScript injections that are designed to redirect users to sketchy sites. "Site visitors get injected content that was drive-by malware like fake Cloudflare verification," Sucuri researcher Puja Srivastava said in an analysis published last week. The website security company

---

### 2. Chinese Hackers Weaponize Open-Source Nezha Tool in New Attack Wave

**Link:** [https://thehackernews.com/2025/10/chinese-hackers-weaponize-open-source.html](https://thehackernews.com/2025/10/chinese-hackers-weaponize-open-source.html)

**Published:** 10/8/2025

**Summary:** Threat actors with suspected ties to China have turned a legitimate open-source monitoring tool called Nezha into an attack weapon, using it to deliver a known malware called Gh0st RAT to targets. The activity, observed by cybersecurity company Huntress in August 2025, is characterized by the use of an unusual technique called log poisoning (aka log injection) to plant a web shell on a web

---

### 3. OpenAI Disrupts Russian, North Korean, and Chinese Hackers Misusing ChatGPT for Cyberattacks

**Link:** [https://thehackernews.com/2025/10/openai-disrupts-russian-north-korean.html](https://thehackernews.com/2025/10/openai-disrupts-russian-north-korean.html)

**Published:** 10/8/2025

**Summary:** OpenAI on Tuesday said it disrupted three activity clusters for misusing its ChatGPT artificial intelligence (AI) tool to facilitate malware development. This includes a Russian‑language threat actor, who is said to have used the chatbot to help develop and refine a remote access trojan (RAT), a credential stealer with an aim to evade detection. The operator also used several ChatGPT accounts to

---

### 4. BatShadow Group Uses New Go-Based 'Vampire Bot' Malware to Hunt Job Seekers

**Link:** [https://thehackernews.com/2025/10/batshadow-group-uses-new-go-based.html](https://thehackernews.com/2025/10/batshadow-group-uses-new-go-based.html)

**Published:** 10/7/2025

**Summary:** A Vietnamese threat actor named BatShadow has been attributed to a new campaign that leverages social engineering tactics to deceive job seekers and digital marketing professionals to deliver a previously undocumented malware called Vampire Bot. "The attackers pose as recruiters, distributing malicious files disguised as job descriptions and corporate documents," Aryaka Threat Research Labs

---

### 5. XWorm 6.0 Returns with 35+ Plugins and Enhanced Data Theft Capabilities

**Link:** [https://thehackernews.com/2025/10/xworm-60-returns-with-35-plugins-and.html](https://thehackernews.com/2025/10/xworm-60-returns-with-35-plugins-and.html)

**Published:** 10/7/2025

**Summary:** Cybersecurity researchers have charted the evolution of XWorm malware, turning it into a versatile tool for supporting a wide range of malicious actions on compromised hosts. "XWorm's modular design is built around a core client and an array of specialized components known as plugins," Trellix researchers Niranjan Hegde and Sijo Jacob said in an analysis published last week. "These plugins are

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

### 2. How AI and Vibe Coding Are Changing the Rules of Software Security

**Link:** [https://www.sonatype.com/blog/how-ai-and-vibe-coding-are-changing-the-rules-of-software-security](https://www.sonatype.com/blog/how-ai-and-vibe-coding-are-changing-the-rules-of-software-security)

**Published:** 10/7/2025

**Summary:** Software development is evolving at an unprecedented pace. Today's developers do far more than simply write lines of code.

---

## JFrog Security Blog

### 1. Enhancing JFrog Internal Operations with Near Zero Downtime Migration

**Link:** [https://jfrog.com/blog/near-zero-downtime-database-migration/](https://jfrog.com/blog/near-zero-downtime-database-migration/)

**Published:** 10/8/2025

**Summary:** Data migrations have long been a significant source of anxiety for businesses and IT teams alike. The thought of moving critical databases often conjures images of prolonged downtime, service interruptions, and the ever-present risk of data loss. Indeed, statistics show that “90% of businesses experience unexpected downtime during database migrations, leading to significant revenue loss …

---

## Krebs on Security

### 1. ShinyHunters Wage Broad Corporate Extortion Spree

**Link:** [https://krebsonsecurity.com/2025/10/shinyhunters-wage-broad-corporate-extortion-spree/](https://krebsonsecurity.com/2025/10/shinyhunters-wage-broad-corporate-extortion-spree/)

**Published:** 10/7/2025

**Summary:** A cybercriminal group that used voice phishing attacks to siphon more than a billion records from Salesforce customers earlier this year has launched a website that threatens to publish data stolen from dozens of Fortune 500 firms if they refuse to pay a ransom. The group also claimed responsibility for a recent breach involving Discord user data, and for stealing terabytes of sensitive files from thousands of customers of the enterprise software maker Red Hat.

---

## GitHub Security Blog

### 1. How a top bug bounty researcher got their start in security

**Link:** [https://github.blog/security/how-a-top-bug-bounty-researcher-got-their-start-in-security/](https://github.blog/security/how-a-top-bug-bounty-researcher-got-their-start-in-security/)

**Published:** 10/7/2025

**Summary:** For this year’s Cybersecurity Awareness Month, the GitHub Bug Bounty team is excited to feature another spotlight on a talented security researcher — @xiridium! The post How a top bug bounty researcher got their start in security appeared first on The GitHub Blog.

---

## CircleCI Blog

### 1. Building and deploying a Python MCP server with FastMCP and CircleCI

**Link:** [https://circleci.com/blog/building-and-deploying-a-python-mcp-server-with-fastmcp/](https://circleci.com/blog/building-and-deploying-a-python-mcp-server-with-fastmcp/)

**Published:** 10/7/2025

**Summary:** ...

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

**Last Updated:** 2025-10-08T18:40:40.979Z
