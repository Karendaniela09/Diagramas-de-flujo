/*
	Name exercise: Object on an Inclined Plane
	Description: The force parallel to the surface of an inclined plane
	Author: Karen Daniela Holguín Cruz
	Date: March 23th 2025
*/

let masa = 15;
let anguloInicial = 18;
let anguloFinal = 35;

for (let angulo = anguloInicial; angulo <= anguloFinal; angulo += 5) {
  let fuerzaParalela = masa * 9.81 * Math.sin(angulo * Math.PI / 180);
  console.log("A " + angulo + "° la fuerza paralela es " + fuerzaParalela + " N");
}