//Un maestro desa saber que porcentaje de hombres y que
//porcentaje de mujeres hay en un grupo de estudiantes.


Proceso ejercicio3
	
	Definir num_hombres, num_mujeres Como Enteros;
	Definir total_estudiantes como entero;
	Definir porcentajeH, porcentajeM Como reales;
	
	Escribir "Digite el numero de hombres";
	Leer num_hombres;
	Escribir "Digite el numero de mujeres";
	leer num_mujeres;
	
	total_estudiantes <- num_hombres + num_mujeres;
	porcentajeH <- num_hombres/total_estudiantes*100;
	porcentajeM <- num_mujeres/total_estudiantes*100;
	
	Escribir "El porcentaje de hombres es:",porcentajeH,"%";
	Escribir "El porcentaje de mujeres es:",porcentajeM,"%";
	
FinProceso