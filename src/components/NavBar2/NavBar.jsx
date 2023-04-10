import React from "react";

const NavBar = () => {
  return (
    <div className="navbar " data-theme="synthwave">

      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Universities</a>
            </li>
            <li>
              <a>What We Do</a>
            </li>
            <li>
              <a>Why Choose Us</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div>



      <div className="navbar-center hidden md:flex md:justify-center md:w-full">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Universities</a>
          </li>
          <li>
            <a>What We Do</a>
          </li>
          <li>
            <a>Why Choose Us</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end md:hidden">
        <ul className="menu menu-horizontal sm:px-0 sm:gap-0 sm:p-0 ">
          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-map text-[14px]" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope-open-o text-[14px]" aria-hidden="true"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-[#00775b]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-phone text-[14px]" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
