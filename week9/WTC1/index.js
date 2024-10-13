//1.Konu 
//let const var

//değişken tanımlandığında tekrar değişkenin stringini değiştirmek için değişken ismini tekrar (let,var) yazmaya gerek yok, değişkenin ismini yazarak yeni stringi verebiliriz.
//let personName = "Fırat"

//personName = "Fırat Demir"

//const ile değişmemesi gereken bir değişken atıyoruz
//const isim = "Demir"

//template kullanarak bir stringi başka yere çekmek 
//let greetingTemplate = `Merhaba ${personName} !`

//iki stringi birleştirme yolu(concation)
//let concation = "hello " + personName +" " + isim + " !"

//console.log(concation)
//console.log(greetingTemplate)
//console.log(personName)
//console.log(isim)

//2.KONU    
//Scope terimleri

//{
    //const name = "Fırat";
   // let surname = "Demir";
    //{
      //  const name = "Furkan";
     //   let surname = "Derin";
      //  {
      //  }
        //console.log(name);//çıktı önceliği içerideki block scope'a verilir
       // console.log(surname);
  //  }
   // console.log(name);
   // console.log(surname);
    
//}

//3. KONU
//Veri Tipleri
//string veri tipi
/*const person = "Ali";
//console.log(typeof person);

//number veri tipi
let age = 16;
console.log(typeof age);
console.log(typeof (typeof age));//typeof bir değerin çıktısını verir typeofun typeofu alınığında içindeki değer number da olsa bir string olduğu için sonuç string çıkacaktır.

//boolean veri tipi
const isOverAge = true;
console.log(typeof isOverAge);

//function veri tipi
console.log(typeof (()=>{}));

//object veri tipi
const personName = {
    name: "Fırat",
    age: 24,
    isOverAge: true,
    city: "Çorum",
    color: "blue"
}
personName.name = "İbrahim"
personName.city = "Diyarbakır"
//const değişkenini object şekilde yazarsak içerisindeki objeleri değiştirebiliriz.
console.log(typeof personName);
console.log(personName);

//null veri tipi javaScriptin sisteminde buluan objeymiş gibi davranan veri
/*const = null*/
/*console.log(typeof null);*/

/*const personName = {
    name: "Fırat",
    surname: "Demir",
    age: 24,
    hobbies: ["basketball", "video games"],/*Array sınıfı olduğunu gösteren ama typeof ile sorguladığımızda yine de object çıktısını verir.*/ 
 /*   notesObj: {
        0: "note1",
        1: "notee2"
    }
}
//Array.isArray sorgusu ile bir boolean değeri döndürüp true ya da false değerini alırız.
console.log(Array.isArray(personName.hobbies));
console.log(Array.isArray(personName.notesObj));
*/

//Function çeşitleri
/*function isim(parametre) {
    console.log('isim', parametre);
}

const f1 = function(arg1, arg2){
    console.log('f1', arg1, arg2);
}
//arrow function
const f2 = (arg1, arg2) => {
    console.log('f2', arg1, arg2);
}
isim(1);
f1(2,3);
f2(3,4);
*/
//asenkron fonksiyon
/*
console.log("ilk sıradaki işlem");
setTimeout(() => {
    console.log("ikinci sıradaki işlem");
}, 3000);
//setTimeout anlık bir işlem olduğu için içinde bulunduğu logu set eder ve javascriptin yoluna devam etmesini sağlar.
console.log("üçüncü sıradaki işlem");
*/

//promise/await fonksiyon
/*async function main() {
    console.log("ilk sıradaki işlem");
    await new Promise ((resolve, reject)=>{
        setTimeout(() => {
            console.log("ikinci sıradaki işlem");
            resolve()
        }, 3000);
    })
    console.log("üçüncü sıradaki işlem");
}
main()
*/
//kısa yolla tanımlama yapma 
/*
const wait = (ms) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
async function main() {
    console.log("ilk sıradaki işlem");
    await wait(2000);
    console.log("ikinci sıradaki işlem");
    await wait(2000);
    console.log("üçüncü sıradaki işlem");
}
main();
*/

