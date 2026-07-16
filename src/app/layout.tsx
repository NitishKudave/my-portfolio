import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseFollower from "@/components/MouseFollower";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleField from "@/components/ParticleField";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nitish Mohan Kudave — Full Stack Developer",
  description: "Full Stack Developer specializing in Python, Django, React.js, Next.js, and Flutter. Building secure, scalable web and mobile applications.",
  keywords: ["Full Stack Developer", "Python", "Django", "React.js", "Next.js", "Flutter", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <ScrollProgress />
        <MouseFollower />
        <ParticleField />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
