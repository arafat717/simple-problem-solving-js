////////// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result./////////////

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

/////////// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result./////////////

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

/////////////// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5./////////////

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

// console.log(NumberNa(5));

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.//

const carsArray = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Impala", year: 2019 },
  { make: "BMW", model: "3 Series", year: 2022 },
  { make: "Audi", model: "A4", year: 2017 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2023 },
];

const AscendingCars = (cars) => {
  const car = cars.sort((a, b) => a.year - b.year);
  return car;
};

// console.log(AscendingCars(carsArray));

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.//

const persons2 = [
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

const modifiedAge = (items, newage, persomName) => {
  const person = items.find((item) => item.name === persomName);
  if (person) {
    person.age = newage;
  }
  return items;
};

// console.log(modifiedAge(persons2, 5, "Mahdi"));

// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];

const sumOfArray = (array) => {
  const sum = array.reduce((acc, fin) => {
    return acc + fin;
  }, 0);
  return sum;
};

// console.log(sumOfArray(numbers));

// Write A Function That Determines Whether A Given Year Is A Leap Year.//

const leapYear = (year) => {
  const leap = year % 4;
  if (leap) {
    console.log(year, "is a leap year");
  } else {
    console.log(year, "is not a leap year");
  }
};

// leapYear(2024);

// Write A Function That Counts The Number Of Vowels In A Given String.//

const CountVowels = (string) => {
  string = string.toLowerCase();
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowel.includes(string[i])) {
      count++;
    }
  }
  return count;
};

const word = "the name of my country is bangladesh";
console.log(CountVowels(word));
