import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Development Intern',
    company: 'Information Technology Institute',
    location: 'Zagazig, Egypt',
    period: '07/2025 – 12/2025',
    description: [
      'Built projects using Node.js, MongoDB, JavaScript, React.js, Next.js and Angular',
      'Worked individually and in teams using Git and Docker',
    ],
  },
  {
    title: 'Programming Instructor',
    company: 'Nabta Academy',
    location: 'Mansoura, Egypt',
    period: '07/2024 – 06/2025',
    description: [
      'Instructed children in programming languages including Scratch and Python',
      'Participated in a Lego competition and won the Best Programming Award',
    ],
  },
  {
    title: 'Freelancer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2023 – 2025',
    description: [
      'Developed a custom dashboard for a client acquired via LinkedIn',
      'Taught ICDL and programming as a freelancer',
    ],
  },
  {
    title: 'PR and Front-End Volunteer',
    company: 'CIS Team',
    location: 'Remote',
    period: '08/2021 – 05/2022',
    description: [
      'Completed assigned front-end development tasks efficiently',
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">Experience</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-4 border-slate-900 pl-8 py-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-slate-900 mb-1">{exp.title}</h3>
                  <p className="text-slate-700">{exp.company}</p>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-slate-600">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-slate-900 flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education & Certificates */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-2 border-slate-900 p-8"
          >
            <h3 className="mb-4 text-slate-900">Education</h3>
            <p className="text-slate-700 mb-2">Bachelor of Computer Science, Bioinformatics</p>
            <p className="text-slate-600">Mansoura University</p>
            <p className="text-slate-600">2018 - 2022 • Grade: Very Good</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-2 border-slate-900 p-8"
          >
            <h3 className="mb-4 text-slate-900">Certificates</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• MongoDB Node.js Developer Path</li>
              <li>• Advanced Web Development Nanodegree - Udacity</li>
              <li>• Web Developer Bootcamp - Udemy</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
