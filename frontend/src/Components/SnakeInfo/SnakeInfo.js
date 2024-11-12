import React from 'react';
import { useParams } from 'react-router-dom';
import './SnakeInfo.css';
import snake1 from '../../Assets/Snake1.png';
import snake2 from '../../Assets/Snake2.png';
import snake3 from '../../Assets/Snake3.png';
import snake4 from '../../Assets/Snake4.png';
import snake5 from '../../Assets/Snake5.png';
import snake6 from '../../Assets/Snake6.png';
import snake7 from '../../Assets/Snake7.png';
import snake8 from '../../Assets/Snake8.png';

export const SnakeInfo = () => {
  const { name } = useParams();

  const snakeData = {
    "King Cobra": {
      image: snake1,
      description: "The king cobra is the world’s longest venomous snake.",
      habitat: "Forests and plains in Southeast Asia.",
    },
    "hump nosed viper": {
      image: snake2,
      description: "This is a venomous species found in Asia.",
      habitat: "Rainforests, savannas, and grasslands.",
    },
    "sand viper": {
        image: snake3,
        description: "Pythons are non-venomous snakes found in Asia, Africa, and Australia.",
        habitat: "Rainforests, savannas, and grasslands.",
      },
      "Russell's viper": {
        image: snake4,
        description: "Pythons are non-venomous snakes found in Asia, Africa, and Australia.",
        habitat: "Rainforests, savannas, and grasslands.",
      },
      "Sri Lankan pit viper": {
        image: snake5,
        description: "Pythons are non-venomous snakes found in Asia, Africa, and Australia.",
        habitat: "Rainforests, savannas, and grasslands.",
      },
      "Sri Lankan krait": {
        image: snake6,
        description: "Pythons are non-venomous snakes found in Asia, Africa, and Australia.",
        habitat: "Rainforests, savannas, and grasslands.",
      },
      "Sri Lanka cat snake": {
        image: snake7,
        description: "Pythons are non-venomous snakes found in Asia, Africa, and Australia.",
        habitat: "Rainforests, savannas, and grasslands.",
      },
      "Sri Lankan rock python": {
        image: snake8,
        description: "Pythons are non-venomous snakes found in Asia, Africa, and Australia.",
        habitat: "Rainforests, savannas, and grasslands.",
      },
    // Add other snake data similarly
  };

  const snake = snakeData[name];

  if (!snake) {
    return <h2>Snake information not found.</h2>;
  }

  return (
    <div className="snake-info">
      <div className="snake-info-content">
        <img src={snake.image} alt={name} />
        <h2>{name}</h2>
        <p>{snake.description}</p>
        <p><strong>Habitat:</strong> {snake.habitat}</p>
      </div>
    </div>
  );
};

export default SnakeInfo;