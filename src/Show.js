import React from "react";
import { dataFetch } from "./dataFetch";

const Show = ({
  data,
  setData,
  setIsEdit,
  setEditTitle,
  setEditAuthor,
  setEditContent,
  setEditArticle,
}) => {
  const handleDelete = async (article) => {
    await fetch("http://localhost:5000/api/v1/data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: article._id,
      }),
    });
    await dataFetch(setData);
  };
  const handleEdit = (article) => {
    console.log(article);
    setEditTitle(article.title);
    setEditAuthor(article.author);
    setEditContent(article.content);
    setIsEdit(true);
    setEditArticle(article);
  };
  return (
    <>
      {data
        ? [...data].reverse().map((article) => {
            return (
              <article key={article._id}>
                <h1>{article.title}</h1>
                <h4>{article.author}</h4>
                <p>{article.content}</p>
                <button onClick={() => handleEdit(article)}>Edit</button>
                <button onClick={() => handleDelete(article)}>Delete</button>
              </article>
            );
          })
        : null}
    </>
  );
};

export default Show;
