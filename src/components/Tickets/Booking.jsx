import React, { useState } from 'react';
import { BASE_URL } from '../../data';
function Booking() {
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');

  const [availableSeats, setAvailableSeats] = useState(null);
  const [error, setError] = useState(null);
  const handleBooking = async () => {
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/ticket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location_from: locationFrom,
          location_to: locationTo,
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
    <div>
      <h3>Book a Ticket</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Location From"
          value={locationFrom}
          onChange={(e) => setLocationFrom(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location To"
          value={locationTo}
          onChange={(e) => setLocationTo(e.target.value)}
          required
        />
        <button type="button" onClick={handleBooking}>
          Book Ticket
        </button>
      </form>
      {availableSeats !== null && <p>Available Seats: {availableSeats}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Booking;
