"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/autoplay"


const testimonials = [
  {
    text: "My daughter asks to do her chores now. I'm as surprised as you are.",
    author: "Rachel",
    role: "mum of one",
  },
  {
    text: "Set-up took ten minutes. School dates, swimming, the lot. It just runs itself now.",
    author: "Sophie & Mark",
    role: "parents of three",
  },
  {
    text: "I forwarded the school newsletter on WhatsApp and every date just appeared in the calendar. Sorcery.",
    author: "Emma",
    role: "mum of two",
  },
  {
    text: "We stopped arguing about whose turn it is. The kids race to finish their quests.",
    author: "Daniel",
    role: "dad of three",
  },
  {
    text: "Housemait keeps everything organised. It's become part of our routine.",
    author: "Sarah",
    role: "mum of two",
  },
];

export default function Testimonial() {


    const swiperRef = useRef<any>(null);
  return (
<div className="testimonial-section">
     <div className="things yours-family   padding-top max-width">
               <div className=" text-center">
                  <h2>Loved by busy families.</h2>
                  
               </div>

                </div>
    
    <section className="testimonial ">
      <Swiper
        modules={[Autoplay]}
         onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        speed={10000}
        spaceBetween={24}
        slidesPerView={3.5}
         autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    
        allowTouchMove={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="stars">★★★★★</div>

              <p>{item.text}</p>

              <h4>
                {item.author}
                <span> · {item.role}</span>
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
</div>
   
  );
}