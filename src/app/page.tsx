"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TreePine, Map, ArrowRight, CheckCircle } from "lucide-react";
import { PHASES } from "@/content/docs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero — above the fold, tight */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 sm:px-12 lg:px-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <TreePine className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Maine Farm CLT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            Farms and<br />
            <span className="gradient-text">Community Land Trusts</span><br />
            <span className="text-foreground">in Maine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
          >
            A step-by-step playbook for Maine farmers who want to protect their
            land from speculation and build community ownership through a CLT
            + cooperative model.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            <Link href="/pathway">
              <div className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all cursor-pointer">
                <Map className="w-4 h-4" />
                Start the Pathway
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
            <Link href="/quick-access">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors cursor-pointer">
                Browse Sections
              </div>
            </Link>
          </motion.div>

          {/* Video embed */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 max-w-2xl"
          >
            <div className="rounded-xl overflow-hidden border border-border bg-card/30 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/CyBwnGedmaM"
                title="Community Land Trusts in Maine"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex gap-8 text-sm"
          >
            <div>
              <div className="font-semibold text-foreground">15</div>
              <div className="text-muted-foreground text-xs">playbook docs</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">5</div>
              <div className="text-muted-foreground text-xs">phases</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">5</div>
              <div className="text-muted-foreground text-xs">templates</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">CC0</div>
              <div className="text-muted-foreground text-xs">open license</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phase overview — compact below the fold */}
      <section className="px-6 sm:px-12 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold tracking-tight">
              Five phases, one goal
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Each phase has a clear question to answer before moving on.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PHASES.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <Link href="/pathway">
                  <div className="group h-full p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all cursor-pointer">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold mb-2.5"
                      style={{
                        background: `${phase.color}15`,
                        color: phase.color,
                      }}
                    >
                      {i + 1}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {phase.question}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters — concise */}
      <section className="px-6 sm:px-12 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-card/30 p-6 sm:p-8"
          >
            <h2 className="text-lg font-semibold tracking-tight mb-4">
              Why a Community Land Trust?
            </h2>
            <div className="grid gap-4 sm:grid-cols-3 text-sm">
              <div className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Permanent affordability</div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    Resale restrictions keep land and housing within reach.
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Democratic governance</div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    One person, one vote — not one dollar, one vote.
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Intergenerational</div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    The land is held in trust for future farmers forever.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
