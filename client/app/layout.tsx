import "../styles/globals.css";
import Sidebar from './sidebar';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <title>Sample Social</title>
            </head>
            <body className="flex">
                <Sidebar />

                {/* Main content */}
                <main className="flex-1">
                    {children}
                </main>
            </body>
        </html>
    )
}