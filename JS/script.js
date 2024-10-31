// arr=[1,2,3,4]
// arr.push(8)
// arr.pop()
// arr.shift()
// arr.unshift(9)
// arr.splice(2,1,7,10)
// arr.slice(1,2)
// console.log(arr);



// (function() {
//     console.log("This runs immediately!");
//   })();
  



//   const greet = function(name) {
//     return `Hi, ${name}!`;
//   };
  
//   console.log(greet("Bob"));




// console.log(sum(2,3));
// function sum(a,b){
//     return a+b
// }
  

// const add=(a,b)=>{
//     return a+b
// }
// console.log(add(2,3));


// const added=((a,b)=> a+b)

// console.log(add(2,3));



//constructor functions

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   const person1 = new Person("Alice", 25);
//   console.log(person1.name);
  


//async 

// async function fetchData() {
//     let response = await fetch("https://api.example.com/data");
//     let data = await response.json();
//     console.log(data);
//   }
  
//   fetchData();
  

//   function* generateNumbers() {
//     yield 1;
//     yield 2;
//   }
  
//   const generator = generateNumbers();
  
//   console.log(generator.next().done); // Output: 1
  
//   console.log(generator.next().value); // Output: 2
//   console.log(generator.next().done);



// "use strict"
// function hello(){
//     console.log(this)
// }
// console.log(hello());

// function sum(a,a){
//     return a+a
// }
// console.log(sum(2,7));


// function add(a,b){
//     function sum(){
//         c=a+b
//         return c
//     }
//     return sum
// }

// function full(){
//     const res=add(2,5)
//     const val=res()
//     console.log(val);
    
// }
// full();


// function outerFunction() {
//     let outerVariable = "I am outside!";
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
//   }
  
//   const closureFunction = outerFunction(); 
//   closureFunction();
  


// function add(a,b,c){
//   return a+b+c
// }
// console.log(add(2,4,5));


//CURRYING//

// function curradd(x){
//   return function(y){
//     return function(z){
//       return x+y+z
//     }
//   }
// }
// console.log(curradd(2)(3)(5));



var z = 100;

function sum(){
  var z = 200;
  var z=300; // Legal, redeclaration is allowed with var
  // SyntaxError: Identifier 'z' has already been declared
}

console.log(z); // Output: 200


