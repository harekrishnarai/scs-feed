# Supply Chain Security Daily Report
**Date:** 2025-09-15
**Total Reports Found:** 8

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Mirai Variant "Gayfemboy" Infecting 15K+ Devices Daily – Mitigation Ideas?

**Link:** [https://news.ycombinator.com/item?id=45253337](https://news.ycombinator.com/item?id=45253337)

**Published:** 9/15/2025

**Summary:** Hey HN, I’m a pentester and recently came across a new Mirai-based botnet called Gayfemboy (yes, the name sounds like a meme, but the threat is real). It’s currently infecting over 15,000 devices daily, mostly targeting routers and network gear from Cisco, TP-Link, DrayTek, and Raisecom. What it does: Launches DDoS attacks (UDP, TCP, ICMP) Mines Monero using XMRig Acts as a proxy for malicious traffic Installs backdoors and evades analysis (e.g., UPX header tampering, nanosecond delays) Vulnerabilities exploited (At this moment): CVE-2025-20281 (Cisco ISE) CVE-2023-1389 (TP-Link AX21) CVE-2020-8515 (DrayTek) CVE-2024-7120 (Raisecom MSG) Mitigation ideas I’m testing: Scanning client networks for vulnerable firmware Blocking known malicious domains and IPs at the firewall level Writing scripts to detect outbound traffic to those IOCs Recommending disabling remote admin access on routers I’d love to hear what others are doing to detect or contain this botnet. Has anyone seen it in enterprise environments? Any creative or effective mitigation strategies you’d recommend? Comments URL: https://news.ycombinator.com/item?id=45253337 Points: 3 # Comments: 0

---

## GitGuardian Blog

### 1. DjangoCon US 2025: Security, Simplicity, and Community

**Link:** [https://blog.gitguardian.com/djangocon-us-2025/](https://blog.gitguardian.com/djangocon-us-2025/)

**Published:** 9/15/2025

**Summary:** At DjangoCon US 2025, speakers emphasized seasoned tech over hype, featuring secure GitOps workflows, simpler frontend alternatives, and sustainable open-source models.

---

## The Hacker News

### 1. ⚡ Weekly Recap: Bootkit Malware, AI-Powered Attacks, Supply Chain Breaches, Zero-Days & More

**Link:** [https://thehackernews.com/2025/09/weekly-recap-bootkit-malware-ai-powered.html](https://thehackernews.com/2025/09/weekly-recap-bootkit-malware-ai-powered.html)

**Published:** 9/15/2025

**Summary:** In a world where threats are persistent, the modern CISO’s real job isn't just to secure technology—it's to preserve institutional trust and ensure business continuity. This week, we saw a clear pattern: adversaries are targeting the complex relationships that hold businesses together, from supply chains to strategic partnerships. With new regulations and the rise of AI-driven attacks, the

---

### 2. AI-Powered Villager Pen Testing Tool Hits 11,000 PyPI Downloads Amid Abuse Concerns

**Link:** [https://thehackernews.com/2025/09/ai-powered-villager-pen-testing-tool.html](https://thehackernews.com/2025/09/ai-powered-villager-pen-testing-tool.html)

**Published:** 9/15/2025

**Summary:** A new artificial intelligence (AI)-powered penetration testing tool linked to a China-based company has attracted nearly 11,000 downloads on the Python Package Index (PyPI) repository, raising concerns that it could be repurposed by cybercriminals for malicious purposes. Dubbed Villager, the framework is assessed to be the work of Cyberspike, which has positioned the tools as a red teaming

---

### 3. HiddenGh0st, Winos and kkRAT Exploit SEO, GitHub Pages in Chinese Malware Attacks

**Link:** [https://thehackernews.com/2025/09/hiddengh0st-winos-and-kkrat-exploit-seo.html](https://thehackernews.com/2025/09/hiddengh0st-winos-and-kkrat-exploit-seo.html)

**Published:** 9/15/2025

**Summary:** Chinese-speaking users are the target of a search engine optimization (SEO) poisoning campaign that uses fake software sites to distribute malware. "The attackers manipulated search rankings with SEO plugins and registered lookalike domains that closely mimicked legitimate software sites," Fortinet FortiGuard Labs researcher Pei Han Liao said. "By using convincing language and small character

---

## Schneier on Security

### 1. Lawsuit About WhatsApp Security

**Link:** [https://www.schneier.com/blog/archives/2025/09/lawsuit-about-whatsapp-security.html](https://www.schneier.com/blog/archives/2025/09/lawsuit-about-whatsapp-security.html)

**Published:** 9/15/2025

**Summary:** Attaullah Baig, WhatsApp’s former head of security, has filed a whistleblower lawsuit alleging that Facebook deliberately failed to fix a bunch of security flaws, in violation of its 2019 settlement agreement with the Federal Trade Commission. The lawsuit, alleging violations of the whistleblower protection provision of the Sarbanes-Oxley Act passed in 2002, said that in 2022, roughly 100,000 WhatsApp users had their accounts hacked every day. By last year, the complaint alleged, as many as 400,000 WhatsApp users were getting locked out of their accounts each day as a result of such account takeovers...

---

### 2. Upcoming Speaking Engagements

**Link:** [https://www.schneier.com/blog/archives/2025/09/upcoming-speaking-engagements-48.html](https://www.schneier.com/blog/archives/2025/09/upcoming-speaking-engagements-48.html)

**Published:** 9/14/2025

**Summary:** This is a current list of where and when I am scheduled to speak: I’m speaking and signing books at the Cambridge Public Library on October 22, 2025 at 6 PM ET. The event is sponsored by Harvard Bookstore. I’m giving a virtual talk about my book Rewiring Democracy at 1 PM ET on October 23, 2025. The event is hosted by Data & Society. More details to come. I’m speaking at the World Forum for Democracy in Strasbourg, France, November 5-7, 2025. I’m speaking and signing books at the University of Toronto Bookstore in Toronto, Ontario, Canada on November 14, 2025. Details to come...

---

## Bleeping Computer Security

### 1. New VoidProxy phishing service targets Microsoft 365, Google accounts

**Link:** [https://www.bleepingcomputer.com/news/security/new-voidproxy-phishing-service-targets-microsoft-365-google-accounts/](https://www.bleepingcomputer.com/news/security/new-voidproxy-phishing-service-targets-microsoft-365-google-accounts/)

**Published:** 9/14/2025

**Summary:** A newly discovered phishing-as-a-service (PhaaS) platform, named VoidProxy, targets Microsoft 365 and Google accounts, including those protected by third-party single sign-on (SSO) providers such as Okta. [...]

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

**Last Updated:** 2025-09-15T18:44:44.012Z
