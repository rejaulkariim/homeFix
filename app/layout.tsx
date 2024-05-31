import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  keywords: [
    "Aircon Supply and Installation",
    "Aircon Chemical Wash",
    "Aircon Repair",
    "Aircon General Cleaning",
    "Aircon Overhaul Cleaning",
  ],
  authors: [
    {
      name: "Rejaul Karim",
      url: "https://github.com/rejaulkariim",
    },
  ],
  creator: "Rejaul Karim",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@rejaulkariim",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", recursive.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
