This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# 🎨 Color Palette

## Primary
- **Hex:** `#03AED2`
- **Usage:** Main UI elements (buttons, links, active states, sidebar highlight)

## Secondary
- **Hex:** `#F8DE22`
- **Usage:** Highlights, badges, subtle accents

## Accent (CTA)
- **Hex:** `#F45B26`
- **Usage:** Call-to-action buttons (Create, Submit, Important actions)

## Danger / Error
- **Hex:** `#D12052`
- **Usage:** Error messages, delete actions, alerts

---

## 🧱 Usage Guidelines

- Use **Primary** most frequently
- Use **Secondary** sparingly for attention
- Use **Accent** for important actions only
- Use **Danger** only for destructive or error states

---

## 🎯 Example (Tailwind)

```html
<button class="bg-primary text-white">Save</button>
<button class="bg-accent text-white">Create</button>
<span class="bg-secondary px-2 rounded">New</span>
<button class="bg-danger text-white">Delete</button>