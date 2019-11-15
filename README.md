# PROYECTO CIFRADO CÉSAR
## Contexto

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](src/images/offsetCipher.png)

El cifrado César es una técnica simple de cifrado de mensajes, que se realiza por sustitución; es decir, cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento u offset) más adelante en el alfabeto. 

Por ejemplo, si se usa un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra HOLA se cifra como KROD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Si bien este cifrado no ofrece mucha seguridad y los mensajes cifrados con este sistema pueden ser descifrados con facilidad, en la actualidad, es utilizado en otros sistemas más complejos de codificado (cifrado Vigenère, ROT13).

## Aplicación de Cifrado y Descifrado César
![Aplicación](src/images/AppCipher.png)

La aplicación de Cifrado César es una aplicación web, que permite al usuario cifrar y descifrar textos, utilizando el cifrado César. En esta, el valor de desplazamiento (offset) es seleccionado por el usuario pudiendo elevar el grado de seguridad de la codificación mediante un offset que puede tomar números tanto positivos como negativos. En el caso de seleccionar el cero, el texto a cifrar/descifrar queda escrito con sus caracteres originales.

### Uso
Esta aplicación puede ser usadas en distintos contextos: generación de claves secretas, mensajería secreta entre personas y otros.

### Modo de empleo
#### Para Codificar Mensajes
- Seleccionar un nivel de seguridad (Se ingresa un número entero)
- Escribir mensaje a cifrar en área de texto superior
- Seleccionar botón **Transformar Mensaje**
- El mensaje cifrado aparece en el área de texto inferior

#### Para Decodificar Mensajes
- Seleccionar un nivel de seguridad en el que se encuentra cifrado el mensaje a descifrar (Se ingresa un número entero conocido por el usuario)
- Escribir mensaje a descifrar en área de texto superior
- Seleccionar botón **Recuperar Mensaje**
- Mensaje descifrado aparece en el área de texto inferior

#### Para borrar mensajes 
- Para limpiar las distintas áreas de texto de la aplición (nivel de seguridad, input de mensaje y output de mensaje) presionar botón Borrar mensaje.

#### Para guardar mensaje de salida
- Para almacenar el mensaje del área de texto inferior, presionar botón Guardar. Se genera archivo txt que contiene el texto guardado y el nivel de seguridad asociado.

### Definición del producto

* El proyecto se dividió en 2 temáticas; UX Design y Front End Development.

## UX Design
Para el proceso de diseño se consideraron las siguientes etapas:
Descubrimiento e Investigación, Síntesis y Definición, Ideación, Prototipado y User Testing. A continuación, se entrega un resumen de las actividades realizadas en cada una de las etapas del diseño del proceso mencionadas.

### **Descubrimiento e Investigación** (Research)
- De acuerdo con los requerimientos del proyecto, se les formuló a distintos potenciales usuarios de la aplicación (amigos, conocidos, familiares, ejecutivo; personas distintas edades e intereses) – a través de redes sociales y cara a cara - las siguientes preguntas: 
- ¿En qué contexto o circunstancia utilizarías mensajes secretos?
- ¿En qué contexto o circunstancias utilizarías mensajes secretos (información confidencial), envío de mensajería?

Algunas de las respuestas: 
- Para recibir una licencia de un programa o juego, 
- En una página que guarde las claves, 
- Clave para acceder a documento, 
- Cuando realizo una transacción bancaria recibo un código por teléfono
- Temas de salud ocupacional
- Cuando comencé a enviar mensajes a espalda de mi esposa
- En caso de tener una amante, con lenguaje en claves, horas de comunicación, etc.
- Otras; en donde no se manifestó una necesidad.

A medida que se pudo establecer una mejor comunicación con el interlocutor, se fueron modificando las preguntas en cuanto a nivel de profundidad para obtener nueva información. Una preocupación del usuario, observada en estas respuestas, tenía que ver con el grado de seguridad que se podía tener en la codificación del mensaje.

