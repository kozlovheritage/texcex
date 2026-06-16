import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ─── Типы ─── */
interface CaseDetail { label: string; value: string; fake?: boolean }
interface CaseItem {
  id: number;
  client: string;
  project?: string;
  status: 'done' | 'wip';
  metrics: string;
  metricLabel: string;
  metricFake?: boolean;
  metricIsText?: boolean;
  gradient: string;
  tags: string[];
  description: string;
  details: CaseDetail[];
}

/*
  * — заглушка, реальные данные будут добавлены позже.
  Все такие значения помечены fake: true / metricFake: true.
*/
const casesData: CaseItem[] = [
  {
    id: 1,
    client: 'Аюна Бабуева',
    status: 'done',
    metrics: '*₽1.4 млн*',
    metricLabel: 'запуск',
    metricFake: true,
    gradient: 'from-[#1F3A5F]/70 to-[#1A2236]/50',
    tags: ['Сайт', 'Автоворонка', 'Онлайн-касса'],
    description:
      'Разработали лендинг под запуск, собрали автоворонку в Telegram с прогревом и серией касаний, подключили онлайн-кассу по 54-ФЗ. Вся цепочка — от первого клика до оплаты — работает без ручного участия.',
    details: [
      { label: 'Услуги', value: 'Сайт, автоворонка, онлайн-касса' },
      { label: 'Запуск', value: '*₽1.4 млн*', fake: true },
      { label: 'Конверсия воронки', value: '*+210%*', fake: true },
    ],
  },
  {
    id: 2,
    client: 'Вера Малыгина',
    project: 'Фабрика заготовок + Заготовки для здоровья',
    status: 'done',
    metrics: '42.9%',
    metricLabel: 'CTR e-mail',
    metricFake: false,
    gradient: 'from-[#1F3A5F]/70 to-[#1A2236]/50',
    tags: ['Сайт', 'Инфопродукт', 'Автоворонка', 'Онлайн-касса', 'E-mail'],
    description:
      'Два проекта одного эксперта — комплексная техническая упаковка под ключ. Для «Фабрики заготовок»: сайт, упаковка инфопродукта, автоворонка, онлайн-касса и e-mail рассылки с CTR до 42.9%. Для «Заготовок для здоровья»: полноценный сайт с нуля. Оба проекта запущены синхронно.',
    details: [
      { label: 'CTR e-mail', value: 'до 42.9%' },
      { label: 'Запуски', value: '*X запусков на Y рублей*', fake: true },
      { label: 'Услуги', value: 'Сайты, автоворонка, e-mail, касса' },
    ],
  },
  {
    id: 3,
    client: 'Анна Позднякова',
    project: 'WOMOMS',
    status: 'done',
    metrics: '*₽860к*',
    metricLabel: 'запуск',
    metricFake: true,
    gradient: 'from-[#1F3A5F]/70 to-[#1A2236]/50',
    tags: ['Сайт', 'Автоворонка', 'Онлайн-касса'],
    description:
      'Разработали сайт для сообщества мам WOMOMS, собрали автоворонку с сегментацией аудитории и подключили онлайн-кассу. Запуск прошёл в срок без технических сбоев.',
    details: [
      { label: 'Услуги', value: 'Сайт, автоворонка, онлайн-касса' },
      { label: 'Запуск', value: '*₽860к*', fake: true },
      { label: 'Конверсия воронки', value: '*+180%*', fake: true },
    ],
  },
  {
    id: 4,
    client: 'Раскатова Фит-Студия',
    status: 'done',
    metrics: 'Упаковка под ключ',
    metricIsText: true,
    metricLabel: 'B2B',
    gradient: 'from-[#1F3A5F]/70 to-[#1A2236]/50',
    tags: ['Сайт', 'Онлайн-касса', 'Яндекс.Бизнес', 'Яндекс.Вебмастер'],
    description:
      'Разработали сайт для фитнес-студии, подключили онлайн-кассу по 54-ФЗ. Настроили Яндекс.Бизнес для появления в геосервисах и Яндекс.Вебмастер для контроля индексации и SEO-статуса.',
    details: [
      { label: 'Услуги', value: 'Сайт, онлайн-касса, Яндекс.Бизнес, Яндекс.Вебмастер' },
      { label: 'Статус', value: 'Завершён' },
      { label: 'Охват', value: 'Геосервисы + поиск' },
    ],
  },
  {
    id: 5,
    client: 'ТЕХЦЕХ',
    project: 'Собственный сайт + ИИ-ассистент',
    status: 'wip',
    metrics: '—',
    metricLabel: 'В работе',
    gradient: 'from-[#0B2B5E]/40 to-[#1A2236]/30',
    tags: ['Сайт', 'ИИ-ассистент'],
    description: 'Разработка собственного сайта и ИИ-ассистента для автоматизации входящих обращений.',
    details: [],
  },
  {
    id: 6,
    client: 'NDA',
    project: 'Автоматизация тендерной аналитики',
    status: 'done',
    metrics: '×11',
    metricLabel: 'ускорение анализа',
    gradient: 'from-[#2A1A4A]/70 to-[#1A2236]/50',
    tags: ['Автоматизация', 'Python', 'DeepSeek AI', '44-ФЗ', '223-ФЗ'],
    description:
      'Разработали Python-скрипт, который автоматически скачивает документацию тендеров с zakupki.gov.ru, анализирует её через ИИ по 12 стоп-факторам и выдаёт готовые Word-отчёты с рекомендацией — участвовать или нет.',
    details: [
      { label: 'Услуги', value: 'Python-скрипт, DeepSeek AI, Serper API, Word/Excel-отчёты' },
      { label: 'Статус', value: 'Завершён' },
      { label: 'Результат', value: '100 тендеров / 42 мин вместо 8 ч' },
    ],
  },
];

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const firstDone  = casesData.filter((c) => c.status === 'done').slice(0, 3);
  const middleRow  = [casesData.find((c) => c.id === 4)!, casesData.find((c) => c.id === 6)!];
  const wipCases   = casesData.filter((c) => c.status === 'wip');

  const renderMetricBanner = (item: CaseItem, large = false) => {
    const clean = item.metrics.replace(/\*/g, '');
    if (item.metricIsText) {
      return (
        <span className={`italic font-mono text-[hsl(var(--accent-warm))] font-bold leading-tight ${large ? 'text-3xl' : 'text-2xl'}`}>
          {clean}
        </span>
      );
    }
    return (
      <span className={`italic font-mono text-[hsl(var(--accent-warm))] font-bold leading-none ${large ? 'text-6xl' : 'text-4xl'}`}>
        {clean}
      </span>
    );
  };

  const renderDoneCard = (item: CaseItem, index: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-dark rounded-2xl overflow-hidden group flex flex-col"
      data-testid={`card-case-${item.id}`}
    >
      {/* Metric banner */}
      <div className={`h-40 w-full bg-gradient-to-br ${item.gradient} relative overflow-hidden flex-shrink-0 flex items-end p-4`}>
        <div>
          <div className="leading-none">
            {renderMetricBanner(item)}
          </div>
          {item.metricLabel && (
            <div className="text-sm text-white/60 mt-1">{item.metricLabel}</div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">{item.client}</p>
          <h3 className="text-base font-heading font-bold text-white group-hover:text-[hsl(var(--accent-warm))] transition-colors leading-snug">
            {item.project ?? item.client}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((t) => (
            <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/8">
              {t}
            </span>
          ))}
        </div>

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
  );

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

        {/* Первые три завершённых кейса */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {firstDone.map((item, index) => renderDoneCard(item, index))}
        </div>

        {/* Раскатова + тендерная аналитика */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {middleRow.map((item, index) => renderDoneCard(item, index))}
        </div>

        {/* В работе */}
        <div className="grid md:grid-cols-2 gap-6">
          {wipCases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-dark rounded-2xl overflow-hidden flex items-center gap-5 p-5 opacity-70"
              data-testid={`card-case-${item.id}`}
            >
              {/* Пульсирующий индикатор */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[hsl(var(--accent-warm))]/30 flex items-center justify-center relative">
                <span className="absolute w-3 h-3 rounded-full bg-[hsl(var(--accent-warm))]/60 animate-ping" />
                <span className="w-3 h-3 rounded-full bg-[hsl(var(--accent-warm))]" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-white/35 uppercase tracking-widest mb-0.5">{item.client}</p>
                <p className="text-white/80 text-sm font-heading font-semibold leading-snug truncate">
                  {item.project ?? item.client}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/35 border border-white/8">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="flex-shrink-0 text-xs font-mono text-[hsl(var(--accent-warm))]/70 border border-[hsl(var(--accent-warm))]/25 px-2.5 py-1 rounded-full whitespace-nowrap">
                В работе
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail dialog */}
      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="border-white/10 text-white sm:max-w-2xl" style={{ background: 'hsl(var(--bg-dark))' }}>
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-white pr-6">
              {selectedCase?.project ?? selectedCase?.client}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            {/* Metric banner */}
            <div className={`h-44 w-full rounded-xl bg-gradient-to-br ${selectedCase?.gradient} mb-6 flex items-center justify-center`}>
              <div className="text-center px-6">
                <div className="mb-2">
                  {selectedCase && renderMetricBanner(selectedCase, true)}
                </div>
                {selectedCase?.metricLabel && (
                  <div className="text-white/60">{selectedCase.metricLabel}</div>
                )}
              </div>
            </div>

            {/* Tags */}
            {selectedCase && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCase.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-white/6 text-white/50 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            )}

            <DialogDescription className="text-white/70 text-base leading-relaxed mb-6">
              {selectedCase?.description}
            </DialogDescription>

            {selectedCase?.details && selectedCase.details.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedCase.details.map((d) => (
                  <div key={d.label} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="text-xs text-white/40 mb-1 font-mono">{d.label}</div>
                    <div className="text-sm text-white/60 italic">
                      {d.value.replace(/\*/g, '')}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Footnote for fake values */}
            {selectedCase?.details.some((d) => d.fake) || selectedCase?.metricFake ? (
              <p className="text-xs text-white/25 italic mb-4">* Данные уточняются — указаны ориентировочные значения</p>
            ) : null}

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
