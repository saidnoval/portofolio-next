import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css"
import footer from "@/component/Footer";
import Footer from "@/component/Footer";

const geistSans = Geist({
variable: "--font-geist-sans",
subjects: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subjects: ["latin"],
});

export const metadata = {
  title: "Moch Said Abu Noval| Portofolio",
  description:
    "Portofolio Moch Said Abu Noval, siswa SMK calon Junior Web Developer di Kelas Industri UBIG.",
};

export default function RootLayout({ children }) {
  return (
    <html
     lang="id"
     className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
     >
  <body className="min-h-full flex flex-col bg-latar text-gray-800">
    {children}
    <Footer />
  </body>
</html>
  );
}