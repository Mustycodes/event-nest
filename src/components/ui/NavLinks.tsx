"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "All Events", href: "/events" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
      <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`block py-2 pr-4 pl-3 lg:p-0 rounded ${
                  isActive
                    ? "lg:text-orange-500"
                    : "text-white lg:text-gray-700"
                }
                ${
                  href === "/"
                    ? "bg-orange-500 lg:bg-transparent"
                    : "border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:hover:bg-transparent lg:hover:text-orange-500"
                }
                    `}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
