import { ReactNode } from "react";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
