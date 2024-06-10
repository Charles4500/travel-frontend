import './public.css';

function Search() {
  return (
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
  );
}

export default Search;
