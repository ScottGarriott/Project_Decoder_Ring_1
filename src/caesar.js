// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  function caesar(input, shift, encode = true) {
    const inputArray = input.toLowerCase().split("");
    let letterShift = shift;
    let newString = [];
    if(letterShift > 25 || letterShift < -25 || letterShift === 0) return false;
    if(!encode) letterShift = (shift * -1);
      for(let i = 0; i < inputArray.length; i++){
        const character = inputArray[i];
        if(!alphabet.includes(character)){
          newString.push(character);
        }else{
          for(let j = 0; j < alphabet.length; j++){
            let letter = alphabet[j];
            if(character === letter){
              if(j + letterShift < 0){
                newString.push(alphabet[(26 + (j + letterShift))]);
              }else{
                if(j + letterShift > 25){
                  newString.push(alphabet[(j + letterShift - 26)]);
                }else{
                newString.push(alphabet[(j + letterShift)]);
                }
              }
            }
          }
        } 
      }
    return (newString.join(""));
  }
  return {
    caesar,
  };
})();

console.log(caesarModule.caesar("zebra magazine", -3))

module.exports = { caesar: caesarModule.caesar };
