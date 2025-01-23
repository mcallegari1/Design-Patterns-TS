import IVehicle from "./IVehicle";

export default interface IVehicleCar extends IVehicle {

    configureCar(color : string, year : number, engine : number, doors : number) : void;
}