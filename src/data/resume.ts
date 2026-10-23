/**
 * Every career claim on the site lives in this file.
 *
 * Source of truth: C:\source\repos\career\resume-content.md (approved wording
 * as of 2026-10-22). Change wording there first, then copy it here. Add no
 * claims, metrics or skills that are not approved in that file.
 */

// ---------------------------------------------------------------------------
// PROVISIONAL: headline and summary. Jordan is collecting real people's
// reactions before finalizing these. Edit them here; nothing else needs to
// change.
// ---------------------------------------------------------------------------
export const headline =
  "Full-Stack Software Engineer · Product-Minded · Builds with AI Agents";

export const summary =
  "Full-stack software engineer with 10 years of experience, most of it building clinical case management applications in .NET, React and Azure. Focused on product flow and user experience. Most recently conceived and launched hymnal.app as a one-person product team, directing AI coding agents through a review workflow I designed while setting the product direction and the quality bar.";
// ---------------------------------------------------------------------------

export const location = "Nashville, TN";

export interface Role {
  title: string;
  dates: string;
  note?: string;
}

export interface Job {
  company: string;
  companyNote?: string;
  location: string;
  dates: string;
  roles: Role[];
  bullets: string[];
}

/**
 * eviCore end date: "Present" until employment formally ends on 2026-11-15,
 * then change to "Nov 2026" (here and on the résumé and LinkedIn).
 */
const EVICORE_END = "Present";

export const experience: Job[] = [
  {
    company: "Cigna (eviCore healthcare)",
    location: "Nashville, TN",
    dates: `2018 – ${EVICORE_END}`,
    roles: [
      { title: "Software Engineering Advisor", dates: `2024 – ${EVICORE_END}` },
      { title: "Software Engineering Lead Analyst", dates: "2021 – 2024" },
      {
        title: "Software Engineer",
        dates: "2018 – 2021",
        note: "Contract-to-hire; employee from Nov 2018",
      },
    ],
    bullets: [
      "Built a care coordination app, then reused its foundation to build transition of care: an intake workflow, a case view with notes, clinical documents and case actions, and worklists where supervisors assign cases and nurses work their own, replacing manual tracking. Worked across the APIs, pipelines and front end, with the app’s flow and user experience as my focus.",
      "Built those apps as event-driven microservices that communicated through Kafka, keeping the services decoupled, with Cosmos DB and Docker, plus case search and a notifications proof of concept; wrote their Terraform from scratch and set up CI/CD pipelines with zero-downtime deploys using deployment slots.",
      "Served as the onshore technical point of contact for about 10 offshore engineers: reviewed code quality, answered technical questions, handled production and environment access they lacked, and troubleshot failed pushes and deployments, in a role growing toward team architect.",
      "Joined a team with almost no documentation and built a knowledge base that gave AI agents its domain knowledge, past decisions and system setup, with automated privacy scans and my own review gating everything that went in; within weeks, used it to find and fix a data-corruption bug that had existed for years.",
      "Kept a production healthcare platform stable through its sunset: fixed health checks that caused false deploy failures, cleaned up deployment slot swaps, improved monitoring, and moved users to the replacement platform.",
      "Moved scheduled database jobs off SQL Server Agent onto a config-driven Windows Task Scheduler harness that logs each run and sets up schedules automatically at deploy, so failures that could go unnoticed now show up; migrated the first jobs and built the pattern for the rest.",
    ],
  },
  {
    company: "LetterLogic",
    companyNote: "later acquired by Apex Revenue Technologies",
    location: "Nashville, TN",
    dates: "2016 – 2018",
    roles: [{ title: ".NET Developer", dates: "2016 – 2018" }],
    bullets: [
      "Built C#/.NET Windows services that parsed each client’s billing data formats and generated printable patient bills for the in-house print shop; became the primary maintainer for the company’s largest client within my first month.",
    ],
  },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  /** Short line under the name, e.g. "Personal project · 2026 – Present". */
  meta?: string;
  featured?: boolean;
  /** One paragraph, or a list of bullets. */
  description?: string;
  bullets?: string[];
  /** Image path relative to src/components/astro, e.g. "../../images/foo.png". */
  thumbnail?: string;
  links: ProjectLink[];
}

/** To add a project, append an entry. Featured projects render first. */
export const projects: Project[] = [
  {
    name: "Hymnal",
    meta: "Personal project · 2026 – Present",
    featured: true,
    bullets: [
      "Conceived, designed and launched a free digital hymnal with permanent hymn pages and live hymn sings, where people join by code on their phones and follow along as the leader changes hymns. I set the product vision and make the product, design and content decisions.",
      "Built with Next.js, TypeScript, Postgres (Supabase) and Vercel, with automated unit, integration and end-to-end tests in CI, including database permission checks.",
      "Directed AI coding agents through a review workflow I designed, with independent reviews scaled to risk and my approval on every merge, and merged 200+ reviewed pull requests.",
    ],
    // The repo is private: live site only, no code link.
    links: [{ label: "hymnal.app", href: "https://hymnal.app" }],
  },
  {
    name: "Wingspan Scoresheet",
    description:
      "A digital score sheet for the board game Wingspan that adds up every scoring category automatically, with keyboard navigation for quick entry.",
    links: [
      { label: "Live demo", href: "https://wingspanscoresheet.vercel.app" },
      {
        label: "Code",
        href: "https://github.com/jtsmith24/wingspan-scoresheet",
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  { group: "Front end", items: ["React", "Next.js", "Tailwind"] },
  {
    group: "Back end and data",
    items: [
      ".NET",
      "REST APIs",
      "microservices",
      "event-driven architecture",
      "Kafka",
      "Postgres",
      "Cosmos DB",
      "SQL Server",
    ],
  },
  {
    group: "Cloud and delivery",
    items: [
      "Azure",
      "Terraform",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Vercel",
    ],
  },
  { group: "AI", items: ["AI agent workflows", "Claude", "Codex", "Cursor"] },
];

export const education = {
  degree: "B.A., Computer Science, minor in English",
  school: "Harding University",
  year: "2016",
};
