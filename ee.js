
// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

let fib = []
 for (let i =0 ; i <= 20 ; i++){
     if(i==0){
         fib[i]=i
     }else if(i==1){
         fib[i]=i
     }else{
         fib[i] = fib[i-1] + fib[i-2]

     }
 }
   console.log(fib.length);
   console.log(fib);


//  Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5,
//   but not both 3 and 5. To solve this task you might want to use the modulus operator.

for( let i = 200 ;i<=2700; i++){
     if ((i%3==0 || i%5==0) && !(i%3==0 && i%5==0)){
                 console.log(i)
    }
}


// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number 
// by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

//  let x = [1,2,5,8,9]
//  for(let i = 0 ; i<=(x.length/2)-1 ; i++){
//      let s
//     s=x[i]
//     x[i]=x[x.length-i-1]
//      x[x.length-i-1]=s
//    }
//    console.log(x)


let x = [1,2,5,8,9]
let s =[];
for(let i = 0 ; i<x.length ; i++){
    
    s[i]=x[x.length-1-i];
}
console.log(s)




// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

let arrNum = [1, -2, 4, 1];
for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] < 0) {
    arrNum.splice(i, 1);
    i--;
  }
}
console.log(arr[i])
console.log(arrNum);


// Create an algorithm that inserts the numbers from 1 to 135 into an array,
//  while replacing the values that are divisible by 3 with the word "Fizz", 
// the numbers that are divisible by 5 with the word "Buzz",
//  and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
let result = [];
for (let i = 0; i <= 135; i++) {
  if (i % 3 === 0) {
    result.push("Fizz");
  } else if (i % 5 === 0) {
    result.push("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    result.push("FizzBuzz");
  } else {
    result.push(i);
  }
}
console.log(result);



// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *,
//  so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

let arrStrings = ["Man", "I", "Love", "The", "Matrix", "Program"];
let word = "Program";
let m = ''
  for (let i = 0; i <= arrStrings.length; i++) {
      if (i < word.length){
          m+=`*`;
      }
    if (arrStrings[i] == word) {
        arrStrings[i] = m
    }
  }
console.log(arrStrings);