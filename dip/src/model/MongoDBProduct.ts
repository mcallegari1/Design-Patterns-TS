import IDBProduct from "./IDBProduct";

export default class MongoDBProduct  implements IDBProduct{
   
   
    getProductById(id: number): string {
        return 'MongoDB - Produto id:' + id;
    }


}