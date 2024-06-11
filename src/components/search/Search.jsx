import './search.css';

function Search() {
  return (
    <div className="form-one">
      <section className="add-card page">
        <form className="form">
          <label for="name" className="label">
            <span className="title">Card holder full name</span>
            <input
              class="input-field"
              type="text"
              name="input-location"
              title="Input title"
              placeholder="Enter your location"
            />
          </label>
          <label for="serialCardNumber" class="label">
            <span class="title">Card Number</span>
            <input
              id="serialCardNumber"
              className="input-field"
              type="number"
              name="input-name"
              title="Input title"
              placeholder="Anywhere"
            />
          </label>
          <div class="split">
            <label for="ExDate" className="label">
              <span className="title">Depart</span>
              <input
                id="ExDate"
                className="input-field"
                type="date"
                name="input-name"
                title="Expiry Date"
                placeholder="Date"
              />
            </label>
            <label for="cvv" className="label">
              <span className="title"> Return</span>
              <input
                id="cvv"
                className="input-field"
                type="date"
                name="cvv"
                title="CVV"
                placeholder="Date"
              />
            </label>
          </div>
          <input className="checkout-btn" type="button" value="Checkout" />
        </form>
      </section>
    </div>
  );
}

export default Search;
