/*
 Description: Math operations  
 Autor: Karen Daniela
 Date: 27-March-2025  
 */
 
 function calculateAcceleration(force, mass) {
     if (mass === 0) return 'La masa no puede ser cero';
     return force / mass;
 }
 
 
 const force = 20;
 const mass = 5;
 
 console.log(La aceleracion es: ${calculateAcceleration(force, mass)});