'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUp, ArrowUpRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { LetterPractice } from '../components/LetterPractice';
import { HomeActivity, LearningMethod, ParentGuides, guides } from '../components/FamilyLessons';
import { BookSection, FaqSection, LaftaSection } from '../components/Stories';
import { PhonicsMark } from '../components/PhonicsMark';

const EMAIL = 'suzannesimbawa@gmail.com';
const WHATSAPP = 'https://wa.me/966545880567';

export default function Home() {
  const [arabic, setArabic] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [article, setArticle] = useState<number | null>(null);
  const t = (en: string, ar: string) => (arabic ? ar : en);
  const lang = arabic ? 'ar' : 'en';
  const guide = article === null ? null : guides[article];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = arabic ? 'rtl' : 'ltr';
  }, [arabic, lang]);

  useEffect(() => {
    if (article === null) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setArticle(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [article]);

  const nav: [string, string][] = [
    ['#home', t('Home', 'الرئيسية')],
    ['#approach', t('Our approach', 'طريقتنا')],
    ['#shop', t('The shop', 'المتجر')],
    ['#resources', t('Resources', 'الموارد')],
    ['#about', t('Meet Suzanne', 'تعرّفي على سوزان')],
  ];

  const Brand = () => (
    <a className="brand" href="#home" aria-label="FunPhonemes home" dir="ltr">
      fun<span>phonemes</span>.
    </a>
  );

  return (
    <div dir={arabic ? 'rtl' : 'ltr'} className={arabic ? 'font-arabic' : ''}>
      <div className="topline">{t('English phonics for ages 4–7', 'الفونكس الإنجليزي للأطفال من ٤ إلى ٧ سنوات')}</div>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand-lockup" href="#home" aria-label="FunPhonemes home" dir="ltr">
            <span className="brand-badge" aria-hidden="true">fp</span>
            <span className="brand">fun<span>phonemes</span>.</span>
          </a>
          <nav className="desktop-nav" aria-label={t('Main', 'الرئيسية')}>
            {nav.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <button type="button" className="lang-btn" onClick={() => setArabic(!arabic)} lang={arabic ? 'en' : 'ar'}>
              {arabic ? 'English' : 'العربية'}
            </button>
            <a className="btn btn-primary btn-sm desktop-contact" href="#contact">
              {t('Say hello', 'تواصلي معنا')} <ArrowUpRight size={16} />
            </a>
            <button type="button" className="menu-btn" onClick={() => setMobile(!mobile)} aria-label={t('Toggle navigation', 'فتح القائمة')} aria-expanded={mobile}>
              {mobile ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobile && (
          <nav className="mobile-nav">
            {nav.map(([href, label]) => <a href={href} key={href} onClick={() => setMobile(false)}>{label}</a>)}
            <a href="#contact" onClick={() => setMobile(false)}>{t('Say hello', 'تواصلي معنا')}</a>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="shell hero-grid">
            <div className="hero-intro">
              <p className="eyebrow">{t('English phonics through play', 'الإنجليزية من خلال اللعب')}</p>
              <h1 className="heading">
                {t('Little sounds.', 'أصوات صغيرة.')}
                <br />
                <span className="underline-wave">{t('Big discoveries.', 'اكتشافات كبيرة.')}</span>
              </h1>
              <p className="hero-copy">
                {t(
                  'A joyful first step into English for little learners aged 4–7 — and the moms cheering them on. Play, explore, and grow together.',
                  'خطوة أولى مبهجة نحو الإنجليزية للأطفال من ٤ إلى ٧ سنوات — وللأمهات اللواتي يشجّعنهم. لنلعب ونستكشف ونكبر معًا.',
                )}
              </p>
              <div className="hero-buttons">
                <a className="btn btn-primary" href="#approach">
                  {t('Explore the fun', 'اكتشفي المرح')} <ArrowRight size={17} className="flip-rtl" />
                </a>
                <a className="btn btn-white" href="#about">
                  {t('Meet Suzanne', 'تعرّفي على سوزان')} <ArrowUpRight size={17} />
                </a>
              </div>
              <p className="hero-age">{t('For ages 4–7', 'للأعمار من ٤ إلى ٧')}</p>
            </div>
            <figure className="hero-art">
              <div className="hero-photo">
                <img
                  src="/images/suzanne-classroom.webp"
                  width={960}
                  height={1280}
                  fetchPriority="high"
                  alt={t('Suzanne sitting with three young children at a classroom table as a boy holds up a wooden letter A', 'سوزان تجلس مع ثلاثة أطفال حول طاولة في الصف بينما يرفع طفل حرف A خشبيًا')}
                />
                <span className="hero-badge hero-badge-sound" aria-hidden="true"><PhonicsMark variant="sound" /></span>
                <span className="hero-badge hero-badge-loop" aria-hidden="true"><PhonicsMark variant="loop" /></span>
              </div>
              <figcaption>{t('Suzanne Simbawa · Founder and English educator', 'سوزان سمباوة · المؤسِّسة ومعلّمة اللغة الإنجليزية')}</figcaption>
            </figure>
          </div>
        </section>

        <LearningMethod arabic={arabic} />
        <LetterPractice arabic={arabic} />
        <HomeActivity arabic={arabic} />
        <BookSection arabic={arabic} />

        <section id="about" className="about section-space">
          <div className="shell split-layout">
            <figure className="about-art">
              <img
                src="/images/suzanne-teaching.webp"
                width={1129}
                height={1440}
                loading="lazy"
                alt={t('Suzanne standing beside a whiteboard showing the letters A and a', 'سوزان تقف بجانب سبورة مكتوب عليها الحرفان A و a')}
              />
              <figcaption className="years-badge"><strong>20</strong><span>{t('years of teaching', 'عامًا في التعليم')}</span></figcaption>
            </figure>
            <div className="lesson-copy">
              <p className="eyebrow">{t('From the founder', 'رسالة من المؤسِّسة')}</p>
              <h2 className="heading section-title">{t('Meet Suzanne', 'تعرّفي على سوزان')}</h2>
              <p>
                {t(
                  'I’ve spent 20 years teaching English to children and teenagers. I created FunPhonemes to help Arabic-speaking mothers turn everyday moments into joyful English-learning opportunities for their little ones.',
                  'قضيت ٢٠ عامًا في تعليم الإنجليزية للأطفال واليافعين. أسست FunPhonemes لمساعدة الأمهات الناطقات بالعربية على تحويل اللحظات اليومية إلى فرص ممتعة لتعلّم الإنجليزية.',
                )}
              </p>
              <blockquote>{t('“When children feel safe to play, they feel brave enough to learn.”', '«عندما يشعر الأطفال بالأمان ليلعبوا، يصبحون شجعانًا بما يكفي ليتعلّموا.»')}</blockquote>
              <a className="btn btn-primary btn-sm" href="#contact">
                {t('Say hello', 'تواصلي معنا')} <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <LaftaSection arabic={arabic} />
        <ParentGuides arabic={arabic} onOpen={setArticle} />
        <FaqSection arabic={arabic} />

        <section id="contact" className="contact section-space">
          <div className="shell">
            <div className="contact-panel">
              <h2 className="heading">{t('Let’s make English a happy place.', 'لنجعل الإنجليزية مكانًا سعيدًا.')}</h2>
              <p>{t('One playful little sound at a time. Have a question? Suzanne would love to hear from you.', 'صوت صغير ومرح في كل مرة. لديكِ سؤال؟ يسعد سوزان أن تسمع منكِ.')}</p>
              <div className="contact-links">
                <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
                  {t('Let’s talk', 'لنتحدث')} <ArrowUpRight size={16} />
                </a>
                <a className="btn btn-white btn-sm" href={`mailto:${EMAIL}`} dir="ltr">
                  <Mail size={16} /> {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-about">
              <Brand />
              <p>{t('Joyful English beginnings for little learners and the grown-ups who love them.', 'بدايات مبهجة مع الإنجليزية للصغار ولمن يحبّونهم.')}</p>
              <p className="footer-made">{t('Made with love in Jeddah, Saudi Arabia', 'صُنع بحب في جدة، المملكة العربية السعودية')}</p>
            </div>
            <nav aria-label={t('Explore', 'استكشفي')}>
              <h3>{t('Explore', 'استكشفي')}</h3>
              <ul>{nav.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
            </nav>
            <div>
              <h3>{t('Say hello', 'تواصلي معنا')}</h3>
              <ul className="footer-contact">
                <li><Mail size={15} aria-hidden="true" /><a href={`mailto:${EMAIL}`} dir="ltr">{EMAIL}</a></li>
                <li><Phone size={15} aria-hidden="true" /><a href={WHATSAPP} target="_blank" rel="noreferrer" dir="ltr">+966 54 588 0567</a></li>
                <li><MapPin size={15} aria-hidden="true" /><span>{t('North Obhur, Jeddah, Saudi Arabia', 'أبحر الشمالية، جدة، المملكة العربية السعودية')}</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <small>© {new Date().getFullYear()} FunPhonemes. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}</small>
            <a href="#home">{t('Back to top', 'العودة للأعلى')} <ArrowUp size={14} /></a>
          </div>
        </div>
      </footer>

      {guide && (
        <div className="modal-backdrop" role="presentation" onClick={() => setArticle(null)}>
          <article className="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guide-title" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setArticle(null)} aria-label={t('Close', 'إغلاق')}>×</button>
            <p className="eyebrow">{t('Parent guide', 'دليل للأهل')}</p>
            <h2 id="guide-title">{guide[lang]}</h2>
            <p>{guide.description[lang]}</p>
            <ol>{guide.steps[lang].map((s) => <li key={s}>{s}</li>)}</ol>
          </article>
        </div>
      )}
    </div>
  );
}
