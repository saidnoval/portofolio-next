import FormKontak from "@/component/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi saya melalui halaman kontak.",
};

export default function Kontak() {
  return (
    <main className="min-h-screen bg-latar px-6 py-10 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-utama transition-colors dark:text-white md:text-4xl">
          Hubungi Saya
        </h1>

        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
          Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800">
            <FormKontak />
          </section>

          <section className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold text-utama dark:text-white">
              Temukan Saya di
            </h2>

            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-utama dark:text-gray-200">
                  GitHub
                </h3>

                <a
                  href="https://github.com/saidnoval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Kunjungi GitHub saya
                </a>
              </div>

              <div>
                <a
                  href="mailto:saidnoval81@gmail.com"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  saidnoval81@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}