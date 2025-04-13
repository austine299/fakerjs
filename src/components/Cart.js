import React, {useContext} from "react";
import {useCart } from "./CartContext"

function Cart() {
  const {cart, incrementItem, decrementItem} = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="">
      <div className="">
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <img src={item.image} className="w-14 rounded-lg"/>
                <span className="text-gray-600 font-bold">{item.name}</span> 
                <div className="flex gap-2 sm:gap-5">
                  <button onClick={() => decrementItem (item.id)} className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold text-2xl w-7 h-fit
                  ">-</button> 
                  <span className="text-gray-600 font-bold">{item.quantity}</span> 
                  <button onClick={() => incrementItem(item.id)} className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-700 text-white font-bold text-2xl w-7 h-fit">
                    +
                  </button>
                </div>
                
                <span className="text-gray-600 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <hr className="mt-2"/>
        <p className=" w-full flex justify-end text-red-600 font-bold mt-4">
          Total ${total.toFixed(2)}
        </p>
        <div className=" flex justify-center">
          <button className="bg-red-500 hover:bg-red-700 py-1 px-8 text-white font-bold rounded-md" >Check Out</button>
        </div>
        
      </div>
    </div>
    
  )
}

export default Cart