
export class RosCalculator {
    
    calculate(list) {
        
        let total = 0;
        for (let i = 0; i < list.length; i++) {
            
            total += (list[i].lot * list[i].price);
        }
        return total;

    }
}
