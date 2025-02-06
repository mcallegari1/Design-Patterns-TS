import IDBProduct from "./IDBProduct";

export default class MySQLProduct implements IDBProduct {


    getProductById(id: number) : string {

        return 'MYSQL - Produto id número: ' + id;
    }
}