import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform {

     constructor() {
        this.configureRTMP();

        console.log("Facebook: Transmissão iniciada!");
    }

    configureRTMP(): void {
        this.authToken();
        console.log("Facebook: Configurando o broadcasting...");
    }
    
    authToken(): void {
        console.log("Facebook: Autenticando!");
    }
}