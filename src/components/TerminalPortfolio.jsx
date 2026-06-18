import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Boxes,
  CloudCog,
  Github,
  GitBranch,
  GitCommit,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Terminal,
  Workflow
} from 'lucide-react';

const profile = {
  name: 'Abhishek Sharma',
  handle: 'parzival92',
  title: 'DevOps Engineer | Cloud Engineer',
  location: 'Pune, India',
  email: 'abhisheksvps@gmail.com',
  github: 'https://github.com/parzival92',
  linkedin: 'https://linkedin.com/in/abhishek-sharma-790a8b149',
  summary:
    'I design and operate secure cloud platforms where Kubernetes, GitOps, IaC, and observability work together as one delivery system.'
};

const metrics = [
  { value: '10+', label: 'years in cloud & devops' },
  { value: '2', label: 'enterprise consulting environments' },
  { value: '5+', label: 'financial & digital-native clients' },
  { value: '24/7', label: 'reliability mindset' }
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
    title: 'Reliability & guardrails',
    text: 'Monitoring, checks, reusable IaC, documentation, and secure defaults that scale with teams.'
  }
];

const projects = [
  {
    title: 'GitOps platform rollout',
    label: 'flux + kustomize',
    text: 'Built declarative deployment workflows with environment-specific overlays, reducing manual release steps and making configuration changes easier to audit.',
    tags: ['Kubernetes', 'Flux', 'Kustomize']
  },
  {
    title: 'Azure IaC standardization',
    label: 'bicep modules',
    text: 'Designed reusable Azure infrastructure templates for platform components, security boundaries, and governance-friendly provisioning.',
    tags: ['Azure', 'Bicep', 'IaC']
  },
  {
    title: 'Observability foundation',
    label: 'logs & dashboards',
    text: 'Deployed ELK and Metricbeat to improve real-time log aggregation, operational visibility, and troubleshooting flow.',
    tags: ['ELK', 'Metricbeat', 'Grafana']
  }
];

