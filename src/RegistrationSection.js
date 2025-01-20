import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';

const RegistrationSection = () => {
  return (
    <section
      id="registration"
      style={{
        marginBottom: "50px",
        padding: "50px 0",
        position: "relative",
      }}
    >
      <div
        className="container"
        id="ticket"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <div
            className="col-lg-4"
            style={{ flex: "1 1 100%", marginBottom: "20px" }}
          >
            <div className="section-title">
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Lorem ipsum
              </span>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ marginBottom: "-10px", opacity: 0.8 }}>
                  Get Your
                </span>
                <span style={{ color: "#007bff" }}>Registration</span>
              </h2>
            </div>
          </div>

          <div
            className="col-lg-5"
            style={{ flex: "1 1 100%", textAlign: "right" }}
          >
            <p
              style={{
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="merchandise-contents" style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <img
              src="assets/images/ellipse-4.png"
              style={{ maxWidth: "100%" }}
              alt="img"
            />
          </div>

          <div className="swiper merchandise-swiper" style={{ padding: "20px" }}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
            >
              {[
                {
                  imgSrc: "assets/images/registration/Volunteer.png",
                  title: "Volunteer",
                  link: "https://docs.google.com/forms/d/e/1FAIpQLSePmHdusFo3-doXpJRmMxpmT9aqVweuzQhqn_OGJGcTdV-mLQ/viewform?usp=dialog",
                },
                {
                  imgSrc: "assets/images/registration/Exhibitor.png",
                  title: "Exhibitor",
                  link: "https://docs.google.com/forms/d/e/1FAIpQLSePmHdusFo3-doXpJRmMxpmT9aqVweuzQhqn_OGJGcTdV-mLQ/viewform?usp=dialog",
                },
                {
                  imgSrc: "assets/images/Ticket.png",
                  title: "Author",
                  link: "https://docs.google.com/forms/d/e/1FAIpQLSehWMPA1WSMIC1u54WHSlPRifEf1aP2PF_UBQahAI-SnbqLBw/viewform?usp=dialog",
                },
                // Add more slides here
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="merchandise-wrapper"
                    style={{ textAlign: "center", margin: "10px" }}
                  >
                    <div className="merchandise-image" style={{ marginBottom: "20px" }}>
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                    <h5 style={{ fontSize: "1rem", fontWeight: "700" }}>{item.title}</h5>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "10px",
                        padding: "10px 20px",
                        border: "1px solid #007bff",
                        color: "#007bff",
                        textDecoration: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Register
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
