import React from "react";

export default function CitySearch({ city, setCity, EnterKey}) {
  return (
    <div className="w-full max-w-3xl relative group">

      <input
        type="text"
        placeholder="Search weather city..."

        value={city}

        onChange={(e) => {setCity(e.target.value)
         
        }}

        onKeyDown={EnterKey}

        className="
          w-full

          px-6
          py-4
          pl-14

          rounded-3xl

          bg-white/80
          dark:bg-gray-900/80

          backdrop-blur-xl

          border
          border-blue-200
          dark:border-gray-700

          text-gray-800
          dark:text-white

          placeholder-gray-400
          dark:placeholder-gray-500

          shadow-xl
          shadow-blue-200/40
          dark:shadow-black/40

          outline-none

          focus:ring-4
          focus:ring-blue-400/30
          dark:focus:ring-cyan-400/30

          focus:border-blue-500
          dark:focus:border-cyan-400

          hover:-translate-y-1
          hover:shadow-2xl

          transition-all
          duration-500
        "
      />

  

      {/* Search Icon */}
      <div
        className="
          absolute

          left-5
          top-1/2

          -translate-y-1/2

          text-2xl

          text-blue-600
          dark:text-cyan-400

          group-hover:scale-125

          group-focus-within:rotate-12
          group-focus-within:scale-125

          transition-all
          duration-500

          cursor-pointer
        "
      >
        🔍
      </div>


      {/* Glow Effect */}
      <div
        className="
          absolute

          inset-0

          -z-10

          rounded-3xl

          bg-blue-400/20
          dark:bg-cyan-400/10

          blur-xl

          opacity-0

          group-hover:opacity-100

          transition
          duration-500
        "
      />

    </div>
  );
}