"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    img: "/images/saatvik.webp",
    name: "Saatvik Nagpal",
    role: "Founder, EazyGrad",
    quote:
      "Anurag is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!",
  },
  {
    img: "/images/kira.webp",
    name: "Kira Bragg",
    role: "English Mentor",
    quote:
      "Anurag was a wonderful developer to work with! He anticipated everything I need to consider for my website. He also went the extra mile and added details that I hadn't considered! He is helping my business grow, and I will definitely work with him again!",
  },
  {
    img: "/images/Srihari.webp",
    name: "Srihari Kestur",
    role: "Founder Harigurus",
    quote:
      "I worked with Anurag to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made.",
  },
];

const Testimonials = () => {
  return (
<section className="max-w-screen-xl mx-auto pb-12 testimonial-section">
        <h2
          className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md"
        >
          What my clients are saying?
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="!py-14"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx} className="px-4">
              <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto">
                <Image
                  className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_40px_rgba(59,130,246,1)]"
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={180}
                  height={180}
                />
                <div className="ml-6 text-left pt-6 md:pt-16 relative">
                  <p className="text-sm md:text-base mb-2">“{testimonial.quote}”</p>
                  <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                    {testimonial.name}
                  </h2>
                  <h3 className="text-right text-[#459bd5] text-base md:text-lg">
                    {testimonial.role}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
  )
}

export default Testimonials