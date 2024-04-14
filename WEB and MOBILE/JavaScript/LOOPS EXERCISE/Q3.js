// A JS code to delete all occurrence of element in given array.

let array = [1, 2, 3, 4, 2, 5, 6, 2, 7, 8, 9, 2];

let elementToDelete = 2;

array = array.filter(item => item !== elementToDelete);

console.log(array);
