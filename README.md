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
- Interactive A/B/C/D letter-practice cards, parent learning sections, guides, FAQ-style resources and contact actions

## Deployment

The project is configured for a static export. Run:

```bash
npm run build
```

Deploy the generated `out/` directory to a static host.

## Media note

The source archive also contains audio clips and original image assets. Those binary media files are not part of this initial source upload; add the original `public/audio/` and `public/images/` directories from the supplied project archive before publishing the final production build. The letter-practice component expects `/audio/letter-a.mp3` through `/audio/letter-d.mp3`.

## Commerce and launch checklist

This is an informational learning website, not a live checkout. Product availability is inquiry-only. Before launch, confirm approval for educator and book photography, verify contact details and bilingual copy, and add required privacy/eCommerce disclosures.
