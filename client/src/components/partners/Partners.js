import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../partners/Partners.css';

const partners = [
  '/assets/adani.png',
  '/assets/ak.png',
  '/assets/caparo.png',
  '/assets/distil.png',
  '/assets/dixon.png',
  '/assets/epin.png',
  '/assets/global.png',
  '/assets/micro.png',
  '/assets/niilm.png',
  '/assets/nsdc.png',
  '/assets/padget.png',
  '/assets/subros.png',
];

const Partners = () => {
  return (
    <section className="partners-section">
      <h3 className="partners-section-title">Our Partners</h3>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, pauseOnHover: true }}
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        centeredSlides={true}  // Optional, depending on layout preference
        grabCursor={true}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="partners-slide">
            <img src={partner} alt={`Partner ${index + 1}`} className="partner-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;
