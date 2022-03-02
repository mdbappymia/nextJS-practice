import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout title="About page">
      <div className="container">
        <h1>This is about page</h1>
        <Link href="/">Home</Link>
      </div>
    </Layout>
  );
};

export default index;
