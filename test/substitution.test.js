const subsitutionObject = require("../src/substitution");
const expect = require("chai").expect

describe("substitution", () =>{
    it("should return false if the given alphabet is > 26", () =>{
        const expected = false;
        const actual = subsitutionObject.substitution("Kaw", "BGBHJUYHGTRFGTYHJUIKOLIJUHY");
        expect(actual).to.equal(expected); 
    })
    it("should return false if the given alphabet is < 26", () =>{
        const expected = false;
        const actual = subsitutionObject.substitution("Kaw", "abc");
        expect(actual).to.equal(expected); 
    })
    it("should return false if the given alphabet has repeating characters", () =>{
        const expected = false;
        const actual = subsitutionObject.substitution("Kaw", "a#defghijklmnopq#rstuvwxyz");
        expect(actual).to.equal(expected); 
    })
    it("should return the altered string", () =>{
        const expected = "jrufscpw";
        const actual = subsitutionObject.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected); 
    })
    it("should keep any spaces in place", () =>{
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = subsitutionObject.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected); 
    })
    it("should revesrse the string if encode is false", () =>{
        const expected = "message";
        const actual = subsitutionObject.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected); 
    })
})