import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Euro, Flame, ChevronRight, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { base44 } from '@/api/base44Client';

export default function VacanciesSection() {
  const [vacancies, setVacancies] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    base44.entities.Vacancy.filter({ is_active: true }, '-created_date', 6).then(setVacancies);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="vacancies" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">Работа в Европе</span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">Актуальные вакансии</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Свежие предложения от европейских работодателей с официальным оформлением
          </p>
        </motion.div>

        {vacancies.length === 0 ? (
          <div className="text-center py-16">
            <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-40" />
            <p className="text-muted-foreground">Вакансии скоро появятся. Оставьте заявку — мы подберём для вас!</p>
            <Button className="mt-6" onClick={() => scrollTo('#contact')}>Оставить заявку</Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vacancies.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelected(v)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">{v.category}</Badge>
                    {v.is_hot && (
                      <Badge className="text-xs bg-orange-100 text-orange-600 border-orange-200">
                        <Flame className="w-3 h-3 mr-1" /> Срочно
                      </Badge>
                    )}
                  </div>
                </div>
                <h3 className="font-inter font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {v.location}
                </div>
                {(v.salary_from || v.salary_to) && (
                  <div className="flex items-center gap-1 text-sm font-medium text-primary">
                    <Euro className="w-4 h-4" />
                    {v.salary_from && v.salary_to
                      ? `${v.salary_from.toLocaleString()} – ${v.salary_to.toLocaleString()} €/мес (брутто)`
                      : v.salary_from
                      ? `от ${v.salary_from.toLocaleString()} €/мес`
                      : `до ${v.salary_to.toLocaleString()} €/мес`}
                  </div>
                )}
                <div className="mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="font-inter" onClick={() => scrollTo('#contact')}>
            Не нашли подходящую? Оставьте заявку
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-background rounded-3xl p-8 max-w-lg w-full shadow-2xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex gap-2 mb-3">
              <Badge variant="secondary">{selected.category}</Badge>
              {selected.is_hot && <Badge className="bg-orange-100 text-orange-600"><Flame className="w-3 h-3 mr-1" />Срочно</Badge>}
            </div>
            <h3 className="font-inter font-bold text-2xl text-foreground mb-2">{selected.title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <MapPin className="w-4 h-4" />{selected.location}
            </div>
            {(selected.salary_from || selected.salary_to) && (
              <div className="flex items-center gap-1 text-primary font-semibold mb-4">
                <Euro className="w-4 h-4" />
                {selected.salary_from && selected.salary_to
                  ? `${selected.salary_from.toLocaleString()} – ${selected.salary_to.toLocaleString()} €/мес (брутто)`
                  : selected.salary_from ? `от ${selected.salary_from.toLocaleString()} €/мес` : `до ${selected.salary_to.toLocaleString()} €/мес`}
              </div>
            )}
            {selected.description && <div className="mb-4"><p className="text-sm font-semibold mb-1">Описание</p><p className="text-muted-foreground text-sm">{selected.description}</p></div>}
            {selected.requirements && <div className="mb-4"><p className="text-sm font-semibold mb-1">Требования</p><p className="text-muted-foreground text-sm">{selected.requirements}</p></div>}
            {selected.conditions && <div className="mb-4"><p className="text-sm font-semibold mb-1">Условия</p><p className="text-muted-foreground text-sm">{selected.conditions}</p></div>}
            <div className="flex gap-3 mt-6">
              <Button className="flex-1" onClick={() => { setSelected(null); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Откликнуться
              </Button>
              <Button variant="outline" onClick={() => setSelected(null)}>Закрыть</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}