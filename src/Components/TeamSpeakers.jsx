import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

export default function TeamSpeakers() {
  return (
    <>
      <Swiper
        className="blog-swiper"
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={true}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="blog-content">
            <div className="blog-content-4 custom-inner-bg">
              <div className="row gx-20 gy-50 gy-lg-0 align-items-center justify-content-between">
                <div className="col-lg-6 order-lg-2">
                  <div className="blog-image">
                    <img
                      src="assets/images/pic.png"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="blog-left-content">
                    <h2 className="blog-link fs-4 fw-bold">
                      <Link className="text-decoration-none" to="/">
                        Lorem ipsum: Lorem ipsum
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
