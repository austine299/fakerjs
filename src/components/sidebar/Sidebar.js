import React from 'react'
import { useCart } from '../CartContext'

function Sidebar() {
    const {sidebar} = useCart()
  return (
    <div className="bg-gray-100 w-full h-fit px-1 ">
        {sidebar ? <></>:<h2 className="p-2 sm:p-5 sm:text-xl font-bold text-gray-500">ALL CATEGORIES</h2>}
        <ul className="flex flex-col gap-3 bg-white text-gray-400 font-bold p-7">
          <li className="hover:text-yellow-500">
            <a href="#" className="">
              All
            </a>{" "}
          </li>
          <li className="hover:text-yellow-500">
            <a href="#" className="">
              TV
            </a>{" "}
          </li>
          <li className="hover:text-yellow-500">
            <a href="#" className="">
              LAPTOP
            </a>{" "}
          </li>
          <li className="hover:text-yellow-500">
            <a href="#" className="">
              WATCH
            </a>{" "}
          </li>
          <li className="hover:text-yellow-500">
            <a href="#" className="">
              PHONE
            </a>{" "}
          </li>
          <li className="hover:text-yellow-500">
            <a href="#" className="">
              HEADPHONE
            </a>{" "}
          </li>
          <li className="hover:text-yellow-500">
            <a href="#" className="">
              SPEAKER
            </a>{" "}
          </li>
          <li className="hover:text-yellow-500">
            <a href="#" className="">
              ELECTRONICS
            </a>{" "}
          </li>
        </ul>
      </div>
  )
}

export default Sidebar