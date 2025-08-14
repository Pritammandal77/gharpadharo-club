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
        <div className="w-full px-5 py-20 bg-gray-200 flex flex-col gap-15 items-center overflow-x-hidden">

            <h1 className="text-4xl md:text-5xl font-semibold">Our <span className="text-[#4c50a9]">Reviews</span> </h1>

            <div className='flex items-center justify-center w-[95%] md:w-[90%]'>
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
                    <SwiperSlide>
                        <ReviewCard
                            name="Shubham Singh"
                            position="Seeker"
                            avatarName="SS"
                            msg="Very good service"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard
                            name="Priya Sharma"
                            position="Seeker"
                            avatarName="PS"
                            msg="The process was smooth and the team was extremely helpful in finding the right property."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard
                            name="Amit Verma"
                            position="Seeker"
                            avatarName="AV"
                            msg="GharPadharo helped me get my dream home faster than I expected. Highly recommended!"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard
                            name="Neha Kapoor"
                            position="Seeker"
                            avatarName="NK"
                            msg="Professional service with a personal touch. They truly care about their clients."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard
                            name="Rohit Mehra"
                            position="Seeker"
                            avatarName="RM"
                            msg="From start to finish, everything was transparent and efficient. Great experience!"
                        />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
}

export default Reviews;
