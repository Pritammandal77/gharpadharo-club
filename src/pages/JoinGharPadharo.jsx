import React from 'react';
import MotionWrapper from '../utils/MotionWrapper';
import { MotionConfig } from 'framer-motion';

function JoinGharPadharo() {
    return (
        <>
            <div className='w-full h-auto flex flex-col gap-10 lg:flex-row py-10 bg-[#1a1a1a] text-white'>
                <div className='w-[100vw] lg:w-[55vw] flex items-center justify-center'>
                    <div className='w-[90%] lg:w-[80%] flex flex-col gap-5'>
                        <MotionWrapper direction='-x'>
                            <h1 className="text-4xl md:text-5xl font-semibold">Join <span className="text-[#4c50a9]">GharPadharo</span> </h1>
                        </MotionWrapper>
                        <MotionWrapper direction='-x'>
                            <p className='text-[16px] lg:text-[18px]'>Finding the right home should be simple, safe, and stress-free.
                                At GharPadharo, we connect you with verified properties that match your needs —
                                so you can focus on living, not just searching.
                                Join our growing community of happy residents and make your next move with confidence.
                            </p>
                        </MotionWrapper>
                        <MotionWrapper direction='-x'>
                            <a href="https://career.gharpadharo.com/#/careers" target='_blank' className='bg-[#525599] py-2 px-2 w-45 rounded-xl text-[16px]'>
                                Join GharPadharo
                                <i className="fa-solid fa-arrow-right pl-2 pr-1"></i>
                            </a>
                        </MotionWrapper>
                    </div>
                </div>
                <div className='w-[100vw] lg:w-[40vw] flex items-center justify-center px-6 xl:px-0'>
                    <div>
                        <MotionWrapper direction='x'>
                            <img src="/joinUs2.jpg" alt="Oops , something went wrong while loading the image" className='w-[100%] md:w-[70%] lg:w-[90%] rounded-2xl' />
                        </MotionWrapper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JoinGharPadharo;
