// const numbers = [10, 20, 50, 43, 10];

// const total = numbers.reduce((contador, element) => {
//  console.log(`contador: ${contador} | element: ${element}`)
//  return contador + element; 
// }, 0);

// console.log(total)


var createCounter = function(n) {
    
  return function() {
      return n++;
      
  };
};
