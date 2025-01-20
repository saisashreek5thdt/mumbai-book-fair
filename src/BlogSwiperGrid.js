import React from 'react';

export default function GalleryGrid() {
  return (
    <div className="py-40 py-lg-60">
    <div className="swiper blog-swiper-2">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="blog-swiper-image">
            <a
              href="assets/images/blog-swiper-image-1.jpg"
              className="image-link"
            >
              <img
                src="assets/images/blog-swiper-image-1.jpg"
                className="img-fluid"
                alt="img"
              />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="swiper-slide">
          <div className="blog-swiper-image">
            <a
              href="assets/images/blog-swiper-image-1.jpg"
              className="image-link"
            >
              <img
                src="assets/images/blog-swiper-image-1.jpg"
                className="img-fluid"
                alt="img"
              />
            </a>
          </div>
        </div>
        {/* swiper-slide */}
        <div className="swiper-slide">
          <div className="blog-swiper-image">
            <a
              href="assets/images/blog-swiper-image-2.jpg"
              className="image-link"
            >
              <img
                src="assets/images/blog-swiper-image-2.jpg"
                className="img-fluid"
                alt="img"
              />
            </a>
          </div>
        </div>
        {/* swiper-slide */}
        <div className="swiper-slide">
          <div className="blog-swiper-image">
            <a
              href="assets/images/blog-swiper-image-3.jpg"
              className="image-link"
            >
              <img
                src="assets/images/blog-swiper-image-3.jpg"
                className="img-fluid"
                alt="img"
              />
            </a>
          </div>
        </div>
        {/* swiper-slide */}
      </div>
      {/* swiper-wrapper */}
    </div>
    {/* blog-swiper-2 */}
  </div>
  
  );
}
