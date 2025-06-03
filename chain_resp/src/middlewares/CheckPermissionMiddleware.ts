import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";
import chalk from "chalk";

export default class CheckPermissionMiddleware extends Middleware {
    
    
    public check(email: string, pass: string): boolean {
        
        const users = DataBase.filter(item => item.email === email);

        if (!users.length) {
            console.log(chalk.red("User não existe"));
            return false;
        }

        if (users[0].permission === PermissionType.ADMIN) {
            console.log(chalk.blue("Is admin"));
            //return true;
        } else {
            console.log(chalk.blue('User comum'));
        }

        return this.checkNext(email, pass);
    }

}