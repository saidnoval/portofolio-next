
"use client";

import { Button } from "@/component/ui/button";

export default function FormKontak() {
  return (
    <form
      action="https://formsubmit.co/kaisaralmoreno6@gmail.com"
      method="POST"
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-slate-800"
    >
      <input
        type="hidden"
        name="_subject"
        value="Pesan Baru dari Website Portfolio"
      />

      <input type="hidden" name="_captcha" value="false" />

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-white">
            Nama lengkap
          </label>
          <input
            type="text"
            name="nama"
            required
            placeholder="Contoh: Budi Santoso"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-3 text-gray-900 outline-none transition focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="nama@gmail.com"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-3 text-gray-900 outline-none transition focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-white">
            Nomor HP
          </label>
          <input
            type="tel"
            name="nomor_hp"
            placeholder="Contoh: 081234567890"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-3 text-gray-900 outline-none transition focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-white">
            Keperluan
          </label>
          <select
            name="keperluan"
            required
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-3 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="" disabled>
              -- Pilih keperluan --
            </option>
            <option value="Kerja Sama">Kerja Sama</option>
            <option value="Pertanyaan">Pertanyaan</option>
            <option value="Proyek">Proyek</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-white">
            Pesan
          </label>
          <textarea
            name="pesan"
            required
            rows={5}
            placeholder="Tuliskan pesan kamu..."
            className="w-full resize-none rounded-lg border border-gray-300 bg-gray-100 px-3 py-3 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 py-3 text-white hover:bg-blue-700"
        >
          Kirim Pesan
        </Button>
      </div>
    </form>
  );
}
