//Ejercicio 1 Saludo

// const nombre = prompt("Ingrese un nombre");
// const apellido = prompt("Ingrese su apellido");

// alert(`Hola ${nombre} ${apellido}, bienvenidos a ADA`);
// console.log("Hola" + " " + nombre + " " + apellido + " " + "bienvenidos a ADA"); 



//Ejercicio 2 Heladeria

// const saborOne = prompt("Ingrese primer sabor");
// const saborTwo = prompt("Ingrese primer sabor");
// const saborTree = prompt("Ingrese primer sabor");

// alert (`Aquí tiene su helado de ${saborOne}, ${saborTwo}, ${saborTree}.`);




//Ejercicio 3 Datos Personales
// const nombre = prompt("Ingrese su nombre");
// const apellido = prompt("Ingrese su Apellido");
// const edad = prompt("Ingrese su Edad");
// const nacionalidad = prompt("Ingrese su Nacionalidad");
// const documento = prompt("Ingrese su Documento");

// alert(`Nuevo usuario agregado al sistema:
// Nombre: ${nombre},
// Apellido: ${apellido},
// Edad: ${edad} años,
// Nacionalidad: ${nacionalidad},
// Documento: ${documento},
// `)



//Ejercicio 4 Lista de Reproduccion
// const namelist = prompt("Ingrese el nombre de la Playlist");
// const musicOne = prompt("Ingrese primer canción");
// const musicTwo = prompt("Ingrese segunda canción");
// const musicTree = prompt("Ingrese tercera canción");

// alert(`Se ha creado la Playlist ${namelist} con las canciones ${musicOne}, ${musicTwo}, ${musicTree}.`);



//Ejercicio 5 Direccion Completa
// const calle = prompt("Ingrese el nombre de su Calle");
// const numero = prompt("Ingrese su Número");
// const departamento = prompt("Ingrese su número de Departamento");
// const codigoPostal = prompt("Ingrese su Código Postal");
// const ciudad = prompt("Ingrese su Ciudad");
// const pais = prompt("Ingrese su Pais");

// alert(`La dirección que ha ingresado es: ${calle}, ${numero}, ${departamento}, ${codigoPostal}, ${ciudad} y ${pais}.`);


//Ejercicio 6 Años Perro
//16 x ln(edad cronologica del perro) + 31 = edadHu
//e(age - 31)/16

// const edad = prompt("Ingrese su Edad");
// const expo = (edad - 31)/16;
// const edadPerro = Math.exp(expo);

// alert(`Su equivalente de edad en años perro es: ${edadPerro}`);



//Ejercicio 7 Minutos a segundos
// const minutos = prompt("Ingrese cantidad de minutos");
// const result = minutos*60;

// alert(`El resultado de la conversion es: ${result}`);



//Ejercicio 8 Dias a Segundos
// const dias = prompt("Ingrese cantidad de días");
// const result = dias*24*60*60;

// alert(`El resultado de la conversión de días a segundos es: ${result} segundos.`);



//Ejercicio 9 Kilometros a Millas
// const kilometros = prompt("Ingrese cantidad de Kilometros");
// const result = kilometros*0.621371;

// alert(`Su conversión a de kilómetros a millas es: ${result} millas.`);



//Ejercicio 10 Area de un triangulo
// const base = prompt("Ingrese el valor de la base");
// const altura = prompt("Ingrese el valor de la altura");
// const area = (base*altura)/2;

// alert(`El Área del Triangulo es: ${area}.`);


//Ejercicio 11 Perímetro de un Rectangulo
// const altura = prompt("Ingrese el valor de la altura");
// const ancho = prompt("Ingrese el valor del ancho");

// const perimetro = 2*(Number(altura) + Number(ancho));

// alert(`El perímetro del rectangulo es: ${perimetro}`);



//Ejercicio 12 Porcentaje
// const numero = prompt("Ingrese un número");
// const porcentaje = prompt("¿Qué porcentaje desea?");

// const result = (numero*porcentaje)/100;

// alert(`El porcentaje que solicito es: ${result}`);



//Ejercicio 13 Tiempo de Viaje
// const pie = 5;
// const bici = 10;
// const auto = 80;

// const distancia = prompt("Ingrese distancia de su recorrido en Kilómetros");

// alert(`Usted tardará en recorrer ${distancia} kilómetros:
// A pie: ${distancia/pie} horas,
// En bici: ${distancia/bici} horas,
// En auto: ${distancia/auto} horas. `);




//Ejercicio 14 Duración de Vuelo
// const destinoUno = prompt("Ingrese primer escala de su vuelo");
// const duracionUno = prompt(`Ingrese la duración en horas de su vuelo a ${destinoUno}`);

// const destinoDos = prompt("Ingrese segunda escala de su vuelo");
// const duracionDos = prompt(`Ingrese la duración en horas de su vuelo a ${destinoDos}`);

// const destinoTres = prompt("Ingrese tercer escala de su vuelo");
// const duracionTres = prompt(`Ingrese la duración en horas de su vuelo a ${destinoTres}`);

// const duracionTotal = Number(duracionUno) + Number(duracionDos) + Number(duracionTres);

// alert(`Las escalas de su vuelo son:
// ${destinoUno} : ${duracionUno} horas,
// ${destinoDos} : ${duracionDos} horas,
// ${destinoTres} : ${duracionTres} horas,
// La duración Total de su vuelo son: ${duracionTotal} horas.
// `)



