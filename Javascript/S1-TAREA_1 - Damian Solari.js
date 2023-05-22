
// Definición de la función para calcular los segundos
//Ejercicio 1:
function calcularSegundos() {
    // Definir las variables
    let horas, minutos, seg, total;
    let horas_seg, minutos_seg, total_seg;
  
    horas = parseInt(prompt("Digite las horas: "));
    minutos = parseInt(prompt("Digite los minutos: "));
    seg = parseInt(prompt("Digite los segundos: "));
  
    // Calcular las horas, minutos y segundos en segundos
    horas_seg = horas * 3600;
    minutos_seg = minutos * 60;
  
    total_seg = horas_seg + minutos_seg + seg;
  
    console.log("Los segundos equivalentes son: " + total_seg);
  }
  

  //Ejercicio 2:
  // Definición de la función para calcular el área y la longitud de la circunferencia
function calcularCirculo() {
    // Definir las variables
    let radio, area, lon;
    const pi = Math.PI;
  
    radio = parseFloat(prompt("Digite el valor del radio:"));
  
    area = pi * Math.pow(radio, 2);
    lon = 2 * pi * radio;
  
    console.log("El área de la circunferencia es: " + area);
    console.log("La longitud es: " + lon);
  }

  //Ejercicio 3:
  // Definición de la función para calcular el porcentaje de hombres y mujeres
function calcularPorcentaje() {
    // Definir las variables
    let num_hombres, num_mujeres, total_estudiantes;
    let porcentajeH, porcentajeM;
  
    num_hombres = parseInt(prompt("Digite el número de hombres:"));
    num_mujeres = parseInt(prompt("Digite el número de mujeres:"));
  
    total_estudiantes = num_hombres + num_mujeres;
    porcentajeH = (num_hombres / total_estudiantes) * 100;
    porcentajeM = (num_mujeres / total_estudiantes) * 100;
  
    console.log("El porcentaje de hombres es: " + porcentajeH + "%");
    console.log("El porcentaje de mujeres es: " + porcentajeM + "%");
  }
  
  //Ejercicio 4:
  // Definición de la función para calcular el tiempo de revisión
function calcularTiempoRevision() {
    // Definir las variables
    let cantidadA, cantidadB, cantidadC;
    let tiempoA, tiempoB, tiempoC, tiempo_total;
    let horas, minutos;
  
    cantidadA = parseInt(prompt("Digite la cantidad de cuestionarios A:"));
    cantidadB = parseInt(prompt("Digite la cantidad de cuestionarios B:"));
    cantidadC = parseInt(prompt("Digite la cantidad de cuestionarios C:"));
  
    // Calcular los minutos que se tardará por cada cuestionario
    tiempoA = cantidadA * 5;
    tiempoB = cantidadB * 8;
    tiempoC = cantidadC * 6;
  
    // Calcular el tiempo total que le toma revisar todos los cuestionarios
    tiempo_total = tiempoA + tiempoB + tiempoC;
  
    // Calcular las horas y minutos
    horas = Math.floor(tiempo_total / 60);
    minutos = tiempo_total % 60;
  
    console.log("Se tardará " + horas + " horas y " + minutos + " minutos.");
  }
  
  //Ejercicio 5:
  // Definición de la función para calcular el precio final con descuento
function calcularPrecioFinal1() {
    // Definir las variables
    let precio, descuento, precio_final;
  
    precio = parseFloat(prompt("Digite el precio a pagar:"));
  
    // Calcular el descuento y el precio final
    descuento = precio * 0.15;
    precio_final = precio - descuento;
  
    console.log("El precio a pagar es de: " + precio_final);
  }
  
  //Ejercicio 6:
  // Definición de la función para calcular la calificación final
function calcularCalificacionFinal() {
    // Definir las variables
    let parcial1, parcial2, parcial3, promedioP, notasParcial;
    let examen_final, notaExamen, notaTrabajo, notaFinalTrabajo;
    let notaFinal;
  
    parcial1 = parseFloat(prompt("Digite la nota del primer parcial:"));
    parcial2 = parseFloat(prompt("Digite la nota del segundo parcial:"));
    parcial3 = parseFloat(prompt("Digite la nota del tercer parcial:"));
  
    promedioP = (parcial1 + parcial2 + parcial3) / 3;
    notasParcial = promedioP * 0.55;
  
    examen_final = parseFloat(prompt("Digite la nota del examen final:"));
    notaExamen = examen_final * 0.3;
  
    notaTrabajo = parseFloat(prompt("Digite la nota del trabajo final:"));
    notaFinalTrabajo = notaTrabajo * 0.15;
  
    notaFinal = notasParcial + notaExamen + notaFinalTrabajo;
  
    console.log("La calificación final es: " + notaFinal);
  }
  
  //Ejercicio 7:
  // Definición de la función para verificar si un número es par o impar
