import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {

    constructor(private _builder: IBuilder) {


    }

    constructSedanCar() {

        this._builder.setVehicleType(VehicleType.SEDAN);
        this._builder.setSeats(5);
        this._builder.setTransmission(Transmission.AUTOMATIC);
        this._builder.setEngine(new Engine(2000));
        this._builder.addWheel(new Wheel(17));
        this._builder.addWheel(new Wheel(17));
        this._builder.addWheel(new Wheel(17));
        this._builder.addWheel(new Wheel(17));
    }

    constructTruck() {
        this._builder.setVehicleType(VehicleType.TRUCK);
        this._builder.setSeats(3);
        this._builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
        this._builder.setEngine(new Engine(5000));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
    }
} 