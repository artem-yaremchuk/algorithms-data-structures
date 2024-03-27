// Linear search. Часова складність O(n), середня складність O(n/2).
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }

    return -1;
}

// Приклад використання:
const array = [1, 3, 5, 7, 9, 11];
const elementToFind = 7;
const result = linearSearch(array, elementToFind);

console.log(`Елемент ${elementToFind} знаходиться на ${result}`);

function existsInList(arr, x) {
    return linearSearch(arr, x) !== -1;
}

const numbers = [1, 3, 5, 7, 9, 11];
console.log(existsInList(numbers, 7));  // Output: true
console.log(existsInList(numbers, 2));  // Output: false

//binarySearch. Часова складність O(log n), n — це кількість елементів у масиві.
function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (low <= high) {
        mid = Math.floor((high + low) / 2);

        if (arr[mid] < x) {
            low = mid + 1;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

const arr = [2, 3, 4, 10, 40];
const x = 10;
const result1 = binarySearch(arr, x);

if (result1 !== -1) {
    console.log(`Element is present at index ${result1}`);
} else {
    console.log("Element is not present in array");
}

//interpolationSearch. Очікувана часова складність O(log log n), якщо дані розподілені равномірно. O(n) - найгірший випадок.
function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        const index = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (x - arr[low]));
        if (arr[index] === x) {
            return index;
        }
        if (arr[index] < x) {
            low = index + 1;
        } else {
            high = index - 1;
        }
    }

    return -1;
}

const arr1 = [1, 3, 5, 7, 9, 11, 14, 16, 18, 20, 22, 25, 28, 30];
const index = interpolationSearch(arr1, 25);
console.log(arr1[index]); // 25

//hashTable. 
const hashTable = {};

hashTable['John Doe'] = '+1234567890';
hashTable['Jane Doe'] = '+0987654321';
hashTable['Jacob Mercer'] = '+0487154395';

console.log(hashTable);

for (const key in hashTable) {
	// використовуємо hasOwnProperty(), щоб перебирати лише власні властивості
  if (hashTable.hasOwnProperty(key)) {
		console.log(`key is: ${key}, value is: ${hashTable[key]}`);
  }
}


const hashTable1 = new Map();

hashTable1.set('John Doe', '+1234567890');
hashTable1.set('Jane Doe', '+0987654321');
hashTable1.set('Jacob Mercer', '+0487154395');

console.log(hashTable1.get('Jacob Mercer'));
// Output: +0487154395

hashTable1.set('John Doe', '+2345678901');
console.log(hashTable1.get('John Doe'));
// Output: +2345678901

console.log(hashTable1.size);
// Output: 3

hashTable1.delete('Jane Doe');

console.log(hashTable1.size);
// Output: 2

for (const [key, value] of hashTable1) {
  console.log(`${key} = ${value}`);
}
