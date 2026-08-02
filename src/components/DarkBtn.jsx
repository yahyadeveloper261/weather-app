import React from "react";

export default function DarkBtn({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className={`
        group

        flex
        items-center
        gap-3

        px-6
        py-3

        rounded-full

        font-black

        transition-all
        duration-700

        cursor-pointer

        hover:-translate-y-1
        hover:scale-110

        shadow-xl


        ${
          !dark
          ?
          `
          bg-gradient-to-r
          from-gray-700
          via-slate-550
          to-gray-600

          text-yellow-300

          border
          border-gray-600

          shadow-black/60
          `
          :
          `
          bg-gradient-to-r
          from-yellow-100
          via-white
          to-blue-100

          text-gray-800

          border
          border-blue-200

          shadow-blue-200/60
          `
        }
      `}
    >

      <span
        className="
          text-3xl

          group-hover:rotate-[360deg]
          group-hover:scale-125

          transition-all
          duration-700
        "
      >
        {dark ? "☀️" : "🌙"}
      </span>


      <span
        className="
          uppercase
          tracking-widest
          text-sm
        "
      >
        {dark ? "Light" : "Dark"}
      </span>


    </button>
  );
}