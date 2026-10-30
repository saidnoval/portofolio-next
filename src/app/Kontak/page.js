
export const metadata = {
  title: "Kontak",
  description:
    "Hubungi Moch Said Abu Noval melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-3 text-lg text-gray-700">
        Punya pertanyaan atau ingin bekerja sama?
        Silakan hubungi saya melalui form berikut.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Form Kontak */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-utama">
            Kirim Pesan
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="nama"
                className="block font-semibold"
              >
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
              <label
                htmlFor="email"
                className="block font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="nama@email.com"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <div>
              <label
                htmlFor="subjek"
                className="block font-semibold"
              >
                Subjek
              </label>
              <input
                type="text"
                id="subjek"
                name="subjek"
                placeholder="Subjek pesan"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <div>
              <label
                htmlFor="pesan"
                className="block font-semibold"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                maxLength={300}
                placeholder="Tuliskan pesan kamu..."
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-utama px-5 py-3 font-semibold text-white"
            >
              Kirim Pesan
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Catatan: Form ini belum dapat mengirim pesan.
            Fitur pengiriman pesan akan dibuat pada Minggu 15.
          </p>
        </section>


        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-utama">
            Temukan Saya
          </h2>

          <p className="mb-4 text-gray-700">
            Kamu juga dapat menghubungi saya melalui:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-utama">
                GitHub
              </h3>
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
              <h3 className="font-semibold text-utama">
                Email
              </h3>
              <a
                href="mailto:saidoval81@gmail.com"
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