function verificarParImpar() {
    // Definir la variable
    let num;
  
    num = parseInt(prompt("Digite un número:"));
  
    if (num % 2 === 0) {
      console.log("El número " + num + " es par");
    } else {
      console.log("El número " + num + " es impar");
    }
  }
  
  //Ejercicio 8:
  // Definición de la función para determinar si un alumno aprueba o reprueba un curso
function determinarAprobacion() {
    // Definir las variables
    let nota1, nota2, nota3;
    let promedio;
  
    nota1 = parseFloat(prompt("Digite la primera calificación:"));
    nota2 = parseFloat(prompt("Digite la segunda calificación:"));
    nota3 = parseFloat(prompt("Digite la tercera calificación:"));
  
    promedio = (nota1 + nota2 + nota3) / 3;
  
    if (promedio >= 70) {
      console.log("El alumno está aprobado con un promedio de " + promedio);
    } else {
      console.log("El alumno está reprobado con un promedio de " + promedio);
    }
  }
  
  
  
  //Ejercicio 9:
  // Definición de la función para calcular el precio de compra con descuento
function calcularPrecioCompra() {
    // Definir las variables
    let compra, descuento, precio_final;
  
    compra = parseFloat(prompt("Digite la cantidad a pagar:"));
  
    if (compra > 100) {
      descuento = compra * 0.2;
    } else {
      descuento = 0;
    }
  
    precio_final = compra - descuento;
  
    console.log("El precio a pagar es: " + precio_final);
  }
  

  
  //Ejercicio 10:
  // Definición de la función para realizar operaciones con dos números
function operacionesNumeros() {
    // Definir las variables
    let num1, num2, resultado;
  
    num1 = parseInt(prompt("Digite el primer número:"));
    num2 = parseInt(prompt("Digite el segundo número:"));
  
    if (num1 === num2) {
      // Si son iguales, multiplicarlos
      resultado = num1 * num2;
    } else {
      if (num1 > num2) {
        // Si el primer número es mayor, restarlos
        resultado = num1 - num2;
      } else {
        // Si el primer número no es mayor, sumarlos
        resultado = num1 + num2;
      }
    }
  
    console.log("El resultado es: " + resultado);
  }
  
 
  //Ejercicio 11:
  // Definición de la función para encontrar el número mayor
function encontrarMayor() {
    // Definir las variables
    let num1, num2, num3;
  
    num1 = parseFloat(prompt("Digite el primer número:"));
    num2 = parseFloat(prompt("Digite el segundo número:"));
    num3 = parseFloat(prompt("Digite el tercer número:"));
  
    if (num1 > num2 && num1 > num3) {
      console.log("El mayor es: " + num1);
    } else if (num2 > num1 && num2 > num3) {
      console.log("El mayor es: " + num2);
    } else {
      console.log("El mayor es: " + num3);
    }
  }
  

  
  //Ejercicio 12:
  // Definición de la función para calcular el precio final de las manzanas
function calcularPrecioFinal2() {
    // Definir las variables
    let compraKilos, precioK, precioI, precioF, desc;
  
    precioK = parseFloat(prompt("¿Cuánto cuesta el kilo de manzanas?"));
    compraKilos = parseFloat(prompt("¿Cuántos kilos de manzanas ha comprado?"));
  
    precioI = precioK * compraKilos;
  
    if (compraKilos >= 0 && compraKilos <= 2) {
      desc = 0;
    } else if (compraKilos > 2.01 && compraKilos <= 5) {
      desc = precioI * 0.1;
    } else if (compraKilos > 5.01 && compraKilos <= 10) {
      desc = precioI * 0.15;
    } else {
      desc = precioI * 0.2;
    }
  
    precioF = precioI - desc;
  
    console.log("El precio final es: " + precioF);
  }
  
 
  
  //Ejercicio 13:
  // Definición de la función para mostrar el día de la semana
function mostrarDiaSemana() {
    // Definir la variable
    let num = parseInt(prompt("Digite un numero del dia de la semana (1-7):"));
  
    switch (num) {
      case 1:
        console.log("Lunes");
        break;
      case 2:
        console.log("Martes");
        break;
      case 3:
        console.log("Miércoles");
        break;
      case 4:
        console.log("Jueves");
        break;
      case 5:
        console.log("Viernes");
        break;
      case 6:
        console.log("Sábado");
        break;
      case 7:
        console.log("Domingo");
        break;
      default:
        console.log("Error, no existe día para ese número");
    }
  }
  
  
  
  //Ejercicio 14:
  // Definición de la función para mostrar el significado de cada década
