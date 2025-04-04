import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
    
    startRoute(): void {
        this.getCargo();

        console.log('Scooter a caminho');
    }
    getCargo(): void {
        console.log('carga da scooter kkk');
    }

}