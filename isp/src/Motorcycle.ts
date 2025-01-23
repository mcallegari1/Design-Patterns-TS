import IVehicle from "./IVehicle";
import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicle, IVehicleMotorcycle {
    
    constructor(
        color : string,
        year : number,
        engine: number,
    ) {
        this.configureMotorcycle(color, year, engine);
    }
    configureMotorcycle(color: string, year: number, engine: number): void {
        console.log('Setando os dados da moto...');

        this.startEngine();
    }
    startEngine(): void {
        console.log('Ran dandandann');
    }

    
}