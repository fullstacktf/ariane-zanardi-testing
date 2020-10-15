function moneyFormat(number) {

  number = number.toFixed(2);
  number = "$" + number;
  
  return number;
}

export default moneyFormat;
