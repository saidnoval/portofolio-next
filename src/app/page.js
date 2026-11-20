
import Link from "next/link";
import Hero from "@/component/Hero";
import ProyekCard from "@/component/ProyekCard";
import SkillCard from "@/component/SkillCard";
import { proyek } from "@/data/proyek";
import { supabase } from "@/lib/supabase";

const proyekTerbaru = proyek.slice(-3);

export default async function Home() {
  const { data: skills } = await supabase
    .from("skill")
    .select("*")
    .order("id");

  return (
    <main className="min-h-screen w-full bg-latar px-4 py-10 transition-colors dark:bg-gray-900">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <Hero
          nama="Moch Said Abu Noval"
          tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
        />

        <section>
          <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
            Keahlian
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills && skills.map((skill) => (
              <SkillCard
                key={skill.id}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
            Proyek Terbaru
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>

          <Link
            href="/Proyek"
            className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white transition dark:bg-sky-700"
          >
            Lihat semua proyek
          </Link>
        </section>
      </div>
    </main>
  );
}
