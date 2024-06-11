import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <NavLink to={'/'}></NavLink>
      <NavLink to={'/public'}></NavLink>
      <NavLink to={'/private'}></NavLink>
      <NavLink to={'/moving'}></NavLink>
      <NavLink to={'/contact'}></NavLink>
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
    </div>
  );
}

export default Navigation;
