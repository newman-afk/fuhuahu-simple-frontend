import React, { useRef } from "react";
import { dataFetch } from "./dataFetch";

const Add = ({ setData }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const handleOnClick = (e) => {
    e.preventDefault();

    const postData = async () => {
      await fetch("https://fuhuahu-simple-backend.onrender.com/api/v1/data/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          author: authorRef.current.value
            ? authorRef.current.value
            : "Unknown Author",
          content: contentRef.current.value,
        }),
      });
      await dataFetch(setData);
    };
    postData();
  };
  return (
    <>
      <h1>Add</h1>
      <form onSubmit={handleOnClick}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" ref={titleRef} required />
        <label htmlFor="author">Author: </label>
        <input type="text" id="author" ref={authorRef} />
        <label htmlFor="content">Content: </label>
        <textarea name="content" id="content" ref={contentRef} required />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Add;
