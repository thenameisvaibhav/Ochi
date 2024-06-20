import { delay, motion, useAnimation } from 'framer-motion'
import React from 'react'

const Projects = () => {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: '0' });
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: '100%' });
    }
    return (
        <div className='w-full py-7 lg:py-20 rounded-3xl font-["Neue_Montreal"]'>
            <h3 className='text-[31px] lg:text-[55px] px-5 lg:px-14'>Featured projects</h3>
            <div className="border-b-[1px] border-zinc-400 pb-8"></div>
            <div className="px-5 lg:px-14">
                <div className="cards w-full lg:flex gap-5 mt-12">
                    <div className="one lg:w-1/2 lg:h-screen">
                        <div className="flex items-center gap-2">
                            <h5 className="w-[10px] h-[10px] bg-black rounded-full"></h5>
                            <h5 className='uppercase text-sm lg:text-base'>Fyde</h5>
                        </div>
                        <motion.div
                            onHoverStart={() => handleHover(0)}
                            onHoverEnd={() => handleHoverEnd(0)}
                            whileHover={{
                                scale: .96,
                                transition: { duration: .5 },
                                opacity: 1,
                            }}
                            className="cardcontainer relative lg:h-[75vh] hover:z-[100]">
                            <div className="card w-80 lg:w-full h-64 lg:h-full rounded-xl overflow-hidden mt-5 mx-auto">
                                <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-9xl uppercase text-[#CEEA67] font-["found"] flex overflow-hidden'>
                                    {"FYDE".split('').map((item, index) =>
                                        <motion.span
                                            initial={{ y: '100%' }}
                                            animate={cards[0]}
                                            transition={{ ease: [0.87, 0, 0.13, 1], delay: index * .05 }}
                                            className='inline-block' key={index}>{item}</motion.span>)}
                                </h1>
                                <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                            </div>
                        </motion.div>
                        <div className="flex flex-wrap gap-3 my-5">
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Audit</h5>
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Copywriting</h5>
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Sales deck</h5>
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Slides design</h5>
                        </div>
                    </div>
                    <div className="two lg:w-1/2 lg:h-screen">
                        <div className="flex items-center gap-2">
                            <h5 className="w-[10px] h-[10px] bg-black rounded-full"></h5>
                            <h5 className='uppercase text-sm lg:text-base'>Vise</h5>
                        </div>
                        <motion.div
                            onHoverStart={() => handleHover(1)}
                            onHoverEnd={() => handleHoverEnd(1)}
                            whileHover={{
                                scale: .96,
                                transition: { duration: .5 },
                            }}
                            className="cardcontainer relative lg:h-[75vh] hover:z-[100]">
                            <div className="card w-80 lg:w-full h-64 lg:h-full rounded-xl overflow-hidden mt-5 mx-auto">
                                <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[8] leading-none text-9xl uppercase text-[#CEEA67] font-["found"] flex overflow-hidden'>
                                    {"VISE".split('').map((item, index) =>
                                        <motion.span
                                            initial={{ y: '100%' }}
                                            animate={cards[1]}
                                            transition={{ ease: [0.87, 0, 0.13, 1], delay: index * .05 }}
                                            className='inline-block sticky' key={index}>{item}</motion.span>
                                    )}
                                </h1>
                                <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                            </div>
                        </motion.div>
                        <div className="flex flex-wrap gap-3 my-5">
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Agency</h5>
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Company Presentation</h5>
                        </div>
                    </div>


                </div>

                <div className="cards2 w-full lg:flex gap-5 mt-12">
                    <div className="three lg:w-1/2 lg:h-screen">
                        <div className="flex items-center gap-2">
                            <h5 className="w-[10px] h-[10px] bg-black rounded-full"></h5>
                            <h5 className='uppercase text-sm lg:text-base'>Trawa</h5>
                        </div>
                        <motion.div
                            onHoverStart={() => handleHover(2)}
                            onHoverEnd={() => handleHoverEnd(2)}
                            whileHover={{
                                scale: .96,
                                transition: { duration: .5 },
                            }}
                            className="cardcontainer relative lg:h-[75vh] hover:z-[100]">
                            <div className="card w-80 lg:w-full h-64 lg:h-full rounded-xl overflow-hidden mt-5 mx-auto">
                                <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-9xl uppercase text-[#CEEA67] font-["found"] flex overflow-hidden'>
                                    {"TRAWA".split('').map((item, index) =>
                                        <motion.span
                                            initial={{ y: '100%' }}
                                            animate={cards[2]}
                                            transition={{ ease: [0.87, 0, 0.13, 1], delay: index * .05 }}
                                            className='inline-block sticky' key={index}>{item}</motion.span>)}
                                </h1>
                                <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                            </div>
                        </motion.div>
                        <div className="flex flex-wrap gap-3 my-5">
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Brand Identity</h5>
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Design Research</h5>
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Investor deck</h5>
                        </div>
                    </div>
                    <div className="four lg:w-1/2 lg:h-screen">
                        <div className="flex items-center gap-2">
                            <h5 className="w-[10px] h-[10px] bg-black rounded-full"></h5>
                            <h5 className='uppercase text-sm lg:text-base'>Premium Blend</h5>
                        </div>
                        <motion.div
                            onHoverStart={() => handleHover(3)}
                            onHoverEnd={() => handleHoverEnd(3)}
                            whileHover={{
                                scale: .96,
                                transition: { duration: .5 },
                            }}
                            className="cardcontainer relative lg:h-[75vh] hover:z-[100]">
                            <div className="card w-80 lg:w-full h-64 lg:h-full rounded-xl overflow-hidden mt-5 mx-auto">
                                <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-9xl uppercase text-[#CEEA67] font-["found"] w-full flex overflow-hidden'>
                                    {"PREMIUM BLEND".split('').map((item, index) =>
                                        <motion.span
                                            initial={{ y: '100%' }}
                                            animate={cards[3]}
                                            transition={{ ease: [0.87, 0, 0.13, 1], delay: index * .02 }}
                                            className='inline-block sticky' key={index}>{item}</motion.span>)}
                                </h1>
                                <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" />
                            </div>
                        </motion.div>
                        <div className="flex flex-wrap gap-3 my-5">
                            <h5 className='border-[1px] border-black font-semibold rounded-full px-3 py-1 uppercase text-sm lg:text-base text-zinc-600'>Branded Template</h5>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" border-2 w-60 h-12 border-black rounded-full flex justify-between items-center bg-[#212121] text-white px-5 mx-auto my-14">
                <button className='uppercase text-sm opacity-90'>View all case studies</button>
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
        </div>
    )
}

export default Projects