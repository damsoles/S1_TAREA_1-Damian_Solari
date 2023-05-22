//Ejercicio 23:
// Calcular el factorial de un número mayor o igual a 0.
Proceso ejercicio23
	//Definir variables:
	Definir i,num,fact Como real;
	
	Repetir
		Borrar Pantalla;
		Escribir "Digite un numero no menor a cero";
		leer num;
	Hasta Que num>=0;
	
	fact <- 1;
	i <- 1;
	
	Mientras i<num Hacer
		i <- i+1;
		fact <- fact*i;
	FinMientras
	
	Escribir 'El factor del numero es ',fact;
	
FinProceso