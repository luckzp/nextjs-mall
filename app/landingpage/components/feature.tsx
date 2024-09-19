import React from "react";

export default function feature() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-5">
        {/* Title */}
        <h2 className="items-center text-center text-3xl font-bold md:text-5xl">
          Key Features
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-xl text-center text-sm text-gray-500 sm:text-base md:mb-12">
          Discover the powerful features of the ArtifyAI PhotoShop Extension.
        </p>
        {/* List */}
        <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Support</p>
            <p className="text-center text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Organise</p>
            <p className="text-center text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Flexibility</p>
            <p className="text-center text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Speed</p>
            <p className="text-center text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
