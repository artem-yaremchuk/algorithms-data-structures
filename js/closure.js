function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const counter = createCounter();

counter(); //1
counter(); //2
counter(); //3
