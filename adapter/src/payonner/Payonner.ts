import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment {
    
    private token: Token|undefined = undefined;

    authToken(): Token {
       return new Token();
    }
    
    sendPayment(): void {
        this.token = this.authToken();

        console.log('Token: ' + this.token.getToken());
        console.log('Enviando pagamento payonner');
    }
    
    receivePayment(): void {
       console.log('Recebendo pagamento payonner');
    }

}