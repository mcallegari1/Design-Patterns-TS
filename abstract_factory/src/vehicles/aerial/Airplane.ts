import IAircraft from "./interfaces/IAircraft";

export default class Airplane  implements IAircraft {
    
    startRoute(): void {
        this.getCargo();
        this.checkWind();

        console.log('decolando avião');
    }
    getCargo(): void {
        
        console.log('pegou a carga');
    }
    checkWind(): void {
        console.log('vento favoravel');
    }


}