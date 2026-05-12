import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Брифинг", desc: "Погружение в задачи бизнеса, аудит текущих решений." },
  { num: "02", title: "Прототип", desc: "Архитектура проекта, логика работы и техническое задание." },
  { num: "03", title: "Разработка", desc: "Сборка систем, программирование, настройка интеграций." },
  { num: "04", title: "Запуск", desc: "Тестирование под нагрузкой, финальная отладка, релиз." },
  { num: "05", title: "Поддержка 24/7", desc: "Мониторинг работоспособности, бэкапы, развитие системы." }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[hsl(var(--bg-primary))] relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
        <svg viewBox="0 0 800 600" className="w-full h-full max-w-4xl text-[hsl(var(--bg-secondary))]">
          <path d="M100,300 L700,300" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" fill="none" />
          <circle cx="400" cy="300" r="200" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="400" cy="300" r="100" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M400,100 L400,500" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" fill="none" />
          <path d="M250,150 L550,450" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[hsl(var(--text-primary))]">Как строится работа</h2>
        </motion.div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[45px] left-[5%] right-[5%] h-0.5 bg-[hsl(var(--bg-secondary))]">
            <motion.div 
              className="h-full bg-[hsl(var(--accent-blue))]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex md:flex-col items-start md:items-center text-left md:text-center group"
              >
                {/* Mobile Connecting Line */}
                <div className="md:hidden absolute top-[45px] bottom-[-32px] left-[27px] w-0.5 bg-[hsl(var(--bg-secondary))]" />
                
                <div className="flex-shrink-0 z-10 bg-[hsl(var(--bg-primary))] p-2 rounded-full mb-0 md:mb-6 mr-6 md:mr-0 transition-transform group-hover:scale-110">
                  <div className="w-14 h-14 rounded-full border-2 border-[hsl(var(--accent-blue))] flex items-center justify-center bg-white shadow-lg shadow-[hsl(var(--accent-blue))/10]">
                    <span className="font-mono font-bold text-[hsl(var(--accent-warm))] text-lg">{step.num}</span>
                  </div>
                </div>
                
                <div className="pt-2 md:pt-0 pb-8 md:pb-0">
                  <h4 className="text-xl font-heading font-bold text-[hsl(var(--text-primary))] mb-2">{step.title}</h4>
                  <p className="text-[hsl(var(--text-secondary))] text-sm md:max-w-[200px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
