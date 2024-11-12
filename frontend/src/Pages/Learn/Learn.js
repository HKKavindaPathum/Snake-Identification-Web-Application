import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Learn.css';
import snake1 from '../../Assets/Snake1.png';
import snake2 from '../../Assets/Snake2.png';
import snake3 from '../../Assets/Snake3.png';
import snake4 from '../../Assets/Snake4.png';
import snake5 from '../../Assets/Snake5.png';
import snake6 from '../../Assets/Snake6.png';
import snake7 from '../../Assets/Snake7.png';
import snake8 from '../../Assets/Snake8.png';
// Import other snake images similarly

export const Learn = () => {
  const navigate = useNavigate();
  const snakeImages = [
    { src: snake1, name: "King Cobra" },
    { src: snake2, name: "hump nosed viper" },
    { src: snake3, name: "sand viper" },
    { src: snake4, name: "Russell's viper" },
    { src: snake5, name: "Sri Lankan pit viper" },
    { src: snake6, name: "Sri Lankan krait" },
    { src: snake7, name: "Sri Lanka cat snake" },
    { src: snake8, name: "Sri Lankan rock python" },
    { src: snake1, name: "King Cobra" },
    { src: snake2, name: "hump nosed viper" },
    { src: snake3, name: "sand viper" },
    { src: snake4, name: "Russell's viper" },
    { src: snake5, name: "Sri Lankan pit viper" },
    { src: snake6, name: "Sri Lankan krait" },
    { src: snake7, name: "Sri Lanka cat snake" },
    { src: snake8, name: "Sri Lankan rock python" },
    // Add other images and names as necessary
  ];

  const handleImageClick = (name) => {
    navigate(`/snake/${name}`);
  };

  return (
    <div className="snake">
      {snakeImages.map((snake, index) => (
        <div className="images" key={index} onClick={() => handleImageClick(snake.name)}>
          <img src={snake.src} alt={snake.name} />
          <h2>{snake.name}</h2>
        </div>
      ))}
    </div>
  );
};
