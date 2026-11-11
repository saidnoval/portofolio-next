import FilterProyek from "@/component/FilterProyek";
import { proyek } from "@/data/proyek";

export const metadata = {
  title: "Proyek",
  description:
    "Daftar proyek HTML, CSS, dan JavaScript karya Moch Said Abu Noval.",
};

export default function DaftarProyek() {
  return (
    <main className="min-h-screen w-full bg-latar px-6 py-10 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
          Proyek Saya
        </h1>

        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
          Kumpulan hasil belajar saya di kelas Industri UBIG.
          Klik kartu untuk melihat detailnya.
        </p>

        <FilterProyek proyek={proyek} />
      </div>
    </main>
  );
}
