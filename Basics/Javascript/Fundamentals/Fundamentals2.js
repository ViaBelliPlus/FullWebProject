"use strict"; //Katı modu etkinleştirir.
//Katı mod aslında let ve const kullanmadan değişken tanımlamamızı yasaklar diyebiliriz. Bu sayede bazı yapabilecek olduğumuz,
// hatalardan kaçınmış oluruz.
let hasDriverLicense = false;
const passTest = true;

passTest === true ? hasDriverLicense = true : hasDriverLicense = false;
if(hasDriverLicense) console.log("You have a license");

function Calculate(x,y){

    if(x > 0 && y > 0){
        let perimeter = (2 * x) + (2 * y);
        console.log(`Girdiğiniz dikdörtgenin çevresi ${perimeter}'dir`);
        return perimeter;
    }
    else{
        console.log("Yanlış bir değer girdiniz");
    }
    return -1;
}
// debugger; => web sitesinde debug yapmak için kullanılır.
// let result = Calculate(prompt("Uzun kenarı girin"),prompt("Kısa kenarı girin"));
// console.log(result);
//
// const friends = ["Tahiri","Sadık","Gökay"];
// console.log(friends[1]);
// const years = new Array(1230,1200);
//Javascripte arraylerin içine karmaşık türde değerler atayabiliriz.
const array = [1230,"tahiri",["1",2,[0,1]]];
//Sonuna ekleme yapar.
array.push(12);
console.log(array);
//Başına ekleme yapar.
array.unshift(1);
//Son elemanı siler.
array.pop();
console.log(array);
//Baştan silme işlemi yapar.
array.shift();
console.log(array);
//region Classes Intro
class A1{
    constructor(firstName,lastName) {
        this.firtName = firstName;
        this.lastName = lastName;
    }
}

const a2 = new A1("Tahiri","Fidan");
console.log(a2.firtName);
console.log(a2.lastName);
//endregion

for (let rep = 0; rep <= 10;rep++){
    console.log(rep);
}
console.log();
