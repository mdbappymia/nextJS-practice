import Link from "next/link";
import React from "react";

const SinglePost = ({ post }) => {
  const { title, body, userId, id } = post;
  return (
    <div className="card">
      <div className="card-header">{userId}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <Link href={`/postDetails?pid=${id}`}>
          <a className="btn btn-primary">Click view post</a>
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
