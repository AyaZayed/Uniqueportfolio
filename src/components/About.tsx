import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award, Languages } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-slate-800">Education</h3>
            <p className="text-slate-600">
              Bachelor of Computer Science, Bioinformatics
            </p>
            <p className="text-purple-600">Mansoura University</p>
            <p className="text-slate-500">2018 - 2022</p>
            <p className="text-slate-600 mt-2">Grade: Very Good</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-slate-800">Achievements</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Best Programming Award at Lego Competition</li>
              <li>• MongoDB Node.js Developer Path</li>
              <li>• Advanced Web Development Nanodegree - Udacity</li>
              <li>• Web Developer Bootcamp - Udemy</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-pink-100 hover:border-pink-300 transition-all hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
              <Languages className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="mb-2 text-slate-800">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">English</span>
                  <span className="text-purple-600">Fluent</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">Arabic</span>
                  <span className="text-purple-600">Native</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
