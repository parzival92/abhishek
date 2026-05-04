import {
  ArrowUpRight,
  Boxes,
  CloudCog,
  Download,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow
} from 'lucide-react';

const profile = {
  name: 'Abhishek Sharma',
  title: 'DevOps Engineer | Cloud Engineer',
  location: 'Pune, India',
  email: 'abhisheksvps@gmail.com',
  github: 'https://github.com/parzival92',
  linkedin: 'https://linkedin.com/in/abhishek-sharma-790a8b149',
  resume: '/resume.pdf',
  summary:
    'I design and operate secure cloud platforms where Kubernetes, GitOps, IaC, and observability work together as one delivery system.'
};

const metrics = [
  { value: '10+', label: 'Years in cloud and DevOps' },
  { value: '2', label: 'Enterprise consulting environments' },
  { value: '5+', label: 'Financial and digital-native clients' },
  { value: '24/7', label: 'Reliability mindset' }
];

const strengths = [
  {
    icon: Boxes,
    title: 'Kubernetes operations',
    text: 'Production cluster support, environment overlays, self-healing patterns, and release hygiene.'
  },
  {
    icon: GitBranch,
    title: 'GitOps delivery',
    text: 'Flux and Kustomize workflows that make deployments declarative, reviewable, and repeatable.'
  },
  {
    icon: CloudCog,
    title: 'Azure platform buildout',
    text: 'Bicep modules, App Gateway, Key Vault, VNet, Managed Identity, and compliance-minded templates.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliability and guardrails',
    text: 'Monitoring, checks, reusable IaC, documentation, and secure defaults that scale with teams.'
  }
];

const projects = [
  {
    title: 'GitOps platform rollout',
    label: 'Flux + Kustomize',
    text: 'Built declarative deployment workflows with environment-specific overlays, reducing manual release steps and making configuration changes easier to audit.',
    tags: ['Kubernetes', 'Flux', 'Kustomize']
  },
  {
    title: 'Azure IaC standardization',
    label: 'Bicep modules',
    text: 'Designed reusable Azure infrastructure templates for platform components, security boundaries, and governance-friendly provisioning.',
    tags: ['Azure', 'Bicep', 'IaC']
  },
  {
    title: 'Observability foundation',
    label: 'Logs and dashboards',
    text: 'Deployed ELK and Metricbeat to improve real-time log aggregation, operational visibility, and troubleshooting flow.',
    tags: ['ELK', 'Metricbeat', 'Grafana']
  }
];

const experience = [
  {
    role: 'Senior Level 1',
    company: 'Globant India Pvt Ltd',
    period: '06/2021 - Present',
    points: [
      'Managed production-grade Kubernetes clusters for cloud-native workloads.',
      'Implemented GitOps workflows using Flux and Kustomize.',
      'Integrated Azure App Gateway, Key Vault, VNet, and Managed Identity.'
    ]
  },
  {
    role: 'Senior DevOps Engineer',
    company: 'Infosys Limited',
    period: '01/2015 - 06/2021',
    points: [
      'Automated Azure DevTest Lab provisioning with Azure Functions.',
      'Supported Jira, Confluence, Bitbucket, Jenkins, CARA, and Chef.',
      'Delivered DevOps solutions for UBS, Westpac, and Wells Fargo.'
    ]
  }
];

const tools = [
  'Kubernetes',
  'Azure',
  'Terraform',
  'Bicep',
  'GitOps',
  'Flux',
  'Kustomize',
  'Docker',
  'Prometheus',
  'Grafana',
  'ELK',
  'Checkov',
  'GitHub Actions',
  'Azure DevOps',
  'Python',
  'Groovy'
];

const sectionLabel = (children) => (
  <div className="mb-5 inline-flex items-center gap-2 border border-stone-300 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700">
    <Sparkles size={14} />
    {children}
  </div>
);

