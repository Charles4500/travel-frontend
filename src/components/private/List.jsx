import React from 'react';
import { useState } from 'react';

function List({ image, car_brand, hire_fee }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Rent');

  function handleClick() {
    if (isButtonDisabled === false && buttonText === 'Rent') {
      setIsButtonDisabled(true);
      setButtonText('Hired out');
    } else if (isButtonDisabled === true && buttonText === 'Hired out') {
      setIsButtonDisabled(false);
      setButtonText('Hired out');
    }
  }
  return (
    <div className="shadow-xl  ">
      <div className="w-full place-items-center">
        <img src={image} />
        <h3>{car_brand}</h3>
        <h3>Ksh.{hire_fee} /day</h3>
        <button
          disabled={isButtonDisabled}
          className={`p-2 bg-blue-500 text-white rounded ${
            isButtonDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'hover:bg-blue-600'
          }`}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default List;
