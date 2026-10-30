"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/Sidebar";
import { PHASES } from "@/content/docs";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Lightbulb,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

// Inline task checklists per sub-path
interface SubPathTask {
  text: string;
  done: boolean;
}

interface SubPath {
  id: string;
  title: string;
  duration: string;
  description: string;
  tasks: string[];
  tips: string[];
  docLink?: { label: string; id: string };
}

const PHASE_SUBPATHS: Record<string, SubPath[]> = {
  "phase-1": [
    {
      id: "p1-explore",
      title: "Explore the model",
      duration: "Week 1-2",
      description:
        "Before anyone writes a check or files a form, understand what a CLT + cooperative actually means. Read the overview. Ask the hard questions.",
      tasks: [
        "Read the core principles of CLT + cooperative ownership",
        "Can the land be separated from the business?",
        "Who would serve on a steering committee?",
        "Is the farm owner genuinely open to selling?",
      ],
      tips: [
        "Do not skip this. Most failed transitions happen here — moving too fast before understanding what the model actually requires.",
        "Talk to at least two existing CLTs in Maine before forming opinions.",
      ],
      docLink: { label: "Maine CLT Deep Dive", id: "11-maine-clt-deep-dive" },
    },
    {
      id: "p1-committee",
      title: "Form a steering committee",
      duration: "Week 2-4",
      description:
        "Gather 3–7 committed people who represent the community. This is not a planning board — it is a group with authority to negotiate.",
      tasks: [
        "Identify 3–7 potential steering committee members",
        "Draft and sign steering committee charter",
        "Hold first meeting: define roles and ground rules",
        "Assign someone to research legal entity options",
      ],
      tips: [
        "Include at least one person with financial literacy and one with community organizing experience.",
        "The land does not need to be for sale today. Commitment is the test.",
      ],
      docLink: { label: "Steering Committee Charter", id: "steering-committee-charter" },
    },
    {
      id: "p1-listen",
      title: "Listen to the community",
      duration: "Week 3-6",
      description:
        "Farmers, neighbors, eaters, funders — everyone who cares about the land needs to be heard before a plan is shaped.",
      tasks: [
        "Host at least one community listening session",
        "Collect concerns, questions, and hopes in writing",
        "Publish a summary back to the community",
        "Identify whether there is majority support",
      ],
      tips: [
        "Listening sessions should not be sales pitches. Ask open questions. Take notes. Share results.",
        "If the community is not on board, this model will not work.",
      ],
      docLink: { label: "Community Engagement Guide", id: "08-community-engagement" },
    },
    {
      id: "p1-feasibility",
      title: "Draft the feasibility memo",
      duration: "Week 4-8",
      description:
        "A single-page document that answers: Is this financially realistic? Who will govern it? What do funders need to see?",
      tasks: [
        "Estimate the farm's value and plausible capital stack",
        "Identify potential lenders and CDFI partners",
        "Draft governance structure: CLT + co-op roles",
        "Create a simple financial projection",
      ],
      tips: [
        "This is not a business plan. It answers: Should we do this?",
        "Engage a CDFI early. They will tell you what is fundable.",
      ],
      docLink: { label: "Capital Stack Guide", id: "06-capital-stack-guide" },
    },
    {
      id: "p1-decision",
      title: "Decide: go or no-go",
      duration: "Week 8",
      description:
        "The steering committee votes. The community is informed. Everyone knows the next step — or the project pauses.",
      tasks: [
        "Steering committee votes on proceeding",
        "Communicate the decision publicly",
        "If yes: begin professional legal and financial planning",
        "If no: document lessons and thank participants",
      ],
      tips: [
        "A pause is not a failure. Forcing a transition that is not ready kills relationships.",
      ],
    },
  ],
  "phase-2": [
    {
      id: "p2-clt",
      title: "Form the CLT entity",
      duration: "Week 9-14",
      description:
        "A separate 501(c)(3) or equivalent nonprofit is the legal holder of the land. It never sells the land — it stewards it in trust.",
      tasks: [
        "Draft CLT bylaws with community representation baked in",
        "File for incorporation with the state of Maine",
        "Apply for 501(c)(3) status with the IRS",
        "Set up a board election process with one-seat-one-vote",
      ],
      tips: [
        "Most CLTs customize bylaws from an existing Maine CLT — do not start from scratch.",
        "IRS 501(c)(3) approval takes 2–6 months. File early if fundraising depends on it.",
      ],
      docLink: { label: "Legal Checklist (Maine)", id: "07-legal-checklist-maine" },
    },
    {
      id: "p2-coop",
      title: "Form the cooperative entity",
      duration: "Week 11-16",
      description:
        "The cooperative runs the farm business — operations, revenue, payroll. Members own the co-op, not the land.",
      tasks: [
        "Choose co-op type: consumer, producer, or worker",
        "Draft bylaws with democratic governance",
        "File articles of incorporation",
        "Set membership criteria and equity requirements",
      ],
      tips: [
        "Worker co-op is most common for active farm operations. Consumer co-ops work for CSA-style models.",
      ],
      docLink: { label: "Governance Templates", id: "05-governance-templates" },
    },
    {
      id: "p2-lease",
      title: "Negotiate the ground lease",
      duration: "Week 14-20",
      description:
        "The ground lease is the heart of the CLT model. It ties the cooperative to the land for 99 years while keeping the land in community hands.",
      tasks: [
        "Draft a ground lease with resale-restricted formula",
        "Set lease term: typically 99 years",
        "Define what happens if the co-op dissolves",
        "Both boards (CLT and co-op) review and approve",
      ],
      tips: [
        "Get a lawyer who has done CLT ground leases. This is not a standard commercial lease.",
      ],
      docLink: { label: "Legal Checklist (Maine)", id: "07-legal-checklist-maine" },
    },
    {
      id: "p2-membership",
      title: "Open the membership process",
      duration: "Week 18-24",
      description:
        "Membership in the cooperative is not a gift — it is an investment of money and labor. Set expectations clearly.",
      tasks: [
        "Set membership equity amount and payment plans",
        "Draft member rights and responsibilities",
        "Create a member application and orientation",
        "Host member info sessions",
      ],
      tips: [
        "Most Maine farm co-ops require $500–$5,000 in member equity. Payment plans make this accessible.",
      ],
      docLink: { label: "Member FAQ", id: "04-member-faq" },
    },
    {
      id: "p2-governance",
      title: "Set up governance protocols",
      duration: "Week 20-26",
      description:
        "Good governance is the difference between a thriving commons and a boardroom that empties in three years.",
      tasks: [
        "Define decision-making process (consensus? voting?)",
        "Create bylaws for both CLT and co-op",
        "Set meeting cadence and transparency rules",
        "Draft conflict-of-interest policy",
      ],
      tips: [
        "Write down what happens when people disagree. Most groups skip this and regret it.",
      ],
      docLink: { label: "Governance Templates", id: "05-governance-templates" },
    },
  ],
  "phase-3": [
    {
      id: "p3-capital",
      title: "Build the capital stack",
      duration: "Week 27-40",
      description:
        "Community ownership does not mean the farm is free. Loans, grants, member equity, and donated capital all have a role.",
      tasks: [
        "Calculate total project cost: land + building + transition",
        "Identify each funding source and its terms",
        "Approach CDFIs with a funder brief",
        "Launch the member equity campaign",
      ],
      tips: [
        "Cooperative Fund of New England is the primary Maine CDFI for this model. Start there.",
        "Do not over-leverage. Member equity is patient capital — use it before expensive loans.",
      ],
      docLink: { label: "Capital Stack Guide", id: "06-capital-stack-guide" },
    },
    {
      id: "p3-due-diligence",
      title: "Complete due diligence",
      duration: "Week 35-50",
      description:
        "Every lender, every board member, and every skeptic will ask: What are we buying? Is the farm viable? Are there liens?",
      tasks: [
        "Order a professional land appraisal",
        "Conduct environmental and soil testing",
        "Review title and survey for encumbrances",
        "Verify water rights, easements, and zoning compliance",
      ],
      tips: [
        "Lead with soil testing. Contamination remediation can kill a deal.",
        "Get the title search done by a Maine real estate attorney.",
      ],
      docLink: { label: "Legal Checklist (Maine)", id: "07-legal-checklist-maine" },
    },
    {
      id: "p3-psa",
      title: "Sign the purchase and sale agreement",
      duration: "Week 45-55+",
      description:
        "This is the binding commitment to buy. The deposit is placed. Financing is secured. The transition begins.",
      tasks: [
        "Negotiate and sign purchase and sale agreement",
        "Make earnest money deposit",
        "Confirm all financing commitments in writing",
        "Set closing date and communicate it to all members",
      ],
      tips: [
        "Do not sign without financing locked. Contingency clauses are your friend.",
      ],
      docLink: { label: "Transition Playbook", id: "03-transition-playbook" },
    },
  ],
  "phase-4": [
    {
      id: "p4-ready",
      title: "Get ready to close",
      duration: "Week 56-60",
      description:
        "The week before closing is a checklist marathon. Title insurance, final walkthrough, wire instructions, and community nerves.",
      tasks: [
        "Confirm title insurance policy",
        "Schedule final walkthrough with seller",
        "Prepare wire transfers for closing",
        "Draft community announcement for post-closing",
      ],
      tips: [
        "Title insurance is worth every dollar. It protects against hidden liens and ownership disputes.",
      ],
    },
    {
      id: "p4-close",
      title: "Close and record the deed",
      duration: "Week 60",
      description:
        "The land is transferred to the Community Land Trust. The cooperative signs the ground lease. This is the moment.",
      tasks: [
        "Attend closing and review all documents",
        "Record the deed with the county registry",
        "Activate the ground lease immediately",
        "Celebrate with your community",
      ],
      tips: [
        "Bring a notepad. Ask questions at closing. This is your land now.",
      ],
      docLink: { label: "Transition Playbook", id: "03-transition-playbook" },
    },
    {
      id: "p4-comms",
      title: "Tell the story",
      duration: "Week 61",
      description:
        "Your community waited for this. Your funders want to know it worked. Share the news publicly and gratefully.",
      tasks: [
        "Publish a community announcement",
        "Thank all donors, lenders, and volunteers",
        "Invite funders and partners to visit the farm",
        "Share lessons learned with the broader CLT movement",
      ],
      tips: [
        "Document the transition for the next farm. Your case study will help someone else.",
      ],
      docLink: { label: "Email Templates", id: "09-email-templates" },
    },
  ],
  "phase-5": [
    {
      id: "p5-ops",
      title: "Stabilize operations",
      duration: "Year 1",
      description:
        "Ownership is not the finish line. The cooperative must pay the mortgage, grow food, pay workers, and govern itself.",
      tasks: [
        "Launch farm operations plan with the co-op board",
        "Set financial reporting for members and lenders",
        "Establish annual meeting schedule",
        "Review and adjust membership equity structure",
      ],
      tips: [
        "The first year is fragile. Focus on core operations before expanding.",
      ],
    },
    {
      id: "p5-members",
      title: "Grow the membership",
      duration: "Ongoing",
      description:
        "A cooperative needs members. New members bring equity, labor, ideas, and resilience.",
      tasks: [
        "Host regular member orientation sessions",
        "Make membership accessible with sliding scale equity",
        "Invite the broader community to farm events",
        "Recruit new board members proactively",
      ],
      tips: [
        "Membership growth is slower than you want. Start recruiting well before you need the labor.",
      ],
      docLink: { label: "Member FAQ", id: "04-member-faq" },
    },
    {
      id: "p5-accountability",
      title: "Stay accountable",
      duration: "Ongoing",
      description:
        "The community owns the land. They deserve to know how it is being used. Transparency is not optional.",
      tasks: [
        "Publish an annual report to the community",
        "Hold open annual meetings",
        "Review ground lease compliance yearly",
        "Renew CLT and co-op board elections on schedule",
      ],
      tips: [
        "The CLT board should walk the land at least twice a year. Stewardship is physical, not just paperwork.",
      ],
      docLink: { label: "Governance Templates", id: "05-governance-templates" },
    },
  ],
};

