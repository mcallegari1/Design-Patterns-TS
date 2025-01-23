import Client from "./Client";
import Notify from "./Notify";

// SRP - SINGLE RESPONSIBILITY PRINCIPLE 
// CADA CLASSE DEVE REALIZAR APENAS UMA TAREFA

const cliente = new Client();
const notify  = new Notify(cliente);

notify.sendEmail();