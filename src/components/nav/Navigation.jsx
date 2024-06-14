import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <NavLink to={'/'}></NavLink>
      <NavLink to={'/public'}></NavLink>
      <NavLink to={'/private'}></NavLink>
      <NavLink to={'/moving'}></NavLink>
      <NavLink to={'/contact'}></NavLink>
      <NavLink to={'/hire'}></NavLink>
      <NavLink to={'/rent'}></NavLink>
      <nav className="flex justify-between items-center py-8 px-4 xl:px-10 bg-[#292929] ">
        <a className="text-lg font-semibold" href="/">
          <img
            className="h-8"
            src="/src/assets/download.png"
            alt=""
            width="auto"
          />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center p-3 hover:bg-blue-300 rounded">
            <svg
              className="text-white block h-4 w-4"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:ml-auto lg:mr-12 lg:flex lg:items-center lg:space-x-12">
          <li>
            <a
              className="text-white hover:text-blue-100 text-sm font-semibold"
              href="public"
            >
              Public
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-blue-100 text-sm font-semibold"
              href="private"
            >
              Private
            </a>
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
    </div>
  );
}

export default Navigation;
