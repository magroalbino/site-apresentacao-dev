import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Código Limpo',
      description: 'Desenvolvimento com as melhores práticas e padrões da indústria'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance',
      description: 'Aplicações rápidas e otimizadas para a melhor experiência'
    },
    {
      icon: <Users size={32} />,
      title: 'Colaboração',
      description: 'Trabalho em equipe e comunicação efetiva em projetos'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              className="rounded-2xl shadow-2xl shadow-purple-500/20 w-full"
              alt="Desenvolvedor trabalhando"
             src="https://images.unsplash.com/photo-1634835855106-f4f0dc8279ca" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. 
              Com experiência em desenvolvimento full stack, transformo ideias em aplicações 
              funcionais e elegantes.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Meu foco está em entregar produtos de alta qualidade que não apenas atendem, 
              mas superam as expectativas dos usuários.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <div className="text-purple-400 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;