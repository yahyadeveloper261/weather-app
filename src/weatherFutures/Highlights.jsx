import React from 'react'

export default function Highlights({weather,dark,sunRise,sunSet}) {
  return (
   <div
  className={`
    mt-10
    flex
    flex-wrap
    justify-center
    gap-6
    md:gap-10

    rounded-3xl

    p-6
    md:p-8

    shadow-inner

    hover:shadow-xl

    transition-all
    duration-500

    ${
      dark
      ?
      `
      bg-gradient-to-r
      from-gray-600
      to-gray-500
      `
      :
      `
      bg-gradient-to-r
      from-blue-50
      to-blue-100
      `
    }
  `}
>

  {/* Humidity */}
  <div
    className={`
      px-5
      py-3

      rounded-2xl

      shadow-md

      hover:-translate-y-2
      hover:shadow-lg

      transition-all
      duration-300

      cursor-pointer

      ${
        dark
        ?
        "bg-gray-800"
        :
        "bg-white"
      }
    `}
  >

    <p
      className={`
        text-lg

        ${
          dark
          ?
          "text-gray-300"
          :
          "text-gray-600"
        }
      `}
    >
      💧 Humidity
    </p>

    <span
      className={`
        text-2xl
        font-extrabold

        ${
          dark
          ?
          "text-cyan-400"
          :
          "text-blue-600"
        }
      `}
    >
      {weather.list[0].main.humidity}%
    </span>

  </div>



  {/* Wind */}
  <div
    className={`
      px-5
      py-3

      rounded-2xl

      shadow-md

      hover:-translate-y-2
      hover:shadow-lg

      transition-all
      duration-300

      cursor-pointer

      ${
        dark
        ?
        "bg-gray-800"
        :
        "bg-white"
      }
    `}
  >

    <p
      className={`
        text-lg text-center

        ${
          dark
          ?
          "text-gray-300"
          :
          "text-gray-500"
        }
      `}
    >
      🌬 Wind
    </p>

    <span
      className={`
        text-2xl
        font-extrabold 

        ${
          weather.list[0].wind.speed*3.6 >= 40
          ?
          dark
          ? "text-red-400"
          : "text-red-600"

          :
          weather.list[0].wind.speed*3.6 >= 20
          ?
          dark
          ? "text-orange-400"
          : "text-orange-500"

          :
          dark
          ? "text-green-400"
          : "text-green-600"
        }
      `}
    >
      {(weather.list[0].wind.speed*3.6).toFixed(1)} km/h
    </span>

  </div>



  {/* Status */}
  <div
    className={`
      px-5
      py-3

      rounded-2xl

      shadow-md

      hover:-translate-y-2
      hover:shadow-lg

      transition-all
      duration-300

      cursor-pointer

      text-center

      ${
        dark
        ?
        "bg-gray-800"
        :
        "bg-white"
      }
    `}
  >

    <p
      className={`
        text-lg

        ${
          dark
          ?
          "text-gray-300"
          :
          "text-gray-500"
        }
      `}
    >
     🌤 Status
    </p>

    <div className="text-2xl my-3 px-8">
      {
        weather.list[0].weather[0].main === "Clear"
          ? "☀️"
          : weather.list[0].weather[0].main === "Clouds"
          ? "☁️"
          : weather.list[0].weather[0].main === "Rain"
          ? "🌧️"
          : weather.list[0].weather[0].main === "Thunderstorm"
          ? "⛈️"
          : weather.list[0].weather[0].main === "Snow"
          ? "❄️"
          : "🌤️"
      }
    </div>

    <span
      className={`
        text-2xl
        font-extrabold

        ${
          dark
          ?
          "text-purple-400"
          :
          "text-purple-600"
        }
      `}
    >
      {weather.list[0].weather[0].main}
    </span>

  </div>

<div
  className={`
    w-full
    max-w-sm
    mx-auto

    flex
    justify-between
    items-center

    px-5
    py-3

    rounded-2xl
    shadow-md

    ${
      dark
        ? "bg-gray-800 text-white"
        : "bg-white text-gray-800"
    }
  `}
>
  <div className="flex items-center gap-2">
    <span className="text-xl">🌅</span>
    <div>
      <p className="text-xs opacity-70">Sunrise</p>
      <p className="font-semibold">{sunRise}</p>
    </div>
  </div>

  <div className="w-px h-10 bg-gray-400/40"></div>

  <div className="flex items-center gap-2">
    <span className="text-xl">🌇</span>
    <div>
      <p className="text-xs opacity-70">Sunset</p>
      <p className="font-semibold">{sunSet}</p>
    </div>
  </div>
</div>


</div>
  )
}
