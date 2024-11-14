import useData from "./useData.jsx";
function numberfetcher() {
  let number = Math.floor(Math.random() * 57);

  return number;
}

const GetPassword = (n) => {
  let data = useData();
  let pass = "";

  for (let i = 0; i < n; i++) {
    let value = data[numberfetcher()];
    pass += value;
  }

  return pass;
};

export default GetPassword;
