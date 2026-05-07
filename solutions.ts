
// solution of problem1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((value) => value % 2 === 0);
}

// solution of problem2
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

// solution of problem3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}


// solution of problem4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  id: 1,
  name: "John Doe",
  age: 21
};

// solution of problem5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
 isRead?: boolean;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true
  };
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024
};



// solution of problem6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}




// solution of problem7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  const result: number[] = [];

  for (const num of arr1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

