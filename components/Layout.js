import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