export default function PathwayPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [expandedSubPath, setExpandedSubPath] = useState<string | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const activePhase = PHASES[activePhaseIndex];
  const subpaths = PHASE_SUBPATHS[activePhase.id] || [];

  const completedInPhase = subpaths.reduce(
    (acc, sp) =>
      acc +
      sp.tasks.filter((t) => completedTasks.has(`${sp.id}::${t}`)).length,
    0
  );
  const totalInPhase = subpaths.reduce((acc, sp) => acc + sp.tasks.length, 0);
  const progress = totalInPhase > 0 ? Math.round((completedInPhase / totalInPhase) * 100) : 0;

  const toggleTask = (subPathId: string, task: string) => {
    const key = `${subPathId}::${task}`;
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 lg:ml-64">
        {/* Header image */}
        <div className="relative h-32 sm:h-40 overflow-hidden">
          <img
            src="/barn-rural.jpg"
            alt="Rural farm landscape"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 -mt-12 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Guided Pathway
            </h1>
            <p className="text-muted-foreground text-sm">
              Five phases with interactive sub-paths. Expand each section,
              complete the checklist, and move forward.
            </p>
          </motion.div>

          {/* Phase nav */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() =>
                setActivePhaseIndex(Math.max(0, activePhaseIndex - 1))
              }
              disabled={activePhaseIndex === 0}
              className="p-2 rounded-lg border border-border hover:bg-secondary/50 disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-1.5">
              {PHASES.map((phase, i) => {
                const isActive = i === activePhaseIndex;
                return (
                  <button
                    key={phase.id}
                    onClick={() => {
                      setActivePhaseIndex(i);
                      setExpandedSubPath(null);
                    }}
                    className="relative group"
                  >
                    <div
                      className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                        isActive
                          ? "text-foreground border-primary/40"
                          : "text-muted-foreground border-transparent hover:border-border hover:text-foreground"
                      }`}
                      style={
                        isActive
                          ? { background: `${phase.color}10` }
                          : undefined
                      }
                    >
                      <span className={isActive ? undefined : "opacity-60"}>
                        {phase.title}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activePhase"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                        style={{ background: phase.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setActivePhaseIndex(
                  Math.min(PHASES.length - 1, activePhaseIndex + 1)
                )
              }
              disabled={activePhaseIndex === PHASES.length - 1}
              className="p-2 rounded-lg border border-border hover:bg-secondary/50 disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Phase card */}
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-card p-5 mb-6"
            style={{ borderLeft: `3px solid ${activePhase.color}` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  {activePhase.duration}
                </div>
                <h2 className="text-lg font-semibold">{activePhase.title}</h2>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold" style={{ color: activePhase.color }}>
                  {progress}%
                </div>
                <div className="text-[10px] text-muted-foreground">complete</div>
              </div>
            </div>
            <div className="w-full h-1.5 rounded-full bg-secondary/50 overflow-hidden mb-3">
              <motion.div
                className="h-full rounded-full"
                style={{ background: activePhase.color }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">{activePhase.question}</strong>
            </p>
          </motion.div>

          {/* Sub-paths */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {subpaths.map((sp, i) => {
                const isExpanded = expandedSubPath === sp.id;
                const doneCount = sp.tasks.filter((t) =>
                  completedTasks.has(`${sp.id}::${t}`)
                ).length;

                return (
                  <motion.div
                    key={sp.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
                  >
                    {/* Header row */}
                    <button
                      onClick={() =>
                        setExpandedSubPath(isExpanded ? null : sp.id)
                      }
                      className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{
                          background:
                            doneCount === sp.tasks.length && sp.tasks.length > 0
                              ? activePhase.color
                              : `${activePhase.color}40`,
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-foreground">
                            {sp.title}
                          </span>
                          <span className="text-[10px] font-medium text-muted-foreground uppercase">
                            {sp.duration}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5 truncate">
                          {sp.description}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-muted-foreground">
                          {doneCount}/{sp.tasks.length}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {sp.description}
                            </p>

                            {/* Task checklist */}
                            <div className="space-y-1.5">
                              {sp.tasks.map((task) => {
                                const isDone = completedTasks.has(
                                  `${sp.id}::${task}`
                                );
                                return (
                                  <div
                                    key={task}
                                    onClick={() => toggleTask(sp.id, task)}
                                    className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-all ${
                                      isDone
                                        ? "bg-primary/5"
                                        : "hover:bg-secondary/30"
                                    }`}
                                  >
                                    {isDone ? (
                                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    ) : (
                                      <Circle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                                    )}
                                    <span
                                      className={`text-sm leading-snug ${
                                        isDone
                                          ? "line-through opacity-50"
                                          : "text-foreground"
                                      }`}
                                    >
                                      {task}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Tips */}
                            {sp.tips.length > 0 && (
                              <div className="rounded-lg bg-accent/5 border border-accent/10 p-3 space-y-2">
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wide">
                                  <Lightbulb className="w-3 h-3" />
                                  Tips
                                </div>
                                {sp.tips.map((tip) => (
                                  <p
                                    key={tip}
                                    className="text-xs text-muted-foreground leading-relaxed"
                                  >
                                    {tip}
                                  </p>
                                ))}
                              </div>
                            )}

                            {/* Deep link */}
                            {sp.docLink && (
                              <Link href={`/doc/${sp.docLink.id}`} className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-accent transition-colors">
                                <BookOpen className="w-3 h-3" />
                                Read the full {sp.docLink.label}
                                <ChevronRight className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
