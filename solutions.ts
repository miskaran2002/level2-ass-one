
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
