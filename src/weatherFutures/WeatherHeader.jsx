import React from 'react'

export default function WeatherHeader({dark,weather}) {
  return (
    <div>
  <h1
  className="
    mb-6
    flex
    items-center
    justify-center
    gap-3
    text-4xl
    font-extrabold
    tracking-wide
  "
>
  <span
    className="
      text-xl
      font-semibold
      text-gray-500
      uppercase
    "
  >
    📍 City
  </span>

 <span
className={`
text-3xl
font-black

bg-gradient-to-r
bg-clip-text
text-transparent

transition-all
duration-300

${
dark
?
`
from-cyan-400
via-blue-400
to-purple-400
`
:
`
from-blue-600
via-cyan-500
to-blue-400
`
}
`}
>
{weather.city.name}
</span>
</h1>



         <div
  className="
    mt-4
    flex
    flex-col
    sm:flex-row
    items-center
    justify-center
    gap-3
    text-gray-600
  "
>
 <div
className={`
flex
items-center
gap-2
px-5
py-2
rounded-full
shadow-md

transition

${
dark
?
`
bg-gray-800
text-white
`
:
`
bg-gray-100
text-gray-700
`
}
`}
>
    <span className="text-2xl">
      🌍
    </span>

    <span
      className={` text-sm
        font-semibold
        uppercase
         ${dark?" text-gray-100":" text-gray-700"}
       
      `}
    >
      Country
    </span>

    <span
      className={`
        text-lg
        font-bold
      ${dark?"  text-yellow-400":"  text-blue-600"}
      `}
    >
      {weather.city?.country}
    </span>

  </div>
</div>
</div>

  )
}
