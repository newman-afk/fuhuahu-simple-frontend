export const dataFetch = async (setData) => {
  console.log("qqqqqqq");
  //   setTimeout(() => {}, 2000);
  const response = await fetch("https://fuhuahu-simple-backend.onrender.com");
  const data = await response.json();
  setData(data);
  console.log(data);
};
