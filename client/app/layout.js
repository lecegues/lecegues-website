import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react'
import { ProgressBarProvider } from "./contexts/ProgressBarContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://lecegues.com"),
  title: "John Lecegues | Software Engineer Portfolio",
  description:
    "Portfolio for John Lecegues, an early-career software engineer building frontend interfaces, backend services, CI/CD workflows, and business automation.",
  authors: [{ name: "John Lecegues", url: "https://lecegues.com" }],
  creator: "John Lecegues",
  keywords: [
    "John Lecegues",
    "software engineer",
    "portfolio",
    "Next.js",
    "React",
    "frontend",
    "backend",
    "CI/CD",
    "business automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "John Lecegues | Software Engineer Portfolio",
    description:
      "Early-career software engineer experienced in frontend interfaces, backend services, CI/CD workflows, and business automation.",
    url: "/",
    siteName: "John Lecegues Portfolio",
    images: [
      {
        url: "/images/john.jpeg",
        width: 1200,
        height: 1200,
        alt: "Portrait of John Lecegues",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Lecegues | Software Engineer Portfolio",
    description:
      "Early-career software engineer experienced in frontend interfaces, backend services, CI/CD workflows, and business automation.",
    images: ["/images/john.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <ProgressBarProvider>
          {children}
        </ProgressBarProvider>
      </body>
      <Analytics />
    </html>
  );
}
