import React from 'react';

function Header() {
    return (
        <header>
            <nav
                className="h-14 lg:h-16 w-[100vw] z-[30] px-2 md:px-10 lg:px-7 xl:px-15 bg-white fixed top-0 manrope-font  flex items-center justify-between "
            >
                <div className="flex items-center justify-center gap-1 text-[16px] font-semibold ">
                    <img src="/logo.webp" alt="" className="h-12 w-12" />
                    <p className="text-[18px] lg:text-[20px] text-black">GharPadharo Club</p>
                </div>
                <div className='hidden lg:flex'>
                    <ul className='flex flex-row gap-5 xl:gap-7 text-[18px] font-semibold'>
                        <li>
                            <a
                                href="#home"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#events"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                Events
                            </a>
                        </li>
                        <li>
                            <a
                                href="#gallery"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                Image Gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href="#upcoming-events"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                Upcoming Events
                            </a>
                        </li>
                        <li>
                            <a
                                href="#joinUs"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                Join Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href='https://www.gharpadharo.com/' target='_blank' className='px-2 py-2 xl:py-2 rounded-xl text-[14px] lg:text-[18px] text-gray-200 xl:text-[15px] bg-[#525599] cursor-pointer'>
                        Main Website
                        <i className="fa-solid fa-arrow-right pl-2 pr-1"></i>
                    </a>
                </div>
            </nav>

        </header>
    );
}

export default Header;

// bg-white/10 backdrop-blur-md     => code for transparent bg
//old header
{/* <nav className='h-18 manrope-font bg-[#ffffff] flex items-center font-semibold' style={{ boxShadow: '0px 10px 10px 1px rgba(0,0,0,0.1)' }}>
                    <div className='flex items-center justify-center gap-1'>
                        <img src="/logo.webp" alt="" className='h-15 w-15'/>
                        <p className='text-[18px]'>GharPadharo Club</p>
                    </div>
            </nav>
             */}