import React from "react";

export default function hero() {
  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:pt-10">
        {/* Component */}
        <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-2 lg:mb-6">
          {/* Hero Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            AI-Powered Creativity for Photoshop
          </h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
            ArtifyAI is a Photoshop extension that helps you create stunning
            visuals with the power of AI. Design faster and smarter with just a
            few clicks.
          </p>
          {/* Hero Button */}
          <div className="flex items-stretch justify-center">
            <a
              href="#"
              className="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8"
            >
              Get Started
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg"
                alt=""
                className="mr-2 inline-block max-h-4 w-5"
              />
              <p className="text-sm text-black sm:text-base">Watch Demo</p>
            </a>
          </div>
        </div>
        {/* Hero Image */}
        <img
          src="./hero.png"
          alt=""
          className="inline-block max-h-[512px] w-full object-cover"
        />
      </div>
    </header>
  );
}
