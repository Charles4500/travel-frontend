import './public.css';

function Search({ searchInput, setSearchInput }) {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <div className="mt-8">
          <h3 className="text-2xl font-bold tracking-wide text-white mb-1">
            Address
          </h3>
          <p className="text-xs text-gray-300">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 px-4">
        <div className="px-8 md:px-16 pt-16 pb-8 bg-gray-500 rounded-xl">
          <div className="max-w-xl mx-auto">
            <form action="">
              <div className="flex flex-wrap -mx-4 -mb-10">
                <div className="w-full md:w-1/2 px-4 mb-10">
                  <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                      Country
                    </span>
                    <input
                      className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                      id="formInput2-7"
                      type="text"
                      placeholder="United States"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10">
                  <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                      City
                    </span>
                    <input
                      className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                      id="formInput2-8"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10">
                  <div className="relative block px-3 w-full font-medium border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                      State/Province
                    </span>
                    <span className="absolute top-1/2 right-0 mr-5 transform -translate-y-1/2">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z"
                          fill="#3D485B"
                        ></path>
                      </svg>
                    </span>
                    <select
                      className="w-full py-4 text-gray-50 font-semibold appearance-none bg-transparent outline-none"
                      id="formInput2-9"
                      name=""
                    >
                      <option className="bg-gray-500" value="1">
                        New York
                      </option>
                      <option className="bg-gray-500" value="1">
                        New York
                      </option>
                      <option className="bg-gray-500" value="1">
                        New York
                      </option>
                    </select>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10">
                  <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                      Zip/Postal Code
                    </span>
                    <input
                      className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                      id="formInput2-10"
                      type="text"
                      placeholder="550-750"
                    />
                    <div
                      data-lastpass-icon-root=""
                      style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
                    ></div>
                  </div>
                </div>
                <div className="w-full px-4 mb-10">
                  <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                      Street address
                    </span>
                    <input
                      className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                      id="formInput2-11"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 text-right">
                <button
                  className="inline-block py-2 px-4 mb-2 text-xs text-center font-semibold leading-6 text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
