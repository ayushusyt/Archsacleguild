# ArchScale Guild Repositioning

## 1. Current site pain points

- The above-the-fold message is too crowded and takes too long to explain the offer.
- Multiple sections repeat the same ideas with slightly different wording, which makes the page feel long and unfocused.
- Placeholder copy is still visible, including `Lorem ipsum` and irrelevant testimonial content.
- Credibility is weakened by zeroed counters and mixed-quality proof.
- CTAs ask for a growth call before the offer, stage, and outcome are clearly framed.
- The structure mixes audience segments, personal story, offer details, and testimonials in a way that makes scanning hard on mobile.
- Heavy page length and repeated blocks likely contribute to the slow, sluggish feel.

## 2. New positioning

- Brand: ArchScale Guild
- Category: Growth systems for architecture and interior design studios
- Audience: Studio founders and principals from solo stage to 25+ team members
- Core problem: Strong design talent is not translating into predictable premium demand, healthy margins, or scalable delivery
- Primary promise: Help studios win better-fit, higher-value projects and grow with more structure, confidence, and control
- Mechanism: The ArchScale Growth Engine
- Growth Engine pillars:
  - Position: niche, offer, authority, and messaging
  - Pipeline: lead flow, sales structure, and conversion support
  - Scale: pricing, team rhythm, and delivery systems

## 3. Offer ladder

- ArchScale Intensive
  - A 2-day strategy sprint for founders who need clarity on niche, offer, pricing, and premium positioning.
- ArchScale Accelerator
  - A 90-day implementation program for studios ready to install sales and operational systems.

## 4. Conversion decisions in the rebuild

- Reduced the page into a clearer story: problem, position, approach, offers, proof, founder, FAQ, CTA.
- Replaced duplicated sections with a single offer ladder and one core framework.
- Removed placeholder content and avoided credibility-damaging counters.
- Added a mobile sticky CTA for stronger conversion on smaller screens.
- Kept the front end intentionally light: no frameworks, no heavy images, and minimal JavaScript.
- Used semantic HTML and readable section hierarchy so the copy is easier to scan and easier to adapt into WordPress, Webflow, or a custom stack later.

## 5. Launch notes

- `script.js` contains two easy configuration points:
  - `BOOKING_URL` for a direct scheduler link
  - `CONTACT_EMAIL` for the enquiry mail target
- If ArchScale already has a live Calendly, Typeform, or CRM form, wire it into `BOOKING_URL` before publishing.

## 6. Taste-Skill direction used in the redesign

- Skill source: `taste-skill`
- Design variance used: high
- Motion intensity used: medium-high
- Visual density used: low-medium
- What changed from the first rebuild:
  - Shifted to a more asymmetric split-hero layout
  - Swapped serif-led styling for a premium sans system
  - Removed more generic equal-card patterns
  - Tightened the palette to one accent family with warm neutrals
  - Added more deliberate motion and form-error states
