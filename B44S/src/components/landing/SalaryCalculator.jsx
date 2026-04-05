import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

// German tax class info
const taxClasses = [
  { value: 1, label: 'Класс 1', desc: 'Холост/не замужем' },
  { value: 2, label: 'Класс 2', desc: 'Одинокий родитель' },
  { value: 3, label: 'Класс 3', desc: 'Женат/замужем (основной)' },
  { value: 4, label: 'Класс 4', desc: 'Оба супруга работают' },
  { value: 5, label: 'Класс 5', desc: 'Супруг(а) в классе 3' },
  { value: 6, label: 'Класс 6', desc: 'Второе место работы' },
];

// Approximate German income tax rates (simplified)
function calcNetto(brutto, taxClass, hasKinder) {
  const annual = brutto * 12;

  // Social contributions (roughly fixed rates)
  const pensionRate = 0.093;
  const unemploymentRate = 0.013;
  const healthRate = 0.073; // 7.3% employee share
  const careRate = hasKinder ? 0.017 : 0.023; // child supplement

  const socialTotal = (pensionRate + unemploymentRate + healthRate + careRate) * brutto;

  // Taxable income (annual) - simplified allowances
  const allowances = {
    1: 11784, 2: 11784, 3: 23568, 4: 11784, 5: 0, 6: 0
  };
  const allowance = allowances[taxClass] / 12;

  const taxableMonthly = Math.max(0, brutto - socialTotal - allowance);
  const taxableAnnual = taxableMonthly * 12;

  // Progressive tax (simplified zones 2024)
  let incomeTax = 0;
  if (taxableAnnual <= 10908) {
    incomeTax = 0;
  } else if (taxableAnnual <= 15999) {
    const y = (taxableAnnual - 10908) / 10000;
    incomeTax = (979.18 * y + 1400) * y;
  } else if (taxableAnnual <= 62809) {
    const z = (taxableAnnual - 15999) / 10000;
    incomeTax = (192.59 * z + 2397) * z + 966.53;
  } else if (taxableAnnual <= 277825) {
    incomeTax = 0.42 * taxableAnnual - 9972.98;
  } else {
    incomeTax = 0.45 * taxableAnnual - 18307.73;
  }

  // Solidarity surcharge (abolished for most, keep 0)
  const solidarity = 0;

  // Church tax option (skip)
  const monthlyTax = incomeTax / 12;

  const netto = brutto - socialTotal - monthlyTax - solidarity;
  return {
    netto: Math.round(netto),
    socialTotal: Math.round(socialTotal),
    tax: Math.round(monthlyTax),
    pension: Math.round(pensionRate * brutto),
    health: Math.round(healthRate * brutto),
    unemployment: Math.round(unemploymentRate * brutto),
    care: Math.round(careRate * brutto),
  };
}

export default function SalaryCalculator() {
  const [brutto, setBrutto] = useState(2500);
  const [taxClass, setTaxClass] = useState(1);
  const [hasKinder, setHasKinder] = useState(false);

  const result = calcNetto(brutto, taxClass, hasKinder);
  const nettoPercent = Math.round((result.netto / brutto) * 100);

  return (
    <section id="calculator" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">Финансовое планирование</span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Калькулятор зарплаты Брутто → Нетто
          </h2>
          <p className="text-muted-foreground text-lg">Рассчитайте, сколько вы будете получать на руки в Германии</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-8 border border-border/60 shadow-sm space-y-8"
          >
            {/* Brutto slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-inter font-semibold text-foreground">Зарплата брутто</label>
                <span className="text-2xl font-inter font-bold text-primary">{brutto.toLocaleString()} €</span>
              </div>
              <Slider
                min={1000}
                max={8000}
                step={50}
                value={[brutto]}
                onValueChange={([v]) => setBrutto(v)}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 000 €</span>
                <span>8 000 €</span>
              </div>
            </div>

            {/* Tax class */}
            <div>
              <label className="font-inter font-semibold text-foreground block mb-3">Налоговый класс</label>
              <div className="grid grid-cols-3 gap-2">
                {taxClasses.map((tc) => (
                  <button
                    key={tc.value}
                    onClick={() => setTaxClass(tc.value)}
                    className={`rounded-xl p-3 text-sm border transition-all ${
                      taxClass === tc.value
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-primary/50 text-foreground'
                    }`}
                  >
                    <div className="font-semibold">{tc.label}</div>
                    <div className={`text-xs mt-0.5 ${taxClass === tc.value ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{tc.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-inter font-semibold text-foreground">Есть дети?</div>
                <div className="text-xs text-muted-foreground">Влияет на взнос по уходу</div>
              </div>
              <button
                onClick={() => setHasKinder(!hasKinder)}
                className={`w-12 h-6 rounded-full transition-colors ${hasKinder ? 'bg-primary' : 'bg-muted'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mx-0.5 ${hasKinder ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-8 border border-border/60 shadow-sm"
          >
            <div className="text-center mb-8">
              <div className="text-sm text-muted-foreground mb-1">На руки (нетто)</div>
              <div className="font-inter font-bold text-5xl text-primary">{result.netto.toLocaleString()} €</div>
              <div className="text-sm text-muted-foreground mt-1">в месяц · {nettoPercent}% от брутто</div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${nettoPercent}%` }}
                />
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Брутто</span>
                <span className="font-semibold">{brutto.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-sm text-red-500/80">
                <span>Подоходный налог</span>
                <span>− {result.tax.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-sm text-orange-500/80">
                <span>Пенсионные взносы</span>
                <span>− {result.pension.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-sm text-yellow-600/80">
                <span>Медицинское страхование</span>
                <span>− {result.health.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Страхование по безработице</span>
                <span>− {result.unemployment.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Уход (Pflegeversicherung)</span>
                <span>− {result.care.toLocaleString()} €</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-inter font-bold text-primary">
                <span>Нетто (на руки)</span>
                <span>{result.netto.toLocaleString()} €</span>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground bg-secondary/50 rounded-xl p-3">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Расчёт приблизительный. Итоговая сумма может отличаться в зависимости от региона, работодателя и индивидуальных льгот.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}