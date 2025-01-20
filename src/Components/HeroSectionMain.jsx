import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "../SwiperCube.css";
import "../swiperCube";

import 'swiper/css';
import 'swiper/css/effect-cube';

// import { EffectCube } from 'swiper/modules';

function HeroSectionMain() {
  return (
    <>
      <div className="swiper bannerSwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              style={{ borderRadius: "45px" }}
              src="assets/images/logo-demo-2.png"
              className="img-fluid"
              alt="img"
            />
          </div>
          <div className="swiper-slide">
            <img
              style={{ borderRadius: "45px" }}
              src="assets/images/logo-demo-2.png"
              className="img-fluid"
              alt="img"
            />
          </div>
          <div className="swiper-slide">
            <img
              style={{ borderRadius: "45px" }}
              src="assets/images/logo-demo-2.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>
      </div>
      {/* <Swiper
        className="bannerSwiper"
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2600,
          pauseOnMouseEnter: true,
        }}
        modules={EffectCube}
      >
        <SwiperSlide>
          <img
            style={{ borderRadius: "45px" }}
            src="./assets/images/logo-demo-2.png"
            className="img-fluid"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "45px" }}
            src="./assets/images/logo-demo-2.png"
            className="img-fluid"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "45px" }}
            src="./assets/images/logo-demo-2.png"
            className="img-fluid"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "45px" }}
            src="./assets/images/logo-demo-2.png"
            className="img-fluid"
            alt="img"
          />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}

export default HeroSectionMain;
