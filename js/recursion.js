function factorial(n) {
  if (n === 0) {
		// базовий випадок
    return 1;
  } else {
		// рекурсивний випадок
    return n * factorial(n - 1); 
  }
}

console.log(factorial(5)); // виведе 120

function fibonacci(n) {
  if (n <= 1) {
		// базовий випадок
    return n;
  } else {
		// рекурсивний випадок
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(10)); // виведе 55

function factorial1(n) {
  console.log("Виклик функції factorial з n = ", n);
  if (n === 1) {
    console.log("Базовий випадок, n = 1, повернення 1");
    return 1;
  } else {
    const result = n * factorial1(n - 1);
    console.log("Повернення результату для n = ", n, ": ", result);
    return result;
  }
}

console.log(factorial1(5));

function sumIter(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(sumIter(5)); // виведе 15

function sumRec(n) {
  if (n === 0) { // базовий випадок
    return 0;
  } else {
    return n + sumRec(n - 1); // рекурсивний випадок
  }
}

console.log(sumRec(5)); // виведе 15

function fibonacciMemo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  } else {
    const value = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    memo[n] = value;
    return value;
  }
}

// Тестуємо функцію
console.log(fibonacciMemo(10));  // Виведе: 55

// import LRU from 'lru-cache';

// // Створюємо кеш із максимальним розміром 5 (max)
// const cache = new LRU({ max: 5 });

// // Рекурсивна функція для обчислення чисел Фібоначчі з використанням кешу
// function fibonacci1(n) {
//   if (n <= 1) {
//     return n;
//   } else if (cache.has(n)) {
//     // Якщо значення вже в кеші, повернути його
//     return cache.get(n);
//   } else {
//     // Обчислити значення
//     const value = fibonacci1(n - 1) + fibonacci1(n - 2);
    
//     // Зберегти значення в кеші
//     cache.set(n, value);
    
//     return value;
//   }
// }

// // Тестування функції
// console.log(fibonacci1(10));  // Виведе: 55

// const fs = require('fs');
// const path = require('path');

// const displayTree = (currentPath, indent = '') => {
//   console.log(indent + path.basename(currentPath));

//   if (fs.statSync(currentPath).isDirectory()) {
//     const children = fs.readdirSync(currentPath);
//     for (const child of children) {
//       const childPath = path.join(currentPath, child);
//       displayTree(childPath, indent + '    ');
//     }
//   }
// };

// const root = 'picture';  // Set your root directory
// displayTree(root);
