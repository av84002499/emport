import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Servics.css';

const servicesData = [
  {
    img: '/images/image1.png',
    title: 'Plastic Products',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus.',
  },
  {
    img: '/images/image1.png',
    title: 'Steel Products',
    description: 'High-quality steel products for construction and industrial use.',
  },
  {
    img: '/images/image1.png',
    title: 'Chemical Supplies',
    description: 'Reliable chemical supplies for various industrial processes.',
  },
  {
    img: '/images/image1.png',
    title: 'Machinery Equipment',
    description: 'Modern and efficient machinery solutions.',
  },
  {
    img: '/images/image1.png',
    title: 'Packaging Materials',
    description: 'Durable packaging options for shipping and storage.',
  },
  {
    img: '/images/image1.png',
    title: 'Textile Products',
    description: 'Premium quality fabrics and textiles for all industries.',
  },
];

const Services = () => {
  return (
    <div className="servicspage">
      <h2 className="title2">Our Services</h2>

      <div className="coverflow-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="img-wrapper">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="hero-image"
                  />
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#" className="read-more-btn">
                    Read more →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
