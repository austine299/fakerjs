import React from 'react'

function ProductCard({product, onClick}) {
  return (
    <div className='w-full bg-white shadow-xl rounded-md p-5'>
        <img className="w-full rounded-md" src={product.image} alt={product.name}/>
        <h2 className="mt-2 text-slate-500 text-2xl font-semibold">{product.product}</h2>
        <div className="text-red-500 font-semibold">${product.price}</div>
        <div className="text-center">
          <button className="bg-yellow-500 px-8 sm:px-3 py-1 rounded-md font-bold hover:bg-yellow-300" onClick={onClick}>Add To Cart</button>
        </div>
        

    </div>
  )
}

export default ProductCard