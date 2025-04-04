import Client from "./client/Client";
import Companys from "./consts/Companys";
import ITransportFactory from "./factories/interfaces/ITransportFactory";
import Line from "./factories/Line";
import NineNine from "./factories/NineNine";
import Uber from "./factories/Uber";

let factory: ITransportFactory|undefined;

const currentCompany = Companys.LINE;

switch (currentCompany) {
    case Companys.UBER:
        factory = new Uber();
        break;

    case Companys.NINENINE:
        factory = new NineNine();
        break;

    case Companys.LINE:
        factory = new Line();
        break;

    default: 
        console.log("SEM EMPRESA SELECIONADA!PAUUUU!!");
}

if (factory) {
    const client = new Client(factory);

    client.startRoute();
}