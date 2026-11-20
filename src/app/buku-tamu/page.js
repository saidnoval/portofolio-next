
import { supabase } from "@/lib/supabase";
import FormBukuTamu from "@/component/FormBukuTamu";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";

import { Badge } from "@/component/ui/badge";

export const metadata = {
  title: "Buku Tamu",
  description: "Halaman buku tamu pengunjung.",
};

export default async function BukuTamu() {
  const { data: daftarPesan } = await supabase
    .from("buku_tamu")
    .select("*")
    .order("disematkan", { ascending: false })
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold text-primary">
        Buku Tamu
      </h1>

      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Kirim Pesan</CardTitle>
            <CardDescription>
              Silakan tinggalkan pesan di buku tamu.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <FormBukuTamu />
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">
        Pesan Terbaru
      </h2>

      <div className="w-full space-y-4">
        {daftarPesan &&
          daftarPesan.map((item) => (
            <Card key={item.id} className="w-full">
              <CardHeader>
                <CardTitle>{item.nama}</CardTitle>

                <CardDescription>
                  {new Date(item.created_at).toLocaleDateString("id-ID")}
                </CardDescription>

                {item.disematkan && (
                  <Badge>Disematkan</Badge>
                )}
              </CardHeader>

              <CardContent>
                {item.pesan}
              </CardContent>
            </Card>
          ))}
      </div>
    </main>
  );
}
