export const dataFetch = async (setData) => {
  console.log("qqqqqqq");
  //   setTimeout(() => {}, 2000);
  const response = await fetch("http://localhost:5000/api/v1/data");
  const data = await response.json();
  setData(data);
  console.log(data);
};
