const fetchData = require("../utils/fetchData.js");
//url del API rickandmory
let API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    let cout = data.info.count;
    console.log(cout);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    let name = data.name;
    console.log(name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    let dimension = data.dimension;
    console.log(dimension);
  })
  .catch((err) => console.error(err));
