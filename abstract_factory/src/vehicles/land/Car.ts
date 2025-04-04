import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car  implements ILandVehicle {
    
    startRoute(): void {
        this.getCargo();

        console.log('carro partindo');
    }
    getCargo(): void {
        
        console.log('passegeiros abordo');
    }


}