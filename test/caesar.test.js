const caesarObject = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if shift is > 25", () => {
        const expected = false;
        const actual1 = caesarObject.caesar("string", 28);
        expect(actual1).to.equal(expected);
    })
    it("should return false if shift is < -25 ", () => {
        const expected = false;
        const actual = caesarObject.caesar("string", -28);
        expect(actual).to.equal(expected);
    })
    it("should return false if shift is 0 ", () => {
        const expected = false;
        const actual = caesarObject.caesar("string", 0);
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () =>{
        const expected = "bcda";
        const actual = (caesarObject.caesar("ABCZ", 1))
        expect(actual).to.equal(expected);
    })
    it("should handle shifts that go past the end of the alphabet.", () =>{
        const expected = "abc";
        const actual = (caesarObject.caesar("xyz", 3));
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces and charaters", () => {
        const expected = "bpqa qa i amkzmb umaaiom!*&^%$#";
        const actual = caesarObject.caesar("This is a secret message!*&^%$#", 8);
        expect(actual).to.equal(expected);
    }) 
})