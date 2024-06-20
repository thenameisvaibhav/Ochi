import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.1' className='w-full pt-14 pb-5 lg:pb-14 bg-[#CEEA67] rounded-3xl font-["Neue_Montreal"] z-50 overflow-x-hidden'>
            <h1 className='text-[31px] lg:text-[55px] lg:w-[85%] leading-8 lg:leading-[55px] px-5 lg:px-14'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to <p className='inline underline underline-offset-[10px] decoration-2'>raise funds</p>,
                <p className='inline underline underline-offset-[10px] decoration-2'>sell prod­ucts</p>, <p className='inline underline underline-offset-[10px] decoration-2'>ex­plain com­plex ideas</p>, and <p className='inline underline underline-offset-[10px] decoration-2'>hire great peo­ple</p>.
            </h1>
            <div className="w-full border-t-[1px] mt-14 lg-4 border-zinc-400"></div>
            <div className="px-5 lg:px-14 lg:py-1 lg:flex justify-between">
                <div className="lg:w-1/2">
                    <h4 className='mb-8 mt-1'>What you can expect:</h4>
                </div>
                <div className="lg:w-1/2 lg:flex gap-52">
                    <div className="w-60">
                        <p className='w-72 mb-8'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                        <p className='w-72 mb-8'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>

                    <div className="flex flex-col justify-center lg:mr-52 lg:mt-10">
                        <h4 className='mb-4'>S:</h4>
                        <p className='underline underline-offset-4 decoration-1'>Instagram</p>
                        <p className='underline underline-offset-4 decoration-1'>Behance</p>
                        <p className='underline underline-offset-4 decoration-1'>Facebook</p>
                        <p className='underline underline-offset-4 decoration-1'>Linkedin</p>
                    </div>
                </div>


            </div>
            <div className="w-full border-t-[.1px] mt-20 border-zinc-400"></div>
            <div className="px-5 lg:px-14 pt-3 lg:flex">
                <div className="lg:w-1/2">
                    <h2 className='text-[31px] lg:text-[55px]'>Our approach:</h2>
                    <div className=" border-2 w-40 h-12 border-black rounded-full flex justify-between items-center my-2 bg-[#212121] text-white px-5">
                        <button className='uppercase text-sm lg:text-base  opacity-90'>Read more</button>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                </div>
                
                <div className="mt-11 lg:mt-1 rounded-2xl overflow-hidden lg:w-1/2">
                    <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About