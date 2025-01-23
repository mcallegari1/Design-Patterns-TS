import Car from "./vehicle/Car";
import Motorcycle from "./vehicle/Motorcycle";

// OCP - OPEN/CLOSED PRINCIPLE 
// ABERTO PARA EXTENSÃO, FECHADO PARA MODIFICAÇÃO

let car = new Car('Verde', 1997, 4);

let moto = new Motorcycle('Azul', 2020);