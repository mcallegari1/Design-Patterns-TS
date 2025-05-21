import Token from "../utils/Token";
import IPaypalPayment from "./IPaypalPayment";

export default class Paypal implements IPaypalPayment {
    
    private token: Token|undefined = undefined;

    authToken(): Token {
        return new Token();
    }
    
    paypalPayment(): void {
        this.token = this.authToken();

        console.log('Token: ' + this.token.getToken());
        console.log('Enviando pagamento paypal');
    }
    
    paypalReceive(): void {
        console.log('Recebendo pagamento paypal');
    }

}