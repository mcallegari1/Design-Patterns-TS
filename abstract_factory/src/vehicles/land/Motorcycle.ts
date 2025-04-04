import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
    
    startRoute(): void {
        this.getCargo();

        console.log('Moto saindo');
    }
    getCargo(): void {
        console.log('entrega coletada');
    }

}