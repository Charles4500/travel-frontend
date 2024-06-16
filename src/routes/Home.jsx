import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
      <section className="relative bg-[#292929] pb-20">
        <nav className="flex justify-between items-center py-8 px-4 xl:px-10">
          <a className="text-lg font-semibold" href="/">
            <img
              className="h-8"
              src="/src/assets/download.png"
              alt=""
              width="92"
              height="30"
            />
          </a>
          <div className="lg:hidden">
            <button class="navbar-burger flex items-center p-3 hover:bg-blue-300 rounded">
              <svg
                class="text-white block h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul class="hidden lg:ml-auto lg:mr-12 lg:flex lg:items-center lg:space-x-12">
            <li>
              <a
                className="text-white hover:text-blue-100 text-sm font-semibold"
                href="public"
              >
                Public
              </a>
            </li>
            <li>
              <button className="relative group inline-flex items-center text-left text-base font-bold text-white">
                <span className="mr-2">Private</span>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="hidden group-hover:block absolute z-50 bottom-0 left-0 transform translate-y-full w-56 pt-6">
                  <div className="p-2 bg-white border-2 border-black rounded-md shadow">
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="hire"
                    >
                      Hire
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="rent"
                    >
                      Rent
                    </a>
                  </div>
                </div>
              </button>
            </li>
            <li>
              <a
                className="text-white hover:text-blue-100 text-sm font-semibold"
                href="moving"
              >
                Moving
              </a>
            </li>
          </ul>
          <div className="hidden lg:block">
            <a
              className="inline-block py-3 px-8 text-sm leading-normal font-medium rounded bg-[#292929] border-2 border-[#3e3e3e] text-white   hover:border-[#fff] cursor-pointer transition"
              href="contact"
            >
              Contact Us
            </a>
          </div>
        </nav>
        <img
          className="hidden lg:block lg:absolute top-0 left-0 mt-32"
          src="zeus-assets/icons/dots/yellow-dot-left-bars.svg"
          alt=""
        />
        <img
          className="hidden lg:block lg:absolute bottom-0 right-0 mt-20"
          src="zeus-assets/icons/dots/red-dot-right-shield.svg"
          alt=""
        />
        <div className="relative container pt-12 px-4 mb-20 mx-auto text-center">
          <h2 className="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
            Traveling just got easier
          </h2>
          <p className="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50">
            Smoothen your movement from one place to another. From booking a bus
            from the comfort of your home to renting a car.Explore our different
            services
          </p>
        </div>
        <div className="max-w-6xl px-4 mx-auto ">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <div class="p-8 border border-bg-white  rounded-lg hover:bg-gray-900 hover:scale-110 duration-700 ">
                <span class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-teal-500 ">
                  <svg
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1614 8.05311C13.1614 9.79911 11.7454 11.2141 9.99938 11.2141C8.25338 11.2141 6.83838 9.79911 6.83838 8.05311C6.83838 6.30611 8.25338 4.89111 9.99938 4.89111C11.7454 4.89111 13.1614 6.30611 13.1614 8.05311Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05285C17.289 3.48885 13.806 0.750854 9.998 0.750854H10.002C6.194 0.750854 2.711 3.48885 0.75 8.05285C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl text-white font-semibold">
                  Public transport
                </h3>
                <p class="mb-8 text-gray-500">
                  Just check in here and grab your ticket at the comfort of your
                  home
                </p>
                <a
                  class="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                  href="public"
                >
                  <svg
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <div class="p-8 border border-bg-white  rounded-lg  hover:bg-gray-900 hover:scale-110 duration-700">
                <span class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-orange-500">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8397 17.1642V3.54639"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M18.9173 13.068L14.8395 17.1647L10.7617 13.068"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.91102 0.832886V14.4507"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M0.833496 4.92894L4.91127 0.832275L8.98905 4.92894"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl text-white font-semibold">Private</h3>
                <p class="mb-8 text-gray-500">
                  Are you looking for a car to rent or rent out your car? Try
                  our service.
                </p>
                <a
                  class="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                  href="private"
                >
                  <svg
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4">
              <div class="p-8 border border-bg-white  rounded-lg  hover:bg-gray-900 hover:scale-110 duration-700">
                <span class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-red-400">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7364 0.76187H5.0844C3.0044 0.75387 1.3004 2.41087 1.2504 4.49087V15.2279C1.2054 17.3299 2.8734 19.0699 4.9744 19.1149C5.0114 19.1149 5.0484 19.1159 5.0844 19.1149H13.0724C15.1624 19.0409 16.8144 17.3189 16.8024 15.2279V6.03787L11.7364 0.76187Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.4746 0.750122V3.65912C11.4746 5.07912 12.6236 6.23012 14.0436 6.23412H16.7976"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8.64062 7.90881V13.9498"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.9864 10.2643L8.64139 7.9093L6.29639 10.2643"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl text-white font-semibold">
                  Relocating ?
                </h3>
                <p class="mb-8 text-gray-500">
                  If your are locating and are looking for services to assist
                  you move.
                </p>
                <a
                  class="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                  href="moving"
                >
                  <svg
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-lg font-semibold leading-none"
                href="#"
              >
                <img
                  className="h-7"
                  src="zeus-assets/logo/logo-zeus-red.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Public
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Private
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Moving
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block py-3 text-center text-sm leading-normal rounded bg-red-50 hover:bg-red-200 text-red-500 font-semibold transition duration-200"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
              <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>© 2021 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
