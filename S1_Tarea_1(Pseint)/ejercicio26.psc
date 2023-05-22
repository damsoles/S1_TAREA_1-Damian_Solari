//Ejercicio 26:
//Dada las horas trabajadas de 5 personas y la tarifa de pago 
//calcular el salario, y la sumatoria de todos los salarios. 
//(Diagrama de Flujo)
Proceso ejercicio26
	Definir num_trabajadores, i, tarifa_pago, horas, salario, suma_total como entero ;
	Escribir " ingrese la cantidad de trabajadores" ;
	Leer num_trabajadores;
	i<-1;
	suma_total<-0;
	Escribir " ingrese la tarifa" ;
	Leer tarifa_pago;
	
	mientras i<=num_trabajadores Hacer
		Escribir " ingrese las horas trabajadas del " , i , " trabajador" ;
		Leer horas;
		salario<-horas*tarifa_pago;
		Escribir " el salario del " , i , " trabajador es  "  , salario;
		suma_total<-suma_total+salario;
		i<-i+1;
		
		
		
	FinMientras
	Escribir " el salario total de los trabajadores es " , suma_total;
	
	
FinProceso

