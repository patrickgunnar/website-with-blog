import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FetcherProvider from "@/Components/fetcher/FetcherProvider";
import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Website With Blog",
    description: "A Simple Website with Blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <FetcherProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </FetcherProvider>
            </body>
        </html>
    );
}
