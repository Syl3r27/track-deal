# 📉 Track-Deal

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

**Track-Deal** is a modern, full-stack web application designed to track product prices and deals across the web intelligently. Leveraging AI-driven scraping and real-time data visualization, it helps users monitor price fluctuations and receive instant notifications when prices hit target thresholds.

Built with performance and scalability in mind using **Next.js 16**, **Supabase**, and **Firecrawl**.

---

## ✨ Features

- **🛒 Smart Product Tracking** - Add products from various e-commerce sites to your watchlist
- **🕷️ AI-Powered Scraping** - Robust web scraping with Firecrawl for accurate product data
- **💾 Real-time Data Sync** - Seamless data management with Supabase
- **📈 Interactive Price Charts** - Visualize price history with Recharts
- **🔔 Smart Alerts** - Automated email notifications when prices reach your target
- **🎨 Modern UI/UX** - Clean, accessible interface with Radix UI components
- **🌗 Theme Support** - Dark and Light modes with full responsiveness
- **🔐 Secure Authentication** - Built-in auth with Supabase

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router and Server Components
- **TypeScript** - Type-safe development
- **React 19** - Latest React features and optimizations

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Lucide React** - Beautiful, consistent icons

### Backend & Infrastructure
- **Supabase** - PostgreSQL database with authentication & real-time features
- **Firecrawl** - Intelligent web scraping and data extraction
- **Resend** - Transactional email service
- **Next.js API Routes** - Serverless functions for backend logic

### Development Tools
- **pnpm** - Fast package manager
- **ESLint** - Code quality and consistency
- **Tailwind CSS PostCSS** - Advanced CSS processing

### Validation & Utilities
- **Zod** - TypeScript-first schema validation
- **Sonner** - Toast notifications

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher) - [Installation Guide](https://pnpm.io/installation)

You'll also need accounts for:
- **Supabase** - [Create Account](https://supabase.com)
- **Firecrawl** - [Get API Key](https://www.firecrawl.dev)
- **Resend** - [Get API Key](https://resend.com) (for email notifications)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Syl3r27/track-deal.git
cd track-deal
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Firecrawl
FIRECRAWL_API_KEY=your_firecrawl_api_key

# Resend
RESEND_API_KEY=your_resend_api_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set up the database

Go to your Supabase dashboard and run the SQL migrations to set up tables for:
- Products
- Price history
- User preferences
- Alert settings

### 5. Run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📁 Project Structure

```
track-deal/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (scraping, cron jobs)
│   ├── auth/              # Authentication routes
│   ├── layout.tsx         # Root layout
│   ├── page.jsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── AddProductForm.js # Product addition form
│   ├── PriceChart.js     # Price visualization
│   └── ProductCard.jsx   # Product display card
├── lib/                   # Utility functions
│   ├── email.js          # Email service integration
│   ├── firecrawl.js      # Web scraping logic
│   └── utils.ts          # Common utilities
├── utils/                 # Additional utilities
│   └── supabase/         # Supabase client & server functions
├── public/               # Static assets
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript configuration
```

---

## 🔑 Key Files

- **[package.json](package.json)** - Project dependencies and scripts
- **[next.config.ts](next.config.ts)** - Next.js configuration
- **[tsconfig.json](tsconfig.json)** - TypeScript configuration
- **[app/api/cron/check-price/route.js](app/api/cron/check-price/route.js)** - Scheduled price checking
- **[lib/firecrawl.js](lib/firecrawl.js)** - Web scraping implementation
- **[lib/email.js](lib/email.js)** - Email notification logic

---

## 🚦 Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

---

## 🔧 Configuration

### Supabase Setup

1. Create the following tables in your Supabase project:
   - **products** - Store tracked products
   - **prices** - Store price history
   - **alerts** - Store user alert preferences

2. Set up Row Level Security (RLS) policies for user data protection

3. Enable real-time subscriptions for price updates

### Firecrawl Configuration

1. Get your API key from [Firecrawl Dashboard](https://www.firecrawl.dev)
2. Add it to your `.env.local` file
3. Configure extraction schemas for target e-commerce sites

### Email Setup

1. Create a Resend account and verify your domain
2. Add API key to environment variables
3. Set up email templates for price alerts

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push -u origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🙋 Support

If you encounter any issues or have questions, please:

1. Check existing [GitHub Issues](https://github.com/Syl3r27/track-deal/issues)
2. Create a new issue with detailed information
3. Contact the development team

---

## 🎯 Roadmap

- [ ] Mobile app integration
- [ ] Advanced price prediction with ML
- [ ] Multi-language support
- [ ] Browser extension for quick product addition
- [ ] Price comparison across multiple stores
- [ ] Social sharing of deals

---

**Made with ❤️ by the Track-Deal Team**