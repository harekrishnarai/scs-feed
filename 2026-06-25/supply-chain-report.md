# Supply Chain Security Daily Report
**Date:** 2026-06-25
**Total Reports Found:** 21

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Endor Labs Blog

### 1. Open source carries the world. Patching it can't fall to maintainers alone. | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/mythos-zero-day-patches-project-akrites](https://www.endorlabs.com/learn/mythos-zero-day-patches-project-akrites)

**Published:** 6/25/2026

**Summary:** We’re launching Endor Zero-Day Patches and joining the Linux Foundation’s Project Akrites as a founding member to help enterprises and open-source maintainers patch at AI speed and scale.

---

### 2. Shai-Hulud Strikes Leo Platform npm | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/shai-hulud-strikes-leo-platform-npm](https://www.endorlabs.com/learn/shai-hulud-strikes-leo-platform-npm)

**Published:** 6/25/2026

**Summary:** Shai-Hulud Strikes Leo Platform npm

---

## Hacker News

### 1. Anthropic/Alibaba, Instagram Betting, FIFA

**Link:** [https://marginpoints.substack.com/p/anthropicalibaba-instagram-betting](https://marginpoints.substack.com/p/anthropicalibaba-instagram-betting)

**Published:** 6/25/2026

**Summary:** Article URL: https://marginpoints.substack.com/p/anthropicalibaba-instagram-betting Comments URL: https://news.ycombinator.com/item?id=48677802 Points: 1 # Comments: 0

---

## Schneier on Security

### 1. AI and Liability

**Link:** [https://www.schneier.com/blog/archives/2026/06/ai-and-liability.html](https://www.schneier.com/blog/archives/2026/06/ai-and-liability.html)

**Published:** 6/25/2026

**Summary:** Earlier this month, a German court ruled that Google is liable for its AI search summaries. Rejecting defenses like “users can check for themselves,” and that they generally know “that information generated with AI should not be blindly trusted,” the court held that the AI’s summaries are reflections of the company and “above all an expression of Google’s business activities.” This is the latest skirmish in a decades-old battle over internet publishing. Historically, there were two different types of information distributors: carriers and publishers. A phone company is a carrier. It’ll transmit whatever you say, even discussions about committing a crime. Words are words, and the phone company does not know—nor is it liable for—the words you choose to speak. A newspaper, on the other hand, is a publisher. It decides the words it publishes, and what quotes to include in its articles. If those words or quotes are defamatory or otherwise illegal, it’s liable...

---

### 2. Interesting Paper Exploring Prompt Injection

**Link:** [https://www.schneier.com/blog/archives/2026/06/interesting-paper-exploring-prompt-injection.html](https://www.schneier.com/blog/archives/2026/06/interesting-paper-exploring-prompt-injection.html)

**Published:** 6/25/2026

**Summary:** This is a fascinating explotation of how LLMs fall for prompt injection attacks. It turns out that they learn to recognize the style of text in different role/instruction blocks, and not just the tags. Their conclusion: Role tags were a formatting trick that became the security architecture and the cognitive scaffolding of modern LLMs. We’ve shown that this architecture doesn’t survive into the model’s actual representations, and that such role confusion is linked to prompt injection. Unless LLMs achieve genuine role perception, we think injection defense will remain a perpetual whack-a-mole game. And the continuous nature of role boundaries opens the threat of injections designed to subtly shift LLM states through seemingly innocuous text, legally and at scale...

---

### 3. Embedding Forbidden Text in Spyware to Discourage AI Analysis

**Link:** [https://www.schneier.com/blog/archives/2026/06/embedding-forbidden-text-in-spyware-to-discourage-ai-analysis-2.html](https://www.schneier.com/blog/archives/2026/06/embedding-forbidden-text-in-spyware-to-discourage-ai-analysis-2.html)

**Published:** 6/24/2026

**Summary:** At least one malware developer is adding text about nuclear and biological weapons to their spyware, in an effort to stop automatic AI analysis. Details: The _index.js payload begins with a large JavaScript block comment containing fake system instructions and policy-triggering content. Because it is inside a comment, it does not affect JavaScript execution. The runtime skips it. The real malware begins after the comment with a try{eval(…)} wrapper around a large character-code array and a ROT-style substitution function. This header appears designed for AI-mediated analysis, not for Node, Bun, or Python. It attempts to derail scanners or analyst copilots that feed the beginning of a file to a language model without clearly isolating the content as untrusted data. In weak pipelines, this can cause refusal behavior, prompt confusion, context pollution, or premature classification before the scanner reaches the actual malware...

---

## StepSecurity Blog

### 1. Maven Support Comes to GitHub Checks and OSS Package Search 

**Link:** [https://www.stepsecurity.io/blog/maven-support-comes-to-github-checks-and-oss-package-search](https://www.stepsecurity.io/blog/maven-support-comes-to-github-checks-and-oss-package-search)

**Published:** 6/25/2026

**Summary:** StepSecurity now supports Maven in GitHub Checks and OSS Package Search, blocking compromised and freshly published Java dependencies in your pull requests.

---

### 2. 15 Malicious JetBrains Plugins Stole AI API Keys from 70,000 Developers

**Link:** [https://www.stepsecurity.io/blog/jetbrains-malicious-plugins-ai-api-key-theft](https://www.stepsecurity.io/blog/jetbrains-malicious-plugins-ai-api-key-theft)

**Published:** 6/25/2026

**Summary:** A coordinated 8-month supply chain attack planted credential-stealing code inside fake AI coding assistants on the JetBrains Marketplace, quietly exfiltrating OpenAI, DeepSeek, and SiliconFlow API keys to an attacker-controlled server in Beijing -- which our investigation found still operational today.

---

### 3. Mass npm Supply Chain Attack: 20 Leo Platform Packages Compromised

**Link:** [https://www.stepsecurity.io/blog/mass-npm-supply-chain-attack-20-leo-platform-packages-compromised](https://www.stepsecurity.io/blog/mass-npm-supply-chain-attack-20-leo-platform-packages-compromised)

**Published:** 6/25/2026

**Summary:** On June 24, 2026, an attacker published malicious versions of 20 npm packages belonging to the Leo Platform ecosystem in a coordinated burst spanning less than three seconds. All 20 packages carry an identical CI/CD attack toolkit that steals secrets from GitHub Actions runners, cloud credential stores, package registries, and password managers, then exfiltrates them via the victim's own GitHub token. Together these packages receive approximately 13,600 downloads per week.

---

### 4. simonecorsi/mawesome GitHub Action has been compromised

**Link:** [https://www.stepsecurity.io/blog/simonecorsi-mawesome-github-action-has-been-compromised](https://www.stepsecurity.io/blog/simonecorsi-mawesome-github-action-has-been-compromised)

**Published:** 6/25/2026

**Summary:** On June 24, 2026, an attacker compromised the simonecorsi/mawesome GitHub repository. They force-pushed malicious commits and repointed several version tags to that commit. As a result, any workflow running against those tags after that time executed the attacker's code inside its GitHub Actions runner.

---

### 5. codfish/semantic-release-action GitHub Action has been compromised

**Link:** [https://www.stepsecurity.io/blog/supply-chain-compromise-codfish-semantic-release-action](https://www.stepsecurity.io/blog/supply-chain-compromise-codfish-semantic-release-action)

**Published:** 6/25/2026

**Summary:** On June 24, 2026, an attacker compromised the codfish/semantic-release-action GitHub repository. At 15:39:06 UTC they force-pushed a malicious commit and repointed several version tags to that commit. As a result, any workflow running against those tags after that time executed the attacker's code inside its GitHub Actions runner.

---

## Kiuwan Blog

### 1.  A Guide to Automated Vulnerability Remediation

**Link:** [https://www.kiuwan.com/blog/automated-vulnerability-remediation/](https://www.kiuwan.com/blog/automated-vulnerability-remediation/)

**Published:** 6/25/2026

**Summary:** It has become easier to detect vulnerabilities in modern development environments. SAST tools, SCA scanners, and cloud-native security platforms help organizations surface thousands of findings across their codebases. Unfortunately, detection was never the hard part. The slower, more complex challenge is remediation. It is the remediation process that determines whether a security program delivers real […]

---

## The Hacker News

### 1. New Gaslight macOS Malware Uses Prompt Injection to Disrupt AI-Assisted Analysis

**Link:** [https://thehackernews.com/2026/06/new-gaslight-macos-malware-uses-prompt.html](https://thehackernews.com/2026/06/new-gaslight-macos-malware-uses-prompt.html)

**Published:** 6/25/2026

**Summary:** A previously undocumented Rust-based macOS implant and information stealer has been found to embed a prompt injection payload designed to trick a malware analyst's artificial intelligence (AI) tools and trick it into aborting or refusing an analysis of the artifact.  The malware has been codenamed Gaslight owing to this deceptive behavior. It's been assessed with high confidence that the tool is

---

### 2. New Mistic Backdoor Linked to KongTuke in ClickFix and ModeloRAT Campaigns

**Link:** [https://thehackernews.com/2026/06/new-mistic-backdoor-linked-to-kongtuke.html](https://thehackernews.com/2026/06/new-mistic-backdoor-linked-to-kongtuke.html)

**Published:** 6/25/2026

**Summary:** A new, stealthy backdoor named Mistic has been deployed as part of suspected financially motivated attacks aimed at multiple organizations spanning insurance, education, IT, and professional services sectors since April 2026.  According to Symantec and Carbon Black's Threat Hunter Team, the backdoor, also tracked as MLTBackdoor, is said to be linked to an initial access broker (IAB) named

---

### 3. Amadey and StealC Malware Network Disrupted, 27M Stolen Credentials Recovered

**Link:** [https://thehackernews.com/2026/06/amadey-and-stealc-malware-network.html](https://thehackernews.com/2026/06/amadey-and-stealc-malware-network.html)

**Published:** 6/24/2026

**Summary:** A coordinated law enforcement operation, in partnership with private sector companies, including Bitdefender, Bitsight, ESET, and Microsoft, has resulted in the takedown of criminal infrastructure powering Amadey and StealC.  "The main common goal was to disrupt the 'assembly lines' cybercriminals use to launch ransomware, financial fraud, and attacks on critical infrastructure," Europol said in

---

### 4. Cordyceps CI/CD Flaws Expose 300+ GitHub Repositories to Supply-Chain Attacks

**Link:** [https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html](https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html)

**Published:** 6/24/2026

**Summary:** Cybersecurity researchers have flagged a new class of CI/CD workflow weakness that allows attackers to hijack workflows and compromise open-source supply chains.  The "critical exploitable pattern" has been codenamed Cordyceps by Novee Security. The issue can allow full attacker control of repositories at dozens of the largest organizations worldwide, including Microsoft, Google, Apache, and

---

## JFrog Security Blog

### 1. Native Xet Protocol Support in JFrog Artifactory: How Enterprise Model Management Actually Works

**Link:** [https://jfrog.com/blog/native-xet-support-in-jfrog-artifactory/](https://jfrog.com/blog/native-xet-support-in-jfrog-artifactory/)

**Published:** 6/24/2026

**Summary:** Machine learning models are not like other software artifacts. A single fine-tuned LLM can weigh 70 GB. A model family may share 95% of its weights across dozens of variants. When hundreds of developers, training jobs, and GPU clusters all need the same model at the same time, the infrastructure underneath needs to be built …

---

### 2. Why Uniform Governance Fails with Enterprise AI Agents (And How to Fix It)

**Link:** [https://jfrog.com/blog/why-uniform-governance-fails-with-enterprise-ai-agents/](https://jfrog.com/blog/why-uniform-governance-fails-with-enterprise-ai-agents/)

**Published:** 6/24/2026

**Summary:** As organizations aggressively shift from static Large Language Model (LLM) chatbots to fully dynamic, autonomous AI agents (e.g. systems designed to plan workflows, call APIs, write runtime code, and modify enterprise databases), traditional compliance and governance frameworks are hitting a breaking point. A landmark press release from Gartner highlights a critical systemic risk: treating AI …

---

### 3. How JFrog and NanoClaw are Bringing Software Supply Chain Security to the Age of Autonomous AI

**Link:** [https://jfrog.com/blog/jfrog-and-nanoclaw-bring-security-to-ai/](https://jfrog.com/blog/jfrog-and-nanoclaw-bring-security-to-ai/)

**Published:** 6/24/2026

**Summary:** There’s a category of security risk that most organizations aren’t ready for. It doesn’t live in your code repository, your CI pipeline, or your developer laptops. It lives in your runtime, in the autonomous AI agents already running in your environment, extending their own capabilities, and making decisions that no human explicitly approved. This is …

---

## GitGuardian Blog

### 1. Identiverse 2026: The Challenges Of Solving Identity For AI Agents At Scale

**Link:** [https://blog.gitguardian.com/identiverse-2026-the-challenges-of-solving-identity-for-ai-agents-at-scale/](https://blog.gitguardian.com/identiverse-2026-the-challenges-of-solving-identity-for-ai-agents-at-scale/)

**Published:** 6/24/2026

**Summary:** This year's event made it clear that as AI agents scale across enterprises, we must solve ownership, delegation, least privilege, and auditability before production risk grows.

---

### 2. Hunting Leaked PyPI Tokens: 62 Live, 125 Packages Exposed

**Link:** [https://blog.gitguardian.com/hunting-leaked-pypi-tokens-62-live-125-packages-exposed/](https://blog.gitguardian.com/hunting-leaked-pypi-tokens-62-live-125-packages-exposed/)

**Published:** 6/24/2026

**Summary:** We found 62 live PyPI tokens leaking on public sources, enough to push malicious code to 125 packages with 25,000 monthly downloads. We reported them to PyPI, which revoked every one. Here's how we decoded the macaroons and checked which still worked.

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

**Last Updated:** 2026-06-25T19:11:06.206Z
