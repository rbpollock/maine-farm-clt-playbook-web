"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="prose-custom">{children}</h1>,
        h2: ({ children }) => <h2 className="prose-custom">{children}</h2>,
        h3: ({ children }) => <h3 className="prose-custom">{children}</h3>,
        h4: ({ children }) => (
          <h4 className="text-lg font-semibold mt-4 mb-2 text-foreground/90">
            {children}
          </h4>
        ),
        p: ({ children }) => <p className="prose-custom">{children}</p>,
        ul: ({ children }) => <ul className="prose-custom">{children}</ul>,
        ol: ({ children }) => <ol className="prose-custom">{children}</ol>,
        li: ({ children }) => <li className="prose-custom">{children}</li>,
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
        table: ({ children }) => <table className="prose-custom">{children}</table>,
        th: ({ children }) => <th className="prose-custom">{children}</th>,
        td: ({ children }) => <td className="prose-custom">{children}</td>,
        tr: ({ children }) => <tr>{children}</tr>,
        tbody: ({ children }) => <tbody>{children}</tbody>,
        thead: ({ children }) => <thead>{children}</thead>,
        code: ({ children }) => <code className="prose-custom">{children}</code>,
        blockquote: ({ children }) => (
          <blockquote className="prose-custom">{children}</blockquote>
        ),
        hr: () => <hr className="prose-custom" />,
        strong: ({ children }) => <strong className="prose-custom">{children}</strong>,
        em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
