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
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)

                
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

**tercer diseño:**
![Tercer diseño](src/img/tercerdiseño.png)
Y por fin decidi como seria el ultimo diseño, dejando algo mas sencillo donde el usuario podria ver los dos botones y un recuadro donde saldria el resultado, ademas de una abarra en la aparte de abajo donde podra escoger cuanto espacios correr en el abecedario, este diseño si tiene integrado el boton de instrucciones para que el usuario pueda ver como usar la web.

Escogiendo entre los tres, preferi usar el ultimo diseño, por ser algo facil de hacer con mis habilidades actuales y pensando en la facilidad de ser usado para el usuario.

-------------

## 4. Paso a paso

Una vez definido el diseño que tendria mi pagina empeze con la base de html, pensado en donde iria el titulo, el logo, el input del texto, la barra de rango, los botones para enviar el mensaje, el boton de instrucciones y por ultimo un recuadro donde saldria el mensaje.

Una vez terminada la maquetacion del html empeze primero con el JS, pensando como podria realizar el cifrado de una palabra, para ello primero realize una pequeña array con las letras en mayusculas del abecedario y un let con el numero de espacios que deseaba correr. Creando este pequeño codigo que me dio una idea de como empezar todo:

```javascript
const cipher = {
  enconde : function () {
    let string = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let offset = 33;
    let resultado = (offset + string) % 26;
    console.log(string[resultado]);
  }
```

Una vez entendido como funcionan los objetos en javascript y las funciones charCodeAt y fromCharCode empeze a experimentar como hacer el cifrador, dando por resultado el codigo que se puede visualizar en el archivo ***cipher.js***, donde pude hacer que la palabra que ingresa el usuario se descompusiera letra por letra y cambiara su valor con la formula encontrada en la documentacion usando los caracteres Ascii para darle un nuevo valor a la letra, por ultimo usando un string donde todas las letras se uniria con la funcion ***.push*** y usando la funcion ***.join*** para juntarlas en un solo texto formando haci el cifrador.

Ya para la pruebas busque una manera de que el codigo mandara un error con ***if*** y el comando ***throw new***, para lanzar un error de type el cual consiste de que si el usuario no escribe un string tipo texto o un offset tipo numero lanzanria el error.

Para hacer el la funcion de ***decode*** solo copie la formula del cifrador, cambiando unicamente la formula pasando de ser asi:

```javascript
 let formula = ((numberAscii - 65 + offset)% 26) + 65;
```

A asi:
```javascript
 let formula = ((numberAscii - 65 - offset)% 26) + 65;
```
Pero hacer esto me genero un pequeño problema, y fue que la  formula no volvia a repetir el string desde el valor cero, a que me refiero con esto? Usando de ejemplo el nombre de mi gata que es Poyo, quiero cifrar su nombre corriendo 4 pasos en el abecedario, el resultado de este cifrado seria TSCS, pero si tratabas de decifrarlo corriendo los mismo espacios el resultado seria PO?O, dando un signo de interrogacion en vez de la letra "Y", ¿Que paso? Que mi codigo estaba recibiendo numeros negativos y por estar usando los valores ascii normalmente en vez de devolver la "Y" devolvia "?",  el valor ASCII de "C" que es la letra que reemplaza a la "Y" en el codigo cifrado tiene un valor ASCII de 67, al restar los cuatro espacios deveria dar una vuelta al codigo y dar el numero de 89 que es la "Y", pero en vez de eso cogia el numero 63. Para solucionar esto use una variable ***If*** haciendo que si el valor de la formula era menor a 65 (siendo 65 la "A") sumara nuevamente las 25 letras del abecedario y siquiera con la resta, quedando asi:

```javascript
 let formula = ((numberAscii - 65 - offset)% 26) + 65;
if (formula < 65) {
    formula = formula + 26;
    }
```
Devolviendo asi el texto deseado sin problemas.

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
---------------

## 8. Objetivos de aprendizaje

### HTML

- [X] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**


- [ ] **Modelo de caja (box model): borde, margen, padding**


### Web APIs

- [X] **Uso de selectores del DOM**


- [X] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [X] **Manipulación dinámica del DOM**


### JavaScript

- [X] **Tipos de datos primitivos**



- [X] **Strings (cadenas de caracteres)**


- [X] **Variables (declaración, asignación, ámbito)**



- [X] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**


- [X] **Uso de bucles/ciclos (while, for, for..of)**


- [X] **Funciones (params, args, return)**


- [X] **Pruebas unitarias (unit tests)**


- [ ] **Módulos de ECMAScript (ES Modules)**


- [ ] **Uso de linter (ESLINT)**

- [X] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**


### UX (User eXperience)

- [ ] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [ ] **Crear prototipos para obtener feedback e iterar**

- [ ] **Aplicar los principios de diseño visual**