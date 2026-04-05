import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ heroImage }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="EuroWork Team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">Легальное трудоустройство в Европе</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Ваш надёжный
            <span className="text-primary block">партнёр</span>
            в трудоустройстве
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed">
            Помогаем специалистам из СНГ найти достойную работу в Германии и Европе. Полное юридическое сопровождение и поддержка.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="font-inter text-base px-8 h-14 shadow-xl shadow-primary/25"
              onClick={() => scrollTo('#services')}
            >
              Наши услуги
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-inter text-base px-8 h-14 border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => scrollTo('#contact')}
            >
              Оставить заявку
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
