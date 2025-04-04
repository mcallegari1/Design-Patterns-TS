import ITransportFactory from "../factories/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client {

    private vehicle: ILandVehicle|null = null;
    private aircraft: IAircraft|null = null;

    constructor(factory: ITransportFactory) {

        this.vehicle = factory.createLandVehicle();
        this.aircraft = factory.createAircraft();
    }

    startRoute() {
        this.vehicle?.startRoute();

        this.aircraft?.startRoute();
    }

}