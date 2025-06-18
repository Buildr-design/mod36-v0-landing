
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import { siteContent } from '@/data/site-content';


export const metadata: Metadata = {
  title: siteContent.appName, 
  description: siteContent.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Removed className="dark" to default to light theme */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Using Inter (already in tailwind.config) & Space Grotesk for headings, DM Sans for body */}
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
