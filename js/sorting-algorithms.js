// Bubble sort. Часова складність — O(n2)
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Обмін елементів, якщо вони не впорядковані
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const numbers = [5, 3, 8, 4, 2];
bubbleSort(numbers);
console.log(numbers);

// Insertion sort. Часова складність — O(n2)
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const arr = [5, 3, 8, 4, 2];
insertionSort(arr);
console.log(arr);

//Selection Sort. Часова складність у найгіршому, середньому й найкращому випадках — O(n2)
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}

const numbers1 = [5, 3, 8, 4, 2];
console.log(selectionSort(numbers1));

// Quick sort. Часова складність О(n log n) у середньому випадку, O(n2) - у найгіршому випадку.
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return [...quicksort(left), ...middle, ...quicksort(right)];
}

const result = quicksort([5, 3, 8, 4, 2]);
console.log(result); // Виведе: [2, 3, 4, 5, 8]

// //Merge sort. Часова складність О(n log n)
// import mergeSort from '@jsundefined/algojs/sort/merge';

// const numbers2 = [5, 3, 8, 4, 2];
// const sortedNumbers = mergeSort(numbers2);

// console.log(sortedNumbers); // [2, 3, 4, 5, 8]

//Radix sort O(n d)