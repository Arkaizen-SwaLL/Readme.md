let stydent:string = "UMAR"
console.log(stydent)

let age:number;
age = 16

let active:boolean = true;
console.log(active)

type personType = {
    name:string;
    age:number;
    city:string;
    isStydent:boolean
}

let person:personType;
let peka:personType;
person = {
    name: 'Koko',
    age: 19,
    city: "Bishkek",
    isStydent: false
}

peka = {
    name: 'Nana',
    age: 88,
    city: "Batken",
    isStydent: true
}

let numbers:object = [10,20,30,40,50]
function Maral(name:string, age:number, isActive:boolean):void {
    for (let i = 0; i <= 20;  i++) {
        console.log(i)
    }
}
Maral("Aiperi", 44, true)