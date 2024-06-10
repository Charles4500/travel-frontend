import React from 'react'
import Nav from '../components/nav/Nav'

function Public() {
  return (
    <div>
      <Nav />
      <div className="card">
      <div className="content">
        <p className="heading">Looking to travel?</p>
        <p className="para">
          Just click on the button below to view the available options of public
          means you want to use.
        </p>
        <button className="btn">
          Public
        </button>
      </div>
    </div>
    </div>
  )
}

export default Public