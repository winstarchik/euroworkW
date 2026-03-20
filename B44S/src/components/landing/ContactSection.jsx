import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Send, CheckCircle2, Send as TgIcon } from 'lucide-react';
import { toast } from 'sonner';

const team = [
  {
    role: 'Генеральный директор',
    name: 'Semyon Morokhovets',
    telegram: '@SemyonGenD',
    tgLink: 'https://t.me/SemyonGenD',
  },
  {
    role: 'Координатор по подбору персонала',
    name: 'Alex Makarov',
    telegram: '@Aleksmakaer',
    tgLink: 'https://t.me/Aleksmakaer',
  },
  {
    role: 'Менеджер по трудоустройству',
    name: 'Gleb Shishkow',
    telegram: '@glebshishkow',
    tgLink: 'https://t.me/glebshishkow',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setForm({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">Контакты</span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Оставьте заявку или напишите напрямую нашим специалистам в Telegram
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-5"
          >
            {/* Team Telegram cards */}
            {team.map((member) => (
              <a
                key={member.telegram}
                href={member.tgLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  {/* Telegram icon */}
                  <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">{member.role}</div>
                  <div className="font-inter font-semibold text-sm text-foreground">{member.name}</div>
                  <div className="text-sm text-primary font-medium">{member.telegram}</div>
                </div>
              </a>
            ))}

            {/* Address & hours */}
            <div className="flex items-start gap-4 pt-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Адрес</div>
                <span className="font-inter font-medium text-foreground">Bremen, Deutschland</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Часы работы</div>
                <span className="font-inter font-medium text-foreground">Пн – Вс: 10:00 – 24:00</span>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 md:p-10 shadow-xl shadow-foreground/5 border border-border/50 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Ваше имя</label>
                  <Input
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Телефон</label>
                  <Input
                    required
                    placeholder="+7 (999) 123-45-67"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  required
                  placeholder="ivan@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Сообщение</label>
                <Textarea
                  required
                  placeholder="Расскажите о вашем опыте и желаемой позиции..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-[120px] rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 font-inter text-base rounded-xl shadow-lg shadow-primary/20"
                disabled={sent}
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Отправлено!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}