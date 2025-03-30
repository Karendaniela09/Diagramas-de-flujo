Description: Math operations  
 Autor: Karen Daniela 
 Date: 27-March-2025  
 */
 
 function numb(number) {
     return number % 2 === 0 ? 'Par' : 'Impar';
 }
 
 const userNumber1 = 20;
 const userNumber2 = 17;
 
 console.log(El numero ${userNumber1} es: ${numb(userNumber1)});
 console.log(El numero ${userNumber2} es: ${numb(userNumber2)});