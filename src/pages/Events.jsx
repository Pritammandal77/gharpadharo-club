import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ChevronLeftIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6" />
  </svg>;
const ChevronRightIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>;


const cardData = [
  {
    id: 1,
    imageUrl: "/gallery/image7.JPG",
    title: "Offline Meetup"
  },
  {
    id: 2,
    imageUrl: "/gallery/image9.png",
    title: "Work Time"
  },
  {
    id: 3,
    imageUrl: "/chess.png",
    title: "Chess Tournament"
  },
];

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cardData.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayDelay = 2000;
  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % cardData.length);
  };
  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);
  const changeSlide = newIndex => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
  };
  const onDragEnd = (event, info) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };
  return <section className="w-full flex-col items-center justify-center font-sans overflow-hidden manrope-font py-10" id='events'>
    <div className="w-full md:w-[100vw] xl:w-[90vw] mx-auto p-2 md:p-4" >
      <div className="relative flex w-full flex-col items-center rounded-3xl border border-white/10 dark:border-white/10  md:pt-6 md:p-6">
    
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold">Our <span className="text-[#4c50a9]">Events</span> </h1>
        </div>

        <div className="relative w-full  h-[280px] md:h-[45vh] xl:h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.div className="w-full h-full flex items-center justify-center cursor-pointer" drag="x" dragConstraints={{
            left: 0,
            right: 0
          }} dragElastic={0.2} onDragEnd={onDragEnd} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {cardData.map((card, index) => <Card key={card.id} card={card} index={index} activeIndex={activeIndex} totalCards={cardData.length} />)}
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-6 text-black">
          <button onClick={() => changeSlide(activeIndex - 1)} className="p-2 rounded-full text-gray-700 transition-colors focus:outline-none cursor-pointer focus:ring-2 hover:ring-purple-500">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center gap-2">
            {cardData.map((_, index) => <button key={index} onClick={() => changeSlide(index)} className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${activeIndex === index ? "w-6 bg-purple-400" : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"}`} aria-label={`Go to slide ${index + 1}`} />)}
          </div>

          <button onClick={() => changeSlide(activeIndex + 1)} className="p-2 rounded-full text-gray-700  transition-colors focus:outline-none cursor-pointer focus:ring-2 hover:ring-purple-500">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </section>;
}


function Card({
  card,
  index,
  activeIndex,
  totalCards
}) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }
  const isVisible = Math.abs(offset) <= 1;
  const animate = {
    x: `${offset * 50}%`,
    scale: offset === 0 ? 1 : 0.8,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30
    }
  };


  // from here , we can adjust the height & width of the cards
  return <motion.div className="absolute w-[100%] md:w-[100%] xl:w-[50%] h-[75%]" style={{
    transformStyle: "preserve-3d"
  }} animate={animate} initial={false} >
    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800">
      <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover pointer-events-none" onError={e => {
        const target = e.target;
        target.onerror = null;
        target.src = "https://placehold.co/400x600/1e1e1e/ffffff?text=Image+Missing";
      }} />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h4 className="text-white text-lg font-semibold">{card.title}</h4>
      </div>
    </div>
  </motion.div>;
}