import Middleware from "../middlewares/Middleware";
import chalk from "chalk";

export default class Server {

    private middleware: Middleware|null = null;

    setMiddleware(value: Middleware): void {
        this.middleware = value;
    }

    login(email: string, password: string) {


        if (this.middleware?.check(email, password)) {

            console.log(chalk.green('Usuário autenticado'));
            return true;
        }

        return false;

    }
}