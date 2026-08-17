# Supply Chain Security Daily Report
**Date:** 2026-08-17
**Total Reports Found:** 9

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. From Financial Statements to a Living Graph

**Link:** [https://financialstatementsplanninggraphv21.vercel.app/](https://financialstatementsplanninggraphv21.vercel.app/)

**Published:** 8/17/2026

**Summary:** Article URL: https://financialstatementsplanninggraphv21.vercel.app/ Comments URL: https://news.ycombinator.com/item?id=49335689 Points: 1 # Comments: 0

---

### 2. Show HN: A Buyer's Editor to Fix B2B Procurement PDF Hell with API and MCP

**Link:** [https://orbitquote.com/](https://orbitquote.com/)

**Published:** 8/17/2026

**Summary:** 22+ years as a Software engineer/programmer. For a reason that only life can explain, in the last 8 years i went from Adobe Flash Specialist to owning a small solar installation business and a small electric and plumbing materials. o.O We had a problem every time that we had to resupply or shop for new goods. In Brazil, things are manual in B2B and restricted to PDF Quotations/Proforma negotiations. Nobody has ecommerce, only the middlemen that resell what they buy from the factory with their margins on top. For better margins, direct from the factory is the way to go. Long story short. We wasted 2 weeks on a single supplier for just one order. On the supplier side, everything is a 100+- PDF pages catalog. One PDF page could have 100+ products that you have to manually extract into Excel with the product code (sku)(even with chatgpt and a gazillion of .final.final_right.final_corrected.xlsx(10).xlsx ), to simply ask for the price and minimum items for order >> receive another PDF >> Excel again to see prices, quantities, adjustments and even mistakes of items we didn't quote. It was purchasing hell! So I built OrbitQuote to solve this. We used and validated it in our own shop. Today, OrbitQuote extracts catalogs, quotations/budgets/proforma invoices, excel files, pdf, etc, into a live editor that you can quickly see your order changes and send back in seconds only what you want to buy. From days to minutes. We also have built OrbitQuote Compare, which lets you compare the same products across multiples suppliers  and choose the bast purchasing strategy. It's seams simples. It's not. Every suppliers writes the product in a different way. OrbitQuote understand this and aggregates the same product and choose the best fit automatically. I closed the Shop and Solar installation business and i'm focused 100% on OrbitQuote. All our users need to do, it's drop their files and done, 95% of the boring work is done. No paywall to check out. Just register; Comments URL: https://news.ycombinator.com/item?id=49335602 Points: 3 # Comments: 0

---

### 3. Show HN: HarnessRouter: Unified interface for agent harnesses

**Link:** [https://github.com/harnessrouter/harnessrouter](https://github.com/harnessrouter/harnessrouter)

**Published:** 8/17/2026

**Summary:** Hey HN! We are building HarnessRouter, a canonical API for running Codex, Claude Code, Hermes, and other managed agent harnesses as your product backend. Before building HarnessRouter, I used to build our own agent harness for our products. I tried LangGraph, agent SDKs from different vendors, pydantic, LLM tool use / function call, and so on. It's a very heavy lifting engineering effort, and I am disappointed about the agent deliveries compared to what Codex, CC can deliver. That changed my mindset. The frontier labs and famous open source communities are already putting so much engineering effort to build the world's best harnesses, why not leverage them directly instead of building our own, just like how we call LLM chat completion endpoints instead of training our own models? We provide a docker image to run HarnessRouter locally. ---------- Quickstart:     docker pull harnessrouter/harnessrouter      docker run -d --name harnessrouter -p 127.0.0.1:3000:3000 -v harnessrouter:/data harnessrouter/harnessrouter      docker logs -f harnessrouter      Wait for the "ready on :3000" show up, then open the browser at http://localhost:3000.     Default username/password is harnessrouter/harnessrouter      Then in Integrations page, add your model provider credentials or API keys.     In Harnesses tab, as of today we provide routing to Codex, Claude Code, and Hermes as base harnesses.     You can customize any of them and configure harness instruction, MCP tools, and skills.      Then go to Tasks and let them do jobs.  Every harness has its own request/response format and incompatible with each other. We propose Unified Harness Procotol [1] to standardize how an application talks to an agent harness. It covers harness selection and configuration, task execution, event streaming, sessions start cancel and resume, artifact management and delivery, and failure handling. It's similar idea like LiteLLM, but for harnesses rather than models. HarnessRouter implements UHP. We provide an AGENTS.md [2] and your coding agent can follow it to integrate your application with the harnesses available. We also provide starter kits [3] to demonstrate some types of agentic products that can be built on HarnessRouter. It currently includes PPT agent, Spreadsheet agent, BI Dashboard agent, and Video generation agent. Can't wait to hear what you think! [1] https://unifiedharnessprotocol.org [2] https://harnessrouter.ai/agents.md [3] https://github.com/harnessrouter/starter-kit Comments URL: https://news.ycombinator.com/item?id=49335595 Points: 2 # Comments: 0

---

## Endor Labs Blog

### 1. Harness engineering: how to make AI coding agents reliable and secure | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/harness-engineering-how-to-make-ai-coding-agents-reliable-and-secure](https://www.endorlabs.com/learn/harness-engineering-how-to-make-ai-coding-agents-reliable-and-secure)

**Published:** 8/17/2026

**Summary:** Learn how harness engineering makes AI coding agents reliable and secure with guides, sensors, and built-in security checks

---

## The Hacker News

### 1. ⚡ Weekly Recap: VMware Exploits, Windows 0-Day, MCP Attacks, Browser Hijacks and More

**Link:** [https://thehackernews.com/2026/08/weekly-recap-vmware-exploits-windows-0.html](https://thehackernews.com/2026/08/weekly-recap-vmware-exploits-windows-0.html)

**Published:** 8/17/2026

**Summary:** The expensive attacks are not always the clever ones.  This week had plenty of proof. Exposed services got hit, old bugs found fresh use, browser sessions became attack paths, and supply-chain problems kept spreading farther than the original compromise. A lot of it came down to access that was already there and defenses that assumed nobody would look too closely.  So, nothing magical. Just a

---

### 2. Evooo1Bot Linux Botnet Exploits Known Flaws to Turn Edge Devices Into SOCKS5 Proxies

**Link:** [https://thehackernews.com/2026/08/evooo1bot-linux-botnet-exploits-known.html](https://thehackernews.com/2026/08/evooo1bot-linux-botnet-exploits-known.html)

**Published:** 8/17/2026

**Summary:** Cybersecurity researchers have flagged a previously undocumented Linux botnet family dubbed Evooo1Bot that derives its core functionality from the Mirai botnet source code and is equipped to turn internet-facing devices into SOCKS proxies.  "While the malware reuses the DDoS engine from the publicly leaked Mirai source code, it extends the original framework with numerous capabilities, including

---

### 3. Suspected China-Nexus Actor Exploits VMware vCenter Flaw, Deploys Babuk-Derived Ransomware

**Link:** [https://thehackernews.com/2026/08/suspected-china-nexus-actor-exploits.html](https://thehackernews.com/2026/08/suspected-china-nexus-actor-exploits.html)

**Published:** 8/17/2026

**Summary:** Cybersecurity researchers have attributed the exploitation of a newly patched security flaw in Broadcom VMware vCenter to a suspected China-nexus advanced persistent threat (APT).  The attacks involve the exploitation of CVE-2026-59310 (CVSS score: 9.8), a severe directory-traversal vulnerability in the VMware vCenter server that could be weaponized by a malicious actor to execute arbitrary code

---

## Bleeping Computer Security

### 1. Anthropic confirms Claude is down in major outage affecting multiple services

**Link:** [https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-major-outage-affecting-multiple-services/](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-major-outage-affecting-multiple-services/)

**Published:** 8/16/2026

**Summary:** Claude is experiencing a major outage, with users reporting login problems and degraded performance across several Anthropic services. [...]

---

## StepSecurity Blog

### 1. ChainDrop npm Worm: Bun-loaded CI/CD credential harvester with Ethereum dead-drop C2

**Link:** [https://www.stepsecurity.io/blog/chaindrop-npm-worm](https://www.stepsecurity.io/blog/chaindrop-npm-worm)

**Published:** 8/16/2026

**Summary:** ChainDrop npm worm: 444 packages and 2,212 versions poisoned, starting with keyv@6.0.0. Payload analysis, affected package list, IOCs, and remediation steps.

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

**Last Updated:** 2026-08-17T18:43:37.980Z
