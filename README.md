# Cifrado Cesar
**by Karen Baron**

## Índice

* [1. Introduccion](#1-introduccion)
* [2. Caracteristicas del proyecto](#2-caracteristicas-del-proyecto)
* [3. Diseño del programa](#3-diseño-del-programa)
* [4. Paso a paso](#4-paso-a-paso)
* [5. Instrucciones de uso](#5-instrucciones-de-uso)
* [6. Conclusiones](#6-conclusiones)
* [7. Cheklist](#7-cheklist)

                
----

## 1. Introduccion
-------------

El Cifrado César fue inventado por el emperador Julio César. Consiste en mover cada letra un determinado numero de espacion en el alfabeto. En el siguiente ejemplo se usa un desplazamiento de tres espacios, asi que una B en el texto original se convierte en una E en el texto codificado.

### Ej:

![cifrado cesar](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/1920px-Caesar3.svg.png)


-------------


## 2. Caracteristicas del proyecto
-------------

La idea del proyecto era crear una web que permitiera crear mensajes cifrados para una empresa de maquillaje que desea evitar que sus nuevas recetas sean robadas por sus competidores, siendo asi, la empresa pidio que la pagina fuera sencilla e intuitiva, con un estilo monocromatico, con un boton de instrucciones, dos botones para cifrar y decifrar, una barra para escoger los espacios que se corre en el abecedario y que muestre el logo de la empresa para identificar que pertenece a esta. La web esta pensanda para la proteccion de datos privados para las empresas, siendo esta web facil de usar para los trabajadores, siendo mayoritariamente para un publico adulto.

Este es el esquema que cree para poder realizar el proyecto con las cosas basicas que debia realizar el programa para hacerlo funcional:

![esquema proyecto](src/img/esquema.jpg)

-------------

## 3. Diseño del programa
-------------

Luego de determinar la funcion que tendria la web me puse a trabajar en el diseño de esta, como iba a estar organizada, como iban a ser los botones y en que espacio saldria la respuesta, mas que todo fueron decisiones creativas.


**Primer diseño:**
![primer diseño](src/img/primerdiseño.png)
En este primer diseño trate de crear dos cuadros para ingresar el texto para cifrar y decifrar y un tercer cuadro para mostrar el resultado, en este diseño el boton de instruccion estaria al lado del cuatro de resultado y no tendria ningun titulo distintivo del programa.

**Segundo diseño:**
![segundodiseño](src/img/segundodiseño.png)
En este segundo incluido el titulo del proyecto, y ahora en vez de tener dos cuadros solo tendria un unico cuadro donde el usuario podria ingresar su texto, pero este boceto el texto solo saldria en la parte de abajo de los botones sin mas. Aqui no existira el boton de instrucciones, si no que estas estarian a ambos lados.

**Ultimo diseño:**
![Tercer diseño](src/img/tercerdiseño.png)
Y por fin decidi como seria el ultimo diseño, dejando algo mas sencillo donde el usuario podria ver los dos botones y un recuadro donde saldria el resultado, ademas de una abarra en la aparte de abajo donde podra escoger cuanto espacios correr en el abecedario, este diseño si tiene integrado el boton de instrucciones para que el usuario pueda ver como usar la web.

-------------

## 4. Paso a paso
-------------

## 5. Instrucciones de uso
-------------

-------------

## 6. Conclusiones
-------------

-------------

## 7. Cheklist
-------------

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [X] Usa VanillaJS.
* [X] Implementa `cipher.encode`.
* [X] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [X] Pasa pruebas unitarias.
* [X] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [X] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [X] Interfaz permite escribir un texto para ser cifrado.
* [X] Interfaz muestra el resultado del cifrado correctamente.
* [X] Interfaz permite escribir un texto para ser descifrado.
* [X] Interfaz muestra el resultado del descifrado correctamente.