const TerminalPortfolio = () => {
  return (
    <main className="min-h-screen bg-[#f5f0e7] text-[#16130f]">
      <header className="sticky top-0 z-30 border-b border-[#d8cdbc] bg-[#f5f0e7]/88 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-['Space_Grotesk'] text-lg font-bold">
            Abhishek Sharma
          </a>
          <div className="hidden items-center gap-6 text-sm text-stone-700 md:flex">
            <a className="hover:text-[#0d5c47]" href="#work">
              Work
            </a>
            <a className="hover:text-[#0d5c47]" href="#experience">
              Experience
            </a>
            <a className="hover:text-[#0d5c47]" href="#contact">
              Contact
            </a>
            <a className="hover:text-[#0d5c47]" href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center border border-stone-900 bg-[#dff36f] text-[#16130f] transition hover:-translate-y-0.5 hover:bg-white"
            aria-label="Open LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-[#d8cdbc]">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-stone-700">
              <span className="inline-flex items-center gap-2 border border-stone-300 bg-white/70 px-3 py-1">
                <MapPin size={14} />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2 border border-stone-300 bg-white/70 px-3 py-1">
                <Terminal size={14} />
                {profile.title}
              </span>
            </div>

            <h1 className="max-w-5xl font-['Space_Grotesk'] text-[clamp(3.2rem,10vw,9.4rem)] font-bold leading-[0.86]">
              Cloud platforms that ship clean.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-stone-900 bg-[#dff36f] px-5 py-3 text-sm font-semibold text-[#16130f] transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Mail size={17} />
                Contact
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-stone-900 bg-[#dff36f] px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Download size={17} />
                Download resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-stone-900 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Github size={17} />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-x-0 top-0 mx-auto block h-[500px] max-w-[430px] rotate-[-2deg] overflow-hidden border border-stone-900 bg-white shadow-[14px_14px_0_#16130f] transition hover:rotate-0 hover:shadow-[18px_18px_0_#0d5c47]"
              aria-label="Open Abhishek Sharma resume"
            >
              <img
                src="/resume-preview.png"
                alt="Resume preview for Abhishek Sharma"
                className="h-full w-full object-cover object-top"
              />
            </a>
            <div className="absolute bottom-4 left-0 right-0 mx-auto max-w-sm border border-stone-900 bg-[#dff36f] p-5 shadow-[8px_8px_0_#16130f]">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-700">
                Current resume
              </div>
              <p className="mt-2 font-['Space_Grotesk'] text-2xl font-bold leading-tight">
                Updated with the latest profile photo and platform engineering focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8cdbc] bg-[#16130f] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px border-x border-stone-700 bg-stone-700 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-[#16130f] px-5 py-7 sm:px-8">
              <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#dff36f]">{metric.value}</div>
              <div className="mt-2 text-sm text-stone-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[#d8cdbc] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {sectionLabel('Platform Signals')}
          <div className="grid gap-4 md:grid-cols-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              const span = index === 0 ? 'md:col-span-2 md:row-span-2' : '';
              return (
                <article
                  key={item.title}
                  className={`group border border-stone-900 bg-white p-6 shadow-[6px_6px_0_#16130f] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#0d5c47] ${span}`}
                >
                  <Icon className="text-[#0d5c47]" size={index === 0 ? 34 : 28} />
                  <h2 className="mt-6 font-['Space_Grotesk'] text-2xl font-bold">{item.title}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-stone-700 sm:text-base">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-[#d8cdbc] bg-[#fbf8f1] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {sectionLabel('Selected Work')}
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="border border-stone-900 bg-[#f5f0e7] p-6">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <span className="bg-[#1f6f5a] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    {project.label}
                  </span>
                  <ArrowUpRight className="text-[#b34d22]" size={24} />
                </div>
                <h2 className="font-['Space_Grotesk'] text-3xl font-bold leading-tight">{project.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone-700">{project.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-stone-300 bg-white px-2.5 py-1 text-xs text-stone-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-[#d8cdbc] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            {sectionLabel('Experience')}
            <h2 className="font-['Space_Grotesk'] text-5xl font-bold leading-none sm:text-6xl">
              Built inside real delivery pressure.
            </h2>
          </div>
          <div className="space-y-5">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="border-l-4 border-[#b34d22] bg-white p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold">{item.role}</h3>
                  <span className="text-sm text-stone-600">{item.period}</span>
                </div>
                <div className="mt-1 text-[#0d5c47]">{item.company}</div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Workflow className="mt-1 shrink-0 text-[#b34d22]" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-[#d8cdbc] bg-[#dff36f] py-8">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-4">
          {[...tools, ...tools].map((tool, index) => (
            <span
              key={`${tool}-${index}`}
              className="border border-stone-900 bg-[#f5f0e7] px-4 py-2 text-sm font-semibold text-stone-900"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#16130f] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 border border-stone-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
              <Mail size={14} />
              Contact
            </div>
            <h2 className="font-['Space_Grotesk'] text-5xl font-bold leading-none sm:text-7xl">
              Need a platform engineer who can ship and stabilize?
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-[#dff36f] px-5 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5"
            >
              <Mail size={17} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-stone-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-stone-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-stone-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              <Download size={17} />
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TerminalPortfolio;
