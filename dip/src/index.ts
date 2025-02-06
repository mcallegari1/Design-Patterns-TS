

// DIP - DEPENDENCY INVERSION PRINCIPLE
// MÓDULOS DE ALTO NÍVEL NÃO DEVEM DEPENDER DE MÓDULOS DE BAIXO NÍVEL, AMBOS DEVEM DEPENDER DE ABSTRAÇÕES

import Payment from "./payment/Payment";

const payment = new Payment();

payment.pay();
