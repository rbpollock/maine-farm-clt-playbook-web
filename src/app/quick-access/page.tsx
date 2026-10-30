"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/Sidebar";
import { DOCS, TEMPLATES, PHASES } from "@/content/docs";
import {
  BookOpen,
  ExternalLink,
  FileText,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function QuickAccessPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        {/* Header image */}
        <div className="relative h-28 sm:h-36 overflow-hidden">
          <img
            src="/field-green.jpg"
            alt="Green farmland"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 -mt-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <Layers className="w-4 h-4" />
              Quick Access
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              All sections
            </h1>
            <p className="text-muted-foreground">
              Jump directly to any playbook document or template.
            </p>
          </motion.div>

          {/* Playbook Docs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Playbook Documents
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {DOCS.map((doc, i) => (
                <Link key={doc.id} href={`/doc/${doc.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="group p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all cursor-pointer h-full"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                    </div>
                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                      {doc.label}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-2 opacity-70">
                      {doc.content.slice(0, 120).replace(/[#*\[\]`]/g, "")}...
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Templates */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Templates
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {TEMPLATES.map((tpl, i) => (
                <Link key={tpl.id} href={`/doc/${tpl.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="group p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-accent/20 transition-all cursor-pointer h-full"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <FileText className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all" />
                    </div>
                    <div className="font-medium text-sm text-foreground group-hover:text-accent transition-colors mb-1">
                      {tpl.label}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-2 opacity-70">
                      {tpl.content.slice(0, 120).replace(/[#*\[\]`]/g, "")}...
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
