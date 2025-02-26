import IVehicle from "./interface/IVehicle";

export default class Bike implements IVehicle {
    
    getCarga(): void {
        console.log('Pegando sacola do mercadinho');
    }
    startRoute(): void {
        console.log('Levando entrega do mercadinho');
    }

    
}