'use client';
import { useState } from 'react';
import { ArrowUpRight, MessageCircle, Minus, Plus } from 'lucide-react';

type Props = { arabic: boolean };
const pick = (arabic: boolean) => (en: string, ar: string) => (arabic ? ar : en);

export function BookSection({ arabic }: Props) {
  const t = pick(arabic);
  return (
    <section id="shop" className="book section-space">
      <div className="shell split-layout">
        <div className="book-art">
          <img
            src="/images/my-brave-brother.webp"
            width={960}
            height={640}
            loading="lazy"
            alt={t('Two printed copies of My Brave Brother by Suzanne Simbawa, one yellow and one pink', 'نسختان مطبوعتان من كتاب My Brave Brother لسوزان سمباوة، واحدة صفراء وأخرى وردية')}
          />
        </div>
        <div className="lesson-copy">
          <p className="eyebrow">{t('From the bookshelf', 'من رفّ الكتب')}</p>
          <h2 className="heading section-title" lang="en">My Brave Brother</h2>
          <p>
            {t(
              'A storybook by Suzanne Simbawa to read together. Before opening it, look at the cover and ask your child what being brave means to them.',
              'قصة مصوّرة من تأليف سوزان سمباوة لتقرؤوها معًا. قبل فتحها، تأمّلوا الغلاف واسألوا طفلكم: ماذا تعني الشجاعة بالنسبة لك؟',
            )}
          </p>
          <a className="btn btn-primary" href="https://wa.me/966545880567?text=Hi%20Suzanne%2C%20I%27d%20like%20to%20ask%20about%20My%20Brave%20Brother" target="_blank" rel="noreferrer">
            {t('Ask about this book', 'اسألي عن هذا الكتاب')} <ArrowUpRight size={17} />
          </a>
          <p className="fine-print">
            {t(
              'Ask Suzanne about book availability. Flashcards and learning activities are in development.',
              'اسألي سوزان عن توفّر الكتاب. البطاقات التعليمية والأنشطة قيد الإعداد.',
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export function LaftaSection({ arabic }: Props) {
  const t = pick(arabic);
  return (
    <section id="podcast" className="lafta section-space">
      <div className="shell lafta-layout">
        <div className="lafta-mark" aria-hidden="true">
          <span lang="ar">لفتة</span>
          <small>Lafta</small>
        </div>
        <div className="lesson-copy">
          <p className="eyebrow">{t('An Arabic-language podcast for parents', 'بودكاست باللغة العربية للأهل')}</p>
          <h2 className="heading section-title">{t('Lafta with Suzanne', 'لفتة مع سوزان')}</h2>
          <p>
            {t(
              'Lafta is Suzanne’s Arabic-language podcast, sharing practical insights, encouragement, and thoughtful ideas for mothers raising confident learners.',
              'لفتة هو بودكاست سوزان باللغة العربية، تشارك فيه أفكارًا عملية وتشجيعًا ولفتات مدروسة للأمهات اللواتي يربّين متعلّمين واثقين.',
            )}
          </p>
          <a className="lesson-link" href="#contact">
            {t('Ask about the podcast', 'اسألي عن البودكاست')} <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: ['Who is FunPhonemes for?', 'لمن FunPhonemes؟'],
    a: [
      'FunPhonemes supports Arabic-speaking mothers helping children aged 4–7 develop early English skills.',
      'يدعم FunPhonemes الأمهات الناطقات بالعربية في مساعدة أطفالهن من ٤ إلى ٧ سنوات على بناء مهارات الإنجليزية الأولى.',
    ],
  },
  {
    q: ['Do I need to speak perfect English?', 'هل أحتاج إلى إتقان الإنجليزية؟'],
    a: [
      'Not at all. Each activity starts with one simple sound and a familiar word, so you can learn and play alongside your child.',
      'إطلاقًا. يبدأ كل نشاط بصوت بسيط وكلمة مألوفة، لتتعلّمي وتلعبي جنبًا إلى جنب مع طفلك.',
    ],
  },
  {
    q: ['Can I buy learning materials here?', 'هل يمكنني شراء مواد تعليمية من هنا؟'],
    a: [
      'Orders are by enquiry for now. Ask Suzanne about My Brave Brother — flashcards and learning activities are in development.',
      'الطلب حاليًا عبر التواصل المباشر. اسألي سوزان عن كتاب My Brave Brother — البطاقات والأنشطة التعليمية قيد الإعداد.',
    ],
  },
  {
    q: ['Is there content for parents?', 'هل يوجد محتوى للأهل؟'],
    a: [
      'Yes. Read the parent guides on this page, and listen to Lafta, Suzanne’s Arabic-language podcast for mothers.',
      'نعم. اقرئي أدلّة الأهل في هذه الصفحة، واستمعي إلى «لفتة»، بودكاست سوزان باللغة العربية للأمهات.',
    ],
  },
];

export function FaqSection({ arabic }: Props) {
  const t = pick(arabic);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="faq section-space">
      <div className="shell faq-layout">
        <div className="lesson-copy">
          <p className="eyebrow">{t('Good to know', 'معلومات تهمّك')}</p>
          <h2 className="heading section-title">{t('Little questions, happy answers', 'أسئلة صغيرة، إجابات سعيدة')}</h2>
          <MessageCircle className="faq-icon" size={30} strokeWidth={1.6} aria-hidden="true" />
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const expanded = open === i;
            const id = `faq-answer-${i}`;
            return (
              <div className="faq-item" key={item.q[0]}>
                <button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setOpen(expanded ? null : i)}>
                  <span>{arabic ? item.q[1] : item.q[0]}</span>
                  <span className="faq-toggle" aria-hidden="true">{expanded ? <Minus size={14} /> : <Plus size={14} />}</span>
                </button>
                <p id={id} hidden={!expanded}>{arabic ? item.a[1] : item.a[0]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
