import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько времени занимает разработка сайта?",
    answer: "Лендинги на готовых блоках собираем за 2-4 дня. Сложные корпоративные сайты или нестандартные решения с интеграциями — от 2 до 6 недель. Точные сроки фиксируем в договоре после брифинга."
  },
  {
    question: "Как происходит оплата?",
    answer: "Мы работаем по договору. Стандартная схема: 50% предоплата до начала работ, 50% после сдачи проекта. Для крупных проектов возможна разбивка на спринты с поэтапной оплатой."
  },
  {
    question: "Оказываете ли вы техническую поддержку после запуска?",
    answer: "Да, мы предоставляем гарантийную поддержку всех наших проектов. Также берем проекты на постоянное абонентское обслуживание (сервера, бэкапы, доработки) по согласованному SLA."
  },
  {
    question: "Можно ли заказать только интеграцию CRM без разработки сайта?",
    answer: "Конечно. Мы автоматизируем бизнес-процессы, настраиваем интеграции (AmoCRM, Bitrix24, платежные шлюзы, сервисы рассылок) для любых существующих проектов."
  },
  {
    question: "Какие платформы вы используете для разработки?",
    answer: "Для быстрых решений (инфобизнес, промо-лендинги) используем Tilda, GetCourse. Для сложных масштабируемых систем — современные фреймворки (React, Vue) и надежные серверные решения."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-[hsl(var(--bg-primary))]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[hsl(var(--text-primary))]">
            Частые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[hsl(var(--bg-secondary))] px-4 transition-colors hover:border-l-[hsl(var(--accent-warm))] hover:border-l-2"
              >
                <AccordionTrigger className="text-left font-heading text-lg text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--text-primary))] transition-colors data-[state=open]:text-[hsl(var(--text-primary))]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--text-secondary))] font-body text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
