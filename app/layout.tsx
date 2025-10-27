import type { Metadata } from "next";
import { Noto_Sans_Tamil, Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/layout/I18nProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansTamil = Noto_Sans_Tamil({ 
  subsets: ["tamil", "latin"],
  variable: "--font-tamil"
});

export const metadata: Metadata = {
  title: "Peninsula Tamil School | Tamil Learning in Bay Area",
  description: "Preserving Tamil language and culture for future generations in the Bay Area. Join our community of learners and celebrate Tamil heritage.",
  keywords: ["Tamil school", "Bay Area", "Tamil language", "Tamil culture", "education", "Peninsula"],
  openGraph: {
    title: "Peninsula Tamil School",
    description: "Preserving Tamil language and culture in the Bay Area",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansTamil.variable}`}>
      <body className="font-sans antialiased">
        <I18nProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}