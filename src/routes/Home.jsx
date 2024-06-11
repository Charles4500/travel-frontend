function Home() {
  return (
    <section class="relative bg-[#292929] pb-20">
      <nav class="flex justify-between items-center py-8 px-4 xl:px-10">
        <a class="text-lg font-semibold" href="#">
          <img
            class="h-7"
            src="zeus-assets/logo/logo-zeus-white.svg"
            alt=""
            width="auto"
          />
        </a>
        <div class="lg:hidden">
          <button class="navbar-burger flex items-center p-3 hover:bg-blue-300 rounded">
            <svg
              class="text-white block h-4 w-4"
              viewbox="0 0 20 20"
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
              class="text-white hover:text-blue-100 text-sm font-semibold"
              href="public"
            >
              Public
            </a>
          </li>
          <li>
            <a
              class="text-white hover:text-blue-100 text-sm font-semibold"
              href="private"
            >
              Private
            </a>
          </li>
          <li>
            <a
              class="text-white hover:text-blue-100 text-sm font-semibold"
              href="moving"
            >
              Moving
            </a>
          </li>
        </ul>
        <div class="hidden lg:block">
          <a
            class="inline-block py-3 px-8 text-sm leading-normal font-medium rounded bg-[#292929] border-2 border-[#3e3e3e] text-white   hover:border-[#fff] cursor-pointer transition"
            href="contact"
          >
            Contact Us
          </a>
        </div>
      </nav>
      <img
        class="hidden lg:block lg:absolute top-0 left-0 mt-32"
        src="zeus-assets/icons/dots/yellow-dot-left-bars.svg"
        alt=""
      />
      <img
        class="hidden lg:block lg:absolute bottom-0 right-0 mt-20"
        src="zeus-assets/icons/dots/red-dot-right-shield.svg"
        alt=""
      />
      <div class="relative container pt-12 px-4 mb-20 mx-auto text-center">
        <span class="text-blue-500 font-semibold">What's new at Shuffle</span>
        <h2 class="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
          Traveling just got easier
        </h2>
        <p class="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50">
          Build a well-presented brand that everyone will love. Take care to
          develop resources continually and integrity them with previous
          projects.
        </p>
        <a
          class="relative z-10 inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-sm font-medium leading-normal bg-red-400 hover:bg-red-300 text-white rounded transition duration-200"
          href="#"
        >
          Try for free
        </a>
      </div>
      <div class="max-w-6xl px-4 mx-auto ">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <div class="p-8 border border-blue-800 rounded-lg hover:bg-gray-900 hover:scale-110 duration-700 ">
              <span class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-teal-500 ">
                <svg
                  width="20"
                  height="17"
                  viewbox="0 0 20 17"
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
                  viewbox="0 0 19 13"
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
            <div class="p-8 border border-blue-800 rounded-lg  hover:bg-gray-900 hover:scale-110 duration-700">
              <span class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-orange-500">
                <svg
                  width="20"
                  height="18"
                  viewbox="0 0 20 18"
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
              <h3 class="mb-6 text-2xl text-white font-semibold">
                Easy changes
              </h3>
              <p class="mb-8 text-gray-500">
                Just check in here and grab your ticket at the comfort of your
                home
              </p>
              <a
                class="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                href="private"
              >
                <svg
                  width="19"
                  height="13"
                  viewbox="0 0 19 13"
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
            <div class="p-8 border border-blue-800 rounded-lg  hover:bg-gray-900 hover:scale-110 duration-700">
              <span class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-red-400">
                <svg
                  width="18"
                  height="20"
                  viewbox="0 0 18 20"
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
                Place storage
              </h3>
              <p class="mb-8 text-gray-500">
                Just check in here and grab your ticket at the comfort of your
                home
              </p>
              <a
                class="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-700 text-white"
                href="moving"
              >
                <svg
                  width="19"
                  height="13"
                  viewbox="0 0 19 13"
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
      <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a class="mr-auto text-lg font-semibold leading-none" href="#">
              <img
                class="h-7"
                src="zeus-assets/logo/logo-zeus-red.svg"
                alt=""
                width="auto"
              />
            </a>
            <button class="navbar-close">
              <svg
                class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
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
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Public
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Private
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Moving
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a
                class="block py-3 text-center text-sm leading-normal rounded bg-red-50 hover:bg-red-200 text-red-500 font-semibold transition duration-200"
                href="#"
              >
                Contact Us
              </a>
            </div>
            <p class="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Home;
