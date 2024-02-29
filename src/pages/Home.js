import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <Swiper
      className="swiper_wrapper"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="slide">
        <img src="/eah-pizza/images/swiper_pizza1.png" alt="pizza img" />
        <img src="/eah-pizza/images/eah_logo.png" alt="logo img" className="logo" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img src="/eah-pizza/images/swiper_pizza2.png" alt="pizza img" />
        <img src="/eah-pizza/images/eah_logo.png" alt="logo img" className="logo" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img src="/eah-pizza/images/swiper_pizza3.png" alt="pizza img" />
        <img src="/eah-pizza/images/eah_logo.png" alt="logo img" className="logo" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img src="/eah-pizza/images/swiper_pizza4.png" alt="pizza img" />
        <img src="/eah-pizza/images/eah_logo.png" alt="logo img" className="logo" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img src="/eah-pizza/images/swiper_pizza5.png" alt="pizza img" />
        <img src="/eah-pizza/images/eah_logo.png" alt="logo img" className="logo" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img src="/eah-pizza/images/swiper_pizza6.png" alt="pizza img" />
        <img src="/eah-pizza/images/eah_logo.png" alt="logo img" className="logo" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img src="/eah-pizza/images/swiper_pizza7.png" alt="pizza img" />
        <img src="/eah-pizza/images/eah_logo.png" alt="logo img" className="logo" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img src="/eah-pizza/images/swiper_pizza8.png" alt="pizza img" />
        <img src="/eah-pizza/images/eah_logo.png" alt="logo img" className="logo" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
