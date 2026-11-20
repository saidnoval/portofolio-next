
"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function kirimPesan(stateSebelum, formData) {
  const nama = String(formData.get("nama") || "").trim();
  const pesan = String(formData.get("pesan") || "").trim();

  if (nama.length < 2 || nama.length > 50 || pesan.length < 1 || pesan.length > 300) {
    return {
      error: "Nama harus 2–50 karakter dan pesan wajib diisi (maksimal 300 karakter).",
      nama,
      pesan,
    };
  }

  const { error } = await supabase
    .from("buku_tamu")
    .insert({ nama, pesan });

  if (error) {
    return {
      error: `Pesan gagal disimpan: ${error.message}`,
      nama,
      pesan,
    };
  }

  revalidatePath("/buku-tamu");

  return {
    berhasil: `Terima kasih, ${nama}! Pesanmu sudah tersimpan.`,
  };
}
