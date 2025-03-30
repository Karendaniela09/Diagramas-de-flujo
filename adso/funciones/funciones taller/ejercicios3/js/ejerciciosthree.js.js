/*
 Description: Math operations  
 Autor: Karen Daniela
 Date: 27-March-2025  
 */
 
 function sumArray(numbers) {
     return numbers.reduce((acc, num) => acc + num, 0);
 }
 
 const numbersArray = [1, 2, 3, 4, 5];
 
 console.log(La suma es: ${sumArray(numbersArray)});