//Ejercicio 7: Ingrese un numero y reortar si es par o impar.

Proceso ejercicio7
	Definir  num Como Entero;
	
	Escribir "Digite un numero: ";
	Leer num;
	
	Si num mod 2 = 0 Entonces
		Escribir "El numero ",num," es par";
	SiNo
		Escribir "El numero ",num,"es impar";
	FinSi
FinProceso
