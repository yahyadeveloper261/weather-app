import React from "react";

export default function LoadingUI({ loading }) {
  return (
    <div>
      {loading && (
        <div
          className="
            mt-8

            w-full
            max-w-md

            bg-white/80
            dark:bg-gray-900/80

            backdrop-blur-xl

            rounded-[2rem]

            p-10

            flex
            flex-col
            items-center

            border
            border-white
            dark:border-gray-700

            shadow-2xl
            shadow-blue-200/40
            dark:shadow-black/50

            transition-all
            duration-500

            hover:-translate-y-2

            animate-pulse
          "
        >

          {/* Loader */}
          <div
            className="
              relative

              w-28
              h-28

              flex
              items-center
              justify-center

              rounded-full

              bg-blue-50
              dark:bg-gray-800

              shadow-inner
            "
          >

            <div
              className="
                w-24
                h-24

                rounded-full

                border-8

                border-blue-200
                dark:border-gray-700

                border-t-blue-600
                dark:border-t-cyan-400

                animate-spin
              "
            />

            <span
              className="
                absolute

                text-3xl

                animate-bounce
              "
            >
              🌤️
            </span>

          </div>


          {/* Text */}
          <p
            className="
              mt-7

              text-2xl

              font-black

              text-gray-800
              dark:text-white
            "
          >
            Getting Weather Data...
          </p>


          <p
            className="
              mt-2

              text-gray-500
              dark:text-gray-400

              font-medium
            "
          >
            Please wait while we check the sky ☁️
          </p>


          {/* Loading dots */}
          <div
            className="
              flex
              gap-2
              mt-6
            "
          >
            <span className="
              w-3 h-3
              bg-blue-600
              dark:bg-cyan-400
              rounded-full
              animate-bounce
            "/>

            <span className="
              w-3 h-3
              bg-blue-600
              dark:bg-cyan-400
              rounded-full
              animate-bounce
              [animation-delay:150ms]
            "/>

            <span className="
              w-3 h-3
              bg-blue-600
              dark:bg-cyan-400
              rounded-full
              animate-bounce
              [animation-delay:300ms]
            "/>

          </div>

        </div>
      )}
    </div>
  );
}