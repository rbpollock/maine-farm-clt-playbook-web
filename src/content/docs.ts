import { PlaybookDoc } from './types';

export const PHASES = [
  { id: 'phase-1', title: '1. Exploration & Feasibility', duration: '4–8 weeks', question: 'Should we do this?', color: '#2dd4bf' },
  { id: 'phase-2', title: '2. Structure & Formation', duration: '8–12+ weeks', question: 'How will we be organized?', color: '#38bdf8' },
  { id: 'phase-3', title: '3. Financing & Due Diligence', duration: '12–20+ weeks', question: 'Can we afford this?', color: '#818cf8' },
  { id: 'phase-4', title: '4. Closing & Transition', duration: '4–8 weeks', question: 'Are we ready to close?', color: '#c084fc' },
  { id: 'phase-5', title: '5. Stabilization & Growth', duration: 'Ongoing', question: 'Are we thriving?', color: '#f472b6' },
];

export const DOCS: PlaybookDoc[] = [
  {
    id: '01-overview-and-principles',
    label: '01 Overview & Principles',
    content: `# 01 — Overview & Principles

## The model in one paragraph

A community land trust (CLT) or mission-aligned nonprofit purchases and permanently holds the farm's land. A multi-stakeholder cooperative leases the land and operates the farm, cafe, apothecary, events, housing, and related improvements under a long-term ground lease. This keeps land affordable and community-governed forever, while giving operators secure tenure and democratic control over their work.

## Why this model for a Maine farm

Maine has one of the oldest farming traditions in the United States and one of the oldest average farmer populations. Land speculation, developer pressure, and the simple math of retirement-age owners without succession plans put extraordinary pressure on working farms.

The CLT + cooperative model:
- **Removes land from the speculative market** permanently
- **Preserves affordability** for future operators
- **Builds democratic governance** into daily operations
- **Keeps economic value circulating locally** through patronage rather than extraction
- **Maintains community access** to food, gathering spaces, and cultural programming
- **Aligns with Maine's cooperative tradition** — Papermakers Union, Lobster Co-op, Farmington's EV Charging Co-op, and others

## Why CLTs matter in a multicrisis

We are not facing one crisis. We face a polycrisis — climate destabilization, deepening inequality, housing insecurity, racial injustice, democratic erosion, and volatile food systems — that reinforces itself. Each shock widens the cracks the next shock travels through. Community land trusts are not a panacea, but they are a proven intervention that addresses several fault lines at once.

### Land speculation is an inequality engine
When land is treated as a financial asset, its price is decoupled from its social or productive value. The more unequal a society becomes, the more capital seeks land as a store of value, the more expensive land becomes, and the harder it is for farmers, workers, and communities to access it. This is true in Portland, in rural Maine, and in global cities. A CLT permanently removes land from that cycle.

### Climate resilience requires long-term stewardship
A 99-year ground lease forces the question: what will this land look like in 2125? The CLT model rewards soil health, biodiversity, and carbon sequestration because the community holding the land has no incentive to extract maximum short-term value and sell. The cooperative operating the land has secure tenure, which means it can invest in perennial crops, water systems, and building efficiency without fear of a landlord selling out from under it.

### Housing and food security are land questions
You cannot solve housing affordability by treating symptoms. If the land underneath affordable housing is owned speculatively, the affordability expires when the subsidy does. CLTs preserve affordability in perpetuity. The same logic applies to farms: when farmland is converted to estate housing or industrial agriculture, the local food infrastructure is destroyed. The CLT keeps both housing and food production possible.

### Local ownership distributes wealth
In a conventional sale, a farm's economic value is extracted by the seller and any outside investors. Under a CLT + cooperative model, surplus from operations circulates to worker-owners and the local community through patronage, wages, and reinvestment. The wealth stays in the county rather than flowing to distant shareholders.

### Democratic practice at a small scale
At a time when many people feel powerless over the institutions that shape their lives, cooperatives and CLTs offer direct, accountable governance. One member, one vote is not abstract — it is practiced in board meetings, annual assemblies, and budget votes. This builds the civic muscle that larger democratic systems depend on.

### Reckoning with land theft
The community land trust movement has deep roots in the civil rights struggle. New Communities Inc. (Georgia, 1969) was the first CLT in the United States, founded by Black farmers as a response to systemic land dispossession. The CLT model can be — and in many places is being — used to return land to indigenous and Black communities, not as charity but as structural repair. In Maine, where Wabanaki peoples stewarded these lands for millennia before European colonization, this principle must be operational: any CLT claiming to steward land should consider how its structure can support, rather than appropriate, indigenous land relationships.

### When systems fail, communities that own their land endure
The COVID-19 pandemic, supply chain disruptions, and extreme weather events have shown that centralized systems are brittle. Communities with local food production, mutual aid networks, and control over their physical spaces fared better. A farm held in community trust can pivot to emergency food distribution, host displaced neighbors, or adapt its business model because the decision-makers live nearby and the land cannot be sold out from under them.

A CLT does not solve the multicrisis. But it removes one piece of land from its logic, one farm at a time. That is a real and cumulative good.

## Core principles

### 1. Land is a commons, not a commodity
The CLT holds land in trust for the community. The ground lease caps resale value, restricts speculative transfer, and ensures the land serves agricultural and community purposes in perpetuity.

### 2. Operators have secure tenure + democratic voice
The cooperative is not a tenant-at-will. It holds a long-term ground lease (typically 99 years, renewable) and governs operations democratically — one member, one vote, or another agreed democratic formula.

### 3. Stewardship over extraction
Financial returns are limited. Member shares are limited-equity. Surplus, when it exists, is distributed as patronage or reinvested. The goal is durable stewardship, not wealth accumulation.

### 4. Community benefit is the bottom line
The farm serves the community through food access, jobs, cultural programming, ecological practices, and gathering space. These benefits are documented and protected in the CLT's ground lease and the cooperative's articles.

### 5. Consent and co-creation with indigenous communities
Where the farm's stewardship practices draw on or affect Wabanaki lands, waters, or knowledge, engagement must be co-created with consent — not extracted, appropriated, or performative. This principle is operational, not decorative.

### 6. Transparency builds trust
Decisions, finances, and risks are communicated plainly. The FAQ is honest about what is unknown. The capital stack uses conservative assumptions. The timeline acknowledges uncertainty.

### 7. Start small, learn, adapt
This is not a blueprint to execute perfectly. It is a scaffold to climb. Each phase produces a clear go/no-go decision point. Walking away cleanly is better than closing on bad terms.

## The capital stack at a glance

| Source | Typical % | Character |
|---|---|---|
| Seller financing | 20–40% | Patient, builds lender confidence, demonstrates owner commitment |
| CDFI loan(s) | 30–50% | Senior or subordinate debt; sized to cash flow |
| Member / community capital | 5–15% | Limited-equity shares, community notes, donations |
| Grants / PRIs | 5–15% | Pre-development, technical assistance, mission-aligned investment |

Specific Maine and Northeast CDFIs:
- **CFNE** (Cooperative Fund of New England) — cooperative lending specialist
- **CEI** (Coastal Enterprises, Inc.) — farm, food, and rural focus
- **Genesis Community Loan Fund** — northern New England, mission-aligned

## When this model fits

- The owner is open to non-market sale terms and understands the stewardship mission
- There is existing community goodwill and operator capacity
- The farm has multiple revenue streams (farm products, cafe, events, housing, wellness)
- The purchase price is financeable under conservative cash-flow assumptions
- A core group is willing to form a steering committee and do the work

## When this model does NOT fit

- The owner needs a fast, all-cash, market-rate sale
- There is no operator group ready to step in
- The business is deeply unprofitable with no path to break-even
- There is significant environmental contamination or unresolvable legal title issues
- The community is divided or there is active opposition to the project

## The phases at a glance

| Phase | Timeline | Core question |
|---|---|---|
| 1. Exploration & Feasibility | 4–8 weeks | Should we do this? |
| 2. Structure & Formation | 8–12+ weeks | How will we be organized? |
| 3. Financing & Due Diligence | 12–20+ weeks | Can we afford this? |
| 4. Closing & Transition | 4–8 weeks | Are we ready to close? |
| 5. Stabilization & Growth | Ongoing | Are we thriving? |

Each phase is detailed in [03 - Transition Playbook](03-transition-playbook.md).

## A note on "the farm"

This playbook intentionally uses "the farm" as a generic placeholder. Any farm applying this model will need to fill in:
- Working name of the farm and the new entities
- Specific acreage, structures, and amenities
- Actual purchase price and financing terms
- Revenue streams and cost structures
- Community demographics and relationships

The principles remain the same. The details must be rooted in the specific farm's reality.
`,
  },
  {
    id: '02-funder-brief',
    label: '02 Funder Brief',
    content: `# 02 — Funder Brief

This is a one-page overview for community development financial institutions (CDFIs), foundations, program-related investment (PRI) officers, and mission-aligned lenders. Adapt the bracketed sections to the specific farm.

---

## Community Land Trust + Cooperative Acquisition of a Maine Farm

### Overview

[The farm] is a [medicinal herb / diversified vegetable / livestock / pick-your-own] farm with onsite [cafe / apothecary / farm store], cultural programming space, [list amenities: e.g., yurt, performance area, fire pit, cob oven, community sauna], parking, and [housing description: e.g., a two-family residence] in [County], Maine.

The current owner is willing to sell; the discussed price is approximately \$[XXX,000].

The surrounding community has strong goodwill; [key operator / apothecary owner / long-time farm manager] is convening a transition process to preserve the farm's mission, affordability, and community access.

### Proposed Structure

- **Land**: Held permanently by a community land trust (CLT) or land-back-aligned nonprofit to remove land from speculation and preserve affordability and stewardship.
- **Operations**: A multi-stakeholder cooperative operates the farm, [cafe / apothecary], events, and related improvements under a long-term ground lease.
- **Housing**: Documented occupancy via CLT home lease or a small housing co-op.
- **Auxiliary structures**: Ownership and operating rights for [sauna / shared amenities / outbuildings] to be resolved via purchase, license/lease, or separate cooperative before closing.

### Capital Stack (Target)

| Source | Share | Notes |
|---|---|---|
| Seller financing | 20–40% | Amortized over 5–10+ years; improves lender appetite and affordability |
| CDFI loan(s) | 30–50% | Senior or subordinate debt sized to cash flow |
| Member / community capital | 5–15% | Limited-equity member shares; community notes or donations where lawful |
| Grants / PRIs | 5–15% | Pre-development, technical assistance, mission-aligned investment |

Likely CDFI partners: CFNE, CEI, Genesis Community Loan Fund.

### Use of Funds

1. Acquisition of land and improvements: \$[XXX,000]
2. Closing, legal, title, appraisal, survey, and environmental costs: \$[XX,000]
3. Immediate repairs, deferred maintenance, and working capital / operating reserves: \$[XX,000]
4. Entity formation, governance setup, and initial compliance: \$[X,000]

### Community Benefits

- **Permanent affordability and non-speculative land stewardship** via CLT
- **Local jobs, fair labor practices, and worker voice** through cooperative governance
- **Continued community access** to farm products, [cafe / apothecary], cultural events, and wellness offerings
- **Ecological stewardship** through [permaculture / regenerative / organic] practices maintained under community governance
- **Potential for Wabanaki-informed stewardship and relationship-building**, only if co-created with consent

### Funding Needs & Fit

- **Technical assistance and pre-development grants** to support feasibility, legal, and governance work
- **Patient capital (PRIs / low-interest loans)** for the CLT landholder and/or cooperative operator
- **Gap financing** tied to job creation or community benefit, where available
- **Funders seeking durable community ownership, food systems, cultural resilience, and climate-aligned land use**

### Next Steps

1. Complete feasibility memo and capital-stack worksheet with conservative cash-flow assumptions
2. Engage CDI, CFNE, CMBA, Land in Common, and Maine Farmland Trust for technical assistance and referrals
3. Resolve [auxiliary structure] ownership / operating rights in writing before closing
4. Obtain lender / partner commitments and negotiate purchase-and-sale terms, including seller financing where available

### Contact

[Name] | [Title/Role]
[Phone] | [Email]
[Farm website or project page]

---

## Tips for using this brief

- **Lead with relationship, not transaction.** Call the funder first. Send this after you have spoken.
- **Customize the community benefits section** for each funder's priorities (jobs, food access, climate, arts).
- **Bring a steering committee member** to any funder meeting — not just the finance lead.
- **Be honest about risks.** A funder who trusts your honesty is more valuable than one who trusts your optimism.
`,
  },
  {
    id: '03-transition-playbook',
    label: '03 Transition Playbook',
    content: `# 03 — Transition Playbook

The step-by-step roadmap for moving a Maine farm from private ownership to community land trust + cooperative stewardship.

---

## Phase 1 — Exploration & Feasibility
**Duration: 4–8 weeks**  
**Core question: Should we do this?**

### Week 1–2: Convene & listen

- [ ] Identify 3–5 people willing to form a steering committee. Aim for diversity of skills: operations, finance, communications, community relationships, legal/governance.
- [ ] Schedule an initial conversation with the owner. Confirm their openness to a non-market sale, their timeline, and their price expectations.
- [ ] Hold the first community listening session. Purpose: understand what the community values, fears, and hopes for. This is not a decision-making meeting. It is an information-gathering meeting.
- [ ] Document the listening session: who attended, what was said, what themes emerged, what questions came up. Share the summary publicly within 48 hours.
- [ ] Draft a simple project name and a one-sentence mission statement. This will evolve, but you need something to call yourselves.

### Week 2–4: Preliminary financial & legal review

- [ ] Gather financial documents from the owner (if they are willing): tax returns, profit & loss statements, rent rolls, utility costs, equipment lists, outstanding liens or judgments.
- [ ] Research comparable sales in the area for the land and the improvements. This is not an appraisal — it is a reality check.
- [ ] Do a walk-through with a contractor or builder to identify immediate repair needs and deferred maintenance. Get a rough estimate. Add 30% for surprises.
- [ ] Contact the town office to check: zoning, current use status, any code violations, septic system records, well records, permitted uses for farm retail / cafe / events / housing.
- [ ] Contact the [Maine Farmland Trust](https://mainefarmlandtrust.org) to inquire about farmland protection tools, easement options, and their network of advisors.
- [ ] If the farm uses any shared structures (sauna, outbuildings, equipment) whose ownership is unclear, document the current arrangement and begin conversations with anyone who has a stake.

### Week 4–6: Feasibility memo

- [ ] Complete a light feasibility memo covering:
  - Description of the property and its current uses
  - Revenue streams and their seasonal or cyclical nature
  - Operating costs (real, estimated, and unknown)
  - Purchase price and closing costs
  - Repair and deferred maintenance estimate
  - Preliminary capital stack (best guess)
  - Cash-flow projection for Year 1 (conservative — assume things go wrong)
  - Major risks and unknowns
  - Go / no-go recommendation
- [ ] The memo does not need to be perfect. It needs to be honest.
- [ ] Share the memo with the steering committee. Debate it. If the committee cannot agree on a go / no-go, the answer is no-go until clarity emerges.

### Week 6–8: Decision & next steps

- [ ] If the decision is **go**: Draft a non-binding letter of intent with the owner. Include a 60–90 day exploration window, a target price range, and a commitment to bring back a clear recommendation with proposed terms.
- [ ] If the decision is **no-go**: Communicate this clearly to the owner and the community. Thank them. Document why. The group may reassemble for a different property or dissolve. Either outcome is a success if it was honest.
- [ ] If the decision is **go with conditions**: List the conditions explicitly (e.g., "go if seller financing is at least 30%," "go if the sauna ownership is resolved in writing").
- [ ] Begin conversations with [CDI](https://cdi.coop) for cooperative formation technical assistance and [Land in Common](https://landincommon.org) for CLT structure guidance.

---

## Phase 2 — Structure & Formation
**Duration: 8–12+ weeks**  
**Core question: How will we be organized?**

### Entity formation

This phase usually requires a lawyer experienced in cooperatives and/or community land trusts in Maine. Budget \$3,000–\$8,000 for legal formation. Some organizations (CDI, MFT) can recommend attorneys or provide templates.

#### The Community Land Trust (CLT) or nonprofit landholder

- [ ] Choose entity type: Maine nonprofit corporation (501(c)(3) or 501(c)(2) title-holding corporation) or a community land trust.
- [ ] Define the CLT's mission, geographic focus, and community base.
- [ ] Recruit an initial board of 5–9 people. Aim for community representation, financial expertise, and at least one person with real estate or land-use experience.
- [ ] Draft bylaws including: board composition and election, ground lease terms, resale formula, stewardship responsibilities, conflict of interest policy.
- [ ] File articles of incorporation with the Maine Secretary of State.
- [ ] Apply for federal tax exemption (Form 1023 or 1023-EZ) if seeking 501(c)(3) status. This can take 3–6 months. Start early.

Note: A 501(c)(2) title-holding corporation is simpler and faster to form if the primary purpose is holding land for an existing 501(c)(3). A CLT has additional requirements under the National CLT Network standards.

#### The Cooperative

- [ ] Choose cooperative type: Maine cooperative corporation or LLC with cooperative governance provisions.
- [ ] Identify initial member classes: worker members, consumer members, producer members, community supporter members. Not all need to exist on Day 1.
- [ ] Draft articles of incorporation and bylaws covering: membership requirements, voting rights, board election, patronage distribution, dispute resolution, dissolution.
- [ ] Set initial membership share price. Use a sliding scale if possible. Typical range: \$100–\$1,000 per share. Document payment plans.
- [ ] File articles with the Maine Secretary of State.
- [ ] Apply for federal tax exemption or tax treatment as a cooperative under Subchapter T (if applicable).

#### The relationship between entities

- [ ] Draft the ground lease: 99 years, renewable. Define: rent (often 1–3% of land value annually or a nominal fee), permitted uses, maintenance responsibilities, resale restrictions, default and cure, dispute resolution, and conditions for lease termination.
- [ ] The ground lease should be reviewed by an attorney familiar with CLT ground leases.
- [ ] The cooperative should have a right of first refusal if the CLT ever considers selling (which CLTs almost never do, but the provision protects against edge cases).

### Governance setup

- [ ] Adopt steering committee charter (see [05 - Governance Templates](05-governance-templates.md)).
- [ ] Hold first CLT board meeting: adopt bylaws, elect officers, approve ground lease in principle, authorize legal engagement.
- [ ] Hold first cooperative member meeting: adopt bylaws, elect initial board, set membership share price and payment terms, approve engagement with the project.
- [ ] Open membership process publicly. Set clear criteria, timeline, and orientation sessions.
- [ ] Create decision-making protocols: what decisions require member vote, what decisions can the board make, what decisions require supermajority.
- [ ] Establish a conflict of interest disclosure process. Every board member and steering committee member should disclose financial and relational ties to the project.

### Communications

- [ ] Launch a simple website or newsletter. Include: what is happening, what the model is, how to get involved, meeting dates, contact information.
- [ ] Publish meeting minutes or summaries within 48 hours of every steering committee or board meeting.
- [ ] Respond to community questions promptly. Silence breeds rumor.

---

## Phase 3 — Financing & Due Diligence
**Duration: 12–20+ weeks**  
**Core question: Can we afford this?**

### Capital stack assembly

- [ ] Finalize capital stack worksheet (see [06 - Capital Stack Guide](06-capital-stack-guide.md) and templates).
- [ ] **Seller financing**: Negotiate terms with the owner. Typical: 20–40% of purchase price, 3–6% interest, amortized over 5–10 years, with balloon or refinance option. Document in a promissory note.
- [ ] **CDFI engagement**: Apply to CFNE, CEI, Genesis, and any other relevant CDFI. Each will require: financial projections, business plan, entity documents, board bios, and personal financial statements from guarantors (if required).
- [ ] **Member capital campaign**: Set target. Host information sessions. Provide clear documents on what membership means, what the risks are, and what the limits on returns are. Do not oversell.
- [ ] **Grants / PRIs**: Research foundations active in food systems, land access, rural development, and cooperative development in Maine. Applications often take 6–12 weeks. Start early.

### Due diligence

- [ ] **Appraisal**: Order a full appraisal from a state-certified appraiser. The lender will require this. If the appraisal comes in below the purchase price, renegotiate or walk away.
- [ ] **Title search**: Hire a title company or attorney to search the chain of title. Look for: liens, easements, boundary disputes, unresolved probate issues, mineral rights reservations.
- [ ] **Survey**: Order a boundary survey if one does not exist or is outdated. This is critical if any structures are near property lines.
- [ ] **Environmental**: If the property has former uses that could have contaminated soil (e.g., auto repair, dry cleaning, orchards with legacy pesticide use), order a Phase I Environmental Site Assessment. Budget \$2,000–\$4,000.
- [ ] **Septic & well**: Have the septic system inspected and the well water tested for potability and contaminants. In Maine, this is often required by lenders and may be required for any food-service operation.
- [ ] **Building inspections**: Structural, electrical, plumbing, and roof inspections for all buildings. Document code compliance for the cafe, housing, and any public structures.
- [ ] **Insurance quotes**: Obtain quotes for property, liability, workers compensation, and directors & officers insurance. Some lenders require proof of insurance before closing.

### Finalizing the deal

- [ ] Draft purchase and sale agreement. Include: purchase price, deposit amount, financing contingencies, inspection contingencies, closing date, and what happens if financing falls through.
- [ ] Resolve any outstanding issues with auxiliary structures (sauna, outbuildings, shared equipment) in writing before closing (see [10 - Auxiliary Structures](10-auxiliary-structures.md)).
- [ ] If there are tenants or licensees on the property, determine: will their agreements transfer? Will they be terminated? Are there statutory protections (e.g., Maine's tenancy laws, mobile home park protections)?
- [ ] Obtain lender commitment letters. Review covenants, conditions, and reporting requirements carefully.
- [ ] Finalize the closing statement (HUD-1 or equivalent). Allocate closing costs between buyer and seller.

---

## Phase 4 — Closing & Transition
**Duration: 4–8 weeks**  
**Core question: Are we ready to close?**

### Pre-closing checklist

- [ ] Final walk-through 24–48 hours before closing
- [ ] Confirm all inspection contingencies have been satisfied or waived
- [ ] Confirm financing is in place and funds are ready to wire
- [ ] Confirm title insurance is ordered
- [ ] Review and sign all loan documents
- [ ] Review and sign the deed, ground lease, and any other transfer documents
- [ ] Confirm the seller has provided all required disclosures
- [ ] Confirm the septic system and well tests are satisfactory
- [ ] Transfer or set up utilities
- [ ] Obtain certificates of insurance

### Closing day

- [ ] Sign documents at the closing attorney's office or via remote closing
- [ ] Wire or deliver funds
- [ ] Record the deed with the county registry of deeds
- [ ] Record the ground lease (or a memorandum of lease) with the registry of deeds
- [ ] Receive keys and access to all buildings, equipment, and records

### Immediate post-closing (Week 1–2)

- [ ] Change locks and access codes
- [ ] Notify the town of the ownership change
- [ ] Notify the post office, utilities, vendors, and insurance carriers
- [ ] Take possession of financial records, equipment lists, and any operational handbooks
- [ ] Meet with all employees, tenants, and regular vendors to introduce the new ownership structure and answer questions
- [ ] Hold a public community meeting to announce the closing, introduce the cooperative board, and outline immediate priorities

### Transition operations (Month 1–3)

- [ ] Ensure continuity of farm operations, cafe service, and event programming
- [ ] Assess what is working and what needs immediate attention
- [ ] Address any deferred maintenance that was identified in inspections
- [ ] Begin recruiting and orienting new cooperative members
- [ ] Establish regular board and member meeting schedules
- [ ] Implement basic bookkeeping and financial reporting systems
- [ ] Open a business bank account for the cooperative (separate from the CLT)

---

## Phase 5 — Stabilization & Growth
**Duration: Ongoing**  
**Core question: Are we thriving?**

### Year 1 priorities

- [ ] Stabilize core revenue streams before expanding
- [ ] Build membership to a sustainable base
- [ ] Establish transparent financial reporting: monthly reports to members, annual report to community
- [ ] Develop or maintain relationships with local farms, food hubs, restaurants, and retailers
- [ ] Ensure compliance with all permits, licenses, and labor laws
- [ ] Hold an annual member meeting: elect board, review finances, set priorities
- [ ] Conduct a 12-month operational review: what worked, what didn't, what to change

### Ongoing governance

- [ ] Board meets monthly or bimonthly
- [ ] Member meetings quarterly
- [ ] Annual financial audit or review by an independent accountant
- [ ] Annual strategic planning session
- [ ] Conflict resolution processes are accessible and used before conflicts escalate

### Community accountability

- [ ] Publish an annual community report: stewardship activities, ecological practices, jobs created, events held, food distributed
- [ ] Maintain the listening practice: hold at least one community listening session per year
- [ ] Review the ground lease terms periodically with the CLT board and the cooperative board
- [ ] If Wabanaki stewardship relationships were established, maintain them with ongoing consent and reciprocity

---

## Decision gates

At the end of each phase, the steering committee or board should take a formal vote:

- **Proceed to next phase**
- **Pause and address conditions**
- **No-go — wind down gracefully**

A no-go is not a failure. It is a success if it prevents the group from taking on unmanageable debt, governance chaos, or a broken community relationship. The playbook can be used again for another property.
`,
  },
  {
    id: '04-member-faq',
    label: '04 Member Faq',
    content: `# 04 — Member FAQ

Plain-language answers for community members, potential cooperative members, and neighbors.

---

## What is happening?

The current owner wants to sell the farm, [cafe / apothecary], and related community assets. A group of operators and community members is exploring a community-ownership model so the place can remain affordable, mission-aligned, and locally stewarded.

## What is the proposed ownership model?

- **Land** would be held permanently by a community land trust (CLT) or similar nonprofit, removing it from speculation.
- **A cooperative** would operate the farm, [cafe / apothecary], events, and related improvements under a long-term ground lease.
- **Housing** would have documented occupancy via a CLT lease or a small housing co-op.
- **[Auxiliary structures]** ownership and operating rights will be resolved in writing before any purchase.

## Why a land trust and cooperative?

- This structure keeps land permanently affordable and community-governed while giving operators secure tenure and clear responsibilities.
- It aligns with Maine's cooperative tradition and the community's values around stewardship, fair work, and long-term resilience.
- CDFIs and mission-aligned funders are familiar with this model in Maine and the Northeast.

## How can I participate?

- Attend open information sessions and listening gatherings.
- Join a working group (farm, [cafe], events, governance, fundraising, communications) if you have time and skills.
- Express non-binding interest in membership when the cooperative opens its membership process.
- Support through donations or spreading the word, where appropriate.

## What does membership mean?

- Members have a voice in major cooperative decisions (e.g., electing the board, approving major changes).
- Members typically contribute a share (often with sliding-scale or payment-plan options).
- Membership is not a guarantee of profit, property ownership, or specific access rights. Details will be in the bylaws and membership agreement.

## Is this an investment? Will I get financial returns?

Not in the conventional sense. Member shares are typically limited-equity and focused on stewardship, not profit. Any patronage or surplus distribution would follow cooperative rules and legal constraints. Do not expect market-rate financial returns. This is primarily a community-stewardship model.

## What are the main risks?

- **Financing risk**: The deal must be affordable under conservative cash-flow assumptions. If the group cannot secure enough financing, the deal will not close.
- **Operational risk**: Seasonality, staffing, and maintenance needs can strain cash flow.
- **Legal / permit risk**: Zoning, food service, events, [sauna], septic, well, and housing compliance must all be resolved.
- **Governance risk**: Volunteer capacity and decision-making overload can burn people out if the structure is not clear.

## What is the timeline?

| Phase | Duration |
|---|---|
| Exploration and feasibility | 4–8 weeks |
| Structure, financing, and legal formation | 8–12+ weeks |
| Closing and transition | Depends on due diligence, lender processes, and seller cooperation |

## How will decisions be made?

- A small steering committee is guiding the exploration phase.
- If the cooperative forms, members will have democratic input (e.g., one member, one vote or another agreed democratic formula).
- The CLT would have its own board and governance process focused on land stewardship and affordability.

## What about [the sauna / auxiliary structures]?

Ownership, utilities, insurance, access, and removal rights must be documented before closing. Options include cooperative purchase, a license/lease with the current owner, or a separate cooperative with a site lease. See [10 - Auxiliary Structures](10-auxiliary-structures.md).

## Will the farm, [cafe], and events continue?

The goal is continuity and strengthening of core offerings: farm products, [cafe / apothecary], [yoga / cultural events], and community gatherings. Specific programming will depend on member priorities, staffing, and finances.

## How can I stay informed?

- Sign up for updates via the contact form or email list when available.
- Attend scheduled community sessions and check posted minutes/summaries.
- Contact the steering committee with questions. Avoid sharing unconfirmed details as fact.

## What if this doesn't work out?

That is a real possibility, and it would not be a failure. If the group determines that the deal is not financially viable, the governance is not ready, or the community is not aligned, the right choice is to walk away cleanly. We will communicate honestly at every step.

## I have more questions. Who do I contact?

[Name] | [Email] | [Phone]  
[Project website or mailing list signup]
`,
  },
  {
    id: '05-governance-templates',
    label: '05 Governance Templates',
    content: `# 05 — Governance Templates

Ready-to-adapt templates for steering committees, cooperative bylaws, and decision-making protocols.

---

## Steering Committee Charter

### Purpose
The steering committee guides the exploration and formation of a community land trust + cooperative ownership transition for [the farm]. The committee makes recommendations, not binding decisions, until formal entities are created.

### Membership
- 3–7 members
- At least one person with financial literacy
- At least one person with community relationships / communication skills
- At least one person with operations or farm business experience
- Strive for diversity: age, background, gender, role in the community

### Term
Steering committee members serve until the cooperative and CLT are formally established and boards are elected. Expected duration: 6–12 months.

### Decision-making
- Consensus is the goal. If consensus cannot be reached, the committee votes.
- Each member has one vote.
- Decisions are documented in writing and shared with the broader community within 48 hours.

### Responsibilities
- Convene community listening sessions
- Manage communications and answer public questions
- Coordinate feasibility analysis
- Engage legal, accounting, and funder relationships
- Make a formal go/no-go recommendation at the end of Phase 1

### Limitations
- The steering committee cannot commit the group to a purchase.
- The steering committee cannot borrow money or sign contracts on behalf of future entities.
- The steering committee cannot make promises about jobs, housing, or financial returns to individuals.

### Meeting rhythm
- Weekly during Phase 1 (Exploration)
- Biweekly during Phase 2 (Formation)
- As needed during Phase 3 (Financing)

### Communication
- Meeting summaries are posted publicly within 48 hours
- All members respond to community inquiries within 48 hours
- Disagreements within the committee are not aired publicly

---

## Cooperative Bylaws Framework

This is a framework, not a final document. Engage a cooperative attorney to draft final bylaws.

### Name and purpose
- Name: [The Farm] Cooperative
- Purpose: To operate [the farm] and its related businesses democratically, sustainably, and for the benefit of its members and the broader community.

### Membership
- **Open membership**: Any person who supports the cooperative's purpose and pays the membership share may apply.
- **Membership share**: \$[amount], with sliding scale / payment plan available.
- **Member classes** (optional, adapt as needed):
  - Worker members: work in the cooperative's operations
  - Consumer members: purchase goods or services from the cooperative
  - Community supporter members: join to support the mission without operational involvement
- **Voting**: One member, one vote. No person may hold more than one membership share.

### Board of directors
- 5–9 directors elected by members at the annual meeting
- Staggered terms (e.g., 2-year terms, half elected each year)
- At least one director must be a worker member if worker members exist
- No more than 40% of the board may be paid employees of the cooperative
- Officers: President, Secretary, Treasurer (minimum)

### Meetings
- Annual member meeting: held within 90 days of the fiscal year end
- Special meetings: may be called by the board or by petition of [10]% of members
- Quorum: [25]% of members (adjust based on expected membership size)

### Patronage and surplus
- Net surplus, if any, is allocated to members based on patronage.
- A portion (e.g., 20–50%) may be retained as unallocated reserves.
- Surplus is distributed only after all operating expenses, debt service, and reserves are met.
- No member may receive more than 8% return on their share capital (compliance with federal cooperative tax rules).

### Dissolution
- If the cooperative dissolves, assets are distributed to another cooperative or nonprofit with a similar mission. No member receives a share of assets beyond the return of their membership share at par value.

---

## CLT Board Structure

### Composition
- 5–9 trustees
- One-third elected by cooperative members
- One-third elected by the surrounding community
- One-third appointed by the founding board or mission-aligned organizations
- Maximum two consecutive terms

### Responsibilities
- Steward the land in perpetuity
- Enforce the ground lease terms
- Ensure affordability protections are maintained
- Approve any amendments to the ground lease
- Hold the cooperative accountable to community benefit commitments

### Ground lease oversight
- Review the cooperative's compliance with lease terms annually
- Conduct a site visit annually
- Maintain a reserve fund for land stewardship and re-leasing if needed

---

## Decision-Making Protocol

### What requires a full member vote
- Election and removal of board members
- Amendments to bylaws
- Major asset purchases or sales (over \$[threshold])
- Changes to the cooperative's core purpose or membership classes
- Mergers or dissolution
- Ground lease amendments (requires CLT board approval as well)

### What the board decides
- Annual budget and strategic plan
- Hiring and firing of management
- Contracts and leases under \$[threshold]
- Day-to-day operational policies

### What management decides
- Daily scheduling and staffing
- Vendor relationships under \$[threshold]
- Customer service and programming decisions

### Conflict resolution
- Step 1: Direct conversation between the parties
- Step 2: Mediation by a neutral third party agreed upon by both parties
- Step 3: Binding arbitration if mediation fails (optional — some cooperatives prefer non-binding processes)

### Transparency
- Board meeting minutes are shared with members within 7 days
- Financial reports are shared quarterly
- Strategic decisions include a written rationale
- Members may request information from the board in writing; the board responds within 14 days
`,
  },
  {
    id: '06-capital-stack-guide',
    label: '06 Capital Stack Guide',
    content: `# 06 — Capital Stack Guide

How to finance a Maine farm transition through a Community Land Trust + Cooperative structure.

---

## The capital stack concept

The capital stack is the layering of different funding sources — each with its own risk, return, and legal characteristics — to assemble enough money to purchase the farm. A well-structured stack shares risk appropriately and ensures that each funder or investor is comfortable with their position.

### Visual model

\`\`\`
Grants / PRIs          ← Most patient, lowest return, highest mission-alignment
Member capital         ← Patient, limited return, strong community signal
Seller financing       ← Moderately patient, builds lender confidence
CDFI loan(s)           ← Least patient (but still patient capital), senior position
\`\`\`

Seniority matters: if the deal fails, senior lenders (CDFIs with collateral) are paid first. Subordinate or patient capital (seller, members, grants) absorbs loss first. This is why CDFIs often require seller financing or member capital — it proves that others have skin in the game.

---

## Financing sources

### Seller financing

The current owner acts as a lender, holding a mortgage or promissory note for part of the purchase price.

- **Typical share**: 20–40% of purchase price
- **Terms**: 3–6% interest, amortized over 5–10+ years, sometimes with a balloon payment requiring refinancing
- **Why it matters**: Demonstrates the owner's confidence in the project's viability. Reduces the cash needed at closing. Improves the debt-service-coverage ratio that CDFIs care about.
- **Negotiation tips**:
  - Frame it as legacy preservation, not charity.
  - Offer a competitive interest rate — not zero, not market-rate for a risky project, but fair.
  - Document everything in a promissory note prepared by an attorney.
  - Offer the seller a seat on the CLT board or an advisory role if they want continued involvement.

### CDFI loans

Community Development Financial Institutions are mission-driven lenders that fill gaps left by conventional banks.

**Cooperative Fund of New England (CFNE)**
- Based in Boston, active throughout New England
- Specializes in cooperative lending
- Loan size: typically \$50,000–\$500,000
- Requirements: cooperative with democratic governance, viable business plan, collateral or guarantees
- Timeline: 2–4 months from application to closing

**Coastal Enterprises, Inc. (CEI)**
- Based in Wiscasset, Maine
- Strong focus on farms, food systems, fisheries, and rural enterprises
- Offers both loans and technical assistance
- Loan size: wide range, from small working capital to real estate
- Often participates alongside other lenders

**Genesis Community Loan Fund**
- Serves northern New England
- Mission-aligned, patient capital
- Often works with first-time borrowers and nontraditional structures

**What CDFIs typically require**
- Audited or reviewed financial statements (or, for new entities, pro forma projections)
- Business plan with 3-year projections
- Personal financial statements and tax returns of guarantors (if personal guarantees are required)
- Entity documents (articles, bylaws, board resolutions)
- Appraisal and title insurance
- Proof of other capital commitments (seller financing, member shares, grants)
- Debt-service coverage ratio typically ≥ 1.15x

### Member / community capital

Capital raised directly from the people who will be members, neighbors, or supporters of the farm.

- **Typical share**: \$100–\$1,000 per share
- **Legal structure**: Membership shares in the cooperative (Maine cooperative corporation law) or community investment notes (if properly structured under securities law)
- **Why it matters**: Demonstrates community commitment. Provides non-extractive capital. Builds the membership base.
- **Securities law note**: In Maine, offerings to members of a cooperative or to a small number of non-accredited investors may be exempt from federal or state securities registration under the intrastate or cooperative exemptions. Consult a securities attorney before raising capital from non-members.
- **Tips**:
  - Use a sliding scale and payment plans.
  - Do not promise returns. Be explicit about the risks.
  - Document everything in a membership agreement.
  - Hold information sessions where people can ask hard questions.

### Grants and Program-Related Investments (PRIs)

- **Pre-development / technical assistance grants**: For feasibility studies, legal formation, architectural plans, environmental assessments
  - Sources: Maine Farmland Trust, NoVo Foundation, USDA NRCS, municipal economic development funds
- **Program-Related Investments (PRIs)**: Foundations make loans or equity investments that further their charitable mission, often at below-market rates
  - Sources: Local community foundations, state housing/farm funds, national foundations active in food and land
- **Gap financing**: Some funders offer subordinate loans or loan guarantees to fill the gap between what CDFIs will lend and what the project needs

---

## Capital stack worksheet

Use this to model your deal. Adapt the line items for your farm.

| Source | Amount | % of total | Terms / notes | Secured by | Status |
|---|---|---|---|---|---|
| Purchase price | | 100% | | | Confirmed / estimated |
| **Seller financing** | | | Interest rate: ___%; Term: ___ years | Mortgage on property | |
| **CDFI loan 1 (senior)** | | | Lender: ___; Rate: ___%; Term: ___ years | Mortgage + UCC on equipment | |
| **CDFI loan 2 (subordinate)** | | | Lender: ___; Rate: ___%; Term: ___ years | Subordinate mortgage | |
| **Member shares** | | | Share price: \$___; Target members: ___ | None | |
| **Community notes / donations** | | | | None | |
| **Grants** | | | Funder: ___; Purpose: ___ | None | |
| **PRIs** | | | Funder: ___; Rate: ___% | None or subordinate | |
| **Other** | | | | | |
| **Total capital** | | | | | |
| **Gap or surplus** | | | | | |

**Non-purchase costs to include**
- Closing costs: 2–5% of purchase price
- Immediate repairs / deferred maintenance: obtain contractor estimate
- Working capital reserve: 3–6 months of operating expenses
- Legal and formation costs: \$5,000–\$15,000
- Appraisal, survey, title, environmental: \$5,000–\$10,000
- Insurance (first year): obtain quote

---

## Cash-flow stress test

Before finalizing the capital stack, model these scenarios:

- **Base case**: Revenue and expenses as projected
- **Stress case**: Revenue down 20%, expenses up 15% (delayed repairs, bad weather, supply chain issues)
- **Disaster case**: Revenue down 40%, major equipment failure, loss of key revenue stream

If the cooperative cannot make debt payments in the stress case, the stack is too aggressive. Renegotiate with the seller, seek more grants, reduce the purchase price, or walk away.

---

## Lender conversations: what to bring

When meeting with a CDFI or other lender, bring:

1. One-page farm description and mission statement
2. Historical financials (if available) or 3-year pro forma projections
3. Capital stack worksheet (even if preliminary)
4. Entity documents (or a letter from your attorney confirming formation timeline)
5. Appraisal (if available) or comparable sales analysis
6. Resumes or bios of key people (steering committee, proposed board)
7. Letter of intent from the seller (if you have one)
8. List of what you still need to figure out (honesty builds trust)

---

## Red flags for financiers

Avoid these patterns — they signal a project that has not done its homework:

- **No seller financing or member capital**: If the owner and the community will not invest, why should a lender?
- **Overly optimistic projections**: Revenue growing 50% year-over-year with no explanation.
- **Vague governance**: "We'll figure out the bylaws later."
- **Hidden conflicts**: Steering committee member stands to personally benefit from the sale.
- **No plan for auxiliary structures**: "The sauna — we'll deal with that after closing."
`,
  },
  {
    id: '07-legal-checklist-maine',
    label: '07 Legal Checklist Maine',
    content: `# 07 — Legal Checklist (Maine)

A checklist of legal and regulatory issues specific to Maine farm transitions. This is not a substitute for an attorney. It is a tool to help you ask the right questions.

---

## Entity formation

- [ ] File Articles of Incorporation with the Maine Secretary of State (nonprofit or cooperative corporation)
- [ ] Obtain federal Employer Identification Number (EIN) from the IRS
- [ ] Apply for 501(c)(3) tax exemption (if forming a CLT nonprofit) — allow 3–6 months
- [ ] Register with the Maine Attorney General's office (charitable solicitation registration, if applicable)
- [ ] File annual reports with the Secretary of State (required for all corporations)
- [ ] Adopt bylaws and hold organizational meetings
- [ ] Open bank accounts for each entity (CLT and cooperative should have separate accounts)

## Real estate

- [ ] Purchase and Sale Agreement: include financing contingencies, inspection contingencies, and deadlines
- [ ] Title search: confirm clean title, identify easements, liens, covenants, and encumbrances
- [ ] Title insurance: obtain an owner's policy and a lender's policy
- [ ] Boundary survey: confirm acreage and identify encroachments
- [ ] Deed: specify warranty deed or quitclaim deed (warranty preferred)
- [ ] Ground lease: 99-year term, renewable; define rent, permitted uses, maintenance, default, and cure
- [ ] Record deed and ground lease (or memorandum of lease) with the County Registry of Deeds
- [ ] Current Use / Tree Growth / Farmland classification: if the property is enrolled in Maine's Current Use tax program, understand the obligations and potential rollback taxes if use changes
- [ ] Conservation easement: if one exists, review its terms; if one is being created, ensure it aligns with the CLT's mission

## Zoning and land use

- [ ] Confirm zoning district and permitted uses for: agriculture, retail (farm stand / cafe), events, housing
- [ ] Check for site plan review or special use permit requirements
- [ ] Review shoreland zoning if the property is within 250 feet of water
- [ ] Check deed restrictions or homeowners association rules
- [ ] Confirm parking requirements for cafe and events
- [ ] Check sign ordinances
- [ ] Verify whether any structures are non-conforming and what their legal status is

## Housing

- [ ] If providing housing: confirm compliance with Maine's Residential Rental Property registration and code requirements
- [ ] Check whether any units are subject to rent control (unlikely in rural Maine, but verify)
- [ ] Review Maine's tenant protections and notice requirements
- [ ] If forming a housing cooperative: ensure compliance with fair housing laws and cooperative housing regulations
- [ ] Mobile home: if any structure is a mobile home, Maine has specific statutes (Title 10, Chapter 953) governing notice, sale, and park closures

## Food service and retail

- [ ] Maine Food Code: obtain a food establishment license from the Maine Department of Health and Human Services (DHHS) or municipal health officer
- [ ] If selling prepared food: comply with缅因州食品服务法规
- [ ] If selling alcohol: obtain liquor license from the Maine Bureau of Alcoholic Beverages & Lottery Operations (if applicable)
- [ ] Cottage food operation: if any products are produced under Maine's cottage food law, ensure labeling and sales channel compliance
- [ ] Weights and measures: if selling by weight, register scales with the Maine Department of Agriculture
- [ ] Farm stand / farmers market: verify any municipal permits or licenses required

## Events and gatherings

- [ ] Assembly occupancy permit: if hosting regular events, may need approval from the local fire marshal or building inspector
- [ ] Noise ordinances: review municipal noise restrictions, especially for evening events
- [ ] Temporary event permits: some towns require permits for events over a certain size
- [ ] Insurance for events: general liability must cover event-related claims; some insurers require advance notice for large events

## Sauna and wellness structures

- [ ] Building code: confirm whether the sauna is classified as an accessory structure or a commercial wellness facility
- [ ] Electrical and plumbing permits: if the sauna has wiring or plumbing, ensure permits were pulled and inspections completed
- [ ] Zoning: confirm accessory structure size limits and setbacks
- [ ] Insurance: wellness structures carry distinct liability risks; obtain proper coverage
- [ ] Liability waivers: if members or guests use the sauna, consider requiring signed waivers
- [ ] Ownership transfer: see [10 - Auxiliary Structures](10-auxiliary-structures.md)

## Environmental

- [ ] Septic system: inspect and pump; verify capacity for anticipated use (including events and housing); obtain inspection report
- [ ] Well water: test for potability (bacteria, nitrates, arsenic) and any contaminants relevant to prior land use
- [ ] Phase I Environmental Site Assessment: if there is any reason to suspect contamination (former auto shop, orchard with legacy pesticides, dump site), order a Phase I from a certified environmental professional
- [ ] Wetlands: verify whether any portion of the property is mapped as wetland or vernal pool habitat
- [ ] Stormwater: ensure compliance with Maine DEP stormwater management requirements if any construction is planned
- [ ] Pesticide / herbicide history: if transitioning to organic or regenerative practices, document prior chemical use

## Labor and employment

- [ ] If the cooperative will have employees: register with Maine DOL, obtain workers' compensation insurance, and comply with wage and hour laws
- [ ] Worker classification: distinguish between cooperative members who work as owner-operators and employees who are not members
- [ ] Family and Medical Leave Act: if you will have 15+ employees, Maine's FMLA requirements apply
- [ ] Workers' compensation: required in Maine for most employers; obtain quotes before closing

## Insurance

- [ ] Property insurance: covers buildings, equipment, and inventory
- [ ] General liability: covers injuries on the property, product liability, and event-related claims
- [ ] Directors & Officers (D&O) insurance: protects board members from liability related to governance decisions
- [ ] Workers' compensation: as noted above
- [ ] Umbrella policy: provides additional liability coverage above the primary policies
- [ ] Review all policies annually; update coverage as operations expand or change

## Tax

- [ ] Real estate taxes: confirm current assessment and whether the property receives any abatements or exemptions
- [ ] Current Use / Tree Growth / Farmland: if enrolled, understand the obligations and potential penalties for withdrawal
- [ ] Sales tax: if selling taxable goods (non-food items, prepared meals, alcohol), obtain a sales tax permit from Maine Revenue Services
- [ ] Employment taxes: if you have employees, register for unemployment insurance and withholding
- [ ] Property tax exemption: if the CLT is a 501(c)(3), apply for property tax exemption from the municipality (not automatic; must be applied for)

## Contracts and agreements

- [ ] Ground lease (CLT → cooperative): see real estate section
- [ ] Promissory note (seller financing): document all terms in writing
- [ ] Loan agreements (CDFIs): review covenants, reporting requirements, and default provisions carefully
- [ ] Vendor contracts: review existing supply, service, and equipment contracts; determine which will transfer
- [ ] Employment contracts: if any employees are transferring, review their contracts and Maine's notice requirements
- [ ] Membership agreement: each cooperative member must sign an agreement describing their rights, obligations, and the limited nature of returns

## Indigenous engagement

- [ ] If the farm is located on or near Wabanaki territory (which includes most of Maine), consider whether the CLT's stewardship model can include Wabanaki input, partnership, or co-management
- [ ] Engage with Wabanaki leaders early and with humility
- [ ] Do not claim indigenous practices without explicit consent and partnership
- [ ] Consider whether a portion of the land or proceeds can support Wabanaki food sovereignty initiatives

---

## Professional team

You will need:

- **Real estate attorney** familiar with CLTs, cooperatives, and Maine property law
- **Tax advisor** (CPA or attorney) familiar with nonprofit and cooperative tax treatment
- **Insurance broker** familiar with farms, food service, events, and cooperative structures
- **CDFI loan officer** (from CFNE, CEI, or Genesis) engaged early
- **Optional**: environmental consultant, surveyor, engineer, architect

Budget \$8,000–\$20,000 for legal and professional fees during formation and closing.
`,
  },
  {
    id: '08-community-engagement',
    label: '08 Community Engagement',
    content: `# 08 — Community Engagement

How to listen, communicate, and build trust with the community during a farm transition.

---

## Listening sessions

The first and most important community engagement tool is the listening session — not a presentation, not a pitch, but a structured opportunity for community members to say what they value, fear, and hope for.

### Format
- 90 minutes
- 15–30 participants (if more people come, hold multiple sessions)
- Facilitated by a neutral party (not the owner, not someone who stands to benefit from the sale)
- Ground rules: one person speaks at a time, no decisions are made in this room, all perspectives are welcome

### Questions to ask
1. What does this farm mean to you personally?
2. What do you want to see continue?
3. What worries you about a change in ownership?
4. What would make you feel confident in a new ownership model?
5. What do you need to know that you don't know yet?
6. Who else should be in this conversation?

### Documentation
- Take notes on flip chart paper visible to everyone
- Assign a note-taker who is not the facilitator
- Produce a one-page summary within 48 hours
- Post the summary publicly (email list, website, physical posting at the farm if appropriate)
- Do not quote individuals by name without consent

### Frequency
- Phase 1: 2–3 listening sessions
- Phase 2: 1 session per month or per major milestone
- Phase 3: Quarterly updates
- Ongoing: Annual community report and listening session

---

## One-page handout

Use this at listening sessions, farmers markets, community board postings, and email outreach.

\`\`\`
COMMUNITY OWNERSHIP EXPLORATION
[Farm name or working name]

What is happening?
The current owner plans to sell. A group of community members is exploring
a community land trust + cooperative model to keep the farm affordable,
mission-driven, and locally governed.

What does that mean?
- Land would be owned permanently by a community trust (no speculation)
- Farm operations would be run by a cooperative (democratic, local)
- Housing and community spaces would remain accessible

What does NOT change?
- [List continuing operations: e.g., farm stand, cafe hours, events]
- [Any existing community access that will be preserved]

What might change?
- [List honest possibilities: e.g., membership opportunities, new programs,
  possible price adjustments, governance structure]

What happens next?
- [Date of next listening session / community meeting]
- [How to sign up for updates]

This is an exploration. No decisions have been made. Your voice matters.

Contact: [Name] | [Email] | [Phone]
Website / mailing list: [URL]
\`\`\`

---

## Communications timeline

### Phase 1: Exploration
- Announce the exploration publicly within 2 weeks of the steering committee's first meeting
- Publish listening session dates
- Launch a simple email list or website
- Respond to all inquiries within 48 hours

### Phase 2: Formation
- Announce the decision to proceed (or not) with a clear rationale
- Introduce the CLT board and cooperative steering committee
- Share entity formation documents (summaries, not full legal text)
- Hold membership information sessions

### Phase 3: Financing
- Provide updates on fundraising progress (without revealing confidential lender terms)
- Celebrate milestones: seller financing secured, CDFI application submitted, first member shares sold
- Be honest about setbacks: "We applied to [CDFI] and they need us to improve our cash-flow projection. We are working on it."

### Phase 4: Closing
- Announce the closing date
- Introduce the formal cooperative board
- Hold a community celebration
- Share immediate priorities and open questions

### Phase 5: Ongoing
- Monthly or quarterly updates via email or newsletter
- Annual member meeting (open to members, summarized for community)
- Annual community report
- Annual listening session

---

## Managing rumors and conflict

### If rumors spread
- Address them quickly and publicly
- State what is true, what is false, and what is unknown
- Never blame individuals for spreading rumors; people fill information vacuums

### If community conflict emerges
- Acknowledge the conflict openly
- Offer a facilitated conversation (not a debate)
- Ensure that people who disagree feel heard, even if the group ultimately proceeds
- If a significant portion of the community opposes the project, pause and assess whether the opposition reflects a fatal flaw in the plan or a communication breakdown

### If the owner and the community have different timelines
- Be transparent about the owner's needs (e.g., "The owner needs to close by [date] for personal reasons")
- If the community needs more time, negotiate an extension or a bridge arrangement
- Never pressure the community to move faster than they are ready

---

## Digital tools

You do not need expensive tools. Use what the community already uses.

- **Email list**: Google Groups, Mailchimp (free tier), or a simple BCC list
- **Website**: A single page with contact info, meeting dates, and documents. WordPress, Wix, or a free GitHub Pages site work fine.
- **Documents**: Google Drive or Dropbox shared folder with public access to non-sensitive documents
- **Meetings**: In-person preferred for listening sessions. Zoom as backup for people who cannot attend.
- **Social media**: Use the farm's existing social media presence. If it does not have one, the cooperative should create one after formation.

---

## Sign-up form template

Use this to collect contact information and interests at listening sessions and online.

\`\`\`
NAME: ________________________________
EMAIL: ________________________________
PHONE: ________________________________
TOWN: ________________________________

I am interested in (check all that apply):
□ Attending listening sessions
□ Joining a working group (farm / cafe / events / governance / fundraising / communications)
□ Becoming a cooperative member when membership opens
□ Donating or investing
□ Volunteering
□ Receiving email updates only

Questions or concerns:
________________________________
________________________________

[Submit]
\`\`\`
`,
  },
  {
    id: '09-email-templates',
    label: '09 Email Templates',
    content: `# 09 — Email Templates

Ready-to-adapt emails for key moments in the transition process.

---

## To the owner: Initial outreach

**Subject:** Exploring a community ownership path for [the farm]

Dear [Owner Name],

I am writing to explore whether you would be open to a community ownership transition for [the farm]. A group of us who care about the farm's future — [farm workers / neighbors / regular customers / community members] — are interested in whether a community land trust + cooperative model could preserve the farm's mission, keep it affordable, and keep it in the community.

This model has been used successfully for farm transitions in Maine and across the Northeast. It typically involves:
- A community land trust purchasing and permanently holding the land
- A cooperative operating the farm and its businesses under a long-term lease
- The community sharing in governance and stewardship

This is an exploration, not a commitment. We understand you may have your own timeline, financial needs, and hopes for the property's future. We want to learn what matters to you.

Would you be open to a conversation? I am happy to meet at your convenience.

Thank you for your time and for everything you have built.

[Your Name]
[Your Role / Relationship to the Farm]
[Phone] | [Email]

---

## To the owner: Proposal and next steps

**Subject:** Community ownership exploration — draft plan and next steps

Hi [Owner Name],

Thank you for being open to exploring a community ownership path for [the farm]. As discussed, I have put together a short working plan that outlines how a land trust + cooperative structure could work, what the phases and timeline look like, and where we still need to resolve details.

Attached are:
- Farm Co-op Transition Plan — full working plan with templates and checklists
- Funder Brief — one-page overview for funders and lenders
- Member FAQ — plain-language FAQ for community members
- Community Session Handout — one-page handout for listening sessions

**High-level summary:**
- Proposed structure: a community land trust holds the land permanently; a multi-stakeholder cooperative operates the farm and related businesses under a long-term ground lease.
- Capital stack (target): seller financing (20–40%), CDFI loan(s), member/community capital, and grants/PRIs for pre-development and the land trust.
- Next 60–90 days: form a steering committee, complete a feasibility memo, engage CDI/CFNE/CEI for technical assistance, and resolve any ownership questions about auxiliary structures in writing before any purchase.

If you are comfortable, I would like to propose a 60–90 day non-binding exploration window so we can test feasibility, talk to lenders, and bring you a clear go/no-go recommendation with proposed terms. I am happy to walk through any part of this on a call.

Thank you again for considering this path.

[Your Name]
[Title/Role]
[Phone] | [Email]

---

## To community members: Launch announcement

**Subject:** [The farm]'s future — community ownership exploration

Dear neighbors and friends,

[The farm] is at a crossroads. The current owner plans to sell, and a group of us is exploring a community land trust + cooperative ownership model to keep the farm affordable, mission-driven, and locally governed.

**What this means:**
- The land would be owned permanently by a community trust
- The farm and its businesses would be run by a cooperative (democratic, local)
- The community would have a voice in stewardship and operations

**What this does NOT mean (yet):**
- No decisions have been made
- We are not asking for money right now
- We are not promising anything we cannot guarantee

**What happens next:**
We are holding listening sessions to hear from the community. This is your chance to ask questions, share concerns, and tell us what you value about [the farm].

- [Date, time, location of first listening session]
- [Date, time, location of second listening session]
- Sign up for updates: [email list or website]

Your voice matters. Whether you are a regular customer, a neighbor, a former worker, or someone who has never visited, we want to hear from you.

Looking forward to seeing you there.

[Name]
[Role, e.g., Steering Committee Member]
[Contact info]

---

## To funders / CDFIs

**Subject:** Community land trust + cooperative farm transition in [County], Maine

Dear [Funder Name],

I am writing on behalf of a group exploring the community ownership transition of [the farm], a [medicinal herb / diversified vegetable / livestock / pick-your-own] farm with [cafe / apothecary], cultural programming, and [housing / community amenities] in [County], Maine.

We are pursuing a community land trust + cooperative structure:
- A CLT or mission-aligned nonprofit would purchase and permanently hold the land
- A multi-stakeholder cooperative would operate the farm and its businesses under a 99-year ground lease
- The model prioritizes permanent affordability, democratic governance, and local wealth retention

**Funding needs:**
- Pre-development / technical assistance grants for feasibility, legal formation, and governance setup
- Patient capital (PRIs or low-interest loans) for the CLT landholder and/or cooperative operator
- Gap financing tied to community benefit

**Why this fits [funder's mission]:**
[Customize: e.g., "CFNE's focus on cooperative lending," "CEI's farm and food systems work," "Maine Farmland Trust's commitment to land access"]

I would welcome the opportunity to discuss this project and learn about your application process. I have attached a one-page funder brief and am happy to provide additional materials on request.

Thank you for your work supporting durable community ownership.

[Your Name]
[Title/Role]
[Phone] | [Email]
[Project website, if available]

---

## To professionals (attorney, accountant, consultant)

**Subject:** Seeking [legal / accounting / governance] support for a Maine farm CLT + cooperative

Dear [Name],

I am part of a group exploring the transition of [the farm] in [County], Maine to community land trust + cooperative ownership. We are seeking [legal / accounting / consulting] support and were referred to you by [referral source, if any].

**Project status:**
- [Phase: e.g., early exploration / feasibility / formation / financing]
- [Key details: e.g., purchase price approximately \$XXX,000, 4-person steering committee, owner open to seller financing]

**Services needed:**
[Customize: e.g., "Cooperative and nonprofit formation," "CDFI loan application support," "Ground lease drafting," "Tax structuring for a cooperative with limited-equity shares"]

**Timeline:**
[Desired start date and any hard deadlines]

We are a volunteer-driven group with limited funds. If you offer sliding-scale rates, pro bono work, or payment plans for community projects, we would be grateful. We are also happy to apply for grants that cover professional fees.

Thank you for considering this request. I am available for a call at your convenience.

[Your Name]
[Role]
[Phone] | [Email]

---

## To members: Membership opens

**Subject:** Membership is now open for [Farm Cooperative Name]

Dear [Name],

Thank you for your patience and support during the formation of [Farm Cooperative Name]. We are now opening membership.

**What membership means:**
- One vote in cooperative elections and major decisions
- A share of any surplus distributed as patronage (not guaranteed)
- The ability to serve on the board and working groups
- Access to member meetings and financial reports

**Membership share:** \$[amount] (sliding scale / payment plan available)

**What membership does NOT mean:**
- Ownership of land or buildings — the CLT holds the land in trust
- Guaranteed financial return — this is stewardship, not investment
- A job — employment is separate from membership

**How to join:**
1. Complete the membership application: [link or form]
2. Attend a membership orientation session: [dates]
3. Pay your membership share (or arrange a payment plan)
4. Sign the membership agreement

**Next orientation sessions:**
- [Date, time, location / Zoom link]
- [Date, time, location / Zoom link]

We are building something together. Your voice matters.

[Name]
[Board President / Membership Coordinator]
[Contact info]

---

## To the community: Annual report excerpt

**Subject:** [Farm name] — year one community report

Dear neighbors,

[Farm name] has completed its first year of community ownership. Here is what we have done together:

**By the numbers:**
- [X] cooperative members
- [X] acres cultivated
- [X] pounds of food distributed
- [X] events hosted
- [X] people employed
- [X] dollars in local purchasing

**Major accomplishments:**
- [e.g., "Launched the farm share program"]
- [e.g., "Completed barn roof repairs"]
- [e.g., "Hosted 12 community gatherings"]

**Challenges:**
- [e.g., "We underestimated winter heating costs and are addressing insulation"]
- [e.g., "We need more members to break even next year"]

**This year:**
- [Top 3 priorities]

**Listening session:**
[Date, time, location] — come tell us what you think.

Thank you for being part of this.

[Name]
[Board President]
[Contact info]
`,
  },
  {
    id: '10-auxiliary-structures',
    label: '10 Auxiliary Structures',
    content: `# 10 — Auxiliary Structures

How to handle existing structures — saunas, outbuildings, shared equipment, and amenities — whose ownership or operating rights are unclear.

---

## The problem

Many farms have structures that were built informally: a community sauna, a shared workshop, a neighbor's shed, a borrowed tractor, a leased solar array. These arrangements often worked because the owner was the owner, and informal trust was enough. When the land transfers to a CLT and operations transfer to a cooperative, informality becomes liability.

The rule: **Every structure, asset, and arrangement connected to the farm must be documented in writing before closing.**

If it is not documented, assume it is a problem.

---

## Inventory

Create a master list of every structure and asset that is not obviously owned by the seller or clearly part of the purchase:

| Structure / Asset | Location | Current user | Who paid to build it? | Who maintains it? | Utilities? | Insurance? | Documented? |
|---|---|---|---|---|---|---|---|
| Community sauna | Near pond | Community | Unknown / owner + volunteers | Volunteers | Wood stove, no electric | None | No |
| Shared tractor | Barn | Neighbor (Bill) | Bill | Bill | N/A | On Bill's policy | Handshake |
| Yurt platform | North field | Event coordinator | Owner | Volunteers | None | None | No |
| Cob oven | Near cafe | Cafe staff | Owner + volunteers | Volunteers | None | None | No |

For each item that is undocumented, choose one of the resolutions below.

---

## Resolution options

### Option A: Include in the purchase

The structure is treated as part of the real estate and transfers with the land.

- **When to use**: The owner built it, paid for it, and wants to sell it.
- **Action**: Include it in the purchase agreement. Ensure it is covered by the appraisal. Document any transferable warranties or manuals.
- **Risk**: If the structure was built without permits or does not meet code, the new owner inherits the liability.

### Option B: License or lease agreement

The current user retains ownership but gets a formal right to use the land and structure.

- **When to use**: A neighbor or community member built the structure and wants to keep using it, or the owner wants to retain personal use of a specific asset.
- **Action**: Draft a license or lease that specifies: duration, permitted uses, maintenance responsibilities, insurance requirements, utility responsibilities, access rights, and termination conditions.
- **Key terms**:
  - **License** = revocable, short-term, less formal. Use for simple, low-value arrangements.
  - **Lease** = longer-term, more formal, harder to terminate. Use for significant structures or investments.
- **Risk**: A poorly drafted agreement can create a tenancy or prescriptive rights. Have an attorney review.

### Option C: Separate cooperative or entity

The structure is owned and operated by its own cooperative, corporation, or association, which leases the land from the farm cooperative or the CLT.

- **When to use**: A structure has its own community of users, revenue model, or governance needs (e.g., a sauna co-op with 20 regular members and its own fee structure).
- **Action**:
  1. Form a separate entity (cooperative, nonprofit, or LLC)
  2. The entity purchases or receives ownership of the structure
  3. The entity leases the land under the structure from the farm cooperative or CLT
  4. The entity manages its own membership, fees, maintenance, and insurance
- **Benefit**: Limits liability. Gives users democratic control. Simplifies accounting.
- **Risk**: Adds complexity. Requires separate governance, bookkeeping, and tax compliance.

### Option D: Remove or decommission

The structure is demolished, relocated, or left to decay.

- **When to use**: The structure is unsafe, unwanted by the new owners, or its ownership is so disputed that no resolution is possible.
- **Action**: Obtain written agreement from anyone with a claim. Hire a contractor for removal. Document before-and-after condition.
- **Risk**: Emotional conflict if the structure has community meaning. Never remove something without notice and a chance for the community to respond.

---

## Sauna-specific considerations

Saunas are common on Maine farms and often built informally. They carry distinct risks:

### Building and zoning
- Was the sauna built with proper permits?
- Does it meet setback requirements?
- If it has a wood stove, was the stove permitted and inspected?
- If it has electrical or plumbing, were permits pulled?
- If it is near water, does it comply with shoreland zoning?

### Liability
- Saunas involve heat, water, and slippery surfaces. Injury risk is real.
- General liability insurance must explicitly cover sauna use.
- Consider requiring signed liability waivers for users, especially if the sauna is open to the public or unaccompanied guests.

### Ownership and access
- Who owns the sauna structure itself?
- Who owns the stove, benches, and accessories?
- Who has keys or access?
- Is there a fee to use it? Who collects the fee?
- What are the hours of use?
- Who is responsible for cleaning, restocking wood, and maintenance?

### Utilities
- Who pays for electricity, water, or wood?
- Is the sauna on a separate meter?
- If wood is harvested from the property, who manages that resource?

### Resolution path

1. **Inventory** the sauna's physical components, permits, and current arrangements
2. **Survey** the regular users: what do they want? Are they willing to pay? To serve on a board?
3. **Choose a resolution**: include, license/lease, separate co-op, or remove
4. **Document the agreement** in writing before closing
5. **Obtain proper insurance** and post clear use rules

---

## Shared equipment and tools

### Rules of thumb
- If equipment is essential to farm operations, it should be owned by the farm cooperative or clearly leased with a maintenance agreement.
- If equipment is personally owned by a worker or neighbor, document the loan or lease.
- Create an equipment inventory with: owner, value, condition, maintenance schedule, and replacement plan.

### Sample equipment loan agreement

\`\`\`
EQUIPMENT LOAN AGREEMENT

Owner: [Name]
Borrower: [Farm Cooperative Name]
Equipment: [Description, make, model, serial number]
Loan period: [Start date] to [End date] or ongoing with 30-day notice
Maintenance: Borrower is responsible for routine maintenance (oil, filters, cleaning).
              Owner is responsible for major repairs.
Insurance: Borrower will list the equipment on its property insurance policy.
Return: Equipment will be returned in the same condition, normal wear excepted.
Termination: Either party may terminate with 30 days' written notice.

Signed: _________________ Date: _________ (Owner)
Signed: _________________ Date: _________ (Borrower)
\`\`\`

---

## Documentation checklist

Before closing, every auxiliary structure should have:

- [ ] A clear statement of who owns it
- [ ] A written agreement (purchase, lease, license, or removal) signed by all parties
- [ ] Proof of permits and inspections (if required)
- [ ] Insurance coverage documented
- [ ] Utility responsibilities assigned
- [ ] Maintenance and repair responsibilities assigned
- [ ] A dispute resolution clause
- [ ] Access rules (who can use it, when, under what conditions)
- [ ] A liability waiver (if appropriate)

---

## Sample site lease for auxiliary structure

\`\`\`
SITE LEASE AGREEMENT

Landlord: [CLT or Farm Cooperative Name]
Tenant: [Separate entity or individual name]
Property: [Address and description of land under the structure]
Structure: [Description of the structure]

Term: [99 years / 50 years / 10 years, renewable], commencing [date]
Rent: \$[amount] per year, adjusted every [5] years by [CPI / fixed %]
Permitted use: [Specific use, e.g., "community sauna and wellness space"]

Maintenance: Tenant is responsible for all maintenance, repairs, and improvements.
Utilities: Tenant pays all utility costs.
Insurance: Tenant will maintain general liability insurance of at least \$1,000,000 per occurrence.
Access: Tenant may use [specific roads / paths] for access. Hours of operation: [times].
Compliance: Tenant will comply with all applicable laws, codes, and permits.
Assignment: Tenant may not assign or sublease without Landlord's written consent.
Default: If Tenant fails to pay rent or maintain insurance for 30 days, Landlord may terminate.

Signed: _________________ Date: _________ (Landlord)
Signed: _________________ Date: _________ (Tenant)
\`\`\`

**Have an attorney review and adapt this template for your specific situation.**
`,
  },
  {
   id: '11-maine-clt-deep-dive',
   label: '11 Maine CLT Deep Dive',
   content: `# 11 — Community Land Trusts Under Maine Law: A Deep Dive

  ## Why this matters

  A community land trust is not just a feel-good structure. It is a specific legal entity that interacts with Maine property law, tax law, and nonprofit regulation in ways that differ materially from a conventional LLC, corporation, or simple nonprofit. This document explains the legal mechanics of CLTs in Maine, why they protect land better than an LLC, and where the risks are.

  ---

  ## What a CLT actually is

  Under the standard definition used in the United States, a community land trust is a nonprofit corporation (typically 501(c)(3)) that owns land in perpetuity and leases it to individuals, cooperatives, or other entities through a long-term ground lease. The lease typically runs 99 years, includes resale restrictions, and requires the land to be used for community benefit.

  Maine does not have a specific CLT statute. CLTs in Maine are formed as **nonprofit corporations under 13-B M.R.S. § 301 et seq.** and may seek **federal 501(c)(3) tax exemption** under IRC § 501. There is no separate Maine CLT registration process, which means the CLT's legal protections come from its corporate structure, its ground lease, and its IRS designation — not from a specific state enabling law.

  This is both a strength and a limitation. The CLT's permanence is contractual (the ground lease) and structural (the nonprofit mission), not statutory. Maine CLTs need to be more deliberate in their documents because there is no state-level regulatory backstop.

  ---

  ## Land protection: why a CLT outperforms an LLC

  ### 1. Perpetuity without profit motive

  An LLC exists to generate returns for its members. Under Maine LLC law (31 M.R.S. § 621 et seq.), members can vote to dissolve the entity, sell its assets, and distribute proceeds. There is no structural barrier to liquidation. A well-capitalized LLC can be bought out by any member or outside investor with sufficient votes.

  A CLT, by contrast, is a nonprofit with an asset-lock. Under 13-B M.R.S. § 714, upon dissolution of a Maine nonprofit corporation, assets must be distributed to another nonprofit with a similar charitable purpose. The CLT's land cannot be sold for private profit. The board cannot vote to cash out. The members do not own equity in the land. This is structural permanence, not goodwill.

  ### 2. Resale restrictions that bind successors

  An LLC can place transfer restrictions in its operating agreement, but these restrictions only bind the members who sign them. New members must be bound by signing, and a court can set aside unreasonable restraints on alienation. In Maine, excessive restrictions on property transfer may be unenforceable under common law principles.

  A CLT ground lease, by contrast, binds all successors because the lease runs with the land. When the cooperative transfers its leasehold interest, the new lessee takes the property subject to the same resale formula, use restrictions, and community benefit requirements. The restriction is inscribed in the lease agreement recorded in the county registry of deeds (14 M.R.S. § 4501 et seq.), giving constructive notice to all future parties.

  ### 3. Community accountability, not just member accountability

  An LLC is accountable to its members. If the members want to raise rents, sell the land, or change the business model, they can do so by majority vote (subject to the operating agreement). There is no requirement to consider neighbors, eaters, the broader community, or future generations.

  A CLT board under IRS rules must include **at least one-third community representatives** — people who are neither leaseholders nor immediate family of leaseholders. This means the community has a structural voice in whether the land is sold, repurposed, or refinanced. In practice, Maine CLTs often go further, reserving majority board seats for community members or operating under consensus.

  ---

  ## Tax implications

  ### Property tax

  Maine assesses property tax at the municipal level. A nonprofit corporation that owns land and uses it for charitable purposes may qualify for **property tax exemption** under 36 M.R.S. § 652. The standard is that the property is "actually and regularly used for the purposes for which the institution was established."

  However, **ownership by a 501(c)(3) does not automatically mean exemption.** The CLT must apply for exemption with the municipal assessor. The application typically requires:
  - Proof of 501(c)(3) status (IRS determination letter)
  - Description of charitable use (affordable agriculture, community food access, etc.)
  - Financial statements showing no private inurement
  - Evidence that the land is actively used for the stated purpose

  **Farm land used for commercial agriculture** (even by a nonprofit) may still be taxable if revenue exceeds the threshold for purely charitable use. Many Maine CLTs pay property tax on the portion of the farm that generates commercial revenue and seek exemption only for community-use portions (housing, conservation, gathering spaces). This is fact-specific and requires municipal counsel.

  The leaseholder (cooperative) typically pays property tax as part of the lease payment, or pays it directly if the lease so provides. The ground lease should explicitly state who bears the property tax burden.

  ### Federal income tax

  A 501(c)(3) CLT is exempt from federal income tax on revenue related to its charitable purpose. Rental income from a ground lease may be taxable as **unrelated business income** (UBI) if the lease is structured as a commercial arrangement rather than a mission-aligned subsidy.

  The IRS looks at several factors:
  - Whether the lease rate is below market (favoring exempt status)
  - Whether the lease requires continued charitable use
  - Whether the CLT actively participates in management or is a passive landlord

  Most Maine farm CLTs set lease payments at a level that covers CLT operating expenses (insurance, property tax, board costs, reserve) rather than generating profit. This positions the lease as furthering the charitable purpose rather than as a commercial rental.

  ### Sales and use tax

  Maine imposes sales tax on certain goods and services. Farm equipment, seeds, and agricultural inputs are generally exempt under 36 M.R.S. § 1760. The CLT itself does not typically sell goods (the cooperative does), so sales tax is primarily a cooperative compliance issue. The CLT should confirm in the ground lease that the cooperative is responsible for its own tax compliance.

  ### Transfer tax

  Maine imposes a **real estate transfer tax** of $2.20 per $500 of value (or fraction) on transfers of real estate (36 M.R.S. § 4641). A ground lease is generally not a transfer of real estate, so the initial lease execution does not trigger transfer tax. However, if the lease itself is assigned or the cooperative sells its leasehold interest, transfer tax may apply depending on how the assignment is structured.

  Warranty deeds from the seller to the CLT at closing **do** trigger transfer tax. The purchase and sale agreement should specify who pays it.

  ---

  ## Land use: what a CLT can and cannot control

  ### Zoning

  CLTs do not override municipal zoning. If the farm is in a town with agricultural zoning, the CLT can continue agricultural use. If the town has restrictive zoning (e.g., no commercial activity, no events, no multi-unit housing), the CLT and cooperative must comply or seek variance.

  Maine's **Right to Farm law** (7 M.R.S. § 10) protects agricultural operations from nuisance claims to a degree, but it does not override zoning. The CLT's ground lease should include a covenant that the lessee will comply with all applicable zoning and land use regulations.

  ### Conservation easements

  Some Maine CLTs hold conservation easements in addition to fee ownership. A conservation easement is a permanent, legally enforceable restriction on land use that is recorded on the deed and binds all successors. Under Maine law (33 M.R.S. § 476 et seq.), conservation easements are valid and enforceable.

  A CLT can add a conservation easement to its own land as an additional layer of protection. For example, the CLT could hold fee title and grant a conservation easement to a land trust (e.g., Maine Farmland Trust) that restricts development in perpetuity. This means even if the CLT dissolved and transferred its assets, the easement would remain.

  ### Water rights

  In Maine, riparian rights attach to land ownership. If the farm has frontage on a lake, river, or tidal area, the CLT as owner holds those rights. The ground lease should specify whether the cooperative's riparian rights are included or reserved. Wells and water withdrawals are regulated by the Maine Department of Environmental Protection for high-volume uses. Most farm wells are exempt, but the CLT should confirm that the cooperative has legal access to existing water sources.

  ### Shoreland zoning

  Maine's Mandatory Shoreland Zoning Act (38 M.R.S. § 435 et seq.) imposes buffers and restrictions on development within 250 feet of water bodies and 75 feet of streams. Farm structures that pre-date shoreland zoning may be grandfathered, but new construction must comply. The CLT should verify whether the farm has any shoreland frontage and whether existing structures are compliant.

  ---

  ## Sharing principles and governance

  ### One member, one vote

  Unlike an LLC (where voting power is proportional to capital contribution) or a corporation (where voting power is proportional to shares), a CLT operates on democratic principles. The standard is one member, one vote. This is required by IRS rules for 501(c)(3) organizations that provide housing or community services: no member can have more than one vote regardless of contribution.

  For a Maine farm CLT, this means:
  - The farmer-owners of the cooperative get one vote each in the cooperative
  - Community members of the CLT get one vote each in the CLT
  - No investor can buy control
  - No founder can retain veto power indefinitely

  This is not a bug. It is the feature that makes the model democratic.

  ### Limited equity, limited return

  CLT housing typically uses a resale formula that caps the seller's gain at a fixed percentage (e.g., 25% of the increase in the area median income, or simple cost-of-living adjustment). A farm CLT can apply the same logic to leasehold interests: if the cooperative wants to sell its business, the CLT ground lease may require that the sale price reflect only the value of improvements and business assets, not the appreciation of the land.

  This keeps the farm affordable for the next operator. It also means the cooperative's members should not expect land appreciation as part of their return. Their return is wages, patronage, and secure tenure.

  ### Transparency requirements

  As a 501(c)(3), the CLT must file **Form 990** annually with the IRS. This form is public. The CLT's board meeting minutes, budget, and financial statements should be available to members and the community. The cooperative similarly should share financial information with its members.

  The ground lease should specify minimum reporting requirements: annual audit or review, member access to books, and public disclosure of board decisions.

  ---

  ## CLT vs. LLC: a direct comparison

  | Factor | LLC | CLT + Cooperative |
  |---|---|---|
  | **Primary purpose** | Profit for members | Community benefit, land stewardship |
  | **Land ownership** | Members own equity | CLT owns land in trust; members own leasehold |
  | **Resale restrictions** | Voluntary, hard to enforce on successors | Built into ground lease; runs with land |
  | **Dissolution** | Members vote to liquidate and distribute proceeds | Assets transfer to similar nonprofit; no private benefit |
  | **Governance** | Proportional to investment | One member, one vote |
  | **Tax exemption** | Pass-through taxation only | 501(c)(3) status available; property tax exemption possible |
  | **Community voice** | None required | Mandatory 1/3 community board representation |
  | **Permanence** | Indefinite but revocable | Designed for perpetuity |
  | **Financing** | Standard commercial loans | CDFIs, PRI, grants, community capital, seller financing |
  | **Member equity** | Appreciates with land value | Capped; appreciation stays with community |
  | **Suitability for farms** | Works for commercial operations | Works when community stewardship is the goal |

  ### When an LLC still makes sense

  An LLC is the right structure when:
  - The primary goal is maximizing return on investment
  - The founders want the flexibility to sell, merge, or pivot
  - There is no community coalition seeking permanent stewardship
  - The land is not at risk of speculation or development pressure
  - The transaction is arms-length and conventional

  ### When a CLT is the better tool

  A CLT is the right structure when:
  - The land has community, ecological, or cultural value beyond its market price
  - The seller, neighbors, or funders want permanent affordability
  - There is a multi-generational vision, not a 5-year business plan
  - The farm could become housing or industrial agriculture if sold conventionally
  - Democratic governance is a goal, not an obstacle

  Many Maine farms face exactly the pressure that CLTs were designed to address: aging owners who care about legacy, rising land prices, and communities that do not want another estate subdivision.

  ---

  ## Legal risks specific to Maine CLTs

  ### 1. No state enabling statute

  Unlike Vermont, Massachusetts, or some other states, Maine has not enacted a specific CLT statute. This means the CLT's protections are purely contractual and federal (IRS rules). The ground lease must be exceptionally well-drafted because there is no state statute to fall back on. Engage an attorney with CLT experience, not just general nonprofit or real estate experience.

  ### 2. Municipal property tax disputes

  Assessors are not always familiar with CLTs. An assessor may incorrectly treat a 501(c)(3) CLT as a commercial landlord and deny exemption. The CLT should build relationships with municipal officials before applying for exemption, bring educational materials, and be prepared to appeal to the Board of Assessment Review (36 M.R.S. § 841).

  ### 3. Ground lease enforcement

  If the cooperative defaults on the ground lease, the CLT must enforce the lease through Maine's landlord-tenant or contract remedies. The ground lease should include:
  - Cure periods before default is declared
  - Specific notice requirements
  - Mediation or arbitration clause before litigation
  - Clear definition of what constitutes default (non-payment, non-compliance with use restrictions, failure to maintain)

  Do not assume the cooperative will always be a good tenant. Plan for conflict.

  ### 4. IRS scrutiny of 501(c)(3) status

  The IRS has in recent years increased scrutiny of 501(c)(3) applications. A CLT application should articulate clearly:
  - The charitable class served (low-income farmers, community members, etc.)
  - How the land use advances charitable purposes
  - Why the ground lease structure is necessary to the mission
  - Safeguards against private benefit or inurement

  Engage a nonprofit attorney or accountant with 501(c)(3) formation experience.

  ---

  ## Key statutes and resources

  | Topic | Statute / Resource |
  |---|---|
  | Maine nonprofit corporations | 13-B M.R.S. § 301 et seq. |
  | Maine LLCs | 31 M.R.S. § 621 et seq. |
  | Property tax exemption | 36 M.R.S. § 652 |
  | Real estate transfer tax | 36 M.R.S. § 4641 |
  | Recording deeds and leases | 14 M.R.S. § 4501 et seq. |
  | Conservation easements | 33 M.R.S. § 476 et seq. |
  | Shoreland zoning | 38 M.R.S. § 435 et seq. |
  | Right to Farm | 7 M.R.S. § 10 |
  | IRS 501(c)(3) requirements | IRC § 501; IRS Pub 557 |
  | Maine CDFIs | CFNE, CEI, Genesis Community Loan Fund |
  | Legal assistance | Pine Tree Legal Assistance; Volunteer Lawyers Project |

  ---

  ## Bottom line

  A CLT is not a fancier LLC. It is a different legal animal with different rules, risks, and rewards. The extra complexity is worthwhile when the goal is permanent land protection, democratic governance, and community benefit. If the goal is simply to buy a farm and run a business, use an LLC. If the goal is to ensure that farm feeds the community for the next hundred years, use a CLT.
  `,
  },
  ];

  export const TEMPLATES: PlaybookDoc[] = [
  {
    id: 'capital-stack-worksheet',
    label: 'Capital Stack Worksheet',
    content: `# Capital Stack Worksheet — [Farm Name]

Fill in this worksheet to model your financing. Be conservative.

---

## Purchase and project costs

| Line item | Amount | Notes |
|---|---|---|
| Purchase price | \$ | Agreed price or best estimate |
| Closing costs (2–5%) | \$ | Legal, title, recording |
| Appraisal | \$ | |
| Survey | \$ | |
| Environmental assessment | \$ | Phase I if needed |
| Immediate repairs / deferred maintenance | \$ | Get contractor estimate + 30% buffer |
| Working capital reserve (3–6 months) | \$ | Core operating expenses |
| Entity formation and legal fees | \$ | Budget \$5,000–\$15,000 |
| Insurance (first year) | \$ | Obtain quotes |
| Other: _________________ | \$ | |
| **Total project cost** | \$ | |

---

## Capital sources

| Source | Amount | % of total | Terms / notes | Secured by | Committed? | Date needed |
|---|---|---|---|---|---|---|
| Seller financing | \$ | | Interest: ___%; Term: ___ years | Mortgage on property | Yes / No / Pending | |
| CDFI loan 1 (senior) | \$ | | Lender: ___; Rate: ___%; Term: ___ years | Mortgage + UCC | Yes / No / Pending | |
| CDFI loan 2 (subordinate) | \$ | | Lender: ___; Rate: ___%; Term: ___ years | Subordinate mortgage | Yes / No / Pending | |
| Member shares | \$ | | Share price: \$___; Target members: ___ | None | Yes / No / Pending | |
| Community notes / donations | \$ | | | None | Yes / No / Pending | |
| Grants | \$ | | Funder: ___; Purpose: ___ | None | Yes / No / Pending | |
| PRIs | \$ | | Funder: ___; Rate: ___% | None or subordinate | Yes / No / Pending | |
| Other | \$ | | | | Yes / No / Pending | |
| **Total capital** | \$ | | | | | |
| **Gap or surplus** | \$ | | Gap = need more; Surplus = excess | | | |

---

## Debt service coverage

This is the ratio lenders care about most: can the cooperative make its loan payments?

**Annual debt service** (principal + interest on all loans): \$________

**Projected annual net operating income** (revenue minus operating expenses, before debt service): \$________

**Debt service coverage ratio (DSCR)** = Net operating income ÷ Annual debt service = ________

Lenders typically want DSCR ≥ 1.15x. Aim for 1.25x or higher to be safe.

---

## Cash-flow stress test

| Scenario | Year 1 revenue | Year 1 expenses | Net income | Can we pay debt? |
|---|---|---|---|---|
| Base case (as projected) | \$ | \$ | \$ | Yes / No |
| Stress case (-20% revenue, +15% expenses) | \$ | \$ | \$ | Yes / No |
| Disaster case (-40% revenue, major failure) | \$ | \$ | \$ | Yes / No |

If the stress case fails, the deal is too risky. Renegotiate or walk away.

---

## Lender conversation tracker

| Lender | Contact | Date contacted | Materials sent | Response | Next step |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
`,
  },
  {
    id: 'community-session-handout',
    label: 'Community Session Handout',
    content: `# Community Session Handout — [Farm Name]

Print this one-page handout for listening sessions, farmers markets, and community postings.

---

# COMMUNITY OWNERSHIP EXPLORATION
## [Farm Name or Working Name]

### What is happening?
The current owner plans to sell. A group of community members is exploring a community land trust + cooperative model to keep the farm affordable, mission-driven, and locally governed.

### What does that mean?
- **Land** would be owned permanently by a community trust (no speculation)
- **Farm operations** would be run by a cooperative (democratic, local)
- **Housing and community spaces** would remain accessible

### What does NOT change?
- [List continuing operations]
- [Any existing community access that will be preserved]

### What might change?
- [List honest possibilities: membership opportunities, new programs, possible price adjustments, governance structure]

### What happens next?
- **Next listening session:** [Date, time, location]
- **Sign up for updates:** [Email list or website]

---

This is an **exploration**. No decisions have been made. Your voice matters.

**Contact:** [Name] | [Email] | [Phone]
**Website / mailing list:** [URL]
`,
  },
  {
    id: 'funder-brief-blank',
    label: 'Funder Brief Blank',
    content: `# Funder Brief — [Farm Name]

Adapt this template by filling in the bracketed sections.

---

## Community Land Trust + Cooperative Acquisition of a Maine Farm

### Overview

[The farm] is a [describe farm type: e.g., medicinal herb and diversified vegetable] farm with onsite [cafe / apothecary / farm store], cultural programming space, [list amenities], parking, and [housing description] in [County], Maine.

The current owner is willing to sell; the discussed price is approximately \$[XXX,000].

The surrounding community has strong goodwill; [key operator] is convening a transition process to preserve the farm's mission, affordability, and community access.

### Proposed Structure

- **Land**: Held permanently by a community land trust (CLT) or land-back-aligned nonprofit to remove land from speculation and preserve affordability and stewardship.
- **Operations**: A multi-stakeholder cooperative operates the farm, [cafe / apothecary], events, and related improvements under a long-term ground lease.
- **Housing**: Documented occupancy via CLT home lease or a small housing co-op.
- **Auxiliary structures**: Ownership and operating rights for [sauna / shared amenities / outbuildings] to be resolved via purchase, license/lease, or separate cooperative before closing.

### Capital Stack (Target)

| Source | Share | Notes |
|---|---|---|
| Seller financing | 20–40% | Amortized over 5–10+ years |
| CDFI loan(s) | 30–50% | Senior or subordinate debt sized to cash flow |
| Member / community capital | 5–15% | Limited-equity member shares; community notes or donations where lawful |
| Grants / PRIs | 5–15% | Pre-development, technical assistance, mission-aligned investment |

Likely CDFI partners: CFNE, CEI, Genesis Community Loan Fund.

### Use of Funds

1. Acquisition of land and improvements: \$[XXX,000]
2. Closing, legal, title, appraisal, survey, and environmental costs: \$[XX,000]
3. Immediate repairs, deferred maintenance, and working capital / operating reserves: \$[XX,000]
4. Entity formation, governance setup, and initial compliance: \$[X,000]

### Community Benefits

- Permanent affordability and non-speculative land stewardship via CLT
- Local jobs, fair labor practices, and worker voice through cooperative governance
- Continued community access to farm products, [cafe / apothecary], cultural events, and wellness offerings
- Ecological stewardship through [permaculture / regenerative / organic] practices maintained under community governance
- Potential for Wabanaki-informed stewardship and relationship-building, only if co-created with consent

### Funding Needs & Fit

- Technical assistance and pre-development grants to support feasibility, legal, and governance work
- Patient capital (PRIs / low-interest loans) for the CLT landholder and/or cooperative operator
- Gap financing tied to job creation or community benefit, where available
- Funders seeking durable community ownership, food systems, cultural resilience, and climate-aligned land use

### Next Steps

1. Complete feasibility memo and capital-stack worksheet with conservative cash-flow assumptions
2. Engage CDI, CFNE, CMBA, Land in Common, and Maine Farmland Trust for technical assistance and referrals
3. Resolve auxiliary structure ownership / operating rights in writing before closing
4. Obtain lender / partner commitments and negotiate purchase-and-sale terms, including seller financing where available

### Contact

[Name] | [Title/Role]
[Phone] | [Email]
[Farm website or project page]
`,
  },
  {
    id: 'member-faq-blank',
    label: 'Member Faq Blank',
    content: `# Member FAQ — [Farm Name]

Adapt this template by filling in the bracketed sections.

---

## What is happening?

The current owner wants to sell the farm, [cafe / apothecary], and related community assets. A group of operators and community members is exploring a community-ownership model so the place can remain affordable, mission-aligned, and locally stewarded.

## What is the proposed ownership model?

- **Land** would be held permanently by a community land trust (CLT) or similar nonprofit, removing it from speculation.
- **A cooperative** would operate the farm, [cafe / apothecary], events, and related improvements under a long-term ground lease.
- **Housing** would have documented occupancy via a CLT lease or a small housing co-op.
- **[Auxiliary structures]** ownership and operating rights will be resolved in writing before any purchase.

## Why a land trust and cooperative?

- This structure keeps land permanently affordable and community-governed while giving operators secure tenure and clear responsibilities.
- It aligns with Maine's cooperative tradition and the community's values around stewardship, fair work, and long-term resilience.
- CDFIs and mission-aligned funders are familiar with this model in Maine and the Northeast.

## How can I participate?

- Attend open information sessions and listening gatherings.
- Join a working group (farm, [cafe], events, governance, fundraising, communications) if you have time and skills.
- Express non-binding interest in membership when the cooperative opens its membership process.
- Support through donations or spreading the word, where appropriate.

## What does membership mean?

- Members have a voice in major cooperative decisions (e.g., electing the board, approving major changes).
- Members typically contribute a share (often with sliding-scale or payment-plan options).
- Membership is not a guarantee of profit, property ownership, or specific access rights. Details will be in the bylaws and membership agreement.

## Is this an investment? Will I get financial returns?

Not in the conventional sense. Member shares are typically limited-equity and focused on stewardship, not profit. Any patronage or surplus distribution would follow cooperative rules and legal constraints. Do not expect market-rate financial returns. This is primarily a community-stewardship model.

## What are the main risks?

- **Financing risk**: The deal must be affordable under conservative cash-flow assumptions. If the group cannot secure enough financing, the deal will not close.
- **Operational risk**: Seasonality, staffing, and maintenance needs can strain cash flow.
- **Legal / permit risk**: Zoning, food service, events, [sauna], septic, well, and housing compliance must all be resolved.
- **Governance risk**: Volunteer capacity and decision-making overload can burn people out if the structure is not clear.

## What is the timeline?

| Phase | Duration |
|---|---|
| Exploration and feasibility | 4–8 weeks |
| Structure, financing, and legal formation | 8–12+ weeks |
| Closing and transition | Depends on due diligence, lender processes, and seller cooperation |

## How will decisions be made?

- A small steering committee is guiding the exploration phase.
- If the cooperative forms, members will have democratic input (e.g., one member, one vote or another agreed democratic formula).
- The CLT would have its own board and governance process focused on land stewardship and affordability.

## What about [the sauna / auxiliary structures]?

Ownership, utilities, insurance, access, and removal rights must be documented before closing. Options include cooperative purchase, a license/lease with the current owner, or a separate cooperative with a site lease.

## Will the farm, [cafe], and events continue?

The goal is continuity and strengthening of core offerings: farm products, [cafe / apothecary], [yoga / cultural events], and community gatherings. Specific programming will depend on member priorities, staffing, and finances.

## How can I stay informed?

- Sign up for updates via the contact form or email list when available.
- Attend scheduled community sessions and check posted minutes/summaries.
- Contact the steering committee with questions. Avoid sharing unconfirmed details as fact.

## What if this doesn't work out?

That is a real possibility, and it would not be a failure. If the group determines that the deal is not financially viable, the governance is not ready, or the community is not aligned, the right choice is to walk away cleanly. We will communicate honestly at every step.

## I have more questions. Who do I contact?

[Name] | [Email] | [Phone]
[Project website or mailing list signup]
`,
  },
  {
    id: 'steering-committee-charter',
    label: 'Steering Committee Charter',
    content: `# Steering Committee Charter — [Farm Name]

Adapt and adopt this charter at your first steering committee meeting.

---

## Purpose

The steering committee guides the exploration and formation of a community land trust + cooperative ownership transition for [the farm]. The committee makes recommendations, not binding decisions, until formal entities are created.

## Membership

- **Size**: 3–7 members
- **Qualities sought**:
  - At least one person with financial literacy
  - At least one person with community relationships and communication skills
  - At least one person with operations or farm business experience
  - Diversity of age, background, gender, and role in the community
- **Current members**:
  1. [Name] — [Role / expertise]
  2. [Name] — [Role / expertise]
  3. [Name] — [Role / expertise]
  4. [Name] — [Role / expertise]
  5. [Name] — [Role / expertise]

## Term

Steering committee members serve until the cooperative and CLT are formally established and boards are elected. Expected duration: 6–12 months.

## Decision-making

- Consensus is the goal.
- If consensus cannot be reached after 2 meetings of discussion, the committee votes.
- Each member has one vote.
- Decisions are documented in writing and shared with the broader community within 48 hours.
- Meetings require [50]% of members present for a quorum.

## Responsibilities

- [ ] Convene community listening sessions
- [ ] Manage communications and answer public questions
- [ ] Coordinate feasibility analysis
- [ ] Engage legal, accounting, and funder relationships
- [ ] Make a formal go/no-go recommendation at the end of Phase 1

## Limitations

- The steering committee **cannot** commit the group to a purchase.
- The steering committee **cannot** borrow money or sign contracts on behalf of future entities.
- The steering committee **cannot** make promises about jobs, housing, or financial returns to individuals.

## Meeting rhythm

- Phase 1 (Exploration): Weekly
- Phase 2 (Formation): Biweekly
- Phase 3 (Financing): As needed

## Communication

- Meeting summaries are posted publicly within 48 hours
- All members respond to community inquiries within 48 hours
- Disagreements within the committee are not aired publicly

## Adoption

This charter was adopted by unanimous vote on [date].

Signed:

_________________________ Date: _________
_________________________ Date: _________
_________________________ Date: _________
_________________________ Date: _________
_________________________ Date: _________
`,
  },
];
