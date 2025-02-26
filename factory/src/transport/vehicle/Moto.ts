import IVehicle from "./interface/IVehicle";

export default class Moto implements IVehicle {
    
    getCarga(): void {
        console.log('Pegando a entrega');
    }
    startRoute(): void {
        this.getCarga();
     
        console.log('Entrega a caminho');
    }
    
}