const myObject = { name: "John", age: 25 };
console.log(myObject["name"]); // Output: John

const myObject1 = { name: "John", age: 25, city: "New York" };
delete myObject.city;
console.log(myObject1); // Output: { name: 'John', age: 25 }

// Множини (Sets)
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet); // Вивід: Set { 1, 2, 3, 4, 5 }

const mySet1 = new Set([1, 2, 3, 4, 5]);
mySet1.add(6);
console.log(mySet1); // Вивід: Set { 1, 2, 3, 4, 5, 6 }

const mySet2 = new Set([1, 2, 3, 4, 5]);
mySet2.delete(1);
console.log(mySet2); // Вивід: Set { 2, 3, 4, 5 }

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// Об'єднання
const unionSet = new Set([...set1, ...set2]);
console.log(unionSet); // Вивід: Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// Перетин
const intersectionSet = new Set([...set1].filter((x) => set2.has(x)));
console.log(intersectionSet); // Вивід: Set { 4, 5 }

// Різниця
const differenceSet = new Set([...set1].filter((x) => !set2.has(x)));
console.log(differenceSet); // Вивід: Set { 1, 2, 3 }

// Симетрична різниця
const symmetricDifferenceSet = new Set(
  [...set1]
    .filter((x) => !set2.has(x))
    .concat([...set2].filter((x) => !set1.has(x))),
);
console.log(symmetricDifferenceSet); // Вивід: Set { 1, 2, 3, 6, 7, 8 }

// Stack
class Stack {
  constructor() {
    this.stack = [];
  }

  // Додавання елемента до стеку
  push(item) {
    this.stack.push(item);
  }

  // Видалення елемента зі стеку
  pop() {
    if (this.stack.length < 1) {
      return null;
    }
    return this.stack.pop();
  }

  // Перевірка, чи стек порожній
  isEmpty() {
    return this.stack.length === 0;
  }

  // Перегляд верхнього елемента стеку без його видалення
  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
  }
}
// Приклад використання
const s = new Stack();
s.push("a");
s.push("b");
s.push("c");

console.log(s.peek()); // Вивід: 'c'
console.log(s.pop()); // Вивід: 'c'
console.log(s.peek()); // Вивід: 'b'
console.log(s.isEmpty()); // Вивід: false

// Queue
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
    console.log(this.tail);
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.elements[this.head];
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}

// Створюємо чергу
const q = new Queue();

// Додаємо елементи
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");

// Виводимо стан черги
console.log(q.elements); // Output: {0: 'a', 1: 'b', 2: 'c'}

console.log(q.peek());

// Видаляємо елемент
q.dequeue();

// Виводимо стан черги після видалення
console.log(q.elements); // Output: {1: 'b', 2: 'c'}

// bank and clients
class Client {
  constructor(name) {
    this.name = name;

    // Випадкова кількість операцій
    this.operations = Math.floor(Math.random() * 5) + 1;
  }
}

class Bank {
  constructor() {
    this.clients = new Queue();
  }

  newClient(client) {
    this.clients.enqueue(client);
  }

  serveClients() {
    while (!this.clients.isEmpty) {
      const currentClient = this.clients.dequeue();
      console.log(
        `Обслуговуємо клієнта ${currentClient.name} з ${currentClient.operations} операцій`,
      );
      // Тут можна додати час обслуговування та іншу логіку
    }
  }
}

// Створюємо банк
const bank = new Bank();

// Додаємо клієнтів
for (let i = 1; i < 5; i++) {
  bank.newClient(new Client(`Client-${i}`));
}

// Обслуговуємо клієнтів
bank.serveClients();

// // deque
// import { Deque } from "js-sdsl";

// // Створення екземпляру Deque
// const deque = new Deque();

// // Додавання елементів
// deque.append(1);
// deque.appendleft(2);
// deque.extend([3, 4, 5]);

// // Вивід елементів
// console.log(deque.pop()); // Output: undefined
// console.log(deque.popleft()); // Output: 2

// // Довжина та перевірка на пустоту
// console.log(deque.length()); // Output: 3
// console.log(deque.isEmpty()); // Output: false
