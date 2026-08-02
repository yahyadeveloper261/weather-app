import React from 'react'

export default function WeatherRain({weather,dark}) {
  return (
   <div
  className={`
    rounded-3xl

    p-6

    mt-10

    shadow-inner

    hover:shadow-xl

    transition-all
    duration-500

    hover:-translate-y-1

    ${
      dark
      ?
      `
      bg-gradient-to-br
      from-blue-900
      via-gray-600
      to-cyan-900

      border
      border-blue-800
      `
      :
      `
      bg-gradient-to-br
      from-blue-50
      via-white
      to-cyan-50

      border
      border-blue-100
      `
    }
  `}
>


  {/* Rain Chance */}
  <p
    className={`
      text-lg
      font-semibold

      ${
        dark
        ?
        "text-gray-300"
        :
        "text-gray-600"
      }
    `}
  >
    🌧 Rain Chance
  </p>


  <p
    className={`
      text-4xl
      font-black

      mt-2

      ${
        (weather.list[0].pop * 100) >= 50
        ?
        dark
          ? "text-cyan-300"
          : "text-blue-600"

        :
        dark
          ? "text-gray-200"
          : "text-blue-500"
      }
    `}
  >
    {(weather.list[0].pop * 100).toFixed(0)}%
  </p>



  {/* Rain Amount */}
  <p
    className={`
      mt-5

      text-lg
      font-semibold

      ${
        dark
        ?
        "text-gray-300"
        :
        "text-gray-600"
      }
    `}
  >
    💧 Rain Amount
  </p>


  <p
    className={`
      text-3xl
      font-black

      mt-1

      ${
        dark
        ?
        "text-cyan-300"
        :
        "text-cyan-600"
      }
    `}
  >
    {weather.list[0].rain?.["3h"] ?? 0} mm
  </p>


</div>
  )
}