También, se realizaron búsquedas en Internet con el fin de revisar algunas de las aplicaciones web de codificado/decodificado existentes y sus características.
Sitios visitados:
- http://superpatanegra.com/texto/index.php 
- https://www.topster.es/texto/decodieren_encodieren.html
- https://www.convertstring.com/es/EncodeDecode/Base64Decode 

En esta etapa de Research, como no se tenía claro el formato de la aplicación (web o de escritorio; móvil), también se revisó la aplicación móvil Decrypto.

### Síntesis y Definición
En esta etapa se analizó la información recolectada en la fase anerior tratando de encontrar elementos que permitieran entender las necesidades de los potenciales usurios del producto.

### Ideación _ Prototipado
![Sketch_Prototipo_Cipher_Inicial](src/images/sketchMockupInicial.png)

#### Principales Usuarios
Los principales usuarios de este producto son adolescentes, jóvenes y adultos; todas aquellas personas que tengan la necesidad de mantener textos privados y que puedan ser leídos por ellos mismos en un momento posterior a su creación o intercambiados con otros usuarios de la aplicación.

#### Objetivos de Usuarios en relación con el produto
Intercambiar mensajes que no sean comprensibles por otros, más que por aquellas personas que se desea que conozcan el mensaje.

#### Cómo se cree que el producto está resolviendo los problemas de los usuarios
El programa codifica y decodifica textos que los usuarios quieren mantener privados, dando la posibilidad de almacenar el texto codificado para ser leído en un tiempo futuro o compartido con otros; ya que existe la opción de generar un archivo de texto que contiene el texto codificado y la clave para descifrarlo.

### Proceso de definición del producto final
#### Interfaz de usuario (UI)

La interfaz permite al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones quiere que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que quiere cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

La interfaz presenta otras funcionalidades al usuario como: 
- Borrar las entradas y salidas de texto (texto a cifrar/descifrar, texto cifrado/descifrado).
- Guardar el texto cifrado, junto con el offset en un archivo de texto a través de un link que aparece en la página.

#### Funcionalidades de la aplicación requeridas
La aplicación permite al usuario:
- Cifrar y descifrar textos y visceversa determinado por un offset dado por el usuario, para el alfabeto simple (solamente mayúsculas y sin ñ).

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Dependiendo del offset dado por el usuario cada una de las letras es tansformada en otra letra dentro del mismo conjunto de letras mayúsculas para todos los offsets. 

#### Funcionalidades de la aplicación adicionales (extra o “Hacker edition”)
* Cifra/descifra el alfabeto simple minúsculas para un offset positivo o negativo.
* Cifra/texto con offset positivo/negativo espacios, ñ, Ñ, vocales minúsculas con acento (á,é,í,ó,ú), vocales mayúsculas(Á,É,Í,Ó,Ú),±,¹ y ².
* Cifra/descifra otros caracteres como: espacios, ñ, Ñ, á, é,í,ó,ú, Á,É,Í,Ó,Ú, para desplazamientos positivos o negativos.
* Para caracteres distintos a los mencionados anteriormente, se mantiene el caracter ingresado.

## Desarrollo Front-end:
### HTML y CSS
- Se muestran elementos de formulario en la pantalla.

### DOM
- Se permite al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
- Se actualiza la pantalla con los resultados (**manipular el DOM**).

### JS
- Se manipulan _**strings**_ (cadenas de texto).
- Se Usa **control de flujo** (bucles, condicionales, ...).
- Se **Implementan funciones** dada una descripción de su comportamiento.

### Test de usabilidad
Luego de haber realizado las pruebas de usabilidad se modificó el sketch y prototipo.
![Sketch_Cipher_Primera_Iteración](src/images/sketchCipherPrimeraIter.png)
![Prototipo_Cipher_Primera_Iteración](src/images/MockupCipherPrimeraIter.png)

### Testing
- Se verifica la implementación con **pruebas unitarias**.
![Prueba unitaria 1](src/images/testsUnitarios1.png)
![Prueba unitaria 2](src/images/testsUnitarios2.png)


## Herramientas empleadas
### UX
* Figma
* Balsamiq

### Front-End
* Visual Studio Code
* Git
* npm