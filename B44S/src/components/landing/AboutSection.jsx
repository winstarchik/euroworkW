import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const advantages = [
  'Легальное оформление по законодательству страны трудоустройства',
  'Оформление рабочих виз и разрешений на работу по всей Европе',
  'Индивидуальный подбор вакансий под ваш профиль',
  'Помощь с жильём и адаптацией в любой стране Европы',
  'Юридическая поддержка на всех этапах',
];

export default function AboutSection({ aboutImage }) {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="О компании EuroWork"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-square md:aspect-auto md:h-[520px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="font-inter font-bold text-3xl">10+</div>
                <div className="text-sm opacity-90">лет опыта</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">О компании</span>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 mb-6 leading-tight">
              EuroWork GmbH — ваш мост к работе в Европе
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Компания EuroWork GmbH с офисом в Бремене специализируется на подборе персонала и легальном трудоустройстве специалистов из стран СНГ по всей Европе: Германия, Австрия, Нидерланды, Польша, Чехия, Франция и другие страны. Мы работаем напрямую с европейскими работодателями и гарантируем полное юридическое сопровождение.
            </p>

            <div className="space-y-4">
              {advantages.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}