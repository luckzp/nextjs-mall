import React from "react";

export default function detail() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-start gap-8 sm:gap-20 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="mb-4 max-w-3xl text-3xl font-bold md:text-5xl">
              画面控制
            </h2>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12">
              文生图也可以结合controlnet控制层一起使用，通过文字+图片更好的引导AI生成图片。
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
