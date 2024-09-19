import React from "react";

export default function rightDetail() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-start gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="mb-4 max-w-3xl text-3xl font-bold md:text-5xl">
              Understand sales performance better
            </h2>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <a
              href="#"
              className="inline-block bg-black px-6 py-3 font-semibold text-white"
            >
              Get started
            </a>
          </div>
          <div className="lg:w-1/2">
            <img src="./redraw.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
