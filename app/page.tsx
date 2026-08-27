"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import {
  Activity,
  Users,
  Sparkles,
  Zap,
  Target,
  Flame,
  Globe,
  Code2,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const magneticZone = useRef<HTMLDivElement>(null);
  const magneticButton = useRef<HTMLAnchorElement>(null);

  /* =========================
     MAGNETIC BUTTON EFFECT
  ========================== */

  useEffect(() => {
    const zone = magneticZone.current;
    const button = magneticButton.current;

    if (!zone || !button) return;

    const strength = 0.25;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = zone.getBoundingClientRect();

      const x = gsap.utils.mapRange(
        rect.left,
        rect.right,
        -rect.width / 2,
        rect.width / 2,
        e.clientX
      );

      const y = gsap.utils.mapRange(
        rect.top,
        rect.bottom,
        -rect.height / 2,
        rect.height / 2,
        e.clientY
      );

      gsap.to(button, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    zone.addEventListener("mousemove", handleMouseMove);
    zone.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      zone.removeEventListener("mousemove", handleMouseMove);
      zone.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  /* =========================
     GSAP ANIMATIONS & SMOOTH SCROLL
  ========================== */

  useGSAP(
    () => {
      /* GSAP SCROLLSMOOTHER */
      if (container.current && contentRef.current) {
        ScrollSmoother.create({
          wrapper: container.current,
          content: contentRef.current,
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
        });
      }

      /* HERO ENTRANCE */

      const heroTl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTl
        .from(".nav-item", {
          y: -20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
        })
        .from(
          ".hero-tag",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-line-one",
          {
            y: 120,
            opacity: 0,
            duration: 1,
          },
          "-=0.2"
        )
        .from(
          ".hero-line-two",
          {
            y: 120,
            opacity: 0,
            duration: 1,
          },
          "-=0.65"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .to(
          ".hero-buttons",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-status",
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        );

      /* BEYOND THE CODE */

      const beyondTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".beyond-section",
          start: "top 70%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      beyondTl
        .to(".beyond-heading", {
          y: 0,
          opacity: 1,
          duration: 0.8,
        })
        .to(
          ".beyond-card",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.25"
        );
      /* PROJECTS */
      const projectsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 70%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      projectsTl
        .to(".projects-heading", {
          y: 0,
          opacity: 1,
          duration: 0.8,
        })
        .to(
          ".project-card",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.25"
        );

      /* EXPERIENCE */
      const experienceTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 70%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      experienceTl
        .to(".experience-heading", {
          y: 0,
          opacity: 1,
          duration: 0.8,
        })
        .to(
          ".experience-card",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.25"
        );

      /* CONTACT */
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      contactTl.to(".contact-content", {
        y: 0,
        opacity: 1,
        duration: 0.8,
      });
    },
    { scope: container }
  );

  /* =========================
     SMOOTH SCROLL TO ANCHORS
  ========================== */
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(target, true, "top top");
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div id="smooth-wrapper" ref={container} className="bg-[#0a0a0a] text-white">
      <div id="smooth-content" ref={contentRef}>
        <main className="min-h-screen">
          {/* =========================
             NAVBAR
          ========================== */}

          <nav className="flex items-center justify-between px-6 py-6 md:px-12">
            <div className="nav-item text-xl font-semibold tracking-tight">
              Manan<span className="text-blue-500">.</span>
            </div>

            <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="nav-item transition-colors duration-300 hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "#about")}
                className="nav-item transition-colors duration-300 hover:text-white"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="nav-item transition-colors duration-300 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, "#experience")}
                className="nav-item transition-colors duration-300 hover:text-white"
              >
                Experience
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="nav-item rounded-full border border-zinc-700 px-5 py-2 text-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Let&apos;s talk
            </a>
          </nav>

      {/* =========================
         HERO SECTION
      ========================== */}

      <section
        id="home"
        className="flex min-h-[calc(100vh-88px)] flex-col justify-center px-6 pb-10 md:px-12"
      >
        <div className="max-w-5xl">
          <p className="hero-tag mb-6 text-sm uppercase tracking-[0.3em] text-blue-500">
            Computer Science Student · Developer
          </p>

          <div className="overflow-hidden">
            <h1 className="hero-line-one text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
              I build things
            </h1>
          </div>

          <div className="overflow-hidden">
            <h1 className="hero-line-two text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
              for the <span className="text-zinc-600">web.</span>
            </h1>
          </div>

          <p className="hero-description mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            I&apos;m Manan Choudhary — a developer, researcher, and builder who
            enjoys turning ideas into real projects. From the web to AI and
            blockchain, I like exploring technology and taking on problems that
            challenge me.
          </p>

          {/* HERO BUTTONS */}

          <div
            className="hero-buttons mt-10 flex flex-wrap items-center gap-4"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            {/* MAGNETIC VIEW MY WORK BUTTON */}

            <div
              ref={magneticZone}
              className="inline-flex items-center justify-center p-4"
            >
              <a
                ref={magneticButton}
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-lime-300 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_20px_rgba(74,222,128,0.12)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.35)]"
              >
                <span>View my work</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* MORE ABOUT ME BUTTON */}

            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="rounded-full border border-zinc-700 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-900"
            >
              More about me
            </a>
          </div>
        </div>

        {/* STATUS */}

        <div className="hero-status mt-auto flex items-center gap-3 pt-16 text-sm text-zinc-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Currently building, learning, and exploring.
        </div>
      </section>

      {/* =========================
         BEYOND THE CODE
      ========================== */}

      <section
        id="about"
        className="beyond-section px-6 py-28 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-6xl">
          {/* SECTION HEADING */}

          <div
            className="beyond-heading max-w-2xl"
            style={{
              opacity: 0,
              transform: "translateY(50px)",
            }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-blue-500">
              01 / Beyond the code
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              There&apos;s more to me
              <br />
              than just <span className="text-zinc-600">code.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              Technology is a big part of my life, but so are the people,
              communities, challenges, and experiences that shape how I think
              and work.
            </p>
          </div>

          {/* BENTO GRID */}

          <div className="beyond-cards mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* TENNIS / HIGH PERFORMANCE (Span 2 columns) */}

            <article
              className="beyond-card group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 p-8 md:col-span-2 transition-all duration-500 hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]"
              style={{
                opacity: 0,
                transform: "translateY(70px)",
              }}
            >
              {/* Background ambient glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Activity className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold">
                    Outside Work
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Sport
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Tennis & Tactical Focus
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-zinc-400 text-sm md:text-base">
                  I enjoy the strategy, rapid anticipation, and physical challenge of tennis.
                  It&apos;s my favorite way to disconnect from the screen, recalibrate my focus, and stay competitive.
                </p>
              </div>

              {/* Metric tags */}
              <div className="mt-8 flex flex-wrap gap-2.5 pt-4 border-t border-zinc-800/60">
                <div className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300">
                  <Target className="h-3.5 w-3.5 text-blue-400" />
                  <span>Strategic Decision Making</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  <span>Instant Reflexes</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300">
                  <Flame className="h-3.5 w-3.5 text-rose-400" />
                  <span>Mental Resilience</span>
                </div>
              </div>
            </article>

            {/* COMMUNITIES (Span 1 column) */}

            <article
              className="beyond-card group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 p-8 transition-all duration-500 hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.06)]"
              style={{
                opacity: 0,
                transform: "translateY(70px)",
              }}
            >
              {/* Background ambient glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-semibold">
                  People & Teams
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white">
                  Communities
                </h3>
                <p className="mt-4 leading-relaxed text-zinc-400 text-sm">
                  Working with driven people, mentoring developers, and contributing to tech ecosystems where ideas turn into reality.
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                <span className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300">
                  Hackathons
                </span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300">
                  Open Source
                </span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300">
                  Mentorship
                </span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300">
                  Tech Clubs
                </span>
              </div>
            </article>

            {/* CURIOSITY & TECH RADAR (Span full 3 columns) */}

            <article
              className="beyond-card group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 p-8 md:col-span-3 transition-all duration-500 hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(52,211,153,0.06)]"
              style={{
                opacity: 0,
                transform: "translateY(70px)",
              }}
            >
              {/* Background ambient glow */}
              <div className="pointer-events-none absolute -left-12 -top-12 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold">
                      Mindset
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    Curiosity & Exploration
                  </h3>
                  <p className="mt-2 max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed">
                    Always diving head-first into emerging frontiers. I enjoy learning by getting my hands dirty, dissecting complex systems, and building with new paradigms.
                  </p>
                </div>

                {/* Living radar badges */}
                <div className="flex flex-wrap md:flex-col gap-2.5 shrink-0">
                  <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2 text-xs font-medium text-zinc-200">
                    <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                    <span>AI & Agentic Systems</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2 text-xs font-medium text-zinc-200">
                    <Globe className="h-3.5 w-3.5 text-blue-400" />
                    <span>Distributed & Web3 Tech</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2 text-xs font-medium text-zinc-200">
                    <Layers className="h-3.5 w-3.5 text-purple-400" />
                    <span>Creative UI & GSAP</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
         PROJECTS SECTION
      ========================== */}

      <section
        id="projects"
        className="projects-section px-6 py-28 md:px-12 md:py-36 border-t border-zinc-900"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="projects-heading max-w-2xl"
            style={{ opacity: 0, transform: "translateY(50px)" }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-blue-500">
              02 / Featured Work
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Crafted with <span className="text-zinc-600">precision.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              A selection of projects exploring web development, intelligent systems, and distributed technologies.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div
              className="project-card group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:border-zinc-600"
              style={{ opacity: 0, transform: "translateY(70px)" }}
            >
              <div className="h-48 w-full rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center border border-zinc-800/80 mb-6 group-hover:border-zinc-700 transition-colors">
                <span className="text-5xl">⚡</span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Full-Stack Platform</h3>
                <span className="text-xs font-mono text-zinc-500">Next.js / TypeScript</span>
              </div>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                High performance web application featuring real-time state synchronization, smooth GSAP animations, and scalable API architecture.
              </p>
            </div>

            <div
              className="project-card group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:border-zinc-600"
              style={{ opacity: 0, transform: "translateY(70px)" }}
            >
              <div className="h-48 w-full rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center border border-zinc-800/80 mb-6 group-hover:border-zinc-700 transition-colors">
                <span className="text-5xl">🧠</span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">AI & Data Pipeline</h3>
                <span className="text-xs font-mono text-zinc-500">Python / PyTorch</span>
              </div>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Automated machine learning pipeline with custom fine-tuning workflows, inference optimization, and structured evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         EXPERIENCE SECTION
      ========================== */}

      <section
        id="experience"
        className="experience-section px-6 py-28 md:px-12 md:py-36 border-t border-zinc-900"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="experience-heading max-w-2xl"
            style={{ opacity: 0, transform: "translateY(50px)" }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-blue-500">
              03 / Journey
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Experience & <span className="text-zinc-600">Roles.</span>
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            <div
              className="experience-card rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:border-zinc-700"
              style={{ opacity: 0, transform: "translateY(70px)" }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">Software Engineer & Researcher</h3>
                  <p className="text-sm text-zinc-400">Independent Research & Building</p>
                </div>
                <span className="text-xs font-mono text-zinc-500">Present</span>
              </div>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Exploring cutting-edge full-stack systems, machine learning architectures, and modern interactive UI designs with GSAP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         CONTACT SECTION
      ========================== */}

      <section
        id="contact"
        className="contact-section px-6 py-28 md:px-12 md:py-36 border-t border-zinc-900"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="contact-content"
            style={{ opacity: 0, transform: "translateY(50px)" }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-blue-500">
              04 / Get in Touch
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
              Let&apos;s build something <span className="text-zinc-600">together.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              Have an idea, project, or opportunity you&apos;d like to discuss? Feel free to reach out.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="mailto:contact@example.com"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200"
              >
                Send an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 px-6 py-12 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Manan Choudhary. All rights reserved.
      </footer>
    </main>
  </div>
</div>
  );
}