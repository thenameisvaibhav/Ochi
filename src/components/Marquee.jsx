import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    const isMobile = /Mobi|Andriod/i.test(navigator.userAgent);

    return (
        <div data-scroll={isMobile ? true : false} data-scroll-section data-scroll-speed={isMobile ? "-.1" : "-.01"} className='w-full py-14 lg:py-20 bg-[#004D43] rounded-2xl'>
            <div className="text border-y-[.1px] border-[#59827B] flex whitespace-nowrap font-['Found'] font-semibold uppercase overflow-hidden">
                <motion.h1
                    initial={{ x: '0' }}
                    animate={{ x: '-100%' }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 9 }}
                    className='text-9xl lg:text-[25vw] lg:leading-[290px] text-white relative top-0 left-0 translate-x-1 -translate-y-2 lg:-translate-y-5 p-5'>we are ochi</motion.h1>
                <motion.h1
                    initial={{ x: '0' }}
                    animate={{ x: '-100%' }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 9 }}
                    className='text-9xl lg:text-[25vw] lg:leading-[290px] text-white relative top-0 left-0 translate-x-1 -translate-y-2 lg:-translate-y-5 p-5'>we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee