import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { HamburgIcon, SearchIcon } from "../components";
import LOGO from "../../assets/react.svg";

export default function Navbar(): ReactElement {
  // Statefull-Variable
  const [isActive, setIsActive] = useState(false as boolean);

  // Constants
  const _NAME = "YYKD";

  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between divide-x">
          {/* First Side */}
          <div className="flex items-center justify-start">
            <button
              className=" mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              onClick={() => setIsActive(!isActive)}
            >
              <HamburgIcon isActive={isActive} />
            </button>
            <Link
              to="/"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <img src={LOGO} className="h-6 mr-2" alt="Portfolio Logo" />
              <span className="self-center whitespace-nowrap">{_NAME}</span>
            </Link>


          </div>

          {/* Component Center */}
          <div className="hidden flex items-center justify-center">
            <form action="#" method="GET" className="hidden lg:block lg:pl-32">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="mt-1 relative lg:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none w-full">
                  <SearchIcon className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>

          {/* Component end */}
          <div className="flex items-center">
            {/* <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            
            <div className="hidden lg:flex items-center">
              
              <span className="text-base font-normal text-gray-500 mr-5">
                Open source ❤️
              </span>
              <div className="-mb-1">
                <a
                  className="github-button"
                  href="https://github.com/themesberg/windster-tailwind-css-dashboard"
                  data-color-scheme="no-preference: dark; light: light; dark: light;"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub"
                >
                  Star
                </a>
              </div>

            </div>

            <a
              href="https://demo.themesberg.com/windster/pricing/"
              className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
            >
              <svg
                className="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="gem"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                ></path>
              </svg>
              Upgrade to Pro
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
