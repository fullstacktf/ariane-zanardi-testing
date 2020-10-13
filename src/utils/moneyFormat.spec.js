const moneyFormat = require("./moneyFormat")

const firstResult = moneyFormat(99.99);

if(firstResult != "$99.99") {
    throw new Error(
        `First test is failing: expected "$99.99", got ${firstResult}`);
}
const value1 = moneyFormat(19.99);
console.log(value1);

const value2 = moneyFormat(250);
console.log(value2);

const value3 = moneyFormat(9500.95);
console.log(value3);


function assertEquals(result, expectedResult) {
    if (result !== expectedResult) {
      throw new Error(
        `This test is failing: Expected "${expectedResult}", got "${result}"`,
      );
    }
  }