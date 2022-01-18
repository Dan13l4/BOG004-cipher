const cipher = {

  encode : function(offset, string){
    let arrayFrase = [];
    let newWord;
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      let formula = ((numberAscii - 65 + offset)% 26) + 65;
      newWord = String.fromCharCode(formula);
      arrayFrase.push(newWord);
      newWord = arrayFrase.join("");
    }
    return newWord;
  },

  decode : function(offset, string){
    let arrayFrase = [];
    let newWord;
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      let formula = ((numberAscii - 65 - offset)% 26) + 65;
      if (formula < 65) {
        formula = formula + 26;
      }
      newWord = String.fromCharCode(formula);
      arrayFrase.push(newWord);
      newWord = arrayFrase.join("");
    }
    return newWord;
  }



};


export default cipher;
