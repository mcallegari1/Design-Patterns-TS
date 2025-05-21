import Payonner from "../payonner/Payonner";
import IPaypalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPaypalPayment {
    
    constructor(private payonner: Payonner) {
        console.log('Utilizando o adapter');
    }

    authToken(): Token {
        return this.payonner.authToken();
    }
    
    paypalPayment(): void {
        return this.payonner.sendPayment();
    }
    
    paypalReceive(): void {
        return this.payonner.receivePayment();
    }

}