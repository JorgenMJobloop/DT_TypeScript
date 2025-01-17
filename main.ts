import { Person } from "../ts_project/interface/Person.ts";
import { reverseArray } from "./generic.ts";
import { User } from "./interface/User.ts";


export function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

type divisonException = ErrorConstructor;
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide a number by 0");
  }
  return a / b;
}

function greeting(name: string): string {
  return "Hello " + name;
}

function isFalse(statement: boolean): boolean {
  return statement;
}

function MyArray(arr: string[]): string[] {
  return arr;
}

function printUserInfoFromAPI(user: User): void {
  console.log(`ID: ${user.id}, Name: ${user.name}, Is Logged In: ${user.currentlyLoggedIn}`)
}

const user: User = { id: 1, name: "John Doe", currentlyLoggedIn: true };

printUserInfoFromAPI(user);

const numbers = [1, 2, 3, 4];
const strings = ["Hello", "World"];

const reverseNumbers = reverseArray(numbers);
const reveseStrings = reverseArray(strings);

console.log(reverseNumbers);
console.log(reveseStrings);

// implement the interface
function greetPerson(): Person {
  const person: Person = {
    name: "John", age: 33, hobbies: ["Programming", "Video games"]
  }
  return person
}

console.log(divide(1, -1));
console.log(greetPerson());
console.log(MyArray(["a", "b", "c"]));
console.log((isFalse(false)));
console.log(add(10, 10));
console.log(greeting("John"));
console.log(multiply(3, 3));











/*
// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
*/