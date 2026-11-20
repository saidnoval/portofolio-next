
import FormKontak from "@/component/FormKontak";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/component/ui/card";

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
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <FormKontak />
            </CardContent>
          </Card>

          <Card className="h-fit bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-utama dark:text-white">
                Temukan Saya di
              </CardTitle>
            </CardHeader>

            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
