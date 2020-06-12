//dependencia que nos permite hacer peticiones a servicios de la nube
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//url del API rickandmory
let API = "https://rickandmortyapi.com/api/character/";

/**
 * función que nos permite enviar y recibir peticiones a API
 * @param {String} url_api
 *
 *
 */
function fetchData(url_api) {
  return new Promise((resolve, reject) => {
    //Creamos una instancia del objeto XMLHttpRequest
    let xhtp = new XMLHttpRequest();

    /**
     *Hacemos un llamado una url con el metodo open() a nuestra nueva instancia
     *GET es el tipo de petición
     * url_api es la url, aquien le haremos la petición
     * true para que la petición sea asincrona
     */
    xhtp.open("GET", url_api, true);

    //declaramos un listener que se ejecutará si ocurre algún cambio en el estado inicial
    xhtp.onreadystatechange = function (event) {
      /**
       * el estado de la actualización que cuenta con los siguientes estados:
       * 0: solicitud no inicializada
       * 1: conexión del servidor establecida
       * 2: solicitud recibida
       * 3: solicitud de procesamiento
       * 4: solicitud finalizada y la respuesta está lista
       */
      if (xhtp.readyState === 4) {
        /**
         * que estatus tine la petición, en este caso 200 siginifica que ok todo salio bien
         */
        if (xhtp.status === 200) {
          resolve(JSON.parse(xhtp.responseText));
        } else {
          //se crea un error con la palabra error seguida de la url
          const error = new Error(`Error ${url_api}`);
          return reject(error);
        }
      }
    };
    //enviar petición
    xhtp.send();
  });
}

fetchData(API)
  .then((response) => {
    let count = response.info.count;
    console.log(count);

    fetchData(API + response.results[0].id)
      .then((response2) => {
        let name = response2.name;
        console.log(name);
        
        fetchData(response2.origin.url)
          .then((response3) => {
            let dimension = response3.dimension;
            console.log(dimension);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
