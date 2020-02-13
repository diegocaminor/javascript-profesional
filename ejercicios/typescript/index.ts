// Tipos básicos typescript
// Tipos:

// boolean. Valor verdadero o falso.
// number. Números.
// string. Cadenas de texto.
// string[]. Arreglo del tipo cadena de texto.
// Array. Arreglo multi-tipo, acepta cadenas de texto o números.
// enum. Es un tipo especial llamado enumeración.
// any. Cualquier tipo.
// object. Del tipo objeto.

// Boolean
let muted: boolean = true
muted = false

// Números
let numerador:number = 42
let denominador:number = 6
let resultado = numerador/denominador

// String
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Diego']
//people.push("Eduardo");

let peopleAndNumber: Array<string | number> = []
peopleAndNumber.push('Diego')
peopleAndNumber.push(2020)

// Enum
enum Color {
    Rojo,
    Verde,
    Azul,
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es: ${colorFavorito}`) // Mi color favorito es: 2

// Enum
enum Color2 {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito2: Color2 = Color2.Azul
console.log(`Mi color favorito es: ${colorFavorito2}`) // Mi color favorito es: Azul

// Any -> cuando no tenemos la certeza de que tipo de variable será una variable, entonces podemos usar la notación :any
let comodin: any = "Joker"
comodin = { type: 'Wildcard'}

// Object
let someObject: object = { type: 'Wildcard'}