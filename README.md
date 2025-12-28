# CiviPortal Marketing Site

Marketing website for CiviPortal - Government Financial Transparency Platform.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Adding Screenshots

Add your product screenshots to `/public/screenshots/`:
- `overview.png` - Dashboard overview
- `budget.png` - Budget breakdown view
- `revenues.png` - Revenue sources
- `transactions.png` - Transaction search
- `departments.png` - Department spending
- `admin-upload.png` - Admin upload interface

Recommended size: 1200×800 pixels

## Customization

Edit `config.ts` to update:
- Site name and tagline
- Demo URL
- Contact email
- Features and benefits
- Screenshot configuration

## Deployment

Deploy to Vercel:
```bash
npx vercel
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
