// Ejercicio 20: Se desea calcular independientemente la suma 
// de los n�meros pares e impares comprendidos entre 1 y 50. (Diagrama de Flujo)
Proceso ejercicio20
	Definir suma_pares,suma_impares,i Como Entero;
	suma_pares <- 0;
	suma_impares <- 0;
	Para i<-2 Hasta 49 Hacer
		Si i mod 2=0 Entonces
			suma_pares <- suma_pares+i;
		SiNo
			suma_impares <- suma_impares+i;
		FinSi
	FinPara
	Escribir 'La suma es pares es: ',suma_pares;
	Escribir 'La suma es impar es: ',suma_impares;
FinProceso