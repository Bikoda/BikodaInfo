# BikodaInfo - Vibecoding & Testing Solutions

[![Next.js](https://img.shields.io/badge/Next.js-14.0.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

A modern, responsive landing page for vibecoding and testing services. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Hero Section** with animated elements and value proposition
- **Services Overview** - Games, Apps/Web, Business Solutions, Data/DB, Testing/QA, Vibecoding
- **Process Section** - Jam → Build → Ship workflow
- **Case Studies** - Placeholder for project showcases
- **Contact Form** - Functional form with Resend email integration and spam protection
- **Responsive Design** - Mobile-first, modern UI
- **Smooth Animations** - Framer Motion animations
- **Modern Dark Theme** - Sleek dark design with yellow accents
- **Mobile Navigation** - Responsive hamburger menu
- **Accessibility Features** - Skip links, focus states, ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Email Service**: Resend
- **Deployment Ready**: Vercel, Netlify, or any hosting provider

## 📦 Project Structure

```
BikodaInfo/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # Contact form API endpoint
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Main landing page
│   ├── components/
│   │   └── ui/                       # Reusable UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── separator.tsx
│   │       └── textarea.tsx
│   └── lib/
│       └── utils.ts                  # Utility functions
├── public/                           # Static assets
├── .env.local                        # Environment variables (not in git)
└── package.json                      # Dependencies and scripts
```

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/BikodaInfo.git
   cd BikodaInfo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (for contact form):
   ```bash
   # Create .env.local file
   echo "RESEND_API_KEY=your_resend_api_key_here" > .env.local
   ```
   Get your Resend API key from [https://resend.com/api-keys](https://resend.com/api-keys)

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

Update your personal information in `src/app/page.tsx`:

```typescript
const CONFIG = {
  EMAIL: "contact@bikoda.dev",
  WHATSAPP: "https://wa.me/5490000000000", // Replace with your number
  GITHUB: "https://github.com/Bikoda",
  LINKEDIN: "https://www.linkedin.com/in/juan-francisco-maggi/",
  CALENDLY: "https://calendly.com/your-handle/vibecoding-session", // Optional
  CV_URL: "#", // Optional
};
```

## 🎨 Customization

### Services
Edit the `services` array in `src/app/page.tsx` to customize your service offerings.

### Case Studies
Replace the placeholder projects in the "Selected Work" section with real project showcases.

### Contact Form
The contact form is already wired up with Resend for email delivery:
1. Sign up for a free Resend account at [resend.com](https://resend.com)
2. Get your API key from [resend.com/api-keys](https://resend.com/api-keys)
3. Add it to your `.env.local` file as `RESEND_API_KEY=your_key_here`
4. Update the email addresses in `src/app/api/contact/route.ts` to your actual email

### Styling
- Modify colors and theme in `src/app/globals.css`
- Customize component styles in `src/components/ui/`
- Adjust layout and spacing in the main page component

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project is ready to deploy to:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Other Platforms
Build the project with `npm run build` and serve the `.next` directory.

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Environment variables not working:**
- Ensure `.env.local` is in the root directory
- Restart the development server after adding environment variables

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact: contact@bikoda.dev
- LinkedIn: [Juan Francisco Maggi](https://www.linkedin.com/in/juan-francisco-maggi/)

---

Made with ❤️ by [Bikoda](https://github.com/Bikoda) # Updated Sun Aug 17 12:35:27 PM -03 2025
