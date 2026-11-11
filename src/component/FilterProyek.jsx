
"use client";

import { useState } from "react";
import ProyekCard from "@/component/ProjectCard";

export default function FilterProyek({ proyek }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");

  const daftarKategori = [
    "Semua",
    ...new Set(proyek.map((item) => item.kategori)),
  ];

  const proyekFilter = proyek.filter((item) => {
    const cocokKategori =
      kategori === "Semua" || item.kategori === kategori;

    const cocokKata =
      item.judul.toLowerCase().includes(kata.toLowerCase()) ||
      item.deskripsi.toLowerCase().includes(kata.toLowerCase());

    return cocokKategori && cocokKata;
  });

  return (
    <section className="mt-8">
    
      <div className="mb-5">
        <input
          type="text"
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          placeholder="Cari proyek..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-utama dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {daftarKategori.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setKategori(item)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              kategori === item
                ? "bg-utama text-white"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mb-5 text-sm text-gray-600 dark:text-gray-300">
        Menampilkan {proyekFilter.length} dari {proyek.length} proyek
      </p>

      {proyekFilter.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {proyekFilter.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-100 p-6 text-center text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          Proyek tidak ditemukan.
        </p>
      )}
    </section>
  );
}
