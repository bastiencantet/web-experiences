import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div>
                {children}
            </div>
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center fixed text-xs gap-8 py-2 bottom-0">
                <p className={"py-3"}>
                  Built with ❤️ by{" "}
                    <Link
                        href="https://github.com/bastiencantet"
                        target="_blank"
                        className="font-bold hover:underline text-foreground/80"
                        rel="noreferrer"
                    >Bastien Cantet</Link>
                </p>
                <ThemeSwitcher />
              </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
