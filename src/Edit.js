import React from "react";
import { dataFetch } from "./dataFetch";

const Edit = ({
  setData,
  setIsEdit,
  editTitle,
  editAuthor,
  editContent,
  editArticle,
  setEditTitle,
  setEditAuthor,
  setEditContent,
}) => {
  const handleOnClick = (e) => {
    e.preventDefault();

    const editData = async () => {
      await fetch("https://fuhuahu-simple-backend.onrender.com/api/v1/data/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editArticle._id,
          title: editTitle,
          author: editAuthor ? editAuthor : "Unknown Author",
          content: editContent,
        }),
      });
      setIsEdit(false);
      await dataFetch(setData);
    };
    editData();
  };
  return (
    <>
      <h1>Edit</h1>
      <form onSubmit={handleOnClick}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={editTitle}
          required
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={editAuthor}
          onChange={(e) => setEditAuthor(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          id="content"
          value={editContent}
          required
          onChange={(e) => setEditContent(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Edit;
