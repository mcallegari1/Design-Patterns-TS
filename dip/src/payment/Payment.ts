import DBProductFactory from "../factory/DBProductFactory";

export default class Payment {


    pay() : void {

        const dbProduct = DBProductFactory.create();
        console.log(dbProduct.getProductById(500));

    }
}