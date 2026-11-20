
import { redirect } from "next/navigation";

import FormProyek from "@/component/FormProyek";
import { Card, CardContent } from "@/component/ui/card";
import { sudahMasuk } from "@/lib/pin";
import { tambahProyek } from "../../actions";

export const metadata = {
  title: "Tambah Proyek",
};

const proyekKosong = {
  id: "",
  judul: "",
  slug: "",
  kategori: "",
  minggu: "",
  deskripsi: "",
  fitur: [],
  gambar_url: "",
};

export default async function TambahProyek() {
  if (!(await sudahMasuk())) {
    redirect("/kelola");
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary">
        Tambah Proyek
      </h1>

      <p className="mt-2 text-muted-foreground">
        Masukkan informasi proyek baru ke portofolio.
      </p>

      <Card className="mt-6">
        <CardContent>
          <FormProyek
            aksi={tambahProyek}
            proyek={proyekKosong}
            teksTombol="Simpan Proyek"
          />
        </CardContent>
      </Card>
    </main>
  );
}
