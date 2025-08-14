import React from 'react';

function Home() {
    return (
        <>
            <div className='w-full manrope-font h-[100vh] flex items-center justify-center bg-[#0f0f0f] bg-[url("/newMobBg.jpg")]  md:bg-[url("/homeImgXl2.jpg")] bg-cover bg-center bg-fixed overflow-x-hidden' id='home'>
                <div className='xl:w-[70vw] mb-10'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-center font-bold text-white'>
                        More Than <span className='text-[#a7aae7]'> Rentals </span> <br />
                        A
                        <span className='text-[#a7aae7]'> Community </span>
                        Called
                        <span className='text-[#a7aae7]'> Home</span>.
                    </h1>
                </div>
            </div>

            <a
                href="https://wa.me/7903269007?text=Hi%20%GharPadharo%2C%20I%20want%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-float fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
            >
                <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
                    alt="WhatsApp"
                    className="w-6 h-6 "
                />
            </a>
        </>
    );
}

export default Home;
