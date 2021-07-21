const isPrime = (number) => {
  let start = 2;
  const limit = Math.sqrt(number);
  while (start <= limit) {
      if (number % start++ < 1) return false;
  }
  return number > 1;
}

for (let position = 1; position <= 100; position++) {
 
  if (isPrime(position)) {
    console.log("Prime");
  } 
  
  else if (position % 3 === 0 && position % 5 === 0) {
    console.log("FizzBuzz");
  } 
  
  else if (position % 3 === 0) {
    console.log("Fizz");
  } 
  
  else if (position % 5 === 0) {
    console.log("Buzz");
  } 
  else {
    console.log(position);
  }
}