//Ejercicio 15 Incremento
// let numeroPartida = prompt("Ingrese número de partida");
// const numeroIncremeta = prompt("Ingrese cantidad a ir incremendando");

// let resultFirt = Number(numeroPartida) + Number(numeroIncremeta);
// let resultSecond = resultFirt + Number(numeroIncremeta);
// let resultThird = resultSecond + Number(numeroIncremeta);
// let resultFour = resultThird + Number(numeroIncremeta);
// let resultFive = resultFour + Number(numeroIncremeta);

// alert(`Incremento 1 Total: ${resultFirt}.`);
// alert (`Incremento 2 Total: ${resultSecond}.`);
// alert(`Incremento 3 Total: ${resultThird}.`);
// alert (`Incremento 4 Total: ${resultFour}.`);
// alert (`Incremento 5 Total: ${resultFive}.`);



//Ejercicio 16 Celsius a Fahrenheit
// const celsius = prompt("Ingrese grados");
// const result = Number(celsius*1.8) + 32;

// alert(`Su resultado es equivalente a ${result} grados Fahrenheit`);



//Ejercicio 17 Multiplos
// const num1 = prompt("Ingrese un numero");
// const num2 = prompt("Ingrese el segundo numero");

// const resto = Number(num1) % Number(num2);

// alert(`(Si el número ${num1} es múltiplo de ${num2} el valor resultante es 0, si no es múltiplo va a dar otro número)
//         El valor es ${resto}.
// `)



//Ejercicio 18 Segundos a horas, minutos y segundos
// const segundos = prompt('Ingrese la cantidad de segundos');
// const restoHoras = (segundos % 3600);
// const restoMinutos = (segundos % 60);

// const horas = (segundos - restoHoras) / 3600;
// const minutos = (segundos - restoMinutos) / 60;


// alert(`${segundos} segundos equivalen a:
//         ${horas} horas ${restoHoras} segundos
//         o a ${minutos} minutos ${restoMinutos} segundos.
// `)



//Ejercicio 19 Cantidad de caracteres
// const usuario = prompt("Ingrese un texto");
// const cantidadCaracteres = usuario.length;

// alert (`Su texto tiene ${cantidadCaracteres} caracteres.`);



//Ejercicio 20 Cantidad de huespedes
// const cuarto2 = prompt('Ingrese la cantidad de habitaciones para dos personas');
// const cuarto3 = prompt('Ingrese la cantidad de habitaciones para tres personas');
// const cuarto4 = prompt('Ingrese la cantidad de habitaciones para cuatro personas');
// const total = (Number(cuarto2) * 2) + (Number(cuarto3) * 3) +(Number(cuarto4) * 4);

// alert(`El hotel cuenta con:
//     ${cuarto2} habitaciones para dos personas,
//     ${cuarto2} habitaciones para tres personas,
//     ${cuarto2} habitaciones para cuatro personas,
// El máximo de huéspedes en simultáneo que puede albergar es de ${total} personas.
// `);



//Ejercicio 21 Calculador de Gastos
// let cantServicios = 3;
// let dineroDisponible = 0;

// const dineroTotal = prompt('Ingresa la cantidad de dinero que tiene disponible');
// dineroDisponible = Number(dineroTotal);

// const servicio1 = prompt(`*Servicios disponibles: ${cantServicios}* Ingresá el nombre del servicio`);
// const monto1 = prompt('Ingresá el costo del servicio');
// dineroDisponible = Number(dineroTotal) - Number(monto1);

// alert(`Te quedan: $${dineroDisponible}`)

// const servicio2 = prompt(`*Servicios disponibles: ${cantServicios = cantServicios -1}* Ingresá el nombre del servicio`);
// const monto2 = prompt('Ingresá el costo del servicio');
// dineroDisponible = Number(dineroDisponible) - Number(monto2);

// alert(`Te quedan: ${dineroDisponible}`);

// const servicio3 = prompt(`*Servicios disponibles: ${cantServicios = cantServicios -1}* Ingresá el nombre del servicio`);
// const monto3 = prompt('Ingresá el costo del servicio');
// dineroDisponible = Number(dineroDisponible) - Number(monto3);

// const totalMonto = Number(monto1) + Number(monto2) + Number(monto3);

// alert(`*Servicios disponibles: ${cantServicios -1}*`)
// alert(`Te quedan: ${dineroDisponible}`)


// alert(`Tenés que pagar:
//     ${servicio1}: ${monto1},
//     ${servicio2}: ${monto2},
//     ${servicio3}: ${monto3},
// En total: ${totalMonto}.
// Tenés ${dineroTotal} por lo que te quedarían ${dineroDisponible} después de pagar todo.
// `);




//Ejercicio 22  Orden de Compras
// const leche = 100;
// const atun = 80;
// const yerba = 50;

// const producto1 = prompt("Ingrese cantidad de leche");
// const producto2 = prompt("Ingrese cantidad de atun");
// const producto3 = prompt("Ingrese cantidad de yerba");

// const total = (Number(producto1)*leche) + (Number(producto2)*atun) + (Number(producto3)*yerba);

// const cuotas = prompt(`El valor total de su compra es ${total}, en cuantas cuotas desea abonarlo?`);

// alert(`Su compra es:
// ${producto1} unidades de leche a ${leche} pesos cada una,
// ${producto2} unidades de atun a ${atun} pesos cada una,
// ${producto3} unidades de yerba a ${yerba} pesos cada una,
// el Total de su compra es de ${total} pesos y va a abonarlos en ${cuotas} cuotas de ${total/cuotas} pesos cada una.
// `)

 