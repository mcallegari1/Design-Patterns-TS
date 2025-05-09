import IBuilder from "./builders/IBuilder";
import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";


const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();

const vehicle: Vehicle = builder.getVehicle();

console.log(`Construido um veículo do tipo: ${vehicle.vehicleType} com ${vehicle.wheelsTotal} rodas`);

director.constructTruck();

const truck: Vehicle = builder.getVehicle();

console.log(`Construido um veículo do tipo: ${truck.vehicleType} com ${truck.wheelsTotal} rodas`);