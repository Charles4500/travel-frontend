import React from 'react';
import Nav from '../components/nav/Nav';

function Moving() {
  return (
    <div>
    <Nav/>
      <div className="cardt">
        <div className="contentd">
          <p className="headingt">Moving out?</p>
          <p className="parat">
            If you are considering moving out look at the available option by
            clicking on the button below to check on the one available
          </p>
          <button className="btnt">Moving</button>
        </div>
      </div>
    </div>
  );
}

export default Moving;
