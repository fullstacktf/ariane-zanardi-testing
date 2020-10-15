import formatBytes from "./formatBytes";

/*
assertEquals(formatBytes(900), "900MB");

assertEquals(formatBytes(1900), "1GB 900MB");

assertEquals(formatBytes(568200), "568GB 200MB");

assertEquals(formatBytes(1234567), "1TB 234GB 567MB");


function assertEquals(result, expectedResult) {
    if (result !== expectedResult) {
      throw new Error(
        `This test is failing: Expected "${expectedResult}", got "${result}"`,
      );
    }
  }
  */

//JEST

describe("formatBytes", () => {
    it("formats in MB", () => {
        const results = formatBytes(900);
        expect(results).toEqual("900MB");
    });

    it("formats in GB", () => {
        const results = formatBytes(1900);
        expect(results).toEqual("1GB 900MB");
    })

    it("formats in TB", () => {
        const results = formatBytes(1234567);
        expect(results).toEqual("1TB 234GB 567MB");
    })
});

