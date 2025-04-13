import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import Cart from "../Cart";

function Navbar({ setCartModal }) {
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [mobileNav, setMobileNav] = useState(true);
  return (
    <div>
      <div className="flex justify-between px-8 py-4">
        <h2 className=" font-bold text-2xl">Logo</h2>
        <div className="w-2/4 flex">
          <input
            className="w-full h-8 bg-gray-100 rounded-l-lg p-2"
            type="text"
            placeholder="search"
          />
          <button className="fa fa-search bg-red-400 py-1 px-3 rounded-r-lg"></button>
        </div>
        <button className="hidden sm:block hover:text-yellow-600 font-semibold underline">
          <span className="fab fa-sign-out mr-1"></span>
          Logout
        </button>
      </div>
      <div className="bg-black  flex sm:justify-end items-center sm:p-3 my-6 h-16 relative">
        <div className="sm:hidden p-3 w-full flex justify-end">
          {mobileNav ? <button className=" text-white hover:text-gray-500" onClick={() => setMobileNav(false)}>
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button> :
          <button className="text-white cursor-pointer border border-gray-300 w-8 font-bold hover:text-red-500" onClick={() => setMobileNav(true)}>X</button>
          }
        </div>
        {mobileNav ? (
          <div className="hidden sm:flex items-center justify-between sm:w-2/3 ">
            <ul className="flex gap-4 text-white">
              <li className="">
                <Link
                  to="/"
                  className="hover:text-yellow-500 cursor-pointer font-bold active:text-yellow-500"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <a className="hover:text-yellow-500 cursor-pointer font-bold">
                  Shop
                </a>
              </li>
              <li className="">
                <Link
                  onClick={() => setCartModal(true)}
                  className="hover:text-yellow-500 cursor-pointer font-bold"
                >
                  Cart{" "}
                  <span className="text-white bg-red-500 p-1 rounded-full">
                    {cartCount}
                  </span>
                </Link>
              </li>

              <li className="">
                <a className="hover:text-yellow-500 cursor-pointer font-bold">
                  About
                </a>
              </li>
              <li className="">
                <a className="hover:text-yellow-500 cursor-pointer font-bold">
                  Contact
                </a>
              </li>
            </ul>
            <div className="">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-md">
                FLAT 10% OVER ALL IPHONE
              </button>
            </div>
          </div>
        ) : (
          <div className="right-1 z-10 absolute top-10">
            <div className="sm:hidden flex-col items-end justify-center sm:w-2/3 w-40 shadow-lg shadow-black mt-6 h-full bg-white p-4">
              <ul className="flex flex-col items-start gap-4 text-black">
                <li className="">
                  <Link
                    to="/"
                    className="hover:text-yellow-500 cursor-pointer font-bold active:text-yellow-500"
                  >
                    Home
                  </Link>
                </li>
                <li className="">
                  <a className="hover:text-yellow-500 cursor-pointer font-bold">
                    Shop
                  </a>
                </li>
                <li className="">
                  <Link
                    onClick={() => setCartModal(true)}
                    className="hover:text-yellow-500 cursor-pointer font-bold"
                  >
                    Cart{" "}
                    <span className="text-white bg-red-500 p-1 rounded-full">
                      {cartCount}
                    </span>
                  </Link>
                </li>

                <li className="">
                  <a className="hover:text-yellow-500 cursor-pointer font-bold">
                    About
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-yellow-500 cursor-pointer font-bold">
                    Contact
                  </a>
                </li>
                <hr className="mt-4 w-full font-bold text-gray-800"/>

                <li className="">
                  <a className="hover:text-red-500 cursor-pointer font-bold">
                  <span className="fab fa-sign-out mr-1"></span>
                    Logout
                  </a>
                </li>
              </ul>
              {/* <div className="">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-md">
                FLAT 10% OVER ALL IPHONE
                </button>
            </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
