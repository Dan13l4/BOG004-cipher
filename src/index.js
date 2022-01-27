import cipher from './cipher.js';

console.log(cipher);

//document.getElementById("instrucciones").addEventListener("click", ()=>{
   // window.alert("Bienvend@, porfavor lee con atencion las siguientes instrucciones.  \nCIFRADOR:   \n1. En mayusculas porfavor ingresa el texto que quiera cifrar, trata de no usar caracteres especiales como la coma, tilde o la letra ñ \n2. Escoge el numero de pasos que quieres que se corra la letra en el abecedario. \n3. Pulsa el boton -cifrar- para ver el resultado. \nDECIFRADOR: \n1.En mayusculas porfavor ingresa el texto que quiera Decifrar \n2. Escoge el numero de pasos que se usaron para cifrar la palabra \n3. Pulsa el boton -descifrar- para ver el resultado.");
//});


//Aqui empiezo la funcionalidad de los botones, usando un getElementById para usar el boton del cifrado y un escuchador de eventos, que hara que cuando
//El usuario haga click empieze a correr el codigo
  document.getElementById("button").addEventListener("click", ()=>{
    let string = document.getElementById("input-original").value;
    let offset = document.getElementById("rango").value;
    //Aqui declaro que el valor de string estara en el cuadro donde el usuario pone su texto y el offset el numero que ponga en la barra de rango para que el codigo del cifrador tenga sus parametros definidos
    //Con el .value hago que coja solo el texto que hay en el cuadro del textarea y el numero que puso el usuario en el rango para poder hacer el cifrado
    offset = parseInt(offset);
    //El parseInt lo que hace es transformar el valor del offset a tipo number para evitar un typeError
    let newWord = cipher.encode(offset, string);
    //Con este let lo que hago es llamar la funcion de cifrado del objeto cipher, y toma los let de string y offset para definir los parametros que se usaran para cifrar
    document.getElementById("texto").innerHTML = newWord;
    //Y por ultimo utilizo el innerHTML para sobreescribir el texto que se encuentra en el textarea del final y sacar el resultado
  });

  document.getElementById("buton").addEventListener("click", ()=>{
    let string = document.getElementById("input-original").value;
    let offset = document.getElementById("rango").value;
    offset = parseInt(offset);
    let newWord = cipher.decode(offset, string);
    document.getElementById("texto").innerHTML = newWord;
  });