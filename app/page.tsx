"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      /* =========================
         HERO ENTRANCE
      ========================== */

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
        .from(
          ".hero-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
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

      /* =========================
         BEYOND THE CODE
      ========================== */

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
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="min-h-screen bg-[#0a0a0a] text-white"
    >
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
            className="nav-item transition-colors duration-300 hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="nav-item transition-colors duration-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="nav-item transition-colors duration-300 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="nav-item transition-colors duration-300 hover:text-white"
          >
            Experience
          </a>
        </div>

        <a
          href="#contact"
          className="nav-item rounded-full border border-zinc-700 px-5 py-2 text-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
        >
          Let&apos;s talk
        </a>
      </nav>

      {/* =========================
         HERO
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

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="hero-button rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              View my work →
            </a>

            <a
              href="#about"
              className="hero-button rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-900"
            >
              More about me
            </a>
          </div>
        </div>

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

          <div className="beyond-cards mt-16 grid gap-5 md:grid-cols-3">
            <article
  className="beyond-card group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600"
  style={{
    opacity: 0,
    transform: "translateY(70px)",
  }}
>
              <div className="mb-12 text-4xl">🎾</div>

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-blue-500">
                Outside work
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Tennis
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                I enjoy the strategy, competition, and constant challenge that
                comes with the game. It&apos;s one of the best ways for me to
                switch off from a screen and stay competitive.
              </p>
            </article>

            <article
  className="beyond-card group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600"
  style={{
    opacity: 0,
    transform: "translateY(70px)",
  }}
>
              <div className="mb-12 text-4xl">🤝</div>

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-blue-500">
                People & teams
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Communities
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                I enjoy working with people, contributing to communities,
                mentoring, and being part of teams where ideas turn into
                something real.
              </p>
            </article>

            <article
  className="beyond-card group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600"
  style={{
    opacity: 0,
    transform: "translateY(70px)",
  }}
>
              <div className="mb-12 text-4xl">⚡</div>

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-blue-500">
                Mindset
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Curiosity
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                I&apos;m always exploring. Whether it&apos;s AI, blockchain, a
                new technology, or a completely unfamiliar problem, I enjoy
                learning by getting my hands dirty and building.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}