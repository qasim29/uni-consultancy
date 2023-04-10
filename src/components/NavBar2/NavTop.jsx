import React from "react";

import "./NavBar.css";

const NavTop = () => {
  return (
    <div className="navbar md:p-[1rem] " data-theme="synthwave">

      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl "><i className="fa fa-graduation-cap"></i>Cookie Türkiye</a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-map" aria-hidden="true"></i>
              See Location
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
              coockieTurkey@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-[#00775b]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-phone" aria-hidden="true"></i>
              +92 3183706093
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-0 md:px-5 md:gap-3 sm:gap-0 sm:p-0">
          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/TimesConsultant"
              className="hover:bg-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavTop;
