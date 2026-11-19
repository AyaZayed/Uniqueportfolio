import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  HandHeart,
  Linkedin,
  Mail,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import cloudsVideo from "../imports/clouds1.webm";
import cloudsVideoMp4 from "../imports/clouds1.mp4";
import cloudsPoster from "../imports/hero.jpg";
import leRubImage from "figma:asset/39709ba5f4616fba1a206b3e025abafdd167c9c5.png";
import moodImage from "figma:asset/c7476971d1e0dc9ef00a6bf60db257ac9fc55659.png";
import crowdfundrImage from "figma:asset/edb8e44862ddcc1a00eb41cd17be012dc441e71e.png";

const projects = [
  {
    title: "Le Rub",
    number: "01",
    category: "Sunscreen e-commerce",
    description:
      "A bright, responsive storefront that makes sun care feel simple, tactile, and easy to shop.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "Neon"],
    image: leRubImage,
    href: "https://lerub.vercel.app/",
    background: "bg-[#f4c54d]",
    ink: "text-[#251900]",
    border: "border-[#251900]",
    decoration: "sun",
  },
  {
    title: "Mood",
    number: "02",
    category: "AI-powered journaling",
    description:
      "A private space to track your inner universe, understand emotions, and notice patterns over time.",
    tech: ["Next.js", "Gemini AI", "Prisma", "TypeScript"],
    image: moodImage,
    href: "https://mood-journal-nine.vercel.app/",
    background: "bg-[#aaa7ec]",
    ink: "text-[#17142e]",
    border: "border-[#17142e]",
    decoration: "moon",
  },
  {
    title: "Crowdfundr",
    number: "03",
    category: "Community fundraising",
    description:
      "A direct, accessible crowdfunding platform for discovering and supporting campaigns that matter.",
    tech: ["JavaScript", "REST API", "Responsive UI"],
    image: crowdfundrImage,
    href: "https://github.com/AyaZayed/crowdfundr-vanilla-js",
    background: "bg-[#ef8f7d]",
    ink: "text-[#32110d]",
    border: "border-[#32110d]",
    decoration: "heart",
  },
];

const experiences = [
  {
    period: "07.2025 — 12.2025",
    title: "MERN Stack Development Intern",
    company: "Information Technology Institute",
    place: "Zagazig, Egypt",
    detail:
      "Built full-stack products with React, Next.js, Angular, Node.js and MongoDB while collaborating through Git and Docker.",
  },
  {
    period: "07.2024 — 06.2025",
    title: "Programming Instructor",
    company: "Nabta Academy",
    place: "Mansoura, Egypt",
    detail:
      "Taught Scratch and Python to young learners, leading a team to the Best Programming Award at a Lego competition.",
  },
  {
    period: "2023 — 2025",
    title: "Freelance Developer",
    company: "Self-employed",
    place: "Remote",
    detail:
      "Designed and developed a custom client dashboard and taught programming and digital skills independently.",
  },
  {
    period: "08.2021 — 05.2022",
    title: "PR & Front-End Volunteer",
    company: "CIS Team",
    place: "Remote",
    detail:
      "Contributed front-end implementation and communications support to a student-led technology community.",
  },
];

const skills = [
  ["Frontend", "React.js", "Next.js", "Angular", "Tailwind CSS", "HTML / CSS"],
  ["Backend", "Node.js", "Express", "MongoDB", "Prisma", "Firebase"],
  ["Languages", "JavaScript", "TypeScript", "Arabic — Native", "English — Fluent"],
  ["Tools", "Git / GitHub", "Docker", "Command Line", "REST APIs"],
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail?: string;
}) {
  return (
    <div className="grid grid-cols-[3.5rem_1fr] border-b-2 border-foreground pb-5 md:grid-cols-[7rem_1fr_auto] md:items-end">
      <span className="font-mono text-xs font-bold tracking-widest">{number}</span>
      <h2 className="font-display text-[clamp(2.7rem,7vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.055em]">
        {title}
      </h2>
      {detail && (
        <p className="col-start-2 mt-5 max-w-[35ch] text-sm leading-relaxed text-muted-foreground md:col-start-3 md:mt-0 md:text-right">
          {detail}
        </p>
      )}
    </div>
  );
}

