# Supply Chain Security Daily Report
**Date:** 2026-08-22
**Total Reports Found:** 11

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. May this night carry my will

**Link:** [https://phrack.org/issues/58/advanced-return-into-libc-exploits-pax-case-study](https://phrack.org/issues/58/advanced-return-into-libc-exploits-pax-case-study)

**Published:** 8/22/2026

**Summary:** Article URL: https://phrack.org/issues/58/advanced-return-into-libc-exploits-pax-case-study Comments URL: https://news.ycombinator.com/item?id=49402367 Points: 2 # Comments: 0

---

### 2. Laptop catches fire on US flight, with passenger treated at airport

**Link:** [https://www.bbc.com/news/articles/ce979zpjj85o](https://www.bbc.com/news/articles/ce979zpjj85o)

**Published:** 8/22/2026

**Summary:** Article URL: https://www.bbc.com/news/articles/ce979zpjj85o Comments URL: https://news.ycombinator.com/item?id=49402303 Points: 1 # Comments: 0

---

## Bleeping Computer Security

### 1. Hackers infect Android car head units with proxy botnet malware

**Link:** [https://www.bleepingcomputer.com/news/security/hackers-infect-android-car-head-units-with-proxy-botnet-malware/](https://www.bleepingcomputer.com/news/security/hackers-infect-android-car-head-units-with-proxy-botnet-malware/)

**Published:** 8/22/2026

**Summary:** A supply-chain attack targeting Android-based car head units is using a legitimate device-update app to spread malware that enlists compromised devices in a proxy botnet or uses them for ad fraud. [...]

---

### 2. SickKids data breach exposes employee and job applicant info

**Link:** [https://www.bleepingcomputer.com/news/security/sickkids-data-breach-exposes-employee-and-job-applicant-info/](https://www.bleepingcomputer.com/news/security/sickkids-data-breach-exposes-employee-and-job-applicant-info/)

**Published:** 8/21/2026

**Summary:** Toronto's Hospital for Sick Children (SickKids) says a cybersecurity incident exposed the personal information of some current and former employees and job applicants, stemming from a flaw in third-party software. Clinical systems and patient records were not affected. (264) [...]

---

## Endor Labs Blog

### 1. AI SAST: Code Security for the Agentic SDLC | Ebook/Report | Endor Labs

**Link:** [https://www.endorlabs.com/learn/ai-sast-code-security-for-the-agentic-sdlc](https://www.endorlabs.com/learn/ai-sast-code-security-for-the-agentic-sdlc)

**Published:** 8/22/2026

**Summary:** How Endor Labs AI SAST combines program analysis, agentic reasoning, and deterministic engineering to find and fix the flaws that matter in AI-written code.

---

## Schneier on Security

### 1. Friday Squid Blogging: Neon Flying Squid

**Link:** [https://www.schneier.com/blog/archives/2026/08/friday-squid-blogging-neon-flying-squid.html](https://www.schneier.com/blog/archives/2026/08/friday-squid-blogging-neon-flying-squid.html)

**Published:** 8/21/2026

**Summary:** The neon flying squid can fly in formation. The shoal of about 100 squid rose unexpectedly from a patch of the Pacific Ocean around 370 miles from Tokyo and glided near the boat for about 30 metres. The astonished researchers were the first to capture photographs of such a thing, which looked like the early stages of an alien invasion. They were probably neon flying squid (Ommastrephes bartramii), the subsequent study states, a species that is part of a 20-strong flying squid family that was known to leap from the water but, until then, was only rumoured to also be able to glide above it...

---

### 2. More Incidents of AIs Going Rogue in Cybersecurity Challenges

**Link:** [https://www.schneier.com/blog/archives/2026/08/more-incidents-of-ais-going-rogue-in-cybersecurity-challenges.html](https://www.schneier.com/blog/archives/2026/08/more-incidents-of-ais-going-rogue-in-cybersecurity-challenges.html)

**Published:** 8/21/2026

**Summary:** The AI Security Institute has a new report of AI systems engaging in “unsanctioned behavior”—what I have been calling “genie behavior—while being tested on their cybersecurity capabilities. The incident stemmed from a single evaluation where agents were given a task of solving a cyber security challenge. We ran this challenge 122 times across several models. Our investigation found that in 10 of those runs, an AI agent took autonomous, unsanctioned action on the live internet, targeting real people and organisations. In total, we catalogued 19 such actions. Almost all of this behaviour (17 actions) came from a single model, Anthropic’s Mythos 5, with 2 actions involving OpenAI’s GPT-5.6-Sol with cyber classifiers (mechanisms to prevent misuse) disabled. In the most serious case, an agent tried to insert malicious code into an open-source project. In an attempt to get the code approved, the agent engaged in social engineering—creating fake online identities and using them to pressure the project’s maintainer to approve the code. A human maintainer caught and refused to approve the malicious code...

---

## Sonatype Security Research

### 1. 91 Spring CVEs: The AI Vulnerability Consumption Problem

**Link:** [https://www.sonatype.com/blog/91-spring-cves-highlight-the-growing-ai-vulnerability-consumption-problem](https://www.sonatype.com/blog/91-spring-cves-highlight-the-growing-ai-vulnerability-consumption-problem)

**Published:** 8/21/2026

**Summary:** TL;DR        Broadcom released a large batch of Spring security advisories on August 20, 2026, with Sonatype tracking 91 CVEs across Spring Framework and related projects.       At the time of publishing, Sonatype Guide currently identifies 209,569 software components affected by the security event.       The disclosure comes amid a dramatic rise in AI-assisted vulnerability discovery. Broadcom previously reported a more than 1,700% increase in monthly Spring security advisories from March to April 2026.       AI is making vulnerability discovery faster, but organizations still have to determine where vulnerable components are deployed, prioritize risk, and identify safe remediation paths.      On August 20, 2026, Broadcom published a large collection of security advisories affecting Spring and related projects.   The vulnerabilities span multiple Spring projects and include several high-severity issues. The disclosure includes weaknesses involving insecure deserialization, untrusted code execution under certain conditions, exposure of sensitive information, server-side request forgery (SSRF), path traversal, denial of service, improper authorization, and other vulnerability classes.    The scale is notable on its own. But the disclosure also reflects a larger shift already underway in software security: AI is accelerating vulnerability discovery faster than many organizations can absorb and remediate the resulting findings.   For Sonatype co-founder and CTO Brian Fox, the Spring disclosure illustrates how AI is accelerating vulnerability discovery faster than downstream remediation:   "The Spring team has done exactly what we want a maintainer to do here: process the findings, produce fixes, and publish patched versions. Now the question is how quickly those fixes make their way through the rest of the software supply chain."   High Number of CVEs Create a Much Larger Remediation Problem   Spring's August 2026 security advisory affects projects across the ecosystem, including Spring Security, Spring Cloud Config, Spring AI, Spring Data REST, Spring Integration, Reactor Core, Reactor Netty, Spring AMQP, and Spring Batch. Many individual advisories also include fixes across multiple supported version lines.   That makes the downstream impact considerably larger than the CVE count alone might suggest. At the time of publication, Sonatype Guide identified 209,569 affected components, many of which are non-Spring components that bundle vulnerable Spring code.    As Fox noted, publishing a fix is only the beginning of the remediation process: "A fix existing upstream doesn't mean the vulnerability is remediated downstream. Other open source projects have to consume the new versions, enterprises have to understand where they're exposed, and applications ultimately have to be rebuilt and deployed with those fixes."    For development and security teams, that turns a vulnerability disclosure into a much larger set of questions:        Which applications contain the affected Spring components?       Which vulnerable versions are actually deployed?       Are those dependencies direct or transitive?       Which vulnerabilities present the greatest risk?       Which upgrades remediate the issues without introducing unnecessary disruption?      Those decisions become harder as vulnerability disclosures grow in both volume and frequency.   Spring Was Already Seeing an AI-Driven Surge   This is not the first unusually large Spring vulnerability release this year.   In June 2026, Broadcom said Spring had experienced an over 1,700% increase in monthly security advisories from March to April 2026, prompting the Spring engineering team to expand its use of AI-assisted security analysis and frontier-model scanning. Broadcom also described its June release as the largest set of Spring security updates in the project's 23-year history.   Historically, Spring received an average of roughly 6.5 new security reports per month. In March 2026, that jumped to 55. In April, Spring received 482 security reports across 65 scanned projects, including 370 produced by its own scanning capabilities and another 112 submitted by the community.   AI-assisted vulnerability discovery is a major part of that change. Spring has pointed to Anthropic's Mythos research as one example of how advanced AI models are uncovering vulnerabilities at much greater scale. But Sonatype has not confirmed that Mythos specifically discovered the 91 CVEs included in the August 20, 2026 security event.   CVE-2026-59285: Unsafe Deserialization Can Lead to Remote Code Execution   One vulnerability in the August disclosure stands out for both its severity and potential impact: CVE-2026-59285, an unsafe deserialization vulnerability in Spring for GraphQL.   Sonatype Research found that affected applications may be exploitable when they use Jackson 2.x for JSON deserialization, expose paginated GraphQL fields, and include certain classes that can be abused during deserialization.   Sonatype rates the vulnerability "9.2 Critical" CVSS score and recommends upgrading to a non-vulnerable version. If Spring GraphQL is included transitively and no direct upgrade path exists, teams may need to update the parent dependency, contact its maintainer, or apply mitigating controls.   CVE-2026-59318: Spring AI Tool Calling Can Bypass Request Boundaries   Another notable issue is CVE-2026-59318, which affects Spring AI's tool-calling functionality.   Under certain conditions, a prompt-injection attack could cause Spring AI to invoke a tool that was not made available to the current request, potentially allowing privilege escalation. Spring rates the vulnerability Medium severity.   The issue reflects a broader concern Sonatype Research Labs recently highlighted following Black Hat 2026: telling an AI agent what it should or should not do is not the same as enforcing what it is actually allowed to do. If an attacker can manipulate the model while the underlying system still permits access to a tool or action, prompt-level restrictions may not be enough.   Spring recommends upgrading affected Spring AI versions to a fixed release.   What Organizations Using Spring Should Do   Organizations using Spring should review the August advisories and determine if affected versions are present across applications, development environments, and software repositories.   Teams should prioritize vulnerabilities based on actual application exposure and exploitability rather than severity scores alone, then move affected components to appropriate fixed versions. More broadly, organizations should prepare for large vulnerability disclosures to become increasingly common as AI-assisted research scales.   As vulnerability discovery moves closer to machine speed, vulnerability intelligence and remediation will need to follow.   Explore the full Spring August 2026 security event in Sonatype Guide for the latest affected components, CVEs, and associated weaknesses.

---

## The Hacker News

### 1. 14 Trojanized npm Packages Drop RedC2 4.0 Linux Backdoor With AI-Assisted C2

**Link:** [https://thehackernews.com/2026/08/14-trojanized-npm-packages-drop-redc2.html](https://thehackernews.com/2026/08/14-trojanized-npm-packages-drop-redc2.html)

**Published:** 8/21/2026

**Summary:** Cybersecurity researchers have discovered a set of trojanized npm packages that masquerade as working calendar and streak utilities but are engineered to stealthily deliver an artificial intelligence (AI)-powered Linux implant dubbed RedC2 4.0.  "When the module loads, it locates the bundled binary, marks it executable, and launches it as a detached background process," TrendAI, Trend Micro's

---

### 2. Android Car Malware Spreads Through Built-In Updaters for Ad Fraud, Proxy Botnet

**Link:** [https://thehackernews.com/2026/08/android-car-malware-spreads-through.html](https://thehackernews.com/2026/08/android-car-malware-spreads-through.html)

**Published:** 8/21/2026

**Summary:** Cybersecurity researchers have flagged a new malware family that's specifically designed to infect Android-based vehicle head unit firmware developed by DoFun.  Kaspersky, which discovered the threat in June 2026, said the end goal of the malware is to serve a multi-stage downloader to enable ad fraud and creation of a proxy botnet.  "The malware spread through the built-in updaters of

---

## JFrog Security Blog

### 1. Propagating User Identity From AI Agents to Your Tools: Amazon Bedrock AgentCore Gateway and JFrog Artifactory

**Link:** [https://jfrog.com/blog/amazon-bedrock-agentcore-gateway-jfrog-artifactory/](https://jfrog.com/blog/amazon-bedrock-agentcore-gateway-jfrog-artifactory/)

**Published:** 8/21/2026

**Summary:** Join us at swampUP New York, September 1-3, for our joint session Trusted AI Delivery at Scale: Securing Every Artifact from Curation to Cloud, where we walk the full chain of custody from the moment a package enters your organization to the moment your agent runs on Amazon Bedrock AgentCore. Register here. AI agents …

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

**Last Updated:** 2026-08-22T18:41:57.775Z
