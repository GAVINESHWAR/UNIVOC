import 'font-awesome/css/font-awesome.min.css';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../testimonials/Testimonials.css';

const testimonialsData = [
  {
    img: "/assets/tutor1.jpeg",
    name: "Rajeev Sharma",
    title: "Science Tutor, Noida",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 4.5,
  },
  {
    img: "/assets/tutor2.jpeg",
    name: "Ishita Dubey",
    title: "English Tutor, Chandigarh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 4,
  },
  {
    img: "/assets/tutor3.jpeg",
    name: "Prakash Gupta",
    title: "Hindi Tutor, Panchkula",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 3.5,
  },
  {
    img: "/assets/tutor4.jpeg",
    name: "Sakshi Verma",
    title: "Hindi Tutor, Zirkpur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 4,
  },
  {
    img: "/assets/tutor5.jpeg",
    name: "Abhishek Singh",
    title: "Social Science Tutor, Mohali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 4.5,
  },
  {
    img: "/assets/tutor6.jpeg",
    name: "Archi Gurjar",
    title: "Science Tutor, Chandigarh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 3,
  },
  {
    img: "/assets/tutor7.jpeg",
    name: "Saurabh Bhardwaj",
    title: "English Tutor, Panchkula",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 3.5
  },
  {
    img: "/assets/tutor8.jpeg",
    name: "Deepika Mishr",
    title: "Hindi Tutor, Zirkpur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 4.5,
  },
  {
    img: "/assets/tutor5.jpeg",
    name: "alok Yadav",
    title: "Hindi Tutor, Zirkpur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius.",
    rating: 4,
  },
];

const Testimonials = () => {

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <i key={`full-${index}`} className="fa fa-star" aria-hidden="true"></i>
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <i key={`half-${index}`} className="fa fa-star-half-o" aria-hidden="true"></i>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={`empty-${index}`} className="fa fa-star-o" aria-hidden="true"></i>
        ))}
      </>
    );
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-title">
        <h3 className="testimonial-section-title-h3">Testimonials</h3>
      </div>
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        grabCursor={true}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-card-body">
                <div className="testimonial-image">
                  <div className="testimonial-star-img">
                    <div className="testimonial-img">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="testimonial-star">
                      {renderRatingStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-caption">
                    <h3 className="testimonial-title-h3">{testimonial.name}</h3>
                    <p className="testimonial-title-p">{testimonial.title}</p>
                  </div>
                </div>
              </div>
              <p className="testimonial-p">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;