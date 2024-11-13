import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary011 p-8 rounded-t-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center  justify-center md:justify-between  md:items-start ">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 w-fit flex flex-col items-center md:items-start ">
          <h1 className="text-3xl font-stylishBold text-textPrimary011 mb-4  text-center md:text-start">
            kayujati
          </h1>
          <p className="text-textSecondary011 mb-4 w-full md:w-3/5  text-center md:text-start">
            We believe that good design should be easy to accept and comfortable
            to enjoy
          </p>
        </div>
        <div className="w-fit mb-8 md:mb-0 ">
          <nav className="text-textSecondary011 tracking-wide text-lg font-stylish ">
            <ul className="flex flex-col w-full text-nowrap justify-center md:justify-end  md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer w-fit">About Us</li>
              <li className="cursor-pointer w-fit">Services</li>

              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between  gap-16 items-end mt-10 ">
        <div className="w-full md:w-1/2 flex justify-between items-end ">
          <div className="flex flex-row space-y-4 items-end gap-4">
            <div className="flex flex-col space-y-4">
              <button className="w-10 h-10 rounded-full bg-secondary011 flex items-center justify-center">
                <FaFacebookF className="text-lg text-textPrimary011" />
              </button>
              <button className="w-10 h-10 rounded-full bg-secondary011 flex items-center justify-center">
                <FaLinkedin className="text-lg text-textPrimary011" />
              </button>
              <button className="w-10 h-10 rounded-full bg-secondary011 flex items-center justify-center">
                <FaTiktok className="text-lg text-textPrimary011" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <button className="w-10 h-10 rounded-full bg-secondary011 flex items-center justify-center">
                <FaXTwitter className="text-lg text-textPrimary011" />
              </button>
              <button className="w-10 h-10 rounded-full bg-secondary011 flex items-center justify-center">
                <FaInstagram className="text-lg text-textPrimary011" />
              </button>
            </div>
          </div>

          <p className="text-sm text-textSecondary011 mt-6">
            © 2021 — Copyright <br /> All Rights reserved
          </p>
        </div>

        <div className="w-full md:w-1/2 h-full md:space-y-8 ">
          <div className="w-full flex justify-start">
            <div className="mb-0">
              <h2 className="text-textPrimary011 font-stylish mb-4">
                Contact Us
              </h2>
              <p className="text-textSecondary011">+1 (999) 888-77-66</p>
              <p className="text-textSecondary011">hello@kayujati.com</p>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="m-0">
              <h2 className="text-textPrimary011 font-stylish mb-4">
                Location
              </h2>
              <p className="text-textSecondary011">
                483920, Moscow, <br />
                Myasnitskaya 22/2/5, Office 4
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <h2 className="text-textPrimary011 font-stylish mb-4">
                Languages
              </h2>
              <div className="flex space-x-2 text-textSecondary011">
                <p>En</p>
                <p>Es</p>
                <p>Fr</p>
                <p>De</p>
                <p>Ru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
