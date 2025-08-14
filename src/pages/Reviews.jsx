import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ReviewCard from '../components/ReviewCard';

function Reviews() {
    return (
        <div className="w-full px-5 py-20 bg-gray-200 flex flex-col gap-15 items-center">

            <h1 className="text-4xl md:text-5xl font-semibold">Our <span className="text-[#4c50a9]">Reviews</span> </h1>

            <div className='flex items-center justify-center w-[90%]'>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    // navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    className="pb-12 w-full" // pagination ke liye space
                    breakpoints={{
                        0: { slidesPerView: 1 },       //  Mobile: 1 card
                        640: { slidesPerView: 2 },     //  Tablet: 2 cards
                        1024: { slidesPerView: 3 },    //  PC: 3 cards
                    }}
                >
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Reviews;
