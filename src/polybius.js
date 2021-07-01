// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const letterObject = {"a": 11, "b": 21, "c": 31, "d": 41, "e": 51, "f": 12, "g": 22, "h": 32, "i": 42, "j": 42, "k": 52, "l": 13, "m": 23, "n": 33, "o": 43, "p": 53, "q": 14, "r": 24, "s": 34, "t": 44, "u": 54, "v": 15, "w": 25, "x": 35, "y": 45, "z": 55};

  function polybius(input, encode = true) {
    const newString = [];
    if(encode){
      const inputArray = input.toLowerCase().split("");
    for(let i = 0; i < inputArray.length; i++){
      const character = inputArray[i];
      if(character === " ") newString.push(character);
      for(letter in letterObject){
        if(letter == character){
          newString.push(letterObject[letter]);
        }
      }
    }
    return newString.join("");
  }else{
    const isSpaced = input.split(" ");
    const isOdd = isSpaced.some(word => word.length % 2 === 1);
    if(isOdd) return false;
      const newString = [];
      let result = "";
      for(let i = 0; i < isSpaced.length; i++){
        const seperatedNumbers = isSpaced[i].match(/.{1,2}/g);
        const numbersToLetters = seperatedNumbers.map(number => {
          for(letter in letterObject){
            if(number == 42){
              return "i/j";
            }else if(letterObject[letter] == number){
              return letter;
            }
          }
        })
        const word = numbersToLetters.join("");
        newString.push(word);
        result = newString.join(" ");
      }
      return result;
  }
  }
  return {
    polybius,
  };
})();

console.log(polybiusModule.polybius("4432423352125413", false))

module.exports = { polybius: polybiusModule.polybius };
