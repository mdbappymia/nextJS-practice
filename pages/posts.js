import axios from "axios";
import Layout from "../components/Layout";
import SinglePost from "../components/SinglePost";

const news = ({ data }) => {
  return (
    <Layout title="All post">
      <div className="container">
        <h1>This is post components</h1>
        {data.data.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
};

news.getInitialProps = async (ctx) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  return { data: { data } };
};

export default news;
