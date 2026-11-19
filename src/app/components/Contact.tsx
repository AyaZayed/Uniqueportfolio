import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-white">Let's Work Together</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.a
            href="mailto:ayazayedofficial@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-white p-6 hover:bg-white hover:text-slate-900 transition-colors"
          >
            <Mail className="w-6 h-6 mb-3" />
            <div className="text-sm mb-1">Email</div>
            <div className="break-all">ayazayedofficial@gmail.com</div>
          </motion.a>

          <motion.a
            href="tel:01117234740"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-white p-6 hover:bg-white hover:text-slate-900 transition-colors"
          >
            <Phone className="w-6 h-6 mb-3" />
            <div className="text-sm mb-1">Phone</div>
            <div>01117234740</div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-2 border-white p-6"
          >
            <MapPin className="w-6 h-6 mb-3" />
            <div className="text-sm mb-1">Location</div>
            <div>Mansoura, Egypt</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://github.com/AyaZayed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/ayazayed414"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <p className="text-slate-400">
            © 2025 Aya Zayed. Crafted with passion and code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
