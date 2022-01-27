const cipher = {

  //Funcion del cifrador, aqui declaro el nombre de unas de las funciones dentro del objeto del cipher
  encode : function(offset, string){
    //Este if funciona para que si en alguno de los parametros no hay nada, debe tirar un TypeError
    if (!offset || !string) {
      throw new TypeError();
    }
    //Este if funciona para que si el parametro string no es un texto y el parametro offset no es un numero, tire un error de TypeError
    if (typeof(string) !== 'string' || typeof(offset) !== 'number' ) {
      throw new TypeError();
    }

    //Aqui estoy declarando las funciones que usare mas adelante
    let arrayPhrase = [];
    let newWord;

    //Aqui utilize un bucle for para empezar a crear el cifrador, lo primero que hize fue definir que i valdria cero y dependiendo de cuantas letras tenga la palabra a cifrar se ira descomponiendo letra a letra
    //y cifrando con el charCodeAt y utilizando la formula
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      let equation = ((numberAscii - 65 + offset)% 26) + 65;

    //Y desde aqui las letras ya cifradas se uniran en una sola array con push y con join se transforman en texto
      newWord = String.fromCharCode(equation);
      arrayPhrase.push(newWord);
      newWord = arrayPhrase.join("");
    }

    //Y ya con return se finaliza toda la funcion y devuelve el valor de newWord
    return newWord;
  },

  //Funcion del descifrador, este es la segunda funcion dentro del objeto
  decode : function(offset, string){
    //Este if funciona para que si en alguno de los parametros no hay nada, debe tirar un TypeError
    if (!offset || !string) {
      throw new TypeError();
    }
    //Este if funciona para que si el parametro string no es un texto y el parametro offset no es un numero, tire un error de TypeError
    if (typeof(string) !== 'string' || typeof(offset) !== 'number' ) {
      throw new TypeError();
    }

    //Aqui estoy declarando las funciones que usare mas adelante
    let arrayPhrase = [];
    let newWord;

    //Aqui utilize un bucle for para empezar a crear el descrifrador, lo primero que hize fue definir que i valdria cero y dependiendo de cuantas letras tenga la palabra a descifrar se ira descomponiendo letra a letra
    //y descifrando con el charCodeAt y utilizando la formula, esta vez de manera negativa
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      let equation = ((numberAscii - 65 - offset)% 26) + 65;

      //Este if lo que hace es que si el resultado del codigo ASCII es menor a 65 sumara nuevamente las 26 letras del abecedario para repetir el array desde el ultimo elemento
      if (equation < 65) {
        equation = equation + 26;
      }

      //Y desde aqui las letras ya cifradas se uniran en una sola array con push y con join se transforman en texto
      newWord = String.fromCharCode(equation);
      arrayPhrase.push(newWord);
      newWord = arrayPhrase.join("");
    }

    //Y ya con return se finaliza toda la funcion y devuelve el valor de newWord
    return newWord;
  }



};


export default cipher;
