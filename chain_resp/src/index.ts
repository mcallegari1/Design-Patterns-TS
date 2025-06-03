import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";
import * as readline from "readline";

const server = new Server();

declare var process: any;

function setPrompt() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("Digite seu email: ", email => {
        
        rl.question("Digite sua senha: ", senha => {
            server.login(email, senha);

            rl.close();
        });
    });

    rl.on("close", () => setPrompt);
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());

server.setMiddleware(middleware);

setPrompt();