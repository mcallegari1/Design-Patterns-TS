import IAircraft from "./interfaces/IAircraft";

export default class Helicopter  implements IAircraft {
    
    startRoute(): void {
        this.getCargo();
        this.checkWind();

        console.log('decolando helicoptero');
    }
    getCargo(): void {
        
        console.log('pegou a carga');
    }
    checkWind(): void {
        console.log('vento favoravel');
    }


}