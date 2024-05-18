const persons = [
  {
    name: "Arafat",
    age: 19,
    gender: "male",
  },
  {
    name: "Rabia",
    age: 19,
    gender: "female",
  },
  {
    name: "Monika",
    age: 19,
    gender: "female",
  },
  {
    name: "Sumaiya",
    age: 19,
    gender: "female",
  },
  {
    name: "Mahdi",
    age: 19,
    gender: "male",
  },
];

const females = (items) => {
  const female = items.filter((item) => item.gender !== "female");
  const arrNames = female.map((name) => name.name);
  return arrNames;
};

// const female = females(persons);
// console.log(female);

const Books = [
  {
    title: "Life of a programmer",
    author: "Arafat Hossen Joni",
    year: 2028,
  },
  {
    title: "Hello to Bussness",
    author: "Arafat Hossen Joni",
    year: 2029,
  },
  {
    title: "Four Hour work week",
    author: "Arafat Hossen Joni",
    year: 2030,
  },
  {
    title: "Atomic habit",
    author: "Arafat Hossen Joni",
    year: 2031,
  },
];

const arrayOfTitle = (title) => {
  const books = title.map((book) => book.title);
  return books;
};

// const titleOfBooks = arrayOfTitle(Books);
// console.log(titleOfBooks);

const squire = (num) => {
  return num * num;
};
const double = (num) => {
  return num * 2;
};
const addFive = (num) => {
  return num + 5;
};

const NumberNa = (num) => {
  const square = squire(num);
  const dobule = double(square);
  const add = addFive(dobule);
  return add;
};

console.log(NumberNa(5));
