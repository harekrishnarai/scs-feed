# Supply Chain Security Daily Report
**Date:** 2026-10-08
**Total Reports Found:** 20

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Pocketty – iPhone SSH terminal that pings you when an agent is blocked

**Link:** [https://pocketty.app/](https://pocketty.app/)

**Published:** 10/8/2026

**Summary:** Hello~! pocketty is an SSH terminal for iPhone and iPad, made for herdr. herdr keeps your agent panes alive on your computer and knows the state of each one: working, needs you, or done. I made this in anger/desperation for the latter half of my recent paternity leave. Nap traps are sweet, but there's only so much doom-scrolling and movie-watching I can handle... In any event, I've been using it for the last couple months and no longer have to be my desk anymore to be productive. Now the nap-traps are still productive (when i want them to be) ! How it works: - The app talks to your computer directly over plain SSH. Tailscale is the easy way to reach it from anywhere but any SSH host you can reach works. - A small Rust daemon on the host watches herdr. When a pane needs you, it seals the alert to your phone's key with HPKE (X25519, ChaCha20-Poly1305). A stateless relay (pocketty's) on Cloudflare Workers passes the sealed bytes to APNs (Apple Push Notification servers), and a notification extension opens them on the phone. The relay can't read them and keeps nothing. - Your SSH key is made in the Secure Enclave and can't be exported. - The terminal uses libghostty-vt for state and draws with wgpu on Metal, so full-screen TUIs look like they do on your desk, albeit narrower. - Diffs for each agent turn, a file browser, and previews of `localhost` dev servers your agent starts, all through the same SSH connection. No port forwarding to set up. herdr and the daemon are optional. Without them, it's a normal SSH client. There's no account to set up and no analytics or tracking in the app.  The app runs a 14-day free trial, with full feature access. Then, if you're as happy as I am with it, then it can be yours forever with a one-time purchase: $99 for the first two weeks (launch promo) then $129 after that. Happy to answer anything about the sealed push setup or running libghostty on iOS. Comments URL: https://news.ycombinator.com/item?id=50009634 Points: 2 # Comments: 0

---

## Bleeping Computer Security

### 1. FakeGit malware campaign returns with 17,610 malicious GitHub repos

