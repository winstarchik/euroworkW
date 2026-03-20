import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Нужно ли знать иностранный язык?',
    a: 'Для большинства рабочих профессий (строительство, производство, сельское хозяйство, логистика) знание языка страны не требуется. Достаточно русского или базового английского. Мы также помогаем с языковой адаптацией.',
  },
  {
    q: 'Как оформляется виза для работы в Европе?',
    a: 'Мы полностью сопровождаем процесс получения рабочей визы или разрешения на работу в любой стране Европы. Помогаем собрать документы, переводим их, подаём в консульство. Срок — от 4 до 8 недель в зависимости от страны и типа визы.',
  },
  {
    q: 'Предоставляется ли жильё?',
    a: 'Да, большинство работодателей предоставляют жильё. Стоимость аренды обычно 200–400 € в месяц вычитается из зарплаты. Мы указываем это в описании каждой вакансии.',
  },
  {
    q: 'Какова минимальная зарплата в Германии?',
    a: 'С 2024 года минимальная зарплата (Mindestlohn) составляет 12,82 € в час (брутто). На руки (нетто) — около 60–70% от брутто в зависимости от налогового класса. Используйте наш калькулятор для точного расчёта.',
  },
  {
    q: 'Это легально? Как защищены мои права?',
    a: 'Абсолютно легально. Мы работаем только по официальным трудовым договорам согласно немецкому законодательству. Вы получаете полный соцпакет: медицинская страховка, пенсионные отчисления, оплачиваемый отпуск (минимум 24 дня в год).',
  },
  {
    q: 'Сколько стоят услуги агентства?',
    a: 'Наши услуги по трудоустройству БЕСПЛАТНЫ для соискателей. Мы получаем вознаграждение от работодателей. Вы платите только за перевод документов (если требуется) и визовый сбор.',
  },
  {
    q: 'Можно ли перевезти семью?',
    a: 'Да, после получения рабочей визы и обустройства вы имеете право на воссоединение семьи (Familienzusammenführung). Мы помогаем с этим процессом.',
  },
  {
    q: 'В каких странах Европы вы трудоустраиваете?',
    a: 'Мы работаем по всей Европе: Германия, Австрия, Швейцария, Нидерланды, Бельгия, Польша, Чехия, Франция, Португалия и другие страны ЕС. Подберём вакансию в удобной для вас стране.',
  },
  {
    q: 'Как быстро можно начать работу?',
    a: 'При наличии всех документов — от 6 до 12 недель. Это включает подбор вакансии, согласование с работодателем, оформление визы и переезд.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">Частые вопросы</span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">FAQ</h2>
          <p className="text-muted-foreground text-lg">Ответы на самые популярные вопросы о работе в Германии</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background border border-border/60 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-secondary/30 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-inter font-semibold text-foreground">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}