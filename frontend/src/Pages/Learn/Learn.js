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
import snake9 from '../../Assets/Snake9.png';
import snake10 from '../../Assets/Snake10.png';
import snake11 from '../../Assets/Snake11.png';
import snake12 from '../../Assets/Snake12.png';
import snake13 from '../../Assets/Snake13.png';
import snake14 from '../../Assets/Snake14.png';
import snake15 from '../../Assets/Snake15.png';
import snake16 from '../../Assets/Snake16.png';
import snake17 from '../../Assets/Snake17.png';
import snake18 from '../../Assets/Snake18.png';
import snake19 from '../../Assets/Snake19.png';
import snake20 from '../../Assets/Snake20.png';
import snake21 from '../../Assets/Snake21.png';
import snake22 from '../../Assets/Snake22.png';
import snake23 from '../../Assets/Snake23.png';
import snake24 from '../../Assets/Snake24.png';


export const Learn = () => {
  const navigate = useNavigate();
  const snakeImages = [
    { src: snake1, name: "King Cobra" },
    { src: snake2, name: "Hump-nosed Viper" },
    { src: snake3, name: "Sand Viper" },
    { src: snake4, name: "Russell's Viper" },
    { src: snake5, name: "Sri Lankan Pit Viper" },
    { src: snake6, name: "Sri Lankan Krait" },
    { src: snake7, name: "Sri Lanka Cat Snake" },
    { src: snake8, name: "Common krait" },
    { src: snake9, name: "Yellow-bellied Sea Snake" },
    { src: snake10, name: "Striped water snake" },
    { src: snake11, name: "Common Wolf Snake" },
    { src: snake12, name: "Mangrove Cat Snake" },
    { src: snake13, name: "Reticulated Python" },
    { src: snake14, name: "Green Vine Snake" },
    { src: snake15, name: "Black Mamba" },
    { src: snake16, name: "Common Sand Boa" },
    { src: snake17, name: "Black-headed Cat Snake" },
    { src: snake18, name: "Brown vine snake" },
    { src: snake19, name: "Buff-striped keelback" },
    { src: snake20, name: "Ornate flying snake" },
    { src: snake21, name: "Banded wolf snake" },
    { src: snake22, name: "Oriental rat snake" },
    { src: snake23, name: "Sri Lanka pipe snake" },
    { src: snake24, name: "Sri Lankan Rock Python" },
  

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
