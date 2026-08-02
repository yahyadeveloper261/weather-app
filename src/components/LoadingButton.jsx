import React from "react";

export default function LoadingButton({ loading, getWeather, dark }) {
  return (
    <button
      onClick={getWeather}
      disabled={loading}
      className={`
        group

        px-8
        py-4

        rounded-2xl

        flex
        items-center
        justify-center
        gap-3

        font-black
        text-lg

        transition-all
        duration-700

        cursor-pointer


        ${
          dark
          ?
          `
          bg-gradient-to-r
          from-cyan-500
          via-blue-600
          to-purple-700

          text-white

          shadow-xl
          shadow-black/50

          border
          border-cyan-400/30
          `
          :
          `
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-sky-400

          text-white

          shadow-xl
          shadow-blue-300/60

          border
          border-blue-300/40
          `
        }


        hover:-translate-y-2
        hover:scale-105

        hover:shadow-2xl

        active:scale-95


        disabled:opacity-60
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        disabled:hover:translate-y-0
      `}
    >

      {loading ? (
        <>

          <span
            className="
              w-6
              h-6

              rounded-full

              border-4

              border-white/40

              border-t-white

              animate-spin
            "
          />

          <span>
            Loading Weather...
          </span>

        </>
      ) : (
        <>

          <span
            className="
              text-3xl

              group-hover:rotate-180
              group-hover:scale-125

              transition-all
              duration-500
            "
          >
            🌤️
          </span>


          <span
            className="
              tracking-wide
            "
          >
            Get Weather
          </span>

        </>
      )}

    </button>
  );
}