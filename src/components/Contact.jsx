import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validação simples
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Preencha todos os campos',
        description: 'Por favor, informe nome, email e mensagem.',
        duration: 3000
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/xojvjwpn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: 'Mensagem enviada',
          description: 'Obrigado! Responderei em breve.',
          duration: 4000
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Formspree pode retornar erros no corpo JSON
        const errorMsg = data?.error || 'Erro ao enviar a mensagem';
        toast({
          title: 'Erro ao enviar',
          description: errorMsg,
          duration: 4000
        });
      }
    } catch (err) {
      toast({
        title: 'Erro de rede',
        description: 'Não foi possível enviar a mensagem. Tente novamente mais tarde.',
        duration: 4000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'yanrenat@gmail.com',
      link: 'mailto:yanrenat@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Telefone',
      value: '+55 (71) 99401-2015',
      link: 'tel:+5571994012015'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      value: 'Salvador/BA, Brasil',
      link: 'https://maps.app.goo.gl/oMaihdmAjzY4yrLFA'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Informações de Contato</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
                >
                  <div className="text-purple-400 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.title}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                className="rounded-2xl shadow-2xl shadow-purple-500/20 w-full"
                alt="Workspace de desenvolvedor"
                src="https://images.unsplash.com/photo-1698919585695-546e4a31fc8f" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg"
              >
                <Send size={20} className="mr-2" />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
