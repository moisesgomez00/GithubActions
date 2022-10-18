const sum = require("./suma")

test("Suma de 1 + 1 debe resultar 2", ()=>{
    expect(sum(1,1)).toBe(2);
})