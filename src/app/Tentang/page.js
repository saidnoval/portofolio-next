
import Kartu from "@/component/Kartu";

const hobi = [
  "Bermain game",
  "Badminton",
  "Berenang",
];

const citaCita = [
  "menjadi programmer",
  "Magang di perusahaan IT",
  "Bekerja di pelayaran",
];

const jadwals = [
  { hari: "Senin", waktu: "07.00-14.25", kegiatan: "membaca modul" },
  { hari: "Selasa", waktu: "07.00-14.25", kegiatan: "mengerjakan tugas praktik" },
  { hari: "Rabu", waktu: "07.00-14.25", kegiatan: "eval error" },
  { hari: "Kamis", waktu: "07.00-14.25", kegiatan: "merekam video dan menulis laporan" },
];

export const metadata = {
  title: "Tentang",
  description: "cerita, hobi, cita-cita dan jadwal belajar Moch Said Abu Noval",
};

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-primary dark:text-sky-200 md:text-4xl">
        Tentang Saya
      </h1>

      <Kartu judul="Perkenalan">
        Saya tinggal di Pasuruan Kota dan senang mencoba hal baru di dunia
        teknologi. Saya ingin bisa membuat website yang bermanfaat untuk
        sekolah dan UMKM di sekitar rumah.
      </Kartu>

      <div className="grid grid-cols-2 gap-6">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 mb-5">
            {hobi.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-Cita">
          <ol className="list-decimal pl-5">
            {citaCita.map((data) => (
              <li key={data}>{data}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      <Kartu judul="Jadwal Belajar">
        <table className="min-w-full table-fixed">
          <thead className="bg-utama">
            <tr>
              <th className="text-left text-white p-2 font-bold">Hari</th>
              <th className="text-left text-white p-2 font-bold">Waktu</th>
              <th className="text-left text-white p-2 font-bold">Kegiatan</th>
            </tr>
          </thead>

          <tbody>
            {jadwals.map((item) => (
              <tr
                key={item.hari}
                className="border-b border-input dark:border-gray-600"
              >
                <td className="p-2 text-sm font-semibold text-muted-foreground dark:text-gray-300">
                  {item.hari}
                </td>
                <td className="p-2 text-sm font-semibold text-muted-foreground dark:text-gray-300">
                  {item.waktu}
                </td>
                <td className="p-2 text-sm font-semibold text-muted-foreground dark:text-gray-300">
                  {item.kegiatan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Kartu>
    </main>
  );
}
