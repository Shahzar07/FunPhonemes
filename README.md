# FunPhonemes — Next.js Website

A responsive bilingual (English/Arabic) phonics-learning website for children aged 4–7 and their families.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js App Router, React and TypeScript
- Tailwind CSS with custom responsive styling
- GSAP dependency retained from the source project
- Lucide icons
- Nunito and Cairo variable fonts
- English/Arabic language switch and RTL layout
- Sections: hero, method, A–D letter practice, sound hunt, My Brave Brother book, Meet Suzanne, Lafta podcast, parent guides, FAQ accordion, contact and footer

## Deployment

The project is configured for a static export. Run:

```bash
npm run build
```

Deploy the generated `out/` directory to a static host.

## Media

Photos live in `public/images/`:

- `suzanne-classroom.webp` — hero photo
- `suzanne-teaching.webp` — Meet Suzanne photo
- `my-brave-brother.webp` — book section

Audio clips are not included yet. The letter-practice component expects `/audio/letter-a.mp3` through `/audio/letter-d.mp3` in `public/audio/`; until they are added, the card shows a friendly "Audio couldn’t play" message.

## Commerce and launch checklist

This is an informational learning website, not a live checkout. Product availability is inquiry-only. Before launch, confirm approval for educator and book photography, verify contact details and bilingual copy, and add required privacy/eCommerce disclosures.
