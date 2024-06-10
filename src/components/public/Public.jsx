import { useState } from 'react';
import './public.css';
import Search from './Search';

function Public() {
  const [display, setDisplay] = useState(false);
  function handleClick() {
    if (display === false) {
      setDisplay(true);
    } else if (display === true) {
      setDisplay(false);
    }
  }
  return (
    <div className="card">
      <div className="content">
        <p className="heading">Looking to travel?</p>
        <p className="para">
          Just click on the button below to view the available options of public
          means you want to use.
        </p>
        <button className="btn" onClick={handleClick}>
          Public
        </button>
      </div>
    </div>
  );
}

export default Public;
