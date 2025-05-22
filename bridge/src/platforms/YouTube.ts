import IPlatform from "./IPlatform";

export default class YouTube implements IPlatform {
    
    constructor() {
        this.configureRTMP();

        console.log("Youtube: Transmissão iniciada!");
    }

    configureRTMP(): void {
        this.authToken();
        console.log("Youtube: Configurando o broadcasting...");
    }
    
    authToken(): void {
        console.log("Youtube: Autenticando!");
    }

}