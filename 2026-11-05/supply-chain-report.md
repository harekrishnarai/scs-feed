# Supply Chain Security Daily Report
**Date:** 2026-11-05
**Total Reports Found:** 19

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: A terminal viewer for plain text data files (JSON,YAML,CSV,XML,)

**Link:** [https://aless.tabnas.dev/](https://aless.tabnas.dev/)

**Published:** 11/5/2026

**Summary:** When I started working hands-on with OpenAPI specifications, it became clear very quickly that using an editor to read large volumes of deeply nested JSON sucks, a very great deal. So I went looking for something to help, and came across https://jless.io  This is an awesome terminal app for navigating nasty JSON documents. I am forever indebted to Paul Martinez for writing this tool. But it did have some gaps. It couldn't reload files that had changed, keeping your place in the JSON structure, which I really needed. And it only loaded one file at a time. But unfortunately it was written in Rust, and I didn't know Rust, and back in the pre-AI days that was kind of a huge blocker. But of course once we got models that could actually write decent code, the obvious idea came to me - I'll just add my features and submit a PR! Happy days. Except by that stage my requirements had grown - I also needed to handle many other file formats, like CSV, TOML, INI, and even XML. So I got side-tracked extending another side-project - an easy going JSON parser that supported comments, and trailing commas, the usual sort of thing. During COVID, with a SaaS startup in the events space now on the rocks, I was looking for some distraction and decided to refactor this little easy-going JSON parser of mine. It used a generated parser and was slow. I read some blog posts about how all production-grade language parsers are pretty much hand-crafted recursive descent, and thought, how hard could it be! Five years later, after many many fun experiments, and production use, I ended up with a runtime parser system: https://tabnas.dev  This is a quirky approach to parsing that is partly recursive descent, partly a state machine, and mostly empirical hacking. It works, and it's pretty fast, and I use it for real projects. It has the nice property that grammars are dynamic - you don't generate code, the grammar is executed. A fancy regular expression engine, but revved up to parse anything into a proper abstract syntax tree. Now with that in hand, I could return to the original project and create my own version of jless that solved the itches I needed to scratch: a watch mode;  multiple tabs; load any data format into a tree structure Now I still don't know Rust. I mean I like the idea, but there are only so many hours in the day. But now we have AI, so now I do get to go to the candy store. Combining jless.io, and tabnas.dev, and my requirements, I built (caused to be built?), aless - the less for any format! Now this is also a nice stress test for the tabnas parsing engine, and I was very pleased about that too. So if you need to review lots of data structure files on the command line, and need a terminal app to do so, this is for you. I can't help but be struck by the irony however that the need for such a thing is much less now - I mostly get agents to look at large JSON documents now. Still, our puny human brains need help sometimes, and this lets me review documents when I need to. It is also really nice and satisfying to see how easy it is to now bring together open source components to create what is essentially personal software. But I think the key thing out of this little project is that the basic physics of software development remain the same. Software should be built from components glued together. Components should have well-defined interfaces. Aim to reduce cognitive load - this is useful to both humans and machines. Yes, the entire thing could be built from scratch, using a textual specification, and be a mire of over-engineered AI slop, and still be perfectly usable. But the way I actually built it, with AI as a coding companion, using components was deeply satisfying because I still understand the essence of the code, while being able to ignore the accidental complexity. Components give you another layer of abstraction with fewer things to think about, and that allows your human mind to stay in the game. Comments URL: https://news.ycombinator.com/item?id=50382213 Points: 1 # Comments: 0

---

## GitGuardian Blog

### 1. Binance, BitGet, and the Credential Playbook That Keeps Working

**Link:** [https://blog.gitguardian.com/three-crypto-attacks-credential-lateral-movement/](https://blog.gitguardian.com/three-crypto-attacks-credential-lateral-movement/)

**Published:** 11/5/2026

**Summary:** The initial access vector changes, but the path stays the same: stolen credentials. Lessons from Binance and other recent crypto compromises.

---

### 2. Inside the LiteLLM hack: 153GB, 433,909 Files, 2,488 Organizations

**Link:** [https://blog.gitguardian.com/inside-the-litellm-hack/](https://blog.gitguardian.com/inside-the-litellm-hack/)

**Published:** 11/4/2026

**Summary:** Attackers dumped everything they harvested from LiteLLM builds during a 40-minute window in March. Here is what is inside and what it says about where secrets live.

---

## Kiuwan Blog

### 1. CI/CD security: How to secure your pipeline

**Link:** [https://www.kiuwan.com/blog/cicd-security/](https://www.kiuwan.com/blog/cicd-security/)

**Published:** 11/5/2026

**Summary:** CI/CD pipelines connect to many of an organization’s most sensitive assets, including source code, credentials, build systems, artifact registries, and production environments. That access makes automated delivery possible, but it also makes the pipeline a valuable target for attackers. CI/CD security is the practice of protecting software delivery pipelines while embedding automated security checks throughout […]

---

## StepSecurity Blog

### 1. CVE-2026-109518: apt Flaw Lets Attackers Swap Packages After Verification and Run Code as Root

**Link:** [https://www.stepsecurity.io/blog/cve-2026-109518-apt-package-swap-root](https://www.stepsecurity.io/blog/cve-2026-109518-apt-package-swap-root)

**Published:** 11/5/2026

**Summary:** Understand CVE-2026-109518, patch vulnerable APT clients, and use Harden-Runner to find HTTP package downloads and investigate CI/CD activity.

---

### 2. Malicious Files: Find What Supply Chain Attacks Leave Behind in Your GitHub Repositories and on Developer Machines 

**Link:** [https://www.stepsecurity.io/blog/malicious-files-find-what-supply-chain-attacks-leave-behind-in-your-github-repositories-and-on-developer-machines](https://www.stepsecurity.io/blog/malicious-files-find-what-supply-chain-attacks-leave-behind-in-your-github-repositories-and-on-developer-machines)

**Published:** 11/4/2026

**Summary:** StepSecurity Malicious Files finds files planted by Miasma, Shai-Hulud and other supply chain attacks in GitHub repositories and on developer machines.

---

## The Hacker News

### 1. CERT-In Flags AI-Driven Attacks as Backdoored ARTEX Exposes 62 Consoles to Root Access

**Link:** [https://thehackernews.com/2026/11/backdoored-docker-image-for-artex-ai.html](https://thehackernews.com/2026/11/backdoored-docker-image-for-artex-ai.html)

**Published:** 11/5/2026

**Summary:** The Indian Computer Emergency Response Team (CERT-In) has disclosed that an artificial intelligence (AI)-assisted threat actor it tracks as Crafty Falcon is targeting organizations in the Banking, Financial Services, and Insurance (BFSI) sectors in the country.  Describing the threat as active and ongoing, the activity involves the use of publicly-available AI-driven offensive security tools

---

### 2. Hackers Exploit Patched Apple Flaw to Deliver Info-Stealing Malware, CISA Says

**Link:** [https://thehackernews.com/2026/11/hackers-exploit-patched-apple-flaw-to.html](https://thehackernews.com/2026/11/hackers-exploit-patched-apple-flaw-to.html)

**Published:** 11/5/2026

**Summary:** The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday added a medium-severity security flaw impacting multiple Apple operating systems to its Known Exploited Vulnerabilities (KEV) catalog, following reports of active exploitation.  The vulnerability in question is CVE-2024-27834 (CVSS score: 5.5), a case of improper authentication that could allow an attacker with

---

### 3. Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root

**Link:** [https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html](https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html)

**Published:** 11/4/2026

**Summary:** A flaw in APT, the package manager for Debian and Ubuntu, allows an attacker who can modify package downloads to swap a checked package for their own.  The attacker's code then runs as root, according to advisories that Debian, Ubuntu, and APT's developers published on November 4. The attack needs APT to retry failed downloads, which it does by default from Debian 12 and

---

### 4. Researchers Uncover Prompt Adware Hidden in OpenAI Codex Jailbreak Toolkit

**Link:** [https://thehackernews.com/2026/11/researchers-uncover-prompt-adware.html](https://thehackernews.com/2026/11/researchers-uncover-prompt-adware.html)

**Published:** 11/4/2026

**Summary:** Cybersecurity researchers have disclosed details of an OpenAI Codex jailbreak bundle that's designed to modify an artificial intelligence (AI) agent's trusted instructions to insert advertisements for a third-party AI gateway.  The phenomenon has been codenamed prompt adware by Check Point Research.  Called Haiou (meaning Seagull in Chinese), the jailbreak modifies OpenAI Codex's configuration

---

### 5. APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits

**Link:** [https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html](https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html)

**Published:** 11/4/2026

**Summary:** The Russia-linked threat actor known as APT29 is presumed to be behind a large-scale watering hole campaign targeting iOS and Android users through compromised websites, fake domains, and a supply chain attack involving a Ukrainian web analytics service called Plerdy SEO Tracker.  "The injected JavaScript code collects browser and device attributes," Sekoia researchers Amaury-Jacques Garçon and

---

## Krebs on Security

### 1. Want to Rent an Internet Address at the White House?

**Link:** [https://krebsonsecurity.com/2026/11/want-to-rent-an-internet-address-at-the-white-house/](https://krebsonsecurity.com/2026/11/want-to-rent-an-internet-address-at-the-white-house/)

**Published:** 11/5/2026

**Summary:** Several staffers at the White House are using computers or mobile devices equipped with residential proxy services that render their internet address available for others to rent, security experts warned today. One of the proxy services is a Russian company whose founder's web hosting business was ground zero for cyberattacks against election systems in Arizona and Illinois in 2016.

---

## Sonatype Security Research

### 1. PolinRider Loader Reappears in Hijacked npm Packages

**Link:** [https://www.sonatype.com/blog/polinrider-loader-reappears-in-hijacked-npm-packages](https://www.sonatype.com/blog/polinrider-loader-reappears-in-hijacked-npm-packages)

**Published:** 11/4/2026

**Summary:** TL;DR        Sonatype Research Labs identified concealed runtime loaders in 12 npm releases across 10 hijacked packages.       All 12 releases contain loaders designed to decode payload-server IP addresses from Ethereum transactions sent by the same hard-coded wallet previously reported in PolinRider activity, then retrieve, XOR-decode, and execute JavaScript. Six conceal the loader in eval(atob(...)); six use a character-permutation bootstrap and the JavaScript Function constructor.       The manifests show no consumer install or postinstall hooks. The code can run when an affected entrypoint is loaded or, for server-hemera-mongo, when the bundled application starts.       Check direct and transitive dependencies, lockfiles, internal npm mirrors, and build records. If affected code ran, treat the host as compromised and investigate its processes, network activity, and accessible credentials.      Hidden Loaders Found in 12 npm Releases   On November 4, 2026, Sonatype Research Labs investigated malicious runtime loaders in npm packages and confirmed 12 affected releases across 10 hijacked packages. The examined releases contain two loader variants that use the same Ethereum sender wallet and payload-retrieval infrastructure. Sonatype tracks the finding as sonatype-2026-010515. The affected packages support unrelated developer functions, from Redux integration and health APIs to browser activity tracking, utilities, and server examples. Their shared issue is concealed behavior embedded in code that otherwise serves those ordinary purposes. These releases don't rely on a consumer-side installation script to activate that behavior. An application can reach the code when it loads an affected package; the server-hemera-mongo releases run it as the service starts.                        Package      Affected Releases      Observed Behavior                  @adminide-stack/client-redux      0.0.16-18      Ethereum-based loader concealed by Base64                  @adminide-stack/health-api-server      0.0.18-alpha.465      Ethereum-based loader concealed by Base64                  @adminide-stack/user-activity-browser      1.1.3-alpha.114      Ethereum-based loader concealed by Base64                  @adminide-stack/utils      0.0.16-129, 0.0.16-130      Ethereum-based loader concealed by Base64 in 0.0.16-129 and a character-permutation bootstrap in 0.0.16-130                  server-hemera-mongo      0.0.15, 0.0.16      Ethereum-based loader concealed by Base64                  cdeops      13.5.31      Ethereum-based loader concealed by a character-permutation bootstrap                   @adminide-stack/forms-core      5.1.9-alpha.3      Ethereum-based loader concealed by a character-permutation bootstrap                  @adminide-stack/yantra-help-browser      12.0.194      Ethereum-based loader concealed by a character-permutation bootstrap                  @cdmbase/wiki-browser      12.0.18-alpha.53      Ethereum-based loader concealed by a character-permutation bootstrap                  @pubngo-stack/help-browser      12.0.23-alpha.3      Ethereum-based loader concealed by a character-permutation bootstrap                          The Shared Loader Uses Ethereum Transactions to Find Remote Code   All 12 releases contain loaders designed to query public Ethereum RPC endpoints, with a Blockscout API fallback, to locate a transaction sent by the hard-coded wallet 0x1eef0849eda15d87f64e51c73c8442cf3c8bcef3. The loader interprets the first four bytes of the transaction's recipient address as a primary IPv4 address and the next four as a secondary address. It retrieves XOR-encoded JavaScript from the primary address over plain HTTP on TCP port 443, using the paths /0x/cls and /0x/ls.   After XOR-decoding the responses, the loader passes the JavaScript retrieved from /0x/cls to eval in the application process and to a detached node -i process through piped standard input. The JavaScript retrieved from /0x/ls is passed only to a detached node -i process. The child processes are unreferenced, allowing them to continue independently of the application process.   The Ethereum wallet acts as a dead-drop resolver: the operator can advertise a new payload-server IP address by sending another transaction without updating the malicious packages. Blocking an individual server therefore does not disable the loader's ability to discover a replacement.   Six Releases Conceal the Ethereum Loader With a Different Bootstrap   Six releases use a character-permutation bootstrap designed to reconstruct and execute an Ethereum-based loader: @adminide-stack/utils@0.0.16-130, cdeops@13.5.31, @adminide-stack/forms-core@5.1.9-alpha.3, @adminide-stack/yantra-help-browser@12.0.194, @cdmbase/wiki-browser@12.0.18-alpha.53, and @pubngo-stack/help-browser@12.0.23-alpha.3. The decoded loader bodies recovered from these six releases are byte-identical. They differ from the loader in the six Base64-wrapped releases but use the same Ethereum wallet, retrieval paths, and XOR keys.         In utils@0.0.16-130, an obfuscated routine follows the package's logger code. It permutes and decodes an embedded blob, obtains the JavaScript Function constructor indirectly, and executes the decoded content.       In cdeops@13.5.31, an obfuscated bootstrap appears in client.js before the module's normal delegation to global.require('cdeops/client'). It decodes embedded content and executes it dynamically, then continues to the expected client delegation. The hidden execution is separate from the documented purpose of that shim.      Shared Wallet and C2 Infrastructure Link the Releases to PolinRider   Sonatype Research Labs independently decoded the loaders in all 12 releases and recovered the same hard-coded Ethereum sender wallet, 0x1eef0849eda15d87f64e51c73c8442cf3c8bcef3. This exact wallet appears in GitGuardian's October 27, 2026 report, "GhostAction Crosses Paths With PolinRider: Inside the October Escalation," where it is identified as the Ethereum resolver used by PolinRider loaders found in compromised GitHub repositories. Those earlier loaders also retrieved stages from /0x/cls and /0x/ls on port 443, matching the retrieval paths and port in the npm samples.   The connection extends to the payload-server infrastructure. Greenflagged'sanalysis of these npm releases decoded transactions from that wallet and reported 95.135.181.151 as the advertised C2 address at its November 3 observation. GitGuardian had already listed the same IP on port 443 as a fallback C2 in a PolinRider persistence script. The exact wallet match, overlapping server infrastructure, and matching stage-retrieval paths support linking these malicious npm releases to previously documented PolinRider activity. This connection does not depend solely on similarities in obfuscation, and it does not definitively establish that PolinRider and GhostAction share an operator.   The Malicious Code Doesn't Wait for an Install Hook   The package manifests show no consumer install or postinstall hooks. Execution occurs when the runtime reaches an injected JavaScript file. For example, require('cdeops/client') selects the affected client.js, while the package's ES module import maps to a separate client.mjs file. In server-hemera-mongo, the injection is in dist/main.js, the application bundle referenced by its start script.   Assess exposure by correlating dependency records with execution evidence. Lockfiles identify resolved dependency versions, while cached artifacts and download logs help trace package acquisition. Build commands, application configuration, process telemetry, and runtime logs help establish whether an injected JavaScript file was executed.   Disabling npm install scripts does not address code that runs during module loading or application startup. The relevant question is whether the affected package code ran in a developer environment, CI worker, build host, or deployed service.    What Teams Should Do Now   Organizations should take these steps to identify affected systems and limit further exposure:        Find affected versions: Check direct and transitive dependencies, package-lock.json, yarn.lock, pnpm-lock.yaml, internal npm mirrors, caches, build records, and artifact metadata.       Evaluate repository protections:Determine whether your repository manager or dependency firewall blocked these releases before they reached developers or build systems. Review download and policy logs to identify any deliveries, and ensure all eight versions are blocked from future use.       Remove affected dependencies:Replace affected versions in projects and prevent internal mirrors and caches from serving them. Preserve copies needed for investigation, and use replacement versions that have been independently verified as clean.       Determine whether the code ran: Check which entrypoint the application loaded and whether the runtime could execute the injected code. Correlate this with process and network activity. A lockfile entry does not prove the malicious code ran, and an import error does not prove it didn’t. The import may have failed after the injected code executed.       Investigate affected hosts:If the code ran, treat the host as compromised. Look for detached node -i processes launched by another Node process with piped standard input, and plain HTTP requests to TCP port 443 using /0x/cls or /0x/ls. Payload requests carry a Sec-V header containing A10-npm_inject in the six Base64-wrapped releases, A10-II in utils@0.0.16-130, or A10-E in cdeops@13.5.31. Use these indicators alongside process ancestry, timestamps, and dependency records to identify affected systems.       Assess access and rotate credentials: Identify the credentials and systems available to the affected process. Rotate credentials where exposure is possible, including publishing credentials, source repository access, cloud keys, and CI secrets.      The operator can change the remotely served JavaScript without publishing another npm release. Use available process, network, build, and runtime records to determine what affected systems executed and which credentials and resources those processes could access.   For ongoing details and response guidance, see the Sonatype Security Event and Sonatype Guide research.   Thanks to Sonatype Research Labs' Adam Reynolds for analysis of the affected npm releases and their PolinRider activity. Connect with Adam on LinkedIn.

---

## Endor Labs Blog

### 1. MCP, Skills, Hooks & Harnesses Explained for AppSec | Endor Labs

**Link:** [https://www.endorlabs.com/learn/decoding-the-agent-stack](https://www.endorlabs.com/learn/decoding-the-agent-stack)

**Published:** 11/4/2026

**Summary:** Plain definitions of agents, harnesses, MCP servers, skills, hooks, and plugins, where each one sits in the agentic SDLC, and why it matters for security.

---

### 2. Forrester gave Endor Labs the highest score possible in seven criteria, including innovation, AI application flaws, AI SCA, and AI coding toolchain. | Endor Labs

**Link:** [https://www.endorlabs.com/learn/endor-labs-is-a-leader-in-the-forrester-wave-tm-for-agentic-development-security](https://www.endorlabs.com/learn/endor-labs-is-a-leader-in-the-forrester-wave-tm-for-agentic-development-security)

**Published:** 11/4/2026

**Summary:** Forrester gave Endor Labs the highest score possible in seven criteria, including innovation, AI application flaws, AI SCA, and AI coding toolchain.

---

### 3. Mets Muse Wonder. evaluated against the Endor Labs Agent Security League | Endor Labs

**Link:** [https://www.endorlabs.com/learn/metas-new-muse-wonder-record-funcpass-but-mid-table-secpass](https://www.endorlabs.com/learn/metas-new-muse-wonder-record-funcpass-but-mid-table-secpass)

**Published:** 11/4/2026

**Summary:** Meta's Muse Code with the Wonder model posts the highest FuncPass on the Agent Security League leaderboard — but finishes mid-table on security

---

### 4. Docker Sandboxes vulnerability lets AI agents access sensitive files outside their sandbox (CVE-2026-103916) | Endor Labs

**Link:** [https://www.endorlabs.com/learn/docker-sandboxes-vulnerability-lets-ai-agents-access-sensitive-files-outside-their-sandbox-cve-2026-103916](https://www.endorlabs.com/learn/docker-sandboxes-vulnerability-lets-ai-agents-access-sensitive-files-outside-their-sandbox-cve-2026-103916)

**Published:** 11/4/2026

**Summary:** I discovered a vulnerability in Docker Sandboxes that lets AI coding agents bypass file access restrictions, potentially exposing cloud credentials and other sensitive files on a developer's computer through a routine copy command.

---

## Bleeping Computer Security

### 1. NIKKE PC game launcher hacked to spread remote access, data-stealing malware

**Link:** [https://www.bleepingcomputer.com/news/security/nikke-pc-game-launcher-hacked-to-spread-remote-access-data-stealing-malware/](https://www.bleepingcomputer.com/news/security/nikke-pc-game-launcher-hacked-to-spread-remote-access-data-stealing-malware/)

**Published:** 11/4/2026

**Summary:** The developers of Goddess of Victory: NIKKE have confirmed that hackers tampered with the game's PC launcher scripts in a supply-chain attack, distributing malware capable of stealing credentials and cryptocurrency wallet data. [...]

---

### 2. mSecure password manager hack prompts password reset warnings

**Link:** [https://www.bleepingcomputer.com/news/security/msecure-password-manager-hack-prompts-password-reset-warnings/](https://www.bleepingcomputer.com/news/security/msecure-password-manager-hack-prompts-password-reset-warnings/)

**Published:** 11/4/2026

**Summary:** mSeven Software is warning current and former mSecure password manager customers to change passwords, reset two-factor authentication, and remove passkeys following a cyberattack that reportedly exposed an encrypted customer database. [...]

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

**Last Updated:** 2026-11-05T18:31:34.771Z
