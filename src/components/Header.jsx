import React from 'react';

function Header() {
    return (
        <header>
            {/* <nav className='h-18 manrope-font bg-[#ffffff] flex items-center font-semibold' style={{ boxShadow: '0px 10px 10px 1px rgba(0,0,0,0.1)' }}>
                    <div className='flex items-center justify-center gap-1'>
                        <img src="/logo.webp" alt="" className='h-15 w-15'/>
                        <p className='text-[18px]'>GharPadharo Club</p>
                    </div>
            </nav>
             */}
            <nav
                className="h-18 w-[100vw] px-3 md:px-10 lg:px-15 absolute top-0 manrope-font bg-white/10 backdrop-blur-md flex items-center font-semibold "
            >
                <div className="flex items-center justify-center gap-1">
                    <img src="/logo.webp" alt="" className="h-12 w-12" />
                    <p className="text-[18px] text-white">GharPadharo Club</p>
                </div>
            </nav>

        </header>
    );
}

export default Header;
