"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site-config";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <a className="wordmark" href="#top" aria-label={`${siteConfig.name} — home`} onClick={close}>
          <span className="monogram">{siteConfig.initials}</span>
          <span>{siteConfig.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a className="button button-small" href="#contact">Request a Conversation <span aria-hidden="true">↗</span></a>
        </nav>
        <button className="menu-button" type="button" aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span /> <span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="shell" aria-label="Mobile navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={close}>{item.label}</a>)}
          <a className="button" href="#contact" tabIndex={open ? 0 : -1} onClick={close}>Request a Conversation <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
