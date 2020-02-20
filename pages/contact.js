import Layout from "../components/Layout";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");
  const [moreinfo, setMoreinfo] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleService(e) {
    setService(e.target.value.toUpperCase());
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handleMoreinfo(e) {
    setMoreinfo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      email: email,
      text: `Customer Name: ${name}
      
      Phone Number: ${phone}
      
      Requested Service: ${service}
      
      Customer Address: ${address}
      
      Additional info: ${moreinfo}`
    };

    axios({
      url: "/api/send",
      method: "POST",
      data: payload
    })
      .then(() => {
        console.log("data has been sent to the server");
        alert('YOUR ORDER HAS BEEN RECIEVED!!!')
        // location.reload();
      })
      .catch(() => {
        console.log("internal server error");
        // alert('an error occured');
      });
    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setAddress("");
    setMoreinfo("");
  }

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Contact Us</title>
      </Head>
      <div className="contact-page">
        <section className="contact-page-header">
          <div className="contact-header-text">
            <h3>Contact Us</h3>
            <div className="heading-dash"></div>
          </div>
          <h4>We would love to hear from you</h4>
        </section>

        <section className="contact-page-body">
          <div className="contact-page-wrap">
            <div className="contact-page-item">
              <h4>Address</h4>
              <p>5, xyz street, Lagos, Nigeria</p>
            </div>
            <div className="contact-page-item">
              <h4>Telephone</h4>
              <p>+234-123-456-7890</p>
              <p>+234-123-456-7890</p>
            </div>
            <div className="contact-page-item">
              <h4>E-mail</h4>
              <p>email@example.com</p>
            </div>
            <div className="contact-page-item">
              <h4>Social Media</h4>
              <ul>
                <li>
                  <i className="fab fa-twitter icon" aria-hidden="true"></i>
                  <i className="fab fa-whatsapp icon" aria-hidden="true"></i>
                  <i className="fab fa-instagram icon" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>

          <section className="contact-page-form">
            <div className="contact-form-wrap">
              <div className="contact-form-head">
                <h4>Book Our Services</h4>
                <div className="heading-dash"></div>
              </div>

              <form onSubmit={handleSubmit} autoComplete="on">
                <div className="form-wrap">
                  <label htmlFor="Name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    autoComplete="on"
                    value={name}
                    onChange={handleName}
                  />
                </div>
                <div className="form-wrap">
                  <label htmlFor="Phone">Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    required
                    autoComplete="on"
                    value={phone}
                    onChange={handlePhone}
                  />
                </div>
                <div className="form-wrap">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    autoComplete="on"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="form-wrap">
                  <label htmlFor="service">Service:</label>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    placeholder="laundry, fumigation, cleaning e.t.c..."
                    required
                    autoComplete="on"
                    value={service}
                    onChange={handleService}
                  />
                </div>
                <div className="form-wrap">
                  <label htmlFor="Home Address">Home Address:</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    autoComplete="on"
                    value={address}
                    onChange={handleAddress}
                  />
                </div>
                <div className="form-wrap">
                  <label htmlFor="info">Additional info:</label>
                  <br />
                  <textarea
                    name="more-info"
                    id="additional-info"
                    cols="30"
                    rows="5"
                    value={moreinfo}
                    onChange={handleMoreinfo}
                  ></textarea>
                </div>
                <div className="form-button">
                  <button type="submit">Book A Service</button>
                </div>
              </form>
            </div>
          </section>
        </section>

        {/* #### CSS IN JSX STYLES  #### */}

        <style jsx>{`
          .contact-header-text {
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: silver;
            padding: 12px 0;
          }

          .contact-header-text h3 {
            color: white;
            padding-top: 10px;
            font-size: 18px;
          }
          .contact-header-text .heading-dash {
            margin-bottom: 10px;
          }

          .contact-page-header h4 {
            font-size: 18px;
            text-align: center;
            padding: 20px 0;
          }

          .contact-page-body {
            display: grid;
            display: -moz-grid;
            display: -ms-grid;
            grid-template-columns: 1fr;
            margin: auto;
            width: 90%;
          }

          .contact-page-wrap h4 {
            color: blue;
          }
          .contact-page-wrap .icon {
            margin-right: 7px;
            font-size: 20px;
          }
          .contact-page-wrap p {
            line-height: 1;
          }

          .contact-form-wrap h4 {
            text-align: center;
            font-size: 18px;
          }

          .contact-form-head {
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
          }

          form {
            margin: auto;
            width: 90%;
          }

          .form-wrap {
            display: grid;
            display: -moz-grid;
            display: -ms-grid;
            margin: 5px 0;
          }

          .form-wrap label {
            color: blue;
          }

          .form-wrap input {
            padding: 5px 5px;
          }

          .contact-page-form {
            padding-bottom: 40px;
          }

          .form-button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;
          }

          .form-button button {
            border: none;
            background: #333;
            color: white;
            padding: 7px 15px;
            cursor: pointer;
            border-radius: 5px;
          }
          .form-wrap textarea {
            margin-top: -11px;
          }

          // MEDIA QUERIES

          @media only screen and (min-width: 760px) {
            .contact-header-text h3 {
              padding-top: 12px;
            }

            .contact-page-header h4 {
              font-size: 20px;
            }

            .contact-page-body {
              width: 60%;
            }

            .contact-page-wrap .icon {
              margin-right: 7px;
              font-size: 22px;
            }

            .contact-form-wrap h4 {
              text-align: center;
              font-size: 18px;
            }
          }

          @media only screen and (min-width: 1020px) {
            .contact-header-text h3 {
              padding-top: 17px;
              font-size: 23px;
            }

            .contact-page-header h4 {
              font-size: 25px;
              font-weight: bold;
              margin-bottom: 20px;
            }

            .contact-page-wrap .icon {
              font-size: 25px;
            }

            .contact-page-body {
              width: 75%;
              grid-template-columns: 1fr 1fr;
              padding: 40px 0;
            }

            .contact-page-wrap {
              margin-left: 100px;
              margin-top: 50px;
            }

            .contact-page-wrap p {
              font-size: 24px;
            }

            .contact-page-wrap .contact-page-item {
              margin: 20px 0;
            }
          }

          @media only screen and (min-width: 1400px) {
            .contact-page-wrap {
              margin-left: 190px;
            }
          }

          @media only screen and (min-width: 2500px) {
            .contact-page-wrap {
              margin-left: 190px;
            }

            .contact-page-body {
              width: 50%;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
