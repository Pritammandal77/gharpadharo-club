import { img } from 'framer-motion/client';
import React from 'react';

function Gallery() {

    const imageCol1 = [
        {
            id: '1',
            img: '/gallery/image3.JPG'
        },
        {
            id: '2',
            img: '/gallery/image1.jpg'
        },
        {
            id: '3',
            img: '/gallery/image2.JPG'
        },

    ]

    const imageCol2 = [
        {
            id: '1',
            img: '/gallery/image4.jpg'
        },
        {
            id: '2',
            img: '/gallery/image9.png'
        },
        {
            id: '3',
            img: '/gallery/image6.JPG'
        }
    ]

    const imageCol3 = [
        {
            id: '1',
            img: '/gallery/image7.JPG'
        },
        {
            id: '2',
            img: '/gallery/image8.png'
        },
        {
            id: '4',
            img: '/gallery/image10.png'
        }
    ]
    return (
        <>
            <div className='w-full h-auto flex flex-col gap-10 items-center ' id='gallery'>
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold">Image <span className="text-[#4c50a9]">Gallery</span> </h1>
                </div>
                {/* <div className='flex justify-center gap-1 xl:gap-5 w-full px-1 xl:px-0 animate-marquee '>
                    <div className='flex flex-col w-[33vw] xl:w-[25vw] gap-1 xl:gap-5'>
                        {
                            imageCol1 && imageCol1.map((data, index) => (
                                <img src={data.img} key={index} alt="failed to load the image" className='w-[100%] h-auto xl:rounded-xl' />
                            ))
                        }
                    </div>
                    <div className='flex flex-col w-[33vw] xl:w-[25vw] gap-1 xl:gap-5'>
                        {
                            imageCol2 && imageCol2.map((data, index) => (
                                <img src={data.img} key={index} alt="failed to load the image" className='w-[100%] h-auto xl:rounded-xl' />
                            ))
                        }
                    </div>
                    <div className='flex flex-col w-[33vw] xl:w-[25vw] gap-1 xl:gap-5'>
                        {
                            imageCol3 && imageCol3.map((data, index) => (
                                <img src={data.img} key={index} alt="failed to load the image" className='w-[100%] h-auto xl:rounded-xl' />
                            ))
                        }
                    </div>
                </div> */}
                <div className="overflow-hidden w-full">
                    <div className="animate-marquee">
                        {/* First set */}
                        <div className="flex justify-center gap-2 xl:gap-5 px-1 xl:px-2">
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol1.map((data, index) => (
                                    <img src={data.img} key={`col1-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol2.map((data, index) => (
                                    <img src={data.img} key={`col2-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol3.map((data, index) => (
                                    <img src={data.img} key={`col3-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                        </div>

                        {/* Duplicate set */}
                        <div className="flex justify-center gap-2 xl:gap-5 px-1 xl:px-2">
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol1.map((data, index) => (
                                    <img src={data.img} key={`dup1-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol2.map((data, index) => (
                                    <img src={data.img} key={`dup2-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol3.map((data, index) => (
                                    <img src={data.img} key={`dup3-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center gap-1 xl:gap-5 px-1 xl:px-2">
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol1.map((data, index) => (
                                    <img src={data.img} key={`dup1-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol2.map((data, index) => (
                                    <img src={data.img} key={`dup2-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                            <div className="flex flex-col w-[45vw] xl:w-[25vw] gap-2 xl:gap-5">
                                {imageCol3.map((data, index) => (
                                    <img src={data.img} key={`dup3-${index}`} alt="" className="w-full h-auto xl:rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Gallery;
