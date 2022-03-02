/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";

const postDetails = ({ data }) => {
  const { body, title, userId } = data;
  return (
    <Layout>
      <div className="container">
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link href="/posts">
              <a className="mt-5 btn btn-primary">Go Back</a>
            </Link>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </Layout>
  );
};
postDetails.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${query.pid}`
  );
  const data = res.data;
  return { data: { data } };
};

export default postDetails;
