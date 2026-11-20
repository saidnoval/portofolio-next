
import Link from "next/link";

import FormPin from "@/component/FormPin";
import KonfirmasiHapus from "@/component/KonfirmasiHapus";

import { Badge } from "@/component/ui/badge";
import { Button, buttonVariants } from "@/component/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/component/ui/card";

import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";

import {
  keluarKelola,
  aturSematan,
  hapusPesan,
  hapusProyek,
} from "./actions";

export const metadata = {
  title: "Kelola Data",
};

export default async function Kelola() {
  const adminMasuk = await sudahMasuk();

  if (!adminMasuk) {
    return (
      <main className="mx-auto w-full max-w-md px-4 py-10">
        <h1 className="text-3xl font-bold text-primary">
          Kelola Data
        </h1>

        <p className="mt-3 text-muted-foreground">
          Halaman ini khusus pemilik portofolio.
        </p>

        <Card className="mt-6">
          <CardContent>
            <FormPin />
          </CardContent>
        </Card>
      </main>
    );
  }

  const { data: daftarPesan, error: errorPesan } =
    await supabaseAdmin
      .from("buku_tamu")
      .select("*")
      .order("created_at", { ascending: false });

 const { data: daftarProyek, error: errorProyek } =
  await supabaseAdmin
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

 if (errorProyek) {
  console.error("Gagal mengambil proyek:", errorProyek.message);
}

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-primary">
          Kelola Data
        </h1>

        <form action={keluarKelola}>
          <Button type="submit" variant="outline">
            Keluar
          </Button>
        </form>
      </div>

      {/* DAFTAR PROYEK */}
      <div className="mt-8 flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-primary">
          Proyek
        </h2>

        <Link
          href="/kelola/proyek/baru"
          className={buttonVariants()}
        >
          Tambah Proyek
        </Link>
      </div>

      <div className="mt-4 space-y-3">
        {daftarProyek && daftarProyek.length > 0 ? (
          daftarProyek.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.judul}</CardTitle>

                <CardDescription>
                  {item.kategori} &middot; {item.minggu}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">
                <Link
                  href={`/kelola/proyek/${item.id}`}
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                >
                  Ubah
                </Link>

                <KonfirmasiHapus
                  id={item.id}
                  aksi={hapusProyek}
                  judul="Hapus proyek ini?"
                  keterangan={`Proyek ${item.judul} akan dihapus dari halaman Proyek dan Beranda.`}
                />
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground">
            Belum ada proyek.
          </p>
        )}
      </div>

      <h2 className="mt-10 text-2xl font-bold text-primary">
        Pesan Buku Tamu
      </h2>

      <div className="mt-4 space-y-4">
        {daftarPesan && daftarPesan.length > 0 ? (
          daftarPesan.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle>{item.nama}</CardTitle>

                  {item.disematkan && (
                    <Badge>Disematkan</Badge>
                  )}
                </div>

                <CardDescription>
                  {new Date(item.created_at).toLocaleDateString(
                    "id-ID",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="whitespace-pre-wrap">
                  {item.pesan}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <form action={aturSematan}>
                    <input
                      type="hidden"
                      name="id"
                      value={item.id}
                    />

                    <input
                      type="hidden"
                      name="disematkan"
                      value={String(!item.disematkan)}
                    />

                    <Button
                      type="submit"
                      variant="outline"
                      size="sm"
                    >
                      {item.disematkan
                        ? "Batalkan Sematan"
                        : "Sematkan Pesan"}
                    </Button>
                  </form>

                  <KonfirmasiHapus
                    id={item.id}
                    aksi={hapusPesan}
                    judul="Hapus pesan ini?"
                    keterangan={`Pesan dari ${item.nama} akan dihapus permanen dari buku tamu.`}
                  />
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground">
            Belum ada pesan.
          </p>
        )}
      </div>
    </main>
  );
}
