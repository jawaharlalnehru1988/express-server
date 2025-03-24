// import { describe } from "node:test";

import test from "node:test";

const add =(a:number, b:number):number=>{
    return a+b;
}
describe('add value', ()=>{
    it('should return 5 when 2 and 3 are added', () => {
        expect(add(2, 3)).toBe(5);
    });
})

test('test', ()=>{
    expect(add(2, 3)).toBe(5);
})