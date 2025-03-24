import { Container, createPair, getFirstElement, swap } from "./GenericConcepts";

describe('Container', () => {
    it('should hold a number value', () => {
        const numberContainer: Container<number> = { value: 23 };
        expect(numberContainer.value).toBe(23);
    });

    it('should hold a string value', () => {
        const stringContainer: Container<string> = { value: "bag" };
        expect(stringContainer.value).toBe("bag");
    });
});

describe("swap", ()=>{
    it("should swap number data strings", ()=>{
        expect(swap(3, 4)).toEqual([4, 3]);
    });

    it("should swap strings", ()=>{
        expect(swap("one", "two")).toEqual(["two", "one"]);
    });
})

describe("get first element", ()=>{
    it("should return number", ()=>{
        expect(getFirstElement([12, 34, 43])).toBe(12);
    });

    it("should return undefined", ()=>{
        expect(getFirstElement([])).toBeUndefined();
    })
});

describe('creating pair', ()=>{
    it("should create object", ()=>{
        expect(createPair<string, {id: number}>("23", {id:12})).toEqual({fisrt:"23", second:{id: 34}});
    });
});


