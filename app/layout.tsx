import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "GOODGIG",
  description: "Strategic partners in your impact journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${roboto.variable}
        ${montserrat.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}