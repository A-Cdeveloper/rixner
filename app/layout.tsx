import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Webdesign Freiburg | Internetagentur | rixner.net",
  description:
    "Seit 2002 realisiert die Webagentur rixner.net in Freiburg professionelle Internetauftritte. Wordpress und responsives Design sind unsere Spezialität.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {/* @ts-expect-error Async Server Component */}
        <Header />
        <main className=" md:container py-2 px-2 sm:px-4 md:px-0 mx-auto bg-slate-200 sm:bg-red-400 md:bg-green-300 lg:bg-blue-300 xl:bg-yellow-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
