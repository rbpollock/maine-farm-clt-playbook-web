"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/Sidebar";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { DOCS, TEMPLATES, PHASES } from "@/content/docs";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  FileText,
  ArrowRight,
} from "lucide-react";

const PHASE_CONTENT: Record<string, { task: string; docIds: string[] }[]> = {
  "phase-1": [
    {
      task: "Read the overview and understand the core principles",
      docIds: ["01-overview-and-principles"],
    },
    { task: "Assemble a steering committee", docIds: ["05-governance-templates"] },
    {
      task: "Hold your first community listening session",
      docIds: ["08-community-engagement"],
    },
    {
      task: "Complete the feasibility memo",
      docIds: ["02-funder-brief", "06-capital-stack-guide"],
    },
    {
      task: "Make the go/no-go decision",
      docIds: ["03-transition-playbook"],
    },
  ],
  "phase-2": [
    {
      task: "Form the Community Land Trust entity",
      docIds: ["07-legal-checklist-maine"],
    },
    {
      task: "Form the cooperative entity",
      docIds: ["05-governance-templates", "07-legal-checklist-maine"],
    },
    {
      task: "Draft and sign the ground lease",
      docIds: ["07-legal-checklist-maine"],
    },
    { task: "Open the membership process", docIds: ["04-member-faq"] },
    {
      task: "Set up governance protocols",
      docIds: ["05-governance-templates"],
    },
  ],
  "phase-3": [
    {
      task: "Finalize the capital stack worksheet",
      docIds: ["06-capital-stack-guide"],
    },
    { task: "Engage CDFIs and lenders", docIds: ["06-capital-stack-guide"] },
    {
      task: "Launch the member capital campaign",
      docIds: ["04-member-faq", "06-capital-stack-guide"],
    },
    {
      task: "Complete all due diligence",
      docIds: ["07-legal-checklist-maine", "10-auxiliary-structures"],
    },
    {
      task: "Finalize the purchase and sale agreement",
      docIds: ["03-transition-playbook"],
    },
  ],
  "phase-4": [
    {
      task: "Pre-closing checklist and walk-through",
      docIds: ["03-transition-playbook"],
    },
    {
      task: "Prepare communications for closing",
      docIds: ["08-community-engagement", "09-email-templates"],
    },
    { task: "Close and record the deed", docIds: ["03-transition-playbook"] },
    {
      task: "Post-closing: meet the community",
      docIds: ["09-email-templates"],
    },
  ],
  "phase-5": [
    { task: "Stabilize core operations", docIds: ["03-transition-playbook"] },
    { task: "Build membership base", docIds: ["04-member-faq"] },
    {
      task: "Establish transparent reporting",
      docIds: ["05-governance-templates"],
    },
    {
      task: "Annual review and community accountability",
      docIds: ["08-community-engagement"],
    },
  ],
};

export default function PathwayPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [viewingDoc, setViewingDoc] = useState<string | null>(null);

  const activePhase = PHASES[activePhaseIndex];
  const tasks = PHASE_CONTENT[activePhase.id] || [];

  const toggleTask = (task: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(task)) next.delete(task);
      else next.add(task);
      return next;
    });
  };

  const progress =
    tasks.length > 0
      ? Math.round(
          (Array.from(completedTasks).filter((t) =>
            tasks.some((task) => task.task === t)
          ).length /
            tasks.length) *
            100
        )
      : 0;

  const allDocs = [...DOCS, ...TEMPLATES];
  const currentDoc = viewingDoc
    ? allDocs.find((d) => d.id === viewingDoc)
    : null;

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 lg:ml-64">
        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Guided Pathway
            </h1>
            <p className="text-muted-foreground">
              Step through each phase. Click tasks to mark them complete, and
              jump into any document you need.
            </p>
          </motion.div>

          {/* Phase tabs */}
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
                      setViewingDoc(null);
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
                      <span
                        className={isActive ? undefined : "opacity-60"}
                      >
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-card p-6 mb-6"
            style={{ borderLeft: `3px solid ${activePhase.color}` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  {activePhase.duration}
                </div>
                <h2 className="text-xl font-semibold">{activePhase.title}</h2>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{ color: activePhase.color }}>
                  {progress}%
                </div>
                <div className="text-xs text-muted-foreground">complete</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-secondary/50 overflow-hidden mb-6">
              <motion.div
                className="h-full rounded-full"
                style={{ background: activePhase.color }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="text-sm text-muted-foreground mb-2">
              <strong className="text-foreground">Core question:</strong>{" "}
              {activePhase.question}
            </div>
          </motion.div>

          {/* Task list + doc viewer */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tasks */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Key Tasks
              </h3>
              <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                  {tasks.map((task, i) => {
                    const isDone = completedTasks.has(task.task);
                    return (
                      <motion.div
                        key={task.task}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isDone
                            ? "border-primary/20 bg-primary/5"
                            : "border-border bg-card/50 hover:bg-card"
                        }`}
                        onClick={() => toggleTask(task.task)}
                      >
                        <div className="flex items-start gap-3">
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <div
                              className={`text-sm font-medium leading-snug ${
                                isDone ? "line-through opacity-60" : ""
                              }`}
                            >
                              {task.task}
                            </div>
                            {task.docIds.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {task.docIds.map((docId) => {
                                  const doc = allDocs.find(
                                    (d) => d.id === docId
                                  );
                                  if (!doc) return null;
                                  return (
                                    <button
                                      key={docId}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setViewingDoc(docId);
                                      }}
                                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border transition-colors ${
                                        viewingDoc === docId
                                          ? "border-primary/40 bg-primary/10 text-primary"
                                          : "border-border hover:border-primary/30 hover:text-primary"
                                      }`}
                                    >
                                      <FileText className="w-3 h-3" />
                                      {doc.label}
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Doc viewer */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {currentDoc ? currentDoc.label : "Select a document"}
              </h3>
              <AnimatePresence mode="wait">
                {currentDoc ? (
                  <motion.div
                    key={currentDoc.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-border bg-card p-5 max-h-[60vh] overflow-y-auto scrollbar-thin prose-custom"
                  >
                    <MarkdownRenderer content={currentDoc.content} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-2xl border border-dashed border-border bg-card/30 p-8 text-center"
                  >
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">
                      Click any document tag below a task to view it here.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
