import React, { useContext, useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { useCart } from "./CartContext";
import Navbar from "./navBar/Navbar";
import { Link } from "react-router-dom";

const generateProduct = (count = 12) => {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    product: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    material: faker.commerce.productMaterial(),
    image: faker.image.urlPicsumPhotos({
      width: 300,
      height: 200,
    }),
  }));
};

const ads = (count = 1) => {
  return Array.from({ length: count }).map(() => ({
    image: faker.image.urlPicsumPhotos({ width: 300, height: 200 }),
  }));
};

const personalData = (count = 1) => {
  return Array.from({ length: count }).map(() => ({
    person: faker.image.personPortrait(),
    fullName: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    bio: faker.person.bio(),
    description: faker.commerce.productDescription(),
  }));
};

function ProductList() {
  const [products, setProducts] = useState([]);
  const [person, setPerson] = useState([]);
  const [advert, setAdvert] = useState([]);

  useEffect(() => {
    setProducts(generateProduct());
  }, []);

  useEffect(() => {
    setPerson(personalData());
  }, []);

  useEffect(() => {
    setAdvert(ads());
  }, []);

  const { AddToCart, shop, setShop, cartModal, setCartModal, setMobileNav} = useCart();
  return (
    <div onClick={() => setMobileNav(true)}>
      {cartModal && (
        <div className="flex justify-center w-full h-full absolute left-0 z-10">
          <div className="bg-white p-2 sm:p-6 mt-8 h-fit w-full sm:w-3/5 shadow-lg shadow-black rounded-md relative ">
            <div className="absolute right-0 top-0 px-2">
              <button
                onClick={() => setCartModal(false)}
                className="font-bold text-2xl hover:text-red-600"
              >
                X
              </button>
            </div>
            <div className="mt-10">
              <Cart />
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white">
        {shop ? <></> : <div className="flex flex-col-reverse sm:flex-row w-full h-auto justify-around py-8 px-5">
          <div className=" flex flex-col gap-3 ">
            <span className="text-xl text-red-500">Silver Aluminum</span>
            <h1 className="text-4xl font-bold">APPLE WATCH</h1>
            <span className="text-gray-400">30% off your first oder</span>
            <Link to="shop" onClick={() =>setShop(true)} className="bg-red-500 text-white hover:text-yellow-400 w-fit py-1 px-5 rounded-md ">
              Shop Now
            </Link>
          </div>
          <div className=" h-auto">
            {advert.map((adverts) => (
              <img
                className=" w-full sm:w-full opacity-50"
                src={adverts.image}
              />
            ))}
          </div>
        </div>}
        <div className="flex flex-col sm:flex-row">
          <div className="p-6">
            {shop ? <></>:<div className="bg-blue-100 w-full flex justify-between p-2 items-center rounded-sm">
              <h1 className="text-2xl font-bold">Product List</h1>
              <div className=" flex gap-3">
                <a href="#" className="font-semibold hover:text-red-600">
                  New
                </a>
                <a href="#" className="font-semibold hover:text-red-600">
                  Featured
                </a>
                <a href="#" className="font-semibold hover:text-red-600">
                  Top Selling
                </a>
              </div>
            </div>}
            {shop ? <div className="w-full py-6 grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => AddToCart(product)}
                  />
                ))}
              </div>:<div className="w-full py-6 grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => AddToCart(product)}
                  />
                ))}
              </div>
            }
          </div>
          {shop ? <></>: <div className="w-full sm:w-1/3 h-full  flex flex-col mt-6 gap-3">
            <div className="w-full  p-1 bg-blue-100">
              <div className="w-full flex justify-center font-bold p-2 items-center rounded-sm">
                OUR TESTMONIAL
              </div>
              <div className="bg-white h-2/5 flex items-center">
                {person.map((personal) => (
                  <div className="flex flex-col items-center justify-center gap-3 p-5">
                    <img className="w-32" src={personal.person} />
                    <h2 className="text-center text-2xl font-bold">
                      {personal.fullName}
                    </h2>
                    <h2 className="text-center  text-red-500 font-bold">
                      {personal.jobTitle}
                    </h2>
                    <p className="text-center font-bold">
                      {personal.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-3 mt-6 p-5 bg-blue-100">
              <h2 className="font-semibold text-2xl">NEWSLETER</h2>
              <h4 className="text-gray-400 font-semibold ">
                Join Our Mailling List
              </h4>
              <input
                className="w-full border bg-blue-100 rounded-sm border-gray-500 p-2"
                type="text"
                placeholder="E-mail"
              />
              <button className="bg-yellow-300 px-4 py-1 font-semibold hover:bg-yellow-500">
                Subscribe
              </button>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="fab fa-facebook border border-red-500 p-2 rounded-full text-red-500 hover:text-red-200 hover:bg-red-600"
                ></a>
                <a
                  href="#"
                  className="fab fa-instagram border border-red-500 p-2 rounded-full text-red-500 hover:text-red-200 hover:bg-red-600"
                ></a>
                <a
                  href="#"
                  className="fab fa-twitter border border-red-500 p-2 rounded-full text-red-500 hover:text-red-200 hover:bg-red-600"
                ></a>
              </div>
            </div>
          </div> }
        </div>
      </div>
    </div>
  );
}

export default ProductList;
