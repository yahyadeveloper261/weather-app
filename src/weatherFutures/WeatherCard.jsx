import React from 'react'
import WeatherHeader from './WeatherHeader'
import WeatherTemp from './WeatherTemp'
import WeatherRain from './WeatherRain'
import Highlights from './Highlights'
import WeatherDays from './WeatherDays'
import HourlyWeather from './HourlyWeather'
export default function WeatherCard({ hurlyRef,weather,loading,dark,sunRise,sunSet,selectedDay,setSelectedDay}) {

  const selectedDate = selectedDay?.dt_txt?.split(" ")[0];
  let compare=[]
if(weather){

  compare=weather.list.filter(item=>
    item.dt_txt.split(" ")[0]===selectedDate);
}

  return (
   <div
className={`
  mt-8
  w-full

  rounded-3xl
  p-8

  transition-all
  duration-500

  ${
    weather
    ?
      dark
      ?
      `
      bg-gray-900/90
      border
      border-gray-700
      shadow-black/50
      `
      :
      `
      bg-white/90
      border
      border-white
      shadow-blue-200/50
      `
    :
    `
    hidden
    `
  }
`}
>

 
      {weather && !loading && (
       <div
  className="
    mt-6

    w-full
    max-w-5xl

    mx-auto

    max-h-[85vh]
    overflow-y-auto

    bg-white/90
    dark:bg-gray-900/80

    backdrop-blur-xl

    border
    border-white
    dark:border-gray-700

    rounded-3xl

    p-2 
    md:p-8

    shadow-xl

    hover:shadow-2xl
    hover:-translate-y-1

    transition-all
    duration-500

    text-center
  "
>

         <WeatherHeader dark={dark} weather={weather}/>

<WeatherTemp weather={weather} dark={dark}/>
   
<WeatherRain weather={weather} dark={dark}/>

<Highlights weather={weather} dark={dark} sunRise={sunRise} sunSet={sunSet}/>

<WeatherDays weather={weather} dark={dark} selectedDay={selectedDay} setSelectedDay={setSelectedDay}  hurlyRef={hurlyRef}/>
<HourlyWeather compare={compare} selectedDate={selectedDate} dark={dark} hurlyRef={hurlyRef} />
</div>


      
      )}

    </div>
  )
}