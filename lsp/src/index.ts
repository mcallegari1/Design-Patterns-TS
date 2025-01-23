import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

// LSP - LISKOV SUBSTITUTION PRINCIPLE 
// UMA CLASSE DERIVADA PODE SER SUBSTITUÍVEL POR SUA CLASSE BASE

const card = new CreditCard();
card.validate();
card.collectPayment();

const card2 = new DebitCard();
card2.validate();
card2.collectPayment();

const card3 = new NubankRewards();

card3.validate();
card3.collectPayment();
