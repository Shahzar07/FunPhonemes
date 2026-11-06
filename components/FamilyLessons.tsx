import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PhonicsMark } from './PhonicsMark';

type Props = { arabic: boolean };
const pick = (arabic: boolean) => (en: string, ar: string) => (arabic ? ar : en);

const methodSteps = [
  {
    en: ['Hear it', 'Say “mmm” slowly. Invite your child to copy the sound and notice how their lips stay together.'],
    ar: ['اسمعوه', 'قولوا «مممم» ببطء. ادعوا طفلكم إلى تقليد الصوت وملاحظة كيف تبقى الشفتان مطبقتين.'],
  },
  {
    en: ['See it', 'Show a lowercase m and point to the first letter in “moon.” Say the word slowly together.'],
    ar: ['شاهدوه', 'اعرضوا حرف m الصغير وأشيروا إلى الحرف الأول في كلمة «moon». قولوا الكلمة ببطء معًا.'],
  },
  {
    en: ['Play it', 'Put a mug, a spoon, and a sock on the table. Ask which one begins with the sound in “moon.”'],
    ar: ['العبوا به', 'ضعوا كوبًا وملعقة وجوربًا على الطاولة. اسألوا: أيّها يبدأ بصوت كلمة «moon»؟'],
  },
];

function Moon() {
  return (
    <svg className="moon-art" viewBox="0 0 120 110" aria-hidden="true">
      <path d="M62 14a42 42 0 1 0 38 58A34 34 0 0 1 62 14Z" fill="#f2cf6b" stroke="#2b2750" strokeWidth="2" strokeLinejoin="round" />
      <path d="M78 10v18M69 19h18M98 30v12M92 36h12" stroke="#7a60c9" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function LearningMethod({ arabic }: Props) {
  const t = pick(arabic);
  return (
    <section id="approach" className="method section-space">
      <div className="shell method-layout">
        <div className="lesson-copy">
          <p className="eyebrow">{t('The FunPhonemes method', 'طريقة FunPhonemes')}</p>
          <h2 className="heading section-title">{t('One sound, three ways to learn', 'صوت واحد وثلاث طرق للتعلّم')}</h2>
          <p>
            {t(
              'Start with something your child can hear, see, and touch. Here’s how a single letter becomes a moment of play.',
              'ابدؤوا بشيء يمكن لطفلكم سماعه ورؤيته ولمسه. هكذا يتحوّل حرف واحد إلى لحظة لعب.',
            )}
          </p>
          <ol className="lesson-steps">
            {methodSteps.map((step, i) => {
              const [title, body] = arabic ? step.ar : step.en;
              return (
                <li key={step.en[0]}>
                  <span className="lesson-number">0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <figure className="sound-sheet">
          <figcaption>{t('A sound to try together', 'صوت نجرّبه معًا')}</figcaption>
          <Moon />
          <div className="sound-word" dir="ltr" lang="en">
            <span>m</span>oon
          </div>
          <p>{t('Stretch the first sound. Then say the whole word.', 'مدّوا الصوت الأول، ثم قولوا الكلمة كاملة.')}</p>
        </figure>
      </div>
    </section>
  );
}

const huntSteps = [
  {
    en: ['Pick one sound', 'Try the first sound in “sun.” Say it slowly and let your child echo it.'],
    ar: ['اختاروا صوتًا واحدًا', 'جرّبوا الصوت الأول في كلمة «sun». قولوه ببطء ودعوا طفلكم يردّده.'],
  },
  {
    en: ['Find two matches', 'Look for a sock or a spoon. Say each word aloud and listen for that same opening sound.'],
    ar: ['ابحثوا عن شيئين', 'ابحثوا عن جورب (sock) أو ملعقة (spoon). قولوا كل كلمة بصوت عالٍ واستمعوا للصوت نفسه في البداية.'],
  },
  {
    en: ['Let your child lead', 'Swap roles. Your child chooses an object, and you guess whether it belongs in the group.'],
    ar: ['دعوا طفلكم يقود', 'تبادلوا الأدوار. يختار طفلكم شيئًا، وتخمّنون أنتم إن كان ينتمي إلى المجموعة.'],
  },
];

export function HomeActivity({ arabic }: Props) {
  const t = pick(arabic);
  return (
    <section className="home-activity section-space">
      <div className="shell home-activity-layout">
        <div className="lesson-copy">
          <p className="eyebrow">{t('A five-minute activity', 'نشاط في خمس دقائق')}</p>
          <h2 className="heading section-title">{t('Go on a sound hunt at home', 'ابحثوا عن الأصوات في المنزل')}</h2>
          <p>
            {t(
              'Pick one familiar room and one sound. All you need are a few things you already have.',
              'اختاروا غرفة مألوفة وصوتًا واحدًا. كل ما تحتاجونه أشياء بسيطة موجودة لديكم.',
            )}
          </p>
          <a className="lesson-link" href="#practice">
            {t('Try the letter cards', 'جرّبوا بطاقات الحروف')} <ArrowRight size={17} className="flip-rtl" />
          </a>
        </div>
        <ol className="hunt-list">
          {huntSteps.map((step, i) => {
            const [title, body] = arabic ? step.ar : step.en;
            return (
              <li key={step.en[0]}>
                <span className="lesson-number">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export const guides = [
  {
    en: 'Make phonics part of playtime',
    ar: 'اجعلوا الفونكس جزءًا من اللعب',
    description: {
      en: 'A sound hunt turns familiar objects into a listening game. Keep it short enough to play again tomorrow.',
      ar: 'البحث عن الأصوات يحوّل الأشياء المألوفة إلى لعبة استماع. اجعلوها قصيرة لتلعبوها مجددًا غدًا.',
    },
    steps: {
      en: ['Choose one sound.', 'Find objects that begin with it.', 'Take turns choosing the next object.'],
      ar: ['اختاروا صوتًا.', 'ابحثوا عن أشياء تبدأ به.', 'تبادلوا اختيار الشيء التالي.'],
    },
  },
  {
    en: 'Three ways to encourage early readers',
    ar: 'ثلاث طرق لتشجيع القراءة المبكرة',
    description: {
      en: 'Make a shared story feel like a conversation. Your child can take part before they can read the whole page.',
      ar: 'اجعلوا قراءة القصة حوارًا. يمكن لطفلكم المشاركة قبل أن يقرأ الصفحة كاملة.',
    },
    steps: {
      en: ['Look at the cover.', 'Find a familiar letter.', 'Retell one small part.'],
      ar: ['تأملوا الغلاف.', 'ابحثوا عن حرف مألوف.', 'أعيدوا سرد جزء صغير.'],
    },
  },
  {
    en: 'Help your child try a new sound',
    ar: 'ساعدوا طفلكم على تجربة صوت جديد',
    description: {
      en: 'A little wait time gives children room to listen, think, and try a sound at their own pace.',
      ar: 'القليل من الانتظار يمنح الأطفال مساحة للاستماع والتفكير وتجربة الصوت بإيقاعهم.',
    },
    steps: {
      en: ['Model the sound.', 'Say it together.', 'Praise the effort.'],
      ar: ['قولوا الصوت.', 'ردّدوه معًا.', 'شجّعوا المحاولة.'],
    },
  },
];

export function ParentGuides({ arabic, onOpen }: Props & { onOpen: (index: number) => void }) {
  const t = pick(arabic);
  const lang = arabic ? 'ar' : 'en';
  return (
    <section id="resources" className="guides section-space">
      <div className="shell">
        <div className="lesson-copy resource-heading">
          <p className="eyebrow eyebrow-doodle">
            {t('Parent guides', 'أدلّة للأهل')} <PhonicsMark variant="loop" className="eyebrow-mark" />
          </p>
          <h2 className="heading section-title">{t('Small routines that build reading confidence', 'عادات صغيرة تعزّز الثقة في القراءة')}</h2>
          <p>{t('Use these ideas during playtime, a shared story, or a quiet minute together.', 'استخدموا هذه الأفكار أثناء اللعب أو قراءة قصة أو دقيقة هادئة معًا.')}</p>
        </div>
        <div className="guide-layout">
          <article className="guide-feature">
            <p className="guide-kicker">{t('Try this first', 'ابدؤوا بهذا')}</p>
            <h3>{guides[0][lang]}</h3>
            <p>{guides[0].description[lang]}</p>
            <button type="button" className="lesson-link" onClick={() => onOpen(0)}>
              {t('Read the guide', 'اقرؤوا الدليل')} <ArrowUpRight size={17} />
            </button>
          </article>
          <div className="guide-index">
            {guides.slice(1).map((g, i) => (
              <button type="button" key={g.en} onClick={() => onOpen(i + 1)}>
                <span>
                  <strong>{g[lang]}</strong>
                  <small>{g.description[lang]}</small>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
