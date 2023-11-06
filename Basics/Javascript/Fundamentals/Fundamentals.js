//region Video - 1
// let bir değişken tanımlamak için kullanılır. Javascript tip güvenli değildir.
let js = "Amazing";
// Eşit mi sorusu 3 tane "=" ifadesi ile sorulur.
// if (js === "Amazing") alert("Javascript is fun");
// else {
//   alert("Javascript is not fun");
// }
console.log(10 + 12);

// Javascriptte diğer dillerde olduğu bazı isimlendirme kuralları vardır. Mesela ;
// 1) İsimlendirmeler sayı ile başlayamaz ve & vb. işaretler içeremez (_) içerebilir.
// 2) name, new , function gibi anahtar kelimeler(keyword) kullanılması büyük sıkınıtlar oluşturur hatta çoğunlukla hata verir
// 3) bir keywordün başına $ işareti koyarak onu isimlendirme için kullanabiliriz. ($function)
// 4) Sabitler tamamen büyük harfle yazılır.

const PI = 3.14;
// PI = 10;  SABİT DEĞİŞKENLER sadece readonly olaiblirler.

//  Example
let country = "Turkey";
let contient = "Europea";
let population = 84.5;

console.log(country + " " + contient + " " + population + " Milion");
// Tip güvenliği yoktur javascripte!
country = 10;
//endregion
//region Video - 2
//Boolean
let isTrue = false;
console.log(isTrue);
console.log(typeof isTrue); // boolean
isTrue = "Doğru değil";
console.log(isTrue);
console.log(typeof isTrue); // string
let year;
console.log(year); // undefined
console.log(typeof year); //undefined
//null
console.log(null);
console.log(typeof null); // Object tipinde gözükür ancak boş nesne referansı için kullanılır.
//endregion
//region let , const, var
let age = 30;
age = 31;
const birthyear = 2003;
// birthyear = 2004; burada hata alırız const readonlydir.
// const job; Burada da hata alırız çünkü initializer edilmesi gerekir sabit bri değerin.
//var da let gibi çalışır ancak önemli farklılıkları vardır, şimdilik asla kullanılması tavsiye edilmez.
// var job = "Programmer";
//Test
let massMark = 78,
  heightMark = 1.69;
let massJohn = 92,
  heightJohn = 1.95;
let BMIMark = massMark / heightMark ** 2,
  BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark + " " + BMIJohn);
//endregion
//region Geri tırnak / Template literals
const firstName = "Tahiri";
const age2 = 20;
const job = "student";
//Bu şekilde düzenlemek zor oluyor.
let ben ="Adım " + firstName + " ve " + age2 + " yaşındayım. " + "Şuanda " + job + " olarak çalışıyorum.";
console.log(ben);
ben = `Adım ${firstName} ve ${age2} yaşındayım. Şuanda ${job} olarak çalışıyorum.`;
console.log(ben);
//endregion
//region Type Conversion and Type coercion
//Type conversion and Type Coercion , tür dönüştürme ve tür zorlama
//Type Conversion
const inputYear = "1991";
//Burada bir dönüştürme yapmamız lazım.
console.log(inputYear + 18);
//Bu şekilde tip dönüştürmesi yaparak işlemi gerçekleştiririz.
console.log(Number(inputYear) + 18);
console.log(typeof inputYear); // Sadece o an o tip gibi davranamsını sağladık kalıcı olarak number olmadı...
const myName = "Tahiri";
console.log(Number(myName)); //Bu bize NaN ( Not a Number) değeri döndürür.
console.log(Number(myName) + 12); // Üzerinde işlem yaptırmaz.

//Type Coercion
console.log("Ben " + 23 + "yaşındayım."); //BU bir tip zorlamasına örnektir. 23 number tipi otomatik olarak string tipine dönmeye zorlanmıştır.
console.log("20 " - 23 - "2"); //Burada ise number olmaya zorlanır.
console.log("20 " * 23 * "2");
//endregion
//region Eşitlik operatörü
//Falsy values and Truthy values
// 0 , '' , undefined , null , NaN => Bunlar boolean bir değişkene atanmaya çalıştığı zaman false döndürür.
let isDeneme = '';
console.log(Boolean(isDeneme));
isDeneme  = 3; // Falsy değerler sışındakiler genelde true değer döndürür.
console.log(Boolean(isDeneme));
//Equality Operators (=== , ==)
// 3 tane eşit olan tür zorlaması yapmaz sadece aynı türde ise o zaman karşılaştırma yapar.
// Ancak 2 tane eşit eşit olan durumda ise string bir sayısal değer ile sayısal bir değer karşılaştırabilir. Yani tür zorlaması yapar.
console.log(10 === 10); // true
console.log(10 === "10"); //false
console.log(10 == "10");  // true
console.log("Tahiri" == 10); //false
//endregion
// let name = prompt("Enter the name");
// console.log(name);
