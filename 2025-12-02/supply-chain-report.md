# Supply Chain Security Daily Report
**Date:** 2025-12-02
**Total Reports Found:** 18

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Amp, Inc. – Amp is spinning out of Sourcegraph

**Link:** [https://ampcode.com/news/amp-inc](https://ampcode.com/news/amp-inc)

**Published:** 12/2/2025

**Summary:** Article URL: https://ampcode.com/news/amp-inc Comments URL: https://news.ycombinator.com/item?id=46124649 Points: 4 # Comments: 0

---

### 2. Show HN: Validation system eliminates 90% of AI code failures (97.8% accuracy)

**Link:** [https://transformationagents.ai/webinar](https://transformationagents.ai/webinar)

**Published:** 12/2/2025

**Summary:** We've built a 3-step validation system for AI code outputs that's currently running in production. Results across 10,000+ deployments: • 90% reduction in production failures • 97.8% epistemic certainty (Guardian-validated) • Zero false positives • 100% endpoint success rate • 12-29ms response times One deployment caught 47 bugs before users saw them. The system validates at three layers: 1. Pattern validation (epistemic certainty framework) 2. Adapter validation (integration safety checks) 3. Convergence validation (system coherence) Architecture: • 8 Guardians (pattern validators) • 6 Guard Services (integration validators) • TypeScript/Python/JavaScript implementations • Framework templates: React, Vue, Next.js, FastAPI, Express We're hosting a free 60-minute technical deep-dive on Tuesday (Dec 2, 2 PM EST) where we'll cover: • Complete architecture • Production code examples • Performance optimization • Integration patterns All code examples and documentation will be shared ($597+ value). [Registration Link] Happy to discuss technical details, answer questions, and share learnings. What validation challenges are you facing with AI code? Comments URL: https://news.ycombinator.com/item?id=46124628 Points: 1 # Comments: 0

---

### 3. Ask HN: Saving/restoring web-app state–useful or pointless?

**Link:** [https://news.ycombinator.com/item?id=46124444](https://news.ycombinator.com/item?id=46124444)

**Published:** 12/2/2025

**Summary:** When working on large web apps, I often spend 30–90 minutes recreating the same flow just to reach the page I need to test. I’m validating an idea: A browser extension that can: - save the current app state (URL, localStorage, sessionStorage, cookies, form inputs, scroll) - and restore it instantly so developers don’t have to rebuild long flows during testing. Basically a “jump back to this exact screen and state” tool. Would this actually help your workflow? Or do most people rely on other methods (Cypress, mocks, backend resets, etc.)? Looking for honest, critical feedback. Comments URL: https://news.ycombinator.com/item?id=46124444 Points: 1 # Comments: 0

---

### 4. Show HN: JustHTML – A pure Python HTML5 parser that just works

**Link:** [https://github.com/EmilStenstrom/justhtml](https://github.com/EmilStenstrom/justhtml)

**Published:** 12/2/2025

**Summary:** I got frustrated with HTML parsing in Python. I wanted a Python HTML parser that was both correct and easy to install. The C-based ones (lxml, selectolax) are fast but not HTML5 compliant. The pure Python ones (html.parser, BeautifulSoup's default) are easy to install but choke on real-world HTML. html5lib is correct but painfully slow. So I wrote JustHTML. It's: • 100% HTML5 compliant – passes all 8,500+ html5lib tests. If a browser can parse it, JustHTML can. • Pure Python, zero dependencies – pip install and go. Works on PyPy, Pyodide, anywhere. • Fast enough – ~0.1s to parse Wikipedia's homepage. Not C-fast, but 50% faster than html5lib. • Simple API – doc.query("div.foo > p") with CSS selectors. One method to learn. Example:   from justhtml import JustHTML   doc = JustHTML(" Hello! ")   print(doc.query(".intro")[0].to_html())  Would love feedback, especially on the API design. Comments URL: https://news.ycombinator.com/item?id=46124443 Points: 2 # Comments: 0

---

## GitGuardian Blog

### 1. Mutual TLS (mTLS) Authentication - A Complete Guide 

**Link:** [https://blog.gitguardian.com/mutual-tls-mtls-authentication/](https://blog.gitguardian.com/mutual-tls-mtls-authentication/)

**Published:** 12/2/2025

**Summary:** mTLS, or mutual Transport Layer Security, is a mechanism that establishes two-way authentication between two parties, ensuring they are who they claim to be.

---

## StepSecurity Blog

### 1. Sha1-Hulud: The Second Coming - Zapier, ENS Domains, and Other Prominent NPM Packages Compromised

**Link:** [https://www.stepsecurity.io/blog/sha1-hulud-the-second-coming-zapier-ens-domains-and-other-prominent-npm-packages-compromised](https://www.stepsecurity.io/blog/sha1-hulud-the-second-coming-zapier-ens-domains-and-other-prominent-npm-packages-compromised)

**Published:** 12/2/2025

**Summary:** Sha1-Hulud: The Second Coming

---

## Endor Labs Blog

### 1. Rubrik Hits Aggressive SLAs via Endor Labs | Customer Story | Endor Labs

**Link:** [https://www.endorlabs.com/learn/rubrik-hits-aggressive-slas-via-endor-labs](https://www.endorlabs.com/learn/rubrik-hits-aggressive-slas-via-endor-labs)

**Published:** 12/2/2025

**Summary:** Founded in 2014, Rubrik is a comprehensive data security platform that delivers complete cyber resilience with both cyber posture and cyber recovery. Rubrik uses Endor Labs for SCA, SAST, container scanning, and secret detection.

---

### 2. Structuring Prompts for Secure Code Generation | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/structuring-prompts-for-secure-code-generation](https://www.endorlabs.com/learn/structuring-prompts-for-secure-code-generation)

**Published:** 12/1/2025

**Summary:** A practical guide to embedding security requirements into AI coding workflows

---

### 3. How to Defend Against NPM Software Supply Chain Attacks | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/how-to-defend-against-npm-software-supply-chain-attacks](https://www.endorlabs.com/learn/how-to-defend-against-npm-software-supply-chain-attacks)

**Published:** 12/1/2025

**Summary:** Practical steps security teams and developers can take to reduce risks from software supply chain attacks targeting the npm registry.

---

## The Hacker News

### 1. Researchers Capture Lazarus APT's Remote-Worker Scheme Live on Camera

**Link:** [https://thehackernews.com/2025/12/researchers-capture-lazarus-apts-remote.html](https://thehackernews.com/2025/12/researchers-capture-lazarus-apts-remote.html)

**Published:** 12/2/2025

**Summary:** A joint investigation led by Mauro Eldritch, founder of BCA LTD, conducted together with threat-intel initiative NorthScan and ANY.RUN, a solution for interactive malware analysis and threat intelligence, has uncovered one of North Korea’s most persistent infiltration schemes: a network of remote IT workers tied to Lazarus Group’s Famous Chollima division. For the first time, researchers managed

---

### 2. GlassWorm Returns with 24 Malicious Extensions Impersonating Popular Developer Tools

**Link:** [https://thehackernews.com/2025/12/glassworm-returns-with-24-malicious.html](https://thehackernews.com/2025/12/glassworm-returns-with-24-malicious.html)

**Published:** 12/2/2025

**Summary:** The supply chain campaign known as GlassWorm has once again reared its head, infiltrating both Microsoft Visual Studio Marketplace and Open VSX with 24 extensions impersonating popular developer tools and frameworks like Flutter, React, Tailwind, Vim, and Vue. GlassWorm was first documented in October 2025, detailing its use of the Solana blockchain for command-and-control (C2) and harvest npm,

---

### 3. Malicious npm Package Uses Hidden Prompt and Script to Evade AI Security Tools

**Link:** [https://thehackernews.com/2025/12/malicious-npm-package-uses-hidden.html](https://thehackernews.com/2025/12/malicious-npm-package-uses-hidden.html)

**Published:** 12/2/2025

**Summary:** Cybersecurity researchers have disclosed details of an npm package that attempts to influence artificial intelligence (AI)-driven security scanners. The package in question is eslint-plugin-unicorn-ts-2, which masquerades as a TypeScript extension of the popular ESLint plugin. It was uploaded to the registry by a user named "hamburgerisland" in February 2024. The package has been downloaded

---

### 4. Iran-Linked Hackers Hits Israeli Sectors with New MuddyViper Backdoor in Targeted Attacks

**Link:** [https://thehackernews.com/2025/12/iran-linked-hackers-hits-israeli_2.html](https://thehackernews.com/2025/12/iran-linked-hackers-hits-israeli_2.html)

**Published:** 12/2/2025

**Summary:** Israeli entities spanning academia, engineering, local government, manufacturing, technology, transportation, and utilities sectors have emerged as the target of a new set of attacks undertaken by Iranian nation-state actors that have delivered a previously undocumented backdoor called MuddyViper. The activity has been attributed by ESET to a hacking group known as MuddyWater (aka Mango

---

### 5. SecAlerts Cuts Through the Noise with a Smarter, Faster Way to Track Vulnerabilities

**Link:** [https://thehackernews.com/2025/12/secalerts-cuts-through-noise-with.html](https://thehackernews.com/2025/12/secalerts-cuts-through-noise-with.html)

**Published:** 12/2/2025

**Summary:** Vulnerability management is a core component of every cybersecurity strategy. However, businesses often use thousands of software without realising it (when was the last time you checked?), and keeping track of all the vulnerability alerts, notifications, and updates can be a burden on resources and often leads to missed vulnerabilities.  Taking into account that nearly 10% of

---

## JFrog Security Blog

### 1. PyTorch Users at Risk: Unveiling 3 Zero-Day PickleScan Vulnerabilities

**Link:** [https://jfrog.com/blog/unveiling-3-zero-day-vulnerabilities-in-picklescan/](https://jfrog.com/blog/unveiling-3-zero-day-vulnerabilities-in-picklescan/)

**Published:** 12/2/2025

**Summary:** AI Model Scanning as the First Layer of Security JFrog Security Research found 3 zero-day critical vulnerabilities in PickleScan, which would allow attackers to bypass the most popular Pickle model scanning tool. PickleScan is a widely used, industry-standard tool for scanning ML models and ensuring they contain no malicious content. Each discovered vulnerability enables attackers …

---

## Kiuwan Blog

### 1. Rethinking ASPM: From Signal Chaos to Defense in Depth

**Link:** [https://www.kiuwan.com/blog/aspm-defense-in-depth/](https://www.kiuwan.com/blog/aspm-defense-in-depth/)

**Published:** 12/2/2025

**Summary:** Rethinking ASPM: From Signal Chaos to Defense in Depth   We’ve reached an inflection point in application security. Teams are drowning in signals from SAST scanners, SCA tools, pull request checks, and code quality analyzers— each requiring attention and management. Application Security Posture Management (ASPM) has emerged to address this challenge but what does ASPM […]

---

## Bleeping Computer Security

### 1. Glassworm malware returns in third wave of malicious VS Code packages

**Link:** [https://www.bleepingcomputer.com/news/security/glassworm-malware-returns-in-third-wave-of-malicious-vs-code-packages/](https://www.bleepingcomputer.com/news/security/glassworm-malware-returns-in-third-wave-of-malicious-vs-code-packages/)

**Published:** 12/1/2025

**Summary:** The Glassworm campaign, which first emerged on the OpenVSX and Microsoft Visual Studio marketplaces in October, is now in its third wave, with 24 new packages added on the two platforms. [...]

---

## Schneier on Security

### 1. Banning VPNs

**Link:** [https://www.schneier.com/blog/archives/2025/12/banning-vpns.html](https://www.schneier.com/blog/archives/2025/12/banning-vpns.html)

**Published:** 12/1/2025

**Summary:** This is crazy. Lawmakers in several US states are contemplating banning VPNs, because…think of the children! As of this writing, Wisconsin lawmakers are escalating their war on privacy by targeting VPNs in the name of “protecting children” in A.B. 105/S.B. 130. It’s an age verification bill that requires all websites distributing material that could conceivably be deemed “sexual content” to both implement an age verification system and also to block the access of users connected via VPN. The bill seeks to broadly expand the definition of materials that are “harmful to minors” beyond the type of speech that states can prohibit minors from accessing­ potentially encompassing things like depictions and discussions of human anatomy, sexuality, and reproduction...

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

**Last Updated:** 2025-12-02T18:43:27.627Z
