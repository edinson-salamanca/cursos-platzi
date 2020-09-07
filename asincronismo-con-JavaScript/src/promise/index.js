//Se crea una función que retorna una promesa
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      //Si la promesa se ejecuto bien
      resolve("Hey");
    } else {
      //si la promesa falla
      reject("whooops!");
    }
  });
};

//ejecutamos la función
somethingWillHappen()
  .then((response) => console.log(response)) //capturamos el resolve
  .catch((err) => console.error(err)); //capturamos el reject

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("whooop!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//ejecutar varias promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log("Array of resuts ", response))
  .catch((err) => console.error(err));
