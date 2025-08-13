import React from 'react';

function Home() {
    return (
        <>
            <div className='w-full manrope-font h-[100vh] flex items-center justify-center bg-[#0f0f0f]  bg-[url("/homeImgXl2.jpg")] bg-cover bg-center bg-fixed' id='home'>
                <div className='xl:w-[70vw] mb-10'>
                    <h1 className='text-5xl lg:text-7xl xl:text-7xl text-center font-bold text-white'>
                        More Than <span className='text-[#a7aae7]'> Rentals </span> <br />
                        A
                        <span className='text-[#a7aae7]'> Community </span>
                        Called
                        <span className='text-[#a7aae7]'> Home</span>.
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Home;
