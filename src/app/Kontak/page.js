
export const metadata = {
  title: "Kontak",
  description: "Hubungi saya melalui halaman kontak.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-3 text-lg text-gray-700">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Form Kontak */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <form className="space-y-4">
            <div>
              <label htmlFor="nama" className="block font-semibold">
                Nama lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Contoh: Budi Santoso"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="nama@gmail.com"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <div>
              <label htmlFor="nomorHp" className="block font-semibold">
                Nomor HP
              </label>
              <input
                type="tel"
                id="nomorHp"
                name="nomorHp"
                placeholder="081234567890"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <div>
              <label htmlFor="keperluan" className="block font-semibold">
                Keperluan
              </label>
              <select
                id="keperluan"
                name="keperluan"
                required
                defaultValue=""
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              >
                <option value="" disabled>
                  -- Pilih keperluan --
                </option>
                <option value="Kerja Sama">Kerja Sama</option>
                <option value="Pertanyaan">Pertanyaan</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block font-semibold">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                maxLength={300}
                placeholder="Tulis pesanmu di sini"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-utama px-5 py-2 font-semibold text-white"
            >
              Kirim Pesan
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Catatan: Form ini belum dapat mengirim pesan.
            Fitur pengiriman pesan akan dibuat pada Minggu 15.
          </p>
        </section>

        <section className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-utama">
            Temukan Saya di
          </h2>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-utama">GitHub</h3>
              <a
                href="https://github.com/saidnoval"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Kunjungi GitHub saya
              </a>
            </div>

            <div>
              <a
                href="mailto:EMAIL_KAMU"
                className="text-blue-600 hover:underline"
              >
                saidnoval81@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
