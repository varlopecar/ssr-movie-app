import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.css";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import ThemeRegistry from "../theme/ThemeRegistry";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "My movies",
  description: "A playlists of movies application",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <header><MainHeader />
          </header>
          <main>{children}</main>
          <footer>
            <MainFooter />
          </footer>
        </ThemeRegistry>
      </body>
    </html>
  );
}

