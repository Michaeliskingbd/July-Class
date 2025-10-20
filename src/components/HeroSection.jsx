import { FaUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen bg-red-300 bg-[url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')] bg-cover bg-center ">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <nav className="flex justify-between bg-black bg-opacity-5 p-6 items-center text-white">
          <div className="flex items-center z-10  ">
            <img src={Logo} alt="logo" className="w-40" />
            <ul className="lg:flex gap-6 uppercase hidden">
              <li className="cursor-pointer">Everything</li>
              <li>women</li>
              <li>men</li>
              <li>accessories</li>
            </ul>
          </div>
          <div className="flex items-center gap-6 z-10 ">
            <ul className="lg:flex items-center gap-6 uppercase hidden">
              <li>About</li>
              <li>Contact us</li>
            </ul>
            <span className="ml-4">$0.00</span>
            <div className="relative">
              <HiOutlineShoppingBag className="text-xl" />
              <div className="top-[-10px] right-[-10px] absolute bg-white size-5 rounded-full text-black text-center text-sm font-semibold">
                0
              </div>
            </div>

            <FaUser className="text-white text-xl lg:block hidden" />
            <IoMdMenu className="lg:hidden block" />
          </div>
        </nav>
        <div className="w-full h-[80%] flex items-center">
          <div className="text-white space-y-6 px-6 z-50">
            <h1 className="text-6xl font-semibold">
              Raining Offers For <br /> Hot Summer!
            </h1>
            <h4 className="text-2xl font-semibold">25% Off On All Products</h4>
            <div className="space-x-4">
              <button className="bg-white text-black py-4 px-5 font-semibold hover:bg-black">
                SHOP NOW
              </button>
              <button className="border-2 border-white py-[14px] px-5">
                FIND MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* //CATEGORY */}
    </>
  );
};

export default HeroSection;
