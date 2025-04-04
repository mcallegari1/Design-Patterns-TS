import Airplane from "../vehicles/aerial/Airplane";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class Uber implements ITransportFactory {
    
    createLandVehicle(): ILandVehicle {
        return new Car();
    }
    createAircraft(): IAircraft {
        return new Airplane();
    }

}