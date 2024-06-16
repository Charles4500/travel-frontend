import './public.css';

function Search({ searchInput, setSearchInput }) {
  return (
    <div className="form-two">
      <input
        placeholder="Enter your destination here"
        type="text"
        className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}
export default Search;
