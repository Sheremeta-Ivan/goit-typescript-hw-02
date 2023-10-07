/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

let person: [string, number];
person = ["Max", 21];

//or
// let person: [string, number] = ["Max", 21];

//or
// type Person = [string, number];
// let person: Person = ["Max", 21];

// Вкажете в коментарі до ДЗ чи всі 3 способа правильні?

export {};
