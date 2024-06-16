import Footer from '../components/footer/Footer';
import Navigation from '../components/nav/Navigation';

function Private() {
  return (
    <div>
      <Navigation />

      <section className="py-20 overflow-hidden bg-[#292929] ">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-gray-300 md:max-w-md mx-auto">
              If you are looking to hire out or rent a car then check out the
              services we have
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-5">
              <div className="p-12 lg:p-16 border border-gray-900 rounded-5xl">
                <h2 className="mb-6 text-5xl text-white tracking-5xl">
                  Are you renting out your car?
                </h2>
                <p className="mb-24 lg:mb-56 text-lg text-white text-opacity-60">
                  Rent a car at really affordable rates
                </p>
                <a className="group inline-flex items-center" href="rent">
                  <span class="mr-3.5 text-white font-medium underline">
                    Rent
                  </span>
                  <svg
                    className="transform group-hover:rotate-90 transition duration-300"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
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
            <div className="w-full md:w-1/2 p-5">
              <div className="p-12 lg:p-16 border border-gray-900 rounded-5xl">
                <h2 className="mb-6 text-5xl text-white tracking-5xl">
                  Are you looking for a car to hire?
                </h2>
                <p className="mb-24 lg:mb-56 text-lg text-white text-opacity-60">
                  Earn extra cash by hiring out your car
                </p>
                <a className="group inline-flex items-center" href="hire">
                  <span className="mr-3.5 text-white font-medium underline">
                    Hire out
                  </span>
                  <svg
                    className="transform group-hover:rotate-90 transition duration-300"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
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
