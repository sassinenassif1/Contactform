# VV Clinical Center — Patient Registration Form

A single-page, bilingual (English / Arabic) patient registration form for
VV Clinical Center. Designed to be sent to patients via WhatsApp as a link.

## Features

- **Bilingual EN / AR** with proper LTR / RTL switching, persisted per device.
- **Glass-morphism UI** on a white background, soft indigo accents matching
  the clinic logo.
- **Sections**
  1. Personal info (name, family name, DOB, gender, two phone numbers, email,
     address).
  2. Simple medical questionnaire (smoking, allergies, diabetes, heart,
     pregnancy/breastfeeding, children under 18, free-text notes).
  3. Segmentation questions (referral source, last visit, services of
     interest, insurance, occupation, preferred appointment time, preferred
     channel, marketing consent).
  4. Star rating + free-text review with a one-click "Post to Google" handoff.
- **No build step** — pure HTML / CSS / vanilla JS. Drop the folder on any
  static host (GitHub Pages, Netlify, Vercel, S3, your own server).

## Configuration

Open `script.js` and edit the `CONFIG` object near the top:

```js
const CONFIG = {
  submitEndpoint: 'https://your-endpoint.example/registrations',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE',
};
```

### 1. Submission endpoint

The form `POST`s a JSON payload to `CONFIG.submitEndpoint`. Easy options:

- **Formspree** — create a form, paste the endpoint URL.
- **Google Apps Script** — deploy a script as a Web App and use its URL to
  append rows to a Google Sheet (CRM-friendly).
- **n8n / Make / Zapier webhook** — wire it to your existing tools.
- **Your own API** — any endpoint that accepts JSON.

If you leave `submitEndpoint` empty, the payload is just `console.log`-ed —
useful for local testing.

### 2. Google Reviews link

There is **no public API for posting Google reviews on a user's behalf** —
that's a Google policy, not a technical limitation. The standard, compliant
workflow used by most clinics is:

1. User types their review in our form.
2. They click **"Post my review on Google"**.
3. We copy the text to their clipboard and open Google's review screen for
   your business in a new tab.
4. They paste & submit on Google (this also keeps the review on **your own**
   form so you have a copy even if they don't follow through).

To wire it up:

1. Find your **Place ID** with Google's tool:
   https://developers.google.com/maps/documentation/places/web-service/place-id
2. Replace `YOUR_PLACE_ID_HERE` in `script.js` with that ID.

The final URL looks like:
`https://search.google.com/local/writereview?placeid=ChIJxxxxxxxxxxxxxxx`

## WhatsApp distribution

Host the page (any static host works) and send patients a message like:

> Dear {{name}}, please complete your patient profile here:
> https://your-domain.com/register

The link works on any phone — no app install required.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## File layout

```
.
├── index.html        # markup
├── styles.css        # glass-morphism + responsive styles
├── script.js         # i18n, form submit, Google review handoff
├── assets/
│   └── logo.svg      # placeholder VV logo (swap with the real one)
└── README.md
```

Replace `assets/logo.svg` with the official logo file when ready (same path,
or update the `<img src>` in `index.html`).
