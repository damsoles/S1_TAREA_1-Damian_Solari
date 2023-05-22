//Ejercicio4: Leer 2 numeros; si son iguales que los multiplique, si el
//primero es mayor que el segundo que los reste y si no que los sume.
//(Pseudocódigo)

Proceso ejercicio10
	Definir num1, num2, resultado Como Entero;
	
	Escribir "Digite 2 numeros:";
	Leer  num1, num2;
	
	si num1=num2 Entonces
		//si son iguales multiplicados
		resultado <- num1*num2;
	sino 
		si num1 > num2 Entonces
			//si el primer numero es mayor los restamos
			resultado <- num1 - num2;
			
		sino
			
			resultado <- num1 + num2;
			
		FinSi
		
	FinSi
	
	Escribir "El resultado es: ",resultado;
FinProceso
