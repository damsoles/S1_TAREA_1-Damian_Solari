//Ejercicio 14: Elaborar un programa que me muestre el significado 
//de aniversario de cada década hasta los 60. 

Proceso ejercicio14
	Definir decada Como Entero;
	Escribir 'Digite una decada ';
	Leer decada;
	Segun decada Hacer
		10:
			Escribir "Boda de Hojalata";
		20:
			Escribir "Boda de Porcelana";
		30:
			Escribir "Boda de Perlas";
		40:
			Escribir "Boda de Rubi";
		50:
			Escribir "Boda de Oro";
		60:
			Escribir "Boda de Diamante";
		De Otro Modo:
			Escribir "Decada no existente";
	FinSegun
FinProceso
