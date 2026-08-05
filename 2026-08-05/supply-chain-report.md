# Supply Chain Security Daily Report
**Date:** 2026-08-05
**Total Reports Found:** 27

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Open Source Observatory (OSOR)

**Link:** [https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor)

**Published:** 8/5/2026

**Summary:** Article URL: https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor Comments URL: https://news.ycombinator.com/item?id=49187207 Points: 3 # Comments: 0

---

### 2. Ask HN: Who Has This Pain?

**Link:** [https://news.ycombinator.com/item?id=49187151](https://news.ycombinator.com/item?id=49187151)

**Published:** 8/5/2026

**Summary:** has to open media files from untrusted sources in sensitive environments as part of their daily workflow + fear that a zero-day exploit could be in one of those media files + cyber attack would have huge impact on the business Comments URL: https://news.ycombinator.com/item?id=49187151 Points: 2 # Comments: 0

---

### 3. London cops handed victim's new address and number to her stalker, watchdog says

**Link:** [https://www.theregister.com/security/2026/08/05/london-cops-handed-victims-new-address-and-number-to-her-stalker-watchdog-says/5283382](https://www.theregister.com/security/2026/08/05/london-cops-handed-victims-new-address-and-number-to-her-stalker-watchdog-says/5283382)

**Published:** 8/5/2026

**Summary:** Article URL: https://www.theregister.com/security/2026/08/05/london-cops-handed-victims-new-address-and-number-to-her-stalker-watchdog-says/5283382 Comments URL: https://news.ycombinator.com/item?id=49187104 Points: 4 # Comments: 0

---

## Sonatype Security Research

### 1. Mini Shai-Hulud npm Attack: More Than 2,200 Components Impacted

**Link:** [https://www.sonatype.com/blog/mini-shai-hulud-npm-attack-more-than-2200-components-impacted](https://www.sonatype.com/blog/mini-shai-hulud-npm-attack-more-than-2200-components-impacted)

**Published:** 8/5/2026

**Summary:** TL;DR        A new wave of the Shai-Hulud malicious package campaign emerged on npm, with 2,225 software component versions impacted.       The malware executes through a malicious preinstall hook, steals npm, GitHub, cloud, Kubernetes, Vault, CI/CD, and other credentials, then uses stolen publishing access to compromise additional packages.       Organizations that installed an affected version should treat the environment as potentially compromised. Remove the malware and any persistence before revoking credentials, then rebuild from known-good components.      On August 4, 2026, Shai-Hulud re-emerged in the keyv and cacheable ecosystems on npm, quickly expanding into packages controlled by other maintainers, including packages in the @servicetitan namespace.   The affected releases use trusted packages to deliver credential-stealing malware and propagate into additional npm components. The package may be legitimate while the release is not.   What Happened?   Attackers published malicious versions of legitimate npm packages through a compromised GitHub maintainer account and additional publishing accounts reached using stolen credentials, including accounts with access to packages in the @servicetitan namespace. The affected releases contain a malicious preinstall hook that invokes setup.mjs.   Where dependency lifecycle scripts are permitted, the loader downloads a standalone Bun runtime and executes an obfuscated second-stage payload identified as Math_Symbol.js or Math_Init.js. npm 12 blocks unapproved dependency install scripts by default, but the hook can still execute in earlier npm versions or environments configured to permit it.   The package can continue working as expected while the surrounding environment is compromised. The malware searches local files, environment variables, running processes, cloud metadata services, Kubernetes service accounts, and Vault locations for npm, GitHub, cloud, CI/CD, database, SSH, payment, messaging, and other credentials.   It then encrypts and exfiltrates the collected data. When it finds usable npm publishing access, it identifies other packages controlled by the victim, injects the same malicious hook and payload, increments their versions, and republishes them.   That creates a repeatable cycle:        Compromise a trusted maintainer or publishing credential.       Publish malware through a legitimate package.       Steal credentials from a developer machine or CI environment.       Use those credentials to compromise more packages.       Repeat.      The use of Bun adds another layer to the execution chain and may help the payload operate beyond controls focused narrowly on Node.js. Relevant activity can include node running setup.mjs, downloads of a Bun archive, Bun executing Math_Symbol.js or Math_Init.js, temporary Bun files, and unexpected outbound traffic to npm, GitHub, cloud metadata services, or attacker-controlled infrastructure.   How Shai-Hulud Persists and Evolves   The original Shai-Hulud campaign, first observed in September 2025, demonstrated that malicious npm packages could do more than steal secrets.   This campaign follows the defining behavior of the Shai-Hulud malware family: compromise trusted packages, harvest credentials, abuse publishing access, and propagate through the open source ecosystem.   Earlier Shai-Hulud npm activity showed that malware could move beyond one-time credential theft and use stolen tokens to poison additional packages. Later Miasma waves continued to change their execution and obfuscation techniques while preserving that basic model.   Mini Shai-Hulud adds or extends several techniques, including:        Downloading Bun to execute its second stage.       Using separate GitHub and domain-based exfiltration channels.       Targeting AI coding and IDE configuration.       Establishing host-level persistence.       Republishing compromised packages through trusted identities and workflows.      Microsoft Threat Intelligence reported a consistent infection pattern across the affected packages it examined, suggesting one actor was using multiple stolen tokens. That does not establish that every Shai-Hulud campaign comes from the same operator, but the technical lineage is difficult to miss   More Than 2,200 Affected Versions   At the time of publication, Sonatype Research Labs is tracking 2,225 component versions associated with sonatype-2026-005579.   Sonatype tracks versions because risk can differ from one release to the next. Teams need to know whether the version they actually use is affected, not simply whether the package name appears on a list.   The count is a current snapshot, not a final tally. Organizations should check their application exposure in Sonatype Guide or their software composition analysis (SCA) data rather than rely on an early static package list.   How Should Organizations Respond?   Organizations should check developer workstations, CI/CD runners, build agents, caches, container images, and related environments for affected components.   Review package.json, package-lock.json, npm-shrinkwrap.json, yarn.lock, pnpm-lock.yaml, SBOMs, build logs, and repository or proxy telemetry. Look for:        setup.mjs, Math_Symbol.js, and Math_Init.js.       Unexpected Bun binaries.       Suspicious changes to .claude/settings.json or .vscode/tasks.json.       Unauthorized npm releases or unusual GitHub repository activity.      If an affected version was installed, removing the package is not enough. Isolate the system, preserve relevant logs, investigate outbound activity, and remove any persistence before revoking or rotating potentially exposed npm, GitHub, cloud, Vault, Kubernetes, CI/CD, SSH, database, and service credentials.   Then rebuild from a known-clean environment using verified, uncompromised package versions. Do not assume a later version is safe simply because its number is higher.   Trust Is Still the Attack Vector   The Mini Shai-Hulud npm compromise reinforces a pattern Sonatype continues to track across npm attacks: adversaries are increasingly targeting trusted maintainers, packages, and publishing workflows rather than relying on typosquatting, dependency confusion, or suspicious new package names.   Many organizations still make software security decisions based on historical reputation:        The package is popular.       The maintainer is known.       The project has existed for years.       Previous versions were safe.       The release includes provenance.       The update appears to come from the normal publishing workflow.      None of those signals proves that the component being downloaded now is safe.   Security teams must verify the specific behavior of incoming component versions rather than relying on historical project trust. They also need proactive controls to intercept malicious components before they execute in developer workstations or build pipelines.   Sonatype Research Labs will continue investigating the campaign and updating sonatype-2026-005579 as additional components and technical details are confirmed. This follows Sonatype's editorial approach of leading with timely intelligence, grounding conclusions in research, and giving developers and security teams practical next steps.

---

### 2. 5 Reasons Developers Still Download Malicious Packages

**Link:** [https://www.sonatype.com/blog/5-reasons-developers-still-download-malicious-packages](https://www.sonatype.com/blog/5-reasons-developers-still-download-malicious-packages)

**Published:** 8/4/2026

**Summary:** Engineering organizations deploy dependency scanners, train developers, secure endpoints, and establish policies for open source components. Yet malicious packages still reach developer workstations, build systems, and CI/CD environments.

---

## The Hacker News

### 1. Paperclip AI Flaws Let Attackers Run Host Commands via Malicious Agent Imports

**Link:** [https://thehackernews.com/2026/08/paperclip-ai-flaws-let-attackers-run.html](https://thehackernews.com/2026/08/paperclip-ai-flaws-let-attackers-run.html)

**Published:** 8/5/2026

**Summary:** Two security flaws in Paperclip could let attackers execute commands on a network server or a developer's computer. Paperclip is an open-source control plane for teams of artificial intelligence (AI) agents, and both paths rely on importing a malicious agent and starting it.  A third flaw could expose sensitive data and control-plane details through application programming interface (API) routes

---

### 2. Trojanized npm Packages Employ NullReceiver Tactic to Decode C2 IP from Blockchain

**Link:** [https://thehackernews.com/2026/08/trojanized-npm-packages-decode-c2-ip.html](https://thehackernews.com/2026/08/trojanized-npm-packages-decode-c2-ip.html)

**Published:** 8/5/2026

**Summary:** Cybersecurity researchers have flagged an evolution of the EtherHiding blockchain-based command-and-control (C2) technique that conceals the C2 server IP address inside a made-up destination address of a completely empty Ethereum transfer.  The new dead drop resolver approach, observed in two trojanized npm packages "bianira-ui" and "fluid-type-ui," has been codenamed NullReceiver by

---

### 3. Critical Gitea Flaw Let Unauthenticated Attackers Read Server Files via Org-Mode Markup

**Link:** [https://thehackernews.com/2026/08/critical-gitea-flaw-let-unauthenticated.html](https://thehackernews.com/2026/08/critical-gitea-flaw-let-unauthenticated.html)

**Published:** 8/5/2026

**Summary:** An unauthenticated attacker can read any file the service account can access on Gitea, the self-hosted Git platform, in versions 1.22.1 through 1.27.0. No login, no repository write access. A public repository and crafted Org-mode markup are enough. The flaw is fixed in Gitea 1.27.1.  The file-read flaw is tracked as CVE-2026-59774, rated Critical with a CVSS score of 9.8, and received its

---

### 4. Open VSX Removes 77 Malicious Evil Twin Extensions Exfiltrating Developer Data

**Link:** [https://thehackernews.com/2026/08/open-vsx-removes-77-malicious-evil-twin.html](https://thehackernews.com/2026/08/open-vsx-removes-77-malicious-evil-twin.html)

**Published:** 8/5/2026

**Summary:** A cluster of 77 extensions on the Open VSX marketplace has been found to impersonate legitimate developer tools while transmitting information about the systems and development environments on which they were installed.  The "evil twin" extensions were uploaded to the repository between July 26 and August 1, 2026, according to Manifold Security. The packages have been removed from Open VSX as of

---

### 5. Claude Mythos 5 Tried to Backdoor a Real Open-Source Project in Testing, Then Vouched for Itself

**Link:** [https://thehackernews.com/2026/08/claude-mythos-5-tried-to-backdoor-real.html](https://thehackernews.com/2026/08/claude-mythos-5-tried-to-backdoor-real.html)

**Published:** 8/5/2026

**Summary:** An agent running Anthropic's Claude Mythos 5 spent 34 hours trying to get a malware dropper merged into a real open-source project during a cyber evaluation by the UK's AI Security Institute.  When a bystander publicly warned that the code was malicious, the agent denied it, force-pushed a rewritten branch history to erase the evidence, and posted from a second account it controlled to vouch for

---

## GitGuardian Blog

### 1. 40 Million Fake Push: When Spam Commits Took Over The Public GitHub

**Link:** [https://blog.gitguardian.com/40-million-fake-push-when-spam-commits-took-over-the-public-github/](https://blog.gitguardian.com/40-million-fake-push-when-spam-commits-took-over-the-public-github/)

**Published:** 8/5/2026

**Summary:** Millions of fake commits are flooding GitHub's public feed. We followed the trail to a rebranded gambling site hiding behind a defunct lottery brand.

---

### 2. Securing Agentic AI Workflows in n8n: From Leaked API Keys to Encryption Key Compromise

**Link:** [https://blog.gitguardian.com/n8n-security-encryption-key-compromise/](https://blog.gitguardian.com/n8n-security-encryption-key-compromise/)

**Published:** 8/5/2026

**Summary:** A leaked n8n API key is only the start. GitGuardian's research traces the full chain, from exposed tokens and weak keys to CVE-2026-25053 and the N8N_ENCRYPTION_KEY that protects every stored credential, then lays out a hardened configuration to break it.

---

### 3. Credential Harvesting Explained: How Attackers Collect Secrets From Developer Machines

**Link:** [https://blog.gitguardian.com/credential-harvesting/](https://blog.gitguardian.com/credential-harvesting/)

**Published:** 8/4/2026

**Summary:** Credential harvesting is how attackers collect valid secrets at scale. See how it works, why developer machines are a prime target, and how to find them first.

---

## JFrog Security Blog

### 1. The Secret Sauce of SLSA: DevGovOps at the Speed of Agentic AI

**Link:** [https://jfrog.com/blog/jfrog-devgovops-and-slsa-compliance/](https://jfrog.com/blog/jfrog-devgovops-and-slsa-compliance/)

**Published:** 8/5/2026

**Summary:** Software supply chain engineering has reached a critical inflection point. As autonomous AI coding agents transition from generating autocomplete suggestions to planning, writing, reviewing, and deploying entire software pipelines without humans in the loop, the connection between human intent and production binaries is fracturing. This shift has created a severe structural deficit across enterprise tech …

---

### 2. swampUP 2026 Preview: The Trust Layer for the Agentic Software Supply Chain

**Link:** [https://jfrog.com/blog/swampup-2026-preview-trust-layer-agentic-software-supply-chain/](https://jfrog.com/blog/swampup-2026-preview-trust-layer-agentic-software-supply-chain/)

**Published:** 8/4/2026

**Summary:** Malicious packages and AI assets have grown 7.4x in the last three years. And yet, four out of five enterprises have no governance framework for coding agents. The software supply chain has become agentic, yet most enterprises are still securing and governing it with the manual systems from the last era. This moment requires a …

---

## Schneier on Security

### 1. Vulnerabilities in Car Anti-Theft Device

**Link:** [https://www.schneier.com/blog/archives/2026/08/vulnerabilities-in-car-anti-theft-device.html](https://www.schneier.com/blog/archives/2026/08/vulnerabilities-in-car-anti-theft-device.html)

**Published:** 8/5/2026

**Summary:** This is disturbing: …a team of security researchers at UC San Diego, who found that a model of aftermarket car alarm known as the KARR Security System, installed in more than 2 million vehicles across the US by their estimate, can let any hacker within Bluetooth range send radio commands to silently unlock the car at will, turn off its alarm, honk the car’s horn or flash its lights, or even disable its ignition and leave a driver stranded.

---

### 2. Some Claude Chats Are Searchable on Google

**Link:** [https://www.schneier.com/blog/archives/2026/08/some-claude-chats-are-searchable-on-google.html](https://www.schneier.com/blog/archives/2026/08/some-claude-chats-are-searchable-on-google.html)

**Published:** 8/4/2026

**Summary:** And it’s personal information (alternate link): The exposed data includes an AI-powered therapy app that someone appears to have vibe-coded, notes on meetings, and a dashboard someone made apparently to analyze medical billing data. Exposed chats reportedly include private cryptocurrency wallet keys and personal information like peoples’ addresses.  What seems to be the issue is a user setting about data sharing. Anthropic’s position is that it’s not their problem: “We give people control over sharing their Claude conversations publicly, and in keeping with our privacy principles, we do not share chat directories or sitemaps with search engines like Google,” the company said in a statement. “These shareable links are not guessable or discoverable unless people choose to share them themselves. When someone shares a conversation, they are making that content publicly accessible, and like other public web content, it may be archived by third-party services.”...

---

## Bleeping Computer Security

### 1. OpenAI, Anthropic AI agents targeted real people and systems in cyber tests

**Link:** [https://www.bleepingcomputer.com/news/security/openai-anthropic-ai-agents-targeted-real-people-and-systems-in-cyber-tests/](https://www.bleepingcomputer.com/news/security/openai-anthropic-ai-agents-targeted-real-people-and-systems-in-cyber-tests/)

**Published:** 8/4/2026

**Summary:** OpenAI and Anthropic have confirmed that their AI models were involved in separate, newly disclosed third-party cybersecurity testing incidents that resulted in a real website being breached and social engineering attacks against people outside the intended testing boundaries. [...]

---

### 2. New XCSSET variant targets macOS devs via compromised Xcode projects

**Link:** [https://www.bleepingcomputer.com/news/security/new-xcsset-variant-targets-macos-devs-via-compromised-xcode-projects/](https://www.bleepingcomputer.com/news/security/new-xcsset-variant-targets-macos-devs-via-compromised-xcode-projects/)

**Published:** 8/4/2026

**Summary:** A new version of the XCSSET malware is targeting thousands of macOS users through compromised Xcode projects and GitHub repositories. [...]

---

### 3. Massive ChainDrop npm supply-chain attack infects hundreds of packages

**Link:** [https://www.bleepingcomputer.com/news/security/massive-chaindrop-npm-supply-chain-attack-infects-hundreds-of-packages/](https://www.bleepingcomputer.com/news/security/massive-chaindrop-npm-supply-chain-attack-infects-hundreds-of-packages/)

**Published:** 8/4/2026

**Summary:** Self-propagating malware named 'ChainDrop' has compromised more than 1,300 packages with a combined 2 billion monthly downloads on the Node Package Manager (npm) registry. [...]

---

## Endor Labs Blog

### 1. Malware Defense: A multi-agent detection engine and package firewall | Ebook/Report | Endor Labs

**Link:** [https://www.endorlabs.com/learn/malware-defense-a-multi-agent-detection-engine-and-package-firewall](https://www.endorlabs.com/learn/malware-defense-a-multi-agent-detection-engine-and-package-firewall)

**Published:** 8/4/2026

**Summary:** Open source malware doesn't wait for a CVE. Neither should your defenses.

---

### 2. NPM Malware Compromises keyv and cacheable with 500M+ Weekly Downloads and Spreads to Hundreds of Packages | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/npm-malware-compromises-keyv-and-cacheable-with-500m-weekly-downloads-and-spreads-to-hundreds-of-packages](https://www.endorlabs.com/learn/npm-malware-compromises-keyv-and-cacheable-with-500m-weekly-downloads-and-spreads-to-hundreds-of-packages)

**Published:** 8/4/2026

**Summary:** We are actively investigating a coordinated malware campaign affecting a broad set of highly downloaded packages by Jared Wray (GitHub) and affecting the cacheable ecosystem.

---

### 3. SBOM Hub & VEX | Solution Brief | Endor Labs

**Link:** [https://www.endorlabs.com/learn/sbom-hub-vex](https://www.endorlabs.com/learn/sbom-hub-vex)

**Published:** 8/4/2026

**Summary:** SBOM Hub & VEX

---

### 4. Artifact Signing | Solution Brief | Endor Labs

**Link:** [https://www.endorlabs.com/learn/artifact-signing](https://www.endorlabs.com/learn/artifact-signing)

**Published:** 8/4/2026

**Summary:** Artifact Signing

---

### 5. AI Model Governance | Solution Brief | Endor Labs

**Link:** [https://www.endorlabs.com/learn/ai-model-governance](https://www.endorlabs.com/learn/ai-model-governance)

**Published:** 8/4/2026

**Summary:** AI Model Governance

---

## StepSecurity Blog

### 1. ChainDrop npm Worm: Bun-loaded CI/CD credential harvester with Ethereum dead-drop C2

**Link:** [https://www.stepsecurity.io/blog/chaindrop-npm-worm](https://www.stepsecurity.io/blog/chaindrop-npm-worm)

**Published:** 8/4/2026

**Summary:** ChainDrop npm worm: 444 packages and 2,212 versions poisoned, starting with keyv@6.0.0. Payload analysis, affected package list, IOCs, and remediation steps.

---

## Kiuwan Blog

### 1. More Than Half of All Code Is Now AI-Generated: Here’s What That Means for Security Teams

**Link:** [https://www.kiuwan.com/blog/ai-generated-code-security-workflows/](https://www.kiuwan.com/blog/ai-generated-code-security-workflows/)

**Published:** 8/4/2026

**Summary:** AI now plays a role in more than half of the code produced within the organizations surveyed. According to the Sembi Software Quality Pulse Report, respondents estimate that, on average, 53% of their organization’s code is AI-generated or AI-assisted.¹ For many teams, AI is already involved in producing a significant share of their code, and […]

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

**Last Updated:** 2026-08-05T18:59:59.453Z