//döngüler
//koşullu ifadeler(if,else)
//işleme yapılacak ontrol sonrası hayata geçirilecek döngü, koşullu ifadeler
/*
const person = {
    name: "Fırat",
    surname: "Demir",
    age: 24
}
const isOverAge = (person) => person.age > 20;

if (isOverAge(person)){
    console.log("hello world!");
}
*/
//döngüler
/*
const wait = (ms) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
async function main() {
    for (let i = 0; i < 10; i++) {
       console.log("Fırat", i);
       await wait(2000);
    }

/*    let i = 0;
    while (i < 10) {
        console.log("Fırat");
        i = i + 1;
        await wait(2000);
    }*/
//}
//main();

//Assign operations
/*
const a = 2;
const b = 5;
let j = 0;
let i = 0;
let k =(i = a + b);
console.log(k);

//assign
//less than
//greather than
//less than or equal to
//greather than or equal to

let i = 0;
i++;
*/
/*
console.log(undefined - 5);

if ("Fırat"){
    console.log("hello");
}
console.log("5" == 5);//iki eşittirin anlamı eğer string gibi görünen numberi dönüştürülüyorsa tekrar kontrol et eşitse eşitle demek. cevap true
console.log("2" === 2);// üç eşittir ise her şeyiyle eşitse eşitle demek. cevap false

console.log(false === Boolean(null));

//and operation && booleana kast eder
//or operation ||booleana kast eder
// not operation ! boolean değerin tersini ifade eder

const person2 = {
    ...person,
    job: {
        ...person.job,
        company:{...person.job.company, ceo:{...person.job.company.ceo}}
    },
};
person2.job.company.name = "Fazebook";
console.log(person);
*/
//spread operator & rest operator (...)
const person = {
    name: "John",
    age:25,
    isMarried:false,
    children: ["Anna", "Peter"],
    job: {
        tittle: "FrontEnd",
        company:{
            name:"Google",
            ceo:{
                name:"Sundar",
                age:50,
                isMarried:true,
            },
        },
    },
};

//rest operatör fonksiyonlara sınır sayısı olmadan parametre geçmemizi sağlayan bir operatördür. bizim istediğimiz harici kalan tüm öğeleri bir dizide toplar.
//örnek
function sum(a, b, ...geriyeKalan) {
    console.log(a);
    console.log(b);
    console.log(geriyeKalan);
}
sum(1,2,3,4,5,6,7);
//a ve b kendi değerlerini ilk sıradan alır geriye kalan değerler ise rest operatöre geçer.
/*function f(arg1, ...rest, arg2) {
    //error yanlış kullanım, bir rest operatör sondaki kalan değişkenleri toplar.
}
*/
//spread operatör
//spread öperatörü; string, array veya object değişmezlerini genişletmemize olanak sağlar.
//string örnek kullanımı
let isim = "javascript";
let arrayOfString = [...isim];
console.log(arrayOfString);
//dizileri birleştirme
const group1 = [1,2,3];
const group2 = [4,5,6];
const allGroups = [...group1, ...group2];
console.log(allGroups);
//Fonsksiyon çağrılarında spread operatör kullanımı
function number(a,b,c) {
    return a+b+c;
}
const nums =[1,2,3];
number(...nums);
console.log(number, nums);
//dizilerde spread kullanımı
//bir fonksiyona tek argüman olarak aktarılan bir diziye sahip başka bir örnek olarak tüm öğeleri almak ve konsola yazdırmak için spread operatörünü kullanacağız.
const numbers = [1,2,3,4,5];
(function singleArray(single_array) {
    console.log(...single_array);
})(['james', 'janet', ...numbers]);

//Rest ve Spread birlikte kullanımı

(function (firstElement, ...fruits) {
    //rest op son parametrede kullandık
    const extra = ['squash', 'banana', ...fruits];
    console.log("spread =>", extra);
    //ilk argümanımızı(firstelement) rest ile aldığımız için kalanlar spread ile birleştirildi.
    console.log("rest ile ilk argümanımızı aldık =>", firstElement);
    console.log("rest ile kalan öğeler =>", fruits);
})('pineapple', 'apple', 'orange');




