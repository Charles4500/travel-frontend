import React from 'react';

function BusList({ name, price, passengers, location_from, location_to }) {
  function handleClick() {
    alert('Ticket Added successfully');
  }
  function removeTicket() {
    alert('Ticket deleted successfully');
  }
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
            {name}
          </h1>

          <h2
            id="modal-title"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Bus Fare: {passengers}
          </h2>
          <h3
            id="modal-title"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Available seats: {price}
          </h3>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              type="button"
              onClick={handleClick}
            >
              Book Ticket
            </button>
            <button
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              type="button"
              onClick={removeTicket}
            >
              Cancel Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusList;
