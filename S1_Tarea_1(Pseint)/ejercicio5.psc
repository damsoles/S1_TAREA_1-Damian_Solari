//Ejercicio 5: Una tienda ofrece un descuento de 15% sobre el total de la
//compra y un cliente desea saber cuanto debera pargar finalmente por su compra.

Proceso ejercicio5
	//Definir variables precio,descuento y precio final.
	Definir precio,descuento,precio_final Como Real;
	Escribir "Digite el precio a pagar: ";
	Leer precio;
	//Realizar operacion para sacar el descuento y luego el precio final.
	descuento <- precio*0.15;
	precio_final <- precio - descuento;
	Escribir "El precio a pagar es de: ",precio_final;
FinProceso
