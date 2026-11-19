
"use client"

import { useState } from "react"

export default function ThemeToggle() {
    const [gelap, setGelap] = useState(false);

    function gantiTema() {
        const temaAktif = document.documentElement.classList.toggle("dark");
        setGelap(temaAktif);
    }

    return (
        <button
            type="button"
            onClick={gantiTema}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
        >
            {gelap ? "mode terang" : "mode gelap"}
        </button>
    )
}
