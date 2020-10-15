import {Product} from "./Product";

export class ListParser {

    parse(text) {

        const aux = text.split(/\n|,/g).map((e) => e.trim());

        let list = [];

        for(let i = 0; i < aux.length; i +=3){
            const product = new Product(aux[i], aux[i+1], aux[i+2]);
            list.push(product);
        }
        return list;
    }
}
