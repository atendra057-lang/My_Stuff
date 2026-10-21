"use client";

import { useEffect, useRef, useState } from "react";
import { CaseStudy } from "@/data/site-config";

interface WorkShowcaseProps {
  projects: CaseStudy[];
}

export function WorkShowcase({ projects }: WorkShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "clinical", label: "Clinical & Health" },
    { id: "ai", label: "AI & Creative" },
    { id: "enterprise", label: "Enterprise SaaS" },
    { id: "engineering", label: "Semiconductor" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "clinical") return project.id.includes("mindbridge");
    if (activeFilter === "ai") return project.id.includes("rasai");
    if (activeFilter === "enterprise") return project.id.includes("growzy");
    if (activeFilter === "engineering") return project.id.includes("avinash");
    return true;
  });

  return (
    <div className="work-showcase-container">
      {/* Category Filter Pills */}
      <div className="work-filter-bar" role="tablist" aria-label="Filter work projects">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === cat.id}
            className={`filter-pill ${activeFilter === cat.id ? "is-active" : ""}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 2-Column Responsive Video Showcase Grid */}
      <div className="work-grid">
        {filteredProjects.map((project, index) => (
          <WorkCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

function WorkCard({ project, index }: { project: CaseStudy; index: number }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver to play when in viewport and pause when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {
              // Browser autoplay policy fallback
              setIsPlaying(false);
            });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <article
      className="work-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser Window Mockup Frame */}
      <div className="browser-mockup">
        <div className="browser-header">
          <div className="browser-dots" aria-hidden="true">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="browser-address">
            <svg
              className="browser-lock-icon"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>{project.browserUrl}</span>
          </div>
          <div className="browser-badge">
            <span className="live-dot" aria-hidden="true" />
            <span>Walkthrough</span>
          </div>
        </div>

        {/* Video Player */}
        <div className="video-viewport" onClick={togglePlay} role="button" tabIndex={0} aria-label={`Toggle video playback for ${project.title}`}>
          <video
            ref={videoRef}
            src={project.videoSrc}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className="work-video"
          />
          {/* Subtle Play / Pause Overlay on Hover or Pause */}
          <div className={`video-control-overlay ${!isPlaying || isHovered ? "is-visible" : ""}`}>
            <span className="play-pause-badge">
              {isPlaying ? "❚❚ Pause" : "▶ Play"}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="work-card-body">
        <div className="work-meta">
          <span className="work-badge">{project.badge}</span>
          <span className="work-index">0{index + 1}</span>
        </div>

        <h3 className="work-title">
          {project.title}
        </h3>

        <p className="work-headline">{project.headline}</p>

        <p className="work-description">{project.description}</p>

        {/* Highlight Tags */}
        <div className="work-tags" aria-label="Project tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
