import Header from "./Header";
import Footer from "./Footer";
import "../public/style.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {/* <script
        src="https://kit.fontawesome.com/c772bfb479.js"
        crossorigin="anonymous"
      ></script> */}
      <link rel="stylesheet" href="fontawesome.com\css\all.css"></link>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <script src="fontawesome.com\js\all.js"></script>
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
