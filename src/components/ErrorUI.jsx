import React from "react";

export default function ErrorUI({ errorMessage }) {
  return (
    <div>
      {errorMessage && (
        <div
          className="
            mt-6

            flex
            items-center
            gap-4

            w-full
            max-w-lg

            px-6
            py-5

            rounded-3xl

            bg-white
            dark:bg-gray-900/80

            border
            border-red-200
            dark:border-red-900

            shadow-xl
            shadow-red-200/40
            dark:shadow-black/50

            backdrop-blur-xl

            hover:-translate-y-2
            hover:scale-[1.02]

            transition-all
            duration-500

            cursor-pointer
          "
        >

          {/* Icon */}
          <div
            className="
              flex
              items-center
              justify-center

              w-14
              h-14

              rounded-2xl

              bg-red-100
              dark:bg-red-950/60

              text-3xl

              hover:rotate-12
              hover:scale-110

              transition-all
              duration-500
            "
          >
            ⚠️
          </div>


          {/* Text */}
          <div className="flex-1">

            <h2
              className="
                text-xl
                font-black

                text-red-600
                dark:text-red-400
              "
            >
              Error
            </h2>


            <p
              className="
                mt-1

                text-sm
                font-semibold

                text-gray-600
                dark:text-gray-300
              "
            >
              {errorMessage}
            </p>

          </div>


          {/* Side Glow */}
          <div
            className="
              w-2
              h-12

              rounded-full

              bg-red-500

              animate-pulse
            "
          />

        </div>
      )}
    </div>
  );
}