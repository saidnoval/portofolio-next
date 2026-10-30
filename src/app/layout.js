import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css"
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

const geistSans = Geist({
variable: "--font-geist-sans",
subjects: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subjects: ["latin"],
});

export const metadata = {
  title: {
    default: "Moch Said Abu Noval | Portofolio",
    template: "%s | Moch Said Abu Noval" ,
  },
  description:
    "Portofolio Moch Said Abu Noval, Frontend Developer dan UI/UX Designer.",
  
};

export default function RootLayout({ children }) {
  return (
    <html
     lang="id"
     className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
     >
  <body className="min-h-full flex flex-col bg-latar text-gray-800">
    <Navbar />
    {children}
    <Footer />
  </body>
</html>
  );
}