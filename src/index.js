import cipher from './cipher.js';

console.log(cipher);

document.getElementById("instrucciones").addEventListener("click", ()=>{
    window.alert("Bienvend@, porfavor lee con atencion las siguientes instrucciones.  \nCIFRADOR:   \n1. En mayusculas porfavor ingresa el texto que quiera cifrar, trata de no usar caracteres especiales como la coma, tilde o la letra ñ \n2. Escoge el numero de pasos que quieres que se corra la letra en el abecedario. \n3. Pulsa el boton -cifrar- para ver el resultado. \nDECIFRADOR: \n1.En mayusculas porfavor ingresa el texto que quiera Decifrar \n2. Escoge el numero de pasos que se usaron para cifrar la palabra \n3. Pulsa el boton -descifrar- para ver el resultado.");
  });

  document.getElementById("button").addEventListener("click", ()=>{
    let string = document.getElementById("input-original").value;
    let offset = document.getElementById("rango").value;
    offset = parseInt(offset);
    let newWord = cipher.encode(offset, string);
    document.getElementById("texto").innerHTML = newWord;
  });

  document.getElementById("buton").addEventListener("click", ()=>{
    let string = document.getElementById("input-original").value;
    let offset = document.getElementById("rango").value;
    offset = parseInt(offset);
    let newWord = cipher.decode(offset, string);
    document.getElementById("texto").innerHTML = newWord;
  });