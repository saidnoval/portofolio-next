"use client";

import { useState } from "react";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");

  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  const kelasInput =
    "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-900 outline-none focus:border-aksen dark:border-gray-600 dark:bg-gray-700 dark:text-white";

  function kirim(e) {
    e.preventDefault();

    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }

    if (!email.includes("@") || !email.includes(".")) {
      errorBaru.email = "Masukkan alamat email yang valid.";
    }

    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }

    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }

    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      <div>
        <label htmlFor="nama" className="block font-semibold dark:text-white">
          Nama lengkap
        </label>

        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Budi Santoso"
          className={kelasInput}
        />

        {error.nama && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error.nama}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold dark:text-white">
          Email
        </label>

        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@gmail.com"
          className={kelasInput}
        />

        {error.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="hp" className="block font-semibold dark:text-white">
          Nomor HP
        </label>

        <input
          type="tel"
          id="hp"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          placeholder="Contoh: 081234567890"
          className={kelasInput}
        />

        {error.hp && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error.hp}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="keperluan"
          className="block font-semibold dark:text-white"
        >
          Keperluan
        </label>

        <select
          id="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={kelasInput}
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama proyek</option>
          <option value="lainnya">Lainnya</option>
        </select>

        {error.keperluan && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error.keperluan}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="pesan" className="block font-semibold dark:text-white">
          Pesan
        </label>

        <textarea
          id="pesan"
          rows={5}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tuliskan pesan kamu"
          className={kelasInput}
        />

        {error.pesan && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error.pesan}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-utama px-5 py-2 font-semibold text-white transition hover:opacity-80"
      >
        Kirim Pesan
      </button>

      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
          Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
        </p>
      )}

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Catatan: Form ini belum dapat mengirim pesan.
        Fitur pengiriman pesan akan dibuat pada Minggu 15.
      </p>
    </form>
  );
}