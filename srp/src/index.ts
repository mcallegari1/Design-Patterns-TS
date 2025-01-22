import Client from "./Client";
import Notify from "./Notify";


const cliente = new Client();
const notify  = new Notify(cliente);

notify.sendEmail();