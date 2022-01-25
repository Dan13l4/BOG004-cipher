const cipher = {

  encode : function(offset, string){
    if (!offset || !string) {
      throw new TypeError();
    }
    if (typeof(string) !== 'string' || typeof(offset) !== 'number' ) {
      throw new TypeError();
    }
    let arrayPhrase = [];
    let newWord;
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      let equation = ((numberAscii - 65 + offset)% 26) + 65;
      newWord = String.fromCharCode(equation);
      arrayPhrase.push(newWord);
      newWord = arrayPhrase.join("");
    }
    return newWord;
  },

  decode : function(offset, string){
    if (!offset || !string) {
      throw new TypeError();
    }
    if (typeof(string) !== 'string' || typeof(offset) !== 'number' ) {
      throw new TypeError();
    }
    let arrayPhrase = [];
    let newWord;
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      let equation = ((numberAscii - 65 - offset)% 26) + 65;
      if (equation < 65) {
        equation = equation + 26;
      }
      newWord = String.fromCharCode(equation);
      arrayPhrase.push(newWord);
      newWord = arrayPhrase.join("");
    }
    return newWord;
  }



};


export default cipher;
