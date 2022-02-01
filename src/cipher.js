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
    let equation;
    //Aqui utilize un bucle for para empezar a crear el cifrador, lo primero que hize fue definir que i valdria cero y dependiendo de cuantas letras tenga la palabra a cifrar se ira descomponiendo letra a letra
    //y cifrando con el charCodeAt y utilizando la formula
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      
    //Aqui numberAscii utiliza un if para verificar en que rango se encontrarian  los number Ascii ya decodificados, si estos esta en el rango de 97 a 122 los tomaria como minusculas
    //Y si estaban en el rango de 65 a 90 serian mayusculas.
      equation = numberAscii;
      //Al hacer que mi variable de la ecuacion sea igual a numberAscii, lo que hago es que los simbolos especiales tambien queden declarados bajo el metodo de charCodeAt
      if(numberAscii >= 97 && numberAscii <= 122){
        equation = ((numberAscii - 97 + offset)% 26) + 97;
      }else if(numberAscii >= 65 && numberAscii <= 90){
        equation = ((numberAscii - 65 + offset)% 26) + 65;
      }


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
    let equation;
    //Aqui utilize un bucle for para empezar a crear el descrifrador, lo primero que hize fue definir que i valdria cero y dependiendo de cuantas letras tenga la palabra a descifrar se ira descomponiendo letra a letra
    //y descifrando con el charCodeAt y utilizando la formula, esta vez de manera negativa
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);

    //Al igual que en el encode, con if se verificaria el codigo ascii de las letras y segun su rango las clasifica como minusculas y mayusculas.
      equation = numberAscii;
      if(numberAscii >= 97 && numberAscii <= 122){
        equation = ((numberAscii - 97 - offset)% 26) + 97;
        //Y con este if lo que se hace es repetir el array desde el primer elemento para seguir con el bucle de las letras
        if(equation < 97 && equation !== 32) {
          equation = equation + 26;}  
      }
      if(numberAscii >= 65 && numberAscii <= 90){
          equation = ((numberAscii - 65 - offset)% 26) + 65;
      if(equation < 65 && equation !== 32){
        equation = equation + 26;}
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
