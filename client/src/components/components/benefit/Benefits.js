
import React from 'react';
import { FaCheckCircle, FaRegSmile, FaRocket, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import benefitsData from '../BenefitsData';
import '../benefit/Benefits.css';

const Benefits = () => {
  const navigate = useNavigate();

  const iconMapping = {
    "BENEFITS TO INDUSTRY": <FaCheckCircle className="benefit-icon" />,
    "BENEFITS TO INDUSTRIES IN TERMS OF SELECTION OF CANDIDATES": <FaRegSmile className="benefit-icon" />,
    "INDUSTRIES BENEFITS": <FaRocket className="benefit-icon" />,
    "BENEFITS TO TRAINEE": <FaUserShield className="benefit-icon" />
  };

  const handleCardClick = (id) => {
    navigate(`/benefit/${id}`);
  };

  return (
    <div className="benefit-section">
      <h2 className="benefits-heading">Benefits</h2>
      <div className="benefits-container">
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
