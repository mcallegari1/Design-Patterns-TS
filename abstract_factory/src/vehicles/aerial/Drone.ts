import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
    
    startRoute(): void {
        this.getCargo();
        this.checkWind();

        console.log('drone no trajeto');
    }
    getCargo(): void {
        console.log('drone pegou o objeto');
    }
    checkWind(): void {
        console.log('vento suave pra drone');
    }

}