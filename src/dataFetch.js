export const dataFetch = async (setData) => {
  console.log("qqqqqqq");
  //   setTimeout(() => {}, 2000);
  const response = await fetch(
    "https://fuhuahu-simple-backend.onrender.com/api/v1/data/"
  );
  const data = await response.json();
  setData(data);
  console.log(data);
};
