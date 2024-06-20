import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setrotate(angle - 180);
        })
    })

    return (
        <div className='eyes overflow-hidden min-h-[300px] lg:h-screen w-full'>
            <div data-scroll data-scroll-section data-scroll-speed="-.3" className="bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] bg-cover bg-center relative w-full min-h-[300px] lg:h-full">
                <div className="absolute top-1/2 left-1/2 -translate-y-[62%] -translate-x-1/2 flex gap-4">
                    <div className="w-28 lg:w-60 h-28 lg:h-60 rounded-full bg-white flex items-center justify-center relative">
                        <h4 className='text-center text-white absolute z-10 uppercase text-[1.5vh] lg:text-xl tracking-tight opacity-95'>Play</h4>
                        <div className="w-3/5 h-3/5 rounded-full bg-[#212121] relative">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-3 lg:w-5 h-3 lg:h-5 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-28 lg:w-60 h-28 lg:h-60 rounded-full bg-white flex items-center justify-center">
                        <h4 className='text-center text-white absolute z-10 uppercase text-[1.5vh] lg:text-xl tracking-tight opacity-95'>Play</h4>
                        <div className="w-3/5 h-3/5 rounded-full bg-[#212121] relative">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-3 lg:w-5 h-3 lg:h-5 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes