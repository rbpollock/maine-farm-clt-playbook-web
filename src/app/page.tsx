"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TreePine, Map, Layers, ArrowRight, BookOpen } from "lucide-react";
import { PHASES, DOCS } from "@/content/docs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6 sm:px-12 lg:px-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <TreePine className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              Community Ownership Playbook
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Turn a farm into a
            <br />
            <span className="gradient-text">community commons</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            A practical, open-source guide for Maine farms exploring community
            land trust + cooperative ownership. From feasibility to closing —
            every phase, every template, every step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/pathway">
              <div className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer">
                <Map className="w-4 h-4" />
                Start the Guided Pathway
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
            <Link href="/quick-access">
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-border text-sm font-medium hover:bg-secondary/50 transition-colors cursor-pointer">
                <Layers className="w-4 h-4" />
                Browse All Sections
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Phase overview */}
      <section className="px-6 sm:px-12 lg:px-20 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold tracking-tight mb-2">
              The five phases
            </h2>
            <p className="text-muted-foreground">
              From first conversation to thriving cooperative — a clear roadmap
              with decision gates at every step.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PHASES.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href="/pathway">
                  <div className="group h-full p-5 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 hover:glow-sage transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                        style={{
                          background: `${phase.color}15`,
                          color: phase.color,
                        }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {phase.question}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / section overview */}
      <section className="px-6 sm:px-12 lg:px-20 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/30 p-6 sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight mb-6">
              Everything in one place
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {DOCS.slice(0, 6).map((doc) => (
                <Link key={doc.id} href={`/doc/${doc.id}`}>
                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/40 transition-colors cursor-pointer group">
                    <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                      {doc.label}
                    </span>
                  </div>
                </Link>
              ))}
              <Link href="/quick-access">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/40 transition-colors cursor-pointer group">
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-sm text-primary font-medium">
                    View all {DOCS.length + 5} sections
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
