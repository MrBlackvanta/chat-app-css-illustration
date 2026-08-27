import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  "https://chat-app-css-illustration.abdelrhman-ahmed8881.workers.dev";

const name = "Simple booking";
const title = `${name} | Dog walking by chat`;
const description =
  "Message your dog walker, share photos, and pick a walk length and price. Arrangements, bookings and ratings all happen in the conversation.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "A phone showing a dog-walking chat, beside the heading Simple booking.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} antialiased`}>
      <body>
        <div className="flex min-h-dvh flex-col overflow-clip">{children}</div>
      </body>
    </html>
  );
}
