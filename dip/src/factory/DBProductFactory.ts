import Db from "../model/Db";
import IDBProduct from "../model/IDBProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DBProductFactory {


    private static type : Db = Db.MONGODB;

    static create() : IDBProduct {

        if (DBProductFactory.type === Db.MYSQL) {
            return new MySQLProduct();
        } else if (DBProductFactory.type === Db.MONGODB) {
            return new MongoDBProduct();
        } else {
            throw new Error('DB not defined');
        }

    }
}