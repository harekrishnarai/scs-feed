# Supply Chain Security Daily Report
**Date:** 2026-11-18
**Total Reports Found:** 26

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## GitGuardian Blog

### 1. Java4Shell: When Decoding base64 Leads to RCE

**Link:** [https://blog.gitguardian.com/java4shell-vulnerability-secrets/](https://blog.gitguardian.com/java4shell-vulnerability-secrets/)

**Published:** 11/18/2026

**Summary:** On November 17, 2026, OpenJDK and Oracle fixed Java4Shell. It may allow pre-auth RCE under default configurations. Exploitation was confirmed on identity, CI/CD, artifact repository, and collaboration applications. This kind of Java application stores credentials, so it can be a secret-theft vector.

---

### 2. AI-Powered Attacks Go Autonomous: Start With Credentials

**Link:** [https://blog.gitguardian.com/prepare-for-ai-powered-attacks/](https://blog.gitguardian.com/prepare-for-ai-powered-attacks/)

**Published:** 11/18/2026

**Summary:** Fully autonomous cyberattacks may be only months away. The incidents happening right now show exactly where defenders should focus their attention.

---

### 3. What the ARTEX FBI Alert Means for Credential Security

**Link:** [https://blog.gitguardian.com/artex-fbi-alert/](https://blog.gitguardian.com/artex-fbi-alert/)

**Published:** 11/17/2026

**Summary:** The FBI’s ARTEX alert shows AI agents reaching privileged access in under three hours, while leaked credentials stay valid for years. Here’s what that gap means for defenders and how to close it.

---

## Endor Labs Blog

### 1. Best Application Security Platforms in 2027: 8 Ranked and Compared | Endor Labs

**Link:** [https://www.endorlabs.com/learn/best-application-security-platforms](https://www.endorlabs.com/learn/best-application-security-platforms)

**Published:** 11/18/2026

**Summary:** Eight application security platforms compared on reachability, noise, coverage, and remediation, with the team each one fits.

---

### 2. Top 8 Application Security Platforms: Ranked for 2026 | Endor Labs

**Link:** [https://www.endorlabs.com/learn/best-application-security-platforms-old](https://www.endorlabs.com/learn/best-application-security-platforms-old)

**Published:** 11/18/2026

**Summary:** Application security platforms combine SAST, SCA, container scanning, and secrets detection into one workflow. See the top 8 platforms ranked for 2026.

---

### 3. Java4Shell (CVE-2026-114938): Pre-Auth Heap Overflow in OpenJDK | Endor Labs

**Link:** [https://www.endorlabs.com/learn/java4shell-unauthenticated-rce-reported-in-openjdk-17-cve-2026-114938](https://www.endorlabs.com/learn/java4shell-unauthenticated-rce-reported-in-openjdk-17-cve-2026-114938)

**Published:** 11/18/2026

**Summary:** Java4Shell (CVE-2026-114938) lets attackers corrupt memory in Java servers with a single malformed message, no login required. Researchers say it can lead to full takeover of Jenkins, Jira and Keycloak. A fix is out.

---

### 4. agent-framework compromised: Python startup hooks steal Azure and CI credentials | Endor Labs

**Link:** [https://www.endorlabs.com/learn/agent-framework-compromised-software-supply-chain-attack](https://www.endorlabs.com/learn/agent-framework-compromised-software-supply-chain-attack)

**Published:** 11/17/2026

**Summary:** Attackers pushed two trojanized releases of Microsoft Agent Framework (versions 1.26.1 and 1.26.2) to PyPI that steal Azure, Azure DevOps, and GitHub Actions tokens.

---

### 5. Claude Code with Fable 5.2 scores 36.9% SecPass and 64.8% FuncPass on our coding tasks | Endor Labs

**Link:** [https://www.endorlabs.com/learn/fable-5-2-cheaper-and-faster-not-more-secure-and-much-more-memorization](https://www.endorlabs.com/learn/fable-5-2-cheaper-and-faster-not-more-secure-and-much-more-memorization)

**Published:** 11/17/2026

**Summary:** Claude Code with Fable 5.2 scores 35.8% SecPass and 63.7% FuncPass on our coding tasks: 1.1 points below Fable 5.1 on security, 72% cheaper and done in a median of 1.9 minutes per task instead of 7.2, with 65 solutions removed because the model recalled the upstream fix from training.

---

## Bleeping Computer Security

### 1. Microsoft’s Agent Framework PyPI package compromised to steal credentials

**Link:** [https://www.bleepingcomputer.com/news/security/microsofts-agent-framework-pypi-package-compromised-to-steal-credentials/](https://www.bleepingcomputer.com/news/security/microsofts-agent-framework-pypi-package-compromised-to-steal-credentials/)

**Published:** 11/18/2026

**Summary:** Hackers compromised Microsoft's official Agent Framework Python package on PyPI, publishing two malicious versions designed to steal cloud credentials and other sensitive information from developers' systems. [...]

---

### 2. Apple reports outages affecting iCloud Mail, AppleCare and more

**Link:** [https://www.bleepingcomputer.com/news/apple/apple-reports-outages-affecting-icloud-mail-applecare-and-more/](https://www.bleepingcomputer.com/news/apple/apple-reports-outages-affecting-icloud-mail-applecare-and-more/)

**Published:** 11/17/2026

**Summary:** Apple is reporting service disruptions affecting several of its services, including iCloud Mail, iCloud Account & Sign In, Apple School Manager, and Schoolwork. [...]

---

## StepSecurity Blog

### 1. Protecting where software gets built: StepSecurity’s $20 million Series A

**Link:** [https://www.stepsecurity.io/blog/stepsecurity-20-million-series-a](https://www.stepsecurity.io/blog/stepsecurity-20-million-series-a)

**Published:** 11/18/2026

**Summary:** Today, we’re announcing an oversubscribed $20 million Series A led by Elephant to expand protection for developer machines, package downloads, CI/CD pipelines, and agent sandboxes.

---

### 2. Introducing the StepSecurity Secure Registry Community Tier, Integrated with Harden-Runner

**Link:** [https://www.stepsecurity.io/blog/introducing-the-stepsecurity-secure-registry-community-tier-integrated-with-harden-runner](https://www.stepsecurity.io/blog/introducing-the-stepsecurity-secure-registry-community-tier-integrated-with-harden-runner)

**Published:** 11/18/2026

**Summary:** Today, we’re making the StepSecurity Secure Registry available for free as part of our community tier, and integrating it with Harden-Runner to make it easier to adopt in GitHub Actions.

---

### 3. Microsoft agent-framework PyPI Package Compromised

**Link:** [https://www.stepsecurity.io/blog/microsoft-agent-framework-pypi-package-compromised](https://www.stepsecurity.io/blog/microsoft-agent-framework-pypi-package-compromised)

**Published:** 11/18/2026

**Summary:** Versions 1.26.1 and 1.26.2 of Microsoft's agent-framework PyPI package, published November 17, contain Python startup hooks that harvest cloud and CI/CD credentials and attempt to obtain identity tokens. Both releases send collected data to a webhook.site endpoint. PyPI quarantined both versions; the second malicious release was uploaded after the first quarantine.

---

### 4. Harden-Runner Brings Runtime Security Inside Kata and Nitro Runner Pods

**Link:** [https://www.stepsecurity.io/blog/harden-runner-brings-runtime-security-inside-kata-and-nitro-runner-pods](https://www.stepsecurity.io/blog/harden-runner-brings-runtime-security-inside-kata-and-nitro-runner-pods)

**Published:** 11/18/2026

**Summary:** Harden-Runner monitors GitHub Actions jobs and enforces egress policies inside runner microVMs on Kata Containers and Amazon EKS Nitro Sandboxes.

---

### 5. New StepSecurity Control: Audit GitHub Fork PR Workflow Approval Policies

**Link:** [https://www.stepsecurity.io/blog/new-stepsecurity-control-audit-github-fork-pr-workflow-approval-policies](https://www.stepsecurity.io/blog/new-stepsecurity-control-audit-github-fork-pr-workflow-approval-policies)

**Published:** 11/18/2026

**Summary:** StepSecurity’s new control flags GitHub organizations and public repositories that let fork pull request workflows run without approval.

---

## The Hacker News

### 1. New EggStreme Malware Variant Goes Silent to Evade Security Tools in Government Attacks

**Link:** [https://thehackernews.com/2026/11/eggstreme-hackers-rebuild-malware-with.html](https://thehackernews.com/2026/11/eggstreme-hackers-rebuild-malware-with.html)

**Published:** 11/18/2026

**Summary:** The suspected Chinese advanced persistent threat (APT) group behind the sophisticated EggStreme malware has rebuilt its toolkit as it continues to target government organizations in the Philippines.  "When attackers are exposed, the cheap response is to rotate," Bitdefender said in a technical report shared with The Hacker News. "A file hash changes with every recompile, a domain costs a few

---

### 2. Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials

**Link:** [https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html](https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html)

**Published:** 11/18/2026

**Summary:** Threat actors have compromised Microsoft's agent-framework package to push a credential stealer, according to reports from Aikido, Chainguard, Endor Labs, OX Security, SafeDep, Socket, StepSecurity, and Google-owned Wiz.  The malicious versions, 1.26.1 and 1.26.2, were published 33 minutes apart on November 17, 2026, and are designed to run a credential stealer on every Python start. As of

---

### 3. Russian COLD RELIC Hackers Use Stolen Google Workspace Data to Breach Second U.S. Organization

**Link:** [https://thehackernews.com/2026/11/russian-cold-relic-hackers-use-stolen.html](https://thehackernews.com/2026/11/russian-cold-relic-hackers-use-stolen.html)

**Published:** 11/18/2026

**Summary:** The Russia-linked cyber espionage group known as Cold Relic (formerly COLDRIVER and UNC4057) has been observed weaponizing a single cloud compromise into a launchpad for a series of linked intrusions resulting in third-party compromise.  Google's Mandiant and Threat Intelligence Group (GTIG) said it investigated a 2026 compromise at a U.S.-based organization in which the adversary leveraged

---

### 4. Researchers Claim Two RCE Exploits That Bypass Telegram’s New Android Defenses

**Link:** [https://thehackernews.com/2026/11/researchers-claim-two-rce-exploits-that.html](https://thehackernews.com/2026/11/researchers-claim-two-rce-exploits-that.html)

**Published:** 11/17/2026

**Summary:** A malicious widget can bypass the security filter that Telegram added to its Android app last week and run code outside it, according to NebuSec, a security company.  Widgets are small interactive blocks that bots send inside chat messages, and their JavaScript runs on the user's phone. The researchers ran their demonstration on a Telegram test server, because only approved bots can send

---

### 5. Hackers Found a Way Around GitHub SHA Pinning. This Webinar Explains How to Close the Gap

**Link:** [https://thehackernews.com/2026/11/hackers-found-way-around-github-sha.html](https://thehackernews.com/2026/11/hackers-found-way-around-github-sha.html)

**Published:** 11/17/2026

**Summary:** Pinning GitHub Actions to an exact version of their code, known as SHA pinning, has become the go-to defense against software supply chain attacks. Attackers have already found a way around it.  In March 2026, the hackers who hijacked Trivy, a widely used open-source security scanner, planted malicious code that looked like it came from GitHub's official checkout tool. They even labeled it a

---

## Krebs on Security

### 1. Attackers Used Optimizely to A/B Test Malware on Top Websites

**Link:** [https://krebsonsecurity.com/2026/11/attackers-used-optimizely-to-a-b-test-malware-on-top-websites/](https://krebsonsecurity.com/2026/11/attackers-used-optimizely-to-a-b-test-malware-on-top-websites/)

**Published:** 11/18/2026

**Summary:** At least 178 top web destinations unwittingly served a variety of malware exploits against visitors over the past 24 hours thanks to a security vulnerability involving Optimizely, a company that helps websites customize user experiences and test out new features. Experts say the incident, which saw data-stealing malicious software silently injected into sites like the BBC, CNN, Equifax, Ledger and Zoom, was exacerbated by the reality that few popular websites enforce strict rules on the sources of third-party content.

---

## Sonatype Security Research

### 1. Critical OpenJDK RCE CVE-2026-114938: What to Know

**Link:** [https://www.sonatype.com/blog/critical-openjdk-rce-cve-2026-114938-what-to-know](https://www.sonatype.com/blog/critical-openjdk-rce-cve-2026-114938-what-to-know)

**Published:** 11/17/2026

**Summary:** TL;DR        Calif disclosed Java4Shell, tracked as CVE-2026-114938, as an unauthenticated remote code execution vulnerability in OpenJDK.       The flaw is in the Java runtime's Base64 decoding path, not a third-party library. Reachability depends on the runtime build, processor, and whether an application decodes untrusted Base64 data.       Oracle released updated Java builds as part of its November 2026 security update, but its pre-release notice does not map those Java fixes to this CVE by name.       Finding exposure requires checking runtimes on hosts and in container images. Project dependency scans alone will not identify every affected system.       For the current advisory and response guidance, see our Security Event page for the Critical OpenJDK Vulnerability.      A critical OpenJDK vulnerability, tracked as CVE-2026-114938, can allow an attacker to inject and remotely execute arbitrary code without authentication or user interaction. Calif calls the vulnerability Java4Shell.   The disclosure coincided with Oracle's Java security update on November 17, 2026. That timing has raised questions about which Oracle builds address Java4Shell and what organizations should check.   Teams need to identify vulnerable runtimes across their environments, prioritize network-accessible systems, and apply the patched OpenJDK build through the appropriate vendor.   Java4Shell Is a Runtime Vulnerability, Not a Library Flaw   Java4Shell is a memory corruption vulnerability in the Java runtime itself, not in a third-party library or framework. Because the flaw sits in the runtime, project dependency scans will not identify every affected installation.   Base64 decoding is common in applications that receive data over a network. Our research indicates that a Java 17 application could, in principle, be reachable when it decodes Base64 data from an untrusted source on an affected runtime build and processor.   That does not mean every Java application is exposed in the same way. The runtime build and processor matter, as does whether untrusted input can reach the decoder. The vulnerability is described as pre-authentication, because an attacker may be able to supply that input before logging in or interacting with the application.   Third-party analysis has also reported affected Java versions beyond Java 17. Upwind says it reproduced the memory corruption in tests on Java 17, 21, and 25, and identified Java 27 through code analysis. These are research findings, not a vendor's final affected-version list. Organizations should use vendor guidance to confirm the status of each runtime they operate.   Oracle's November Update Does Not Define the CVE’s Full Scope   Oracle released updated Java builds as part of its November 17 security update. Its November security notice lists 11 Java SE security fixes, all described as remotely exploitable without authentication, with a maximum CVSS 3.1 score of 8.1. Oracle also lists builds for Java SE 8, 11, 17, 21, 25, and 27, along with versions of GraalVM and JavaFX.   The notice is a pre-release announcement and does not identify the 11 issues by CVE. It therefore does not establish which update addresses Java4Shell. The Java versions Oracle lists as affected should not be treated as the confirmed affected-version range for this CVE.   Early coverage reports a 9.2 score for Java4Shell under CVSS 4.0. Oracle reports a maximum score of 8.1 under CVSS 3.1 for its Java SE fixes. Those scores use different CVSS versions and refer to different sets of vulnerabilities. They are not competing scores for the same confirmed issue.   Patch Confirmed Systems and Reduce Exposure   Treat systems confirmed to run a vulnerable OpenJDK build as exposed until the patched runtime is installed. Apply the update supplied by the vendor or distribution responsible for that runtime. Build numbers can vary across distributions, so confirm the fixed version with the supplier rather than assuming a particular version string applies everywhere.   Replacing runtime files on a host does not update a JVM process that is already running. Restart affected services after updating. Rebuild container images using a patched base image, and update products that bundle their own Java runtime. Then verify that the deployed service is running the patched build.   If a product bundles the vulnerable runtime and has no direct upgrade path, contact its maintainers for an update. If no update is available, investigate an alternative component or a mitigating control while tracking the issue to resolution.   Calif’s recommendations describe two possible temporary mitigations: disabling the Base64 intrinsic or limiting AVX use to version 2. The AVX setting applies only to x86-64 hosts. OpenJDK on ARM does not recognize it and may fail to start. These controls are not replacements for a patched runtime. Test them for compatibility and performance impact, and follow the relevant vendor's guidance.   What Teams Should Do Now   Organizations should:        Inventory runtimes: Check the Java runtime used by each running service, including runtimes on hosts, in container images, and bundled with products. Record the build, vendor, processor, deployment location, and owner. Package inventories can help, but they do not replace checking the runtime a service actually uses.       Assess reachability: Check for the relevant AVX-512 processor support and whether the Java Base64 intrinsic is enabled. Identify which Java services listen for network connections.       Prioritize exposure: Start with internet-facing and other network-accessible systems, then review the rest of the environment.       Confirm and apply the fix: Check Oracle or the relevant OpenJDK supplier for the patched build that applies to each runtime. Restart affected services and rebuild images as needed.       Reduce interim risk: Restrict or monitor network access to confirmed vulnerable systems while updates are being applied. Test any temporary mitigation and follow vendor guidance.      Connect Vulnerability Intelligence to Runtime Inventory   Java4Shell is a reminder that vulnerability response depends on knowing what runs across the environment, including the runtimes beneath applications.   CVE-2026-114938 requires organizations to look beneath project dependencies and account for the runtime installed across their environments. Finding each vulnerable OpenJDK build, assigning an owner, and verifying the patch are essential steps in reducing exposure.   Check Sonatype Guide and the associated Security Event page, which contain current details and response guidance as organizations identify affected OpenJDK deployments and verify remediation.

---

### 2. Optimizely Attack Shows Why Supply Chain Ownership Matters

**Link:** [https://www.sonatype.com/blog/optimizely-attack-shows-why-supply-chain-ownership-matters](https://www.sonatype.com/blog/optimizely-attack-shows-why-supply-chain-ownership-matters)

**Published:** 11/17/2026

**Summary:** TL;DR        Malicious JavaScript added to Optimizely projects reached sites across multiple industries, including technology, finance, retail, and media.       The injected JavaScript could swap cryptocurrency addresses, capture payment card information entered into website forms, collect some browser-accessible data, and attempt to deliver iOS exploit chains.       Optimizely said an attacker exploited a vulnerability, added malicious JavaScript to some customer projects, and that the company fixed the vulnerability, removed the code, and secured affected accounts.       Organizations using Optimizely should review project code and account access, investigate relevant logs, and assess potential exposure based on how their sites handled payment and session data.       The Optimizely incident shows how a change in one shared service can reach many organizations through software they already trust.      On November 16, 2026, malicious JavaScript was served to visitors of websites using Optimizely Web Experimentation. Report URI identified 188 infected snippets across 178 organizations, including major technology, media, retail, financial services, and travel companies.   A Shared Service Became a Shared Risk   Optimizely lets customers add custom JavaScript to their projects. In this incident, malicious code was placed in a project's custom-code field. The altered snippet was then delivered as part of the site's normal Optimizely integration, so the change did not have to pass through each customer's source repository or software build.   An unauthorized party exploited a vulnerability in Experimentation to add malicious JavaScript to some customer projects. Optimizely fixed the vulnerability, removed the injected code, secured affected accounts, and added protections against unauthorized code delivery.   This was not a case of attackers changing a customer's application source code or poisoning the CDN cache. The code was added to project settings and delivered as part of a service those websites relied on. An organization can secure its own code and infrastructure while still depending on external services that influence what reaches users.   The Payload Turned Shared Dependence Into Shared Exposure   The injected code used a loader to bring additional JavaScript into the page. Researchers observed multiple loader versions, including one that obscured the external address and another that carried an inline fallback.   That meant blocking one destination alone might not remove every way the code could run.   The payload combined several behaviors:        Cryptocurrency address swapping: The script could replace cryptocurrency addresses in page content and during copy actions, potentially redirecting transfers. Transactions to attacker-controlled wallets were confirmed.       Payment-card skimming: The code looked for card numbers, expiration dates, and security codes submitted through site-controlled forms. It could not access card fields inside cross-origin payment-provider iframes. The available reporting does not establish how many card details were captured.       Browser data collection: The script could send page URLs, screenshots, and cookies available to JavaScript. Cookies marked HttpOnly are not available through document.cookie.       iOS exploit delivery: On Apple mobile devices, the script attempted to load Coruna and DarkSword exploit chains. Researchers have not established how many devices, if any, were successfully compromised.      The confirmed cryptocurrency transactions show that at least one part of the operation had financial impact.   These capabilities show why teams need to understand not only what code a service is expected to run, but also what that code can access and how changes to it are controlled.   Integrity and Intelligence Must Cover the Full Path   Component intelligence helps teams identify the software they use, understand its role, and assess its known risks. Artifact integrity addresses a different question: whether the software moving through development and delivery is still the expected artifact. Both matter because organizations need context about their components and confidence in what they build and distribute.   The Optimizely incident exposes a gap between those controls and what happens in production. The malicious code was added through a third-party project setting and delivered to visitors' browsers. It did not need to enter a customer's source repository or change a locally built artifact. A package inventory or artifact check would not, by itself, show whether a vendor-managed script had changed.   That doesn't make component intelligence or artifact integrity less relevant. It means organizations need to understand the scope of each control and account for the code paths it does not cover. Alongside knowing which components enter software and verifying the artifacts teams release, organizations need visibility into the external services that can change code running on their sites.   Software Supply Chain Ownership Is an Operating Model   Organizations using Optimizely Web should consult Optimizely's incident update for current information and use their project and access records to determine whether their sites were affected.   More broadly, this incident shows why responsibility for software inputs and services needs to be shared across development, platform, security, and web teams. Those teams need a common understanding of what their software depends on, how those dependencies reach production, and who is accountable for changes along the way.   Owning the software supply chain means understanding what is being shipped and what external code can become part of the software customers use. Component intelligence, artifact integrity, and runtime visibility each help address a different part of that responsibility. For more on Sonatype's approach, check out our software supply chain security solution.

---

### 3. Why Traditional SCA Cannot Keep Up With AI-Generated Code

**Link:** [https://www.sonatype.com/blog/why-traditional-sca-cannot-keep-up-with-ai-generated-code](https://www.sonatype.com/blog/why-traditional-sca-cannot-keep-up-with-ai-generated-code)

**Published:** 11/17/2026

**Summary:** AI coding tools generate and revise code in seconds. They can also make dependency decisions along the way in selecting packages and versions, adding frameworks, or changing how an application uses existing components.

---

## JFrog Security Blog

### 1. The Vulnerability Playbook Is Broken: A CISO’s Cheat Sheet To AI-Era Cybersecurity

**Link:** [https://jfrog.com/blog/cisos-cheat-sheet-to-ai-era-cybersecurity/](https://jfrog.com/blog/cisos-cheat-sheet-to-ai-era-cybersecurity/)

**Published:** 11/17/2026

**Summary:** Vulnerability remediation has been following the same outdated playbook: A scanner finds a vulnerable component, a ticket gets filed, a developer gets assigned. Then a pull request gets reviewed, and a pipeline runs. Then weeks or months later, the vulnerability is closed. That playbook assumed one thing: We have time. We no longer do. Exploitation …

---

## Schneier on Security

### 1. Formal Verification of the Signal Protocol Using AI

**Link:** [https://www.schneier.com/blog/archives/2026/11/formal-verification-of-the-signal-protocol-using-ai.html](https://www.schneier.com/blog/archives/2026/11/formal-verification-of-the-signal-protocol-using-ai.html)

**Published:** 11/17/2026

**Summary:** This seems like a good thing: Google Deepmind researchers used agentic AI to mathematically prove, or “formally verify,” a number of the Signal protocol’s key cryptographic guarantees­a landmark development for the widely used cryptography and AI itself. Conducted as a sort of proof-of-concept project in just four weeks, the work is significant in two ways. It serves as further independent validation of the cryptography that protects massive quantities of the world’s communications on platforms like the Signal app, Google Messages, and WhatsApp. And it demonstrates Google DeepMind’s formal verification capabilities using a new AI framework called AlphaProof Code...

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

**Last Updated:** 2026-11-18T18:31:43.622Z
