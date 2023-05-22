//Ejercicio 7: Elaborar un programa que me muestre los días de las semanas 
//cuando ingrese los siete primeros números. 

Proceso ejercicio13
	Definir num como entero;
	
	Escribir "Digite un numero del dia de la seman(1-7): ";
	Leer num;
	
	Segun num Hacer
		1: Escribir "Lunes";
		2: Escribir "Marte";
		3: Escribir "Miercoles";
		4: Escribir "Jueves";
		5: Escribir "Viernes";
		6: Escribir "Sabado";
		7: Escribir "Domingo";
		De Otro Modo:
			Escribir "Erro, no existe dia para ese numero";
	FinSegun
FinProceso
