import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

const card = new CreditCard();
card.validate();
card.collectPayment();

const card2 = new DebitCard();
card2.validate();
card2.collectPayment();

const card3 = new NubankRewards();

card3.validate();
card3.collectPayment();
