import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
    return (
        <Link
            href={`/Proyek/${proyek.slug}`}
            className="block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
            <Image
                src={proyek.gambar}
                alt={`Tangkapan layar ${proyek.judul}`}
                width={640}
                height={400}
                className="h-52 w-full object-cover"
            />

            <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-utama px-3 py-1 text-xs font-medium text-white">
                        {proyek.kategori}
                    </span>

                    <span className="text-sm text-gray-500">
                        {proyek.minggu}
                    </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {proyek.judul}
                </h2>

                <p className="line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {proyek.deskripsi}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-utama dark:text-sky-200">
                    Lihat Detail
                    <span aria-hidden="true">→</span>
                </span>
            </div>
        </Link>
    );
}