const experience = [
  {
    role: 'Senior Level 1',
    company: 'Globant India Pvt Ltd',
    period: '06/2021 - Present',
    hash: 'a1f09c2',
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
    hash: '7d3be40',
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

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (event) => setReduced(event.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
};

const Typewriter = ({ text, speed = 55, className = '' }) => {
  const reduced = usePrefersReducedMotion();
  const [shown, setShown] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    if (reduced) {
      setShown(text);
      return undefined;
    }
    setShown('');
    indexRef.current = 0;
    const id = window.setInterval(() => {
      indexRef.current += 1;
      setShown(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        window.clearInterval(id);
      }
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, reduced]);

  const done = shown.length >= text.length;
  return (
    <span className={`${className} ${done && !reduced ? 'cursor' : ''}`}>{shown}</span>
  );
};

const Prompt = ({ path = '~', cmd, className = '' }) => (
  <div className={`flex flex-wrap items-center gap-x-2 font-mono text-sm ${className}`}>
    <span className="text-[var(--green)]">abhishek@cloud</span>
    <span className="text-[var(--muted)]">:</span>
    <span className="text-[var(--cyan)]">{path}</span>
    <span className="text-[var(--muted)]">$</span>
    <span className="text-[var(--text)]">{cmd}</span>
  </div>
);

const SectionHeader = ({ command, title }) => (
  <div className="mb-8">
    <Prompt cmd={command} className="mb-3" />
    <h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
      <span className="text-[var(--green)]"># </span>
      {title}
    </h2>
  </div>
);

const Window = ({ title, children, className = '', accent = 'var(--muted)' }) => (
  <div
    className={`scanlines relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--panel)] shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)] ${className}`}
  >
    <div className="flex items-center gap-2 border-b border-[var(--border-soft)] bg-[var(--panel-2)] px-4 py-2.5">
      <span className="h-3 w-3 rounded-full bg-[var(--red)]" />
      <span className="h-3 w-3 rounded-full bg-[var(--amber)]" />
      <span className="h-3 w-3 rounded-full bg-[var(--green)]" />
      <span className="ml-3 truncate font-mono text-xs" style={{ color: accent }}>
        {title}
      </span>
    </div>
    <div className="relative p-5 sm:p-6">{children}</div>
  </div>
);

const TerminalPortfolio = () => {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <Terminal size={18} className="text-[var(--green)]" />
            <span className="text-[var(--green)]">~/</span>
            <span className="text-white">{profile.handle}</span>
          </a>
          <div className="hidden items-center gap-7 font-mono text-sm text-[var(--muted)] md:flex">
            <a className="transition hover:text-[var(--green)]" href="#work">
              ./work
            </a>
            <a className="transition hover:text-[var(--green)]" href="#experience">
              ./experience
            </a>
            <a className="transition hover:text-[var(--green)]" href="#contact">
              ./contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--green)] hover:text-[var(--green)]"
              aria-label="Open GitHub profile"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-[var(--muted)]">
                <MapPin size={13} className="text-[var(--cyan)]" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-[var(--green)]">
                <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_8px_var(--green)]" />
                available for platform work
              </span>
            </div>

            <Prompt cmd={<Typewriter text="whoami --verbose" />} className="mb-5 text-base" />

            <h1 className="font-['Space_Grotesk'] text-[clamp(2.6rem,7vw,5.2rem)] font-bold leading-[0.95] tracking-tight text-white">
              Cloud platforms <br />
              that <span className="text-[var(--green)] glow-text">ship clean.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              <span className="text-[var(--cyan)]">{'// '}</span>
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-[var(--green)] px-5 py-3 font-mono text-sm font-semibold text-[#04130a] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.7)]"
              >
                <Mail size={16} />
                ./contact.sh
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-5 py-3 font-mono text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--green)] hover:text-[var(--green)]"
              >
                <Github size={16} />
                git remote -v
              </a>
            </div>
          </div>

          <Window title="whoami.sh" accent="var(--green)">
            <div className="font-mono text-sm leading-7">
              <Prompt cmd="cat ./identity.json" className="mb-3" />
              <div className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg)]/60 p-4">
                <pre className="overflow-x-auto whitespace-pre-wrap break-words text-[13px] leading-7">
                  <span className="text-[var(--muted)]">{'{'}</span>
                  {'\n  '}
                  <span className="text-[var(--cyan)]">"name"</span>
                  <span className="text-[var(--muted)]">: </span>
                  <span className="text-[var(--amber)]">"{profile.name}"</span>
                  <span className="text-[var(--muted)]">,</span>
                  {'\n  '}
                  <span className="text-[var(--cyan)]">"role"</span>
                  <span className="text-[var(--muted)]">: </span>
                  <span className="text-[var(--amber)]">"{profile.title}"</span>
                  <span className="text-[var(--muted)]">,</span>
                  {'\n  '}
                  <span className="text-[var(--cyan)]">"focus"</span>
                  <span className="text-[var(--muted)]">: [</span>
                  <span className="text-[var(--green)]">"Azure"</span>
                  <span className="text-[var(--muted)]">, </span>
                  <span className="text-[var(--green)]">"Kubernetes"</span>
                  <span className="text-[var(--muted)]">, </span>
                  <span className="text-[var(--green)]">"GitOps"</span>
                  <span className="text-[var(--muted)]">, </span>
                  <span className="text-[var(--green)]">"IaC"</span>
                  <span className="text-[var(--muted)]">],</span>
                  {'\n  '}
                  <span className="text-[var(--cyan)]">"status"</span>
                  <span className="text-[var(--muted)]">: </span>
                  <span className="text-[var(--green)]">"online"</span>
                  {'\n'}
                  <span className="text-[var(--muted)]">{'}'}</span>
                </pre>
              </div>
              <Prompt cmd="systemctl status reliability" className="mt-4" />
              <p className="mt-2 pl-1 text-[13px] text-[var(--muted)]">
                <span className="text-[var(--green)]">●</span> active (running) — uptime{' '}
                <span className="text-[var(--text)]">10y+</span>
              </p>
            </div>
          </Window>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--panel)]/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[var(--border-soft)] sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-5 py-8 sm:px-8">
              <div className="font-['Space_Grotesk'] text-4xl font-bold text-[var(--green)] glow-text">
                {metric.value}
              </div>
              <div className="mt-2 font-mono text-xs text-[var(--muted)]">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--border)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader command="cat strengths.md" title="Platform signals" />
          <div className="grid gap-4 md:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:-translate-y-1 hover:border-[var(--green)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--green)] transition group-hover:border-[var(--green)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-['Space_Grotesk'] text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-[var(--border)] bg-[var(--panel)]/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader command="ls -la ~/projects" title="Selected work" />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:-translate-y-1 hover:border-[var(--cyan)]"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 font-mono text-xs text-[var(--cyan)]">
                    {project.label}
                  </span>
                  <ArrowUpRight
                    className="text-[var(--muted)] transition group-hover:text-[var(--cyan)]"
                    size={20}
                  />
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold leading-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">{project.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border-soft)] bg-[var(--bg)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-[var(--border)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader command="git log --author='Abhishek' --stat" title="Experience" />
          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm">
                  <span className="inline-flex items-center gap-1.5 text-[var(--amber)]">
                    <GitCommit size={15} />
                    {item.hash}
                  </span>
                  <span className="text-[var(--muted)]">{item.period}</span>
                </div>
                <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-bold text-white">
                  {item.role}
                  <span className="text-[var(--green)]"> @ </span>
                  <span className="text-[var(--cyan)]">{item.company}</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-7 text-[var(--muted)]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Workflow className="mt-1 shrink-0 text-[var(--green)]" size={15} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-[var(--border)] bg-[var(--panel)] py-6">
        <div className="mb-4 px-5 sm:px-8">
          <Prompt cmd="echo $TECH_STACK" className="text-xs" />
        </div>
        <div className="flex w-max animate-[marquee_34s_linear_infinite] gap-3">
          {[...tools, ...tools].map((tool, index) => (
            <span
              key={`${tool}-${index}`}
              className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-4 py-2 font-mono text-sm text-[var(--text)]"
            >
              <span className="text-[var(--green)]">▹ </span>
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Window title="contact.sh" accent="var(--green)" className="mx-auto max-w-4xl">
            <div className="font-mono">
              <Prompt cmd="./contact.sh --connect" className="mb-4" />
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold leading-tight text-white sm:text-5xl">
                Need a platform engineer who can{' '}
                <span className="text-[var(--green)]">ship and stabilize</span>?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                <span className="text-[var(--cyan)]">{'> '}</span>
                Open to platform, DevOps, and cloud reliability roles. Let&apos;s talk.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--green)] px-5 py-3 text-sm font-semibold text-[#04130a] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.7)]"
                >
                  <Mail size={16} />
                  {profile.email}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--green)] hover:text-[var(--green)]"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </Window>
          <p className="mt-10 text-center font-mono text-xs text-[var(--muted)]">
            <span className="text-[var(--green)]">$</span> exit 0 —{' '}
            {profile.name} · {profile.location}
          </p>
        </div>
      </section>
    </main>
  );
};

export default TerminalPortfolio;
