// Ejercico 5: Leer tres n�meros diferentes e imprimir el n�mero mayor de 
// los tres. (Diagrama de Flujo)
Proceso ejercicio11
	Definir num1,num2,num3 Como Real;
	Escribir 'Digite 3 numeros: ';
	Leer num1,num2,num3;
	Si num1>num2 y num1>num3 Entonces
		Escribir "El mayor es: ",num1;
	SiNo
		Si num2>num1 y num2>num3 Entonces
			Escribir "El mayor es: ",num2;
		SiNo
			Escribir "El mayor es: ",num3;
		FinSi
	FinSi
FinProceso
