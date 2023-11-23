// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [100, 34, "okten", "education", true, false, 2.34, -987, "com", "ua"]
console.log(arr)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookHarryPotter = {
    title: "HarryPotter",
    pageCount: 267,
    genre: "fantasy"
}
console.log(bookHarryPotter);

let bookKobzar = {
    title: "Kobzar",
    pageCount: 175,
    genre: "poems"
}
console.log(bookKobzar);

let bookReWork = {
    title: "ReWork",
    pageCount: 175,
    genre: "economy"
}
console.log(bookReWork);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let HarryPotter = {
    title: "HarryPotter",
    pageCount: 267,
    genre: "fantasy",
    authors: [
        {name: "J. K. Rowling"},
        {age: 66},
]
}
console.log(HarryPotter.authors)

let Kobzar = {
    title: "Kobzar",
    pageCount: 175,
    genre: "poems",
    authors: [
        {name: "Taras Shevchenko"},
        {age: "250"},
    ]
}
console.log(Kobzar.authors [0])

let ReWork = {
    title: "ReWork",
    pageCount: 175,
    genre: "economy",
    authors: [
        {name: "J. Frayd"},
        {age: "85"},
    ]
}
console.log(ReWork.authors [1])



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
  user1 = ["name1", "username1", "password1"],
  user2 = ["name2", "username2", "password2"],
  user3 = ["name3", "username3", "password3"],
  user4 = ["name4", "username4", "password4"],
  user5 = ["name5", "username5", "password5"],
  user6 = ["name6", "username6", "password6"],
  user7 = ["name7", "username7", "password7"],
  user8 = ["name8", "username8", "password8"],
  user9 = ["name9", "username9", "password9"],
  user10 = ["name10", "username10", "password10"],
];
console.log(users[0][2]);
console.log(users[1][2]);
console.log(users[2][2]);
console.log(users[3][2]);
console.log(users[4][2]);
console.log(users[5][2]);
console.log(users[6][2]);
console.log(users[7][2]);
console.log(users[8][2]);
console.log(users[9][2]);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".