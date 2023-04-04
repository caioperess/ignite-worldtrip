import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { ImageSlide } from "./Slide";
import { ContinentProps } from "@/dtos/continent";

type SlideProps = {
  continents: ContinentProps[];
};

export function Slide({ continents }: SlideProps) {
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
      {continents.map((continent) => (
        <SwiperSlide key={continent.slug} style={{ height: "100%" }}>
          <ImageSlide
            slug={continent.slug}
            bgImage={continent.slide}
            title={continent.title}
            paragraph={continent.summary}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
