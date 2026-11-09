// Original lesson extensions. Source links provide further reading, not substitutes for current law or licensed standards.
window.ACADEMY_DEEP = {
  "w1d1": {
    "focus": "Security is about protecting useful behavior, not merely hiding data.",
    "concepts": [
      [
        "Confidentiality (C)",
        "Prevent unauthorized disclosure of sensitive information: credentials, pairing secrets, customer data, device identifiers and internal configuration."
      ],
      [
        "Integrity (I)",
        "Prevent or detect unauthorized changes to firmware, access decisions, command messages, counters, logs and configuration."
      ],
      [
        "Availability (A)",
        "Keep the intended service usable within its operational requirements; include radio resilience, backend availability and safe recovery."
      ],
      [
        "Authenticity",
        "Determine whether a message, device or update genuinely originates from the claimed source; authenticity supports integrity but is not a substitute for authorization."
      ],
      [
        "Safety",
        "Consider how a cybersecurity failure can create physical hazards. Safety and security overlap but are not synonymous."
      ]
    ],
    "depth": [
      "A smart lock is an example where integrity often dominates: accepting a forged unlock command creates a direct consequence. Confidentiality also matters because leaked keys enable later attacks. Availability matters if communication or power failure prevents authorized entry. Ranking the three objectives is context-specific, not a fixed ordering for all locks.",
      "Separate three things when talking about risk. A **threat scenario** describes an attacker or event and a path to harm. A **vulnerability** is the weakness that can make the scenario feasible, such as an unauthenticated radio command. **Impact** is the consequence, such as unauthorized entry. A risk decision also considers probability, exposure and the effectiveness of existing controls.",
      "Security controls should protect the actual decision point. Encrypting a radio link may hide commands but does not prove a command is authorized or fresh. A better design authenticates the sender, verifies command permission and rejects replays. A valid message from a stolen key can still be a security problem; revocation and lifecycle processes matter too."
    ],
    "case": "A door sensor reports OPEN to a gateway. An attacker replays an old CLOSED event. The sensor’s battery and radio still work, so availability is not the main issue. The event’s integrity and freshness have been compromised. Ask what receives the message, what it trusts, and which security property the customer expects.",
    "decision": "Write three separate failure scenarios. For each, identify the asset, vulnerable interface, likely consequence and one measurable security control. Then decide which failure deserves attention first and defend your reasoning.",
    "source": "https://csrc.nist.gov/pubs/sp/800/30/r1/final"
  },
  "w1d2": {
    "focus": "A connected product is a system of trust relationships, not just a PCB.",
    "concepts": [
      [
        "Asset",
        "Anything worth protecting, including identities, private keys, update authority, data, user access and operational functions."
      ],
      [
        "Attack surface",
        "Every reachable or accessible entry point: BLE, sub-GHz, USB, debug pins, bootloader, web API, mobile app, cloud and manufacturing tools."
      ],
      [
        "Trust boundary",
        "A place where one component should not automatically trust the identity, claims or privileges of another."
      ],
      [
        "Data-flow diagram (DFD)",
        "A picture of components and how commands, telemetry, secrets and firmware cross boundaries."
      ],
      [
        "Provisioning",
        "The process that establishes trusted identities and credentials during manufacture, commissioning or enrollment."
      ]
    ],
    "depth": [
      "Start with a simple diagram: user → mobile app → cloud/API → gateway → lock. Add other paths: cloud → update service → firmware and factory tool → device provisioning. Label arrows with the actual protocol or message, such as a BLE unlock command or a signed firmware image. The presence of a line between two boxes is not evidence that the connection is secure.",
      "Boundary questions: **Who initiates the interaction?** **What authenticates the endpoint?** **Who authorizes the operation?** **Can the command be replayed?** **Where are credentials stored?** **What is logged, and who can inspect it?** Repeat these for each external interface. A TLS connection authenticates endpoints only if identity checking and credential management are configured correctly.",
      "Do not overlook physical and supply-chain surfaces. UART, SWD/JTAG, recovery boot modes, factory fixtures and diagnostic ports may be inaccessible in normal use but reachable by an attacker with possession. Cloud service and phone security assumptions should be explicit: a compromised mobile account is not solved by secure firmware alone."
    ],
    "case": "An installer commissions a lock by scanning a QR code. If the QR carries a shared default secret, a photographed label could permit unauthorized enrollment. Map when the secret is created, who can read it, how possession is proved and what happens after factory reset.",
    "decision": "Draw five components and at least four labeled arrows. Circle three boundaries. For each boundary, list who is authenticated, what action is authorized and one test to verify enforcement.",
    "source": "https://owasp.org/www-project-internet-of-things/"
  },
  "w1d3": {
    "focus": "Different documents answer different questions: what is mandatory, what is a method, and what is evidence?",
    "concepts": [
      [
        "Regulation",
        "Binding legal rules when scope and application conditions are met; the CRA is an EU regulation."
      ],
      [
        "Directive",
        "EU legal instrument implemented through national law; RED is a directive."
      ],
      [
        "Standard",
        "A published technical or process specification; applying it can support conformity or satisfy contractual requirements."
      ],
      [
        "Harmonised standard",
        "A standard whose reference has been published for specified EU legislation; coverage and any restrictions determine its presumption-of-conformity role."
      ],
      [
        "Method",
        "A technique such as STRIDE for identifying threats; a method does not independently grant regulatory compliance."
      ]
    ],
    "depth": [
      "A single connected device may be affected by several instruments. A radio-enabled consumer device can need RED analysis for radio-related requirements and CRA analysis for digital-product cybersecurity. If it processes personal data, GDPR responsibilities may arise for relevant actors. A product classification worksheet should record intended use, interfaces, target markets, responsible economic operator and dates.",
      "Do not confuse a **security certification** with legal conformity. An IEC process assessment, a product security test and CE marking address different claims. A voluntary standard can be an excellent engineering foundation while still not being the exact legal test for a product. Equally, merely listing a standard on a Declaration of Conformity does not prove every requirement has been implemented.",
      "Evidence is the bridge between requirements and assertions. For each applicable obligation, point to the adopted design, implementation, verification result, issue disposition and approving role. Record unresolved interpretation questions, the person who made the decision and the source revision used."
    ],
    "case": "A supplier says, “Our radio module is CE marked, so the finished smart bridge automatically meets every rule.” That conclusion is unsafe. The integration, final product functions and other applicable legislation still require evaluation.",
    "decision": "Build a five-row matrix for CRA, RED, IEC 62443-4-1, SDLC and STRIDE: category, purpose, who uses it, what evidence it can produce and what it does not prove.",
    "source": "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act"
  },
  "w1d4": {
    "focus": "Security management succeeds when tasks have competent owners and clear decision rights.",
    "concepts": [
      [
        "Responsible",
        "The person or team doing the work."
      ],
      [
        "Accountable",
        "The owner of the result or decision; for a given activity, avoid competing final decision-makers."
      ],
      [
        "Consulted",
        "Specialists whose input is needed before the decision."
      ],
      [
        "Informed",
        "People who must receive the result."
      ],
      [
        "Competence evidence",
        "A role-to-skill mapping supported by training, assessment, project demonstrations and follow-up actions."
      ]
    ],
    "depth": [
      "For each security activity distinguish **doing** from **approving**. Engineers may perform threat modeling and implement crypto; a Security Manager can ensure the methodology is appropriate, results are reviewed, owners assigned and evidence retained. The Product Owner may prioritize work, but prioritization alone is not formal acceptance of security residual risk.",
      "Create a compact responsibility matrix covering security requirement ownership, threat-model reviews, secure provisioning, update signing, static analysis, security testing, vulnerability triage, incident reporting and release authorization. Then identify exceptions: absence, supplier-owned modules, outsourced test laboratories and cross-site decisions.",
      "The IEC 62443-4-1 SM competence expectation is not “everyone watched a slideshow.” It is an organizational process to identify needed expertise for assigned roles, provide training or assessments and demonstrate adequacy. For an embedded developer, acceptable evidence might include a code-review exercise; for a Security Manager, a scored compliance scope and risk-triage scenario is more relevant."
    ],
    "case": "A vulnerability report arrives on Friday afternoon. The software lead thinks QA owns it; QA thinks the product owner owns it. The response clock keeps running. A RACI and named backup contact should prevent this gap.",
    "decision": "Assign R, A, C and I for vulnerability triage, signing-key rotation and final release approval. State which role has authority to accept a residual risk and what documentation proves that decision.",
    "source": "https://webstore.iec.ch/en/publication/33615"
  },
  "w1d5": {
    "focus": "Consolidate the foundations by telling one coherent product-security story.",
    "concepts": [
      [
        "Identify",
        "What product function, data, identity and trust relationship matter?"
      ],
      [
        "Analyze",
        "How could an attacker reach the asset, and what would happen?"
      ],
      [
        "Control",
        "What preventive or detective mechanism reduces the risk?"
      ],
      [
        "Verify",
        "How will a tester show the mechanism works?"
      ],
      [
        "Own",
        "Who must make and record the decision?"
      ]
    ],
    "depth": [
      "A useful project kickoff security overview fits on one page but requires careful thought. Begin with product scope: battery-powered door sensor, local wireless communication, gateway and cloud. State one critical function and the identities or data that protect it. Draw the communication chain, mark where trust changes and name who is responsible for each major decision.",
      "Then prioritize only a handful of plausible scenarios. Radio spoofing, key extraction through debug, incorrect onboarding, replay of sensor messages and malicious firmware are common candidates. Avoid listing every conceivable attack without an argument about feasibility, impact and existing controls. A small justified risk list is more useful than a huge unowned spreadsheet.",
      "Finally connect every selected risk to an actionable requirement and evidence: “Gateway rejects messages lacking an authenticated device identity and freshness value,” verified by message modification and replay tests. The manager’s role is to notice the missing arrow from requirement to test and to ensure someone closes it."
    ],
    "case": "A team presents “TLS and encryption enabled” as its security plan. Ask which interfaces use TLS, what happens on a local radio, whether keys are provisioned uniquely, which commands are authorized and how the claims were tested.",
    "decision": "Prepare a six-to-ten-line security kickoff summary: product and assets; interfaces; top threats; key controls; required proof; responsibility and outstanding questions.",
    "source": "https://owasp.org/www-project-internet-of-things/"
  },
  "w2d1": {
    "focus": "RED addresses radio equipment as a complete marketable product, not just the radio chip.",
    "concepts": [
      [
        "Scope",
        "Radio Equipment Directive 2014/53/EU concerns equipment intentionally transmitting or receiving radio waves for communication or radiodetermination."
      ],
      [
        "Article 3(1)",
        "Essential requirements concerning health/safety and electromagnetic compatibility."
      ],
      [
        "Article 3(2)",
        "Effective and efficient use of radio spectrum to avoid harmful interference."
      ],
      [
        "Article 3(3)",
        "Additional essential requirements activated for specified categories by delegated acts, including particular cybersecurity requirements during their applicable period."
      ],
      [
        "Conformity route",
        "The applicable standards, conformity assessment module and technical documentation determine what evidence is needed."
      ]
    ],
    "depth": [
      "For a BLE or sub-GHz smart lock, collect a radio inventory first: frequency bands, power, antenna configurations, coexistence, intended markets and module integration details. Component reports are valuable inputs, but mechanical changes, antennas, host behavior or final firmware can affect the end-product result.",
      "RED cybersecurity requirements introduced by Delegated Regulation (EU) 2022/30 became applicable in August 2025. A later EU measure, 2026/339, repeals that delegated regulation effective 11 December 2027 as the CRA becomes broadly applicable. This does not repeal the RED itself or eliminate safety, EMC and spectrum obligations. Keep a dated applicability matrix.",
      "Security management tasks include clarifying which compliance path was selected, who owns testing and notified-body questions, and where test evidence is stored. Compliance work is a lifecycle activity: design and manufacturing changes can invalidate assumptions used in earlier tests."
    ],
    "case": "The manufacturer swaps an approved antenna for a cheaper alternative late in the project. The radio module firmware is unchanged. Explain why end-product regulatory evidence should be reviewed before release.",
    "decision": "Write a RED applicability and evidence checklist for a smart lock with BLE and 868 MHz radio. Separate radio/safety/EMC from cybersecurity transition requirements.",
    "source": "https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en"
  },
  "w2d2": {
    "focus": "The CRA combines product design obligations with vulnerability response during the supported lifetime.",
    "concepts": [
      [
        "Product with digital elements",
        "Hardware or software in scope, assessed with its intended use and associated remote data processing where relevant."
      ],
      [
        "Secure by design",
        "Address cybersecurity risks from conception through implementation rather than adding controls only before release."
      ],
      [
        "Vulnerability handling",
        "Receive, assess, remediate and communicate security weaknesses throughout the support period."
      ],
      [
        "Article 14 reporting",
        "Report qualifying actively exploited vulnerabilities and severe incidents according to the legislation’s specific triggers and deadlines."
      ],
      [
        "Conformity assessment",
        "Demonstrate requirements through the appropriate route and maintain technical documentation."
      ]
    ],
    "depth": [
      "The CRA applies its main obligations from 11 December 2027. Reporting under Article 14 already applies from 11 September 2026. For a reportable actively exploited vulnerability or severe incident, an early warning is generally due within 24 hours of awareness and a more complete notification within 72 hours; further final-report requirements differ by event type. Not every CVE or bug is automatically reportable. The trigger analysis and documentation are important.",
      "Security Manager questions begin before engineering implementation: Is this a product with digital elements? Who is its legal manufacturer? Are remote services essential to the product? What is its support period? What updates can reach deployed devices? Who monitors the vulnerability reporting channel? What evidence supports risk-based security requirements?",
      "The CRA is not a demand that every device use identical controls. It uses essential requirements and a risk-based approach. A battery-powered sensor may not require a full cloud agent, but weak authentication, permanent default credentials or unsigned update acceptance may be difficult to defend. A decision should refer to risk, architecture and applicable requirement rather than copying a generic checklist."
    ],
    "case": "A security researcher provides proof that a deployed smart bridge accepts unsigned firmware. Investigate exposure, exploitation evidence, user impact, mitigation, reporting triggers, ownership and communication. A patch plan is not the entire response process.",
    "decision": "Write a mini CRA work plan for a connected sensor: scope, design evidence, vulnerability reporting channel, update/support obligations and who decides whether Article 14 is triggered.",
    "source": "https://digital-strategy.ec.europa.eu/en/policies/cra-reporting"
  },
  "w2d3": {
    "focus": "Standards help translate broad expectations into structured engineering practice.",
    "concepts": [
      [
        "ETSI EN 303 645",
        "A baseline of consumer-IoT cybersecurity provisions, including credentials, updates, vulnerability disclosure, data protection and resilience."
      ],
      [
        "EN 18031",
        "European standards addressing selected cybersecurity-related essential requirements for radio equipment under RED; applicability and harmonisation conditions matter."
      ],
      [
        "IEC 62443-4-1",
        "A secure product development lifecycle process standard originally framed for industrial automation and control products."
      ],
      [
        "IEC 62443-4-2",
        "Technical security requirements for components in the IEC 62443 family; it is not the same as 4-1 process assessment."
      ],
      [
        "NIST and OWASP",
        "Useful methods and guidance for risk evaluation, threat modeling and application or IoT attack surfaces."
      ]
    ],
    "depth": [
      "A smart lock might use ETSI EN 303 645 to identify sensible consumer-device controls and IEC 62443-4-1 to improve organizational development processes. These standards solve different problems. EN 18031 may be relevant when assessing applicable RED cybersecurity provisions, but check the specific part, scope and publication restrictions rather than assuming “EN” always means a blanket presumption of conformity.",
      "Standards contain both normative material and explanatory material. An internal checklist should identify the exact controlled document edition, which sections apply, exclusions and test evidence. Avoid inventing a direct mapping from an abbreviated clause name. When exact clause interpretation matters, consult an authorized copy of the standard and maintain a traceability record.",
      "Supplier certificates require careful reading. Is the certificate for a development process, a particular product, a chip, a library or a test laboratory? Does it cover the firmware version being shipped? A standard reference in marketing material alone is not evidence of a finished product’s security."
    ],
    "case": "A vendor claims its Wi-Fi chip is “IEC 62443 certified,” while the integrated product has a weak commissioning process. What does the vendor claim prove, what must be verified and what information should you request?",
    "decision": "Create a two-column comparison of EN 303 645, EN 18031 and IEC 62443-4-1: purpose, intended scope, implementation/evidence examples and limits of the claim.",
    "source": "https://www.etsi.org/technologies/consumer-iot-security"
  },
  "w2d4": {
    "focus": "Conformity is an evidence argument, not a stamp placed on a product at the end.",
    "concepts": [
      [
        "Applicability",
        "Identify laws and essential requirements based on product, use, market and date."
      ],
      [
        "Requirements matrix",
        "Track each applicable requirement to a planned control, evidence item and owner."
      ],
      [
        "Verification",
        "Collect objective evidence: test reports, design records, configuration controls and evaluated defects."
      ],
      [
        "Technical documentation",
        "Retain an organized file supporting conformity claims, including required product details and test outcomes."
      ],
      [
        "EU Declaration of Conformity",
        "A manufacturer’s legal declaration, following the applicable regulatory rules and assessment procedure."
      ]
    ],
    "depth": [
      "Begin with a decision log rather than a document dump. A reviewer should be able to trace why a given act applies, which route was chosen, why particular harmonised standards were used and where coverage gaps were handled by other assessment methods. An expensive penetration test does not replace a missing requirement matrix.",
      "Distinguish **design evidence** (architecture and threat model), **implementation evidence** (configuration, source reviews, key-handling procedures), **verification evidence** (reproducible test results) and **lifecycle evidence** (update and vulnerability procedures). Each answers a different question and can change across product revisions.",
      "A security manager should plan evidence collection early. If testing requires special manufacturing keys or debug access, arrange it before the production configuration is locked. If there are open security deviations, record severity, corrective owner, due date and the authority responsible for release acceptance."
    ],
    "case": "A product passes functional testing and has a CE label, but nobody can locate the signed security test report or the rationale for excluding a requirement. Explain what the missing evidence means and how to correct the process.",
    "decision": "Design a one-page conformity evidence index: regulation, applicable requirement, evidence reference, test outcome, document revision and accountable approver.",
    "source": "https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en"
  },
  "w2d5": {
    "focus": "Practice making a defensible applicability decision for one real product configuration.",
    "concepts": [
      [
        "Product definition",
        "Record radio interfaces, firmware functions, remote services, intended users and target markets."
      ],
      [
        "Scope decision",
        "Assess each legal framework separately; do not assume one regulation displaces every other obligation."
      ],
      [
        "Dated transition",
        "Record the date on which obligations begin to apply and which product revisions are affected."
      ],
      [
        "Evidence plan",
        "Name standards or technical methods and the tests that will support each requirement."
      ],
      [
        "Open issue",
        "Document uncertainties and a decision owner rather than hiding them in assumptions."
      ]
    ],
    "depth": [
      "Consider two variants of a smart door sensor: a purely local BLE model and a cloud-connected version through a gateway. Both may be radio equipment. The remote functions and economic operator relationships may change the CRA scope and cybersecurity risk assessment. The correct answer depends on a precise product definition and current legal text, not simply on whether a cloud logo appears on the packaging.",
      "Build the decision in four passes. First inventory physical interfaces and software dependencies. Second evaluate laws and timing. Third identify a realistic set of security objectives, standards, tests and evidence. Fourth ask what happens after release: support, component vulnerabilities, software changes and customer communication.",
      "The output should be reviewable by someone else. Include citations to the official regulation, the document revision or retrieval date and unresolved interpretations. Calling an uncertain product “compliant” is not a decision; it is an unsupported claim."
    ],
    "case": "The product manager asks if a small BLE-only sensor can skip security requirements because it has no internet connection. Explain what you would investigate before answering.",
    "decision": "Write an applicability memo for a local wireless door sensor offered in the EU in late 2026, with explicit assumptions and a list of missing facts.",
    "source": "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act"
  },
  "w3d1": {
    "focus": "IEC 62443-4-1 describes how a product-development organization manages security systematically.",
    "concepts": [
      [
        "SM — Security Management",
        "Roles, policies, competence, planning and the management system around security activities."
      ],
      [
        "SR — Security Requirements",
        "Discover, document, review and trace security requirements."
      ],
      [
        "SD — Secure by Design",
        "Address risks in architecture and interfaces before code is complete."
      ],
      [
        "SI — Secure Implementation",
        "Use appropriate secure implementation and coding practices."
      ],
      [
        "SVV — Security Verification and Validation",
        "Demonstrate security requirements and behaviors through planned evaluation."
      ],
      [
        "DM — Defect Management",
        "Receive, assess and address security-related defects."
      ],
      [
        "SUM — Security Update Management",
        "Plan, distribute and maintain appropriate security corrections."
      ],
      [
        "SG — Security Guidelines",
        "Provide appropriate secure installation, configuration, operation and maintenance guidance."
      ]
    ],
    "depth": [
      "These eight practices form a connected process. SM establishes ownership and competence. SR and SD establish what must be protected and why. SI implements the defenses. SVV tests them. DM and SUM keep released products protected as new information emerges. SG helps operators use the product as intended. Treating each practice as a disconnected document collection misses their purpose.",
      "The standard is explicitly a **development process** standard; it is not a magic certificate proving that every shipped device resists all attacks. It addresses developers and maintainers, and its industrial-automation origin matters when deciding how to apply it to a consumer smart lock or sensor. It can be used as a strong process framework even outside its original application domain.",
      "A Security Manager should map each practice to one owner, a process description, an evidence output and periodic review. The most important audit question is often: “Show how this vulnerability was discovered, evaluated, fixed, verified, shipped and communicated.” That single trace may touch six of the eight practices."
    ],
    "case": "An assessor asks how firmware security bugs discovered after release reach the person who authorizes an update. Trace the answer through SM, DM, SUM, SVV and SG.",
    "decision": "Explain the eight practices in your own words, then trace a discovered update-signing flaw through at least four practices.",
    "source": "https://webstore.iec.ch/en/publication/33615"
  },
  "w3d2": {
    "focus": "The SM security-expertise requirement demands demonstrated role-appropriate capability.",
    "concepts": [
      [
        "Role definition",
        "Specify which security duties belong to a given role and who supervises or accepts their results."
      ],
      [
        "Skill profile",
        "State needed knowledge and practical performance for those duties."
      ],
      [
        "Training",
        "Provide a targeted learning path rather than the same generic course for every employee."
      ],
      [
        "Assessment",
        "Test understanding and ability to perform the duty."
      ],
      [
        "Evidence and remediation",
        "Store results, dates and identified gaps; schedule re-assessment after change or failure."
      ]
    ],
    "depth": [
      "For a Security Manager, a useful competence matrix has rows such as regulatory scope, risk methodology, secure SDLC, update lifecycle, vulnerability response, supplier assurance and evidence review. Columns show required depth, current demonstrated level, evidence, assessor, assessment date and improvement action. A quiz can show recognition; a realistic exercise is stronger evidence of applied ability.",
      "Different job roles require different capability. A firmware engineer may need to implement nonce handling and securely store keys. A tester must know how to attempt replay and corrupted-update tests. A coordinator may need to ensure the work has an owner, acceptance criteria and documentation. Do not confuse a role’s supervisory responsibility with needing to write every cryptographic primitive.",
      "Assessment should be auditable but proportionate. Use a scoring rubric, retain the completed scenario and any reviewer comments. Revisit competencies when product architecture or regulations change. A small team can maintain this without buying an enterprise learning management system, provided ownership, versioning and records are clear."
    ],
    "case": "Your organization assigns a developer responsibility for secure firmware updates but has only recorded attendance at a security webinar. What specific practical assessment would you request?",
    "decision": "Create a five-row role-skill matrix for Security Manager, firmware developer and tester. Give each role one demonstration-based assessment and an acceptable evidence record.",
    "source": "https://webstore.iec.ch/en/publication/33615"
  },
  "w3d3": {
    "focus": "Good security requirements are testable statements that link threats to design.",
    "concepts": [
      [
        "Asset or threat",
        "The reason a requirement exists."
      ],
      [
        "Security requirement",
        "A measurable behavior the product must meet."
      ],
      [
        "Control",
        "A design or implementation mechanism that enforces the requirement."
      ],
      [
        "Traceability",
        "A link from cause → requirement → implementation → test → result."
      ],
      [
        "Acceptance criteria",
        "Observable criteria that determine whether a security control passed."
      ]
    ],
    "depth": [
      "“The radio shall be secure” is not useful as a requirement. A better statement is: “The gateway shall reject unlock commands that lack a valid authenticated origin and freshness check.” That requirement is still incomplete until message format, threat assumptions and pass/fail behavior are specified. Write requirements at the right abstraction level, then refine them with engineering.",
      "Architecture choices must match the threat. Encryption can protect confidentiality, but a message authentication mechanism addresses integrity and authenticity; freshness counters or nonces are needed to address replays. Key management, provisioning, revocation and failure behavior are part of the design. Rejecting forged messages is only helpful if the product cannot be placed in a permissive fallback mode after reset.",
      "The management responsibility is to verify that important assets and threat scenarios have corresponding requirements, not to dictate every algorithm. When a requirement changes, ask whether design documents, tests, supplier specifications, user guidance and risk decisions need updating."
    ],
    "case": "The product has a requirement “Communication must use AES-256.” It does not say who is authenticated, how keys are derived or what a compromised key can access. Find missing security intent before accepting it.",
    "decision": "Write one testable requirement for blocking forged commands. Add the threat ID, proposed control, negative test and evidence identifier.",
    "source": "https://owasp.org/www-project-internet-of-things/"
  },
  "w3d4": {
    "focus": "Security verification must demonstrate the product rejects harmful behavior, not merely that normal functions work.",
    "concepts": [
      [
        "Secure coding",
        "Language, dependency, memory-safety and API practices chosen to reduce known classes of defects."
      ],
      [
        "Code review",
        "Human inspection of security-sensitive assumptions and implementation."
      ],
      [
        "Static analysis",
        "Automated examination of source or binaries for potential defects."
      ],
      [
        "Negative testing",
        "Attempting invalid inputs, signatures, states, permissions and replays."
      ],
      [
        "Validation",
        "Confirming that security controls and resulting system behavior are suitable for the intended use."
      ]
    ],
    "depth": [
      "Begin testing from requirements and threats. A feature test may prove the lock opens when requested; a security test tries commands from an unpaired device, replayed messages, changed counters or a stale user credential. A signed-update test should include both positive and negative cases: authentic update accepted, modified signature rejected, wrong product target rejected and interrupted update safely recovered.",
      "Different test techniques find different problems. Static analysis catches many coding defects but cannot prove an authorization model is correct. Penetration testing probes plausible attack paths but cannot exhaustively establish absence of vulnerabilities. A build pipeline can enforce repeatable scanning and test execution; critical design assumptions still need human review.",
      "A useful finding report captures reproducible steps, affected build, actual versus expected outcome, security consequence, severity rationale, owner, fix version and retest result. The manager ensures release decisions account for open findings and that evidence remains tied to the exact firmware and hardware revision."
    ],
    "case": "A tester demonstrates that a corrupted signed firmware image is rejected. Does that alone prove the entire update process is secure? Identify missing test categories.",
    "decision": "Create a six-test security verification plan for a lock with signed updates and authenticated radio commands. Include at least three negative tests.",
    "source": "https://owasp.org/www-project-internet-of-things/"
  },
  "w3d5": {
    "focus": "Security continues after shipment: receiving defects, issuing updates and communicating safe use.",
    "concepts": [
      [
        "Disclosure channel",
        "A documented route for researchers and customers to report suspected vulnerabilities."
      ],
      [
        "Triage",
        "Determine affected products, exploitability, impact, urgency and ownership."
      ],
      [
        "Remediation",
        "Implement and verify a fix or mitigation appropriate to the risk."
      ],
      [
        "Secure update",
        "Ensure update origin/integrity and safe installation and recovery."
      ],
      [
        "Security guidance",
        "Document secure configuration, limitations and operational response steps."
      ]
    ],
    "depth": [
      "The lifecycle starts before release. A manufacturer should decide who owns the security mailbox, how reports are acknowledged, how supplier advisories are monitored and who can trigger incident response. Having firmware OTA capability is not equivalent to having an update management process: customer rollout, version applicability, rollback resistance and communication also matter.",
      "Define a closed loop from report to mitigation. Capture the initial issue, affected versions, risk assessment, fix work item, verification, release decision, field rollout and customer advice. For products under applicable reporting obligations, document the legal trigger evaluation separately from engineering severity, because they are not the same decision.",
      "User guidance matters because security depends on configuration. If pairing mode must be physical-button initiated or a gateway must be installed behind a trusted network boundary, users should understand that. Design should not depend on unrealistic end-user expertise, especially for consumer devices."
    ],
    "case": "A vulnerability affects one old sensor firmware release in a fleet of 50,000 devices. Some are offline for months. Outline staged remediation, monitoring and how to deal with devices that never reconnect.",
    "decision": "Draft a vulnerability-to-update workflow identifying six steps, an owner per step, decision evidence and customer communication.",
    "source": "https://digital-strategy.ec.europa.eu/en/policies/cra-reporting"
  },
  "w4d1": {
    "focus": "Integrate security from conception through retirement, rather than running a one-time security review.",
    "concepts": [
      [
        "Concept and planning",
        "Record assets, intended users, regulatory scope, security objectives and resource ownership."
      ],
      [
        "Requirements and design",
        "Threat modeling, security requirements, design review and architecture decisions."
      ],
      [
        "Implementation",
        "Secure coding, dependencies, key handling, review and build integrity."
      ],
      [
        "Verification and release",
        "Security test results, vulnerability dispositions, residual-risk approval and release records."
      ],
      [
        "Maintenance and retirement",
        "Vulnerability intake, support, security updates, end-of-support guidance and records."
      ]
    ],
    "depth": [
      "A secure SDLC is not a separate waterfall that blocks agile teams. It adds security-specific inputs, definitions of done, trace links and release criteria to the team’s existing workflow. A threat may be discovered in sprint 4; the requirements and tests should evolve rather than leaving security frozen after an initial design document.",
      "A useful implementation for a small organization has a few required artifacts, not fifty templates. Consider a security scope and asset list, risk/threat register, security requirements with tests, supplier dependency inventory, security verification report, issue log, release acceptance and post-release response plan. Every artifact needs an owner, review status and revision.",
      "Security Managers should focus on material decisions: Does the project know what it protects? Are requirements testable? Are test failures dispositioned? Is the update and support lifecycle viable? Have assumptions changed? Use evidence from normal development tools where possible instead of asking engineers to copy the same facts into multiple systems."
    ],
    "case": "A team completes threat modeling once at project kickoff, then adds a cloud API six months later. The original risks were never reviewed. State which lifecycle checkpoints should reopen.",
    "decision": "Map a secure SDLC onto a five-stage embedded project and define one objective output and one approval or review per stage.",
    "source": "https://webstore.iec.ch/en/publication/33615"
  },
  "w4d2": {
    "focus": "Security gates are evidence-based decisions, not merely dates on a project plan.",
    "concepts": [
      [
        "Entrance criteria",
        "Security work or information needed before entering a phase."
      ],
      [
        "Exit criteria",
        "Conditions that must be demonstrably fulfilled before progressing."
      ],
      [
        "Exception",
        "A documented deviation with owner, deadline and impact."
      ],
      [
        "Risk acceptance",
        "An authorized decision to accept a residual risk, supported by a rationale."
      ],
      [
        "Gate evidence",
        "Links to current requirements, reviews, tests and actions at the correct product revision."
      ]
    ],
    "depth": [
      "An illustrative P1–P5 mapping can be: P1 scope and product concept; P2 threats and requirements; P3 implementation with security reviews; P4 verification and defect resolution; P5 release decision and lifecycle handover. This is a proposed mapping only: adapt labels and approval authority to your real project charter and stage-gate definitions.",
      "Avoid gates that say “security reviewed” with no measurable criterion. Prefer “all critical security requirements traced to verification plans,” “no unresolved critical defects without formal disposition,” and “secure update procedure tested on production-equivalent hardware.” Decide what counts as critical and who has permission to approve exceptions before the project is under deadline pressure.",
      "For agile work, a gate does not have to wait until all work stops. Evidence can accumulate from sprint deliverables. A security manager can use a compact status table: requirement/owner/status/evidence/gap/decision. Make sure the recorded decision reflects actual software and hardware revisions."
    ],
    "case": "At P4, the team has passing normal-operation tests, but the secure update failure-recovery test has not been executed. The schedule says ship Friday. Explain whether this gate is ready.",
    "decision": "Write P1–P5 gate exit criteria, one required security evidence artifact per phase and an explicit deviation-approval route.",
    "source": "https://webstore.iec.ch/en/publication/33615"
  },
  "w4d3": {
    "focus": "Traceability helps you show why a control exists and whether it actually works.",
    "concepts": [
      [
        "Threat ID",
        "A stable identifier for an attack scenario or risk."
      ],
      [
        "Requirement ID",
        "A stable identifier for required security behavior."
      ],
      [
        "Design reference",
        "A link to the mechanism and interfaces implementing the requirement."
      ],
      [
        "Test ID",
        "A reproducible test including setup, expected and actual outcome."
      ],
      [
        "Evidence version",
        "Hardware/firmware revision and date against which the test result is valid."
      ]
    ],
    "depth": [
      "Follow a realistic chain: TR-RADIO-01 identifies spoofed unlock commands. SEC-REQ-014 says unauthorized radio unlock requests must be rejected. ARCH-RF-03 describes authentication and freshness checks. TEST-SEC-021 attempts message tampering and replay. REPORT-SEC-021 records the result on firmware build 0.31.4 and the precise hardware board variant.",
      "Traceability works in both directions. Forward direction shows a threat has been treated and tested. Backward direction shows that each security test serves a requirement and each implemented security mechanism has a reason for existing. An unlinked requirement can be forgotten; an unlinked test may be irrelevant or suggest undocumented behavior.",
      "Trace data should be maintainable. Stable IDs and simple hyperlinks in Jira, Wrike or a spreadsheet are adequate for a small team. The manager checks gaps and change impact: if the radio transport changes, which threats, controls and test cases need to be reassessed?"
    ],
    "case": "An engineer says a test named “communication security” passed. The report provides no version, steps or link to a requirement. Identify what is required to make this valid compliance evidence.",
    "decision": "Build a five-column trace record for one spoofing threat, showing threat, testable requirement, implementation, negative test and release evidence.",
    "source": "https://csrc.nist.gov/pubs/sp/800/30/r1/final"
  },
  "w4d4": {
    "focus": "Release security is a documented decision under uncertainty, not a claim that no risks remain.",
    "concepts": [
      [
        "Inherent risk",
        "Exposure considered before the selected mitigating controls."
      ],
      [
        "Residual risk",
        "Risk remaining after controls are applied, taking their actual effectiveness into account."
      ],
      [
        "Risk treatment",
        "Mitigate, avoid, transfer where meaningful, or accept risk using defined governance."
      ],
      [
        "Evidence quality",
        "Confidence derived from reproducible verification and current design information."
      ],
      [
        "Acceptance authority",
        "The role empowered to accept an identified risk on behalf of the organization."
      ]
    ],
    "depth": [
      "A security manager should challenge both overreaction and complacency. A theoretical JTAG issue in a device with permanently disabled production debug may be low priority after verification. A practical remote unlock bypass affecting all devices may demand immediate action. Severity is influenced by capability, reachability, exploit prerequisites, business consequence and affected population.",
      "A risk register needs to preserve the scenario, affected asset, assumptions, existing controls, planned actions, residual consequence, status and decision owner. Avoid false precision from multiplying arbitrary 1–5 scores without agreed definitions. A qualitative matrix with explicit rationale is often more defensible for a small project.",
      "For a release decision, collect open security findings and group them by required action: block shipment, fix before general rollout, accept with documented rationale or monitor after release. A risk acceptance is not the same as hiding a vulnerability or declaring the control unnecessary. Regulatory requirements still apply even if a manager would like to accept the business risk."
    ],
    "case": "A debug port may expose device keys if a technician opens the enclosure. The team says physical attacks are out of scope, but the product is installed in public hallways. Challenge the assumption and propose verification.",
    "decision": "Write a release recommendation for a product with an open debug-access finding: risk scenario, affected users, mitigation, verification and authority to approve or block.",
    "source": "https://csrc.nist.gov/pubs/sp/800/30/r1/final"
  },
  "w4d5": {
    "focus": "The final challenge is to combine scope, risk, controls, evidence and accountable decisions.",
    "concepts": [
      [
        "Scope",
        "Describe product, interfaces, lifecycle and potentially applicable obligations."
      ],
      [
        "Risks",
        "Choose the few plausible attack scenarios most important to the product."
      ],
      [
        "Controls",
        "Define requirements for identities, commands, updates, keys and recovery."
      ],
      [
        "Evidence",
        "Request traceable tests, design reviews and operational procedures."
      ],
      [
        "Decision",
        "State whether the project can proceed, conditions for progress and the owners of gaps."
      ]
    ],
    "depth": [
      "Imagine a battery-powered smart lock with BLE commissioning, sub-GHz operational control, a gateway, an optional cloud app and field firmware updates. The project is late. Engineering has a firmware signing prototype but no field recovery test. The manufacturer has no published vulnerability reporting address. A supplier claims its radio module covers all of the product’s regulatory obligations.",
      "A defensible review separates facts from assumptions. Mark which obligations are applicable by date and market; identify security-critical functions and trust boundaries; evaluate replay, cloning, update spoofing, key extraction and unauthorized cloud commands. Prioritize risks with a clear reason and map the top risks to verifiable requirements.",
      "Finish as a Security Manager would: request evidence, log gaps, assign owners and decide which gaps block release. Write a short management summary without drowning it in algorithms. Then prepare to explain a key decision to an engineer and to a nontechnical project sponsor. The best answer makes assumptions visible, not magically certain."
    ],
    "case": "The product owner asks, “Can we ship with the security items as post-launch follow-ups?” You need to distinguish essential obligations, security-critical blockers and acceptable residual risks.",
    "decision": "Produce a one-page security review: applicability, three prioritized threats, three control requirements, expected evidence, outstanding gaps, owners and release recommendation.",
    "source": "https://webstore.iec.ch/en/publication/33615"
  }
};
