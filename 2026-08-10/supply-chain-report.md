# Supply Chain Security Daily Report
**Date:** 2026-08-10
**Total Reports Found:** 9

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Endor Labs Blog

### 1. npm Now Scans for Malware at Publish, Not Install | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/the-registry-just-became-a-checkpoint-it-still-isnt-your-perimeter](https://www.endorlabs.com/learn/the-registry-just-became-a-checkpoint-it-still-isnt-your-perimeter)

**Published:** 8/10/2026

**Summary:** GitHub scans every npm package for malware before publish. Here's why that's not enough, and why install-time enforcement is still on you.

---

## The Hacker News

### 1. Shipping 10–50× More Code? Watch This Webinar on Securing AI-Speed Development

**Link:** [https://thehackernews.com/2026/08/shipping-1050-more-code-watch-this.html](https://thehackernews.com/2026/08/shipping-1050-more-code-watch-this.html)

**Published:** 8/10/2026

**Summary:** AI is helping development teams produce far more code, far faster. But security teams still have to review vulnerabilities, manage dependencies, prioritize fixes, and control risk at human speed.  When software output jumps 10 to 50 times, the problem is no longer just finding vulnerabilities. It is keeping security from becoming the bottleneck, or worse, losing control of what gets shipped.

---

### 2. ⚡ Weekly Recap: AI Goes Rogue, Metabase 0-Day, MCP Supply-Chain Attacks, and Router Backdoors

**Link:** [https://thehackernews.com/2026/08/weekly-recap-ai-goes-rogue-metabase-0.html](https://thehackernews.com/2026/08/weekly-recap-ai-goes-rogue-metabase-0.html)

**Published:** 8/10/2026

**Summary:** A lot of security problems still begin with someone doing a completely normal thing. Cloning a repo. Answering a call. Leaving a box exposed. Trusting the default.  That pretty much covers the mood this week. Old bugs are back, supply chains are getting stranger, and some exploit paths are so short you wonder what was supposed to stop them in the first place.  That’s only part of it. Here’s

---

### 3. Kimsuky Builds Offline AI Stack to Boost Phishing and Automate Malware Development

**Link:** [https://thehackernews.com/2026/08/kimsuky-builds-offline-ai-stack-that.html](https://thehackernews.com/2026/08/kimsuky-builds-offline-ai-stack-that.html)

**Published:** 8/10/2026

**Summary:** North Korea's state hackers are no longer content to type prompts into public chatbots. One of the country's main espionage groups has begun running artificial intelligence (AI) offline on its own servers, connecting document-search tools to files in its possession, and collecting the software parts needed to build AI into its malware.  South Korean security firm Genians says it uncovered the

---

### 4. New Passkey Attacks Can Recover Synced Private Keys or Bypass Phishing-Resistant MFA

**Link:** [https://thehackernews.com/2026/08/new-passkey-attacks-can-recover-synced.html](https://thehackernews.com/2026/08/new-passkey-attacks-can-recover-synced.html)

**Published:** 8/10/2026

**Summary:** Three separate research efforts last week demonstrated ways to defeat passkey protections without breaking the cryptography they rest on.  Passkeys are designed to replace reusable passwords and resist phishing. The attacks instead reused signed authentication material that Windows had exposed, abused a cloud-synced passkey system from malware already on the victim's machine, and used a

---

### 5. Solidity Pro VS Code Extensions Steal Crypto Wallets, API Keys, and Credentials

**Link:** [https://thehackernews.com/2026/08/solidity-pro-vs-code-extensions-steal.html](https://thehackernews.com/2026/08/solidity-pro-vs-code-extensions-steal.html)

**Published:** 8/10/2026

**Summary:** Cybersecurity researchers have flagged a malicious Microsoft Visual Studio Code (VS Code) extension named Solidity Pro ("solidity-pro") that has been observed delivering a browser wallet and credential stealer.  The names of the extensions are below -     helper-beeps.solidity-pro   web3devtoolsx.solidity-pro  Although neither of the extensions is now available on Open VSX, the GitHub repository

---

## Sonatype Security Research

### 1. Six npm Packages Use Ethereum Transactions to Retrieve Malicious Payloads

**Link:** [https://www.sonatype.com/blog/six-npm-packages-use-ethereum-transactions-to-retrieve-malicious-payloads](https://www.sonatype.com/blog/six-npm-packages-use-ethereum-transactions-to-retrieve-malicious-payloads)

**Published:** 8/10/2026

**Summary:** TL;DR        Sonatype Research Labs identified six npm packages delivering the same malicious payload: three hijacked legitimate packages and three additional malicious packages, tracked as sonatype-2026-005899 and sonatype-2026-005901.       The malware uses the same Ethereum wallet address identified by OpenSourceMalware in activity attributed to the DPRK-linked Contagious Interview campaign, using the "NullReceiver" technique to locate infrastructure hosting additional JavaScript payloads.       Organizations that installed the affected versions should remove them and investigate the impacted environment for follow-on payload execution or compromise.      On August 10, 2026, Sonatype Research Labs identified six npm packages containing the same malicious payload, including three compromised legitimate packages and three packages published with the malware already present.   The payload uses Ethereum blockchain transactions to locate infrastructure hosting additional JavaScript malware. Sonatype researchers confirmed the six packages use the same Ethereum wallet address in recent activity attributed to the DPRK-linked Contagious Interview campaign. OpenSourceMalware dubbed the specific blockchain-based command-and-control technique "NullReceiver," while Contagious Interview refers to the broader campaign associated with the Lazarus APT group.   Six npm Packages Deliver the Same Malware   According to Sonatype's Adam Reynolds, the affected packages fall into two groups.   Three are legitimate npm packages that appear to have been hijacked to publish malicious versions, which Sonatype is tracking as sonatype-2026-005899:        @kolbo/mcp@1.57.1       agentgui@1.0.1127       godot-kit@1.0.1786316795      In the hijacked packages, the payload was embedded into a file that already existed in the legitimate package, pictured here in the last line of database.js in agentgui.    Researchers later identified three additional npm packages carrying the same payload, tracked separately as sonatype-2026-005901 as they aren't package hijackings:        envpack-conf@1.0.1       postcss-initial-provider@3.0.4       tailwindcss-motion-advanced@1.0.1      Why This Malware Looks to the Blockchain for Its Next Move   Despite the different paths into npm, all six packages contain the same malicious payload and are associated with the same wallet address.   When executed, the loader queries Ethereum for an outbound transaction from that wallet and reads bytes from the transaction’s recipient address. Those bytes are decoded into two IPv4 addresses, which the malware treats as primary and secondary command-and-control (C2) endpoints. The Ethereum transaction acts as a dead drop for instructions telling the malware where to connect next.   The implementation Sonatype observed is also more extensive than the NullReceiver behavior. The loader can query several Ethereum RPC providers, race requests between them, use batched JSON-RPC calls, and fall back to the Blockscout API to locate the relevant transaction. This gives the malware multiple ways to recover its C2 infrastructure if one method fails.   Once it resolves the C2 infrastructure, the loader attempts to retrieve two additional stages from the /0x/cls and /0x/ls endpoints. It can retrieve an encoded payload through a standard HTTP GET response or, if that fails, make a HEAD request and recover it from an X-Payload-B64 response header. The payload is then Base64- and XOR-decoded before execution. The payload retrieved from /0x/cls can be executed directly in the current Node.js process using eval(), while downloaded stages can also be launched as detached Node.js child processes.   Same Payload, Two Paths Into npm   The six packages show the same malware being distributed in two different ways: by compromising packages developers may already trust, and by publishing new packages created specifically to deliver the malicious payload.   In the three hijacked packages, substantial legitimate functionality remains intact, with the malicious loader appended to the end of a legitimate file, which is the same behavior we saw with the DPRK-linked PolinRider campaign.   The independently published packages also contain legitimate-looking functionality: envpack-conf includes package-configuration code, postcss-initial-provider includes normal PostCSS plugin code, and tailwindcss-motion-advanced carries the loader inside utils.min.js.   A Familiar DPRK-Linked Technique   The six packages use a technique that closely resembles NullReceiver, a blockchain-based command-and-control method used in the DPRK-linked Contagious Interview campaign, recently spotted by OpenSourceMalware in two npm packages, bianira-ui and fluid-type-ui.    In that activity, the malware looked up an attacker-controlled Ethereum wallet, read the recipient address from its latest outbound transaction, decoded a C2 IP from that address, and then connected to it. OpenSourceMalware attributed those packages to the DPRK Contagious Interview campaign.   Sonatype Research Labs observed similar tradecraft here: hijacked packages, blockchain-based retrieval of follow-on infrastructure, and malicious code embedded into or shipped with package files.   Check Your Builds for These Six npm Packages   Developers and security teams should check their environments for the six affected npm packages and remove any impacted versions.   For the three hijacked packages, the risk is especially easy to miss because the malicious code arrived through packages developers may already recognize and trust. The three additional malicious packages show the same payload can also be introduced through newly published packages.   If any affected package was installed, teams should investigate for follow-on JavaScript execution and other signs of compromise.   Sonatype Research Labs is continuing to investigate related npm activity and will update its findings as additional packages or infrastructure are identified.

---

## Bleeping Computer Security

### 1. LexisNexis shuts down services after suspicious activity on servers

**Link:** [https://www.bleepingcomputer.com/news/security/lexisnexis-shuts-down-services-after-suspicious-activity-on-servers/](https://www.bleepingcomputer.com/news/security/lexisnexis-shuts-down-services-after-suspicious-activity-on-servers/)

**Published:** 8/10/2026

**Summary:** LexisNexis took its Diligence, Metabase API, and Newsdesk services offline as part of its response to unusual activity on servers hosted and managed by an unnamed third-party vendor. [...]

---

## Schneier on Security

### 1. Python Now Has a Post-Quantum Encryption Library

**Link:** [https://www.schneier.com/blog/archives/2026/08/python-now-has-a-post-quantum-encryption-library.html](https://www.schneier.com/blog/archives/2026/08/python-now-has-a-post-quantum-encryption-library.html)

**Published:** 8/10/2026

**Summary:** This is good: Post-quantum cryptography is now one pip-install away for the entire Python ecosystem. With funding from the Sovereign Tech Agency, we implemented support for ML-KEM, the NIST-standard key-establishment primitive, and ML-DSA, the NIST-standard digital-signature primitive, in pyca/cryptography.  Remember, the reason to do this now is because there’s no emergency. And because you will make your systems crypto agile, which is always a good idea.

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

**Last Updated:** 2026-08-10T18:45:47.235Z
