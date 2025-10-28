# Supply Chain Security Daily Report
**Date:** 2025-10-28
**Total Reports Found:** 15

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Open-source SDK to generate UI-based CUA tools or RPA scripts on macOS

**Link:** [https://github.com/HarishgunaS/sisypho-sdk](https://github.com/HarishgunaS/sisypho-sdk)

**Published:** 10/28/2025

**Summary:** My friend and I were building UI-based automation tools for small businesses and kept running into a few recurring problems: - Computer-use agents (CUAs) are powerful, but often unreliable and slow when controlling UIs directly. - Workflows vary — some can be handled deterministically by RPAs, while others need a bit more intelligence from CUAs (while they may share a lot of the same 'actions'). We wanted an easier way to record UI-based automation scripts that could: - Be run by humans, like a lightweight RPA, or - Be invoked by CUAs as tool calls — improving their reliability and speed. So we open-sourced the SDK we’ve been using internally. It currently works on macOS, and lets you: - Record desktop interactions with any app that exposes accessibility info  - Record browser interactions via the Chrome extension (link on the github). - Replay recordings deterministically like an RPA, or integrate the generated UI script as a callable tool for your CUA. We’d love feedback from anyone working on UI automation, RPAs, or CUAs — especially around reliability and edge-case handling. Comments URL: https://news.ycombinator.com/item?id=45736923 Points: 1 # Comments: 0

---

### 2. Show HN: Radar – Open-Source GitHub Notifications for Slack

**Link:** [https://github.com/zlwaterfield/radar](https://github.com/zlwaterfield/radar)

**Published:** 10/28/2025

**Summary:** Hey HN! I'm Zach, and I built Radar – an open-source app that makes GitHub notifications actually manageable through Slack. Links: https://radar.town/, https://github.com/zlwaterfield/radar The Problem I Was Solving If you're working on a team with multiple repos and active contributors, GitHub notifications become impossible to manage. Critical PRs get buried, you miss review requests, and that one issue tagged with your name from three days ago? Forgotten. The native GitHub Slack app and tools like Toast are decent, but I kept running into limitations and wanted something I could customize and extend myself. What Radar Does Radar connects your GitHub repos to Slack with smart, role-based notifications. It knows if you're the PR author, a reviewer, or an assignee, and routes notifications accordingly. Some features I'm excited about: Near real-time webhook-based delivery, Keyword matching using AI to catch important mentions even when you're not directly tagged, Configurable digest notifications (get a summary of PR activity at times that work for you), Full support for PRs, issues, reviews, and comments Hosted vs. Self-Hosted I'm running a hosted version, but the entire codebase is open source. The costs add up—webhook storage, constant background job processing, and keeping everything in real-time requires a decent amount of compute. That's why there's a paid tier for the hosted version. But if you want to run it yourself, you absolutely can. The "Open Source Mode" lets you self-host with full features and zero billing setup. You'll need to manage your own infrastructure (webhooks, background workers, database), but you get complete control and customization. Why Open Source I took inspiration from Toast, the GitHub Slack app, and Graphite, but wanted something lighter and more hackable. Open-sourcing it means the community can contribute features, fix bugs, and extend it in ways I haven't thought of. Plus, you're not locked into a vendor if you want to build custom routing logic or integrations. The Honest Part This is an early beta. There will be bugs. The setup requires some work (Slack app, GitHub OAuth, Trigger.dev for jobs, and ngrok for local webhooks if you're developing). But it works—I use it daily and it's genuinely made my life easier. Security I know this app needs a lot of access, so I tried to limit the access to only what's needed. All GitHub permissions are read-only. No code is read or stored. All the notifications are based off the Pull Request and Issue metadata, comments, descriptions, etc. If you have questions on this I'm happy to iterate and improve. What I'm Looking For Feedback! What notification patterns drive you crazy? What features from other tools are must-haves? Any edge cases or bugs you encounter? I'm actively working on this and want to build what's actually useful. The repo has full setup docs for both hosted and self-hosted. Try whichever fits your needs, and let me know what you think—especially if GitHub notification overload is something you struggle with too. Comments URL: https://news.ycombinator.com/item?id=45736819 Points: 1 # Comments: 0

---

### 3. Making sense of principal component analysis, eigenvectors and eigenvalues

**Link:** [https://stats.stackexchange.com/questions/2691/making-sense-of-principal-component-analysis-eigenvectors-eigenvalues](https://stats.stackexchange.com/questions/2691/making-sense-of-principal-component-analysis-eigenvectors-eigenvalues)

**Published:** 10/28/2025

**Summary:** Article URL: https://stats.stackexchange.com/questions/2691/making-sense-of-principal-component-analysis-eigenvectors-eigenvalues Comments URL: https://news.ycombinator.com/item?id=45736725 Points: 1 # Comments: 1

---

## JFrog Security Blog

### 1. JFrog & GitHub: Unifying the Software Supply Chain, One Step at a Time… and Our 2025 GitHub Technology Partner Award

**Link:** [https://jfrog.com/blog/jfrog-github-2025-technology-partner-award/](https://jfrog.com/blog/jfrog-github-2025-technology-partner-award/)

**Published:** 10/28/2025

**Summary:** Organizations increasingly demand platforms that not only accelerate software delivery but also provide trust, security, and traceability. At JFrog, the software supply chain is managed and secured by default, from commit to runtime. That’s why our deep integration with GitHub is central to how we help teams manage, monitor, and secure every step of software …

---

### 2. Introducing JFrog Fly: The World’s First Agentic Artifact Repository

**Link:** [https://jfrog.com/blog/introducing-jfrog-fly-agentic-artifact-repository/](https://jfrog.com/blog/introducing-jfrog-fly-agentic-artifact-repository/)

**Published:** 10/28/2025

**Summary:** AI has created a paradigm shift in software development. AI-native development teams – from small startups to enterprises like Goldman Sachs and Google – are adopting agentic development tools like Cursor and Copilot to increase the speed of code generation to a pace we’ve never seen before. But with all this new code comes a …

---

## The Hacker News

### 1. New Android Trojan 'Herodotus' Outsmarts Anti-Fraud Systems by Typing Like a Human

**Link:** [https://thehackernews.com/2025/10/new-android-trojan-herodotus-outsmarts.html](https://thehackernews.com/2025/10/new-android-trojan-herodotus-outsmarts.html)

**Published:** 10/28/2025

**Summary:** Cybersecurity researchers have disclosed details of a new Android banking trojan called Herodotus that has been observed in active campaigns targeting Italy and Brazil to conduct device takeover (DTO) attacks. "Herodotus is designed to perform device takeover while making first attempts to mimic human behaviour and bypass behaviour biometrics detection," ThreatFabric said in a report shared with

---

### 2. Researchers Expose GhostCall and GhostHire: BlueNoroff's New Malware Chains

**Link:** [https://thehackernews.com/2025/10/researchers-expose-ghostcall-and.html](https://thehackernews.com/2025/10/researchers-expose-ghostcall-and.html)

**Published:** 10/28/2025

**Summary:** Threat actors tied to North Korea have been observed targeting the Web3 and blockchain sectors as part of twin campaigns tracked as GhostCall and GhostHire. According to Kaspersky, the campaigns are part of a broader operation called SnatchCrypto that has been underway since at least 2017. The activity is attributed to a Lazarus Group sub-cluster called BlueNoroff, which is also known as APT38,

---

### 3. New ChatGPT Atlas Browser Exploit Lets Attackers Plant Persistent Hidden Commands

**Link:** [https://thehackernews.com/2025/10/new-chatgpt-atlas-browser-exploit-lets.html](https://thehackernews.com/2025/10/new-chatgpt-atlas-browser-exploit-lets.html)

**Published:** 10/27/2025

**Summary:** Cybersecurity researchers have discovered a new vulnerability in OpenAI's ChatGPT Atlas web browser that could allow malicious actors to inject nefarious instructions into the artificial intelligence (AI)-powered assistant's memory and run arbitrary code. "This exploit can allow attackers to infect systems with malicious code, grant themselves access privileges, or deploy malware," LayerX

---

### 4. ⚡ Weekly Recap: WSUS Exploited, LockBit 5.0 Returns, Telegram Backdoor, F5 Breach Widens

**Link:** [https://thehackernews.com/2025/10/weekly-recap-wsus-exploited-lockbit-50.html](https://thehackernews.com/2025/10/weekly-recap-wsus-exploited-lockbit-50.html)

**Published:** 10/27/2025

**Summary:** Security, trust, and stability — once the pillars of our digital world — are now the tools attackers turn against us. From stolen accounts to fake job offers, cybercriminals keep finding new ways to exploit both system flaws and human behavior. Each new breach proves a harsh truth: in cybersecurity, feeling safe can be far more dangerous than being alert. Here’s how that false sense of security

---

### 5. ChatGPT Atlas Browser Can Be Tricked by Fake URLs into Executing Hidden Commands

**Link:** [https://thehackernews.com/2025/10/chatgpt-atlas-browser-can-be-tricked-by.html](https://thehackernews.com/2025/10/chatgpt-atlas-browser-can-be-tricked-by.html)

**Published:** 10/27/2025

**Summary:** The newly released OpenAI ChatGPT Atlas web browser has been found to be susceptible to a prompt injection attack where its omnibox can be jailbroken by disguising a malicious prompt as a seemingly harmless URL to visit. "The omnibox (combined address/search bar) interprets input either as a URL to navigate to, or as a natural-language command to the agent," NeuralTrust said in a report

---

## Schneier on Security

### 1. Social Engineering People’s Credit Card Details

**Link:** [https://www.schneier.com/blog/archives/2025/10/social-engineering-peoples-credit-card-details.html](https://www.schneier.com/blog/archives/2025/10/social-engineering-peoples-credit-card-details.html)

**Published:** 10/28/2025

**Summary:** Good Wall Street Journal article on criminal gangs that scam people out of their credit card information: Your highway toll payment is now past due, one text warns. You have U.S. Postal Service fees to pay, another threatens. You owe the New York City Department of Finance for unpaid traffic violations. The texts are ploys to get unsuspecting victims to fork over their credit-card details. The gangs behind the scams take advantage of this information to buy iPhones, gift cards, clothing and cosmetics. Criminal organizations operating out of China, which investigators blame for the toll and postage messages, have used them to make more than $1 billion over the last three years, according to the Department of Homeland Security...

---

### 2. Louvre Jewel Heist

**Link:** [https://www.schneier.com/blog/archives/2025/10/louvre-jewel-heist.html](https://www.schneier.com/blog/archives/2025/10/louvre-jewel-heist.html)

**Published:** 10/27/2025

**Summary:** I assume I don’t have to explain last week’s Louvre jewel heist. I love a good caper, and have (like many others) eagerly followed the details. An electric ladder to a second-floor window, an angle grinder to get into the room and the display cases, security guards there more to protect patrons than valuables—seven minutes, in and out. There were security lapses: The Louvre, it turns out—at least certain nooks of the ancient former palace—is something like an anopticon: a place where no one is observed. The world now knows what the four thieves (two burglars and two accomplices) realized as recently as last week: The museum’s Apollo Gallery, which housed the stolen items, was monitored by a single outdoor camera angled away from its only exterior point of entry, a balcony. In other words, a free-roaming Roomba could have provided the world’s most famous museum with more information about the interior of this space. There is no surveillance footage of the break-in...

---

## Endor Labs Blog

### 1. From Shift Left to Shift Down: Making SAST Work for Developers | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/from-shift-left-to-shift-down-making-sast-work-for-developers](https://www.endorlabs.com/learn/from-shift-left-to-shift-down-making-sast-work-for-developers)

**Published:** 10/27/2025

**Summary:** Shift-left security programs are failing and SAST is partly to blame. Shifting security down, not left, is how we make it work for developers.

---

## Bleeping Computer Security

### 1. Italian spyware vendor linked to Chrome zero-day attacks

**Link:** [https://www.bleepingcomputer.com/news/security/italian-spyware-vendor-linked-to-chrome-zero-day-attacks/](https://www.bleepingcomputer.com/news/security/italian-spyware-vendor-linked-to-chrome-zero-day-attacks/)

**Published:** 10/27/2025

**Summary:** A zero-day vulnerability in Google Chrome exploited in Operation ForumTroll earlier this year delivered malware linked to Italian spyware vendor Memento Labs, born after IntheCyber ​​Group acquired the infamous Hacking Team. [...]

---

## GitGuardian Blog

### 1. Scanning GitHub Gists for Secrets with Bring Your Own Source

**Link:** [https://blog.gitguardian.com/scanning-github-gists-for-secrets/](https://blog.gitguardian.com/scanning-github-gists-for-secrets/)

**Published:** 10/27/2025

**Summary:** Developers treat GitHub Gists as a "paste everything" service, accidentally exposing secrets like API keys and tokens. BYOS lets you scan and monitor these blind spots.

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

**Last Updated:** 2025-10-28T18:41:34.574Z
