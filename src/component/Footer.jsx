
export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Moch Said Abu Noval.
          Hak cipta dilindungi.
        </p>

        <p className="text-sm text-gray-600">
          Dibuat dengan{" "}
          <span className="font-semibold text-utama">
            Next.js
          </span>{" "}
          di Kelas Industri UBIG
        </p>
      </div>
    </footer>
  );
}
