
import { notFound, redirect } from "next/navigation";

import FormProyek from "@/component/FormProyek";
import { Card, CardContent } from "@/component/ui/card";
import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { ubahProyek } from "../../actions";

export const metadata = {
  title: "Ubah Proyek",
};

export default async function UbahProyek({ params }) {
  if (!(await sudahMasuk())) {
    redirect("/kelola");
  }

  const { id } = await params;

  const { data: proyek, error } = await supabaseAdmin
    .from("projects")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Gagal mengambil proyek:", error.message);
  }

  if (!proyek) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary">
        Ubah Proyek
      </h1>

      <Card className="mt-6">
        <CardContent>
          <FormProyek
            aksi={ubahProyek}
            proyek={proyek}
            teksTombol="Simpan Perubahan"
          />
        </CardContent>
      </Card>
    </main>
  );
}
