import DataBase from "../servers/DataBase";
import Middleware from "./Middleware";
import chalk from "chalk";

export default class CheckUserMiddleware extends Middleware {
    
    public check(email: string, pass: string): boolean {
    

        if (email.indexOf('@') === -1) {
            console.log(chalk.red("Email inválido"));
            return false;
        }

        if (!DataBase.filter(item => item.email === email && item.password === pass).length) {
            console.log(chalk.red("Email ou senha inválidos"));
            return false;
        }

        return this.checkNext(email, pass);
    }



}