import PayonnerAdapter from "./adapter/PayonnerAdapter";
import Payonner from "./payonner/Payonner";
import IPaypalPayment from "./paypal/IPaypalPayment";
import Paypal from "./paypal/Paypal";

const oPay: IPaypalPayment = new Paypal();

oPay.paypalPayment();
oPay.paypalReceive();

const oPay2: IPaypalPayment = new PayonnerAdapter(new Payonner);
oPay2.paypalPayment();
oPay2.paypalReceive();