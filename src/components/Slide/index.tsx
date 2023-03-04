import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { ImageSlide } from "./Slide";

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      navigation
      pagination={{ clickable: true }}
      draggable={false}
      modules={[Navigation, Pagination]}
      style={{ width: "100%", flex: 1 }}
    >
      <SwiperSlide style={{ height: "100%" }}>
        <ImageSlide
          bgImage="/europe.png"
          title="Europa"
          paragraph="O continente mais antigo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImageSlide
          bgImage="/europe.png"
          title="Europa"
          paragraph="O continente mais antigo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImageSlide
          bgImage="/europe.png"
          title="Europa"
          paragraph="O continente mais antigo."
        />
      </SwiperSlide>
    </Swiper>
  );
}
