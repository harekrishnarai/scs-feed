# Supply Chain Security Daily Report
**Date:** 2026-02-14
**Total Reports Found:** 9

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Tilth v0.3 – 17% cheaper AI code navigation (279 runs, 3 Claude models)

**Link:** [https://news.ycombinator.com/item?id=47016959](https://news.ycombinator.com/item?id=47016959)

**Published:** 2/14/2026

**Summary:** tilth gives AI agents structural code intelligence (tree-sitter definitions, callee resolution, smart outlining) via MCP. I benchmarked it on 21 code navigation tasks across 4 real repos (Express, FastAPI, Gin, ripgrep). -> https://github.com/jahala/tilth Results: Sonnet 4.5 — 26% cheaper per correct answer (79% → 86% accuracy). Opus 4.6 — 14% cheaper (and the only model+mode combo to crack the hardest task). Haiku 4.5 — 82% cheaper when forced to use tilth (69% → 100% accuracy at $0.04/answer). We measure “cost per correct answer” — what you’d expect to spend before getting a usable answer under retry. A wrong answer isn’t a cheap success. Interesting finding: smarter models adopt MCP tools voluntarily (Sonnet 95%, Opus 94%), but Haiku ignores them (9%). Instruction tuning didn’t help. Removing the overlapping built-in tools did. https://github.com/jahala/tilth/blob/main/benchmark/README.m... PS: I dont have the budget to run the benchmark a lot with Opus, so if any token whales has capacity to run some benchmarks, please feel free to PR results. Comments URL: https://news.ycombinator.com/item?id=47016959 Points: 1 # Comments: 0

---

### 2. Clawsec: Open-source plugin for OpenClaw.ai that blocks dangerous actions

**Link:** [https://www.clawsec.bot](https://www.clawsec.bot)

**Published:** 2/14/2026

**Summary:** Article URL: https://www.clawsec.bot Comments URL: https://news.ycombinator.com/item?id=47016889 Points: 1 # Comments: 1

---

## Schneier on Security

### 1. Upcoming Speaking Engagements

**Link:** [https://www.schneier.com/blog/archives/2026/02/upcoming-speaking-engagements-53.html](https://www.schneier.com/blog/archives/2026/02/upcoming-speaking-engagements-53.html)

**Published:** 2/14/2026

**Summary:** This is a current list of where and when I am scheduled to speak: I’m speaking at Ontario Tech University in Oshawa, Ontario, Canada, at 2 PM ET on Thursday, February 26, 2026. I’m speaking at the Personal AI Summit in Los Angeles, California, USA, on Thursday, March 5, 2026. I’m speaking at Tech Live: Cybersecurity in New York City, USA, on Wednesday, March 11, 2026. I’m giving the Ross Anderson Lecture at the University of Cambridge’s Churchill College at 5:30 PM GMT on Thursday, March 19, 2026. I’m speaking at RSAC 2026 in San Francisco, California, USA, on Wednesday, March 25, 2026...

---

## Endor Labs Blog

### 1. The Missing Layer: Why Container OS Libraries Need Reachability Analysis | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/the-missing-layer-why-container-os-libraries-need-reachability-analysis](https://www.endorlabs.com/learn/the-missing-layer-why-container-os-libraries-need-reachability-analysis)

**Published:** 2/14/2026

**Summary:** As CVEs surge and AI speeds delivery, container OS reachability is key to reducing noise and real AppSec risk.

---

## The Hacker News

### 1. Google Ties Suspected Russian Actor to CANFAIL Malware Attacks on Ukrainian Orgs

**Link:** [https://thehackernews.com/2026/02/google-ties-suspected-russian-actor-to.html](https://thehackernews.com/2026/02/google-ties-suspected-russian-actor-to.html)

**Published:** 2/13/2026

**Summary:** A previously undocumented threat actor has been attributed to attacks targeting Ukrainian organizations with malware known as CANFAIL. Google Threat Intelligence Group (GTIG) described the hacking group as possibly affiliated with Russian intelligence services. The threat actor is assessed to have targeted defense, military, government, and energy organizations within the Ukrainian regional and

---

### 2. UAT-9921 Deploys VoidLink Malware to Target Technology and Financial Sectors

**Link:** [https://thehackernews.com/2026/02/uat-9921-deploys-voidlink-malware-to.html](https://thehackernews.com/2026/02/uat-9921-deploys-voidlink-malware-to.html)

**Published:** 2/13/2026

**Summary:** A previously unknown threat actor tracked as UAT-9921 has been observed leveraging a new modular framework called VoidLink in its campaigns targeting the technology and financial services sectors, according to findings from Cisco Talos. "This threat actor seems to have been active since 2019, although they have not necessarily used VoidLink over the duration of their activity," researchers Nick

---

### 3. Malicious Chrome Extensions Caught Stealing Business Data, Emails, and Browsing History

**Link:** [https://thehackernews.com/2026/02/malicious-chrome-extensions-caught.html](https://thehackernews.com/2026/02/malicious-chrome-extensions-caught.html)

**Published:** 2/13/2026

**Summary:** Cybersecurity researchers have discovered a malicious Google Chrome extension that's designed to steal data associated with Meta Business Suite and Facebook Business Manager. The extension, named CL Suite by @CLMasters (ID: jkphinfhmfkckkcnifhjiplhfoiefffl), is marketed as a way to scrape Meta Business Suite data, remove verification pop-ups, and generate two-factor authentication (2FA) codes.

---

### 4. npm’s Update to Harden Their Supply Chain, and Points to Consider

**Link:** [https://thehackernews.com/2026/02/npms-update-to-harden-their-supply.html](https://thehackernews.com/2026/02/npms-update-to-harden-their-supply.html)

**Published:** 2/13/2026

**Summary:** In December 2025, in response to the Sha1-Hulud incident, npm completed a major authentication overhaul intended to reduce supply-chain attacks. While the overhaul is a solid step forward, the changes don’t make npm projects immune from supply-chain attacks. npm is still susceptible to malware attacks – here’s what you need to know for a safer Node community. Let’s start with the original

---

## CISA Advisories

### 1. CISA Announces New Town Halls to Engage with Stakeholders on Cyber Incident Reporting for Critical Infrastructure

**Link:** [https://www.cisa.gov/news-events/news/cisa-announces-new-town-halls-engage-stakeholders-cyber-incident-reporting-critical-infrastructure](https://www.cisa.gov/news-events/news/cisa-announces-new-town-halls-engage-stakeholders-cyber-incident-reporting-critical-infrastructure)

**Published:** 2/13/2026

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

**Last Updated:** 2026-02-14T18:43:30.541Z
