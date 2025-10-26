# YOUR DIGITAL CHOICE

🚀 **Premium IT Solutions & Software Development Company**

A modern, high-performance website built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **⚡ Performance Optimized**: Dynamic imports, code splitting, and lazy loading
- **🔒 Security First**: Environment variables, Firebase security rules
- **📱 Responsive Design**: Mobile-first approach with modern UI components
- **♿ Accessibility**: WCAG compliant with proper ARIA labels
- **🎨 Modern UI**: Shadcn/ui components with dark/light theme support
- **🔍 SEO Optimized**: Dynamic sitemap, robots.txt, and meta tags
- **🚀 CI/CD Ready**: GitHub Actions workflow included

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Backend**: Firebase (Firestore)
- **Deployment**: Vercel/Netlify ready
- **Analytics**: Google Analytics ready

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/AliNaqi0011/creative-experts.git
cd creative-experts
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your Firebase config
```

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:9002
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
│   ├── landing/        # Landing page sections
│   └── ui/             # Base UI components
├── firebase/           # Firebase configuration
├── hooks/              # Custom React hooks
└── lib/                # Utilities and content
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint with auto-fix
npm run typecheck    # Run TypeScript checks
npm run analyze      # Analyze bundle size
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔒 Environment Variables

Required environment variables (see `.env.example`):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

© 2024 Creative Experts Solution. All rights reserved.

---

**Built with ❤️ by YOUR DIGITAL CHOICE**