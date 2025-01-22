import Client from "./Client";

export default class Notify {

    // ESSA CLASSE É RESPONSÁVEL APENAS POR GERENCIAR FORMAS DE NOTIFICAÇÃO DO CLIENTE

    constructor(private cliente: Client) {
        
    }

    sendEmail() : boolean {

        this.cliente.email;
        console.log('Enviando email...');
        return true;
    }

}