import BikeTransport from "./transport/BikeTransport";
import CarTransport from "./transport/CarTransport";
import MotoTransport from "./transport/MotoTransport";
import Transport from "./transport/Transport";

declare var process:any;

let transport: Transport|undefined = undefined;

// npm run dev -- --uber
if (process.argv.includes('--uber')) {
    transport = new CarTransport();
} else if (process.argv.includes('--eats')) {
    transport = new MotoTransport();
} else if (process.argv.includes('--bike')) {
    transport = new BikeTransport();
} else {
    console.error('Selecione o tipo');
}

if (transport) {
    transport.startTransport();
}

