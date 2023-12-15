import React, { useState } from 'react';
import './CustomPage.css'; // Import your CSS file

function CustomPage() {
  // Create state variables to track the quantity of each ingredient
  const [ingredient1, setIngredient1] = useState(0);
  const [ingredient2, setIngredient2] = useState(0);
  const [ingredient3, setIngredient3] = useState(0);
  const [ingredient4, setIngredient4] = useState(0);
  const [ingredient5, setIngredient5] = useState(0);
  const [ingredient6, setIngredient6] = useState(0);

  // Function to handle changes in ingredient quantities
  const handleIngredientChange = (event, setIngredient) => {
    const newValue = parseInt(event.target.value);
    setIngredient(newValue);
  };

  const handleDoneClick = () => {
    // Submitting the custom drink configuration to a server or perform any other action.
    alert('Custom drink configuration saved!');
  };

  return (
    <div className="custom-page">
      <div className="ingredient">
        <label>1</label>
        <input
          type="range"
          min="0"
          max="100"
          value={ingredient1}
          onChange={(e) => handleIngredientChange(e, setIngredient1)}
        />
        <span>{ingredient1}%</span>
      </div>
      <div className="ingredient">
        <label>2</label>
        <input
          type="range"
          min="0"
          max="100"
          value={ingredient2}
          onChange={(e) => handleIngredientChange(e, setIngredient2)}
        />
        <span>{ingredient2}%</span>
      </div>
      <div className="ingredient">
        <label>3</label>
        <input
          type="range"
          min="0"
          max="100"
          value={ingredient3}
          onChange={(e) => handleIngredientChange(e, setIngredient3)}
        />
        <span>{ingredient3}%</span>
      </div>
      <div className="ingredient">
        <label>4</label>
        <input
          type="range"
          min="0"
          max="100"
          value={ingredient4}
          onChange={(e) => handleIngredientChange(e, setIngredient4)}
        />
        <span>{ingredient4}%</span>
      </div>
      <div className="ingredient">
        <label>5</label>
        <input
          type="range"
          min="0"
          max="100"
          value={ingredient5}
          onChange={(e) => handleIngredientChange(e, setIngredient5)}
        />
        <span>{ingredient5}%</span>
      </div>
      <div className="ingredient">
        <label>6</label>
        <input
          type="range"
          min="0"
          max="100"
          value={ingredient6}
          onChange={(e) => handleIngredientChange(e, setIngredient6)}
        />
        <span>{ingredient6}%</span>
      </div>
      <button className="button" onClick={handleDoneClick}>Done</button>
    </div>
  );
}

export default CustomPage;
