import React, { useEffect, useRef, useState } from "react";

function Eye() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerWidth / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden bg-[#ffff]">
      <div data-scroll data-scroll-speed="-.7" className='relative w-[70vw] h-[40vw] mt-20 ml-64 bg-center bg-[url("./assets/tropical-flower-7599292_1280.jpg")]'>
        <div className="absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  gap-20">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2  w-full h-10 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2  w-full h-10 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
