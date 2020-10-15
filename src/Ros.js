import { ListParser } from "./utils-kata/ListParser";
import { ListReader } from "./utils-kata/ListReader";
import { RosCalculator } from "./utils-kata/RosCalculator";

export class Ros {

    constructor(listReader, listParser, rosCalculator) {

        this.listReader = listReader;
        this.listParser = listParser;
        this.rosCalculator = rosCalculator;
    }
    calculatePrice() {

        const text = this.listReader.read();
        const list = this.listParser.parse(text);
        const total = this.rosCalculator.calculate(list);
        console.log( "que esta pasandp?" + total);

        return total; 
        
    }
}
