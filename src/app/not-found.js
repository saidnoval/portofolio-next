
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-utama">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-utama">
        Halaman tidak ditemukan
      </h2>

      <p className="mt-3 text-gray-600">
        Maaf, halaman yang kamu cari tidak tersedia
        atau mungkin sudah dipindahkan.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-utama px-6 py-3 font-semibold text-white hover:opacity-80"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
