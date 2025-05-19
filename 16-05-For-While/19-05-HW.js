const prompt = require('prompt-sync')();

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const a = parseInt(prompt("введите число a (меньше b): "));
const b = parseInt(prompt("Введите число b (больше а): "));

if (isNaN(a) || isNaN(b) || a >= b) {
  console.log("ошибка! введите два числа, где a < b");
} else {
  console.log(`простые числа от ${a} до ${b}:`);
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

