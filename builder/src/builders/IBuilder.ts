import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";

export default interface IBuilder {

    reset(): void;

    getVehicle(): Vehicle;

    addWheel(value: Wheel): void;

    setVehicleType(value: VehicleType): void;

    setEngine(value: Engine): void;

    setTransmission(value: Transmission): void;

    setSeats(value: number): void;
}