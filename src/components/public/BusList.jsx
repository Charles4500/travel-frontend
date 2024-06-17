import React from 'react';

function BusList({ id, name, price, passengers, location_from, location_to }) {
  return (
    <div>
      <div className="shadow mt-2">
        <div className=" place-items-center">
          <h3>From: {location_from}</h3>
          <h3> To: {location_to}</h3>
          <h1
            id="modal-title"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            {name}: ({id})
          </h1>

          <h2
            id="modal-title"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Bus Fare: {price}
          </h2>
          <h3
            id="modal-title"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Available seats: {passengers}
          </h3>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
        </div>
      </div>
    </div>
  );
}

export default BusList;
