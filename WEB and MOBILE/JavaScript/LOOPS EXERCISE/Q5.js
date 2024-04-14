//  A JS code to print a pattern using for loop.
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
//  1 2 3 4 5 6
//  1 2 3 4 5 6 7
//  1 2 3 4 5 6 7 8 

const numberOfRows = 8;
for (let i = 1; i <= numberOfRows; i++) {
  let pattern = ''; 
  for (let j = 1; j <= i; j++) {
    pattern += j + ' ';
  }
  console.log(pattern); 
}



