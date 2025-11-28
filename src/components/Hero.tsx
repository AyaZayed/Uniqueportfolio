import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profileImg from 'figma:asset/729be97d84f22d73bd90a5945012d7d9296523f9.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-slate-900">
                <img
                  src={profileImg}
                  alt="Aya Zayed"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-slate-900 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-900" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-slate-600 mb-2">Hello, I'm</p>
            
            <h1 className="mb-4 text-slate-900">
              Aya Zayed
            </h1>

            <h2 className="text-slate-700 mb-6">
              MERN Stack Developer & Creative Builder
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Crafting beautiful, functional web experiences with modern technologies.
              From teaching programming to building AI-powered applications, I bring ideas to life.
            </p>

            <div className="flex items-center gap-3 text-slate-600 mb-6">
              <MapPin className="w-5 h-5" />
              <span>Mansoura, Egypt</span>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="mailto:ayazayedofficial@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="https://github.com/AyaZayed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayazayed414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
