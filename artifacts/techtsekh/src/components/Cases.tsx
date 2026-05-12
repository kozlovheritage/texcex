import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    title: "Система автоворонок для онлайн-школы",
    metrics: "+234%",
    metricLabel: "рост конверсии",
    description: "Разработали и внедрили сложную систему автоворонок с сегментацией пользователей. Настроили интеграции с CRM и платежными системами. Запустили Telegram-бота для поддержки.",
    gradient: "from-blue-900/40 to-blue-600/20"
  },
  {
    id: 2,
    title: "B2B портал завода металлоконструкций",
    metrics: "×3.5",
    metricLabel: "увеличение заявок",
    description: "Полный ребрендинг и разработка корпоративного портала. Внедрили личный кабинет оптового клиента, синхронизацию остатков с 1С в реальном времени и генерацию КП в PDF.",
    gradient: "from-slate-800/40 to-slate-600/20"
  },
  {
    id: 3,
    title: "Экосистема для сети клиник",
    metrics: "99.9%",
    metricLabel: "uptime сервисов",
    description: "Объединили разрозненные системы 15 клиник в единую информационную среду. Разработали удобный интерфейс онлайн-записи, интегрированный с МИС клиник.",
    gradient: "from-indigo-900/40 to-indigo-700/20"
  }
];

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<typeof casesData[0] | null>(null);

  return (
    <section id="cases" className="py-24 bg-[hsl(var(--bg-dark))] noise-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

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

        <div className="grid md:grid-cols-3 gap-8">
          {casesData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-dark rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedCase(item)}
            >
              <div className={`h-48 w-full bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-3xl font-mono text-[hsl(var(--accent-warm))] font-bold">{item.metrics}</div>
                  <div className="text-sm text-gray-400">{item.metricLabel}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[hsl(var(--accent-warm))] transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                <div className="mt-6 text-[hsl(var(--accent-warm))] text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Подробнее о проекте
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="bg-[hsl(var(--bg-dark))] border-gray-800 text-white sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-white">{selectedCase?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className={`h-64 w-full rounded-lg bg-gradient-to-br ${selectedCase?.gradient} mb-6 flex items-center justify-center`}>
              <div className="text-center">
                <div className="text-5xl font-mono text-[hsl(var(--accent-warm))] font-bold mb-2">{selectedCase?.metrics}</div>
                <div className="text-lg text-gray-300">{selectedCase?.metricLabel}</div>
              </div>
            </div>
            <DialogDescription className="text-gray-300 text-base leading-relaxed">
              {selectedCase?.description}
            </DialogDescription>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setSelectedCase(null)}
                className="px-6 py-2 border border-[hsl(var(--accent-warm))] text-[hsl(var(--accent-warm))] rounded hover:bg-[hsl(var(--accent-warm))] hover:text-[hsl(var(--bg-dark))] transition-colors"
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
