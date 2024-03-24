import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Beheer externe koppelingen',
    description: 'Beheer externe koppelingen',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="nl">
            <body className={inter.className}>
                <Header />
                <div className="container mx-auto">
                    <main>{children}</main>
                </div>
            </body>
        </html>
    )
}
