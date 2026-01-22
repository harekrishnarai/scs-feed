# Supply Chain Security Daily Report
**Date:** 2026-01-22
**Total Reports Found:** 14

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Backwater Finance – A free, local-first personal finance web app

**Link:** [https://backwater.systems/finance/](https://backwater.systems/finance/)

**Published:** 1/22/2026

**Summary:** For several years, I’ve been tinkering on (yet another) personal finance app … largely to practice the craft, and as a way to try out things we didn’t get to use at $DAY_JOB. I was laid off from $DAY_JOB last year, so I decided to see if I could turn my side project into a real enterprise. Low-cost infrastructure is a primary concern, and I hope to be able to offer the application as freeware indefinitely, with costs subsidized by a subset of paying subscribers. All of the app’s functionality is available in the free version, except … 1. Database back-up and restore via cloud storage services (currently S3, Google Drive, and Dropbox) 2. Syncing transactions from banking institutions (via Plaid) You can read about the app’s selling points on the landing page, so I won’t repeat the rest here. Some of the finer, more interesting technical details … - The main data store is IndexedDB. Originally, the plan was to use CouchDB, but when I learned about IndexedDB, it allowed me to imagine the local-first architecture that the app eventually implemented. For the needs of this application, I’ve found IndexedDB’s primitive nature very interesting, without being too limiting. My wishlist for it includes an asynchronous API, and encryption-at-rest would be nice, too. - I rolled my own rendering system instead of using an off-the-shelf framework like React or Svelte. I obviously wouldn’t recommend this for the average project or person, but I was naively curious about the low-level concerns of such a library. My system uses a model—view model-view pattern to render Mustache templates to HTML, and simplifies binding event listeners to HTML elements. While I’m very happy with the developer experience it provides, any issues it causes impact end users — not an ideal trade-off. This is a definite area of focus for the future. - Excellent accessibility is a goal. A lot of effort has gone into making the app as usable as possible, but the work here is not done. If you do front-end development and don’t have experience around accessibility, I’d recommend learning a bit about it as a great way to level-up your development skills. (In my experience, $INDUSTRY doesn’t place due weight on its importance.) - Due to my dependency allergies, I also rolled my own Web Components to provide UI widgets that HTML doesn’t provide natively. https://code.backwater.systems/#landscape> Despite the flak they receive, in my opinion, Web Components are awesome and should be more widely used. Some questions for the community … - Why do you think local-first software isn’t more popular? - What’s the next feature you’d build? Comments URL: https://news.ycombinator.com/item?id=46723138 Points: 1 # Comments: 0

---

### 2. Best and worst parcel firms for customer satisfaction (UK) (2025)

**Link:** [https://www.ofcom.org.uk/post/deliveries-and-charges/best-and-worst-parcel-firms-for-customer-satisfaction-revealed-2025](https://www.ofcom.org.uk/post/deliveries-and-charges/best-and-worst-parcel-firms-for-customer-satisfaction-revealed-2025)

**Published:** 1/22/2026

**Summary:** Article URL: https://www.ofcom.org.uk/post/deliveries-and-charges/best-and-worst-parcel-firms-for-customer-satisfaction-revealed-2025 Comments URL: https://news.ycombinator.com/item?id=46723135 Points: 1 # Comments: 0

---

### 3. Show HN: Postgres and ClickHouse as a unified data stack

**Link:** [https://news.ycombinator.com/item?id=46723128](https://news.ycombinator.com/item?id=46723128)

**Published:** 1/22/2026

**Summary:** Hello HN, this is Sai and Kaushik from ClickHouse. Today we are launching a Postgres managed service that is natively integrated with ClickHouse. It is built together with Ubicloud (YC W24). TL;DR: NVMe-backed Postgres + built-in CDC into ClickHouse + pg_clickhouse so you can keep your app Postgres-first while running analytics in ClickHouse. Try it (private preview): https://clickhouse.com/cloud/postgres Blog w/ live demo: https://clickhouse.com/blog/postgres-managed-by-clickhouse Problem Across many fast-growing companies using Postgres, performance and scalability commonly emerge as challenges as they grow. This is for both transactional and analytical workloads. On the OLTP side, common issues include slower ingestion (especially updates, upserts), slower vacuums, long-running transactions incurring WAL spikes, among others. In most cases, these problems stem from limited disk IOPS and suboptimal disk latency. Without the need to provision or cap IOPS, Postgres could do far more than it does today. On the analytics side, many limitations stem from the fact that Postgres was designed primarily for OLTP and lacks several features that analytical databases have developed over time, for example vectorized execution, support for a wide variety of ingest formats, etc. We’re increasingly seeing a common pattern where many companies like GitLab, Ramp, Cloudflare etc. complement Postgres with ClickHouse to offload analytics. This architecture enables teams to adopt two purpose-built open-source databases. That said, if you’re running a  Postgres based application, adopting ClickHouse isn’t straightforward. You typically end up building a CDC pipeline, handling backfills, and dealing with schema changes and updating your application code to be aware of a second database for analytics. Solution On the OLTP side, we believe that NVMe-based Postgres is the right fit and can drastically improve performance. NVMe storage is physically colocated with compute, enabling significantly lower disk latency and higher IOPS than network-attached storage, which requires a network round trip for disk access. This benefits disk-throttled workloads and can significantly (up to 10x) speed up operations incl. updates, upserts, vacuums, checkpointing, etc. We are working on a detailed blog examining how WAL fsyncs, buffer reads, and checkpoints dominate on slow I/O and are significantly reduced on NVMe. Stay tuned! On the OLAP side, the Postgres service includes native CDC to ClickHouse and unified query capabilities through pg_clickhouse. Today, CDC is powered by ClickPipes/PeerDB under the hood, which is based on logical replication. We are working to make this faster and easier by supporting logical replication v2 for streaming in-progress transactions, a new logical decoding plugin to address existing limitations of logical replication, working toward sub-second replication, and more. Every Postgres comes packaged with the pg_clickhouse extension, which reduces the effort required to add ClickHouse-powered analytics to a Postgres application. It allows you to query ClickHouse directly from Postgres, enabling Postgres for both transactions and analytics. pg_clickhouse supports comprehensive query pushdown for analytics, and we plan to continuously expand this further (https://news.ycombinator.com/item?id=46249462). Vision To sum it up - Our vision is to provide a unified data stack that combines Postgres for transactions with ClickHouse for analytics, giving you best-in-class performance and scalability on an open-source foundation. Get Started We are actively working with users to onboard them to the Postgres service. Since this is a private preview, it is currently free of cost.If you’re interested, please sign up here. https://clickhouse.com/cloud/postgres We’d love to hear your feedback on our thesis and anything else that comes to mind, it would be super helpful to us as we build this out! Comments URL: https://news.ycombinator.com/item?id=46723128 Points: 2 # Comments: 0

---

## GitGuardian Blog

### 1. Boards Focus On Risk, Resilience, and Operational Realities: Where NHI Governance Fits In

**Link:** [https://blog.gitguardian.com/boards-focus-on-risks-nhi-governance/](https://blog.gitguardian.com/boards-focus-on-risks-nhi-governance/)

**Published:** 1/22/2026

**Summary:** Learn how GitGuardian helps boards and CISOs align on cyber risk, operational resilience, and the rising impact of unmanaged workload identities at scale.

---

## Sonatype Security Research

### 1. OWASP Top 10: Application Security Meets AI Risk

**Link:** [https://www.sonatype.com/blog/owasp-top-10-application-security-meets-ai-risk](https://www.sonatype.com/blog/owasp-top-10-application-security-meets-ai-risk)

**Published:** 1/22/2026

**Summary:** The OWASP Top 10 has long served as a reality check for development teams: a concise, community-driven snapshot of the most critical web application security risks organizations face today.

---

## The Hacker News

### 1. Malicious PyPI Package Impersonates SymPy, Deploys XMRig Miner on Linux Hosts

**Link:** [https://thehackernews.com/2026/01/malicious-pypi-package-impersonates.html](https://thehackernews.com/2026/01/malicious-pypi-package-impersonates.html)

**Published:** 1/22/2026

**Summary:** A new malicious package discovered in the Python Package Index (PyPI) has been found to impersonate a popular library for symbolic mathematics to deploy malicious payloads, including a cryptocurrency miner, on Linux hosts. The package, named sympy-dev, mimics SymPy, replicating the latter's project description verbatim in an attempt to deceive unsuspecting users into thinking that they are

---

### 2. Automated FortiGate Attacks Exploit FortiCloud SSO to Alter Firewall Configurations

**Link:** [https://thehackernews.com/2026/01/automated-fortigate-attacks-exploit.html](https://thehackernews.com/2026/01/automated-fortigate-attacks-exploit.html)

**Published:** 1/22/2026

**Summary:** Cybersecurity company Arctic Wolf has warned of a "new cluster of automated malicious activity" that involves unauthorized firewall configuration changes on Fortinet FortiGate devices. The activity, it said, commenced on January 15, 2026, adding it shares similarities with a December 2025 campaign in which malicious SSO logins on FortiGate appliances were recorded against the admin account from

---

### 3. VoidLink Linux Malware Framework Built with AI Assistance Reaches 88,000 Lines of Code

**Link:** [https://thehackernews.com/2026/01/voidlink-linux-malware-framework-built.html](https://thehackernews.com/2026/01/voidlink-linux-malware-framework-built.html)

**Published:** 1/21/2026

**Summary:** The recently discovered sophisticated Linux malware framework known as VoidLink is assessed to have been developed by a single person with assistance from an artificial intelligence (AI) model. That's according to new findings from Check Point Research, which identified operational security blunders by malware's author that provided clues to its developmental origins. The latest insight makes

---

### 4. CERT/CC Warns binary-parser Bug Allows Node.js Privilege-Level Code Execution

**Link:** [https://thehackernews.com/2026/01/certcc-warns-binary-parser-bug-allows.html](https://thehackernews.com/2026/01/certcc-warns-binary-parser-bug-allows.html)

**Published:** 1/21/2026

**Summary:** A security vulnerability has been disclosed in the popular binary-parser npm library that, if successfully exploited, could result in the execution of arbitrary JavaScript. The vulnerability, tracked as CVE-2026-1245 (CVSS score: 6.5), affects all versions of the module prior to version 2.3.0, which addresses the issue. Patches for the flaw were released on November 26, 2025. Binary-parser is a

---

## Bleeping Computer Security

### 1. Zendesk ticket systems hijacked in massive global spam wave

**Link:** [https://www.bleepingcomputer.com/news/security/zendesk-ticket-systems-hijacked-in-massive-global-spam-wave/](https://www.bleepingcomputer.com/news/security/zendesk-ticket-systems-hijacked-in-massive-global-spam-wave/)

**Published:** 1/21/2026

**Summary:** People worldwide are being targeted by a massive spam wave originating from unsecured Zendesk support systems, with victims reporting receiving hundreds of emails with strange and sometimes alarming subject lines. [...]

---

### 2. Online retailer PcComponentes says data breach claims are fake

**Link:** [https://www.bleepingcomputer.com/news/security/online-retailer-pccomponentes-says-data-breach-claims-are-fake/](https://www.bleepingcomputer.com/news/security/online-retailer-pccomponentes-says-data-breach-claims-are-fake/)

**Published:** 1/21/2026

**Summary:** PcComponentes, a major technology retailer in Spain, has denied claims of a data breach on its systems impacting 16 million customers, but confirmed it suffered a credential stuffing attack. [...]

---

### 3. Fortinet admins report patched FortiGate firewalls getting hacked

**Link:** [https://www.bleepingcomputer.com/news/security/fortinet-admins-report-patched-fortigate-firewalls-getting-hacked/](https://www.bleepingcomputer.com/news/security/fortinet-admins-report-patched-fortigate-firewalls-getting-hacked/)

**Published:** 1/21/2026

**Summary:** Fortinet customers are seeing attackers exploiting a patch bypass for a previously fixed critical FortiGate authentication vulnerability (CVE-2025-59718) to hack patched firewalls. [...]

---

## JFrog Security Blog

### 1. The 282% ROI of Unified Security

**Link:** [https://jfrog.com/blog/forrester-consulting-tei-study-jfrog-security/](https://jfrog.com/blog/forrester-consulting-tei-study-jfrog-security/)

**Published:** 1/21/2026

**Summary:** We’re excited to share the findings of our commissioned Forrester Consulting Total Economic Impact™ (TEI) study, published in January 2026. This study examines the return on investment (ROI) that organizations realized by deploying a unified platform for managing and securing the software supply chain. Today, software supply chains are facing unprecedented pressure from surging open-source …

---

## Schneier on Security

### 1. Internet Voting is Too Insecure for Use in Elections

**Link:** [https://www.schneier.com/blog/archives/2026/01/internet-voting-is-too-insecure-for-use-in-elections.html](https://www.schneier.com/blog/archives/2026/01/internet-voting-is-too-insecure-for-use-in-elections.html)

**Published:** 1/21/2026

**Summary:** No matter how many times we say it, the idea comes back again and again. Hopefully, this letter will hold back the tide for at least a while longer. Executive summary: Scientists have understood for many years that internet voting is insecure and that there is no known or foreseeable technology that can make it secure.  Still, vendors of internet voting keep claiming that, somehow, their new system is different, or the insecurity doesn’t matter.  Bradley Tusk and his Mobile Voting Foundation keep touting internet voting to journalists and election administrators; this whole effort is misleading and dangerous...

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

**Last Updated:** 2026-01-22T18:43:17.976Z
