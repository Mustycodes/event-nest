"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "../Logo";
import { useAuth } from "@/context/AuthContext";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header>
      <nav className='bg-white border-b border-gray-200 w-full'>
        <div className='mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center'>
          <Logo />
          <div className='flex items-center lg:order-2'>
            {!user.isAuthenticated ? (
              <>
                <Link
                  href='/sign-in'
                  className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'
                >
                  Log in
                </Link>
                <Link
                  href='#'
                  className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'
                >
                  Get started
                </Link>
                <button
                  type='button'
                  className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
                  aria-controls='mobile-menu'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </>
            ) : (
              <UserMenu />
            )}
          </div>

          <NavLinks />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
