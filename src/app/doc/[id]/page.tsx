import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { DOCS, TEMPLATES } from "@/content/docs";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

interface DocPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return [...DOCS, ...TEMPLATES].map((doc) => ({
    id: doc.id,
  }));
}

export default function DocPage({ params }: DocPageProps) {
  const { id } = params;
  const allDocs = [...DOCS, ...TEMPLATES];
  const doc = allDocs.find((d) => d.id === id);
  const currentIndex = allDocs.findIndex((d) => d.id === id);
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc =
    currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  if (!doc) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Section not found</h1>
          <p className="text-muted-foreground mb-4">
            That playbook section does not exist.
          </p>
          <Link href="/quick-access">
            <div className="text-primary hover:underline cursor-pointer">
              Back to all sections
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        {/* Header image */}
        <div className="relative h-24 sm:h-32 overflow-hidden">
          <img
            src="/barn-rural.jpg"
            alt="Rural farm landscape"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 -mt-8 relative animate-fade-in">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/quick-access">
              <span className="hover:text-foreground transition-colors cursor-pointer">
                All sections
              </span>
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{doc.label}</span>
          </div>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {doc.label}
              </h1>
              <div className="text-xs text-muted-foreground">
                Section {currentIndex + 1} of {allDocs.length}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose-custom">
            <MarkdownRenderer content={doc.content} />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-6 border-t border-border grid gap-4 sm:grid-cols-2">
            {prevDoc ? (
              <Link href={`/doc/${prevDoc.id}`} className="group block p-4 rounded-xl border border-border hover:border-primary/30 bg-card/50 hover:bg-card transition-all cursor-pointer">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  Previous
                </div>
                <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {prevDoc.label}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextDoc ? (
              <Link href={`/doc/${nextDoc.id}`} className="group block p-4 rounded-xl border border-border hover:border-primary/30 bg-card/50 hover:bg-card transition-all cursor-pointer text-right">
                <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-1">
                  Next
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {nextDoc.label}
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
