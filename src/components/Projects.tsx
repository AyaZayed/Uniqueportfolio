import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import leRubImg from 'figma:asset/39709ba5f4616fba1a206b3e025abafdd167c9c5.png';
import moodImg from 'figma:asset/c7476971d1e0dc9ef00a6bf60db257ac9fc55659.png';
import crowdfundrImg from 'figma:asset/edb8e44862ddcc1a00eb41cd17be012dc441e71e.png';

const projects = [
  {
    title: 'Le Rub',
    description: 'Sunscreen E-Commerce Website',
    fullDescription: 'A modern e-commerce platform for sunscreen products with a beautiful, responsive design.',
    tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'Neon Database'],
    theme: 'sun',
    link:"https://lerub.vercel.app/",
    bgColor: 'bg-orange-100',
    accentColor: 'bg-orange-400',
    image: "https://res.cloudinary.com/dijc5luus/image/upload/v1764374985/le_rub_qofndx.png",
  },
  {
    title: 'Mood',
    description: 'AI-Powered Journaling App',
    fullDescription: 'Track your inner universe. AI-powered journaling that analyzes your emotions and tracks mood patterns over time.',
    tech: ['Next.js', 'Google Generative AI', 'Prisma', 'TypeScript'],
    theme: 'moon',
    link:"https://mood-journal-nine.vercel.app/",
    bgColor: 'bg-indigo-100',
    accentColor: 'bg-indigo-400',
    image: "https://res.cloudinary.com/dijc5luus/image/upload/v1764374965/mood_journal_o93nuw.png",
  },
  {
    title: 'Crowdfundr',
    description: 'Crowdfunding Platform',
    fullDescription: 'A crowdfunding platform similar to GoFundMe, enabling people to support campaigns that matter.',
    tech: ['Vanilla JavaScript', 'REST API', 'Responsive Design'],
    theme: 'heart',
    link:"https://github.com/AyaZayed/crowdfundr-vanilla-js",
    bgColor: 'bg-rose-100',
    accentColor: 'bg-rose-400',
    image: "https://res.cloudinary.com/dijc5luus/image/upload/v1764374945/Screenshot_2025-10-17_171426_op8cbg.png",
  },
];

// SVG Icons components
function SunIcon({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function HeartIcon({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function FloatingIcons({ theme }: { theme: string }) {
  const positions = [
    { top: '10%', left: '5%', size: 'w-8 h-8', delay: 0 },
    { top: '20%', right: '10%', size: 'w-12 h-12', delay: 0.2 },
    { top: '50%', left: '8%', size: 'w-10 h-10', delay: 0.4 },
    { bottom: '15%', right: '5%', size: 'w-16 h-16', delay: 0.1 },
    { bottom: '30%', left: '15%', size: 'w-6 h-6', delay: 0.3 },
    { top: '35%', right: '20%', size: 'w-8 h-8', delay: 0.5 },
    { top: '60%', right: '15%', size: 'w-10 h-10', delay: 0.2 },
    { bottom: '40%', left: '10%', size: 'w-12 h-12', delay: 0.6 },
  ];

  const Icon = theme === 'sun' ? SunIcon : theme === 'moon' ? MoonIcon : HeartIcon;
  const color = theme === 'sun' ? 'text-orange-400' : theme === 'moon' ? 'text-indigo-400' : 'text-rose-400';

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} opacity-20`}
          style={pos}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5, delay: pos.delay }}
        >
          <Icon className={pos.size} />
        </motion.div>
      ))}
    </>
  );
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className={`absolute inset-0 ${currentProject.bgColor} transition-colors duration-700`}
        key={currentIndex}
      />

      {/* Floating icons */}
      <motion.div
        key={`icons-${currentIndex}`}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FloatingIcons theme={currentProject.theme} />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto" />
        </div>

        {/* Project slider */}
        <div className="relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-slate-900"
            >
              <a href={currentProject.link} className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="h-full min-h-[400px] border-r-4 border-slate-900">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content side */}
                <div className="p-12">
                  <div className="mb-6">
                    <h3 className="text-slate-900 mb-2">{currentProject.title}</h3>
                    <p className="text-slate-700 mb-4">{currentProject.description}</p>
                    <p className="text-slate-600 leading-relaxed">{currentProject.fullDescription}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {currentProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-slate-100 text-slate-800 border-2 border-slate-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-3 h-3 transition-all ${
                            index === currentIndex
                              ? `${currentProject.accentColor} w-8`
                              : 'bg-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-slate-600">
                      {currentIndex + 1} / {projects.length}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}