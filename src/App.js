import { useEffect, useState } from "react";
import Add from "./Add";
import Edit from "./Edit";
import Show from "./Show";
import { dataFetch } from "./dataFetch";

function App() {
  const [data, setData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [editArticle, setEditArticle] = useState();
  const [editTitle, setEditTitle] = useState();
  const [editAuthor, setEditAuthor] = useState();
  const [editContent, setEditContent] = useState();

  useEffect(() => {
    dataFetch(setData);
  }, []);
  return (
    <>
      {!isEdit && <Add setData={setData} />}
      {isEdit && (
        <Edit
          setData={setData}
          editArticle={editArticle}
          editTitle={editTitle}
          editAuthor={editAuthor}
          editContent={editContent}
          setEditTitle={setEditTitle}
          setEditAuthor={setEditAuthor}
          setEditContent={setEditContent}
          setIsEdit={setIsEdit}
        />
      )}
      <Show
        data={data}
        setData={setData}
        setEditTitle={setEditTitle}
        setEditAuthor={setEditAuthor}
        setEditContent={setEditContent}
        setIsEdit={setIsEdit}
        setEditArticle={setEditArticle}
      />
    </>
  );
}

export default App;
