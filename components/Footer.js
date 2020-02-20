import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer-component">
      <section className="footer">
        <div className="footer-wrap">
          <div className="footer-quicklinks">
            <h6>Quick Links</h6>
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
            </ul>
          </div>

          {/* --- FOOTER CONTACT --- */}

          <div className="footer-Contact">
            <h6>Contact Info</h6>
            <ul>
              <li>
                <i
                  className="fa fa-location-arrow footer-icon"
                  aria-hidden="true"
                ></i>
                <div>Lagos State, Nigeria</div>
              </li>
              <li>
                {" "}
                <i className="fa fa-phone footer-icon" aria-hidden="true"></i>
                <div>0701-235-4756</div>
              </li>
              <li>
                <i
                  className="fa fa-envelope footer-icon"
                  aria-hidden="true"
                ></i>
                <div>email@example.com</div>
              </li>
            </ul>
            <div className="footer-contact-socials">
              <ul>
                <li>
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                </li>
                <li>
                  {" "}
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-services">
            <h6>Services</h6>
            <ul>
              <li>Laundry</li>
              <li>Pest Control</li>
              <li>Office Cleaning</li>
              <li>Home Cleaning</li>
            </ul>
          </div>
        </div>
        <div className="footer-attribution">
          <div>
            {" "}
            &copy; Excellent Services, {new Date().getFullYear()}. Designed by{" "}
            <a href="http://segunos.tk">SegunOS</a>{" "}
          </div>
        </div>
      </section>

      {/* #### CSS IN JSX STYLES  #### */}

      <style jsx>{`
        .footer {
          background: silver;
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 14%);
          -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 14%);
        }
        .footer-attribution {
          text-align: center;
          font-size: 13px;
        }

        .footer-attribution a {
          color: black;
          cursor: pointer;
        }

        .footer-wrap {
          display: grid;
          display: -moz-grid;
          display: -ms-grid;
          grid-template-columns: 1fr 1fr;
          margin: auto;
          width: 90%;
          padding-top: 60px;
        }

        .footer-wrap h6 {
          color: blue;
        }
        .footer-wrap a {
          color: black;
        }
        .footer-quicklinks {
          text-align: justify;
        }

        .footer-Contact {
          text-align: justify;
        }

        .footer-Contact ul li {
          display: flex;
        }
        .footer-Contact ul li div {
          margin-top: -1px;
        }
        .footer-contact-socials ul {
          display: flex;
          display: -ms-flexbox;
          display: -webkit-flex;
          margin-left: -5px;
        }

        .footer-Contact .footer-icon {
          margin-right: 9px;
          display: none;
        }

        .footer-contact-socials ul li {
          margin-top: -10px;
          margin-left: 5px;
          font-size: 18px;
        }
        .footer-services {
          text-align: justify;
        }

        @media only screen and (min-width: 760px) {
          .footer-attribution {
            font-size: 15px;
          }

          .footer-attribution a {
            padding: 10px 0;
          }

          .footer-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            padding-top: 100px
          }

          .footer-Contact {
            margin: 0 100px;
            margin-top: -10px;
          }
        }

        @media only screen and (min-width: 1020px) {
          .footer-attribution {
            font-size: 18px;
            padding: 15px 0;
          }

          .footer-Contact {
            margin: 0 180px;
            margin-top: -20px;
          }

          .footer-wrap {
            line-height: 1.9;
          }
        }

        @media only screen and (min-width: 1400px) {
          .footer-Contact {
            margin: 0 280px;
          }

          .footer-wrap h6 {
            font-size: 22px;
          }
        }

        @media only screen and (min-width: 2500px) {
          .footer-Contact {
            margin: 0 320px;
            font-size: 22px;
          }

          .footer-wrap h6 {
            font-size: 25px;
          }
        }
      `}</style>
    </div>
  );
}
