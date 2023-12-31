"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";
import "./header.css";

const Header2 = () => {
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active" : "";
  };

  //   const logoImage = scrolled ? logoLight : logoDark;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header2">
      <nav
        className={`navbar navbar-expand-lg fixed-top  ${
          menuOpen ? "show" : ""
        }`}
      >
        <div className="container">
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            <h1>Let's Learn Music</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-header"
            aria-controls="main-header"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu} // Toggle mobile menu on button click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </button>
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="main-header"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className={`nav-item ${isActive("/")}`}>
                <Link href="/" className="nav-link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isActive("/about")}`}>
                <Link href="/about" className="nav-link" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className={`nav-item ${isActive("/courses")}`}>
                <Link href="/courses" className="nav-link" onClick={closeMenu}>
                  Courses
                </Link>
              </li>
              <li className={`nav-item ${isActive("/contact")}`}>
                <Link href="/contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header2;
