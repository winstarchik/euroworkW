import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contact' },
];

const team = [
  { name: 'Semyon Morokhovets', role: 'Генеральный директор', telegram: '@SemyonGenD', href: 'https://t.me/SemyonGenD' },
  { name: 'Alex Makarov', role: 'Координатор по подбору', telegram: '@Aleksmakaer', href: 'https://t.me/Aleksmakaer' },
  { name: 'Gleb Shishkow', role: 'Менеджер по трудоустройству', telegram: '@glebshishkow', href: 'https://t.me/glebshishkow' },
];

const TelegramIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-inter font-bold text-lg">E</span>
              </div>
              <div className="leading-tight">
                <span className="font-inter font-bold text-lg text-white">EuroWork</span>
                <span className="block text-[10px] text-primary-foreground/50 font-medium tracking-wider uppercase">GmbH Bremen</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs mb-6">
              Профессиональное агентство по подбору персонала и легальному трудоустройству специалистов из стран СНГ в Европе.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Clock className="w-4 h-4" />
              Пн – Вс: 10:00 – 24:00
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60 mt-2">
              <MapPin className="w-4 h-4" />
              Bremen, Deutschland
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-inter font-semibold text-white mb-6">Навигация</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Team contacts */}
          <div>
            <h4 className="font-inter font-semibold text-white mb-6">Наша команда</h4>
            <div className="space-y-4">
              {team.map((member) => (
                <a
                  key={member.telegram}
                  href={member.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <TelegramIcon />
                  <div>
                    <div className="text-xs text-primary-foreground/40 mb-0.5">{member.role}</div>
                    <div className="text-sm text-primary-foreground/70 group-hover:text-primary transition-colors">{member.name} · {member.telegram}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal info */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
              <h5 className="font-inter font-semibold text-white text-sm mb-3">Регистрационные данные</h5>
              <div className="space-y-1.5 text-xs text-primary-foreground/50">
                <div><span className="text-primary-foreground/30">Amtsgericht Bremen:</span> <span className="text-primary-foreground/70 font-medium">HRB 32581</span></div>
                <div><span className="text-primary-foreground/30">EUID:</span> <span className="text-primary-foreground/70 font-medium">DEH1101.HRB32581HB</span></div>
                <div><span className="text-primary-foreground/30">Адрес:</span> <span className="text-primary-foreground/70 font-medium">Burgdammer Str. 62, D-28717 Bremen</span></div>
              </div>
            </div>
            <div className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
              <h5 className="font-inter font-semibold text-white text-sm mb-3">Лицензии и соответствие</h5>
              <div className="space-y-1.5 text-xs text-primary-foreground/50">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span>Официально зарегистрированная компания в Германии</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span>Деятельность соответствует §292 SGB III (Arbeitnehmerüberlassung)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span>GDPR / DSGVO — защита персональных данных</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/40">
              © {new Date().getFullYear()} EuroWork GmbH. Все права защищены.
            </p>
            <p className="text-xs text-primary-foreground/30">
              Amtsgericht Bremen HRB 32581 · EUID DEH1101.HRB32581HB · Burgdammer Str. 62, D-28717 Bremen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}