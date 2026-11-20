
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Textarea } from "@/component/ui/textarea";

function TombolKirim({ teks }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Menyimpan..." : teks}
    </Button>
  );
}

export default function FormProyek({ aksi, proyek, teksTombol }) {
  const [state, formAction] = useActionState(aksi, { proyek });

  const nilai = state.proyek || proyek;

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="id" value={proyek.id || ""} />

      <div className="space-y-2">
        <Label htmlFor="judul">Judul Proyek</Label>
        <Input
          id="judul"
          name="judul"
          placeholder="Contoh: Buku Tamu Digital"
          defaultValue={nilai.judul}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          placeholder="Contoh: buku-tamu"
          defaultValue={nilai.slug}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="kategori">Kategori</Label>
        <Input
          id="kategori"
          name="kategori"
          placeholder="HTML, CSS, JavaScript, atau Next.js"
          defaultValue={nilai.kategori}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="minggu">Dibuat di</Label>
        <Input
          id="minggu"
          name="minggu"
          placeholder="Contoh: Minggu 15"
          defaultValue={nilai.minggu}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deskripsi">Deskripsi</Label>
        <Textarea
          id="deskripsi"
          name="deskripsi"
          rows={2}
          placeholder="Deskripsi singkat proyek"
          defaultValue={nilai.deskripsi}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fitur">Yang Saya Pelajari</Label>
        <Textarea
          id="fitur"
          name="fitur"
          rows={3}
          placeholder={"Server Actions\nValidasi form\nSupabase"}
          defaultValue={(nilai.fitur || []).join("\n")}
        />
        <p className="text-sm text-muted-foreground">
          Tulis satu poin di setiap baris.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="gambar_url">Alamat Gambar</Label>
        <Input
          id="gambar_url"
          name="gambar_url"
          placeholder="/proyek/proyek-buku-tamu.png"
          defaultValue={nilai.gambar_url}
          required
        />
      </div>

      {state.error && (
        <p className="rounded-md bg-red-100 p-3 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <TombolKirim teks={teksTombol} />
    </form>
  );
}
