const fetchData = require("../utils/fetchData.js");
let API = "https://rickandmortyapi.com/api/character/";

const getInfo = async (url_api) => {
  try {
    const personData = new Array();

    const data = await fetchData(url_api);
    personData.push(data.info.count);

    const character = await fetchData(`${API}${data.results[0].id}`);
    personData.push(character.name);

    const origin = await fetchData(character.origin.url);
    personData.push(origin.dimension);

    showInfo(personData);
  } catch (error) {
    console.error(error);
  }
};
getInfo(API);

/**
 * Muestra datos por consola
 * @param {Array} data Arreglo de datos a ver
 */
const showInfo = (data) => data.forEach((item) => console.log(item));
