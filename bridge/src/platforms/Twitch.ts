import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {

     constructor() {
        this.configureRTMP();

        console.log("Twitch: Transmissão iniciada!");
    }

    configureRTMP(): void {
        this.authToken();
        console.log("Twitch: Configurando o broadcasting...");
    }
    
    authToken(): void {
        console.log("Twitch: Autenticando!");
    }
}