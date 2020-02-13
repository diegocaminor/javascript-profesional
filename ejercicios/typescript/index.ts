// Funciones
function add(a:number, b:number):number {
    return a+b
}

const sum = add(2,3)
console.log(sum);

function createAdder(a:number): (number) => number {
    return function (b:number) {
        console.log("a: " + a);
        console.log("b: " + b);
        return b+a
    }
}

const addFour = createAdder(4)
const fourPlusSix = addFour(6)

function fullName(firstName:string, lastName?:string):string {
    return `${firstName} ${lastName}`
}

const richard = fullName('Richard')
console.log(richard);

function fullName2(firstName:string, lastName:string = "Camino"):string {
    return `${firstName} ${lastName}`
}

const diego = fullName2('Diego')
console.log(diego);