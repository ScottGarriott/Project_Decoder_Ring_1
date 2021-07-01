// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const correctAlphabet = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  function substitution(input, alphabet, encode = true) {
    if(!alphabet) return false;
    const inputArray = input.toLowerCase().split("");
    const alphabetArray = alphabet.toLowerCase().split("");
    let alphabetA = correctAlphabet;
    let alphabetB = alphabetArray
    if(alphabetArray.length !== 26 || new Set(alphabetArray).size !== alphabetArray.length) return false;
    if(!encode){
      alphabetA = alphabetArray;
      alphabetB = correctAlphabet;
    }
      const newString = [];
      for(let i = 0; i < inputArray.length; i++){
        const character = inputArray[i];
        if(character === " "){
          newString.push(character);
        }else{
          for(let j = 0; j < alphabetA.length; j++){
            let letter = alphabetA[j];
            if(character === letter){
              newString.push(alphabetB[j]);
                }
              }
            }
          }
          return newString.join("");
        } 
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
