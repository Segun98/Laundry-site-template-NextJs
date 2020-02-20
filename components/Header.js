import Link from "next/link";
import { useState } from "react";

function Header() {
  const [hamburger, setHamburger] = useState(true);

  function toggleHamburger() {
    setHamburger(prevMode => !prevMode);
  }

  return (
    <div className="header-component">
      <div className="header-contact">
        <div className="header-contact-wrap">
          <div className="header-phone-contact">
            <div>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span className="header-phone-one">0704-123-4567 </span>
              {/* <br /> <span className="header-phone-two"> 0801-234-5678</span> */}
            </div>
            <div>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span className="header-email">email@example.com</span>
            </div>
          </div>
          <div className="header-socials">
            <i className="fab fa-facebook" aria-hidden="true"></i>
            <i className="fab fa-twitter" aria-hidden="true"></i>
            <i className="fab fa-instagram" aria-hidden="true"></i>
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div className="header-nav">
        <div className="header-nav-wrap">
          <div className="header-logo">
            <Link href="/">
              <a>LOGO</a>
            </Link>
          </div>
          <div className="header-hamburger" onClick={toggleHamburger}>
            <a>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </div>
          <div
            className={
              hamburger ? "header-nav-links" : "header-nav-links open-hamburger"
            }
          >
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>{" "}
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <button onClick={toggleHamburger}>
                  <Link href="/contact#contact-page-form">
                    <a>Book a Service</a>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* #### CSS IN JSX STYLES  #### */}

      <style jsx>{`
        .header-component {
          line-height: 1.3;
        }
        .header-contact {
          background-color: rgb(26, 25, 25);
          color: white;
          font-size: 12px;
        }

        .header-contact-wrap {
          display: flex;
          display: -webkit-flex;
          display: -ms-flexbox;
          justify-content: space-between;
          margin: auto;
          width: 98%;
          padding: 10px 0;
        }

        .header-phone-contact {
          display: flex;
          display: -webkit-flex;
          display: -ms-flexbox;
        }
        .header-phone-contact .fa-envelope {
          margin-left: 10px;
        }

        .header-phone-one {
          padding-left: 5px;
        }

        .header-phone-two {
          padding-left: 18px;
        }

        .header-email {
          padding-left: 5px;
        }

        .header-socials {
          display: flex;
          display: -webkit-flex;
          display: -ms-flexbox;
          align-items: center;
          justify-content: space-between;
          width: 80px;
          font-size: 16px;
          cursor: pointer;
        }

        .header-socials .fa-facebook:hover {
          color: blue;
        }

        .header-logo {
          font-size: 30px;
        }
        .header-logo a {
          text-decoration: none;
          color: #333;
        }

        .header-nav-wrap {
          display: flex;
          display: -webkit-flex;
          display: -ms-flexbox;
          justify-content: space-between;
          margin: auto;
          width: 95%;
          padding: 2px 0;
        }

        .header-nav-links {
          position: absolute;
          margin-top: 40px;
          left: 0;
          background-color: white;
          width: 200px;
          height: 100vh;
          z-index: 999;
          margin-left: -202px;
          transition: ease-in-out 0.5s;
        }

        /* TOGGLE HAMBURGER */
        .header-nav-links.open-hamburger {
          transform: translateX(200px);
          transition: ease-in-out 0.5s;
        }

        /* END  */

        .header-nav-links ul {
          margin-top: 20px;
        }

        .header-nav-links li {
          list-style: none;
          padding: 10px 0;
          display: flex;
          display: -webkit-flex;
          display: -ms-flexbox;
          justify-content: center;
          align-items: center;
        }
        .header-nav-links li a {
          color: #333;
          font-size: 20px;
          text-decoration: none;
        }

        .header-nav-links li button {
          border: none;
          background: #333;
          padding: 10px 10px;
          cursor: pointer;
          border-radius: 25px;
          width: 150px;
        }

        .header-nav-links li button a {
          font-weight: bold;
          font-size: 15px;
          color: white;
        }
        .header-hamburger {
          font-size: 25px;
          margin-top: 5px;
          cursor: pointer;
        }

        // ------ MEDIA QUERIES FOR HEADER COMPONENT

        @media only screen and (min-width: 760px) {
          .header-hamburger {
            display: none;
          }

          .header-component {
            line-height: 1.5;
          }
          .header-contact {
            font-size: 18px;
          }

          .header-contact-wrap {
            width: 96%;
          }

          .header-phone-contact .fa-envelope {
            margin-left: 15px;
          }

          .header-phone-two {
            padding-left: 20px;
          }

          .header-email {
            padding-left: 5px;
          }

          .header-socials {
            width: 120px;
            font-size: 22px;
          }

          // NAVIGATION

          .header-nav-wrap {
            display: grid;
            display: -moz-grid;
            display: -ms-grid;
            grid-template-columns: 1fr 1fr;
            padding: 2px 0;
          }

          .header-nav-links {
            position: static;
            margin-top: 0px;
            width: 0;
            height: 0;
            margin-left: 0;
          }

          /* TOGGLE HAMBURGER */
          .header-nav-links.open-hamburger {
            position: static;
            margin-top: 0px;
            width: 0;
            height: 0;
            margin-left: 0;
            transform: translateX(0px);
          }

          /* END  */

          .header-nav-links ul {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            margin-top: -3px;
            margin-left: -130px;
          }

          .header-nav-links li {
            margin: 0 10px;
          }

          .header-nav-links li button {
            padding: 8px 2px;
            width: 150px;
            margin-top: -5px;
          }

          .header-nav-links li button a {
            font-size: 15px;
          }
        }

        //  1024 SCREEN IPAD PRO AND SMALL LAPTOPS

        @media only screen and (min-width: 1020px) {
          .header-nav-links li a {
            font-weight: bolder;
          }
          .header-contact {
            font-size: 16px;
          }

          .header-contact-wrap {
            width: 94%;
          }

          .header-phone-two {
            padding-left: 24px;
          }

          .header-socials {
            width: 140px;
            font-size: 22px;
          }

          // NAVIGATION

          .header-nav-wrap {
            gap: 200px;
            grid-gap: 200px;
          }

          .header-logo {
            margin-left: 15px;
          }
          .header-nav-links li {
            margin: 0 15px;
            text-transform: uppercase;
          }

          .header-nav-links li a {
            font-size: 15px;
          }

          .header-nav-links li button {
            padding: 8px 2px;
            width: 150px;
            margin-top: -5px;
          }

          .header-nav-links li button a {
            font-size: 15px;
          }
        }

        @media only screen and (min-width: 1400px) {
          .header-contact-wrap {
            width: 94%;
          }
          // NAVIGATION

          .header-nav-wrap {
            gap: 590px;
            grid-gap: 590px;
          }

          .header-logo {
            margin-left: 20px;
          }
        }

        @media only screen and (min-width: 2500px) {
          .header-nav-wrap {
            gap: 1500px;
            grid-gap: 1500px;
          }

          .header-logo {
            margin-left: 80px;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
