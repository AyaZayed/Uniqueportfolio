import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Next.js', 'Angular'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Prisma'],
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'English (Fluent)', 'Arabic (Native)'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Command Line', 'Docker'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white border-2 border-slate-900 p-6"
            >
              <h3 className="text-slate-900 mb-4 pb-2 border-b-2 border-slate-900">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-2 w-1.5 h-1.5 bg-slate-900 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
