import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-purple-300 mb-4">Olá, eu sou</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Yan Renat
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Desenvolvedor Full Stack, criando experiências digitais incríveis através de código limpo e design inovador
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em Contato
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/magroalbino"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/yan-leite"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:yanrenat@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-purple-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;