import React, { useState, useEffect } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

const POLICY_URL = 'https://disk.yandex.ru/i/yUEhztVf86CFqg';
const MAILING_URL = 'https://disk.yandex.ru/i/o_enwA8-3fJC-w';

type FormState = 'idle' | 'loading' | 'success' | 'error';

function formatPhone(digits: string): string {
  const d = digits.slice(0, 10);
  let result = '+7';
  if (d.length === 0) return result;
  result += ' (' + d.slice(0, 3);
  if (d.length < 3) return result;
  result += ')';
  if (d.length === 3) return result;
  result += ' ' + d.slice(3, 6);
  if (d.length < 6) return result;
  result += '-' + d.slice(6, 8);
  if (d.length < 8) return result;
  result += '-' + d.slice(8, 10);
  return result;
}

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');
  const [comment, setComment] = useState('');
  const [consentPd, setConsentPd] = useState(false);
  const [consentMailing, setConsentMailing] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [nameTouched, setNameTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const phoneDigits = phone.replace(/\D/g, '').replace(/^7/, '');
  const phoneValid = phoneDigits.length === 10;
  const nameValid = name.trim().length > 0;

  const nameError = nameTouched && !nameValid ? 'Пожалуйста, введите ваше имя' : '';
  const phoneError = phoneTouched && !phoneValid ? 'Введите номер полностью: +7 (XXX) XXX-XX-XX' : '';

  const canSubmit =
    nameValid &&
    phoneValid &&
    consentPd &&
    consentMailing &&
    formState !== 'loading';

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    let digits = raw.replace(/\D/g, '');
    if (digits.startsWith('7')) digits = digits.slice(1);
    if (digits.startsWith('8')) digits = digits.slice(1);
    setPhone(formatPhone(digits));
  }

  function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace') {
      const digits = phoneDigits;
      if (digits.length === 0) return;
      const newDigits = digits.slice(0, -1);
      setPhone(newDigits.length > 0 ? formatPhone(newDigits) : '');
    }
  }

  function handlePhoneFocus(e: React.FocusEvent<HTMLInputElement>) {
    if (!phone) {
      setPhone('+7 (');
    }
    setTimeout(() => {
      const len = e.target.value.length;
      e.target.setSelectionRange(len, len);
    }, 0);
  }

  function handlePhoneBlur() {
    setPhoneTouched(true);
    if (phone === '+7 (' || phone === '+7') {
      setPhone('');
    }
  }

  function resetForm() {
    setName('');
    setPhone('');
    setEmail('');
    setTelegram('');
    setComment('');
    setConsentPd(false);
    setConsentMailing(false);
    setFormState('idle');
    setErrorMsg('');
    setNameTouched(false);
    setPhoneTouched(false);
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeModal();
      if (formState === 'success') {
        setTimeout(resetForm, 300);
      }
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    if (formState !== 'success') return;
    const t = setTimeout(() => {
      closeModal();
      setTimeout(resetForm, 300);
    }, 3000);
    return () => clearTimeout(t);
  }, [isOpen, formState]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNameTouched(true);
    setPhoneTouched(true);
    if (!canSubmit) return;
    setFormState('loading');
    setErrorMsg('');
    try {
      const res = await fetch('https://techtsekh.replit.app/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          telegram: telegram.trim() || undefined,
          comment: comment.trim() || undefined,
        }),
      });
      if (!res.ok) throw new Error('server');
      setFormState('success');
    } catch {
      setFormState('error');
      setErrorMsg('Не удалось отправить заявку. Попробуйте снова или напишите нам в Telegram.');
    }
  }

  const inputBase =
    'w-full rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 font-body transition-colors focus:outline-none focus:ring-1';
  const inputNormal =
    'border-white/15 focus:border-[hsl(var(--accent-warm))]/60 focus:ring-[hsl(var(--accent-warm))]/30';
  const inputError =
    'border-red-500/70 focus:border-red-500 focus:ring-red-500/30';

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 p-8 shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 mx-4"
          style={{ background: '#161A22', maxHeight: '90dvh', overflowY: 'auto' }}
        >
          <DialogPrimitive.Close
            onClick={closeModal}
            className="absolute right-4 top-4 rounded-md p-1 text-white/40 transition-colors hover:text-white/80 focus:outline-none"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Закрыть</span>
          </DialogPrimitive.Close>

          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent-warm))]/15 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[hsl(var(--accent-warm))]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xl font-heading font-bold text-white mb-2">Заявка принята!</p>
                <p className="text-sm text-white/60 font-body">
                  Свяжемся с вами в ближайшее время.
                </p>
              </div>
              <p className="text-xs text-white/30 font-body">Окно закроется автоматически…</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-7">
                <DialogPrimitive.Title className="text-xl font-heading font-bold text-white mb-1">
                  Оставить заявку
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="text-sm text-white/50 font-body">
                  Свяжемся с вами в течение нескольких часов
                </DialogPrimitive.Description>
              </div>

              <div className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-body text-white/70 mb-1.5">
                    Имя <span className="text-[hsl(var(--accent-warm))]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="Как вас зовут?"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={() => setNameTouched(true)}
                    className={`${inputBase} ${nameError ? inputError : inputNormal}`}
                  />
                  {nameError && (
                    <p className="mt-1.5 text-xs text-red-400 font-body">{nameError}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-body text-white/70 mb-1.5">
                    Телефон <span className="text-[hsl(var(--accent-warm))]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+7 (900) 123-45-67"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    onFocus={handlePhoneFocus}
                    onBlur={handlePhoneBlur}
                    className={`${inputBase} ${phoneError ? inputError : inputNormal}`}
                  />
                  {phoneError ? (
                    <p className="mt-1.5 text-xs text-red-400 font-body">{phoneError}</p>
                  ) : (
                    <p className="mt-1.5 text-xs text-white/35 font-body">
                      Желательно номер, к которому привязан MAX
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-body text-white/70 mb-1.5">
                    E-mail{' '}
                    <span className="text-white/30 text-xs">(необязательно)</span>
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.ru"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={`${inputBase} ${inputNormal}`}
                  />
                </div>

                {/* Telegram */}
                <div>
                  <label className="block text-sm font-body text-white/70 mb-1.5">
                    Telegram{' '}
                    <span className="text-white/30 text-xs">(необязательно)</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="@username"
                    value={telegram}
                    onChange={e => setTelegram(e.target.value)}
                    className={`${inputBase} ${inputNormal}`}
                  />
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-sm font-body text-white/70 mb-1.5">
                    Комментарий{' '}
                    <span className="text-white/30 text-xs">(необязательно)</span>
                  </label>
                  <textarea
                    rows={3}
                    autoComplete="off"
                    placeholder="Уточните услугу, задачу или вопрос — это поможет нам подготовиться к разговору"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 font-body transition-colors focus:border-[hsl(var(--accent-warm))]/60 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--accent-warm))]/30 resize-none"
                  />
                </div>

                {/* Checkboxes */}
                <div className="flex flex-col gap-3 pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox"
                        required
                        checked={consentPd}
                        onChange={e => setConsentPd(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="h-4 w-4 rounded border border-white/25 bg-white/5 peer-checked:border-[hsl(var(--accent-warm))] peer-checked:bg-[hsl(var(--accent-warm))] transition-colors flex items-center justify-center">
                        {consentPd && (
                          <svg className="w-2.5 h-2.5 text-[#161A22]" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-white/50 font-body leading-relaxed">
                      Даю согласие на обработку персональных данных в соответствии с{' '}
                      <a
                        href={POLICY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[hsl(var(--accent-warm))]/80 underline underline-offset-2 hover:text-[hsl(var(--accent-warm))] transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        политикой обработки ПД
                      </a>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox"
                        required
                        checked={consentMailing}
                        onChange={e => setConsentMailing(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="h-4 w-4 rounded border border-white/25 bg-white/5 peer-checked:border-[hsl(var(--accent-warm))] peer-checked:bg-[hsl(var(--accent-warm))] transition-colors flex items-center justify-center">
                        {consentMailing && (
                          <svg className="w-2.5 h-2.5 text-[#161A22]" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-white/50 font-body leading-relaxed">
                      Даю согласие на получение рассылки (
                      <a
                        href={MAILING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[hsl(var(--accent-warm))]/80 underline underline-offset-2 hover:text-[hsl(var(--accent-warm))] transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        согласие на рассылку
                      </a>
                      )
                    </span>
                  </label>
                </div>

                {/* Error */}
                {formState === 'error' && (
                  <p className="text-xs text-red-400 font-body">
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="mt-1 w-full rounded-lg px-6 py-3 text-sm font-bold font-heading bg-[hsl(var(--accent-warm))] text-[#161A22] transition-all hover:bg-[#A3823D] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Отправляем…
                    </>
                  ) : (
                    'Отправить заявку'
                  )}
                </button>
              </div>
            </form>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