function mostrarSignificadoDecada() {
    // Definir la variable
    let decada = parseInt(prompt("Digite una década:"));
  
    switch (decada) {
      case 10:
        console.log("Boda de Hojalata");
        break;
      case 20:
        console.log("Boda de Porcelana");
        break;
      case 30:
        console.log("Boda de Perlas");
        break;
      case 40:
        console.log("Boda de Rubí");
        break;
      case 50:
        console.log("Boda de Oro");
        break;
      case 60:
        console.log("Boda de Diamante");
        break;
      default:
        console.log("Decada no existente");
    }
  }
  
  
  //Ejercicio 15:
  // Función para elevar un número a una potencia
function elevarNumeroAPotencia() {
    let num = parseFloat(prompt("Digite un número: "));
    let pot = parseFloat(prompt("Digite la potencia: "));
    let resultado = Math.pow(num, pot);
    console.log("El resultado es: " + resultado);
  }
  
  // Función para calcular la raíz cuadrada de un número
  function calcularRaizCuadrada() {
    let num = parseFloat(prompt("Digite un número: "));
    let resultado = Math.sqrt(num);
    console.log("El resultado es: " + resultado);
  }
  
  // Función principal que muestra el menú y maneja las opciones
  function mostrarMenu() {
    let opcion;
    do {
      console.log("MENU");
      console.log("1. Elevar un número a una potencia X");
      console.log("2. Sacar la raíz cuadrada de un número");
      console.log("3. Salir");
      opcion = parseInt(prompt("Digite una opción:"));
  
      switch (opcion) {
        case 1:
          elevarNumeroAPotencia();
          break;
        case 2:
          calcularRaizCuadrada();
          break;
        case 3:
          console.log("Saliendo del programa...");
          break;
        default:
          console.log("Opción de menú incorrecta");
      }
    } while (opcion !== 3);
  }
  

  
  //Ejercicio 16:
  // Función para imprimir los números del 1 al 10
function ciclos1() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
  
  
  //Ejercicio 17:
  // Función para imprimir los números del 1 al 10
function ciclos2() {
    let i = 1;
    
    while (i <= 10) {
      console.log(i);
      i = i + 1;
    }
  }
  
  
  
  //Ejercicio 18:
  // Función para imprimir los números del 1 al 10
function ciclos3() {
    let i = 1;
    
    do {
      console.log(i);
      i = i + 1;
    } while (i <= 10);
  }
  
 
  
  //Ejercicio 19:
  // Función para calcular la suma de los primeros N números
