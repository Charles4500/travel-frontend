import './search.css';

function Search() {
  return (
    <div className="form-one">
      <section className="add-card page">
        <form className="form">
          <label for="name" className="label">
            <span className="title">Enter your location</span>
            <input
              className="input-field"
              type="text"
              name="input-location"
              placeholder="Enter your location"
            />
          </label>
          <label for="serialCardNumber" class="label">
            <span class="title">Enter your destination</span>
            <input
              className="input-field"
              type="text"
              name="input-name"
              placeholder="Anywhere"
            />
          </label>
          <div class="split">
            <label for="ExDate" className="label">
              <span className="title">Depart</span>
              <input
                className="input-field"
                type="date"
                name="input-date"
                placeholder="Date"
              />
            </label>
            <label for="cvv" className="label">
              <span className="title">Passengers</span>
              <input
                className="input-field"
                type="number"
                name="amount"
                placeholder="boarding.."
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
