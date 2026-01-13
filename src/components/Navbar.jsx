import React, { useState } from "react";
// React for component, useState for mobile menu open/close

import { Link, useNavigate } from "react-router-dom";
// Link = page reload ke bina navigation
// useNavigate = JS se route change karna

import { assets } from "../assets/assets";
// logo image yahin se aa rahi hai

import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
// icons (hamburger, search, close, ticket)

import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";
// Clerk hooks for auth (login status, profile button)

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  // mobile menu open hai ya band – uska state

  const { user } = useUser();
  // user = null → logged out
  // user = object → logged in

  const { openSignIn } = useClerk();
  // login button click pe Clerk ka sign-in modal open karega

  const navigate = useNavigate();
  // code ke through page change karne ke liye
  const {favoriteMovies} = useAppContext();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      {/* fixed navbar → hamesha top pe visible */}

      {/* LEFT SECTION : LOGO */}
      <Link to={"/"} className="max-md:flex-1">
        {/* logo pe click → home page */}
        <img src={assets.logo} className="w-36 h-auto" alt="logo" />
      </Link>

      {/* CENTER SECTION : MENU LINKS */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg
          z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8
          md:px-8 py-3 max-md:h-screen backdrop-blur bg-black/70
          md:bg-white/10 md:border border-gray-300/20 md:rounded-full
          overflow-hidden transition-[width] duration-300 ${
          isOpen ? "max-md:w-full" : "max-md:w-0"
          }`}

      >
        {/* mobile me menu width state se control hota hai */}

        {/* CLOSE ICON (sirf mobile ke liye) */}
        <XIcon
          className="w-6 h-6 md:hidden absolute top-6 right-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          // menu close karne ke liye
        />

        {/* NAV LINKS */}
        <Link
          to={"/"}
          onClick={() => {
            window.scrollTo(0, 0); // page top pe le jaata hai
            setIsOpen(false);      // mobile menu band
          }}
        >
          Home
        </Link>

        <Link
          to={"/movies"}
          onClick={() => {
            window.scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Movies
        </Link>

        <Link
          to={"/"}
          onClick={() => {
            window.scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Theaters
        </Link>

        <Link
          to={"/"}
          onClick={() => {
            window.scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Releases
        </Link>

         {favoriteMovies.length> 0 && <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to={"/favorite"}
        >
          Favorites
        </Link>}
        {/* Favorites page pe navigation */}
      </div>

      {/* RIGHT SECTION : SEARCH + AUTH */}
      <div className="flex gap-8 items-center">

        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        {/* search icon sirf desktop pe */}

        {!user ? (
          // agar user logged-in nahi hai
          <button
            onClick={openSignIn}
            // Clerk ka login popup open hota hai
            className="px-4 py-1 sm:px-7 sm:py-2 bg-[#F84565]
            hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          // agar user logged-in hai
          <UserButton>
            {/* Clerk ka profile button */}
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
                // profile menu se bookings page pe navigation
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      {/* HAMBURGER ICON (mobile only) */}
      <MenuIcon
        className="cursor-pointer w-8 h-8 max-md:ml-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        // menu open / close toggle
      />
    </div>
  );
};

export default NavBar;
