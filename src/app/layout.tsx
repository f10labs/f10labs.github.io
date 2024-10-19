import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundGraph from "@/components/background-graph";
import GitHubIcon from "./github-mark.svg";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Foundations Labs",
  description: "AI Safety Evaluations: Challenges and Future Directions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white text-gray-900`}
      >
        <BackgroundGraph />
        <div className="min-h-screen flex flex-col relative z-10">
          <header className="bg-white text-gray-900 shadow-md relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <nav className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">Foundations Labs</span>
                </div>
                <div className="flex items-center space-x-6">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition duration-150"
                  >
                    About Us
                  </a>
                  <a
                    href="http://privacyml.github.io/"
                    className="text-gray-700 hover:text-gray-900 transition duration-150"
                  >
                    Blog
                  </a>
                  <a
                    href="https://github.com/f10labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition duration-150"
                  >
                    <Image
                      src={GitHubIcon}
                      alt="GitHub"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-grow relative z-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
              {children}
            </div>
          </main>
          <footer className="bg-gray-100 text-gray-600 py-8 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="mb-4 sm:mb-0">
                &copy; 2024 Foundations Labs. All rights reserved.
              </p>
              {/* <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-white transition duration-150"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition duration-150"
                >
                  Terms of Service
                </a>
              </div> */}
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
