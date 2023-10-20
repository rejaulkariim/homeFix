import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Notice from "@/components/Notice";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Expert Home Improvement Solutions Await! Kuala Lumpur, Ampang, Subang Jaya, Taipan, Damansara, Malaysia",
  description:
    "Transform your property with our expert services! From custom-designed kitchen cabinets to air conditioning service and installation, waterproofing, and home renovation, we've got your needs covered. Trust us to bring your vision to life and enhance the comfort, style, and functionality of your home or business in Malaysia.",
  other: {
    "twitter:image":
      "https://res.cloudinary.com/swiftpos/image/upload/v1697152287/home_fix/c6qh8czoft6hovxa8mhb.png",
    "og:url": "homefix.com.my",
    "og:image":
      "https://res.cloudinary.com/swiftpos/image/upload/v1697152287/home_fix/c6qh8czoft6hovxa8mhb.png",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Notice />
          <Navbar />
          <WhatsAppButton />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
