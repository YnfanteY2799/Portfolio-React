import { ReactElement, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { HamburgIcon, SearchIcon } from "../components";
import { Button } from "../components";
import LOGO from "../../assets/react.svg";

export default function Navbar({
  isActive = false,
  appName = "",
  actionChanger = () => console.log("None"),
}: {
  isActive?: boolean;
  appName?: string;
  actionChanger?: MouseEventHandler<HTMLButtonElement>;
}): ReactElement {
  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* First Side */}
            <div className="flex items-center justify-start">
              <button
                className=" mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                onClick={actionChanger}
              >
                <HamburgIcon isActive={isActive} />
              </button>
              <Link
                to="/"
                className="text-xl font-bold flex items-center lg:ml-2.5 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
              >
                <img src={LOGO} className="h-6 mr-2" alt="Portfolio Logo" />
                <span className="self-center whitespace-nowrap">{appName}</span>
              </Link>
            </div>

            {/* Component Center */}
            <div className="hidden items-center justify-center">
              <form
                action="#"
                method="GET"
                className="hidden lg:block lg:pl-32"
              >
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
              <Link to="/About">
                <Button
                  title="More Details !"
                  className="hidden md:block text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