**Link:** [https://www.bleepingcomputer.com/news/security/fakegit-malware-campaign-returns-with-17-610-malicious-github-repos/](https://www.bleepingcomputer.com/news/security/fakegit-malware-campaign-returns-with-17-610-malicious-github-repos/)

**Published:** 10/8/2026

**Summary:** More than 17,000 fake repositories on GitHub are distributing the SmartLoader malware after the FakeGit campaign reactivated earlier this month to push the StealC infostealer. [...]

---

### 2. Microsoft Teams to get support for third-party deepfake detection tools

**Link:** [https://www.bleepingcomputer.com/news/security/microsoft-teams-to-add-third-party-deepfake-detection-impersonation-protection/](https://www.bleepingcomputer.com/news/security/microsoft-teams-to-add-third-party-deepfake-detection-impersonation-protection/)

**Published:** 10/8/2026

**Summary:** Microsoft will soon introduce support for third-party deepfake detection solutions and impersonation protection in Teams meetings. [...]

---

### 3. Hackers hijack Google domains after breaching ccTLD registries

**Link:** [https://www.bleepingcomputer.com/news/security/hackers-hijack-google-domains-after-breaching-cctld-registries/](https://www.bleepingcomputer.com/news/security/hackers-hijack-google-domains-after-breaching-cctld-registries/)

**Published:** 10/7/2026

**Summary:** Hackers obtained unauthorized HTTPS certificates for several Google domains and hijacked domains in the country-code top-level domains (ccTLDs) for Ghana, American Samoa, and Sierra Leone after compromising third-party operators and modifying authoritative DNS records. [...]

---

## GitHub Security Blog

### 1. How one bug bounty researcher chooses the features they investigate

**Link:** [https://github.blog/security/how-one-bug-bounty-researcher-chooses-the-features-they-investigate/](https://github.blog/security/how-one-bug-bounty-researcher-chooses-the-features-they-investigate/)

**Published:** 10/8/2026

**Summary:** As we kick off Cybersecurity Awareness Month, the GitHub Bug Bounty team spotlights @vaib25vicky, exploring their methodology, techniques, and experiences hacking on GitHub. The post How one bug bounty researcher chooses the features they investigate appeared first on The GitHub Blog.

---

## The Hacker News

### 1. UAC-0099 Targets Ukrainian Government Personnel With ASHVEIN RAT Hiding Commands in HTML

**Link:** [https://thehackernews.com/2026/10/uac-0099-targets-ukrainian-government.html](https://thehackernews.com/2026/10/uac-0099-targets-ukrainian-government.html)

**Published:** 10/8/2026

**Summary:** The Russia-aligned threat actor known as UAC-0099 has been attributed to a previously undocumented .NET infostealer and remote access trojan (RAT) codenamed ASHVEIN.  According to TrendAI, the malware has been put to use in attacks targeting Ukrainian government personnel. The cybersecurity company is tracking the cluster under the name Earth Sirrush (previously SHADOW-EARTH-065).  ASHVEIN,

---

### 2. 16 Malicious Firefox Extensions Pose as Rabby and OKX Wallets to Steal Recovery Phrases

**Link:** [https://thehackernews.com/2026/10/16-malicious-firefox-extensions-pose-as.html](https://thehackernews.com/2026/10/16-malicious-firefox-extensions-pose-as.html)

**Published:** 10/8/2026

**Summary:** Cybersecurity researchers have discovered a cluster of 16 malicious Mozilla Firefox extensions that are capable of stealing cryptocurrency wallet recovery phrases and private keys.  "The extensions masquerade as wallet portals, desktop utilities, and browser tools, but their code intercepts recovery phrases and private keys during wallet import flows and attempts to send those secrets to

---

### 3. Tensorlake npm Package Compromised to Deliver Shai-Hulud Credential-Stealing Worm

**Link:** [https://thehackernews.com/2026/10/tensorlake-npm-package-compromised-to.html](https://thehackernews.com/2026/10/tensorlake-npm-package-compromised-to.html)

**Published:** 10/8/2026

**Summary:** The npm package known as "tensorlake," a TypeScript software development kit (SDK) for Tensorlake applications, sandboxes, and cloud services, was compromised as part of a ChainDrop / Shai-Hulud supply chain attack.  The malicious version 0.5.144 "contains obfuscated malware that harvests credentials, exfiltrates secrets, establishes persistence, and executes remotely supplied code," Socket said

---

### 4. Attackers Hijack .gh, .sl, and .as Registries to Obtain Certificates for Google Domains

**Link:** [https://thehackernews.com/2026/10/attackers-hijack-gh-sl-and-as.html](https://thehackernews.com/2026/10/attackers-hijack-gh-sl-and-as.html)

**Published:** 10/7/2026

**Summary:** Attackers compromised three country-code top-level domains (ccTLDs) and obtained unauthorized HTTPS certificates for several Google domains, Google said on October 6.  Google's own systems were not breached, but any domain ending in .gh (Ghana), .sl (Sierra Leone) or .as (American Samoa) was put at risk. With such a certificate, an attacker could pose as the real site over an encrypted

---

### 5. Eight Malicious npm Packages Downloaded 40,767 Times Deliver Overlord RAT and Stealer

**Link:** [https://thehackernews.com/2026/10/eight-malicious-npm-packages-downloaded.html](https://thehackernews.com/2026/10/eight-malicious-npm-packages-downloaded.html)

**Published:** 10/7/2026

**Summary:** Cybersecurity researchers have disclosed details of a long-running npm supply chain malware campaign that pushes information stealers and remote access trojans (RAT) to compromised hosts.  The campaign has been codenamed MALFEX by CloudSEK and Checkmarx. The activity is assessed to be the work of a lone threat actor who appears to have published 12 packages since August 2023, eight of which have

---

## Kiuwan Blog

### 1. Cybersecurity Awareness Month: Securing the Future Starts With Critical Infrastructure

**Link:** [https://www.kiuwan.com/blog/cybersecurity-awareness-month/](https://www.kiuwan.com/blog/cybersecurity-awareness-month/)

**Published:** 10/8/2026

**Summary:** Every October, the Cybersecurity and Infrastructure Security Agency (CISA) leads Cybersecurity Awareness Month, an annual effort to strengthen cybersecurity and protect the systems we rely on. This year’s theme, “Securing the Next 250,” looks toward the next 250 years of American innovation and the critical infrastructure needed to support it. Critical infrastructure depends on applications […]

---

## Schneier on Security

### 1. How Technology Empowers—and Imperils—Dictators

**Link:** [https://www.schneier.com/blog/archives/2026/10/how-technology-empowers-and-imperils-dictators.html](https://www.schneier.com/blog/archives/2026/10/how-technology-empowers-and-imperils-dictators.html)

**Published:** 10/8/2026

**Summary:** This essay was written with Seva Gunitsky, and originally appeared in Foreign Affairs. Two weeks after Moscow’s full-scale invasion of Ukraine in March 2022, the Russian TV Channel One editor Marina Ovsyannikova burst onto the set of the evening newscast. She held up a hand-drawn sign behind the anchor’s head that read: “Stop the war. Don’t believe propaganda. They’re lying to you!” She shouted, “No to war!” until she was dragged away. No one has protested the war on Russian television since then, partly as a result of tighter security and a general climate of fear. But in October 2024, Margarita Simonyan, one of Russia’s chief propagandists, gave another explanation. A growing number of the RT network’s anchors, she explained to an interviewer, are not real. “That face doesn’t exist. We generated the voice and everything else.” They were, she meant, produced by artificial intelligence. In a follow-up interview with the newspaper ...

---

### 2. Apple’s Verified Photography System

**Link:** [https://www.schneier.com/blog/archives/2026/10/apples-verified-photography-system.html](https://www.schneier.com/blog/archives/2026/10/apples-verified-photography-system.html)

**Published:** 10/7/2026

**Summary:** Apple just released a system called “Reference Image.” It can verify the image is exactly as taken by an iPhone—new models only—without tying it to a specific iPhone or photographer. It can also verify that multiple images came from the same iPhone. Other industry solutions require a photographer or institution to vouch for an image using their own credentials. We are concerned this puts some photographers, such as those operating in conflict zones, in a difficult position; it should not be necessary to forgo anonymity in order to prove image authenticity. We built Apple Reference Image to avoid using an explicit, public credential for photographers, and to avoid even implicit public association between different photos taken by the same sensor. The final reference image is instead signed by Apple’s signing service, after validation by PCC. That signature is backed by Apple’s strongest technical guarantees...

---

## GitGuardian Blog

### 1. AI Coding Assistants Are Unpredictable. GitGuardian AI Hooks Give You Control

**Link:** [https://blog.gitguardian.com/ai-hooks-ai-coding-assistants/](https://blog.gitguardian.com/ai-hooks-ai-coding-assistants/)

**Published:** 10/8/2026

**Summary:** AI coding assistants are unpredictable by design. Learn how AI hooks add deterministic controls and how GitGuardian ggshield blocks secrets before agents can use them.

---

### 2. The campaign that never stopped: tracking GhostAction from 2025 to 2026

**Link:** [https://blog.gitguardian.com/ghostaction-github-actions-supply-chain-attack-returns/](https://blog.gitguardian.com/ghostaction-github-actions-supply-chain-attack-returns/)

**Published:** 10/7/2026

**Summary:** The GhostAction supply chain campaign hit 772 public GitHub repositories between August 31 and September 30, 2026, targeting 2,577 secrets with the same injected workflow we documented last year.

---

## Sonatype Security Research

### 1. Q3 2026 Open Source Malware Index: When Compromise Compounds

**Link:** [https://www.sonatype.com/blog/q3-2026-open-source-malware-index-when-compromise-compounds](https://www.sonatype.com/blog/q3-2026-open-source-malware-index-when-compromise-compounds)

**Published:** 10/8/2026

**Summary:** TL;DR        Milestone: Since Sonatype began tracking malicious open source packages in 2017, we have logged nearly 2 million malicious packages.       Scale: Sonatype Research Labs logged 149,329 open source malware packages in Q3 2026. npm remained overwhelmingly dominant at 89.5% of the quarter's malicious packages, although its share declined from 96.6% in Q2.       Behavior: Among packages containing overt-malware behavior, 74.5% involved droppers, secrets exfiltration, or both, showing how often Q3 malware was designed to extend the attack beyond initial execution.       Defender challenge: Automation is shortening the distance between initial compromise and follow-on impact, giving defenders less time to contain credential theft, payload delivery, persistence, and further trusted access.      In the third quarter of 2026, Sonatype identified 149,329 malicious open source packages across ecosystems, bringing the total logged since tracking began in 2017 to 1,960,846.   npm once again accounted for the overwhelming majority this quarter, with 133,579 packages making up 89.5% of the quarter's total. While those numbers make Q3 2026 look like another story about npm and sheer malicious-package volume, that wasn't the case.   The more important signal appeared when we looked past the largest classifications and examined what overt malware was actually designed to do. Of the 27,618 packages carrying at least one overtly-malicious behavior, nearly three in four involved payload delivery, secrets theft, or both. Among packages associated with hijacking, that connection was even stronger.   Attackers stole credentials that could open additional trusted accounts; droppers used the package install as the first step in a longer execution chain; and compromised packages retrieved additional payloads through resilient infrastructure. Q3 showed how quickly one compromise can become the starting point for another.   npm Dominated, but Payload Delivery and Secrets Theft Told a Bigger Story   The more revealing Q3 signal was not simply where malicious packages appeared, but what they were designed to do.   Much of the quarter's overall volume came from potentially unwanted application and repository-abuse classifications. When we isolate the more nefarious behaviors, droppers and secrets exfiltration clearly stand out.                       Threat Type      Q3 Share                  Dropper      14,665                  Secrets exfiltration      9,863                  Host information exfiltration      4,332                  Backdoor      3,284                  Data corruption      2,869                  Obfuscated code      705                  Crypto miner      281                          Together, droppers and secrets exfiltration accounted for 68.1% of these incidents, and 74.5% at least one of those threat types. Both can extend an attack beyond the initial package: credentials can unlock trusted access, while droppers can deliver the next stage.   Trust Just Became More Dynamic   Q2's Open Source Malware Index focused on how attackers turned trusted packages, maintainers, dependencies, and developer workflows into attack paths. More recently, Sonatype Research Labs observed that trusted software workflows weren't just compromised, but increasingly influenced and acted upon at machine speed.   The malware data reflects one side of that shift. Sonatype identified 4,150 hijack-tagged packages in Q3, and 88% were designed to steal secrets, drop secondary payloads, or both. Sonatype Research Labs took a closer look at how that broader shift played out in practice.   mlflow-ui: Familiar Supply Chain Techniques, Machine-Speed Consequences   One of Q3's clearest examples of machine-speed software supply chain risk came from an unusual source, as the first known instance of a rogue AI agent uploading malicious packages came to light.   During a misconfigured capture-the-flag exercise, Anthropic's Claude Mythos 5 agent, which had been told it was operating in an offline simulation, was inadvertently connected to the real internet. The agent found that its simulated target regularly installed an unregistered PyPI package name, registered that name, and published a malicious package under it.   The package itself was relatively straightforward. It collected host details and environment variables and downloaded a second-stage payload. Despite the simplicity, the attack was successful: 15 third-party systems, all believed to be security vendors, installed it before PyPI removed it in under an hour. Credentials exposed by one of those systems were then used to access a real security vendor's database, according to Anthropic's report on the incident.   Familiar supply chain techniques, executed at machine speed, can create real downstream consequences before detection and removal have time to contain them.   AI Protestware: When Package Content Targets the Tool Reading It   Q3 also surfaced an emerging form of pushback against AI-assisted development. Sonatype Research examined two non-malicious open source packages (allianceauth-workflows on PyPI and dough-synth on npm) that deliberately embedded Anthropic's Claude refusal test string in project content. The string is intended for testing how Claude handles refusals, but when encountered by Claude-based tools, it can cause them to stop processing the content.   The two maintainers used it differently. allianceauth-workflows took the more visible approach, placing the string directly beneath an explicit AI policy in its README and PyPI package description that rejects AI-assisted pull requests.   dough-synth took a more technical approach. The project hid the string in an HTML comment in its README and placed it near the top of both its C and JavaScript source files, creating multiple opportunities for a Claude-based tool to encounter it while examining the project.   Neither package is malicious, and two examples are not enough to signify an ecosystem-wide trend. But they point to a new consideration: package content, whether good-intentioned or malicious, can be written not only for humans and runtimes, but to influence the AI systems analyzing it.   As AI becomes more common in code review, development, and security scanning, those automated readers increasingly become part of the supply chain trust boundary too.   Mini Shai-Hulud: Stolen Credentials Are Propagation Infrastructure   As a new Mini Shai-Hulud wave spread across npm in August 2026, Sonatype Research Labs tracked 2,225 affected component versions.   The malware moved through compromised legitimate packages, harvested developer and CI/CD credentials, and searched for valid npm publishing access. When it found that access, it could automatically identify additional victim-controlled packages, inject the same payload, increment their versions, and republish them.   That made Mini Shai-Hulud more than a credential-stealing campaign. It turned trusted access into a repeatable propagation mechanism, allowing one compromise to feed the next at scale. Like our other Q3 examples above, the significance was not a radically new technique, but the speed and repeatability with which familiar supply chain weaknesses could be exploited.   The Defender's Challenge: Contain the Chain Without Losing Context   Q3's data suggests that discovering and removing a malicious package may be only the first step. If the package delivered another payload, exposed credentials, or established persistence, defenders need to treat the incident as a potential environment compromise, not simply a dependency-cleanup exercise.   Our malware findings highlight one side of the defender challenge: attacks can move from initial compromise to downstream impact quickly. The other side is the growing amount of security intelligence teams are expected to evaluate at the same speed.   That is where Q3's vulnerability research becomes relevant. AI is accelerating the volume and speed of security findings, but faster discovery does not automatically translate into clearer priorities. In August, Sonatype tracked 91 Spring CVEs affecting 148,608 software components, creating a substantial prioritization problem for downstream organizations.   A later reported Log4j RCE illustrated the opposite problem. The underlying behavior was reproducible, but its real-world significance depended on a narrow set of architectural conditions. Determining whether the finding actually mattered still required context about how the software was being used.   Whether defenders are responding to malware or vulnerabilities, the challenge is increasingly the same: more information arriving faster makes context more valuable, not less.   For defenders, Q3 reinforces several priorities:        Prevent malicious components from executing in the first place.       Detect behavior, not only known package names and signatures.       Investigate follow-on impact, including credential exposure, persistence, and additional payloads.       Validate trust continuously rather than relying on a package or maintainer's past reputation.       Prioritize with context, including dependency, reachability, exploitability, and remediation data.       Protect automated analysis environments by limiting credentials and treating package content as untrusted input.      The common challenge is speed. Attacks, findings, and automated analysis are all moving faster. Defenders need automation to keep pace, but they also need the context to understand what actually happened and what to do next.   When Compromise Compounds   Q3 2026 showed that software supply chain risk increasingly extends beyond the individual package or vulnerability.   A malicious package can expose credentials, deliver additional payloads, or create trusted access that enables further compromise. At the same time, autonomous agents and AI-powered tools are acting on software at machine speed, introducing new ways for trusted workflows to be exploited, influenced, or disrupted.   That makes context as important as speed. Identifying the package or vulnerability is only the beginning. Defenders also need to understand what executed, what access was exposed, what happened next, and which automated systems were involved.   As software supply chain activity accelerates, the challenge is not only stopping the initial compromise, but preventing it from expanding into broader access, additional payloads, and further trusted systems.

---

## Endor Labs Blog

### 1. Tensorlake npm package compromised by Shai-Hulud in latest software supply chain attack | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/tensorlake-npm-package-compromised-by-shai-hulud-in-latest-software-supply-chain-attack](https://www.endorlabs.com/learn/tensorlake-npm-package-compromised-by-shai-hulud-in-latest-software-supply-chain-attack)

**Published:** 10/8/2026

**Summary:** The popular Tensorlake SDK, a package with more than 12,000 weekly downloads, shipped a poisoned release (version 0.5.144 ) that was infected with the self-propagating Shai-Hulud worm.

---

### 2. What Is Mythos and Why It Matters for Software Security | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/what-is-mythos-and-why-it-matters-for-software-security](https://www.endorlabs.com/learn/what-is-mythos-and-why-it-matters-for-software-security)

**Published:** 10/7/2026

**Summary:** Learn what Mythos is, how it found zero-day bugs, and why Mythos could reshape software security and vulnerability prioritization

---

## StepSecurity Blog

### 1. Tensorlake npm Package Compromised: A Worm With a Hostage Token That Wipes Your Machine If You Revoke It

**Link:** [https://www.stepsecurity.io/blog/tensorlake-npm-compromised-hostage-token-worm](https://www.stepsecurity.io/blog/tensorlake-npm-compromised-hostage-token-worm)

**Published:** 10/8/2026

**Summary:** The malicious release was built from the project's own main branch and published with an npm provenance attestation.

---

## Krebs on Security

### 1. ShinyHunters Extorted Boeing Spin-off Prior to Arrests

**Link:** [https://krebsonsecurity.com/2026/10/shinyhunters-extorted-boeing-spin-off-prior-to-arrests/](https://krebsonsecurity.com/2026/10/shinyhunters-extorted-boeing-spin-off-prior-to-arrests/)

**Published:** 10/7/2026

**Summary:** A teenager from Amman, Jordan suspected of leading the prolific data theft and extortion group ShinyHunters has been detained and is reportedly cooperating with the FBI to identify other members of the hacking gang. KrebsOnSecurity has learned that the suspect, who uses the hacker handle "Rey," was detained as ShinyHunters was in the process of extorting a business unit recently divested by the global aerospace company Boeing, which manufactures the fleet of planes used by the employer of Rey's father -- Royal Jordanian Airlines.

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

**Last Updated:** 2026-10-08T18:43:02.207Z
