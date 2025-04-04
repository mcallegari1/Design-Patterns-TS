import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import Motorcycle from "../vehicles/land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNine implements ITransportFactory {
    
    createLandVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    createAircraft(): IAircraft {
        return new Helicopter();
    }

}