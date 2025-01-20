import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TeamSection = () => {
  return (
    <section
    id='Team'
      className="pricing-section pricing-1 pb-50 pb-lg-100 pb-xxl-120"
    >
      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
          <div className="col-lg-4">
            <div className="section-title">
              <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                <span className="straight-line" />
                Team
              </span>
              <h2 className="title display-3 fw-extra-bold d-flex flex-column">
                <span className="mb-n2 text-opacity">Executive</span>
                <span className="sub-title fw-extra-bold text-primary">
                  Members
                </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="highlights-text">
              <p className="custom-jakarta custom-font-style-2 text-lg-end mb-2">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
        <div className="blog-content-wrapper position-relative">
          <div className="ellipse-image-1">
            {/* <img src="assets/images/home-1/ellipse-1.png" alt="ellipse-1" /> */}
            <img src='assets/images/mbf-h.png' alt='mbf'/>
          </div>
          <Swiper
            className="blog-swiper"
            loop={true}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              // Adjust the number of slides per view based on screen width
              320: { slidesPerView: 1 }, // Mobile
              768: { slidesPerView: 2 }, // Tablet
              1024: { slidesPerView: 3 }, // Desktop
            }}
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
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
                            <a
                              className="text-decoration-none"
                              href="blog-single-1.html"
                            >
                              Lorem ipsum: Lorem ipsum
                            </a>
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
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
