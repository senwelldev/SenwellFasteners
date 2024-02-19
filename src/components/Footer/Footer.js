import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Linkedin,
  Envelope,
  GeoAlt,
  Youtube,
  Twitter,
} from "react-bootstrap-icons";
// import logo from "../../assets/Fasteners logo.webp";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const productList = [
    {
      id: 2, // these id's are same as the category id of products in db.json
      title: "Screws",
    },
    {
      id: 1,
      title: "Nuts",
    },
    {
      id: 4,
      title: "Inserts",
    },
    {
      id: 5,
      title: "Spacers",
    },
    {
      id: 3,
      title: "Washers",
    },
    {
      id: 6,
      title: "Anchors",
    },
    {
      id: 7,
      title: "Pins",
    },
    {
      id: 8,
      title: "Rivets",
    },
  ];
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted ">
        <section className="footer bg-color pt-5">
          <Container>
            <Row>
              <Col xs={12} md={3}>
                <div className="company-logo">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/Fasteners%20logo.webp?alt=media&token=7c96b907-baba-428a-a93f-8cedf81254a6"
                    alt="Company Logo"
                    loading="lazy"
                  />
                </div>
                <div className="desc pt-4 text-start">
                  Start your business venture with our cutting-edge technology.
                  We provide best quality Fasteners.
                </div>
                <div className="social-icons">
                  <span>
                    <a
                      href="https://www.facebook.com/profile.php?id=100068983571168"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="soi"/>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.instagram.com/senwellgroup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="p-2"
                    >
                      <Instagram className="soi"/>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.linkedin.com/company/senwell-exports-private-limited/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="soi"/>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://twitter.com/SenwellPune"
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        class="bi bi-twitter-x soi"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.youtube.com/@senwellgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="p-3"
                    >
                      <Youtube
                      className="soi"
                      //  width="35" height="35"
                       />
                    </a>
                  </span>
                </div>
              </Col>

              <Col xs={12} md={3}>
                <div className="company-info text-start">
                  <h3>Senwell Fasteners</h3>
                  <ul className="hover">
                    <li className="pb-1">
                      <Link to={"/"} className="link">
                        Home
                      </Link>
                    </li>
                    <li className="pb-1">
                      <Link to="/industries" className="link">
                        Industries
                      </Link>
                    </li>
                    <li className="pb-1">
                      <Link to="/products" className="link">
                        Products
                      </Link>
                    </li>
                    <li className="pb-1">
                      <Link to="/blogs" className="link">
                        Blogs
                      </Link>
                    </li>
                    <li className="pb-1">
                      <Link to="/about" className="link">
                        About Us
                      </Link>
                    </li>
                    <li className="pb-1">
                      <Link to="/contact" className="link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col xs={12} md={3}>
                <div className="product-categories-list text-start m-0">
                  <h3>Products</h3>
                  <ul className="hover">
                    {productList.map((item, index) => {
                      return (
                        <li
                          onClick={() =>
                            navigate(`/productCategory/${item.id}`)
                          }
                        >
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Col>

              <Col xs={12} md={3}>
                <div className="contact-info text-start">
                  <h3>Contact Information</h3>
                  <p>
                    <GeoAlt size={20} /> Office Address: 7th Floor, Gera's
                    Imperium Alpha, Near EON IT Park, Kharadi, Pune,
                    Maharashtra-411014
                  </p>
                  {/* <p>
                    <GeoAlt size={20} /> Factory Address: Your Factory Address
                    Here
                  </p> */}
                  <p>
                    <Envelope size={20} /> Email:{" "}
                    <a
                      href="mailto:info@senwellsys.com"
                      className="text-decoration-none footerMail"
                    >
                      info@senwellsys.com
                    </a>
                  </p>
                </div>
                <div className="news p-3 mt-3">
                  <h2>Newsletter</h2>
                  <p>
                    Sign up to our Newsletter to stay updated to our News &
                    Innovations
                  </p>
                  <Link to={"/newsForm"}>
                    <button className="button button2 btn border-none">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div
          className="text-center p-4 text-white bg-color"
          style={{ borderTop: "0.1rem solid white" }}
        >
          Copyright &copy; {new Date().getFullYear()} :
          <a className="text-reset p-1 text-decoration-none" href="#">
            senwellfasteners.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
