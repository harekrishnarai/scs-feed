# Supply Chain Security Daily Report
**Date:** 2026-03-14
**Total Reports Found:** 13

## Summary

This automated report aggregates supply chain security-related news, vulnerabilities, and research from multiple trusted sources.

## Hacker News

### 1. Show HN: Iris – first MCP-native eval and observability tool for AI agents

**Link:** [https://github.com/iris-eval/mcp-server](https://github.com/iris-eval/mcp-server)

**Published:** 3/14/2026

**Summary:** I kept running into the same problem building AI agents: once they're running, I have no idea what they're actually doing. Traditional monitoring shows me HTTP 200. It can't tell me the output was wrong, that the agent leaked a user's email address, or that a single tool call in the chain is burning through tokens. So I built Iris. It's an open-source MCP server — not an SDK, not a proxy. Any MCP-compatible agent (Claude Desktop, Cursor, or anything built with the MCP SDK) discovers and uses it automatically. Add it to your MCP config and your agent gains observability without touching your code. What it does: - 3 MCP tools: log_trace (full execution traces with spans, tool calls, token usage, cost in USD), evaluate_output (score output quality against configurable rules), get_traces (query traces with filters and pagination) - 12 built-in eval rules across 4 categories: completeness (output length, coverage), relevance (keyword overlap, hallucination markers), safety (PII detection for SSN/credit card/phone/email, prompt injection patterns, blocklist), and cost (USD threshold, token efficiency) - Hierarchical span tree: trace exactly where in an agent's execution chain something went wrong — which tool call failed, which step was slow - Aggregate cost tracking: the dashboard shows total agent spend across all your agents over any time window, not just per-trace cost. You can finally answer "what are my agents costing me?" - Web dashboard: dark-mode React UI with summary cards, trace list, span tree view, eval results with per-rule breakdown - SQLite storage: single file, no database server. Back it up, move it, inspect it with any SQLite tool - Custom eval rules defined with Zod schemas Security: API key auth, rate limiting (express-rate-limit), helmet headers, CORS, input validation, ReDoS-safe regex for user-supplied patterns, 1MB body limit. Stack: TypeScript, Express 5, better-sqlite3, @modelcontextprotocol/sdk, Zod, pino. Iris also exposes MCP resources — your agent can programmatically read iris://dashboard/summary to get aggregate metrics without opening the dashboard. Every trace logs full traceability, which also means you're building the audit trail that regulations like the EU AI Act will require by August 2026.   npm install -g @iris-eval/mcp-server   iris-mcp --transport http --dashboard  GitHub: https://github.com/iris-eval/mcp-server npm: https://www.npmjs.com/package/@iris-eval/mcp-server I'd appreciate feedback on two things specifically: 1. The eval rule system — are these the right 12 rules to ship with? What's missing? 2. The MCP tool API — three tools feels minimal but sufficient. Should trace logging and evaluation be combined or kept separate? Check the roadmap for what's coming next: https://github.com/iris-eval/mcp-server/blob/main/docs/roadm... Comments URL: https://news.ycombinator.com/item?id=47379690 Points: 1 # Comments: 0

---

### 2. Ask HN: How do you enforce least-privilege when an API token has full access?

**Link:** [https://news.ycombinator.com/item?id=47379595](https://news.ycombinator.com/item?id=47379595)

**Published:** 3/14/2026

**Summary:** Curious how people handle least-privilege access when integrating third-party APIs that only offer a single coarse permission scope (or limited scopes that are still over-provisioned for a specific use case). A lot of services expose APIs where the token basically grants everything the integration can do (read/write/delete across the entire account), making it hard to enforce the principle of least privilege internally when multiple internal services or agents are calling the same API. In those cases, do you... Put an API proxy/gateway in front of the third-party API to enforce granular permissions? Use RBAC/ABAC rules in a proxy layer to filter which endpoints/actions can be called? Just accept the coarse permissions and risk associated? Something else? Would love to hear real architectures people are using in production, especially when the upstream API itself doesn’t support fine-grained scopes. Comments URL: https://news.ycombinator.com/item?id=47379595 Points: 2 # Comments: 1

---

### 3. Kraken – open-source autonomous dev agent for the terminal

**Link:** [https://news.ycombinator.com/item?id=47379499](https://news.ycombinator.com/item?id=47379499)

**Published:** 3/14/2026

**Summary:** Hey HN, I've been building Kraken for the past month — an open source autonomous  dev agent that runs entirely in your terminal. The architecture is a three-process system: a Rust scheduler (cron + file  watchers), a Go LLM gateway (supports OpenAI, Anthropic and OpenRouter),  and a TypeScript/React TUI built with OpenTUI. All three communicate over  ConnectRPC on localhost. A few things I wanted to get right from the start: - Model-agnostic: uses a custom XML-based tool-calling protocol instead of    native provider APIs, so it works the same regardless of the LLM - Plugin system: plugins implement a KrakenPlugin interface from the SDK,    can register tools, hook into the agent lifecycle and extend the system prompt - No cloud: all state lives in a local SQLite file It's early and a lot is still missing (docs, tests, CI). I'm sharing it now  because I'd rather get feedback from people who know what they're doing than  polish it in private. Repo: github.com/galfrevn/kraken Happy to answer questions about the architecture or design decisions. Comments URL: https://news.ycombinator.com/item?id=47379499 Points: 1 # Comments: 0

---

## StepSecurity Blog

### 1. ForceMemo: Hundreds of GitHub Python Repos Compromised via Account Takeover and Force-Push

**Link:** [https://www.stepsecurity.io/blog/forcememo-hundreds-of-github-python-repos-compromised-via-account-takeover-and-force-push](https://www.stepsecurity.io/blog/forcememo-hundreds-of-github-python-repos-compromised-via-account-takeover-and-force-push)

**Published:** 3/14/2026

**Summary:** The StepSecurity threat intelligence team was the first to discover and report on an ongoing campaign — which we are tracking as ForceMemo — in which an attacker is compromising hundreds of GitHub accounts and injecting identical malware into hundreds of Python repositories. The earliest injections date to March 8, 2026, and the campaign is still active with new repos continuing to be compromised.

---

### 2. xygeni-action Compromised: C2 Reverse Shell Backdoor Injected via Tag Poisoning

**Link:** [https://www.stepsecurity.io/blog/xygeni-action-compromised-c2-reverse-shell-backdoor-injected-via-tag-poisoning](https://www.stepsecurity.io/blog/xygeni-action-compromised-c2-reverse-shell-backdoor-injected-via-tag-poisoning)

**Published:** 3/13/2026

**Summary:** The official Xygeni GitHub Action (xygeni-action) was compromised on March 3, 2026, when an attacker using stolen maintainer credentials injected a full C2 reverse shell backdoor and silently moved the mutable v5 tag to the malicious commit - affecting all repositories referencing @v5 without any visible change to their workflow files. The v5 tag remains poisoned as of March 9; users should immediately pin to v6.4.0 or a specific commit SHA, and StepSecurity's Harden-Runner would have detected and blocked the C2 callback to 91.214.78.178.

---

## Bleeping Computer Security

### 1. AppsFlyer Web SDK hijacked to spread crypto-stealing JavaScript code

**Link:** [https://www.bleepingcomputer.com/news/security/appsflyer-web-sdk-used-to-spread-crypto-stealer-javascript-code/](https://www.bleepingcomputer.com/news/security/appsflyer-web-sdk-used-to-spread-crypto-stealer-javascript-code/)

**Published:** 3/14/2026

**Summary:** The AppsFlyer Web SDK was temporarily hijacked this week with malicious code used to steal cryptocurrency in a supply-chain attack. [...]

---

## The Hacker News

### 1. GlassWorm Supply-Chain Attack Abuses 72 Open VSX Extensions to Target Developers

**Link:** [https://thehackernews.com/2026/03/glassworm-supply-chain-attack-abuses-72.html](https://thehackernews.com/2026/03/glassworm-supply-chain-attack-abuses-72.html)

**Published:** 3/14/2026

**Summary:** Cybersecurity researchers have flagged a new iteration of the GlassWorm campaign that they say represents a "significant escalation" in how it propagates through the Open VSX registry. "Instead of requiring every malicious listing to embed the loader directly, the threat actor is now abusing extensionPack and extensionDependencies to turn initially standalone-looking extensions into transitive

---

### 2. Chinese Hackers Target Southeast Asian Militaries with AppleChris and MemFun Malware

**Link:** [https://thehackernews.com/2026/03/chinese-hackers-target-southeast-asian.html](https://thehackernews.com/2026/03/chinese-hackers-target-southeast-asian.html)

**Published:** 3/13/2026

**Summary:** A suspected China-based cyber espionage operation has targeted Southeast Asian military organizations as part of a state-sponsored campaign that dates back to at least 2020. Palo Alto Networks Unit 42 is tracking the threat activity under the moniker CL-STA-1087, where CL refers to cluster, and STA stands for state-backed motivation. "The activity demonstrated strategic operational patience and

---

### 3. INTERPOL Dismantles 45,000 Malicious IPs, Arrests 94 in Global Cybercrime

**Link:** [https://thehackernews.com/2026/03/interpol-dismantles-45000-malicious-ips.html](https://thehackernews.com/2026/03/interpol-dismantles-45000-malicious-ips.html)

**Published:** 3/13/2026

**Summary:** INTERPOL on Friday announced the takedown of 45,000 malicious IP addresses and servers used in connection with phishing, malware, and ransomware campaigns, as part of the agency's ongoing efforts to dismantle criminal networks, disrupt emerging threats, and safeguard victims from scams. The effort is part of an international law enforcement operation that involved 72 countries and territories.

---

### 4. Storm-2561 Spreads Trojan VPN Clients via SEO Poisoning to Steal Credentials

**Link:** [https://thehackernews.com/2026/03/storm-2561-spreads-trojan-vpn-clients.html](https://thehackernews.com/2026/03/storm-2561-spreads-trojan-vpn-clients.html)

**Published:** 3/13/2026

**Summary:** Microsoft has disclosed details of a credential theft campaign that employs fake virtual private network (VPN) clients distributed through search engine optimization (SEO) poisoning techniques. "The campaign redirects users searching for legitimate enterprise software to malicious ZIP files on attacker-controlled websites to deploy digitally signed trojans that masquerade as trusted VPN clients

---

### 5. Google Fixes Two Chrome Zero-Days Exploited in the Wild Affecting Skia and V8

**Link:** [https://thehackernews.com/2026/03/google-fixes-two-chrome-zero-days.html](https://thehackernews.com/2026/03/google-fixes-two-chrome-zero-days.html)

**Published:** 3/13/2026

**Summary:** Google on Thursday released security updates for its Chrome web browser to address two high-severity vulnerabilities that it said have been exploited in the wild. The list of vulnerabilities is as follows -  CVE-2026-3909 (CVSS score: 8.8) - An out-of-bounds write vulnerability in the Skia 2D graphics library that allows a remote attacker to perform out-of-bounds memory access via a crafted HTML

---

## Schneier on Security

### 1. Friday Squid Blogging: Increased Squid Population in the Falklands

**Link:** [https://www.schneier.com/blog/archives/2026/03/friday-squid-blogging-increased-squid-population-in-the-falklands.html](https://www.schneier.com/blog/archives/2026/03/friday-squid-blogging-increased-squid-population-in-the-falklands.html)

**Published:** 3/13/2026

**Summary:** Some good news: squid stocks seem to be recovering in the waters off the Falkland Islands. As usual, you can also use this squid post to talk about the security stories in the news that I haven’t covered. Blog moderation policy.

---

## Endor Labs Blog

### 1. How the EU Cyber Resilience Act (CRA) rewrites the rules of software liability | Blog | Endor Labs

**Link:** [https://www.endorlabs.com/learn/how-the-eu-cyber-resilience-act-cra-rewrites-the-rules-of-software-liability](https://www.endorlabs.com/learn/how-the-eu-cyber-resilience-act-cra-rewrites-the-rules-of-software-liability)

**Published:** 3/13/2026

**Summary:** The EU Cyber Resilience Act shifts software liability to vendors, requiring continuous vulnerability management and security updates across the product lifecycle.

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

**Last Updated:** 2026-03-14T18:44:00.053Z
