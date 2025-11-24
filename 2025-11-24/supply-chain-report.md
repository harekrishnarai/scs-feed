# Supply Chain Security Daily Report
**Date:** 2025-11-24
**Total Reports Found:** 18

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Installing Java in 2025, and Version Managers

**Link:** [https://blog.hakanserce.com/post/version_managers/](https://blog.hakanserce.com/post/version_managers/)

**Published:** 11/24/2025

**Summary:** Article URL: https://blog.hakanserce.com/post/version_managers/ Comments URL: https://news.ycombinator.com/item?id=46037261 Points: 1 # Comments: 0

---

### 2. Building CallSpark (browser based VoIP): what I learned and what caused pain

**Link:** [https://news.ycombinator.com/item?id=46037226](https://news.ycombinator.com/item?id=46037226)

**Published:** 11/24/2025

**Summary:** I’ve been building CallSpark, a browser-based calling platform. The core VoIP flow through Twilio’s browser SDK worked as advertised. The hard parts were elsewhere. The easy part Twilio’s SDK was straightforward. Initialize a Device, pass in a token, call connect.  WebRTC and audio quality held up without much tuning. The real problems 1. Call state inside the browser The SDK emits events at the right times, but React state doesn’t always represent what the call is actually doing.  UI components mount, unmount, or re-render, and state drifts. I wanted the call to remain online even if the user goes to any other page in-app. A call may still be active while the UI falsely thinks it’s disconnected, or vice versa. I ended up keeping a global reference to the active call and broadcasting custom events so every component could stay aligned. It’s not elegant, but it’s the only approach that consistently kept the UI accurate. Twilio also doesn’t provide a reliable “call started” timestamp, so I track it myself but obviously I can't use it for billing. 2. Real-time billing I wanted per-second (or per minute) billing while the call is active.  Twilio’s post-call webhook isn’t useful for real-time checks because it arrives only after the call finishes. And it does not always contains the call cost. My backend runs a periodic worker that finds active calls, computes how much time has passed since the last charge, deducts credits, and ends the call if the user runs out of balance.  This part works, but you quickly run into edge cases. If the worker misses a cycle, you have to reconcile without double-charging.. The browser UI might vanish, but billing and call state must continue accurately. The solution I found was partial billing (roast me on this if you want). A worker runs every ten seconds and looks at all active calls. If the user has enough balance to cover the next ten seconds, the call continues. If not, it ends. After each interval, the worker reserves the cost for the previous ten seconds. When the call ends, twilio tells us with webhook, and I reconcile how much I debited from credits, how much must actually be debited etc etc. What I’m still solving A better pattern for keeping client-side call state aligned without falling back to global objects. A clean way to handle situations where the browser UI disappears mid-call but the call itself continues normally on the backend. Questions for the community > If you’ve built real-time billing for VoIP, how did you structure it. > How did you maintain accurate browser UI state for long-lived calls. > Any lessons from working with Twilio’s browser SDK. Comments URL: https://news.ycombinator.com/item?id=46037226 Points: 1 # Comments: 0

---

## Endor Labs Blog

### 1. Shai-Hulud 2 Malware Campaign Targets GitHub and Cloud Credentials Using Bun Runtime  | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/shai-hulud-2-malware-campaign-targets-github-and-cloud-credentials-using-bun-runtime](https://www.endorlabs.com/learn/shai-hulud-2-malware-campaign-targets-github-and-cloud-credentials-using-bun-runtime)

**Published:** 11/24/2025

**Summary:** Analysis of Shai-Hulud 2, a new npm supply chain attack using Bun for execution, credential theft, and CI/CD propagation, with mitigation guidance.

---

### 2. The Great Indonesian TEA Theft: Analyzing a NPM Spam Campaign | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/the-great-indonesian-tea-theft-analyzing-a-npm-spam-campaign](https://www.endorlabs.com/learn/the-great-indonesian-tea-theft-analyzing-a-npm-spam-campaign)

**Published:** 11/24/2025

**Summary:** How a sophisticated spam campaign hijacked popular NPM packages with Indonesian food names as part of a global software supply chain attack.

---

### 3. People.ai Transforms Security and Compliance with Endor Labs | Customer Story | Endor Labs

**Link:** [https://www.endorlabs.com/learn/people-ai-transforms-security-and-compliance-with-endor-labs](https://www.endorlabs.com/learn/people-ai-transforms-security-and-compliance-with-endor-labs)

**Published:** 11/24/2025

**Summary:** People.ai replaced Snyk with Endor Labs for application security that provides an outstanding developer experience and makes it easier (and cheaper) to hit compliance targets.

---

## GitGuardian Blog

### 1. Shai-Hulud 2.0: over 14,000 secrets exposed

**Link:** [https://blog.gitguardian.com/shai-hulud-2/](https://blog.gitguardian.com/shai-hulud-2/)

**Published:** 11/24/2025

**Summary:** On November 24, a new wave of the Shai-Hulud supply chain attack emerged. The threat actors exfiltrate stolen credentials directly to GitHub repositories created with compromised tokens. GitGuardian identified 14,206 secrets across 487 organizations, with 2,485 still valid.

---

### 2. OWASP Top 10 2025 Updates: Supply Chain, Secrets, And Misconfigurations Take Center Stage

**Link:** [https://blog.gitguardian.com/owasp-top-10-2025/](https://blog.gitguardian.com/owasp-top-10-2025/)

**Published:** 11/24/2025

**Summary:** Discover what’s changed in the OWASP 2025 Top 10 and how GitGuardian helps you mitigate risks like broken access control and software supply chain failures.

---

## The Hacker News

### 1. New Fluent Bit Flaws Expose Cloud to RCE and Stealthy Infrastructure Intrusions

**Link:** [https://thehackernews.com/2025/11/new-fluent-bit-flaws-expose-cloud-to.html](https://thehackernews.com/2025/11/new-fluent-bit-flaws-expose-cloud-to.html)

**Published:** 11/24/2025

**Summary:** Cybersecurity researchers have discovered five vulnerabilities in Fluent Bit, an open-source and lightweight telemetry agent, that could be chained to compromise and take over cloud infrastructures. The security defects "allow attackers to bypass authentication, perform path traversal, achieve remote code execution, cause denial-of-service conditions, and manipulate tags," Oligo Security said in

---

### 2. Second Sha1-Hulud Wave Affects 25,000+ Repositories via npm Preinstall Credential Theft

**Link:** [https://thehackernews.com/2025/11/second-sha1-hulud-wave-affects-25000.html](https://thehackernews.com/2025/11/second-sha1-hulud-wave-affects-25000.html)

**Published:** 11/24/2025

**Summary:** Multiple security vendors are sounding the alarm about a second wave of attacks targeting the npm registry in a manner that's reminiscent of the Shai-Hulud attack. The new supply chain campaign, dubbed Sha1-Hulud, has compromised hundreds of npm packages, according to reports from Aikido, HelixGuard, Koi Security, Socket, Step Security, and Wiz. The trojanized npm packages were uploaded to

---

### 3. ⚡ Weekly Recap: Fortinet Exploit, Chrome 0-Day, BadIIS Malware, Record DDoS, SaaS Breach & More

**Link:** [https://thehackernews.com/2025/11/weekly-recap-fortinet-exploit-chrome-0.html](https://thehackernews.com/2025/11/weekly-recap-fortinet-exploit-chrome-0.html)

**Published:** 11/24/2025

**Summary:** This week saw a lot of new cyber trouble. Hackers hit Fortinet and Chrome with new 0-day bugs. They also broke into supply chains and SaaS tools. Many hid inside trusted apps, browser alerts, and software updates. Big firms like Microsoft, Salesforce, and Google had to react fast — stopping DDoS attacks, blocking bad links, and fixing live flaws. Reports also showed how fast fake news, AI

---

### 4. ShadowPad Malware Actively Exploits WSUS Vulnerability for Full System Access

**Link:** [https://thehackernews.com/2025/11/shadowpad-malware-actively-exploits.html](https://thehackernews.com/2025/11/shadowpad-malware-actively-exploits.html)

**Published:** 11/24/2025

**Summary:** A recently patched security flaw in Microsoft Windows Server Update Services (WSUS) has been exploited by threat actors to distribute malware known as ShadowPad. "The attacker targeted Windows Servers with WSUS enabled, exploiting CVE-2025-59287 for initial access," AhnLab Security Intelligence Center (ASEC) said in a report published last week. "They then used PowerCat, an open-source

---

## Bleeping Computer Security

### 1. Shai-Hulud malware infects 500 npm packages, leaks secrets on GitHub

**Link:** [https://www.bleepingcomputer.com/news/security/shai-hulud-malware-infects-500-npm-packages-leaks-secrets-on-github/](https://www.bleepingcomputer.com/news/security/shai-hulud-malware-infects-500-npm-packages-leaks-secrets-on-github/)

**Published:** 11/24/2025

**Summary:** Hundreds of trojanized versions of well-known packages such as Zapier, ENS Domains, PostHog, and Postman have been planted in the npm registry in a new Shai-Hulud supply-chain campaign. [...]

---

### 2. Microsoft: Windows 11 24H2 bug crashes Explorer and Start Menu

**Link:** [https://www.bleepingcomputer.com/news/microsoft/microsoft-windows-11-24h2-bug-crashes-key-system-components/](https://www.bleepingcomputer.com/news/microsoft/microsoft-windows-11-24h2-bug-crashes-key-system-components/)

**Published:** 11/24/2025

**Summary:** Microsoft has confirmed a critical Windows 11 24H2 bug that causes the File Explorer, the Start Menu, and other key system components to crash when provisioning systems with cumulative updates released since July 2025. [...]

---

### 3. Iberia discloses customer data leak after vendor security breach

**Link:** [https://www.bleepingcomputer.com/news/security/iberia-discloses-customer-data-leak-after-vendor-security-breach/](https://www.bleepingcomputer.com/news/security/iberia-discloses-customer-data-leak-after-vendor-security-breach/)

**Published:** 11/23/2025

**Summary:** Spanish flag carrier Iberia has begun notifying customers of a data security incident stemming from a compromise at one of its suppliers. The disclosure comes days after a threat actor claimed on hacker forums to have access to 77 GB of data allegedly stolen from the airline. [...]

---

## StepSecurity Blog

### 1. Sha1-Hulud: The Second Coming - Zapier, ENS Domains, and Other Prominent NPM Packages Compromised

**Link:** [https://www.stepsecurity.io/blog/sha1-hulud-the-second-coming-zapier-ens-domains-and-other-prominent-npm-packages-compromised](https://www.stepsecurity.io/blog/sha1-hulud-the-second-coming-zapier-ens-domains-and-other-prominent-npm-packages-compromised)

**Published:** 11/24/2025

**Summary:** Sha1-Hulud: The Second Coming

---

### 2. 9,000 Open-Source Projects Now Secured by Harden-Runner 

**Link:** [https://www.stepsecurity.io/blog/9-000-open-source-projects-now-secured-by-harden-runner](https://www.stepsecurity.io/blog/9-000-open-source-projects-now-secured-by-harden-runner)

**Published:** 11/23/2025

**Summary:** StepSecurity Harden-Runner now protects 9,000+ open-source projects, delivering real-time CI/CD runtime security and defending pipelines against modern supply chain attacks.

---

### 3. Shai-Hulud: Self-Replicating Worm Compromises 500+ NPM Packages

**Link:** [https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised)

**Published:** 11/23/2025

**Summary:** The Shai-Hulud worm has infected over 500 NPM packages including @ctrl/tinycolor in an unprecedented self-propagating supply chain attack. The malware harvests AWS/GCP/Azure credentials using TruffleHog, establishes persistence through GitHub Actions backdoors, and automatically spreads to other maintainer packages - marking the first successful worm attack in the NPM ecosystem.

---

## Schneier on Security

### 1. IACR Nullifies Election Because of Lost Decryption Key

**Link:** [https://www.schneier.com/blog/archives/2025/11/iacr-nullifies-election-because-of-lost-decryption-key.html](https://www.schneier.com/blog/archives/2025/11/iacr-nullifies-election-because-of-lost-decryption-key.html)

**Published:** 11/24/2025

**Summary:** The International Association of Cryptologic Research—the academic cryptography association that’s been putting conferences like Crypto (back when “crypto” meant “cryptography”) and Eurocrypt since the 1980s—had to nullify an online election when trustee Moti Yung lost his decryption key. For this election and in accordance with the bylaws of the IACR, the three members of the IACR 2025 Election Committee acted as independent trustees, each holding a portion of the cryptographic key material required to jointly decrypt the results. This aspect of Helios’ design ensures that no two trustees could collude to determine the outcome of an election or the contents of individual votes on their own: all trustees must provide their decryption shares...

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

**Last Updated:** 2025-11-24T18:41:46.269Z
