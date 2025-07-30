import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Team.css';

const team = [  // ✅ renamed from Team to team
  {
    name: 'Aryan Kakadiya',
    role: 'Project Leader',
    img: 'https://i.ibb.co/yBvDGPY/team-member.jpg',
  },
  {
    name: 'Ankit Verma',
    role: 'Frontend Developer',
    img: 'https://i.ibb.co/yBvDGPY/team-member.jpg',
  },
  {
    name: 'Riya Sharma',
    role: 'UI/UX Designer',
    img: 'https://i.ibb.co/yBvDGPY/team-member.jpg',
  },
  {
    name: 'Vikram Singh',
    role: 'Backend Developer',
    img: 'https://i.ibb.co/yBvDGPY/team-member.jpg',
  },
  {
    name: 'Vikram Singh',
    role: 'Backend Developer',
    img: 'https://i.ibb.co/yBvDGPY/team-member.jpg',
  },
  {
    name: 'Vikram Singh',
    role: 'Backend Developer',
    img: 'https://i.ibb.co/yBvDGPY/team-member.jpg',
  },
  {
    name: 'Vikram Singh',
    role: 'Backend Developer',
    img: 'https://i.ibb.co/yBvDGPY/team-member.jpg',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>TEAM</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="team-swiper"
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={member.img} alt={member.name} className="avatar" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-icons">
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-dribbble"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-github"></i>
                <i className="bi bi-dev"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
