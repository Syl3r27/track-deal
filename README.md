# Track-Deal

Track-Deal is a modern web application for tracking product prices and deals across the web. It uses web scraping, real-time storage, and data visualization to help users monitor price changes and get notified when deals drop.

Built with a modern full-stack setup using Next.js, Supabase, and Firecrawl.

---

## Features

- Track product prices from e-commerce websites
- Scrape product data using Firecrawl
- Store and manage data with Supabase
- Visualize price trends using charts
- Email notifications for price drops
- Dark and light theme support
- Clean, responsive UI

---

## Tech Stack

- **Framework:** Next.js 16
- **Frontend:** React 19, Tailwind CSS, Radix UI
- **Backend / Services:** Supabase, Firecrawl
- **Charts:** Recharts
- **Email:** Resend
- **Validation:** Zod
- **Language:** TypeScript

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Syl3r27/track-deal.git
cd track-deal
2. Install dependencies
npm install
3. Environment Variables
Create a .env.local file in the root directory:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
FIRECRAWL_API_KEY=your_firecrawl_api_key
RESEND_API_KEY=your_resend_api_key
4. Run the development server
npm run dev
Open http://localhost:3000 in your browser.

Scripts
npm run dev – Start development server

npm run build – Build for production

npm run start – Start production server

npm run lint – Run ESLint

Contributing
Contributions are welcome. Feel free to open issues or submit pull requests.

License
This project is currently private.