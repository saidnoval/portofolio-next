
import Kartu from "@/component/Kartu";

const hobi = [
  "Bermain Game",
  "Berenang",
  "Badminton",
];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
    "Magang di perusahaan teknologi",
    "Bekerja sebagai Web Developer",
];

const jadwal = [
  { hari: "Senin", kegiatan: "Belajar di sekolah" },
  { hari: "Selasa", kegiatan: "Belajar pemrograman" },
  { hari: "Rabu", kegiatan: "Mengerjakan tugas" },
  { hari: "Kamis", kegiatan: "Belajar pemrograman" },
  { hari: "Jumat", kegiatan: "Evaluasi pembelajaran" },
  { hari: "Sabtu", kegiatan: "Beristirahat" },
  { hari: "Minggu", kegiatan: "Berolahraga" },
];

export const metadata = {
  title: "Tentang",
  description:
    "Cerita, hobi, cita-cita, dan perjalanan belajar Moch Said Abu Noval.",
};

export default function Tentang() {
  return (
    <main className="min-h-screen w-full bg-latar px-4 py-10 transition-colors dark:bg-gray-900">
      <div className="mx-auto w-full max-w-5xl space-y-6">

        <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
          Tentang Saya
        </h1>

        <Kartu judul="Perkenalan">
          <p className="text-gray-700 dark:text-gray-300">
            Saya adalah pelajar SMK Negeri 1 Pasuruan jurusan
            Rekayasa Perangkat Lunak (RPL) yang memiliki minat
            besar di bidang teknologi dan pengembangan website.
            Saya sedang mempelajari HTML, CSS, JavaScript, Next.js,
            serta desain UI/UX untuk meningkatkan kemampuan saya.
            Saya juga senang mencoba hal baru, mengerjakan proyek,
            dan mengembangkan portofolio sebagai langkah untuk
            menjadi Web Developer yang profesional.
          </p>
        </Kartu>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <Kartu judul="Hobi">
            <ul className="list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Menjadi <strong>Full Stack Web Developer</strong>.
              Langkah yang saya rencanakan:
            </p>

            <ol className="list-decimal space-y-1 pl-5 text-gray-700 dark:text-gray-300">
              {rencana.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>

        </div>

        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-utama text-white dark:bg-sky-800">
                <tr>
                  <th className="p-3">Hari</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>

              <tbody>
                {jadwal.map((item) => (
                  <tr
                    key={item.hari}
                    className="border-b border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300"
                  >
                    <td className="p-3 font-medium">
                      {item.hari}
                    </td>
                    <td className="p-3">
                      {item.kegiatan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Kartu>

      </div>
    </main>
  );
}