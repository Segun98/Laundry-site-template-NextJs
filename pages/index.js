import Head from "next/head";
import Layout from "../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Home</title>      
      </Head>
      <div className="home-page">
        <section className="intro">
          <div className="intro-wrap">
            <h2>Welcome to Multi-Solution Services.</h2>
            <h5>
              We are the number one multi-service delivery company in Nigeria
              handling all your domestic and office needs
            </h5>
            <button><Link href="/contact"><a>Contact Us</a></Link></button>
          </div>
        </section>
        {/* <section className="home-slideshow">
          <Carousel interval={6000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/office-cleaning.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="carousel-caption">
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/laundry-cleaning.jpg"
                alt="second slide"
              />

              <Carousel.Caption>
                <div className="carousel-caption">
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/washing-machines.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="carousel-caption">
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section> */}

        <section className="index-about-us">
          <div className="about-us-header">
            <h3 className="index-about-heading">About Us</h3>
            <div className="heading-dash"></div>
          </div>
          <div className="about-us-wrap">
            <div className="about-us-image">
              <img src="/images/hanged-suits-laundry.jpg" alt="about-img" />
            </div>
            <div className="about-us-text">
              <h4>We are passionate</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                nobis nemo at magni, excepturi id omnis deserunt fugit
                voluptates voluptas lorem ipsum dolor sit amet lorem12 .. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                blanditiis itaque commodi! Odio pariatur, enim iusto magnam
                praesentium sequi ullam!
              </p>
              <button>
                <Link href="/about">
                  <a>Read More</a>
                </Link>
              </button>
            </div>
          </div>
        </section>

        {/* #### SERVICES SECTION ### */}

        <section className="index-services">
          <div className="index-services-header">
            <h3>Our Services</h3>
            <div className="heading-dash"></div>
            <div className="index-services-subhead">
              <h4>We deliver top quality services</h4>
              <p>
                We are commited to meeting Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quas.
              </p>
            </div>
          </div>
          <div className="index-services-wrap">
            <div className="service">
              <div className="service-icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="service-text">
                <h5>Laundry Services</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi rerum, voluptas vitae repudiandae beatae sint
                </p>
              </div>
            </div>
            <div className="service">
              <div className="service-icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="service-text">
                <h5>Office Cleaning Services</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi rerum, voluptas vitae repudiandae beatae sint
                </p>
              </div>
            </div>
            <div className="service">
              <div className="service-icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="service-text">
                <h5>Fumigation Services</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi rerum, voluptas vitae repudiandae beatae sint
                </p>
              </div>
            </div>
            <div className="service">
              <div className="service-icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="service-text">
                <h5>House-Keeping Services</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi rerum, voluptas vitae repudiandae beatae sint
                </p>
              </div>
            </div>
          </div>
          <div className="index-services-buttons">
            <button>
              <Link href="/services">
                <a>More Services</a>
              </Link>
            </button>
            <button>
              <Link href="/contact#contact-page-form">
                <a>Book a Service</a>
              </Link>
            </button>
          </div>
        </section>

        <section className="index-quick-contact">
          <div className="quick-contact-wrap">
            <div className="quick-contact-item">
              <div className="quick-contact-icon">
                <i className="fa fa-envelope icon" aria-hidden="true"></i>
              </div>
              <div className="quick-contact-text">
                <p>Have a question? Call us now.</p>
                <p>+234-823-2936-912</p>
              </div>
            </div>

            <div className="quick-contact-item">
              <div className="quick-contact-icon">
                <i className="fa fa-phone icon" aria-hidden="true"></i>
              </div>
              <div className="quick-contact-text">
                <p>We are open Monday-Saturday</p>
                <p>Mon - Fri 09:00AM - 6:00PM</p>
              </div>
            </div>

            <div className="quick-contact-item">
              <div className="quick-contact-icon">
                <i className="fa fa-envelope icon" aria-hidden="true"></i>
              </div>
              <div className="quick-contact-text">
                <p>Need Support? Drop us an email</p>
                <p>email@example.com</p>
              </div>
            </div>
          </div>
        </section>

        <section className="our-values">
          <div className="our-values-heading">
            <h3>Why Choose Us</h3>
            <div className="heading-dash"></div>
          </div>
          <div className="our-values-wrap">
            <div className="value">
              <div className="values-icon">
                <i className="fab fa-teamspeak icon"></i>
              </div>
              <h4>Expert Services</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                atque perferendis! Facere delectus amet assumenda maxime error
                sed eum repudiandae ex?
              </p>
            </div>
            <div className="value">
              <div className="values-icon">
                <i className="fab fa-teamspeak icon"></i>
              </div>
              <h4>Affordable Price</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                atque perferendis! Facere delectus amet assumenda maxime error ?
              </p>
            </div>
            <div className="value">
              <div className="values-icon">
                <i className="fab fa-teamspeak icon"></i>
              </div>
              <h4>Customer care</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                atque perferendis! Facere delectus amet assumenda maxime error ?
              </p>
            </div>
            <div className="value">
              <div className="values-icon">
                <i className="fab fa-teamspeak icon"></i>
              </div>
              <h4>Guarantee</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                atque perferendis! Facere delectus amet assumenda maxime error ?
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="testimonial-heading">
            <div className="testimonial-head">
              <h3>Customer Remarks</h3>
            </div>
            <div className="heading-dash"></div>
          </div>
          {/* <Carousel interval={8000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/office-clean.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/Pest-Control.jpg"
                alt="second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
          
        </section>

        {/* #### CSS IN JSX STYLES  #### */}

        <style jsx>{`
          .home-page {
            line-height: 1.5;
          }

          .carousel-caption h3 {
            color: white;
          }
          .carousel-caption p {
            color: white;
          }
          .index-about-us {
            padding-top: 30px;
          }

          .about-us-header {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .index-about-heading {
            text-align: center;
          }

          .about-us-wrap {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction: column;
            padding-top: 30px;
            margin: auto;
            width: 98%;
          }

          .about-us-text {
            margin-top: 10px;
            text-align: center;
          }

          .about-us-text button {
            border: none;
            background: #333;
            color: white;
            padding: 7px 15px;
            cursor: pointer;
            border-radius: 5px;
          }

          .about-us-text a {
            color: white;
          }

          .about-us-image img {
            width: 80%;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
          }

          // ------ SERVICES SECTION

          .index-services {
            padding-top: 35px;
          }

          .index-services-header {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .index-services-subhead {
            text-align: center;
            padding-top: 10px;
          }

          .index-services-subhead h4 {
            font-size: 20px;
          }

          .index-services-wrap {
            display: grid;
            display: -moz-grid;
            display: -ms-grid;
            grid-template-columns: 1fr;
            margin: auto;
            width: 90%;
          }

          .service {
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            justify-content: center;
            margin: 10px 0;
          }

          .service-icon {
            border-radius: 1px;
            box-shadow: 1px 1px 1px 2px grey;
            width: 180px;
            height: 70px;
            text-align: center;
            margin-right: 10px;
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            align-items: center;
            justify-content: center;
          }

          .service-icon .fa-home {
            font-size: 25px;
            color: #333;
          }

          .service-text {
            text-align: left;
          }

          .index-services button {
            border: none;
            background: #333;
            color: white;
            padding: 7px 15px;
            cursor: pointer;
            border-radius: 5px;
            margin-bottom: 10px;
          }
          .index-services-buttons {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .index-services button a {
            color: white;
          }

          // ------- NEXT SECTION

          .testimonials {
            padding-top: 30px;
          }

          .testimonial-heading {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-bottom: 14px;
          }

          //------- NEXT SECTION

          .our-values {
            padding-bottom: 20px;
          }

          .our-values h3 {
            text-align: center;
          }

          .our-values-heading {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .our-values-wrap {
            display: grid;
            display: -moz-grid;
            display: -ms-grid;
            grid-template-columns: 1fr;
            place-items: center;
            text-align: center;
            padding-top: 25px;
            margin: auto;
            width: 80%;
          }

          .values-icon .icon {
            font-size: 40px;
            margin-bottom: 5px;
            color: #333;
          }

          .value {
            margin: 5px 0;
          }

          // ---- END

          // ------------

          .index-quick-contact {
            background: #333;
            margin: 20px 0;
          }
          .quick-contact-wrap {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 15px 0;
          }

          .quick-contact-wrap p {
            color: white;
          }

          .quick-contact-item {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            margin: 10px 0;
          }
          .quick-contact-icon {
            margin-right: 10px;
            font-size: 20px;
          }
          .quick-contact-icon .icon {
            color: white;
          }
          .quick-contact-text {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction: column;
            line-height: 0.5;
          }

          //---------- MEDIA QUERIES HOME PAGE

          @media only screen and (min-width: 760px) {
            .index-about-heading {
              text-align: center;
            }

            .about-us-wrap {
              display: grid;
              grid-template-columns: 1fr 1fr;
              width: 95%;
            }

            .about-us-text {
              margin-top: 5px;
              margin-left: 40px;
              text-align: left;
            }

            .about-us-text button {
              padding: 7px 20px;
            }

            .about-us-image img {
              width: 100%;
            }

            // ------ SERVICES SECTION

            .index-services {
              padding-top: 40px;
            }

            .index-services-subhead {
              padding-top: 15px;
            }

            .index-services-subhead h4 {
              font-size: 22px;
            }

            .index-services-subhead p {
              width: 400px;
            }

            .index-services-wrap {
              grid-template-columns: 1fr 1fr;
              margin: auto;
              width: 98%;
            }

            .service-icon .fa-home {
              font-size: 28px;
            }

            .index-services button {
              padding: 7px 20px;
              margin-left: 15px;
            }

            .index-services-buttons {
              flex-direction: row;
            }

            //------- NEXT SECTION

            .our-values-wrap {
              grid-template-columns: 1fr 1fr;
              padding-top: 25px;
              width: 90%;
              gap: 20px;
            }

            .values-icon .icon {
              font-size: 45px;
            }

            // ---- END

            .index-quick-contact {
              margin: 25px 0;
            }
            .quick-contact-wrap {
              flex-direction: row;
              padding: 25px 0;
            }

            .quick-contact-item {
              margin-left: 20px;
            }
            .quick-contact-text {
              line-height: 1;
            }
          }

          @media only screen and (min-width: 1020px) {
            .about-us-wrap {
              margin-top: 20px;
              width: 90%;
            }

            .about-us-text {
              font-size: 20px;
              margin-top: 30px;
            }

            .about-us-text button {
              padding: 10px 25px;
            }

            .about-us-image img {
              width: 100%;
            }

            // ------ SERVICES SECTION

            .index-services {
              padding: 50px 0;
            }

            .index-services-subhead h4 {
              font-size: 27px;
            }

            .index-services-subhead p {
              width: 500px;
              font-size: 18px;
            }

            .index-services-wrap {
              grid-template-columns: 1fr 1fr;
              width: 90%;
              gap: 40px;
            }
            .service-icon {
              width: 190px;
              height: 90px;
              margin-right: 20px;
            }

            .service-icon .fa-home {
              font-size: 40px;
            }

            .index-services button {
              margin-top: 25px;
              padding: 10px 20px;
              margin-left: 20px;
            }

            //------- NEXT SECTION

            .values-icon .icon {
              font-size: 50px;
            }

            // ---- END

            .index-quick-contact {
              margin-bottom: 40px;
            }

            .quick-contact-item {
              margin-left: 60px;
            }
          }

          @media only screen and (min-width: 1400px) {
            h3 {
              font-size: 35px;
            }
            .home-slideshow img {
              height: 100vh;
            }
            .about-us-wrap {
              width: 90%;
            }

            .about-us-text {
              font-size: 22px;
              text-align: left;
              margin-left: 90px;
            }
            .about-us-text button {
              margin-top: 20px;
            }
            .about-us-image img {
              width: 100%;
            }

            // ------ SERVICES SECTION

            .index-services {
              padding: 70px 0;
            }

            .index-services-subhead p {
              width: 500px;
              font-size: 18px;
              margin-bottom: 35px;
            }

            .index-services-wrap {
              row-gap: 70px;
            }
            .service-icon {
              width: 190px;
              height: 130px;
              margin-right: 20px;
            }

            .service-icon .fa-home {
              font-size: 50px;
            }

            .service-text {
              margin-top: 15px;
            }

            .index-services button {
              margin-top: 35px;
              padding: 15px 25px;
              margin-left: 30px;
            }

            //------- NEXT SECTION

            .values-icon .icon {
              font-size: 70px;
            }

            // ---- END

            .index-quick-contact {
              margin-bottom: 60px;
            }

            .quick-contact-item {
              margin-left: 120px;
              font-size: 20px;
            }

            .quick-contact-wrap {
              padding: 45px 0;
            }
          }

          @media only screen and (min-width: 2400px) {
            h3 {
              font-size: 40px;
            }
            .home-slideshow img {
              height: 700px;
            }
            .about-us-wrap {
              width: 60%;
            }

            .about-us-text {
              font-size: 25px;
              margin-left: 80px;
            }

            // ------ SERVICES SECTION

            .index-services-subhead p {
              font-size: 20px;
            }

            .index-services-wrap {
              row-gap: 50px;
              width: 60%;
            }
            .service-icon {
              width: 220px;
            }

            .index-services button {
              margin-top: 35px;
              padding: 19px 30px;
            }

            .service-text h5 {
              font-size: 25px;
            }

            .service-text p {
              font-size: 23px;
            }

            //------- NEXT SECTION

            .quick-contact-item {
              font-size: 30px;
            }

            .our-values-wrap {
              width: 60%;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
