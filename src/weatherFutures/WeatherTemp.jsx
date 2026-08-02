import React from 'react'

export default function WeatherTemp({weather,dark}) {
  return (
     <div className="mt-8 text-center">

  <div
    className={`
      text-8xl
      font-black
      transition-all
      duration-500

      hover:scale-110

      cursor-pointer

      ${
        weather.list[0].main.temp >= 40
          ? dark
            ? "text-red-400 hover:text-red-300"
            : "text-red-600 hover:text-red-800"

          : weather.list[0].main.temp >= 30
          ? dark
            ? "text-orange-400 hover:text-orange-300"
            : "text-orange-500 hover:text-orange-700"

          : dark
            ? "text-cyan-400 hover:text-cyan-300"
            : "text-blue-600 hover:text-blue-800"
      }
    `}
  >
    {Math.round(weather.list[0].main.temp)}°C
    <p className={`w-full max-w-sm mx-auto pb-1 mt-3  text-2xl rounded-full ${dark?"bg-gray-900 text-white":"bg-gray-100 text-gray-950 "}` }>{weather.list[0].weather[0].description}</p>
  </div>
  <div
    className={`
      mt-5

      inline-flex
      items-center
      gap-2

      px-6
      py-3

      rounded-full

      shadow-md

      text-lg
      font-semibold

      transition-all
      duration-300

      cursor-pointer

      hover:scale-105

      ${
        dark
        ?
        `
        bg-gray-800
        text-gray-200
        hover:bg-gray-700
        `
        :
        `
        bg-gray-100
        text-gray-600
        hover:bg-blue-100
        hover:text-blue-600
        `
      }
    `}
  >

    🌡️ Feels like:


    <span
      className={`
        font-extrabold

        ${
          weather.list[0].main.feels_like >= 40
            ? dark
              ? "text-red-400"
              : "text-red-600"

            : weather.list[0].main.feels_like >= 30
            ? dark
              ? "text-orange-400"
              : "text-orange-500"

            : dark
              ? "text-cyan-400"
              : "text-blue-600"
        }
      `}
    >
      {Math.round(weather.list[0]?.main?.feels_like)}°C
    </span>


  </div>

</div>
  )
}
