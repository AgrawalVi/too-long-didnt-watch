import { Economica } from "next/font/google";
import "./globals.css";
import Head from 'next/head'

export function HeadMetaTags({ metadata }) {
  return (
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
  )
}

const economica = Economica({ subsets: ["latin"], weight:'700' });

export const metadata = {
  title: "TLDW: Too Long Didn't Watch",
  description: "Created by Vishrut Agrawal and Nakul Balaji",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={economica.className}>{children}</body>
    </html>
  );
}
