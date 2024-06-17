import React, { useState } from 'react';
import { BASE_URL } from '../../data';
import './book.css';
function Booking() {
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');
  const [busId, setBusId] = useState('');
  const [availableSeats, setAvailableSeats] = useState(null);
  const [error, setError] = useState(null);
  const handleBooking = async () => {
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/tickets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location_from: locationFrom,
          location_to: locationTo,
          bus_id: busId,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to book the ticket');
      }

      const result = await response.json();

      // Update available seats based on the response
      setAvailableSeats(result.available_seats);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="form-one">
      <section className="add-card page">
        <div>
          <h3>Book a Ticket</h3>
          <form onSubmit={(e) => e.preventDefault()} className="form">
            <label htmlFor="location" className="label">
              <span className="title">Enter your location</span>
              <input
                className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                type="text"
                placeholder="Location From"
                value={locationFrom}
                onChange={(e) => setLocationFrom(e.target.value)}
                required
              />
            </label>
            <label htmlFor="serialCardNumber" className="label">
              <span className="title">Enter your destination</span>
              <input
                className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                type="text"
                placeholder="Location To"
                value={locationTo}
                onChange={(e) => setLocationTo(e.target.value)}
                required
              />
            </label>
            <label htmlFor="serialCardNumber" className="label">
              <span className="title">Enter bus id</span>
              <input
                className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                type="text"
                placeholder="Bus ID"
                value={busId}
                onChange={(e) => setBusId(e.target.value)}
                required
              />
            </label>
            <button
              className="checkout-btn"
              type="button"
              onClick={handleBooking}
            >
              Book Ticket
            </button>
          </form>
        </div>
      </section>
      {availableSeats !== null && <p>Available Seats: {availableSeats}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Booking;
