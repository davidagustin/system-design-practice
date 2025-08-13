import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

export const metadata: Metadata = {
  title: "System Design Interview Learning",
  description: "Master system design interviews with comprehensive study materials, concepts, and quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
