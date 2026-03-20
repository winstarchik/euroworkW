import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Алексей К.',
    role: 'Инженер, Германия',
    text: 'Благодаря EuroWork я получил работу инженера в Бремене. Все документы оформили быстро, помогли с визой и жильём. Очень благодарен за профессиональный подход!',
    rating: 5,
  },
  {
    name: 'Марина С.',
    role: 'Медсестра, Нидерланды',
    text: 'Агентство помогло мне найти работу медсестры в Европе. От подачи документов до выхода на работу прошло всего 2 месяца. Рекомендую всем!',
    rating: 5,
  },
  {
    name: 'Дмитрий В.',
    role: 'Водитель-дальнобойщик, Германия',
    text: 'Работаю водителем уже полтора года. EuroWork помог с оформлением Blue Card и переездом семьи. Всё легально и прозрачно. Спасибо команде!',
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">Отзывы</span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Более 2000 специалистов уже нашли работу в Европе с нашей помощью
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-3xl p-8 shadow-lg shadow-foreground/5 border border-border/50 relative"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 text-sm">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-inter font-bold text-primary text-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-inter font-semibold text-sm text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}