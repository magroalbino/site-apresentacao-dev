import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: 'JurisCheck',
      description: 'Extensão para navegadores (React + Vite) que auxilia profissionais do Direito na verificação e sugestão de jurisprudências em tempo real.',
      imageDescription: 'Interface de uma extensão de navegador para juristas',
      tags: ['React', 'Vite', 'Extensão', 'Direito'],
      gradient: 'from-purple-600 to-blue-600',
      githubLink: 'https://github.com/magroalbino/jurischeck-extension',
      demoLink: '#'
    },
    {
      title: 'Nelson IA',
      description: 'Agente de IA para apoio jurídico previdenciário. Analisa documentos, identifica períodos, automatiza cálculos e gera petições.',
      imageDescription: 'Dashboard de uma inteligência artificial para análise jurídica',
      tags: ['IA', 'Jurídico', 'Automação', 'Previdenciário'],
      gradient: 'from-pink-600 to-purple-600',
      githubLink: 'https://github.com/magroalbino/Nelson-IA',
      demoLink: '#'
    },
    {
      title: 'CryptoPrev',
      description: 'Plataforma de previdência privada descentralizada em criptomoedas, com contribuições flexíveis, rendimentos e gamificação.',
      imageDescription: 'Plataforma de finanças descentralizadas com gráficos e dados de criptomoedas',
      tags: ['DeFi', 'Criptomoedas', 'Previdência', 'Gamificação'],
      gradient: 'from-blue-600 to-cyan-600',
      githubLink: 'https://github.com/magroalbino/CryptoPrev',
      demoLink: '#'
    }
  ];

  const handleDemoClick = () => {
    toast({
      title: "🚧 Este recurso ainda não está implementado",
      description: "Mas não se preocupe, em breve estará disponível! 🚀",
      duration: 3000,
    });
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi recentemente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={project.imageDescription || project.title}
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={`${project.title}-tag-${tIndex}`}
                      className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {/* GitHub: garantir que exista um <a> real no DOM */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    aria-label={`Abrir repositório ${project.title} no GitHub`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                    >
                      <Github size={16} className="mr-2" />
                      Código
                    </Button>
                  </a>

                  {/* Demo: se houver link válido, usar <a>, caso contrário exibir toast */}
                  {project.demoLink && project.demoLink !== '#' ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      aria-label={`Abrir demo de ${project.title}`}
                    >
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </a>
                  ) : (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={handleDemoClick}
                      aria-label={`Demo de ${project.title} indisponível`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
