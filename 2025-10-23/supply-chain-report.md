# Supply Chain Security Daily Report
**Date:** 2025-10-23
**Total Reports Found:** 15

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: MCP-C – cloud platform for running MCP agents and apps

**Link:** [https://docs.mcp-agent.com/cloud/overview](https://docs.mcp-agent.com/cloud/overview)

**Published:** 10/23/2025

**Summary:** Hello HN! Earlier this year, we shared mcp-agent(https://github.com/lastmile-ai/mcp-agent) [1][2], a lightweight framework for building agents with MCP. Since then we have tried to push the protocol to the limits, including hosting agents as long-running tools on MCP [3], and seen other creative approaches surface (mcp-ui, chatgpt apps sdk). Today, we are launching mcp-c – a cloud platform designed for hosting any kind of MCP server, including agents, ChatGPT apps, etc. We are in open beta and free to use, and would love your feedback. Here are some key choices we made: 1) Everything is MCP. Each application is deployed as a remote SSE endpoint, and implements the full MCP spec, including advanced features like elicitation, sampling, notifications and logging. 2) Durable execution via Temporal. We use Temporal as the runtime environment, allowing you to run long-running operations. This is especially critical for agents, which need to pause/resume, be fault-tolerant, and run for a long time. 3) Local to Cloud - we're fans of how easy it is to deploy a Next.js app to Vercel, so we've made it simple to take your local mcp-agent, mcp server, OpenAI app, etc. and deploy it to the cloud. We have several examples and even a handy CLI to get started quickly [4]. It's as simple as: - uvx mcp-agent init - uv init - uv add "mcp-agent[openai]" - uvx mcp-agent login # add your openai key to mcp_agent.secrets.yaml - uvx mcp-agent deploy You can also try out these hosted mcp servers to get an idea. These can be connected to any MCP client (ChatGPT, Claude Desktop/Code, Cursor, etc.) OpenAI Pizza App - https://18t536mliucyeuhkkcnjdavxtyg66pgl.deployments.mcp-age... Basic Agent Server - https://1m82g32x8nkoppinayx0k5ye12oar6vk.deployments.mcp-age... The HN community has been a big part of mcp-agent's growth, and we're super excited to share this with you as well. We would love to hear your thoughts and feedback! [1] - https://news.ycombinator.com/item?id=42867050 [2] - https://github.com/lastmile-ai/mcp-agent [3] - https://news.ycombinator.com/item?id=44053754 [4] - https://github.com/lastmile-ai/mcp-agent/tree/main/examples/... [5] - https://docs.mcp-agent.com/get-started/welcome Comments URL: https://news.ycombinator.com/item?id=45685170 Points: 1 # Comments: 0

---

### 2. Ask HN: What's your favorite non-tech/not-quite-tech blog?

**Link:** [https://news.ycombinator.com/item?id=45685098](https://news.ycombinator.com/item?id=45685098)

**Published:** 10/23/2025

**Summary:** As much as we all love tech, here, sometimes we need something to break up that feed of endless articles on LMM this or that, CSS tricks or cybersecurity analysis. One of my long-time favorites is https://sciencefictionruminations.com/ As an aspiring writer, I really enjoy a lot of the more "out-there" sci-fi that came from the era that Joachim Boaz tends to focus on. It also feeds my love of hunting for gems in used book stores while scratching that itch of wanting to "discuss" a book since I'm lacking in friends that like talking about what they're reading. I was recently turned on to https://acoup.blog/, which is a delightfully written and fairly educational blog about history...more or less. But it got me wondering what else HN has on their list. What's that blog in your reader that gets you out of the wires, reminds you that you are more than just your job, or just generally stokes the fires of your curiosity? Comments URL: https://news.ycombinator.com/item?id=45685098 Points: 2 # Comments: 0

---

## Kiuwan Blog

### 1. AI and Cybersecurity: Threats, Defenses, and What to Expect Next

**Link:** [https://www.kiuwan.com/blog/ai-cybersecurity/](https://www.kiuwan.com/blog/ai-cybersecurity/)

**Published:** 10/23/2025

**Summary:** Artificial intelligence (AI) is reshaping cybersecurity. It’s being used to defend networks and to launch more sophisticated attacks. AI and cybersecurity are now closely connected, for better and worse. As threats become more advanced and harder to detect, it’s crucial for organizations to understand how AI is changing the way we protect systems—and how to […]

---

## Sonatype Security Research

### 1. The True Cost of Not Having a Cloud Repository

**Link:** [https://www.sonatype.com/blog/the-true-cost-of-not-having-a-cloud-repository](https://www.sonatype.com/blog/the-true-cost-of-not-having-a-cloud-repository)

**Published:** 10/23/2025

**Summary:** For many organizations, on-premises artifact repositories have long been "good enough." They are familiar. They work. They seem cheaper on paper.

---

## The Hacker News

### 1. ThreatsDay Bulletin: $176M Crypto Fine, Hacking Formula 1, Chromium Vulns, AI Hijack & More

**Link:** [https://thehackernews.com/2025/10/threatsday-bulletin-176m-crypto-fine.html](https://thehackernews.com/2025/10/threatsday-bulletin-176m-crypto-fine.html)

**Published:** 10/23/2025

**Summary:** Criminals don’t need to be clever all the time; they just follow the easiest path in: trick users, exploit stale components, or abuse trusted systems like OAuth and package registries. If your stack or habits make any of those easy, you’re already a target. This week’s ThreatsDay highlights show exactly how those weak points are being exploited — from overlooked

---

### 2. “Jingle Thief” Hackers Exploit Cloud Infrastructure to Steal Millions in Gift Cards

**Link:** [https://thehackernews.com/2025/10/jingle-thief-hackers-exploit-cloud.html](https://thehackernews.com/2025/10/jingle-thief-hackers-exploit-cloud.html)

**Published:** 10/23/2025

**Summary:** Cybersecurity researchers have shed light on a cybercriminal group called Jingle Thief that has been observed targeting cloud environments associated with organizations in the retail and consumer services sectors for gift card fraud. "Jingle Thief attackers use phishing and smishing to steal credentials, to compromise organizations that issue gift cards," Palo Alto Networks Unit 42 researchers

---

### 3. Iran-Linked MuddyWater Targets 100+ Organisations in Global Espionage Campaign

**Link:** [https://thehackernews.com/2025/10/iran-linked-muddywater-targets-100.html](https://thehackernews.com/2025/10/iran-linked-muddywater-targets-100.html)

**Published:** 10/22/2025

**Summary:** The Iranian nation-state group known as MuddyWater has been attributed to a new campaign that has leveraged a compromised email account to distribute a backdoor called Phoenix to various organizations across the Middle East and North Africa (MENA) region, including over 100 government entities. The end goal of the campaign is to infiltrate high-value targets and facilitate intelligence gathering

---

### 4. Ukraine Aid Groups Targeted Through Fake Zoom Meetings and Weaponized PDF Files

**Link:** [https://thehackernews.com/2025/10/ukraine-aid-groups-targeted-through.html](https://thehackernews.com/2025/10/ukraine-aid-groups-targeted-through.html)

**Published:** 10/22/2025

**Summary:** Cybersecurity researchers have disclosed details of a coordinated spear-phishing campaign dubbed PhantomCaptcha targeting organizations associated with Ukraine's war relief efforts to deliver a remote access trojan that uses a WebSocket for command-and-control (C2). The activity, which took place on October 8, 2025, targeted individual members of the International Red Cross, Norwegian Refugee

---

### 5. Fake Nethereum NuGet Package Used Homoglyph Trick to Steal Crypto Wallet Keys

**Link:** [https://thehackernews.com/2025/10/fake-nethereum-nuget-package-used.html](https://thehackernews.com/2025/10/fake-nethereum-nuget-package-used.html)

**Published:** 10/22/2025

**Summary:** Cybersecurity researchers have uncovered a new supply chain attack targeting the NuGet package manager with malicious typosquats of Nethereum, a popular Ethereum .NET integration platform, to steal victims' cryptocurrency wallet keys. The package, Netherеum.All, has been found to harbor functionality to decode a command-and-control (C2) endpoint and exfiltrate mnemonic phrases, private keys, and

---

## Schneier on Security

### 1. Serious F5 Breach

**Link:** [https://www.schneier.com/blog/archives/2025/10/serious-f5-breach.html](https://www.schneier.com/blog/archives/2025/10/serious-f5-breach.html)

**Published:** 10/23/2025

**Summary:** This is bad: F5, a Seattle-based maker of networking software, disclosed the breach on Wednesday. F5 said a “sophisticated” threat group working for an undisclosed nation-state government had surreptitiously and persistently dwelled in its network over a “long-term.” Security researchers who have responded to similar intrusions in the past took the language to mean the hackers were inside the F5 network for years. During that time, F5 said, the hackers took control of the network segment the company uses to create and distribute updates for BIG IP, a line of server appliances that F5 ...

---

### 2. Failures in Face Recognition

**Link:** [https://www.schneier.com/blog/archives/2025/10/failures-in-face-recognition.html](https://www.schneier.com/blog/archives/2025/10/failures-in-face-recognition.html)

**Published:** 10/22/2025

**Summary:** Interesting article on people with nonstandard faces and how facial recognition systems fail for them. Some of those living with facial differences tell WIRED they have undergone multiple surgeries and experienced stigma for their entire lives, which is now being echoed by the technology they are forced to interact with. They say they haven’t been able to access public services due to facial verification services failing, while others have struggled to access financial services. Social media filters and face-unlocking systems on phones often won’t work, they say...

---

## Bleeping Computer Security

### 1. TARmageddon flaw in abandoned Rust library enables RCE attacks

**Link:** [https://www.bleepingcomputer.com/news/security/tarmageddon-flaw-in-abandoned-rust-library-enables-rce-attacks/](https://www.bleepingcomputer.com/news/security/tarmageddon-flaw-in-abandoned-rust-library-enables-rce-attacks/)

**Published:** 10/22/2025

**Summary:** A high-severity vulnerability in the now-abandoned async-tar Rust library and its forks can be exploited to gain remote code execution on systems running unpatched software. [...]

---

## GitHub Security Blog

### 1. Top security researcher shares their bug bounty process

**Link:** [https://github.blog/security/top-security-researcher-shares-their-bug-bounty-process/](https://github.blog/security/top-security-researcher-shares-their-bug-bounty-process/)

**Published:** 10/22/2025

**Summary:** For this year’s Cybersecurity Awareness Month, the GitHub Bug Bounty team is excited to put the spotlight on a talented security researcher—André Storfjord Kristiansen! The post Top security researcher shares their bug bounty process appeared first on The GitHub Blog.

---

## GitGuardian Blog

### 1. From Path Traversal to Supply Chain Compromise: Breaking MCP Server Hosting

**Link:** [https://blog.gitguardian.com/breaking-mcp-server-hosting/](https://blog.gitguardian.com/breaking-mcp-server-hosting/)

**Published:** 10/22/2025

**Summary:** We found a path traversal vulnerability in Smithery.ai that compromised over 3,000 MCP servers and exposed thousands of API keys. Here's how a single Docker build bug nearly triggered one of the largest AI supply chain attacks to date.

---

## JFrog Security Blog

### 1. JFrog Named as a Visionary in the 2025 Gartner® Magic Quadrant™ for Application Security Testing

**Link:** [https://jfrog.com/blog/jfrog-recognized-visionary-gartner-2025-magic-quadrant-ast-report/](https://jfrog.com/blog/jfrog-recognized-visionary-gartner-2025-magic-quadrant-ast-report/)

**Published:** 10/22/2025

**Summary:** We’re excited to announce that Gartner has named JFrog a ‘Visionary’ in the 2025 Magic QuadrantTM for Application Security Testing. We believe this reflects JFrog’s forward thinking strategy of integrating application security seamlessly throughout the entire software development lifecycle in ways that help organizations deliver their most secure, trusted applications without impacting developers’ productivity.  Innovation …

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

**Last Updated:** 2025-10-23T18:40:17.375Z
