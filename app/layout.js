import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata = {
  title: "ПИШ - музей",
  description: "Информационный музей передовой инженерной школы ДВФУ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
