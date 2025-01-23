import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {

    constructor(
        color:string, 
        year: number,
    ) {
        this.configure(color, year);
    }

    configure(color: string, year: number): void {
        console.log(color, year);

        this.startEngine();
    }
    startEngine(): void {
        console.log('Motor ligado');
    }
    
}