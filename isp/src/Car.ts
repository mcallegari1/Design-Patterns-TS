import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
    
    constructor(
        color : string,
        year : number,
        engine: number,
        doors : number
    ) {
        this.configureCar(color, year, engine, doors);
    }

    configureCar(color: string, year: number, engine: number, doors: number): void {
        console.log('Setando os dados do carro...');

        this.startEngine();
    }
    startEngine(): void {
        console.log('Motor ligado...');
    }
    
}