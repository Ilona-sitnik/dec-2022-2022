//1
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let erst = [10, 20, true, [10, 15, 25], "Anna", "Ilona", "Nina", 50, false, 33];
console.log(erst);
console.log(erst[0]);
console.log(erst[1]);
console.log(erst[2]);
console.log(erst[3]);
console.log(erst[4]);
console.log(erst[5]);
console.log(erst[6]);
console.log(erst[7]);
console.log(erst[8]);
console.log(erst[9]);

//2
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
/*
let book1= {
    title:"Harri potter",
    pageCount:700,
    genre:"Fantasy",
}

let book2={
    title:"The lord of the rings",
    pageCount:700,
    genre:"Fantasy",
}
let book3={
    title:"The Da Vinci Code",
    pageCount:750,
    genre:"Mystery",
}

console.log(book1,book2,book3);*/

let books = [
    {title: "Harri potter", pageCount: 700, genre: "Fantasy"},
    {title: "The lord of the rings", pageCount: 700, genre: "Fantasy"},
    {title: "The lord of the rings", pageCount: 700, genre: "Fantasy",}
]
console.log(books[0].title, books[2].title,);

//3
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
/*
let book11= {
    title:"Harri potter",
    pageCount:700,
    genre:"Fantasy",
    autors:["J. R. R. Tolkien",81],
}
let book33={
    title:"The Da Vinci Code",
    pageCount:750,
    genre:"Mystery",
    autors:["Daniel Gerhard Brown",58]
}
console.log(book11);*/

let books2 = [
    {title: "Harri potter", pageCount: 700, genre: "Fantasy", autors: ["Joanne K. Rowling", 57],},
    {title: "The lord of the rings", pageCount: 700, genre: "Fantasy", autors: ["J. R. R. Tolkien", 81]},
    {title: "The Da Vinci Code", pageCount: 750, genre: "Mystery", autors: ["Daniel Gerhard Brown", 58]},

]
console.log(books2[0].autors[0])
//4
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль ' +
// 'пароль кожного користувача
let users =[
    {name:"Sascha", username: "erste", passwort:1313},
    {name: "Petja", username: "zweite", passwort:1414},
    {name: "Max", username: "dritte", passwort:1515},
    {name: "Anna", username: "erste", passwort:1316},
    {name: "Sweta", username:" erste", passwort:1317},
    {name: "katja", username: "erste", passwort:1318},
    {name: "Mascha", username: "erstes", passwort:1319},
    {name: "Alex", username: "erste", passwort:1320},
    {name: "Kostja", username:"erste", passwort:1321},
    {name: "Ilona", username: "erste", passwort:1322},

]
console.log(users[0].passwort, users[1].passwort, users[2].passwort, users[3].passwort, users[4].passwort, users[5].passwort, users[6].passwort, users[7].passwort, users[8].passwort, users[9].passwort);

//5
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
// 1, 0, -3

let x= 1;
if(x!==0){
    console.log("Вірно");
}else{
    console.log("Невірно")
}

//6
// - Дано змінну day яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
// число
// (в першу, другу, третю или четверту частину години).

let time =30;

if (time>0 && time <= 15){
    console.log("1");
}else if (time>15 && time<=30){
    console.log(2)
}else if (time>15 && time<=45){
  console.log(3)
}else if (time >45 && time<=60){
    console.log("4")
}else {
    console.log("?????")
}

//7
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day=22;
if(day>0 && day<=10){
    console.log("1");
}else if(day>10 && day<=20){
    console.log("2");
}else if(day>20 && day<=31){
    console.log("3")
}else{
    console.log("?????");
}

// 8 - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
//     інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let tag=6;
switch(tag) {
    case 1:
        console.log("montag");
        break;
    case 2:
        console.log("dienstag");
        break;
    case 3:
        console.log("mittwoch");
        break;
    case 4:
        console.log("donnersatg");
        break;
    case 5:
        console.log("freitag");
        break;
    case 6:
        console.log("samstag");
        break;
    case 7:
        console.log("sonntag");
        break;
    default:
        console.log("????");
}

//    9 - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=3;
let b=3;

if (a>b){
    console.log(a);
}else if(a<b){
    console.log(b);
}else if(a===b){
    console.log("rivni");
}else{
    console.log("????")
}

// 10 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)


// 11 - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 if (coursesAndDurationArray[0].monthDuration>5){
     console.log("SUPER");
 }if(coursesAndDurationArray[1].monthDuration>5){
     console.log("SUPER");
 }if(coursesAndDurationArray[2].monthDuration>5){
     console.log("SUPER");
 }if(coursesAndDurationArray[3].monthDuration>5){
    console.log("SUPER");
}if(coursesAndDurationArray[4].monthDuration>5){
         console.log("SUPER");
 }if(coursesAndDurationArray[5].monthDuration>5){
     console.log("SUPER");
 }