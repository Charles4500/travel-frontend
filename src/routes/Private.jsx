import Footer from '../components/footer/Footer';
import Navigation from '../components/nav/Navigation';

function Private() {
  return (
    <div>
      <Navigation />

      <section class="py-20 overflow-hidden bg-[#292929] ">
        <div class="container px-4 mx-auto">
          <div class="text-center mb-20">
            <h1 class="text-gray-300 md:max-w-md mx-auto">
              If you are looking to hire out or rent out a car then this is the
              best place to do this
            </h1>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 p-5">
              <div class="p-12 lg:p-16 border border-gray-900 rounded-5xl">
                <h2 class="mb-6 text-5xl text-white tracking-5xl">
                  Are you renting out your car?
                </h2>
                <p class="mb-24 lg:mb-56 text-lg text-white text-opacity-60">
                  For most currencies, there are no limits to the transfer
                  amount. Certain currencies might have limits set by our
                  payments partners. You will always see the limit in the
                  Revolut app before making the transfer.
                </p>
                <a class="group inline-flex items-center" href="rent">
                  <span class="mr-3.5 text-white font-medium underline">
                    Rent
                  </span>
                  <svg
                    class="transform group-hover:rotate-90 transition duration-300"
                    width="13"
                    height="12"
                    viewbox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 0.75L1 11.25"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.5 10.3781V0.75H1.87187"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-5">
              <div class="p-12 lg:p-16 border border-gray-900 rounded-5xl">
                <h2 class="mb-6 text-5xl text-white tracking-5xl">
                  Are you looking for a car to hire?
                </h2>
                <p class="mb-24 lg:mb-56 text-lg text-white text-opacity-60">
                  For most currencies, there are no limits to the transfer
                  amount. Certain currencies might have limits set by our
                  payments partners. You will always see the limit in the
                  Revolut app before making the transfer.
                </p>
                <a class="group inline-flex items-center" href="hire">
                  <span class="mr-3.5 text-white font-medium underline">
                    Hire
                  </span>
                  <svg
                    class="transform group-hover:rotate-90 transition duration-300"
                    width="13"
                    height="12"
                    viewbox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 0.75L1 11.25"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.5 10.3781V0.75H1.87187"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Private;
