import { GeistSans } from 'geist/font/sans'
import './globals.css'
import 'aos/dist/aos.css'
import { Toaster } from "@/components/ui/toaster"

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://muhammadkamran.dev");
const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Kamran | Full Stack Developer, AI Researcher, Educator",
    template: "%s | Muhammad Kamran",
  },
  description:
    "Muhammad Kamran is a full stack developer, AI researcher, and educator bridging academia and industry. He builds AI, web, and crypto products with a focus on generative AI, recommender systems, and reinforcement learning.",
  keywords: [
    "Muhammad Kamran",
    "full stack developer",
    "AI researcher",
    "AI engineer",
    "generative AI",
    "recommender systems",
    "reinforcement learning",
    "crypto",
    "blockchain",
    "web3",
    "teacher",
    "Pakistan",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Muhammad Kamran | Full Stack Developer, AI Researcher, Educator",
    description:
      "Full stack developer, AI researcher, and educator bridging academia and industry with AI, web, and crypto products.",
    url: siteUrl,
    siteName: "Muhammad Kamran",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Kamran | Full Stack Developer, AI Researcher, Educator",
    description:
      "Full stack developer, AI researcher, and educator bridging academia and industry with AI, web, and crypto products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
