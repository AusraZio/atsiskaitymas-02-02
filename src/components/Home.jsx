import React, { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ heading, content }),
    })
      .then((response) => response.json())
      .then((data) => setPosts([...posts, data]));
    setHeading("");
    setContent("");
  };

  return (
    <div className="home">
      <h1 className="home-title">Homepage</h1>
      <h1 className="home-title">Short book review</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={heading}
          onChange={(event) => setHeading(event.target.value)}
          placeholder="Title"
        />
        <textarea
          className="form-textarea"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Description"
        />
        <button className="form-button" type="submit">
          Add post
        </button>
      </form>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h2 className="post-heading">{post.heading}</h2>
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;