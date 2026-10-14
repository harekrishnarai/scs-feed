# Supply Chain Security Daily Report
**Date:** 2026-10-14
**Total Reports Found:** 20

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Petal, open-source CoScreen/ScreenHero finally free

**Link:** [https://petal.live/](https://petal.live/)

**Published:** 10/14/2026

**Summary:** Hi HN! I’m Jason Thomas, one of the founders of CoScreen. As some of you may know, Datadog sunset the CoScreen service on July 31st. Four of us from the original CoScreen team have spent the last couple months building a free and open source pair programming tool inspired by those that came before us: It’s called Petal (https://github.com/kiruna-labs/petal) Some history first, because when we started CoScreen we had hoped to break the sad and established pattern of this industry. Screenhero was an exceptional tool that a lot of us loved for pairing. Multiple cursors, low latency, you could click your partner’s editor, and just start typing. It felt like magic while we had it. Then Slack bought it in 2015, and shut down the standalone app in December 2017. When Till, Max, and I started CoScreen, we were aware of this history, and wanted to build an even more magical collaboration and screen sharing experience: the entire concept was “throw a window from your laptop up on someone else’s screen, and start collaborating with zero friction.” Datadog acquired us in 2022, and thus began the great adventure of adapting our real-time technology into Datadog products, while also continue developing CoScreen as a standalone tool from the Datadog ecosystem. Datadog invested in the product for years and we’re thankful for that. But CoScreen itself proved, like so many other screen sharing tool acquisitions, to be too tangential from the customer base and core mission. We instead built other communication features in Datadog, the integrations with other video platforms, and also its wildly successful MCP server. We weren't the only ones. Around was bought by Miro and shut down in March 2025. Multi (formerly Remotion) was acqui-hired by OpenAI in 2024 and shut down about a month later. It's nearly always the same story: a small team builds something hard that people love, a platform buys it for the team or the feature, and the standalone product doesn't survive the integration. So we decided firmly to do things differently this time. Petal is completely free and open source and we aren't monetizing it. If we lose interest or get hit by a bus, you can self-host it or fork it, and nobody can sunset it on you. Honestly it's a love letter to everyone in this community that supported us, believed in us, and to liberate collaborative screen sharing from this vicious cycle. We hope through this we can help foster a large and vibrant community around innovating in this product sector. What Petal does: shared windows show up as real windows on your desktop, movable and resizable, not tiles in a grid. Several people can share at once, everyone gets a labeled cursor, and you can click into any shared window to type and scroll. Rooms are persistent, so you click once to join "eng-sync" instead of passing links around. It runs on macOS and Windows (Linux is next, this time for real and you can help us!), plus a web app. Media goes over LiveKit. You can use our hosted instance with zero config, or point the app at your own LiveKit server with one docker-compose if you want the traffic to stay on your network or even use an entirely different video backend if you want to. The part that still feels strange to us: CoScreen took almost six years to build. The first version of Petal took under eight weeks, from scratch, with frontier models like Fable and Astra doing a lot of the work. Real-time video and window capture is some of the most unforgiving code we have ever written, so we didn't expect that. We will do a proper writeup on what worked and what didn't, and are happy to answer questions about it here. Till, Darren, Max and I will be in the thread. Comments URL: https://news.ycombinator.com/item?id=50092470 Points: 4 # Comments: 1

---

### 2. Reverse-Engineered: search 10k open-source tools

**Link:** [http://awesome.alexgaoth.com/](http://awesome.alexgaoth.com/)

**Published:** 10/14/2026

**Summary:** Article URL: http://awesome.alexgaoth.com/ Comments URL: https://news.ycombinator.com/item?id=50092374 Points: 2 # Comments: 0

---

## Bleeping Computer Security

### 1. Ledger asks sellers across Asia to halt sales after supply-chain attack

**Link:** [https://www.bleepingcomputer.com/news/security/ledger-asks-sellers-across-asia-to-halt-sales-after-supply-chain-attack/](https://www.bleepingcomputer.com/news/security/ledger-asks-sellers-across-asia-to-halt-sales-after-supply-chain-attack/)

**Published:** 10/14/2026

**Summary:** Ledger has asked resellers and distributors of its wallets in Indonesia, Singapore, Thailand, the Philippines, Vietnam, Malaysia, and Hong Kong to suspend device sales and remove products from shelves while it investigates device tampering. [...]

---

### 2. UK Housing Ombudsman Service investigates 'security incident'

**Link:** [https://www.bleepingcomputer.com/news/security/uk-housing-ombudsman-service-investigates-security-incident/](https://www.bleepingcomputer.com/news/security/uk-housing-ombudsman-service-investigates-security-incident/)

**Published:** 10/13/2026

**Summary:** The U.K. Housing Ombudsman Service is investigating a third-party IT security incident that impacted its case management system on Tuesday. [...]

---

## Schneier on Security

### 1. Cyberattack on Connected Fridges in France

**Link:** [https://www.schneier.com/blog/archives/2026/10/cyberattack-on-connected-fridges-in-france.html](https://www.schneier.com/blog/archives/2026/10/cyberattack-on-connected-fridges-in-france.html)

**Published:** 10/14/2026

**Summary:** Another IoT cyberattack, this one in France: Hackers gained control of the software that regulates the temperatures of the refrigeration units, forcing some to warm to 50C (120F) overnight, according to one supermarket chain affected. […] Normally, supermarket freezers go through a short period of defrosting overnight, in which temperatures rise slightly. But the hackers ordered the units to heat up and stay hot, although Danfoss did not confirm any reports about just how warm the fridges and freezers could become in that process. Danfoss said the affected cold units were older models whose security software could not be updated to ward off a risk they had identified...

---

## GitGuardian Blog

### 1. Why We Built the Good Samaritan Program

**Link:** [https://blog.gitguardian.com/why-we-built-the-good-samaritan-program/](https://blog.gitguardian.com/why-we-built-the-good-samaritan-program/)

**Published:** 10/14/2026

**Summary:** The first thing GitGuardian ever shipped was a free warning. Now we’re making sure it gets heard.

---

### 2. AI Agent Security: Best Practices for Safe Deployment

**Link:** [https://blog.gitguardian.com/ai-agent-security-best-practices/](https://blog.gitguardian.com/ai-agent-security-best-practices/)

**Published:** 10/13/2026

**Summary:** Six AI agent security best practices for teams running coding agents and MCP servers: limit what a compromised agent can reach and catch credential misuse.

---

## The Hacker News

### 1. curl Patches HTTP/2 Upload Flaw After PoC Demonstrates Client-Side Code Execution

**Link:** [https://thehackernews.com/2026/10/curl-patches-http2-upload-flaw-after.html](https://thehackernews.com/2026/10/curl-patches-http2-upload-flaw-after.html)

**Published:** 10/14/2026

**Summary:** A flaw in how curl handles HTTP/2 uploads lets a malicious server receiving an upload corrupt the client's memory, and the researcher who reported it turned that into code execution on the uploading machine.  The curl project fixed it on October 14 in curl 8.23.0. Taking over a client needs exact knowledge of its build and memory layout, and curl expects a real attack to end in a crash

---

### 2. Hirudo Android Trojan Uses Patched Banking Apps to Bypass Their Built-In Security Checks

**Link:** [https://thehackernews.com/2026/10/hirudo-android-trojan-uses-patched.html](https://thehackernews.com/2026/10/hirudo-android-trojan-uses-patched.html)

**Published:** 10/14/2026

**Summary:** Cybersecurity researchers have disclosed details of a new Android banking trojan called Hirudo that works by replacing legitimate banking apps with purpose-built patched versions designed to bypass security checks from inside the app itself, marking a new escalation in financial fraud.   Dutch mobile security company ThreatFabric said it identified replacements for eight Indonesian banking

---

### 3. GitHub Tightens npm Publishing After Flaw Left 1,500+ Packages Vulnerable to Hijacking

**Link:** [https://thehackernews.com/2026/10/github-tightens-npm-publishing-after.html](https://thehackernews.com/2026/10/github-tightens-npm-publishing-after.html)

**Published:** 10/13/2026

**Summary:** GitHub has taken the step of expiring unvalidated npm trusted publishing configurations 48 hours after creation after researchers found that it was possible for an attacker to push new versions of a different user's package without having to steal their credentials.  "Your configuration becomes validated and exempt from expiry after its first successful publish," the Microsoft-owned subsidiary

---

### 4. [Webinar] How to Stop AI-Driven Privilege Escalation With Runtime Identity Controls

**Link:** [https://thehackernews.com/2026/10/webinar-how-to-stop-ai-driven-privilege.html](https://thehackernews.com/2026/10/webinar-how-to-stop-ai-driven-privilege.html)

**Published:** 10/13/2026

**Summary:** The dangerous part of a stolen identity isn't always the initial login. It's what an attacker can do with that access next.  With AI accelerating reconnaissance, exploitation of vulnerabilities, and privilege escalation, attackers can move through systems faster than security teams can investigate. A compromised account that looks legitimate at first could become the starting point for a much

---

### 5. Low-Cost Android Phones Ship With Preinstalled Malware That Turns Them Into Residential Proxies

**Link:** [https://thehackernews.com/2026/10/low-cost-android-phones-ship-with.html](https://thehackernews.com/2026/10/low-cost-android-phones-ship-with.html)

**Published:** 10/13/2026

**Summary:** Low-cost Android smartphones have been shipped with malicious software baked into the device firmware, allowing bad actors to covertly install apps, conduct ad fraud, and turn devices into residential proxies.  The activity, which targets Android devices built on MediaTek platforms across several brands, is being tracked by Bitdefender under the moniker Midnight Mimosa.  The preinstalled

---

## Sonatype Security Research

### 1. Trust What Ships: Your Repository Is Now Your First Defense

**Link:** [https://www.sonatype.com/blog/trust-what-ships-your-repository-is-now-your-first-defense](https://www.sonatype.com/blog/trust-what-ships-your-repository-is-now-your-first-defense)

**Published:** 10/14/2026

**Summary:** The first defense for trustworthy software is deciding what enters the build.

---

## Endor Labs Blog

### 1. Learn how Endor Labs detects malicious VS Code extensions | Endor Labs

**Link:** [https://www.endorlabs.com/learn/introducing-package-firewall-for-vs-code-extensions-detect-and-block-malicious-extensions-from-the-ide](https://www.endorlabs.com/learn/introducing-package-firewall-for-vs-code-extensions-detect-and-block-malicious-extensions-from-the-ide)

**Published:** 10/13/2026

**Summary:** Learn how Endor Labs detects malicious VS Code extensions and poisoned updates and blocks them with Package Firewall before they reach developer workstations.

---

### 2. Executive Order 14028 SBOM Requirements: What to Comply With and How | Endor Labs

**Link:** [https://www.endorlabs.com/learn/executive-order-14028-sbom-requirements](https://www.endorlabs.com/learn/executive-order-14028-sbom-requirements)

**Published:** 10/13/2026

**Summary:** Executive Order 14028 SBOM requirements explained: learn what changed, who must comply, and how to build a practical, risk-based SBOM program

---

### 3. What Is SAST? Static Analysis in the Age of AI-Generated Code | Endor Labs

**Link:** [https://www.endorlabs.com/learn/what-is-sast](https://www.endorlabs.com/learn/what-is-sast)

**Published:** 10/13/2026

**Summary:** Learn the SAST Static Application Security Testing definition OWASP uses, how SAST works, what it finds, and where it fits in AppSec

---

### 4. How to Use Reachability to Cut Vulnerability Alerts | Endor Labs

**Link:** [https://www.endorlabs.com/learn/how-to-use-reachability-to-reduce-vulnerability-alerts](https://www.endorlabs.com/learn/how-to-use-reachability-to-reduce-vulnerability-alerts)

**Published:** 10/13/2026

**Summary:** See how application security vulnerability reachability reduce alerts by filtering noise, proving real risk, and speeding fixes

---

### 5. What Is DevSecOps? How the Practice Changes When Agents Fix Code | Endor Labs

**Link:** [https://www.endorlabs.com/learn/what-is-devsecops-a-one-sentence-definition](https://www.endorlabs.com/learn/what-is-devsecops-a-one-sentence-definition)

**Published:** 10/13/2026

**Summary:** Learn what is devsecops, how it embeds security into every stage of software delivery, and why it helps teams ship faster with less risk

---

## Krebs on Security

### 1. Microsoft Patches More Than 1,400 Security Flaws

**Link:** [https://krebsonsecurity.com/2026/10/microsoft-patches-more-than-1400-security-flaws/](https://krebsonsecurity.com/2026/10/microsoft-patches-more-than-1400-security-flaws/)

**Published:** 10/13/2026

**Summary:** Microsoft today issued updates to fix more than 1,400 security vulnerabilities in its Windows operating systems and other software. Today's epic patch batch dwarfs September's record of nearly 1,000 fixes, which was already about ten times the normal monthly patch load from Redmond.

---

## GitHub Security Blog

### 1. GitHub’s model for secret detection: Finding more secrets with less noise

**Link:** [https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/](https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/)

**Published:** 10/13/2026

**Summary:** GitHub’s context-aware secret classifier improves detection quality, raises weighted acceptance by 11.5%, and reduces median scan execution time by 86%. The post GitHub’s model for secret detection: Finding more secrets with less noise appeared first on The GitHub Blog.

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

**Last Updated:** 2026-10-14T18:41:33.644Z
