"use client";

import {
  Surface1Icon,
  Surface2Icon,
  Surface3Icon,
  Surface4Icon,
} from "@/assets/svgicons";
import { useState } from "react";

type Tab = {
  id: string;
  surface: string;
  title: string;
  tag: string;
  content?: React.ReactNode;
};

const tabs: Tab[] = [
  {
    id: "document-intelligence",
    surface: "SURFACE 01",
    title: "Document Intelligence",
    tag: "Extraction & reasoning",
    content: (
      <div className="surface-content">
        <Surface1Icon />
        <div className="surface-content-header">
          <h3>
            Read everything.<br></br> Trust the extraction.
          </h3>
          <p>
            Sovix ingests every document type your team works with — PDFs,
            inspection photos, field notes, third-party reports, loss runs,
            policy schedules — and converts them into structured, queryable
            knowledge. OCR, table parsing, and cross-document reasoning with
            citations back to the source page.
          </p>
        </div>
        <div className="replaces-section">
          <div className="replaces-section-card">
            <span>REPLACES</span>
            <p>
              Manual document review, copy-paste data entry, searching through
              email attachments, waiting on analysts to summarise reports.
            </p>
          </div>
        </div>
        <div className="key-capabilities-section">
          <span>Key capabilities</span>
          <div className="key-capabilities-list">
            <div className="key-capabilities-card">
              <span></span>
              <p>Full-document OCR with layout preservation</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Structured field extraction — dates, codes, exposure values</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Cross-document reasoning with source citations</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Handles handwritten notes and scanned legacy files</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "internal-qa",
    surface: "SURFACE 02",
    title: "Internal Q&A",
    tag: "Institutional Knowledge",
    content: (
      <div className="surface-content">
        <Surface2Icon />
        <div className="surface-content-header">
          <h3>
            Ask your entire institutional<br></br> knowledge base a question.
          </h3>
          <p>
            Your organisation has decades of underwriting decisions, claim
            outcomes, and inspection findings locked in documents and email
            threads. Sovix makes it queryable. Any underwriter can ask a natural
            language question and receive a cited answer drawn from your own
            historical data — not a public LLM&apos;s.
          </p>
        </div>
        <div className="replaces-section">
          <div className="replaces-section-card">
            <span>REPLACES</span>
            <p>
              Calling a senior underwriter to remember a precedent, searching
              shared drives, asking the team Slack channel.
            </p>
          </div>
        </div>
        <div className="key-capabilities-section">
          <span>Key capabilities</span>
          <div className="key-capabilities-list">
            <div className="key-capabilities-card">
              <span></span>
              <p>Natural language Q&A over your full decision archive</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Citation per answer — traceable to source and page</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Role-based access control on all queries</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Confidence scoring and full audit log</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "workflow-automation",
    surface: "SURFACE 03",
    title: "Workflow Automation",
    tag: "Triage & Routing",
    content: (
      <div className="surface-content">
        <Surface3Icon />
        <div className="surface-content-header">
          <h3>
            Triage, route, and approve <br></br> without a SaaS platform.
          </h3>
          <p>
            Sovix automates the repeatable decision steps your team runs every
            day: triage incoming submissions, flag exceptions, route approvals,
            generate first-draft reports, and populate downstream systems — all
            within your perimeter, with full audit trails and zero external
            dependencies.{" "}
          </p>
        </div>
        <div className="replaces-section">
          <div className="replaces-section-card">
            <span>REPLACES</span>
            <p>
              Manual queue management, inbox triage by junior staff, templated
              report writing, copy-paste between systems.
            </p>
          </div>
        </div>
        <div className="key-capabilities-section">
          <span>Key capabilities</span>
          <div className="key-capabilities-list">
            <div className="key-capabilities-card">
              <span></span>
              <p>Automated inspection report generation</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>
                Submission triage — score, classify, and route automatically
              </p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Exception flagging with configurable escalation paths</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Encrypted API connectors to existing policy systems</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ai-guidance",
    surface: "SURFACE 04",
    title: "AI Guidance",
    tag: "Risk Decisions",
    content: (
      <div className="surface-content">
        <Surface4Icon />
        <div className="surface-content-header">
          <h3>
            Decisions with confidence scores<br></br> and explainable reasoning.
          </h3>
          <p>
            Sovix doesn&apos;t just surface data — it evaluates risk in real
            time, combines multiple signals across documents and historical
            decisions, and returns a structured recommendation with a confidence
            score and the specific factors that drove it. Every guidance output
            is explainable and auditable.
          </p>
        </div>
        <div className="replaces-section">
          <div className="replaces-section-card">
            <span>REPLACES</span>
            <p>
              Relying on senior underwriter intuition alone, inconsistent risk
              assessments, decisions that cannot be defended in a regulatory
              review.
            </p>
          </div>
        </div>
        <div className="key-capabilities-section">
          <span>Key capabilities</span>
          <div className="key-capabilities-list">
            <div className="key-capabilities-card">
              <span></span>
              <p>
                Confidence-backed recommendations with per-factor explanations
              </p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>
                Multi-signal synthesis across inspection, claims and policy data
              </p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Real-time risk scoring on new submissions</p>
            </div>
            <div className="key-capabilities-card">
              <span></span>
              <p>Full audit trail — defensible in regulatory disputes</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function SurfaceTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="surface-tabs-wrapper">
      {/* ─── Tab Sidebar ─── */}
      <nav className="surface-sidebar" role="tablist" aria-label="Surface tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`surface-tab-btn${isActive ? " active" : ""}`}
            >
              <span className="surface-label">{tab.surface}</span>
              <span className="surface-title">{tab.title}</span>
              <span className="surface-tag">{tab.tag}</span>
              {isActive && <span className="active-arrow" aria-hidden="true" />}
            </button>
          );
        })}
      </nav>

      {/* ─── Tab Panels ─── */}
      <div className="surface-panels">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            hidden={tab.id !== activeTab}
            className="surface-panel"
          >
            {tab.content} {/* ✅ renders unique content per tab */}
          </div>
        ))}
      </div>
    </div>
  );
}
