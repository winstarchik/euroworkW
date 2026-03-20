import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Подбор персонала',
    description: 'Находим квалифицированных специалистов для немецких компаний в сферах производства, логистики, строительства, IT и медицины.',
    imageKey: 'recruitment',
  },
  {
    title: 'Легальное трудоустройство',
    description: 'Полное оформление документов: рабочие визы, разрешения на работу, Blue Card ЕС. Всё в строгом соответствии с законодательством Германии.',
    imageKey: 'legal',
  },
  {
    title: 'Обучение и адаптация',
    description: 'Языковые курсы, подготовка к собеседованиям, помощь с признанием квалификации и адаптация на новом рабочем месте в Европе.',
    imageKey: 'training',
  },
];

export default function ServicesSection({ images }) {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">Наши услуги</span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Полный спектр услуг по трудоустройству
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы берём на себя все этапы — от подбора вакансии до выхода на работу в Европе
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-background rounded-3xl overflow-hidden shadow-lg shadow-foreground/5 border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={images[service.imageKey]}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-inter font-bold text-xl text-foreground">{service.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}