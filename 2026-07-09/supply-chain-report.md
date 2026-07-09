# Supply Chain Security Daily Report
**Date:** 2026-07-09
**Total Reports Found:** 24

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. The Risk of Agency: How AI Forces Us to Take It, and Why Germany Will Suffer

**Link:** [https://www.explore-exploit.com/p/the-risk-of-agency-how-ai-forces](https://www.explore-exploit.com/p/the-risk-of-agency-how-ai-forces)

**Published:** 7/9/2026

**Summary:** Article URL: https://www.explore-exploit.com/p/the-risk-of-agency-how-ai-forces Comments URL: https://news.ycombinator.com/item?id=48850680 Points: 1 # Comments: 0

---

### 2. Show HN: Onboard-CLI–a fast developer tool built in Go uses AST and LLM

**Link:** [https://onboard-cli.vercel.app/](https://onboard-cli.vercel.app/)

**Published:** 7/9/2026

**Summary:** Article URL: https://onboard-cli.vercel.app/ Comments URL: https://news.ycombinator.com/item?id=48850593 Points: 2 # Comments: 0

---

### 3. Show HN: Finterm.ai Finance CLI for Claude Code and Codex

**Link:** [https://news.ycombinator.com/item?id=48850527](https://news.ycombinator.com/item?id=48850527)

**Published:** 7/9/2026

**Summary:** Hi, my name is Kam, and today my cofounder Josh and I are shipping Finterm.ai, a CLI that gives coding agents direct access to financial data: stock prices, options data, SEC filings, and ticker deep research. I’m a developer and have been a full-time trader for the past few years. Recently I have been using LLMs more and more in my trading and strategy. I always found it frustrating that LLMs did not have direct access to actual financial information and had to rely on web search, so it couldn’t get me more granular numbers for specific options pricing. When making a trade I want to understand as much as possible about the stock. Instead of relying on analysts or interpretations of the data, I like to go directly to the truth. So whenever I have a trade thesis, I break research into a few parts: company research, analyst sentiment, and market sentiment. Last september I had a short thesis on Popmart Labubu's parent company. I thought the toy was a fad and that the stock would fall. I read through the SEC filings and had an LLM analyze them too: how big a driver is Labubu, what's the business model, what does the debt look like, and what looks strange enough to dig into. I compared the company to its peers on EPS and industry metrics. I asked GPT to do deep research that included around 50 queries and hundreds of pages to map every argument about the stock. Finally I looked at the options data: call/put ratios, implied volatility, recent volume, to see how the real money was betting. I made 16% over the next month. But the flow was painful, fetching SEC data, copy pasting filing sections in to GPT, aggregating everything by hand, and juggle a dozen chat windows. In the past few months, Josh and I spent more time trying to get agents to trade autonomously. The more we dug in, the more we realized that the problem you need to solve first is giving agents access to factual information in a token-efficient way. Our first design decision was making Finterm a CLI. We found that agents performed better with a CLI, since it didn’t waste as many tokens as interfacing with MCP or making API calls. We designed the CLI to be self-documenting and behave similarly to skills so it would be agent-friendly. Second, we batch multiple calls together. Whenever I research a ticker, I want the same few pieces of information every time—P/E ratio, revenue, current stock price, options sentiment. We let your agent make a single call, which saves tokens and gives a more complete view of a ticker. When doing web searches about a ticker, you often get noisy articles (how much you would have made if you had invested $X in Amazon in 2002), SEO spam, and duplicated articles covering the same topic from the same source. So our Ticker Deep Research returns a research packet: it fetches 600–800 links per ticker, strips out the 30–40% that is noise, and gives back the state of the internet on that ticker—deduped, with sources labeled primary or secondary and AI-slop sites flagged. Instead of crawling hundreds of webpages itself, your agent gets a thorough snapshot of what the market thinks about the stock. We take the same approach for SEC filings. Even with raw filings accessible now, most quarterly and annual filings are 90–95% boilerplate and repetition. We offer raw filings, but also an SEC filing diff tool where your agent sees only the diffs: the important changes to the company. Stock and options data is delayed by up to 15 minutes, which keeps costs reasonable and fits the research-first use case we’re building for. We realize this is a niche product for a technical audience that likes to trade stocks using Claude Code, but it’s close to a lot of the frustrations I feel myself, so I wanted to share it and see if anyone else is interested. You can sign up at finterm.ai and npm install -g @finterm-ai/cli to test it. We have a 3-day free trial (card required) and would love any feedback. Comments URL: https://news.ycombinator.com/item?id=48850527 Points: 3 # Comments: 0

---

## The Hacker News

### 1. Dormant GitHub Accounts Help Attackers Blend In While Mapping Corporate Orgs

**Link:** [https://thehackernews.com/2026/07/dormant-github-accounts-help-attackers.html](https://thehackernews.com/2026/07/dormant-github-accounts-help-attackers.html)

**Published:** 7/9/2026

**Summary:** Datadog Security Labs is warning of "several overlapping campaigns" that are systematically enumerating corporate GitHub organizations, repositories, and user accounts through the GitHub API.  "Operators rely on automated scraping tooling with custom or legitimate-sounding user agents, leveraging GitHub 'ghost' accounts that are often years old, or compromised OAuth tokens and personal

---

### 2. New GigaWiper Windows Backdoor Bundles Disk Wiping, Fake Ransomware, and Spyware

**Link:** [https://thehackernews.com/2026/07/new-gigawiper-windows-backdoor-bundles.html](https://thehackernews.com/2026/07/new-gigawiper-windows-backdoor-bundles.html)

**Published:** 7/9/2026

**Summary:** Microsoft has taken apart a destructive Windows backdoor it calls GigaWiper. What stands out is how it is built: not one tool but three older destructive programs bolted into one, offered as commands the operator can choose from.  Each is a different way to break a machine: wipe the whole disk, overwrite the Windows drive, or run fake "ransomware" that scrambles files with a key it never saves

---

### 3. npm 12 Disables Install Scripts by Default to Reduce Supply Chain Risk

**Link:** [https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html](https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html)

**Published:** 7/9/2026

**Summary:** GitHub has officially announced the release of npm version 12 with install scripts disabled by default, along with deprecating granular access tokens (GATs) designed to bypass two-factor authentication (2FA).  The Microsoft-owned subsidiary noted that the following npm install behaviors that used to run automatically before have been made opt-in -     allowScripts defaults to off, meaning

---

### 4. Microsoft Patches RoguePlanet Defender Flaw That Can Grant SYSTEM Privileges

**Link:** [https://thehackernews.com/2026/07/microsoft-patches-rogueplanet-defender.html](https://thehackernews.com/2026/07/microsoft-patches-rogueplanet-defender.html)

**Published:** 7/9/2026

**Summary:** Microsoft has released security updates for a Defender vulnerability known as RoguePlanet, nearly a month after details of the flaw became public.  The vulnerability, tracked as CVE-2026-50656 (CVSS score: 7.8), is a privilege escalation issue in the Microsoft Malware Protection Engine ("mpengine.dll"), which provides scanning, detection, and cleaning capabilities for its antivirus and

---

### 5. Top AI Agents Built to Catch Malicious Code Can Be Tricked Into Running It

**Link:** [https://thehackernews.com/2026/07/friendly-fire-ai-agents-built-to-catch.html](https://thehackernews.com/2026/07/friendly-fire-ai-agents-built-to-catch.html)

**Published:** 7/9/2026

**Summary:** Ask an AI coding agent to scan open-source code for security holes, and it might run the attacker's code on your own machine instead.  That is the finding in a proof-of-concept published Wednesday by the AI Now Institute, an attack it calls "Friendly Fire." It works against Anthropic's Claude Code and OpenAI's Codex when either is running in an autonomous mode that approves its own

---

## Endor Labs Blog

### 1. Endor Labs Named a Representative Vendor in the 2026 Gartner® Innovation Insight for Agentic Application Security Testing | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/endor-labs-named-a-representative-vendor-in-the-2026-gartner-r-innovation-insight-for-agentic-application-security-testing](https://www.endorlabs.com/learn/endor-labs-named-a-representative-vendor-in-the-2026-gartner-r-innovation-insight-for-agentic-application-security-testing)

**Published:** 7/9/2026

**Summary:** Endor Labs Named a Representative Vendor in the 2026 Gartner® Innovation Insight for Agentic Application Security Testing

---

### 2. Claude Sonnet 5 with Claude Code: strong on function, average on security, and unusually honest | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/claude-sonnet-5-with-claude-code-strong-on-function-average-on-security-and-unusually-honest](https://www.endorlabs.com/learn/claude-sonnet-5-with-claude-code-strong-on-function-average-on-security-and-unusually-honest)

**Published:** 7/9/2026

**Summary:** Claude Sonnet 5 with Claude Code: strong on function, average on security, and unusually honest

---

### 3. Egnyte Accelerates FedRAMP & Protects Engineering Velocity with Endor Labs | Customer Story | Endor Labs

**Link:** [https://www.endorlabs.com/learn/egnyte-accelerates-fedramp-protects-engineering-velocity-with-endor-labs](https://www.endorlabs.com/learn/egnyte-accelerates-fedramp-protects-engineering-velocity-with-endor-labs)

**Published:** 7/8/2026

**Summary:** By integrating high-fidelity reachability analysis into their existing security workflows, Egnyte’s product security team enabled precise risk prioritization. This shift allowed them to scale continuous monitoring across more than 350 engineers without a corresponding increase in security headcount.

---

## Bleeping Computer Security

### 1. New Helix vishing group emerges in SharePoint data theft attacks

**Link:** [https://www.bleepingcomputer.com/news/security/new-helix-vishing-group-emerges-in-sharepoint-data-theft-attacks/](https://www.bleepingcomputer.com/news/security/new-helix-vishing-group-emerges-in-sharepoint-data-theft-attacks/)

**Published:** 7/9/2026

**Summary:** A new data-extortion group called Helix is using identity-focused tactics such as voice phishing (vishing), device code phishing, and multi-factor authentication (MFA) abuse to steal data from SharePoint environments. [...]

---

### 2. Fake Paysafe, Skrill SDKs on NPM and PyPi steal credentials

**Link:** [https://www.bleepingcomputer.com/news/security/fake-paysafe-skrill-sdks-on-npm-and-pypi-steal-credentials/](https://www.bleepingcomputer.com/news/security/fake-paysafe-skrill-sdks-on-npm-and-pypi-steal-credentials/)

**Published:** 7/8/2026

**Summary:** Malicious packages on the Node Package Manager (npm) and the Python Package Index (PyPI) delivered stealer malware to developers and users of Paysafe, Skrill, and Neteller payment applications. [...]

---

## StepSecurity Blog

### 1. Injective npm Supply Chain Attack: 18 Packages Backdoored to Steal Crypto Wallet Keys

**Link:** [https://www.stepsecurity.io/blog/injective-npm-supply-chain-attack-18-packages-backdoored-to-steal-crypto-wallet-keys](https://www.stepsecurity.io/blog/injective-npm-supply-chain-attack-18-packages-backdoored-to-steal-crypto-wallet-keys)

**Published:** 7/9/2026

**Summary:** On July 8, 2026, attackers used access to a trusted developer's account to slip a backdoor into a widely used software development kit for the Injective blockchain. Disguised as harmless analytics, the code quietly captured wallet recovery phrases and private keys and sent them to an attacker-controlled server the moment a wallet was created or loaded. Automatic publishing pushed the tainted code out to 18 related packages within minutes, and it stayed live for less than an hour before being pulled and fixed. If your application installed any of the affected packages during that window, or picked up a cached copy since, treat any wallet secrets it touched as exposed.

---

### 2. Introducing Secret Exfiltration Protection for GitHub Actions 

**Link:** [https://www.stepsecurity.io/blog/introducing-secret-exfiltration-protection-for-github-actions](https://www.stepsecurity.io/blog/introducing-secret-exfiltration-protection-for-github-actions)

**Published:** 7/8/2026

**Summary:** StepSecurity now blocks and detects secret exfiltration in GitHub Actions, stopping attacks that plant malicious workflows to steal your repository secrets.

---

## GitHub Security Blog

### 1. How GitHub gave every repository a durable owner

**Link:** [https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/](https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/)

**Published:** 7/9/2026

**Summary:** GitHub had over 14,000 repositories. Fewer than half had clear ownership. Here's how we gave every active repository a validated owner in under 45 days, archived the rest, and made ownership the foundation for everything that followed. The post How GitHub gave every repository a durable owner appeared first on The GitHub Blog.

---

## GitGuardian Blog

### 1. GitGuardian Power for Amazon Kiro: Secrets Detection Built Into the Agent

**Link:** [https://blog.gitguardian.com/gitguardian-power-amazon-kiro/](https://blog.gitguardian.com/gitguardian-power-amazon-kiro/)

**Published:** 7/9/2026

**Summary:** GitGuardian is now live on the Kiro Powers marketplace. Install the Power once, and Kiro's agent scans for exposed secrets automatically every time it writes or modifies code that handles credentials.

---

## JFrog Security Blog

### 1. Boost Is Now In Public Preview

**Link:** [https://jfrog.com/blog/jfrog-boost-saves-ai-coding-tokens/](https://jfrog.com/blog/jfrog-boost-saves-ai-coding-tokens/)

**Published:** 7/9/2026

**Summary:** Today, we’re excited to announce that Boost is moving out of beta and into public preview. After months of building, breaking, and rebuilding inside JFrog’s own R&D organization, Boost is ready for the world. If you are currently running into token limits, unpredictable costs, or runaway usage from AI agents, Boost was built for you. …

---

### 2. Secure AI Workflows: The Identity and Access Management (IAM) Checklist

**Link:** [https://jfrog.com/blog/ai-access-management-checklist/](https://jfrog.com/blog/ai-access-management-checklist/)

**Published:** 7/8/2026

**Summary:** AI agents and LLMs are already building, analyzing, and deploying code across your software development lifecycle. As software supply chains become increasingly AI-driven, proactive security and access controls are your only path to success. To effectively govern authentication and permissions without sacrificing development speed, you must update your access management strategies. By securing the AI …

---

## Sonatype Security Research

### 1. Q2 2026 Open Source Malware Index

**Link:** [https://www.sonatype.com/blog/q2-2026-open-source-malware-index-attackers-abuse-developer-trust](https://www.sonatype.com/blog/q2-2026-open-source-malware-index-attackers-abuse-developer-trust)

**Published:** 7/9/2026

**Summary:** TL;DR        At the end of Q2 2026, Sonatype Research reached 1.8 million malicious packages logged.       In Q2, npm accounted for 96.6% of malicious package counts, with repository abuse and trojan-class activity showing how attackers continue to exploit high-trust, high-automation ecosystems.       The quarter's defining theme was trust under pressure. Large-scale repository abuse campaigns, worm-like malware, dependency confusion, and maintainer compromises turned trusted software distribution channels into attack paths.       Q2 showed attackers evolving beyond obvious malicious packages to target trusted developer workflows through campaigns like Shai-Hulud Miasma, CanisterSprawl, Atomic Arch, malicious PyTorch Lightning releases, dependency confusion, and maintainer/package hijacking.           In Q2 2026, Sonatype Research reached more than 1.8 million malicious packages logged across ecosystems over the past decade. This quarter's malicious activity was driven overwhelmingly by npm, which accounted for 96.6% of packages.   This quarter was not shaped primarily by isolated malicious uploads, but rather a more industrialized pattern of abuse, for example:        Large-scale package publication       Repository misuse       Trojan-class malware operating at massive volumes      npm's dominance should not flatten the story. Sonatype also observed lower-volume but higher-signal malicious behavior across PyPI, NuGet, Hugging Face models, RubyGems, Go, Cargo, and other ecosystems. So, npm produced the flood, but the broader ecosystem showed how attackers continue to probe trusted developer workflows.   Q2 pushed a Q1 trend even further: open source malware is no longer only a package-by-package detection problem. Defenders must understand how malicious packages behave, where they execute, and which trust relationships they abuse.   npm Dominated, But Trust Was the Target   npm dominated Q2 by count, but outside npm, the threat landscape became far more concentrated. Nearly 87% of all non-npm malicious package activity occurred in just two ecosystems: PyPI (48.5%) and NuGet (38.0%). Hugging Face models (6.8%) and RubyGems (3.0%) accounted for much of the remainder.   PyPI and NuGet also carried the highest concentrations of higher-risk behaviors:                               Threat Type      Quantity in PyPI      Quantity in NuGet                  Potentially unwanted applications (PUAs)      3,286      3,268                  Secrets exfiltration      2,155      1,962                  Droppers      1,326      676                  Host information exfiltration      341      8                  While repository abuse and trojan activity drove overall volume, the concentration of exfiltration and payload-delivery behaviors in PyPI and NuGet reinforces that attackers continue to target multiple trusted ecosystems — not just npm.   Trojan activity shows the payload problem. Brandjacking and hijacking show the trust problem. Q2 illustrated both as attackers used npm's reach, familiar package names, compromised maintainers, and dependency relationships to turn trusted paths into attack paths.   The Quarter's Defining Pattern: Trusted Paths Became Attack Paths   The Q2 dataset is reinforced by the quarter's malware research. Sonatype Research published extensively on campaigns that abused trusted packages, maintainers, dependency relationships, and install-time workflows.   Instead of analyzing each campaign in isolation, let's organize them according to the broader patterns they demonstrate.   Self-Propagating and Maintainer-Focused Malware Continued to Evolve   Shai-Hulud remained one of the clearest examples of attackers turning trusted packages into propagation infrastructure.   In early June, Sonatype Research tracked a new Shai-Hulud Miasma wave affecting hundreds of npm packages. Moving beyond standard installation scripts, the campaign abused binding.gyp to execute during install, allowing it to harvest developer and CI/CD data, steal tokens, validate credentials, and publish more malicious artifacts.   Attackers adapted to defender expectations. If security teams only look for suspicious lifecycle scripts in package.json, attackers will move execution elsewhere.   We also tracked CanisterSprawl, a self-propagating npm malware campaign that stole sensitive data from developer machines and then used hijacked credentials to publish additional compromised packages.   Credential theft is no longer always the end state. In modern open source malware, stolen credentials can become the next distribution mechanism.   Dependency Relationships Became a Delivery Mechanism   Several Q2 campaigns showed attackers abusing the way package managers resolve and install dependencies.   In a 176-package npm campaign leveraging dependency confusion, Sonatype researchers found malicious packages with exceptionally high version numbers designed to win automated resolution races against internal dependencies. The malware host environments, downloaded platform-specific payloads, and harvested environment variables, credentials, CI/CD secrets, and authentication tokens.   The easy-day-js campaign followed a related pattern. Attackers compromised trusted Mastra packages and added a malicious dependency, causing installs of those packages to also install and execute easy-day-js.   Atomic Arch extended this pattern past npm by targeting orphaned Arch User Repository packages. By modifying PKGBUILDs to pull in a malicious npm dependency, the campaign enabled credential harvesting, stealth, anti-debugging, and data exfiltration, ultimately impacting around 1,500 packages across multiple waves.   These campaigns demonstrate that attackers do not always need to convince developers to install obviously malicious packages. Compromising a trusted dependency relationship is enough.   Trusted Packages and Maintainers Remained High-Value Targets   Q2 also showed continued attacker focus on trusted packages and maintainer accounts.   For the PyTorch Lightning incident, Sonatype reported how malicious versions of the popular lightning package were uploaded to PyPI after a publisher account compromise. The malicious versions were designed to steal developer credentials and republish malicious versions of repositories accessible through stolen tokens.   We also reported hijacked Red Hat Cloud Services packages that delivered install-time malware designed to steal credentials, spread through trusted workflows, and expose developer environments.   Another hijacked npm package attempted to deliver malware linked to PolinRider, exposing developer systems, CI/CD pipelines, and credentials.   These incidents show why maintainer and publisher security remains central to open source risk. Once a trusted package or account is compromised, the attacker inherits legitimacy.   Brandjacking Remained a Persistent Trust-Abuse Technique   Q2 also included activity associated with Lazarus Group brandjacking on npm. Sonatype reported a campaign involving dozens of packages, some with up to 500 weekly downloads, that used naming and mimicry tactics to appear as though they belonged in legitimate developer environments.   Brandjacking is smaller than trojan activity by raw count in the Q2 dataset, but it remains dangerous because it targets developer assumptions. Attackers mimic naming conventions, ecosystem patterns, organizational signals, and package relationships to get malicious software installed.   The Defender's Challenge: Prioritize Without Being Blinded by Volume   Data and incidents from Q2 2026 illustrate that although the volume of malicious packages is significant, quantity alone cannot function as a proper risk model.   Focusing only on the largest category reduces the quarter to npm repository abuse. Similarly, focusing solely on severe payloads overlooks the automation, trust abuse, and dependency-chain behaviors that enable malicious packages to spread.   Modern open source malware often executes during installation, build, or CI/CD automation rather than waiting for application runtime. Traditional scanning frequently detects artifacts too late — after execution has occurred, secrets are exposed, and follow-on activity is already underway. Consequently, security controls must operate earlier and continuously.   Organizations should:        Block known malicious components before they enter internal repositories.       Automate detection of malicious behavior across direct and transitive dependencies.       Enforce validation of package provenance, publisher behavior, and release integrity.       Protect internal namespaces against dependency confusion.       Rotate credentials when developer or CI/CD environments may have been exposed.       Extend software supply chain governance to AI and ML artifacts, not just traditional package managers.      When Scale Becomes the Threat   Q2 2026 was marked not merely by a rise in malicious packages but a clear demonstration of how open source malware has become industrialized.   Attackers continue to concentrate activity in npm while refining cross-ecosystem techniques. They abuse trusted packages, maintainers, dependencies, and install behaviors, using stolen credentials to compromise victims and propagate through the software supply chain.   While data highlights npm, the actual threat landscape is broader. Attackers exploit systemic trust, automation, and dependency resolution, meaning defenders cannot treat malicious packages as isolated artifacts.   Open source remains a great accelerator of modern software development. But Q2 2026 shows that the same scale that makes open source powerful also makes it attractive to attackers.   When trusted paths become attack paths, security needs to move earlier, faster, and with more context.

---

## Kiuwan Blog

### 1. Top SonarQube Alternatives for SAST and Code Quality

**Link:** [https://www.kiuwan.com/blog/sonarqube-alternatives/](https://www.kiuwan.com/blog/sonarqube-alternatives/)

**Published:** 7/9/2026

**Summary:** The best SonarQube alternatives for DevSecOps teams are tools that go beyond code quality to deliver genuine static application security testing, software composition analysis, and compliance mapping in a single platform.  The strongest options in 2026 are Kiuwan Code Security, Checkmarx, Snyk Code, Semgrep, Veracode, Coverity, GitHub CodeQL, DeepSource, and Codacy. Each fills a different […]

---

## Schneier on Security

### 1. The Language of AI Could Change How Humans Speak

**Link:** [https://www.schneier.com/blog/archives/2026/07/the-language-of-ai-could-change-how-humans-speak.html](https://www.schneier.com/blog/archives/2026/07/the-language-of-ai-could-change-how-humans-speak.html)

**Published:** 7/9/2026

**Summary:** Because of the way they are trained, large language models capture only a slice of human language. They’re trained on the written word, from textbooks to social media posts, and our speech as captured in movies and on television. These models have minimal access to the unscripted conversations we have face to face or voice to voice. This is the vast majority of speech, and a vital component of human culture. There’s a risk to this. The increased use of large language models means we humans will encounter much more AI-generated text. We humans, in turn, will begin to adopt the linguistic patterns and behaviors of these models. This will affect not just how we communicate with one another, but also how we ...

---

### 2. Cybersecurity and the Gap Between Skill and Ability

**Link:** [https://www.schneier.com/blog/archives/2026/07/cybersecurity-and-the-gap-between-skill-and-ability.html](https://www.schneier.com/blog/archives/2026/07/cybersecurity-and-the-gap-between-skill-and-ability.html)

**Published:** 7/8/2026

**Summary:** Last week, national security agencies from the Five Eyes—that’s the rich, English-language-speaking countries club—jointly released a statement warning of the increasing cyber risks of AI models: in particular, their ability to autonomously hack into systems and networks. The statement was more measured than some of the breathless headlines about it, and the advice they gave is pretty much the standard advice everyone gives—albeit with newfound urgency. Internet risks are nothing new, and cyberattacks—both large and small—have been a significant issue since long before the current crop of generative AI models...

---

## Krebs on Security

### 1. Felons, Fraudsters Flog Offensive Cybersecurity Startup

**Link:** [https://krebsonsecurity.com/2026/07/felons-fraudsters-flog-offensive-cybersecurity-startup/](https://krebsonsecurity.com/2026/07/felons-fraudsters-flog-offensive-cybersecurity-startup/)

**Published:** 7/8/2026

**Summary:** A cybersecurity startup dangling millions of dollars to acquire zero-day security vulnerabilities in popular software is run by a pair of far-right conspiracy theorists and convicted felons whose most recent ventures included fake intelligence companies and a now-defunct AI-based lobbying platform they operated under assumed names.

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

**Last Updated:** 2026-07-09T19:02:20.926Z