function ProjectDecoration({ type }: { type: string }) {
  const Icon = type === "sun" ? Sun : type === "moon" ? Moon : HandHeart;
  const positions = [
    "left-[4%] top-[14%] h-12 w-12 rotate-12 md:h-20 md:w-20",
    "right-[5%] top-[9%] h-8 w-8 -rotate-12 md:h-14 md:w-14",
    "bottom-[7%] left-[7%] h-8 w-8 -rotate-12 md:h-14 md:w-14",
    "bottom-[5%] right-[4%] h-14 w-14 rotate-12 md:h-24 md:w-24",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {positions.map((position, index) => (
        <motion.div
          key={`${type}-${index}`}
          className={`absolute ${position}`}
          initial={{ opacity: 0, scale: 0.6, rotate: index % 2 ? -20 : 20 }}
          animate={{ opacity: 0.2, scale: 1, rotate: index % 2 ? -8 : 8 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
        >
          <Icon className="h-full w-full" strokeWidth={1.4} />
        </motion.div>
      ))}
    </div>
  );
}

function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const move = (direction: number) => {
    setIndex((current) => (current + direction + projects.length) % projects.length);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="work" className="border-y-2 border-foreground">
      <div className="bg-background px-5 py-12 md:px-10 md:py-20 lg:px-16">
        <SectionHeader
          number="02"
          title="Selected work"
          detail="Three digital products, each built around a different human need."
        />
      </div>

      <motion.div
        key={project.title}
        className={`relative min-h-[760px] overflow-hidden px-5 py-8 transition-colors duration-500 md:min-h-[700px] md:px-10 md:py-12 lg:px-16 ${project.background} ${project.ink}`}
      >
        <ProjectDecoration type={project.decoration} />
        <div className="relative z-10 flex items-center justify-between border-b-2 border-current pb-4 font-mono text-xs font-bold uppercase tracking-[0.16em]">
          <span>Project / {project.number}</span>
          <span>{project.category}</span>
        </div>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) move(1);
            if (info.offset.x > 80) move(-1);
          }}
          className="relative z-10 grid cursor-grab gap-8 py-8 active:cursor-grabbing md:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)] md:items-center md:gap-12"
        >
          <motion.a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className={`group block border-2 bg-[#f8f3ec] p-2 ${project.border}`}
            aria-label={`Open ${project.title} project`}
          >
            <ImageWithFallback
              src={project.image}
              alt={`${project.title} website screenshot`}
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[0.985]"
            />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <h3
              className={`py-2 font-display uppercase leading-[0.82] tracking-[-0.06em] [overflow-wrap:anywhere] ${
                project.title === "Crowdfundr"
                  ? "text-[clamp(3.1rem,7.2vw,7.2rem)]"
                  : "text-[clamp(4.5rem,11vw,10rem)]"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-7 max-w-[34rem] text-lg font-semibold leading-snug md:text-xl">
              {project.description}
            </p>
            <ul className={`mt-8 border-t-2 ${project.border}`}>
              {project.tech.map((technology) => (
                <li
                  key={technology}
                  className={`flex items-center justify-between border-b ${project.border} py-2.5 font-mono text-xs font-bold uppercase tracking-wider`}
                >
                  {technology}
                  <span aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-2 border-b-2 ${project.border} pb-1 font-bold uppercase tracking-tight transition-[gap] hover:gap-4`}
            >
              View project <ArrowUpRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative z-10 flex items-end justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Choose a project">
            {projects.map((item, itemIndex) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setIndex(itemIndex)}
                className={`h-3 border border-current transition-all ${
                  itemIndex === index ? "w-12 bg-current" : "w-3 bg-transparent"
                }`}
                aria-label={`Show ${item.title}`}
                aria-selected={itemIndex === index}
                role="tab"
              />
            ))}
          </div>
          <div className="flex">
            <button
              type="button"
              onClick={() => move(-1)}
              className={`grid h-14 w-14 place-items-center border-2 ${project.border} transition-colors hover:bg-foreground hover:text-background`}
              aria-label="Previous project"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className={`-ml-0.5 grid h-14 w-14 place-items-center border-2 ${project.border} transition-colors hover:bg-foreground hover:text-background`}
              aria-label="Next project"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderLeaving, setLoaderLeaving] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  // React doesn't reliably set the `muted` attribute, which blocks autoplay.
  // Set it on the element and retry play() when the browser allows it.
  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    const tryPlay = () => {
      if (v.paused) v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("pointerdown", tryPlay, { once: true });
    window.addEventListener("touchstart", tryPlay, { once: true });
    return () => {
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLoaderLeaving(true), 1200);
    const removeTimer = window.setTimeout(() => setShowLoader(false), 2050);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {showLoader && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: loaderLeaving ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-primary p-5 text-primary-foreground sm:p-8"
          role="status"
          aria-live="polite"
          aria-label="Loading Aya Zayed's portfolio"
        >
          <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">
            <span>Portfolio / 2026</span>
            <motion.span
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            >
              Loading
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(6rem,26vw,24rem)] uppercase leading-[0.72] tracking-[-0.075em]"
            >
              Aya
            </motion.p>
          </div>

          <div>
            <div className="mb-3 flex justify-between font-mono text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
              <span>Design + Development</span>
              <span>Mansoura, EG</span>
            </div>
            <div className="h-1 overflow-hidden bg-primary-foreground/25">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.15, ease: [0.65, 0, 0.35, 1] }}
                className="h-full origin-left bg-[#f3a08e]"
              />
            </div>
          </div>
        </motion.div>
      )}

      <header id="top" className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-background p-4 sm:p-8">
        <motion.video
          ref={heroVideoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={cloudsPoster}
          aria-hidden="true"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={loaderLeaving ? { scale: 1, opacity: 1 } : { scale: 1.08, opacity: 0 }}
          transition={{ scale: { duration: 2.4, ease: [0.2, 0.7, 0.2, 1] }, opacity: { duration: 0.8 } }}
        >
          <source src={cloudsVideoMp4} type="video/mp4" />
          <source src={cloudsVideo} type="video/webm" />
        </motion.video>
        <div className="absolute inset-0 bg-[#faf7f1]/84" />

        <div className="relative z-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={loaderLeaving ? { y: 0 } : { y: "105%" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="mt-[0.04em] font-display text-[clamp(8rem,34vw,33rem)] uppercase leading-[0.7] tracking-[-0.075em] text-primary"
            >
              Aya
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={loaderLeaving ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-8 max-w-[39rem] text-sm font-bold leading-snug sm:mt-10 sm:text-base md:text-lg"
          >
            MERN Stack Developer based in Egypt and working remotely. Building digital experiences with an editorial, modern, and thoughtful approach.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={loaderLeaving ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Zayed"
          className="pointer-events-none absolute bottom-[4.8rem] right-2 z-10 hidden font-display text-[clamp(6rem,16vw,14rem)] uppercase leading-[0.7] tracking-[-0.065em] text-primary sm:block [writing-mode:vertical-rl]"
        >
          Zayed
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={loaderLeaving ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-20 left-4 z-10 sm:hidden"
        >
          <p className="font-display text-[clamp(4.5rem,23vw,7rem)] uppercase leading-none tracking-[-0.065em] text-primary">
            Zayed
          </p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 15 }}
          animate={loaderLeaving ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          aria-label="Main navigation"
          className="relative z-20 flex items-center gap-5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] sm:gap-14 sm:text-xs"
        >
          {[
            ["Work", "#work"],
            ["Profile", "#profile"],
            ["Contact", "#contact"],
          ].map(([label, href], index) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="border-b-2 border-transparent py-2 hover:border-current"
            >
              <span className="mr-1 opacity-50">0{index + 1}</span> {label}
            </motion.a>
          ))}
          <motion.span
            className="ml-auto mr-0 sm:mr-[7rem]"
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          >
            2026
          </motion.span>
        </motion.nav>
      </header>

      <main>
        <section id="profile" className="px-5 py-20 md:px-10 md:py-32 lg:px-16">
          <SectionHeader number="01" title="Profile" />
          <Reveal className="grid gap-12 pt-10 md:grid-cols-[1fr_2fr] md:pt-16">
            <div className="font-mono text-xs font-bold uppercase leading-loose tracking-[0.16em]">
              <p>Computer Science</p>
              <p>Bioinformatics</p>
              <p>Mansoura University</p>
              <p>2018 — 2022</p>
            </div>
            <div>
              <p className="max-w-[25ch] text-[clamp(2rem,5.5vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.05em]">
                From teaching kids to code to building AI-powered products, I turn curious ideas into clear digital experiences.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold uppercase">
                <span>Problem solver</span>
                <span>Creative builder</span>
                <span>Always learning</span>
              </div>
            </div>
          </Reveal>
        </section>

        <Projects />

        <section id="experience" className="px-5 py-20 md:px-10 md:py-32 lg:px-16">
          <SectionHeader
            number="03"
            title="Experience"
            detail="A path through product building, teaching, and collaborative technology."
          />
          <div className="mt-12 md:mt-20">
            {experiences.map((experience, index) => (
              <Reveal key={experience.title} delay={index * 0.05}>
                <article className="group grid gap-4 border-t border-foreground py-7 md:grid-cols-[1fr_2fr_1.2fr] md:gap-8 md:py-10">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider">
                    {experience.period}
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight tracking-tight transition-transform group-hover:translate-x-2 md:text-4xl">
                      {experience.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-accent">
                      {experience.company} / {experience.place}
                    </p>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{experience.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y-2 border-foreground bg-primary px-5 py-20 text-primary-foreground md:px-10 md:py-28 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em]">04 / Toolkit</span>
              <h2 className="mt-5 font-display text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.72] tracking-[-0.06em]">
                Skills
              </h2>
            </div>
            <div className="grid sm:grid-cols-2">
              {skills.map(([category, ...items], index) => (
                <Reveal
                  key={category}
                  delay={index * 0.06}
                  className="border-t border-primary-foreground/60 py-6 sm:px-6 sm:odd:border-r"
                >
                  <h3 className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f3a08e]">
                    {String(index + 1).padStart(2, "0")} / {category}
                  </h3>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item} className="text-xl font-semibold tracking-tight md:text-2xl">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-accent px-5 py-20 text-accent-foreground md:px-10 md:py-28 lg:px-16">
          <Sparkles className="absolute -right-12 top-8 h-64 w-64 opacity-15" strokeWidth={1} aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex items-center justify-between border-b-2 border-current pb-5 font-mono text-xs font-bold uppercase tracking-[0.18em]">
              <span>05 / Contact</span>
              <span>Open to opportunities</span>
            </div>
            <p className="mt-12 max-w-[14ch] font-display text-[clamp(4.2rem,12vw,12rem)] uppercase leading-[0.76] tracking-[-0.065em]">
              Let's make something work.
            </p>
            <a
              href="mailto:ayazayedofficial@gmail.com"
              className="mt-14 inline-flex max-w-full items-center gap-3 border-b-2 border-current pb-2 text-[clamp(1.1rem,3vw,2.6rem)] font-bold tracking-tight transition-[gap] hover:gap-6"
            >
              <Mail className="h-6 w-6 shrink-0" />
              <span className="break-all">ayazayedofficial@gmail.com</span>
              <ArrowUpRight className="hidden h-7 w-7 shrink-0 sm:block" />
            </a>
            <div className="mt-20 flex flex-wrap gap-4 border-t-2 border-current pt-5">
              <a
                href="https://github.com/AyaZayed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold uppercase hover:underline"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayazayed414"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold uppercase hover:underline"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="#top" className="ml-auto font-bold uppercase hover:underline">
                Back to top ↑
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-wrap justify-between gap-3 bg-foreground px-5 py-5 font-mono text-[10px] font-bold uppercase tracking-widest text-background md:px-10 lg:px-16">
        <span>© 2026 Aya Zayed</span>
        <span>Designed & developed in Mansoura</span>
      </footer>
    </div>
  );
}
