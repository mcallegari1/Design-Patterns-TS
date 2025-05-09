import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder {
    
    private vehicle = new Vehicle();

    reset(): void {
        this.vehicle = new Vehicle();
    }
    
    getVehicle(): Vehicle {
        const result = this.vehicle;
        this.reset();
        return result;
    }

    addWheel(value: Wheel): void {
        this.vehicle.addWheel(value);
    }
    
    setVehicleType(value: VehicleType): void {
        this.vehicle.vehicleType = value;
    }
    
    setEngine(value: Engine): void {
        this.vehicle.engine = value;
    }
    
    setTransmission(value: Transmission): void {
        this.vehicle.transmission = value;
    }
    
    setSeats(value: number): void {
        this.vehicle.seats = value;
    }

}