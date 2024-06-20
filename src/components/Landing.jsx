import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.1' className="w-full h-screen font-['Neue_Montreal'] overflow-hidden">
            <div className="textstructure pt-24 lg:pt-36 px-5 lg:px-14">
                {['We Create', 'Eye-Opening', 'Presentations'].map((item, index) => {
                    return (
                        <div key={index} className='masker'>
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (<motion.div
                                initial={{width: 0}} 
                                animate={{width: '23%'}}
                                    transition={{ ease: [0.87, 0, 0.13, 1], duration: 1}}
                                    className="h-11 md:h-16 lg:h-24 relative top-1 mr-3 rounded-md overflow-hidden"
                                >
                                    <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                </motion.div>

                                )}
                                <h1 className="font-['Found'] uppercase text-6xl md:text-8xl lg:text-[139px] leading-[48px] md:leading-[70px] lg:leading-[104px] md:tracking-tight lg:tracking-normal">{item}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="border-t-2 mt-44 md:mt-52 lg:mt-28 border-zinc-300 md:flex items-center justify-between md:justify-start lg:justify-between px-5 lg:px-14 py-4 gap-5 lg:text-md">
                <p className='font-light leading-none pb-9'>For public and private companies</p>
                <p className='font-light leading-none pb-9 lg:ml-72'>From the first pitch to IPO</p>
                <div className="lg:flex justify-center gap-1">
                    <button className='text-sm uppercase text-zinc-600 border-2 border-zinc-600 py-2 px-3 rounded-full leading-none md:ml-32 mb-7 font-semibold'>Start the project</button>
                    <div className="w-9 h-9 border-2 border-zinc-600 rounded-full xl:flex items-center justify-center hidden">
                        <MdArrowOutward className='text-xl' />
                    </div>
                </div>
            </div>
            <motion.div initial={{ y: 0, opacity: 0 }} animate={{ y: '100%', opacity: '100%' }} transition={{ duration: 2, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }} className="hidden xl:flex items-center justify-center pl-24 overflow-hidden">
                <h3  className='opacity-30 leading-6 tracking-wide'>Scroll down</h3>
            </motion.div>
        </div>
    )
}

export default Landing