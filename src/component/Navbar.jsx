
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TombolTema from "@/component/TombolTema";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/Tentang", label: "Tentang" },
  { href: "/Proyek", label: "Proyek" },
  { href: "/Kontak", label: "Kontak" },
  { href: "/buku-tamu", label: "Buku Tamu" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-utama text-white transition-colors duration-300 dark:bg-gray-950">
      <nav className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold">
          moch said abu noval
        </Link>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {menu.map((item) => {
            const aktif =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    aktif
                      ? "font-bold text-white underline underline-offset-8"
                      : "text-gray-200 hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <TombolTema />
      </nav>
    </header>
  );
}
