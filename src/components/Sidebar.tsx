"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  TreePine,
  Map,
  BookOpen,
  Layers,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { DOCS, TEMPLATES, PHASES } from "@/content/docs";

const TOP_NAV = [
  { href: "/", label: "Home", icon: TreePine },
  { href: "/pathway", label: "Guided Pathway", icon: Map },
  { href: "/quick-access", label: "Quick Access", icon: Layers },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(true);
  const [templatesOpen, setTemplatesOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const navItem = (href: string, label: string, IconComponent: React.ElementType) => (
    <Link
      key={href}
      href={href}
      onClick={() => setMobileOpen(false)}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
        isActive(href)
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
      }`}
    >
      <IconComponent className="w-4 h-4" />
      {label}
    </Link>
  );

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-6 pb-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <TreePine className="w-4.5 h-4.5 text-primary" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-foreground tracking-tight">
              Maine Farm CLT
            </div>
            <div className="text-[11px] text-muted-foreground">
              Community Ownership Playbook
            </div>
          </div>
        </Link>
      </div>

      <div className="px-3 pb-2">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-1">
          Navigate
        </div>
        {TOP_NAV.map((n) => navItem(n.href, n.label, n.icon))}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin px-3 py-2">
        <button
          onClick={() => setDocsOpen(!docsOpen)}
          className="w-full flex items-center justify-between text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-1 hover:text-foreground transition-colors"
        >
          <span>Playbook Docs</span>
          <motion.div
            animate={{ rotate: docsOpen ? 90 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <ChevronRight className="w-3 h-3" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {docsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {DOCS.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/doc/${doc.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                    isActive(`/doc/${doc.id}`)
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{doc.label}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4">
          <button
            onClick={() => setTemplatesOpen(!templatesOpen)}
            className="w-full flex items-center justify-between text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-1 hover:text-foreground transition-colors"
          >
            <span>Templates</span>
            <motion.div
              animate={{ rotate: templatesOpen ? 90 : 0 }}
              transition={{ duration: 0.15 }}
            >
              <ChevronRight className="w-3 h-3" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {templatesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {TEMPLATES.map((tpl) => (
                  <Link
                    key={tpl.id}
                    href={`/doc/${tpl.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                      isActive(`/doc/${tpl.id}`)
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{tpl.label}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="px-4 py-3 border-t border-sidebar-border">
        <div className="text-[10px] text-muted-foreground">
          <span className="text-primary font-medium">{DOCS.length + TEMPLATES.length}</span> sections
          <span className="mx-1">·</span>
          <span className="text-primary font-medium">{PHASES.length}</span> phases
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-lg glass flex items-center justify-center border border-border"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 h-screen fixed left-0 top-0 border-r border-sidebar-border bg-sidebar flex-col z-40">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: -256 }}
              animate={{ x: 0 }}
              exit={{ x: -256 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 w-64 h-screen border-r border-sidebar-border bg-sidebar z-50 lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
