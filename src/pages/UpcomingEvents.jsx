import React from 'react';

function UpcomingEvents() {

    const upComingEvents = [
        {
            id: '1',
            eventName: 'Table Tennis',
            img: 'homeImgXl.webp'
        },
        {
            id: '2',
            eventName: 'Table Tennis',
            img: 'homeImgXl.webp'
        },
        {
            id: '3',
            eventName: 'Table Tennis',
            img: 'homeImgXl.webp'
        },
        {
            id: '4',
            eventName: 'Table Tennis',
            img: 'homeImgXl.webp'
        },
        {
            id: '5',
            eventName: 'Table Tennis',
            img: 'homeImgXl.webp'
        },
        {
            id: '6',
            eventName: 'Table Tennis',
            img: 'homeImgXl.webp'
        }
    ]

    return (
        <>
            <div className='w-full h-auto flex flex-col items-center gap-10 py-10'>
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold">Upcoming <span className="text-[#4c50a9]">Events</span> </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                    {
                        upComingEvents &&
                        upComingEvents.map((data, index) => (
                            <div key={data.id} className='w-[90vw] md:w-[30vw] flex flex-col bg-purple-100 rounded-xl hover:scale-101 transition-all'>
                                <img src={data.img} alt="" className='rounded-t-xl'/>
                                <div className='p-4'> 
                                    <p className='text-[27px] font-semibold'>{data.eventName}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default UpcomingEvents;
