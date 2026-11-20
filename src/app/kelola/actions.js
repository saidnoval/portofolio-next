
"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { redirect } from "next/navigation";

export async function masukKelola(stateSebelum, formData) {
  const pin = String(formData.get("pin") || "");

  if (pin !== process.env.ADMIN_PIN) {
    return { error: "PIN salah. Coba lagi." };
  }

  const kue = await cookies();

  kue.set("pin_admin", pin, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  revalidatePath("/kelola");
  return {};
}

export async function keluarKelola() {
  const kue = await cookies();

  kue.delete("pin_admin");

  revalidatePath("/kelola");
}

export async function aturSematan(formData) {
  if (!(await sudahMasuk())) {
    throw new Error("Kamu harus login sebagai admin.");
  }

  const id = String(formData.get("id") || "");
  const disematkan = formData.get("disematkan") === "true";

  if (!id) {
    throw new Error("ID pesan tidak ditemukan.");
  }

  const { error } = await supabaseAdmin
    .from("buku_tamu")
    .update({ disematkan })
    .eq("id", id);

  if (error) {
    console.error("Gagal mengubah sematan:", error);
    throw new Error("Gagal mengubah status sematan.");
  }

  revalidatePath("/kelola");
  revalidatePath("/buku-tamu");
}

export async function hapusPesan(formData) {
  if (!(await sudahMasuk())) {
    throw new Error("Kamu harus login sebagai admin.");
  }

  const id = String(formData.get("id") || "");

  if (!id) {
    throw new Error("ID pesan tidak ditemukan.");
  }

  const { error } = await supabaseAdmin
    .from("buku_tamu")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Gagal menghapus pesan:", error);
    throw new Error("Pesan gagal dihapus.");
  }

  revalidatePath("/kelola");
  revalidatePath("/buku-tamu");

  
}


const daftarKategori = ["HTML", "CSS", "JavaScript", "Next.js"];

function bacaProyek(formData) {
  return {
    judul: String(formData.get("judul") || "").trim(),
    slug: String(formData.get("slug") || "").trim(),
    kategori: String(formData.get("kategori") || "").trim(),
    minggu: String(formData.get("minggu") || "").trim(),
    deskripsi: String(formData.get("deskripsi") || "").trim(),
    fitur: String(formData.get("fitur") || "")
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f !== ""),
    gambar_url: String(formData.get("gambar_url") || "").trim(),
  };
}

function cekProyek(proyek) {
  if (
    proyek.judul === "" ||
    proyek.slug === "" ||
    proyek.deskripsi === ""
  ) {
    return "Judul, slug, dan deskripsi wajib diisi.";
  }

  if (proyek.slug.includes(" ")) {
    return "Slug tidak boleh memakai spasi.";
  }

  if (!daftarKategori.includes(proyek.kategori)) {
    return "Kategori tidak valid.";
  }

  if (!proyek.gambar_url.startsWith("/proyek/")) {
    return "Alamat gambar harus diawali /proyek/.";
  }

  return "";
}

function perbaruiHalaman(slug) {
  revalidatePath("/");
  revalidatePath("/proyek");
  revalidatePath(`/proyek/${slug}`);
  revalidatePath("/kelola");
}

export async function tambahProyek(stateSebelum, formData) {
  const proyek = bacaProyek(formData);

  if (!(await sudahMasuk())) {
    return {
      error: "Masukkan PIN dulu di halaman Kelola.",
      proyek,
    };
  }

  const error = cekProyek(proyek);

  if (error !== "") {
    return { error, proyek };
  }

  const hasil = await supabaseAdmin
    .from("projects")
    .insert(proyek);

  if (hasil.error) {
    if (hasil.error.code === "23505") {
      return { error: "Slug sudah dipakai proyek lain.", proyek };
    }

    return {
      error: `Proyek gagal disimpan: ${hasil.error.message}`,
      proyek,
    };
  }

  perbaruiHalaman(proyek.slug);
  redirect("/kelola");
}

export async function ubahProyek(stateSebelum, formData) {
  const proyek = bacaProyek(formData);
  const id = String(formData.get("id") || "");

  if (!(await sudahMasuk())) {
    return {
      error: "Masukkan PIN dulu di halaman Kelola.",
      proyek,
    };
  }

  if (!id) {
    return { error: "ID proyek tidak ditemukan.", proyek };
  }

  const error = cekProyek(proyek);

  if (error !== "") {
    return { error, proyek };
  }

  const hasil = await supabaseAdmin
    .from("projects")
    .update(proyek)
    .eq("id", id);

  if (hasil.error) {
    return {
      error: `Proyek gagal diubah: ${hasil.error.message}`,
      proyek,
    };
  }

  perbaruiHalaman(proyek.slug);
  redirect("/kelola");
}

export async function hapusProyek(formData) {
  if (!(await sudahMasuk())) {
    throw new Error("Kamu harus login sebagai admin.");
  }

  const id = String(formData.get("id") || "");

  if (!id) {
    throw new Error("ID proyek tidak ditemukan.");
  }

  const { error } = await supabaseAdmin
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Gagal menghapus proyek:", error);
    throw new Error("Proyek gagal dihapus.");
  }

  revalidatePath("/");
  revalidatePath("/proyek");
  revalidatePath("/kelola");
}

