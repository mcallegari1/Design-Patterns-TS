import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {

    constructor(
        color:string, 
        year: number,
        doors: number
    ) {
        this.configure(color, year, doors);
    }

    configure(color: string, year: number, doors: number): void {
        console.log(color, year, doors);

        this.startEngine();
    }
    startEngine(): void {
        console.log('Motor ligado');
    }
    
}