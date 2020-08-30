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
