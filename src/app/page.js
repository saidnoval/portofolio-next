
import Link from "next/link";
import Hero from "@/component/Hero";
import ProyekCard from "@/component/ProjectCard";
import SkillCard from "@/component/SkillCard";
import { proyek } from "@/data/proyek";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Menengah" },
  { nama: "Desain poster dengan Canva", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
];

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-10 px-4 py-10">

      <Hero
        nama="Moch Said Abu Noval"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <section>
        <h2 className="mb-4 text-2xl font-bold text-utama">
          Keahlian
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">
          Proyek Terbaru
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard
              key={item.slug}
              proyek={item}
            />
          ))}
        </div>

        <Link
          href="/Proyek"
          className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white"
        >
          Lihat semua proyek
        </Link>
      </section>

    </main>
  );
}
