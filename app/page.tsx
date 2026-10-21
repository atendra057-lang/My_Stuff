import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { WorkShowcase } from "@/components/work-showcase";
import { caseStudies, experience, siteConfig, ventures } from "@/data/site-config";

const principles = [
  ["01", "Start with the real problem", "The strongest digital products earn their place by making a specific situation meaningfully better."],
  ["02", "Pair product with operational clarity", "Good software is not simply a feature set. It is a system that can be understood, used, and sustained."],
  ["03", "Build deliberately", "Speed matters, but so do sound decisions, honest communication, and work that is ready for what follows."],
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Founder · Technology Entrepreneur</p>
            <h1 id="hero-title">
              Building<br />
              digital products<br />
              <span className="hero-accent">that help businesses grow,</span><br />
              compete, and move forward.
            </h1>
            <p className="hero-intro">I&apos;m Atendra Maurya, a technology entrepreneur building digital solutions for modern businesses. Through CodeAux, I help businesses strengthen their digital presence with professionally designed websites, custom web applications, and mobile apps built around their goals.</p>
            <div className="hero-actions">
              <a className="button" href="#ventures">Explore My Ventures <span aria-hidden="true">↓</span></a>
              <a className="text-link light-link" href="#contact">Request a Conversation <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-details" aria-label="Professional identity">
              <div><span>Founder & CEO</span><strong>CodeAux</strong></div>
              <div><span>Founder</span><strong>Intent</strong></div>
              <div><span>Based in</span><strong>{siteConfig.location}</strong></div>
            </div>
          </div>
          <div className="hero-photo-mobile" aria-hidden="true">
            <div className="hero-photo-frame">
              <Image src="/images/focused-work.png" alt="Atendra Maurya" width={640} height={400} priority />
              <div className="hero-photo-corner" />
            </div>
          </div>
        </div>
      </section>
      <section className="identity-strip" aria-label="Professional focus"><div className="shell"><p>Technology ventures</p><span /> <p>Product thinking</p><span /> <p>Digital systems</p><span /> <p>Delhi, India</p></div></section>

      <section id="about" className="section paper about-section">
        <div className="shell about-grid">
          <SectionHeading number="01" eyebrow="About" title="A builder&apos;s approach to creating useful technology." />
          <div className="about-copy"><p className="lead">I work where product decisions, technical execution, and business context meet.</p><p>My focus is on turning real needs into clear digital experiences—whether that means guiding a company through a new web presence, shaping a web application, or exploring a new venture from its earliest questions.</p><p>I value work that is practical, well considered, and built with enough care to last beyond its first release.</p><a className="text-link" href="#contact">Start a professional conversation <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section id="ventures" className="section ink ventures-section">
        <div className="shell"><SectionHeading number="02" eyebrow="Ventures" title="Two ventures, each grounded in a clear purpose." /><div className="venture-list">{ventures.map((venture, index) => <article className="venture" key={venture.name}><div className="venture-index">0{index + 1}</div><div className="venture-main"><p className="venture-status">{venture.status}</p><h3>{venture.name}</h3><p className="venture-role">{venture.role}</p></div><p className="venture-description">{venture.description}</p><div className="venture-action">{venture.href ? <a className="circle-link" href={venture.href} target="_blank" rel="noreferrer" aria-label={`Visit ${venture.name}`}>↗</a> : <span className="intent-mark" aria-label="Intent is currently in development">—</span>}</div></article>)}</div></div>
      </section>

      <section className="section paper approach-section">
        <div className="shell"><SectionHeading number="03" eyebrow="Operating philosophy" title="A calm, practical standard for building." /><div className="principles">{principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="shell experience-grid"><SectionHeading number="04" eyebrow="Leadership & experience" title="Learning to lead through active contribution." /><div className="timeline">{experience.map((item) => <article className="experience-item" key={`${item.role}-${item.period}`}><div className="experience-period">{item.period}</div><div><h3>{item.role}</h3><p className="experience-org">{item.organisation}</p><p>{item.description}</p></div></article>)}</div></div>
      </section>

      <section id="work" className="section work-section">
        <div className="shell">
          <SectionHeading number="05" eyebrow="Selected work" title="Verified client transformations & digital systems." />
          <p className="work-intro">Live walkthrough recordings of client platforms, SaaS applications, and custom websites engineered through CodeAux.</p>
          <WorkShowcase projects={caseStudies} />
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="shell"><p className="eyebrow">06 · Contact</p><h2 id="contact-title">Let&apos;s begin with a<br /><em>considered conversation.</em></h2><p className="contact-intro">For a project, partnership, or professional exchange, get in touch directly. I read every message.</p><div className="contact-actions"><a className="button button-paper" href={`mailto:${siteConfig.email}`}>Email Atendra <span aria-hidden="true">↗</span></a><a className="text-link light-link" href={siteConfig.phoneHref}>{siteConfig.phone}</a><a className="text-link light-link" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div><div className="contact-links"><a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href={siteConfig.codeauxUrl} target="_blank" rel="noreferrer">CodeAux <span aria-hidden="true">↗</span></a><span>{siteConfig.location}</span></div></div></section>
      <footer><div className="shell"><span>© {new Date().getFullYear()} {siteConfig.name}</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
