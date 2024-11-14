
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaCheckCircle, FaRegSmile, FaRocket, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import benefitsData from '../BenefitsData';
import './Benefit.css';

const Benefits = () => {


  const navigate = useNavigate();

  const iconMapping = {
    "BENEFITS TO INDUSTRY": <FaCheckCircle className="benefit-icon" />,
    "BENEFITS TO INDUSTRIES IN TERMS OF SELECTION OF CANDIDATES": <FaRegSmile className="benefit-icon" />,
    "INDUSTRIES BENEFITS": <FaRocket className="benefit-icon" />,
    "BENEFITS TO TRAINEE": <FaUserShield className="benefit-icon" />
  };
  const handleCardClick = (id) => {
    // Open the benefit detail in a new window
    window.open(`/benefit/${id}`, '_blank', 'noopener, noreferrer');
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true }); // Initialize AOS with options
  }, []);

  return (

    <div className="benefit-section">
      <h2 data-aos="fade-up" className="benefits-heading">Benefits</h2>
      <div data-aos="fade-down" className="benefits-container">
        {benefitsData.map((benefit, index) => {
          const icon = iconMapping[benefit.title] || <FaRegSmile className="benefit-icon" />;
          return (
            <div
              key={index}
              className="benefit-card"
              onClick={() => handleCardClick(index)}
            >
              <div className="benefit-icon-container">
                {icon}
              </div>
              <h3>{benefit.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;

