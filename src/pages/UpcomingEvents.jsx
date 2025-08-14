import React from 'react';
import MotionWrapper from '../utils/MotionWrapper';

function UpcomingEvents() {

    const upComingEvents = [
        {
            id: '1',
            eventName: 'Table Tennis',
            img: 'tabletennis.png'
        },
        {
            id: '2',
            eventName: 'Chess Tournament',
            img: 'chess.png'
        },
        {
            id: '3',
            eventName: 'Hackathon',
            img: 'hackathon.png'
        },
        {
            id: '4',
            eventName: 'Monthly Meetup',
            img: 'meetup.png'
        },
        {
            id: '5',
            eventName: 'Cultural Evening',
            img: 'homeImgXl.webp'
        },
        {
            id: '6',
            eventName: 'Yoga & Meditation Session',
            img: 'yoga.png'
        }
    ]

    return (
        <>
            <div className='w-full h-auto flex flex-col items-center gap-10 py-10 xl:pt-30 overflow-x-hidden' id='upcoming-events'>
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold">Upcoming <span className="text-[#4c50a9]">Events</span> </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                    {
                        upComingEvents &&
                        upComingEvents.map((data, index) => (
                            <MotionWrapper delay={0.3} key={data.id}>
                                <div className='w-[85vw] md:w-[30vw] h-65 md:h-55 xl:h-80 flex flex-col bg-purple-50 rounded-xl hover:scale-101 transition-all'>
                                    <img src={data.img} alt="" className='rounded-t-xl h-[75%]' />
                                    <div className='p-4'>
                                        <p className='text-[22px] lg:text-[27px] font-semibold'>{data.eventName}</p>
                                    </div>
                                </div>
                            </MotionWrapper>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default UpcomingEvents;
