import React from 'react';
import Navigation from '../components/nav/Navigation';

function Contact() {
  return (
    <div className=" bg-[#292929] ">
      <Navigation />
      <section class="py-24 bg-blueGray-950 ">
        <div class="container px-4 mx-auto">
          <div class="relative px-4 max-w-sm mx-auto pt-20 pb-16 text-center border border-gray-900 border-opacity-30 rounded-5xl">
            <img
              class="absolute -top-12 left-1/2 transform -translate-x-1/2"
              src="nightsable-assets/images/cards/avatar1.png"
              alt=""
            />
            <h2 class="mb-4 text-4xl text-white tracking-4xl md:max-w-sm mx-auto">
              Jane Doe
            </h2>
            <p class="mb-10 text-gray-300 md:max-w-xs mx-auto">Mar 30 th</p>
            <ul class="relative">
              <li class="flex flex-wrap justify-center mb-6">
                <svg
                  class="mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewbox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M22.47 18.33C22.47 18.69 22.39 19.06 22.22 19.42C22.05 19.78 21.83 20.12 21.54 20.44C21.05 20.98 20.51 21.37 19.9 21.62C19.3 21.87 18.65 22 17.95 22C16.93 22 15.84 21.76 14.69 21.27C13.54 20.78 12.39 20.12 11.25 19.29C10.1 18.45 9.01 17.52 7.97 16.49C6.94 15.45 6.01 14.36 5.18 13.22C4.36 12.08 3.7 10.94 3.22 9.81C2.74 8.67 2.5 7.58 2.5 6.54C2.5 5.86 2.62 5.21 2.86 4.61C3.1 4 3.48 3.44 4.01 2.94C4.65 2.31 5.35 2 6.09 2C6.37 2 6.65 2.06 6.9 2.18C7.16 2.3 7.39 2.48 7.57 2.74L9.89 6.01C10.07 6.26 10.2 6.49 10.29 6.71C10.38 6.92 10.43 7.13 10.43 7.32C10.43 7.56 10.36 7.8 10.22 8.03C10.09 8.26 9.9 8.5 9.66 8.74L8.9 9.53C8.79 9.64 8.74 9.77 8.74 9.93C8.74 10.01 8.75 10.08 8.77 10.16C8.8 10.24 8.83 10.3 8.85 10.36C9.03 10.69 9.34 11.12 9.78 11.64C10.23 12.16 10.71 12.69 11.23 13.22C11.77 13.75 12.29 14.24 12.82 14.69C13.34 15.13 13.77 15.43 14.11 15.61C14.16 15.63 14.22 15.66 14.29 15.69C14.37 15.72 14.45 15.73 14.54 15.73C14.71 15.73 14.84 15.67 14.95 15.56L15.71 14.81C15.96 14.56 16.2 14.37 16.43 14.25C16.66 14.11 16.89 14.04 17.14 14.04C17.33 14.04 17.53 14.08 17.75 14.17C17.97 14.26 18.2 14.39 18.45 14.56L21.76 16.91C22.02 17.09 22.2 17.3 22.31 17.55C22.41 17.8 22.47 18.05 22.47 18.33Z"
                    stroke="#CCFF00"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
                <span class="text-white">(205) 555-0100</span>
              </li>
              <li class="flex flex-wrap justify-center">
                <svg
                  class="mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 8.87C2 9.57 2.37 10.22 2.97 10.58L10.46 15.07C11.41 15.64 12.6 15.64 13.55 15.07L21.04 10.58C21.64 10.22 22.01 9.57 22.01 8.87"
                    stroke="#CCFF00"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18 4H6C3.8 4 2 5.8 2 8V16C2 18.2 3.8 20 6 20H18C20.2 20 22 18.2 22 16V8C22 5.8 20.2 4 18 4Z"
                    stroke="#CCFF00"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span class="text-white">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="11727e7f65707265515f787679656270737d746574707c3f727e"
                  >
                    [email protected]
                  </a>
                </span>
              </li>
            </ul>
            <img
              class="absolute bottom-0 left-0"
              src="nightsable-assets/images/cards/blur.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
