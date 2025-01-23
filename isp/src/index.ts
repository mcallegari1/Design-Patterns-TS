import Car from "./Car";
import Motorcycle from "./Motorcycle";

// ISP - INTERFACE SEGREGATION PRINCIPLE
// CLASSES NÃO DEVEM SER FORÇADAS A DEPENDER DE MÉTODOS QUE NÃO UTILIZAM

// Uso da classe implementando uma interface estendendo outra interface
const car = new Car("Azul", 2022, 2.0, 4);

// Uso da classe implementando duas interfaces separadas
const moto = new Motorcycle("Cinza", 2025, 660);