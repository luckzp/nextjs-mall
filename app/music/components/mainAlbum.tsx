import React, { useState } from "react";

export default function mainAlbum() {
  const [selectIndex, setSelectIndex] = useState<null | number>(null);
  return (
    <div className="flex justify-between gap-3 py-8 px-6">
      {[...Array(5)].map((_, index) => (
        <div className="h-[150px]">
          <a
            className="block w-[118px] h-[100px] shadow-[0px_3px_3px_gray] relative hover:cursor-pointer"
            onMouseEnter={() => setSelectIndex(index)}
            onMouseLeave={() => setSelectIndex(null)}
          >
            <img src="/man.jpg"></img>
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-[url('/coverall.png')] bg-[0_-570px]"></div>
            {selectIndex === index && (
              <div className="absolute bottom-[5px] right-[20px] bg-[url('/iconall.png')] bg-[0_-85px] w-[22px] h-[22px]"></div>
            )}
          </a>
          <div className="mt-1">Sincere</div>
          <div className="text-[#666]">Khalid</div>
        </div>
      ))}
    </div>
  );
}
