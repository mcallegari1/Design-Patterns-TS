export default interface IVehicleCar {

    configure(
        color:string, 
        year:number,
        doors:number
    ) : void;

    startEngine(): void;

}