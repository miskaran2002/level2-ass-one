
// solution of problem1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((value) => value % 2 === 0);
}

// solution of problem2
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}
