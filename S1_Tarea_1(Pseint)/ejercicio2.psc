// Ejercicio 2  hacer un programa para ingresar el radio de un circulo y se reporte su area y longitud de la circuferencia 
// area = pi * radio^2 
// longitud = 2 * pi * radio
Proceso ejercicio2
	Definir radio,area,lon como real;
	Escribir "Digite el valor del radio:";
	Leer radio;
	area <- pi * radio^2;
	lon<- 2 * pi * radio;
	Escribir "El area de la circuferencia es ",area;
	Escribir "La longitud es: ",lon;
FinProceso
