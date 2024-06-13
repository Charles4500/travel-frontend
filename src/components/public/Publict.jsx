function Public() {
  return (
    <div className="public">
      <section>
        <div className="skew skew-top mr-for-radius"></div>
        <div class="skew skew-top ml-for-radius"></div>
        <div class="py-20 bg-gray-50 radius-for-skewed">
          <div class="container mx-auto px-4">
            <div class="mb-16 max-w-md mx-auto text-center">
              <span class="text-purple-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 class="text-4xl lg:text-5xl font-bold font-heading">
                Build & Launch without problems
              </h2>
            </div>
            <div class="flex flex-wrap -mx-4">
              <div class="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
                <div class="py-12 px-6 bg-white rounded shadow text-center">
                  <h3 class="px-8 mb-4 text-2xl font-bold font-heading">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p class="text-gray-500">
                    Fusce quam tellus, placerat eu metus ut, viverra aliquet
                    purus.
                  </p>
                </div>
              </div>
              <div class="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
                <div class="py-12 px-6 bg-white rounded shadow text-center">
                  <h3 class="px-8 mb-4 text-2xl font-bold font-heading">
                    Ut congue nec leo eget aliquam
                  </h3>
                  <p class="text-gray-500">
                    Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt
                    lectus libero.
                  </p>
                </div>
              </div>
              <div class="w-full lg:w-1/3 px-4">
                <div class="py-12 px-6 bg-white rounded shadow text-center">
                  <h3 class="px-8 mb-4 text-2xl font-bold font-heading">
                    Proin fringilla eleifend justo
                  </h3>
                  <p class="text-gray-500">
                    Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                    Integer sapien felis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="skew skew-bottom mr-for-radius"></div>
        <div class="skew skew-bottom ml-for-radius"></div>
      </section>
    </div>
  );
}

export default Public;
