import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Home Page">
      <div className="container">
        <h1>This is home page</h1>
        <Link href="/about">
          <a>About page</a>
        </Link>
        <h1 className="text-primary">This is home page style</h1>
      </div>
    </Layout>
  );
};

export default Home;
