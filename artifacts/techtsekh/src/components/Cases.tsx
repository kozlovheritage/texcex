import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const casesData = [
  {
    id: 1,
    title: 'Система автоворонок для онлайн-школы',
    metrics: '+234%',
    metricLabel: 'рост конверсии',
    gradient: 'from-[#1F3A5F]/60 to-[#1A2236]/40',
    description: 'Разработали и внедрили сложную систему автоворонок с сегментацией пользователей по источнику, интересам и стадии цикла. Настроили интеграции с AmoCRM и платёжными системами. Запустили Telegram-бота для прогрева аудитории и поддержки. Конверсия в покупку выросла с 4% до 13% за 2 месяца.',
    details: [
      { label: 'Срок', value: '3 недели' },
      { label: 'Инструменты', value: 'Telegram Bot, AmoCRM, SendPulse' },
      { label: 'Результат', value: '+234% конверсия' },
    ],
  },
  {
    id: 2,
    title: 'B2B-портал завода металлоконструкций',
    metrics: '×3.5',
    metricLabel: 'рост заявок',
    gradient: 'from-[#162032]/60 to-[#1F3A5F]/30',
    description: 'Полный ребрендинг и разработка корпоративного портала с нуля. Внедрили личный кабинет оптового клиента, синхронизацию остатков с 1С в реальном времени и автоматическую генерацию коммерческих предложений в PDF. Сайт стал инструментом продаж, а не визиткой.',
    details: [
      { label: 'Срок', value: '6 недель' },
      { label: 'Инструменты', value: '1С интеграция, PDF-генератор, CRM' },
      { label: 'Результат', value: 'Заявки выросли в 3.5 раза' },
    ],
  },
  {
    id: 3,
    title: 'Экосистема для сети клиник',
    metrics: '99.9%',
    metricLabel: 'uptime сервисов',
    gradient: 'from-[#1A2A45]/60 to-[#0F1520]/40',
    description: 'Объединили разрозненные системы 15 клиник в единую информационную среду. Разработали удобный интерфейс онлайн-записи с интеграцией в МИС. Автоматические напоминания пациентам снизили процент неявок на 40%. Все сервисы работают на гарантированном uptime 99.9%.',
    details: [
      { label: 'Срок', value: '8 недель' },
      { label: 'Инструменты', value: 'МИС интеграция, SMS, Telegram' },
      { label: 'Результат', value: '-40% неявок, 99.9% uptime' },
    ],
  },
];

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<typeof casesData[0] | null>(null);

  return (
    <section id="cases" className="py-24 bg-[hsl(var(--bg-dark))] noise-bg relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Наши работы</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {casesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-dark rounded-2xl overflow-hidden group flex flex-col"
              data-testid={`card-case-${item.id}`}
            >
              <div className={`h-44 w-full bg-gradient-to-br ${item.gradient} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-mono text-[hsl(var(--accent-warm))] font-bold">{item.metrics}</div>
                  <div className="text-sm text-white/60">{item.metricLabel}</div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-[hsl(var(--accent-warm))] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2 mb-5 leading-relaxed flex-1">{item.description}</p>
                <button
                  onClick={() => setSelectedCase(item)}
                  data-testid={`button-case-detail-${item.id}`}
                  className="w-full py-2.5 border border-[hsl(var(--accent-warm))]/40 text-[hsl(var(--accent-warm))] text-sm font-medium rounded hover:bg-[hsl(var(--accent-warm))]/10 hover:border-[hsl(var(--accent-warm))] transition-all flex items-center justify-center gap-2"
                >
                  Подробнее о проекте
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="border-white/10 text-white sm:max-w-2xl" style={{ background: 'hsl(var(--bg-dark))' }}>
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-white pr-6">{selectedCase?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <div
              className={`h-52 w-full rounded-xl bg-gradient-to-br ${selectedCase?.gradient} mb-6 flex items-center justify-center`}
            >
              <div className="text-center">
                <div className="text-6xl font-mono text-[hsl(var(--accent-warm))] font-bold mb-2">{selectedCase?.metrics}</div>
                <div className="text-white/60">{selectedCase?.metricLabel}</div>
              </div>
            </div>
            <DialogDescription className="text-white/70 text-base leading-relaxed mb-6">
              {selectedCase?.description}
            </DialogDescription>
            {selectedCase?.details && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedCase.details.map((d) => (
                  <div key={d.label} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="text-xs text-white/40 mb-1 font-mono">{d.label}</div>
                    <div className="text-sm text-white font-medium">{d.value}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-6 py-2.5 border border-[hsl(var(--accent-warm))]/40 text-[hsl(var(--accent-warm))] rounded hover:bg-[hsl(var(--accent-warm))]/10 transition-colors text-sm"
              >
                Закрыть
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
