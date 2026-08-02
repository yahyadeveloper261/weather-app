import React, { forwardRef, useRef } from 'react'

export default function HourlyWeather({compare,selectedDate,dark,hurlyRef}) {
    
  return (
     (selectedDate && <div  className="mt-12">
  <h2 
    className={`
      text-2xl
      md:text-3xl
      font-bold
      text-center
      mb-8

      $ dark ? "text-white" : "text-gray-800"}
    `}
  >
    

     <div className="flex justify-center mb-8">
  <h2
    className={`
      inline-block
      px-8
      py-3
      rounded-full
      text-2xl
      md:text-3xl
      font-bold

      ${
        dark
          ? "bg-gray-700 text-white"
          : "bg-white text-gray-800"
      }
    `}
  >
    🕒 Hourly Forecast
  </h2>
</div>
  </h2>

<div className="flex justify-center mb-8">
  <h2
    className={`
      inline-block
      px-5
      py-2
      rounded-full
      text-2xl
      md:text-3xl
      font-bold

      ${
        dark
          ? "bg-gray-700 text-white"
          : "bg-white text-gray-600"
      }
    `}
  >
   {selectedDate}
  </h2>
</div>


  <div ref={hurlyRef}
    className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-8
      gap-5
    "
  >
    {compare.map((item) => (
      <div
        key={item.dt}
        className={`
          group

          rounded-3xl

          p-5

          backdrop-blur-xl

          border

          transition-all
          duration-500

       

          hover:-translate-y-3
          hover:scale-105

          ${
            dark
              ? `
                bg-gradient-to-br
                from-gray-900
                via-gray-800
                to-slate-900

                border-gray-700

                hover:border-cyan-400

                hover:shadow-2xl
                hover:shadow-cyan-500/30
              `
              : `
                bg-white/80

                border-blue-100

                hover:border-blue-400

                hover:shadow-xl
                hover:shadow-blue-300/40
              `
          }
        `}
      >
        {/* Time */}
        <p
          className={`
            text-center

            text-sm

            font-semibold

            ${
              dark
                ? "text-gray-300"
                : "text-gray-500"
            }
          `}
        >
          {new Date(item.dt_txt).toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </p>

        {/* Icon */}
        <div
          className="
            text-5xl

            text-center

            my-5

            transition-all
            duration-500

            group-hover:scale-125
            group-hover:-translate-y-1
          "
        >
          {item.weather[0].main === "Clear"
            ? "☀️"
            : item.weather[0].main === "Clouds"
            ? "☁️"
            : item.weather[0].main === "Rain"
            ? "🌧️"
            : item.weather[0].main === "Thunderstorm"
            ? "⛈️"
            : item.weather[0].main === "Snow"
            ? "❄️"
            : "🌤️"}
        </div>

        {/* Temp */}
        <h2
          className={`
            text-center

            text-4xl

            font-black

            transition-all
            duration-300

            group-hover:scale-110

            ${
              item.main.temp >= 45
                ? "text-red-500"

                : item.main.temp >= 40
                ? "text-orange-500"

                : item.main.temp >= 30
                ? "text-yellow-500"

                : item.main.temp >= 20
                ? "text-green-500"

                : item.main.temp >= 10
                ? "text-cyan-500"

                : "text-blue-500"
            }
          `}
        >
          {Math.round(item.main.temp)}°
        </h2>

        {/* Feels */}
        <p
  className={`
    mt-3
    text-center
    text-sm
    font-semibold
    transition-all
    duration-500

    ${
      item.main.feels_like >= 45
        ? `
          text-red-500
          animate-pulse
        `
        : item.main.feels_like >= 40
        ? `
          text-orange-500
        `
        : item.main.feels_like >= 30
        ? `
          text-yellow-500
        `
        : item.main.feels_like >= 20
        ? `
          text-green-500
        `
        : `
          ${dark ? "text-cyan-300" : "text-blue-500"}
        `
    }
  `}
>
  🌡️ Feels {Math.round(item.main.feels_like)}°
</p>

        {/* Weather */}
        <p
          className={`
            mt-3

            text-center

            font-bold

            ${
              dark
                ? "text-cyan-300"
                : "text-blue-700"
            }
          `}
        >
          {item.weather[0].main}
        </p>

        {/* Rain */}
        <div
          className={`
            mt-5

            rounded-full

            py-2

            text-center

            text-sm

            font-semibold

            ${
              dark
                ? "bg-gray-800 text-cyan-300"
                : "bg-blue-50 text-blue-700"
            }
          `}
        >
          🌧 {(item.pop * 100).toFixed(0)}%
        </div>
      </div>
    ))}
  </div>
</div> )
  )
}