import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";


export default function Services() {

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Our Services</title>
      </Head>
      <div className="services-page">
        <section className="services-page-header">
          <h3>Our Services</h3>
          <div className="heading-dash"></div>
        </section>
        <section className="services-page-body">
          <h4>Choose from our wide range of services</h4>
          <div className="services-page-bonus-deal">
            <h3>FIRST TIME CUSTOMERS GET 10% OFF!!!</h3>
          </div>
          <div className="services-items-wrap">
            <div className="service-item">
              <img src="/images/laundry-cleaning.jpg" alt="randomi" />
              <h5>Laundry services</h5>
              <p>
                We take care of your clothes Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Blanditiis, debitis?
              </p>
              <button>
                <Link href="/contact#contact-page-form">
                  <a>Book Now</a>
                </Link>
              </button>
            </div>
            <div className="service-item">
              <img src="/images/laundry-cleaning.jpg" alt="randomi" />
              <h5>Home Cleaning</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis minus nulla et incidunt Lorem ipsum dolor sit amet. !
              </p>
              <button>
                <Link href="/contact#contact-page-form">
                  <a>Book Now</a>
                </Link>
              </button>
            </div>
            <div className="service-item">
              <img src="/images/laundry-cleaning.jpg" alt="randomi" />
              <h5>Office Cleaning</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Minima, ipsa voluptatibus suscipit consequatur et sapiente.
              </p>
              <button>
                <Link href="/contact#contact-page-form">
                  <a>Book Now</a>
                </Link>
              </button>
            </div>
            <div className="service-item">
              <img src="/images/laundry-cleaning.jpg" alt="randomi" />
              <h5>Fumigation</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae facilis delectus omnis quos, quae nihil?
              </p>
              <button>
                <Link href="/contact#contact-page-form">
                  <a>Book Now</a>
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="how-it-works-heading">
            <h4>How it Works</h4>
            <div className="heading-dash"></div>
          </div>
          <div className="how-it-works-container">
            <div className="how-it-works-wrap">
              <div className="how-it-works-item">
                <i className="fab fa-first-order icon1" aria-hidden="true"></i>
                <h4> 1: Book a Service</h4>
              </div>
              <div className="how-it-works-item">
                <i className="fab fa-first-order icon2" aria-hidden="true"></i>
                <div>
                  <h4> 2: Get a Response</h4>
                </div>
              </div>
              <div className="how-it-works-item">
                <i className="fab fa-first-order icon3" aria-hidden="true"></i>
                <div>
                  <h4> 3: Service Delivery</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* #### CSS IN JSX STYLES  #### */}

        <style jsx>{`
          .services-page {
            line-height: 1.5;
          }

          .services-page img {
            width: 300px;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            align-items: center;
            justify-content: center;
            border-radius: 6px
          }

          .services-page-header {
            background-color: silver;
            padding: 12px 0;
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .services-page-header h3 {
            color: white;
            font-size: 18px;
          }

          .services-page-header .heading-dash {
            width: 80px;
          }

          .services-page-body h4 {
            text-align: center;
            font-size: 20px;
            padding: 17px 0;
          }

          .how-it-works-heading {
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .services-page-bonus-deal {
            background-color: rgb(26, 25, 25);
            padding: 12px 0;
            color: white;
          }

          .services-page-bonus-deal h3 {
            color: white;
            font-size: 18px;
            text-align: center;
          }
          .services-items-wrap {
            display: grid;
            display: -moz-grid;
            display: -ms-grid;
            grid-template-columns: 1fr;
            gap: 10px;
            place-items: center;
            place-content: center;
            margin: 20px auto;
            width: 95%;
            text-align: center;
          }

          .service-item h5 {
            text-align: center;
            margin-top: 5px;
          }
          .service-item button a {
            color: white;
          }
          .service-item button {
            text-align: center;
            border: none;
            background: #333;
            padding: 7px 15px;
            cursor: pointer;
            border-radius: 5px;
          }

          .service-item {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
          }

          // ------- SECTION

          .how-it-works-container {
            padding: 20px 0;
            margin: 10px 0;
          }
          .how-it-works-wrap {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .how-it-works-item {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
          }

          .how-it-works-item .fa-first-order {
            font-size: 40px;
            margin-right: 10px;
          }

          .how-it-works-item h4 {
            font-size: 20px;
          }

          //------- MEDIA QUERY

          @media only screen and (min-width: 760px) {
            .services-page-header {
              padding: 14px 0;
            }

            .services-page-bonus-deal {
              padding: 15px 0;
            }

            .services-items-wrap {
              grid-template-columns: 1fr 1fr;
            }

            // ------- SECTION

            .how-it-works-container {
              padding: 20px 0;
              margin: 10px 0;
            }

            .how-it-works-wrap {
              flex-direction: row;
            }

            .how-it-works-item {
              margin: 10px 15px;
            }

            .how-it-works-item .fa-first-order {
              font-size: 45px;
            }

            .how-it-works-item h4 {
              font-size: 20px;
            }
            .services-page img {
              width: 95%;
            }
          }

          @media only screen and (min-width: 1020px) {

            
            .services-page-header {
              padding: 20px 0;
            }

            .services-page-bonus-deal {
              padding: 17px 0;
            }

            .services-items-wrap {
              width: 70%;
              margin-top: 30px;
            }

            // ------- SECTION

            .how-it-works-container {
              padding: 20px 0;
              margin: 10px 0;
            }

            .how-it-works-item {
              margin: 10px 20px;
            }

            .how-it-works-item .fa-first-order {
              font-size: 50px;
            }
          }

          @media only screen and (min-width: 1400px) {

            p{font-size: 22px}
            .services-page-header {
              padding: 25px 0;
            }

            .services-page-header h3 {
              font-size: 25px;
            }

            .services-page-body h4 {
              font-size: 25px;
            }
            .services-page-bonus-deal {
              padding: 27px 0;
              font-size: 30px;
            }
            .services-page-bonus-deal h3 {
              font-size: 30px;
            }

            .services-items-wrap {
              width: 70%;
              margin-top: 50px;
            }

            .service-item h5 {
              font-weight: bold;
              font-size: 29px;
            }

            .service-item button {
              padding: 12px 27px;
              border-radius: 5px;
            }

            // ------- SECTION

            .how-it-works-heading h4 {
              font-size: 35px
            }
            .how-it-works-container h4 {
              font-size: 30px
            }

          }
        `}</style>
      </div>
    </Layout>
  );
}
