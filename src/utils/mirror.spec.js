import mirror from "./mirror";


const numbers = [1, 2 ,3];

describe("mirror", () => {
    it("shows a messagr", () => {
        console.log(mirror(numbers));
    });

    it("returns empty array", () => {
        expect(mirror([])).toEqual([]);
    });

    it("returns one element array", () => {
        expect(mirror([1])).toEqual([1]);
    });

    it("return mirrowed array of two elements", () => {
        expect(mirror([1,2])).toEqual([1,2,1]);
    });


})



