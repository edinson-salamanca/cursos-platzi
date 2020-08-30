//Boolean
let muted: boolean = true;
muted = false;

//números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String
let nombre: string = 'edinson';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let personas: string[] = [];
personas = ['leo', 'Nicole', 'Raul'];

let personasYNumeros: Array<string | number> = [];
personasYNumeros.push('Ricardo');
personasYNumeros.push(23323);

//enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

//any, que puede ser de cualquier tipo de variable
let comdin: any = 'Joker';
comdin = { type: 'Wildcard' };

//Object
let someObject = { type: 'Wildcard' };

//funciones

function add(a: number, b: number): number {
  return a + b;
}
const sum = add(2, 3);

//regresa funciones

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  };
}
const addFour = createAdder(4);
const foutPlus = addFour(6);

//Funciones con parametros opcionales
function fullName(firstName: string, lastName?: string): string {
  return `${firstName}${lastName}`;
}

const edin = fullName('Edin');
