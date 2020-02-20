import Layout from "../components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>About Us</title>
      </Head>
      <div className="about-page">
        <section className="about-page-header">
          <h3>About Us</h3>
          <div className="heading-dash"></div>
        </section>
        <section className="about-page-body">
          <div className="about-page-body-wrap">
            <div className="about-page-image">
              <img src="/images/Pest-Control.jpg" alt="rand" />
            </div>
            <div className="about-page-text">
              <p>
               as Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                fugiat odio dolore velit incidunt totam ea voluptates quibusdam
                tenetur sint.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                reiciendis laborum, dolorum alias voluptatibus maiores accusamus
                autem. Ad, voluptatum dolorum!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident perspiciatis ad maxime nulla repellat magni.
              </p>
            </div>
          </div>
        </section>

        <section className="strategic-unit">
          <div className="strategic-unit-wrap">
            <div className="strategic-unit-item">
              <div className="strategic-unit-item-header">
                <h4>Mission</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                temporibus quis dicta, illum, omnis quisquam unde, impedit
                veritatis laborum suscipit iure ab! Repellat cumque praesentium
                nam sapiente, repellendus molestias alias?
              </p>
            </div>
            <div className="strategic-unit-item">
              <div className="strategic-unit-item-header">
                <h4>Vision</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                temporibus quis dicta, illum, omnis quisquam unde, impedit
                veritatis laborum suscipit iure ab! Repellat cumque praesentium
                nam sapiente, repellendus molestias alias?
              </p>
            </div>
            <div className="strategic-unit-item">
              <div className="strategic-unit-item-header">
                <h4>Values</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                temporibus quis dicta, illum, omnis quisquam unde, impedit
                veritatis laborum suscipit iure ab! Repellat cumque praesentium
                nam sapiente, repellendus molestias alias?
              </p>
            </div>
          </div>
        </section>

        <section className="about-page-team">
          <div className="about-page-team-head">
            <h4>Team</h4>
          </div>
          <div className="about-team-wrap">
            <div className="team-member">
              <img src="/images/laundry-cleaning.jpg" alt="team" />
              <p>Manager</p>
            </div>
            <div className="team-member">
              <img src="/images/laundry-cleaning.jpg" alt="team" />
              <p>Customer Care</p>
            </div>
            <div className="team-member">
              <img src="/images/laundry-cleaning.jpg" alt="team" />
              <p>Operations</p>
            </div>
            <div className="team-member">
              <img src="/images/laundry-cleaning.jpg" alt="team" />
              <p>Cleaner</p>
            </div>
          </div>
        </section>

        {/* #### CSS IN JSX STYLES  #### */}

        <style jsx>{`
          .about-page-header {
            background-color: silver;
            padding: 12px 0;
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .about-page-header h3 {
            color: white;
            font-size: 18px;
          }
          .about-page-body-wrap {
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            padding-top: 5px;
            flex-direction: column;
            margin: auto;
            width: 95%;
            text-align: center;
          }

          .about-page-image img {
            width: 100%;
            border-radius: 6px;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            align-items: center;
            justify-content: center;
          }

          .about-page-text {
            margin-top: 10px;
            margin-left: 23px;
            text-align: left
          }

          .strategic-unit-item h4 {
            border-bottom: 1px solid pink;
            display: inline-block;
          }

          .strategic-unit-item-header {
            display: flex;
            display: -webkit-flex;
            display: -ms-flexbox;
            align-items: center;
            justify-content: center;
          }
          .strategic-unit-wrap {
            display: grid;
            display: -moz-grid;
            display: -ms-grid;
            grid-template-columns: 1fr;
            margin: auto;
            width: 95%;
            padding-top: 10px;
            text-align: center;
          }
          .about-page-team {
            padding-top: 10px;
          }
          .about-page-team-head {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-page-team-head h4 {
            border-bottom: 1px solid black;
            display: inline-block;
          }
          .about-team-wrap {
            display: grid;
            display: -moz-grid;
            display: -ms-grid;
            grid-template-columns: 1fr;
            place-items: center;
            place-content: center;
            padding: 15px 0;
            gap: 10px;
          }

          .team-member {
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center
          }
          .team-member img {
            width: 250px;
          }
          .team-member p {
            background-color: #333;
            color: white;
            padding: 10px 16px;
            text-align: center;
            width: 100%;
          }

          // ------- MEDIA QUERIES FOR IPAD

          @media only screen and (min-width: 760px) {
            .about-page-header {
              padding: 14px 0;
            }
            .about-page-header h3 {
              font-size: 20px;
            }
            .about-page-body-wrap {
              display: grid;
              display: -moz-grid;
              display: -ms-grid;
              grid-template-columns: 1fr 1fr;
              text-align: left;
              margin: 40px auto;
            }

            .about-page-image img {
              width: 95%;
              height: 300px;

            }
            
  
            .about-page-text {
              margin-top: 10px;
              margin-left: 15px;
            }

            .strategic-unit-wrap {
              width: 65%;
              padding: 15px 0;
            }

            .about-page-team-head h4 {
              font-size: 30px;
            }

            .about-team-wrap {
              grid-template-columns: 1fr 1fr;
              padding: 25px 0;
              margin: auto;
              width: 80%;
            }

            .team-member img {
              width: 100%;
            }
          }

          @media only screen and (min-width: 1020px) {
            .about-page-header {
              padding: 20px 0;
            }
            .about-page-header h3 {
              font-size: 23px;
            }

            .about-page-image img {
              width: 480px;
              width: 100%;
            }

            .about-page-text {
              margin-top: 18px;
            }

            .strategic-unit-wrap {
              width: 50%;
            }

            .about-team-wrap {
              padding: 30px 0;
              width: 75%;
            }

            .team-member img {
              width: 100%;
            }
          }



          @media only screen and (min-width: 1400px) {
            .about-page-header {
              padding: 30px 0;
            }
            .about-page-header h3 {
              font-size: 25px;
            }
            
            .about-page-body-wrap img {
              width: 100%;
              height: auto;
            }

            .about-page-text {
              font-size: 20px;
            }

            .strategic-unit-item{
              margin: 20px 0;
            }

            .strategic-unit-wrap {
              font-size: 20px;
              padding: 70px 0;
              width: 40%
            }

            .about-team-wrap {
              width: 70%;
            }

            .team-member img {
              width: 100%;
            }
          }

          @media only screen and (min-width: 2500px) {

            p {
              font-size: 25px;
            }

            .about-page-header {
              padding: 35px 0;
            }
            .about-page-header h3 {
              font-size: 30px;
            }

            .about-page-body-wrap {
              width: 70%;
             
            }


            .strategic-unit-wrap {
              font-size: 25px;
              width: 40%
            }

            .about-team-wrap {
              width: 60%;
            }

            
          }
        `}</style>
      </div>
    </Layout>
  );
}
