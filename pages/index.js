// React
import { Fragment } from "react";

// Components
import Home from "../components/Home/Home";

// Next
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>ADAMANCE | Home</title>
        <link rel="icon" href="./logo/transparent-logo.png" />
      </Head>
      <Home />
    </Fragment>
  );
};

export default index;
