import React from 'react';
import Nav from '../components/nav/Nav';

function Public() {
  return (
    <div>
      <Nav />
      <div>
        <form className="form">
          <p className="title">Just input your destination</p>

          <div className="flex">
            <label>
              <input required="" placeholder="" type="text" className="input" />
              <span>From</span>
            </label>

            <label>
              <input required="" placeholder="" type="text" className="input" />
              <span>TO</span>
            </label>
          </div>

          <button class="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Public;
