import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atendra Maurya | Founder & Technology Entrepreneur",
  description: "Atendra Maurya is a technology entrepreneur, founder of CodeAux, and builder of Intent. Explore his ventures, professional background, and work.",
  openGraph: {
    title: "Atendra Maurya | Founder & Technology Entrepreneur",
    description: "Founder of CodeAux and builder of Intent, working across product, software, and strategy.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Atendra Maurya | Founder & Technology Entrepreneur", description: "Founder of CodeAux and builder of Intent." },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