function calcularSuma(N) {
    let suma = 0;
  
    for (let i = 1; i <= N; i++) {
      suma += i;
    }
  
    return suma;
  }
  
  // Obtener el valor de N
  const N = parseInt(prompt("Digite la cantidad de números a sumarse:"));
  
  // Calcular la suma de los primeros N números
  const resultado = calcularSuma(N);
  
  // Mostrar el resultado
  console.log("La suma es:", resultado);

  //Ejercicio 20:
  function calcularSumaParesImpares() {
    let sumaPares = 0;
    let sumaImpares = 0;
  
    for (let i = 2; i <= 49; i++) {
      if (i % 2 === 0) {
        sumaPares += i;
      } else {
        sumaImpares += i;
      }
    }
  
    console.log("La suma de los números pares es:", sumaPares);
    console.log("La suma de los números impares es:", sumaImpares);
  }
  
  
  
  //Ejercicio 21:
  function contarNumeros() {
    let conteoPositivos = 0;
    let conteoNegativos = 0;
    let conteoNeutros = 0;
  
    for (let i = 1; i <= 10; i++) {
      let num = parseInt(prompt("Digite un número:"));
  
      if (num === 0) {
        conteoNeutros++;
      } else if (num > 0) {
        conteoPositivos++;
      } else {
        conteoNegativos++;
      }
    }
  
    console.log("La cantidad de números positivos es:", conteoPositivos);
    console.log("La cantidad de números negativos es:", conteoNegativos);
    console.log("La cantidad de números neutros es:", conteoNeutros);
  }
  
  
  
  //Ejercicio 22:
  function calcularCalificaciones() {
    let calificacionPromedio = 0;
    let calificacionBaja = Infinity;
    let suma = 0;
  
    for (let i = 1; i <= 10; i++) {
      let calificacion = parseFloat(prompt("Digite una calificación:"));
  
      suma += calificacion;
  
      if (calificacion < calificacionBaja) {
        calificacionBaja = calificacion;
      }
    }
  
    calificacionPromedio = suma / 10;
  
    console.log("La calificación promedio es:", calificacionPromedio);
    console.log("La calificación más baja es:", calificacionBaja);
  }
  
 
  
  //Ejercicio 23:
  function calcularFactorial() {
    let num;
    
    do {
      num = parseInt(prompt("Digite un número no menor a cero:"));
    } while (num < 0);
  
    let fact = 1;
    let i = 1;
  
    while (i <= num) {
      fact *= i;
      i++;
    }
  
    console.log("El factorial del número es:", fact);
  }
  
 
  
  //Ejercicio 24:
  function calcularSumaCuadrados() {
    let n_elementos;
    let i, suma;
    
    console.log("Digite la cantidad de elementos a sumarse: ");
    n_elementos = parseInt(prompt("Digite la cantidad de elementos a sumarse: "));
    
    i = 1;
    suma = 0;
    
    while (i <= n_elementos) {
      suma += Math.pow(i, 2);
      i++;
    }
    
    console.log("La suma es:", suma);
  }
  
  
  //Ejercicio 25:
  function calcularSumaPromedio() {
    let ncantidad = parseInt(prompt("Digite la cantidad que quiere ingresar: "));
    let i = 1;
    let npares = 0;
    let nimpares = 0;
    let contenedor_pares = 0;
    let contenedor_impares = 0;
    let contador_par = 0;
    let contador_impar = 0;
  
    while (i <= ncantidad) {
      let n = parseInt(prompt(i + ". Digite un número: "));
      i++;
  
      if (n % 2 === 0) {
        contador_par++;
        contenedor_pares += n;
      } else {
        contenedor_impares += n;
        contador_impar++;
      }
    }
  
    console.log("La suma de los números pares es:", contenedor_pares);
    console.log("La cantidad de números pares es:", contador_par);
    console.log("El promedio de números impares es:", contenedor_impares / contador_impar);
  }
  

  
  //Ejercicio 26:
  function calcularSalarios() {
    let num_trabajadores = parseInt(prompt("Ingrese la cantidad de trabajadores: "));
    let i = 1;
    let tarifa_pago = parseFloat(prompt("Ingrese la tarifa de pago: "));
    let suma_total = 0;
  
    while (i <= num_trabajadores) {
      let horas = parseInt(prompt("Ingrese las horas trabajadas del trabajador " + i + ": "));
      let salario = horas * tarifa_pago;
  
      console.log("El salario del trabajador " + i + " es: " + salario);
      
      suma_total += salario;
      i++;
    }
  
    console.log("El salario total de los trabajadores es: " + suma_total);
  }
  
  
  
  
  //LLAMAR A LAS FUNCIONES(EJERCICIOS)
  // Llamada a la función 1
  //calcularSegundos();
  // Llamada a la función 2
  //calcularCirculo();
  // Llamada a la función 3
  //calcularPorcentaje();
  // Llamada a la función 4
  //calcularTiempoRevision();
  // Llamada a la función 5
  //calcularPrecioFinal1();
  // Llamada a la función 6:
  //calcularCalificacionFinal();
  // Llamada a la función 7
  //verificarParImpar();
  // Llamada a la función 8
  //determinarAprobacion();
  // Llamada a la función 9
  //calcularPrecioCompra();
  // Llamada a la función 10
  //operacionesNumeros();
  // Llamada a la función 11
  //encontrarMayor();
  // Llamada a la función 12
  //calcularPrecioFinal2();
  // Llamada a la función 13
  //mostrarDiaSemana();
  // Llamada a la función 14
  //mostrarSignificadoDecada();
  // Llamada a la función principal 15
  //mostrarMenu();
  // Llamada a la función 16
  //ciclos1();
  // Llamada a la función 17
  //ciclos2();
  // Llamada a la función 18
  //ciclos3();
  // Llamada a la función 19
  //calcularSuma();
  // Llamada a la función 20
  //calcularSumaParesImpares();
  // Llamada a la función 21
  //contarNumeros();
  // Llamada a la función 22
  //calcularCalificaciones();
  // Llamada a la función 23
  //calcularFactorial();
  // Llamada a la función 24
  //calcularSumaCuadrados();
  // Llamada a la función 25
  //calcularSumaPromedio();
  // Llamada a la función 26
  //calcularSalarios();