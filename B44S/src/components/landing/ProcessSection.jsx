import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, CheckCircle2, Bus, Home, Briefcase } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Заявка и анкета',
    desc: 'Вы оставляете заявку на нашем сайте или пишете в Telegram. Мы высылаем анкету и изучаем ваш профиль, опыт и пожелания.',
    duration: 'День 1–2',
  },
  {
    icon: Search,
    step: '02',
    title: 'Подбор вакансий',
    desc: 'Наши специалисты подбирают подходящие вакансии из базы немецких работодателей. Вы выбираете понравившиеся предложения.',
    duration: '3–7 дней',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Интервью и оффер',
    desc: 'Организуем онлайн-интервью с работодателем (если требуется). После одобрения вы получаете официальный договор.',
    duration: '7–14 дней',
  },
  {
    icon: FileText,
    step: '04',
    title: 'Оформление документов',
    desc: 'Помогаем собрать и перевести все необходимые документы: диплом, справки, медкомиссия. Подаём заявку на визу.',
    duration: '2–4 недели',
  },
  {
    icon: Bus,
    step: '05',
    title: 'Переезд',
    desc: 'Встречаем вас на вокзале, помогаем добраться до места жительства. Вас уже ждут жильё и рабочее место.',
    duration: 'День приезда',
  },
  {
    icon: Briefcase,
    step: '06',
    title: 'Выход на работу',
    desc: 'Помогаем с регистрацией по месту жительства, открытием счёта и адаптацией. Вы приступаете к работе!',
    duration: 'Первая неделя',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">Как это работает</span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Как проходит выезд на работу
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Пошаговый процесс от заявки до первого рабочего дня в Германии
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-background rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-inter font-bold text-3xl text-primary/20">{step.step}</span>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-lg">{step.duration}</span>
                  </div>
                  <h3 className="font-inter font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-border z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
