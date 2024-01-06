// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age = number;

age = 27;

let userName: string;

userName = "Jeongeun";

let isStudent = boolean;

isStudent = true;

// More complex types

let hobbies: string[];

hobbies = ["Lying down", "Eating"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Jeongeun",
  age: 40,
};

// 정해진 타입의 정의와 맞지 않아서 에러 발생함
// person = {
//   isEmployee: true,
// };

// 객체를 여러 개 가진 배열
let people: {
  name: string;
  age: number;
}[];
