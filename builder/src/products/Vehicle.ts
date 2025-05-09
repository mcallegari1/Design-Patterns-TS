import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle {
    
    private _vehicleType: VehicleType|undefined;
    private _engine: Engine|undefined;
    private _transmission: Transmission|undefined;
    private _wheels: Wheel[] = [];
    private _seats: number = 0;

    addWheel(value: Wheel) {
        this._wheels.push(value);
    }

    get wheels() : Wheel[] {
        return this._wheels;
    }

    get wheelsTotal(): number {
        return this.wheels.length;
    }

    get vehicleType(): VehicleType|undefined {
        return this._vehicleType;
    }

    set vehicleType(value: VehicleType) {
        this._vehicleType = value;
    }

    get engine(): Engine|undefined {
        return this._engine;
    }

    set engine(value: Engine) {
        this._engine = value;
    }

    get transmission(): Transmission|undefined {
        return this._transmission;
    }

    set transmission(value: Transmission) {
        this._transmission = value;
    }

    get seats(): number {
        return this._seats;
    }

    set seats(value: number) {
        this._seats = value;
    }

    
}