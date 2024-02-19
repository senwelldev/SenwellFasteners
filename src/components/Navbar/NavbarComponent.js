import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import "../Navbar/Navbar.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleNav = () => {
      const nav = document.getElementById("stickyNav");
      const nav2 = document.getElementById("first-nav");
      const scroll = window.scrollY;

      if (scroll > 10) {
        nav.classList.add("sticky");
        nav2.classList.add("hidden");
      } else {
        nav.classList.remove("sticky");
        nav2.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", handleNav);

    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  }, []);

  const toggleClose = () => {
    setIsOpen((prev) => !prev);
  };

  const isBlogPage=()=>{
    return location.pathname.includes('/blog')
  }
  const isProductPage=()=>{
    return location.pathname.includes('/product')
  }
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 view">
            <nav
              className="navbar"
              style={{ backgroundColor: "#698d9e"}}
              id="first-nav"
            >
              <div className="small-nav-items text-white d-flex align-items-center">
                <p className="email px-1">Email: <a href="mailto:info@senwellsys.com" className="text-decoration-none text-white">info@senwellsys.com</a> | Phone Number: <a href="tel:+91-9175676403" className="text-decoration-none text-white">+91-9175676403</a></p>
              </div>
            </nav>
          </div>

          <nav className={`navbar navbar-expand-lg`} id="stickyNav">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                <img src="https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/Fasteners%20logo.webp?alt=media&token=7c96b907-baba-428a-a93f-8cedf81254a6" className="logo mx-2" alt="..."  loading="lazy"/>
              </Link>
              <button
                className="navbar-toggler border border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent "
                aria-expanded="false"
                aria-label="Toggle navigation "
                onClick={() => toggleClose()}
              >
                <span className="navbar-toggler-icon border border-0"></span>
              </button>

              <div
                className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 "
                  onClick={() => toggleClose()}
                >
                  <li
                    className={`nav-item ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link mx-3 fw-medium" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/industries" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="nav-link mx-3 fw-medium"
                      to={"/industries"}
                    >
                      Industries
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isProductPage() ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link mx-3 fw-medium" to={"/products"}>
                      Products
                    </Link>
                  </li>
                  <li className={`nav-item ${isBlogPage() ? "active" : ""}`}>
                  <Link className="nav-link mx-3 fw-medium" to={"/blogs"}>
                    Blogs
                  </Link>
                </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link mx-3 fw-medium" to={"/about"}>
                      About Us
                    </Link>
                  </li>
                  
                  <li
                    className={`nav-item ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link mx-3 fw-medium" to={"/contact"}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
