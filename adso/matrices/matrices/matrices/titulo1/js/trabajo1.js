/*
	Name exercise:vectores
	Description:vectores
	Autor: Karen Daniela Holguin Cruz 
	Date: march 25th 2025

*/

let matriz1 = [
	[8, 2],
	[3, 7]

];


let matriz2 = [
	[9, 2],
	[5, 1]
];
let suma = matriz1.map((fila, i) =>
	fila.map((valor,j) => valor + matriz2[i][j])
);
console.log(suma);