import React, { useEffect, useRef, useState } from 'react'
import LoadingButton from './components/LoadingButton';
import LoadingUI from './components/LoadingUI';
import WeatherCard from './weatherFutures/WeatherCard';
import ErrorUI from './components/ErrorUI';
import CitySearch from './components/CitySearch';
import DarkBtn from './components/DarkBtn';
export default function App() {
const hurlyRef=useRef(null);
  const [loading,setLoading]=useState(false);
  const [errorMessage,setErrorMessage]=useState("");
  const [city,setCity]=useState("")
  const [selectedDay,setSelectedDay]=useState(null);

const [dark,setDark]=useState(()=>{
    try {
      return JSON.parse(localStorage.getItem("dark"))||false
    } catch  {
      return false;
    }
  });

  useEffect(()=>{
     if(!dark) return;
try {
  localStorage.setItem("dark",JSON.stringify(dark))
} catch  {
  console.log("Error to saving Dark/Light")
}

  },[dark])
  

  const [weather,setWeather]=useState(()=>{
    try {
      return JSON.parse(localStorage.getItem("weather"))||null
    } catch  {
      return null;
    }
  });

  useEffect(()=>{
     if(!weather) return;
try {
  localStorage.setItem("weather",JSON.stringify(weather))
} catch  {
  console.log("error to saving Current Weather")
}

  },[weather])
  

  const api_key="ed358a4d42e7660408b33cbf97f42774"
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`;

  const EnterKey=(e)=>{
    if(e.key==="Enter"){
      getWeather();
    }
  }

const getWeather=async()=>{
if(!city.trim()){
  alert("Please Enter City Name");
  return;
}

try {

setLoading(true)
setErrorMessage("");
const res=await fetch(url);

if(!res.ok){
  throw new Error("🌍 City not found. Please enter a valid city name.");
}

const data=await res.json();

setWeather(data)

  
} catch (error) {
  setErrorMessage(error.message)
}
finally{
  setLoading(false)
}
}

let sunRise="";
let sunSet=""

if(weather){
  sunRise=new Date(weather.city.sunrise*1000).toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit"
  });
   sunSet=new Date(weather.city.sunset*1000).toLocaleTimeString([],{
     hour:"2-digit",
    minute:"2-digit"
   })
  
  

}

  return (

<div
className={`
  min-h-screen

  flex
  flex-col
  items-center

  p-6

  transition-all
  duration-700

  ${
   dark
    ? 
    "bg-gradient-to-br from-gray-700 via-slate-600 to-gray-500 text-white"
    :
    "bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-300 text-gray-900"
  }
`}
>

<div
className={`
w-full
max-w-6xl
mx-auto

flex
items-center
gap-4

mb-8

p-4

rounded-3xl

backdrop-blur-xl

transition-all
duration-500

${
dark
?
"bg-white/10 shadow-2xl shadow-black/40 border border-gray-700"
:
"bg-white/50 shadow-xl shadow-blue-200/50 border border-white"
}
`}
>
  <div className="flex-1">
    <CitySearch
      city={city}
      setCity={setCity}
      EnterKey={EnterKey}
    
    />
  </div>


  <DarkBtn
    dark={dark}
    setDark={setDark}
  />

</div>
  <LoadingButton loading={loading} getWeather={getWeather} dark={dark}/>

<ErrorUI errorMessage={errorMessage}/>

 <LoadingUI loading={loading}/>

<WeatherCard loading={loading} weather={weather} 
 dark={dark} sunSet={sunSet} sunRise={sunRise}
 selectedDay={selectedDay} setSelectedDay={setSelectedDay}
 hurlyRef={hurlyRef} />

 

</div>
  )}
