import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Globe, Calendar } from 'lucide-react';

const stats = [
  { icon: Users, value: '2000+', label: 'Трудоустроенных', delay: 0 },
  { icon: Briefcase, value: '500+', label: 'Партнёров-работодателей', delay: 0.1 },
  { icon: Globe, value: '12', label: 'Стран трудоустройства', delay: 0.2 },
  { icon: Calendar, value: '10+', label: 'Лет на рынке', delay: 0.3 },
];

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="bg-background rounded-2xl p-6 md:p-8 shadow-xl shadow-foreground/5 border border-border/50 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-inter font-bold text-2xl md:text-3xl text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}