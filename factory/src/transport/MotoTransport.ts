import Transport from "./Transport";
import IVehicle from "./vehicle/interface/IVehicle";
import Moto from "./vehicle/Moto";

export default class MotoTransport extends Transport {
    
    protected createTransport(): IVehicle {
        return new Moto();
    }

    
}