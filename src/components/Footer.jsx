import React from 'react'

const Footer = () => {
    return (
        <div className="relative h-[735px]"
            style={{ clipPath: `polygon(0% 0, 100% 0%, 100% 100%, 0 100%)` }}
        >
            <div className="relative h-[calc(100vh+735px)] -top-[100vh]">
                <div className="h-[735px] sticky top-[calc(100vh-735px)]">
                    <div className='Content rounded-3xl h-screen flex flex-col items-center justify-center font-["found"] uppercase text-7xl lg:text-[10vw] font-semibold bg-[#CEEA67] overflow-hidden'>
                        <h1>Ready</h1>
                        <h1>to start</h1>
                        <h1>the project?</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer