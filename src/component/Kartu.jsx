
export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#181818] p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-bold text-utama dark:text-sky-200">
        {judul}
      </h2>

      <div className="text-gray-800 dark:text-gray-100">
        {children}
      </div>
    </section>
  );
}
