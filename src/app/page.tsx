"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TreePine, Map, ArrowRight, CheckCircle } from "lucide-react";
import { PHASES } from "@/content/docs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero with image background */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero-farm.jpg"
            alt="Farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
              <TreePine className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Maine Farm CLT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            Farms and<br />
            <span className="gradient-text">Community Land Trusts</span><br />
            <span className="text-foreground">in Maine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
          >
            A step-by-step playbook for Maine farmers who want to protect their
            land from speculation and build community ownership through a CLT
            + cooperative model.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Link href="/pathway">
              <div className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all cursor-pointer shadow-lg shadow-primary/20">
                <Map className="w-4 h-4" />
                Start the Pathway
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
            <Link href="/quick-access">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border/60 backdrop-blur-sm bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:bg-card/80 transition-colors cursor-pointer">
                Browse Sections
              </div>
            </Link>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 sm:mt-14 grid grid-cols-2 sm:flex sm:gap-8 gap-4 text-sm"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-3 border border-border/40">
              <div className="font-semibold text-foreground text-lg">16</div>
              <div className="text-muted-foreground text-xs">playbook docs</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-3 border border-border/40">
              <div className="font-semibold text-foreground text-lg">5</div>
              <div className="text-muted-foreground text-xs">phases</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-3 border border-border/40">
              <div className="font-semibold text-foreground text-lg">5</div>
              <div className="text-muted-foreground text-xs">templates</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-3 border border-border/40">
              <div className="font-semibold text-foreground text-lg">CC0</div>
              <div className="text-muted-foreground text-xs">open license</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-lg font-semibold tracking-tight mb-1">
              See the model in action
            </h2>
            <p className="text-sm text-muted-foreground">
              A short introduction to how community land trusts keep farms in community hands.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border shadow-2xl aspect-video"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/CyBwnGedmaM"
              title="Community Land Trusts in Maine"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Phase overview with image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img
              src="/field-green.jpg"
              alt="Green farmland"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
            <div className="absolute inset-0 flex items-center px-6 sm:px-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Five phases, one goal
                </h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-md">
                  Each phase has a clear question to answer before moving on.
                </p>
              </motion.div>
            </div>
          </div>

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
                  <div className="group h-full p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold mb-3"
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

      {/* Why this matters with image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border">
            <img
              src="/community-people.jpg"
              alt="Community gathering"
              className="w-full h-40 sm:h-56 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
            <div className="relative p-6 sm:p-10 -mt-16 sm:-mt-20">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold tracking-tight mb-6">
                  Why a Community Land Trust?
                </h2>
                <div className="grid gap-4 sm:grid-cols-3 text-sm">
                  <div className="flex gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Permanent affordability</div>
                      <div className="text-muted-foreground text-xs mt-1 leading-relaxed">
                        Resale restrictions keep land within reach for generations.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Democratic governance</div>
                      <div className="text-muted-foreground text-xs mt-1 leading-relaxed">
                        One member, one vote — not one dollar, one vote.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Intergenerational</div>
                      <div className="text-muted-foreground text-xs mt-1 leading-relaxed">
                        Land held in trust for future farmers, forever.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
