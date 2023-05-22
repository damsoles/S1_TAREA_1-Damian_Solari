//Ejercicio 1: Calcular al cantidad de segundos que estan incluidos en el :
//numero de horas, minutos y segundos ingresados por el usuario.

Proceso ejercicio1
	// Primero defino las variables 
	Definir horas,minutos,seg,total Como Entero;
	Definir horas_seg, minutos_seg, total_seg Como entero;
	
	Escribir "Digite las horas: ";
	leer horas;
	Escribir "Digite los minutos: ";
	Leer minutos;
	Escribir "Digite los segundos: ";
	Leer seg;
	
	//Calcular las horas, minutos y segundos en segundos 
	horas_seg <- horas * 3600; 
	minutos_seg <- minutos * 60;
	
	
	total_seg <- horas_seg + minutos_seg + seg;
	
	Escribir "Los segundos equivalestes son:",total_seg;
FinProceso
