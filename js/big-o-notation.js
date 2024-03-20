// Алгоритм із часовою складністю O(1)
function getFirstItem(items) {
  // Завжди виконується одна операція, незалежно від розміру списку
  return items[0];
}

console.log(getFirstItem([1, 2, 3, 4, 5]));

// Алгоритм із часовою складністю O(n)
function printAllItems(items) {
  for (const item of items) {
    // Кількість операцій прямо пропорційна кількості елементів у списку
    console.log(item);
  }
}

printAllItems([1, 2, 3, 4, 5]);

// Алгоритм із часовою складністю O(n2)
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Приклад використання:
const numbers = [12, 11, 13, 5, 6];
insertionSort(numbers);
console.log("Відсортований масив:", numbers);

// Алгоритм із часовою складністю O(n3)
function multiplyMatrices(A, B) {
    const n = A.length;
    console.log(n);
  const C = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

const A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const B = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];

console.log(multiplyMatrices(A, B));

// Просторова складність O(1)

function getItemByIndex(items, index) {
    return items[index];
}

// Приклад використання
const items = [1, 2, 3, 4, 5];
const index = 2;
console.log(getItemByIndex(items, index)); // Вивід: 3

// Просторова складність O(n)
function reverseList(items) {
    return items.slice().reverse();
}

// Приклад використання
const originalList = [1, 2, 3, 4, 5];
const reversedList = reverseList(originalList);
console.log(reversedList); // Вивід: [5, 4, 3, 2, 1]

// Просторова складність O(n2)
function generatePairs(elements) {
    const pairs = [];

    for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
            pairs.push([elements[i], elements[j]]);
        }
    }

    return pairs;
}

// Приклад використання
const elements = [1, 2, 3, 4];
console.log(generatePairs(elements));

