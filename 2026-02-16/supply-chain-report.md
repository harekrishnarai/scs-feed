# Supply Chain Security Daily Report
**Date:** 2026-02-16
**Total Reports Found:** 7

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Security audit for LLM skill files: skillaudit.sh

**Link:** [https://skillaudit.sh/](https://skillaudit.sh/)

**Published:** 2/16/2026

**Summary:** Article URL: https://skillaudit.sh/ Comments URL: https://news.ycombinator.com/item?id=47038523 Points: 1 # Comments: 0

---

### 2. Tadpole the Language for Scraping 0.2.0 – Complex Control Flow, Stealth and More

**Link:** [https://news.ycombinator.com/item?id=47038451](https://news.ycombinator.com/item?id=47038451)

**Published:** 2/16/2026

**Summary:** Hello, I posted a few weeks ago about my custom scraping language. It definitely got some traction, which was very exciting to see. Github Repo: https://github.com/tadpolehq/tadpole Docs: https://tadpolehq.com/ The past 2 weeks, I've been focusing my efforts in introducing specific stealth actions, more complicated control flow actions and a lot of various evaluators for cleaning data. Here is an example for scraping from `books.toscrape.com`   main {     new_page {       goto "https://books.toscrape.com/"       loop {         do {           $$ article.product_pod {             extract "books[]" {               title { $ "h3 a"; attr title }               rating {                 $ ".star-rating";                 attr "class";                 extract "star-rating (One|Two|Three|Four|Five)" caseInsensitive=#true;                 func "(v) => ({'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5}[v.toLowerCase()] || null)"               }               price { $ "p.price_color"; text; as_float }               in_stock { $ "p.availability"; text; matches "In stock" caseInsensitive=#true }             }           }         }         while { $ "li.next" }         next {           $ "li.next a" { click }           wait_until         }       }     }   }    module stealth {     // Apple M2 Pro     action apply_apple_m2 {       apply_identity mac       set_webgl_vendor "Apple Inc." "Apple M2"       set_device_memory 16       set_hardware_concurrency 8       set_viewport 1440 900 deviceScaleFactor=2     }      // Windows Desktop     action apply_windows_16_8 {       apply_identity windows       set_webgl_vendor "Google Inc. (Intel)" "ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0)"       set_device_memory 16       set_hardware_concurrency 8       set_viewport 1920 1080     }      // Windows Budget Laptop     action apply_windows_8_4 {       apply_identity windows       set_webgl_vendor "Google Inc. (Intel)" "ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0)"       set_device_memory 8       set_hardware_concurrency 4       set_viewport 1366 768     }   }   My goals for the next 0.3.0 release is to heavily focus on Plugins, Distributed Execution through Message Queues, Redis Support for Crawling, Static Parsing as opposed to exclusively over CDP/Chrome. I will keep trying to keep my release cadence at every 2 weeks! Comments URL: https://news.ycombinator.com/item?id=47038451 Points: 3 # Comments: 0

---

### 3. Fintech security architectures: where they break and why

**Link:** [https://www.cerbos.dev/blog/fintech-security-architectures-where-they-break-and-why](https://www.cerbos.dev/blog/fintech-security-architectures-where-they-break-and-why)

**Published:** 2/16/2026

**Summary:** Article URL: https://www.cerbos.dev/blog/fintech-security-architectures-where-they-break-and-why Comments URL: https://news.ycombinator.com/item?id=47038410 Points: 3 # Comments: 0

---

## GitGuardian Blog

### 1. AI Is Making Security More Agile: Highlights from ChiBrrCon 2026

**Link:** [https://blog.gitguardian.com/chibrrcon-2026/](https://blog.gitguardian.com/chibrrcon-2026/)

**Published:** 2/16/2026

**Summary:** ChiBrrCon 2026 tackled AI, resilience, and operational agility in enterprise security. Learn what top speakers shared on SOC modernization and architectural risk.

---

## The Hacker News

### 1. Weekly Recap: Outlook Add-Ins Hijack, 0-Day Patches, Wormable Botnet & AI Malware

**Link:** [https://thehackernews.com/2026/02/weekly-recap-outlook-add-ins-hijack-0.html](https://thehackernews.com/2026/02/weekly-recap-outlook-add-ins-hijack-0.html)

**Published:** 2/16/2026

**Summary:** This week’s recap shows how small gaps are turning into big entry points. Not always through new exploits, often through tools, add-ons, cloud setups, or workflows that people already trust and rarely question. Another signal: attackers are mixing old and new methods. Legacy botnet tactics, modern cloud abuse, AI assistance, and supply-chain exposure are being used side by side, whichever path

---

### 2. Microsoft Discloses DNS-Based ClickFix Attack Using Nslookup for Malware Staging

**Link:** [https://thehackernews.com/2026/02/microsoft-discloses-dns-based-clickfix.html](https://thehackernews.com/2026/02/microsoft-discloses-dns-based-clickfix.html)

**Published:** 2/15/2026

**Summary:** Microsoft has disclosed details of a new version of the ClickFix social engineering tactic in which the attackers trick unsuspecting users into running commands that carry out a Domain Name System (DNS) lookup to retrieve the next-stage payload. Specifically, the attack relies on using the "nslookup" (short for nameserver lookup) command to execute a custom DNS lookup triggered via the Windows

---

## Bleeping Computer Security

### 1. CTM360: Lumma Stealer and Ninja Browser malware campaign abusing Google Groups

**Link:** [https://www.bleepingcomputer.com/news/security/ctm360-lumma-stealer-and-ninja-browser-malware-campaign-abusing-google-groups/](https://www.bleepingcomputer.com/news/security/ctm360-lumma-stealer-and-ninja-browser-malware-campaign-abusing-google-groups/)

**Published:** 2/15/2026

**Summary:** CTM360 reports 4,000+ malicious Google Groups and 3,500+ Google-hosted URLs used to spread the Lumma Stealer infostealing malware and a trojanized "Ninja Browser." The report details how attackers abuse trusted Google services to steal credentials and maintain persistence across Windows and Linux systems. [...]

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

**Last Updated:** 2026-02-16T18:44:35.289Z
