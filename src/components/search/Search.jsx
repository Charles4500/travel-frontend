import { useState } from 'react';
import './search.css';

function Search() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '',
  });
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleInput(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  }
  return (
    <div className="form-one">
      <section className="add-card page">
        <form className="form" onSubmit={handleSubmit}>
          <label for="location" className="label">
            <span className="title">Enter your location</span>
            <input
              className="input-field"
              type="text"
              name="from"
              placeholder="Enter your location"
              value={formData.from}
              onChange={handleInput}
            />
          </label>
          <label for="serialCardNumber" class="label">
            <span class="title">Enter your destination</span>
            <input
              className="input-field"
              type="text"
              name="to"
              placeholder="Anywhere"
              value={formData.to}
              onChange={handleInput}
            />
          </label>
          <div class="split">
            <label for="ExDate" className="label">
              <span className="title">Depart</span>
              <input
                className="input-field"
                type="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleInput}
              />
            </label>
            <label for="cvv" className="label">
              <span className="title">Passengers</span>
              <input
                className="input-field"
                type="number"
                name="passengers"
                placeholder="boarding.."
                value={formData.passengers}
                onChange={handleInput}
              />
            </label>
          </div>
          <button className="checkout-btn" type="submit">
            Search
          </button>
        </form>
      </section>
    </div>
  );
}

export default Search;
