"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Cities from "../../components/cities/Cities";
import Title from "../../components/Title";

const CitySection = ({ title }) => {
  return (
    <div className="max-w-7xl m-auto pt-10  px-3">
      <Title title={title} />
      <Swiper
        spaceBetween={15}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <SwiperSlide className="">
            <Cities />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CitySection;
