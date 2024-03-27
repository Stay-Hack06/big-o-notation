
// For each of the functions lised below, indicate the O notation as wll as your reasoning behind the answer.

// 1. Even or odd

function isEven(value){
    if (value % 2 == 0){
      return true;
    }
    else
      return false;
  }
  

  
// 2. Are You Here?
  
  function areYouHere(arr1, arr2) {
      for (let i=0; i<arr1.length; i++) {
          const element1 = arr1[i];
          for (let j=0; j<arr2.length; j++) {
              const element2 = arr2[j];
              if (element1 === element2) return true;
          }
      }
      return false;
  }
  
  
// 3. Doubler
  
  function doubleArrayValues(array) {
      for (let i=0; i<array.length; i++) {
          array[i] *= 2;
      }
      return array;
  }
  

  
// 4. New Search
  
  function newSearch(array, item) {
      for (let i=0; i<array.length; i++) {
          if (array[i] === item) {
              return i;
          }
      }
  }
  
  
// 5. Creating Pairs
  
  function createPairs(arr) {
      for (let i = 0; i < arr.length; i++) {
          for(let j = i+1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
          }
      }
  }
  

  
// 6. Computing Fibonacci Numbers
  
  function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (i === 1) {
        result.push(0);
      }
      else if (i == 2) {
        result.push(1);
      }
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    return result;
  }
  

  
// 7. Efficient Search
  
  function efficientSearch(array, item) {
      let minIndex = 0;
      let maxIndex = array.length - 1;
      let currentIndex;
      let currentElement;
  
      while (minIndex <= maxIndex) {
          currentIndex = Math.floor((minIndex + maxIndex) / 2);
          currentElement = array[currentIndex];
  
          if (currentElement < item) {
              minIndex = currentIndex + 1;
          }
          else if (currentElement > item) {
              maxIndex = currentIndex - 1;
          }
          else {
              return currentIndex;
          }
      }
      return -1;
  }
  

// 8. Random element
  
  function findRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }
  
  
// 9. Is It Prime?
  
  function isPrime(n) {
      if (n < 2 || n % 1 != 0) {
          return false;
      }
      for (let i = 2; i < n; ++i) {
          if (n % i == 0) return false;
      }
      return true;
  }
  
  
  
// 10. Factorial of a number w/ recursion
  
  function factorialOf(n) {
      switch (n) {
          case 0:
          case 1:
              return 1;
          default: return n * factorialOf(n - 1);
      }
  }
  

  //   Answers

// Even or odd:
// Big O notation: O(1)
// Reasoning: The function performs a simple arithmetic operation and returns a boolean value. The time complexity is constant because the input size does not affect the number of operations.

// Are You Here:
// Big O notation: O(n^2)
// Reasoning: The function uses nested loops to compare each element of arr1 with each element of arr2. As the input size increases, the number of comparisons grows exponentially.

// Doubler:
// Big O notation: O(n)
// Reasoning: The function iterates through each element of the input array and doubles its value. The time complexity is linear because the number of operations is directly proportional to the input size.

// New Search:
// Big O notation: O(n)
// Reasoning: The function iterates through each element of the input array until it finds a match with the given item. In the worst case, it may need to iterate through all elements, resulting in a linear time complexity.

// Creating Pairs:
// Big O notation: O(n^2)
// Reasoning: The function uses nested loops to generate pairs of elements from the input array. As the input size increases, the number of pairs grows exponentially.

// Computing Fibonacci Numbers:
// Big O notation: O(n)
// Reasoning: The function generates Fibonacci numbers up to the given input num. It uses a loop that iterates num times, resulting in a linear time complexity.

// Efficient Search:
// Big O notation: O(log n)
// Reasoning: The function performs a binary search on a sorted array. With each iteration, it reduces the search space by half. The time complexity is logarithmic because the number of operations decreases exponentially as the input size increases.

// Random Element:
// Big O notation: O(1)
// Reasoning: The function selects a random element from the input array using a constant-time operation. The time complexity is constant because the input size does not affect the number of operations.

// Is It Prime:
// Big O notation: O(n)
// Reasoning: The function checks if a number n is prime by iterating from 2 to n-1 and performing a modulo operation. In the worst case, it needs to iterate n-2 times, resulting in a linear time complexity.

// Factorial of a Number with Recursion:
// Big O notation: O(n)
// Reasoning: The function calculates the factorial of a number n using recursion. It recursively calls itself n times, resulting in a linear time complexity.
