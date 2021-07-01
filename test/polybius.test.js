const polybiusObject = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should encode a string of letters into a string of numbers", () => {
        const expected = "443242335212541342";
        const actual = polybiusObject.polybius("thinkfulj");
        expect(actual).to.equal(expected);
    })
    it("should when encoding translate leters i and j to 42", () => {
        const expected = "443242335212541342";
        const actual = polybiusObject.polybius("thinkfulj");
        expect(actual).to.equal(expected);
    })
    it("should when decoding translate 42 to i/j", () => {
        const expected = "thi/jnkfuli/j";
        const actual = polybiusObject.polybius("443242335212541342", false);
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const expected = "443242335212541342";
        const actual = polybiusObject.polybius("ThinkfulJ");
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces in the message, before and after encoding.", () => {
        const expected = "3251131343 2543241341";
        const actual = polybiusObject.polybius("Hello world");
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces in the message, before and after encoding.", () => {
        const expected = "hello world";
        const actual = polybiusObject.polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    })
})