import React from 'react'

export default function WeatherDays({ hurlyRef,weather,dark,selectedDay,setSelectedDay}) {


const fiveDays = weather.list.filter((item) =>
  item.dt_txt.includes("12:00:00")
);




  return (
<div>
   
<div className="flex justify-center my-10">
  <h2
    className={`
      inline-flex
      items-center
      gap-3

      px-10
      py-4

      rounded-full

      text-2xl
      md:text-3xl

      font-extrabold
      tracking-wide

      backdrop-blur-xl

      shadow-xl

      transition-all
      duration-500

      hover:scale-105
      hover:-translate-y-1

      cursor-default

      ${
        dark
          ? `
          bg-gradient-to-r
          from-slate-800
          via-gray-900
          to-slate-800

          border
          border-cyan-500/30

          text-white

          shadow-cyan-500/20

          hover:shadow-cyan-400/40
          hover:border-cyan-400
          `
          : `
          bg-gradient-to-r
          from-white
          via-blue-50
          to-cyan-50

          border
          border-blue-200

          text-gray-800

          shadow-blue-300/30

          hover:shadow-blue-400/40
          hover:border-blue-400
          `
      }
    `}
  >
    <span className="text-3xl animate-pulse">📅</span>

    <span>5 Days Weather</span>

    <span className="text-3xl">🌤️</span>
  </h2>
</div>
  <div className=" cursor-pointer
hover:scale-105
hover:-translate-y-2
transition-all
duration-300
   mt-8 grid grid-cols-2 md:grid-cols-5 gap-4" >
   
  {fiveDays.map((item) => (
    <div 
      key={item.dt}
onClick={()=>{setSelectedDay(item);setTimeout(()=>{
    hurlyRef.current?.scrollIntoView({
        behavior:"smooth"
    })
},100)
}}

      className={`
        rounded-3xl
        p-5
        text-center

        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300

        ${
          dark
            ? `
              bg-gradient-to-br
              from-gray-800
              via-gray-900
              to-black
              border
              border-gray-700
              text-white
            `
            : `
              bg-white
              border
              border-blue-100
              text-gray-900
            `
        }
      `}
    >
      {/* Date */}
      <p
        className={`
          text-sm
          font-semibold
          ${
            dark
              ? "text-gray-400"
              : "text-gray-500"
          }
        `}
      >
        {item.dt_txt.split(" ")[0]}
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

      {/* Weather */}
      <h2 className="text-2xl mt-4">
        {item.weather[0].main}
      </h2>

      {/* Description */}
      <p
        className={`
          mt-2
          text-sm
          capitalize
          ${
            dark
              ? "text-gray-300"
              : "text-gray-500"
          }
        `}
      >
        {item.weather[0].description}
      </p>

      {/* Temperature */}
      <h1
        className={`
          mt-5
          text-5xl
          font-black
          ${
            dark
              ? "text-cyan-400"
              : "text-blue-600"
          }
        `}
      >
        {Math.round(item.main.temp)}°
      </h1>
    </div>
      
  ))}
</div>
</div>
  )
}
