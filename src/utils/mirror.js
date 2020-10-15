
function mirror(numbers) {

    
    if(numbers.empty){
        return numbers;
    }
    else {

        let sortNumbers = sortNumber(numbers);
        let center = sortNumbers[sortNumbers.length - 1];
        
        return sortNumbers;
    }

    
}


function sortNumbers(numbers) {

    return numbers.sort();
}

export default mirror;