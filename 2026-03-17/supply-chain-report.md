# Supply Chain Security Daily Report
**Date:** 2026-03-17
**Total Reports Found:** 15

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Risk Management and Hedging in a Polymarket Dual-Side Arbitrage Bot

**Link:** [https://news.ycombinator.com/item?id=47416315](https://news.ycombinator.com/item?id=47416315)

**Published:** 3/17/2026

**Summary:** Dual-side arbitrage in prediction markets like Polymarket looks simple: Buy both outcomes below $1 → hold → guaranteed profit. But in real trading, this breaks without one key component: Risk management. The real risk is not price direction — it’s execution imbalance. The Real Risk: Unpaired Exposure In theory: Buy UP at 0.47 Buy DOWN at 0.46 Total = 0.93 → locked profit. In practice: One side fills The other doesn’t Time runs out If the market resolves before completing the pair, you face a full loss. So the focus must be: Resolve imbalance, not just find price edges. Core Risk Management Principles 1. Limit Unpaired Inventory Never allow unlimited exposure on one side. Track unpaired tokens and stop new buys when imbalance exceeds a threshold. Result: Prevents runaway risk. 2. Time-Based Forced Hedging The most important safeguard. If the opposite side isn’t filled within a set time: Force-buy it at a more aggressive price. This reduces profit slightly but guarantees completion. 3. Progressive Hedging Don’t wait for perfect fills. As imbalance grows: Hedge small portions early Increase hedge size over time Result: Avoids costly last-second execution. 4. Liquidity-Aware Execution Not all opportunities are real. Check: Orderbook depth Spread Fill probability If liquidity is weak, reduce size or skip. 5. Time Window Control Markets become unstable near resolution. Best practice: Trade only between defined times (e.g., 300s → 90s) Avoid late entries Complete all pairs before final window 6. Emergency Hedging Near market close: Close all unpaired positions immediately. Even if it means crossing the spread and accepting worse prices. 7. Order Escalation Limit orders improve profit but reduce fill rate. Use a layered approach: Passive limit Retry with better pricing Aggressive fill if needed Result: Higher completion rate. 8. Edge Validation Not every “cheap pair” is profitable. Before entering: Include slippage and execution cost Reject weak setups 9. Inventory Skew Control When imbalance appears: Prioritize buying the missing side Reduce buying the dominant side This naturally rebalances positions. The Role of the Hedge Manager A proper system separates hedging logic. The hedge_manager handles: Forced hedging Partial hedging Emergency closing Execution escalation Its goal: Ensure every position becomes a complete pair. Final Insight Dual-side arbitrage is not truly risk-free. In reality: Fills are uneven Liquidity disappears Time is limited The real edge is not finding opportunities — It’s how effectively you neutralize risk. A successful bot: avoids getting stuck resolves imbalance fast exits fully hedged That’s what makes the strategy work. Contact Email: benjamin.bigdev@gmail.com Telegram: https://t.me/BenjaminCup X: https://x.com/benjaminccup GitHub: https://github.com/Gabagool2-2/polymarket-trading-bot-python Comments URL: https://news.ycombinator.com/item?id=47416315 Points: 1 # Comments: 0

---

## StepSecurity Blog

### 1. bittensor-wallet 4.0.2 Compromised on PyPI - Backdoor Exfiltrates Private Keys

**Link:** [https://www.stepsecurity.io/blog/bittensor-wallet-4-0-2-compromised-on-pypi---backdoor-exfiltrates-private-keys](https://www.stepsecurity.io/blog/bittensor-wallet-4-0-2-compromised-on-pypi---backdoor-exfiltrates-private-keys)

**Published:** 3/17/2026

**Summary:** On March 17, 2026, bittensor-wallet 4.0.2 was identified as a compromised PyPI package. The malicious release had been live on PyPI for approximately 48 hours before being yanked. This post is a ground-up technical breakdown based on a direct diff of the source tarballs for versions 4.0.1 and 4.0.2 — covering exactly what changed, how the backdoor works, and what defenders should do. We also ran the compromised package with StepSecurity Harden Runner and captured every C2 channel firing in real time.

---

### 2. hackerbot-claw: An AI-Powered Bot Actively Exploiting GitHub Actions - Microsoft, DataDog, and CNCF Projects Hit So Far

**Link:** [https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation](https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation)

**Published:** 3/17/2026

**Summary:** A week-long automated attack campaign targeted CI/CD pipelines across major open source repositories, achieving remote code execution in at least 4 out of 5 targets. The attacker, an autonomous bot called hackerbot-claw, used 5 different exploitation techniques and successfully exfiltrated a GitHub token with write permissions from one of the most popular repositories on GitHub. This post breaks down each attack, shows the evidence, and explains what you can do to protect your workflows.

---

### 3. Malicious npm Releases Found in Popular React Native Packages - 130K+ Monthly Downloads Compromised

**Link:** [https://www.stepsecurity.io/blog/malicious-npm-releases-found-in-popular-react-native-packages---130k-monthly-downloads-compromised](https://www.stepsecurity.io/blog/malicious-npm-releases-found-in-popular-react-native-packages---130k-monthly-downloads-compromised)

**Published:** 3/17/2026

**Summary:** On March 16, 2026, StepSecurity Threat Intel was the first to detect and report malicious releases in two popular React Native npm packages — react-native-international-phone-number and react-native-country-select. StepSecurity's AI Package Analyst flagged the compromised versions, and within minutes, StepSecurity filed security issues directly in both GitHub repositories — alerting the maintainer and the community before any other security vendor.

---

## GitHub Security Blog

### 1.  Investing in the people shaping open source and securing the future together

**Link:** [https://github.blog/security/supply-chain-security/investing-in-the-people-shaping-open-source-and-securing-the-future-together/](https://github.blog/security/supply-chain-security/investing-in-the-people-shaping-open-source-and-securing-the-future-together/)

**Published:** 3/17/2026

**Summary:** See how GitHub is investing in open source security funding maintainers, partnering with Alpha-Omega, and expanding access to help reduce burden and strengthen software supply chains. The post  Investing in the people shaping open source and securing the future together appeared first on The GitHub Blog.

---

## The Hacker News

### 1. LeakNet Ransomware Uses ClickFix via Hacked Sites, Deploys Deno In-Memory Loader

**Link:** [https://thehackernews.com/2026/03/leaknet-ransomware-uses-clickfix-via.html](https://thehackernews.com/2026/03/leaknet-ransomware-uses-clickfix-via.html)

**Published:** 3/17/2026

**Summary:** The ransomware operation known as LeakNet has adopted the ClickFix social engineering tactic delivered through compromised websites as an initial access method. The use of ClickFix, where users are tricked into manually running malicious commands to address non-existent errors, is a departure from relying on traditional methods for obtaining initial access, such as through stolen credentials

---

### 2. Konni Deploys EndRAT Through Phishing, Uses KakaoTalk to Propagate Malware

**Link:** [https://thehackernews.com/2026/03/konni-deploys-endrat-through-spear.html](https://thehackernews.com/2026/03/konni-deploys-endrat-through-spear.html)

**Published:** 3/17/2026

**Summary:** North Korean threat actors have been observed sending phishing to compromise targets and obtain access to a victim's KakaoTalk desktop application to distribute malicious payloads to certain contacts. The activity has been attributed by South Korean threat intelligence firm Genians to a hacking group referred to as Konni. "Initial access was achieved through a spear-phishing email disguised as a

---

### 3. GlassWorm Attack Uses Stolen GitHub Tokens to Force-Push Malware Into Python Repos

**Link:** [https://thehackernews.com/2026/03/glassworm-attack-uses-stolen-github.html](https://thehackernews.com/2026/03/glassworm-attack-uses-stolen-github.html)

**Published:** 3/16/2026

**Summary:** The GlassWorm malware campaign is being used to fuel an ongoing attack that leverages the stolen GitHub tokens to inject malware into hundreds of Python repositories. "The attack targets Python projects — including Django apps, ML research code, Streamlit dashboards, and PyPI packages — by appending obfuscated code to files like setup.py, main.py, and app.py," StepSecurity said. "Anyone who runs

---

### 4. DRILLAPP Backdoor Targets Ukraine, Abuses Microsoft Edge Debugging for Stealth Espionage

**Link:** [https://thehackernews.com/2026/03/drillapp-backdoor-targets-ukraine.html](https://thehackernews.com/2026/03/drillapp-backdoor-targets-ukraine.html)

**Published:** 3/16/2026

**Summary:** Ukrainian entities have emerged as the target of a new campaign likely orchestrated by threat actors linked to Russia, according to a report from S2 Grupo's LAB52 threat intelligence team. The campaign, observed in February 2026, has been assessed to share overlaps with a prior campaign mounted by Laundry Bear (aka UAC-0190 or Void Blizzard) aimed at Ukrainian defense forces with a malware

---

### 5. Android 17 Blocks Non-Accessibility Apps from Accessibility API to Prevent Malware Abuse

**Link:** [https://thehackernews.com/2026/03/android-17-blocks-non-accessibility.html](https://thehackernews.com/2026/03/android-17-blocks-non-accessibility.html)

**Published:** 3/16/2026

**Summary:** Google is testing a new security feature as part of Android Advanced Protection Mode (AAPM) that prevents certain kinds of apps from using the accessibility services API. The change, incorporated in Android 17 Beta 2, was first reported by Android Authority last week. AAPM was introduced by Google in Android 16, released last year. When enabled, it causes the device to enter a heightened

---

## GitGuardian Blog

### 1. The State of Secrets Sprawl 2026: AI-Service Leaks Surge 81% and 29M Secrets Hit Public GitHub

**Link:** [https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)

**Published:** 3/17/2026

**Summary:** GitGuardian’s 5th State of Secrets Sprawl report is here. In this blog, we unpack the key findings behind the 2026 edition, from AI-driven leak growth to the remediation gaps security teams can’t ignore.

---

## Endor Labs Blog

### 1. The Return of PhantomRaven: Detecting Three New Waves of npm Supply Chain Attacks | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/return-of-phantomraven](https://www.endorlabs.com/learn/return-of-phantomraven)

**Published:** 3/17/2026

**Summary:** Endor Labs security researchers identified 88 malicious open source packages belonging to three new waves of the PhantomRaven campaign.

---

### 2. Endor Labs + Zscaler: Zero Trust Application Security for the AI Era | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/endor-labs-zscaler-zero-trust-application-security-for-the-ai-era](https://www.endorlabs.com/learn/endor-labs-zscaler-zero-trust-application-security-for-the-ai-era)

**Published:** 3/17/2026

**Summary:** Endor Labs has partnered with Zscaler to bring Zero Trust to the AI-native software supply chain

---

## Schneier on Security

### 1. South Korean Police Accidentally Post Cryptocurrency Wallet Password

**Link:** [https://www.schneier.com/blog/archives/2026/03/south-korean-police-accidentally-post-cryptocurrency-wallet-password.html](https://www.schneier.com/blog/archives/2026/03/south-korean-police-accidentally-post-cryptocurrency-wallet-password.html)

**Published:** 3/17/2026

**Summary:** An expensive mistake:  Someone jumped at the opportunity to steal $4.4 million in crypto assets after South Korea’s National Tax Service exposed publicly the mnemonic recovery phrase of a seized cryptocurrency wallet. The funds were stored in a Ledger cold wallet seized in law enforcement raids at 124 high-value tax evaders that resulted in confiscating digital assets worth 8.1 billion won (currently approximately $5.6 million). When announcing the success of the operation, the agency released photos of a Ledger device, a popular hardware wallet for crypto storage and management...

---

## JFrog Security Blog

### 1. Agent Skills are the New Packages of AI: It’s Time to Manage Them Securely

**Link:** [https://jfrog.com/blog/agent-skills-new-ai-packages/](https://jfrog.com/blog/agent-skills-new-ai-packages/)

**Published:** 3/16/2026

**Summary:** Let’s talk about agent skills. As the AI agent ecosystem matures, we’re seeing a major shift in how users equip agents to run automated workflows. While robust protocols such as MCP exist to handle complex system integrations and authentication, skills have emerged as the go-to, low-friction way to shape an agent’s day-to-day behavior. Skills are …

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

**Last Updated:** 2026-03-17T18:46:26.755Z
