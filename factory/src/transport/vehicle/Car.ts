import IVehicle from "./interface/IVehicle";

export default class Car implements IVehicle {

    getCarga(): void {
        console.log('Pegando passageiro');
    }
    startRoute(): void {
        this.getCarga();

        console.log('A caminho do destino..');
    }

}