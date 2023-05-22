//Ejercicio 6: Una frutería ofrece las manzanas con descuento según la siguiente tabla:
//Número de kilos comprados | % Descuento
//0 -2 (0%)  
//2.01 - 5 (10%)
//5.01 - 10 (15%)
//10.01 en adelante (20%)
Proceso ejercicio12 
	Definir compraKilos, precioK, precioI, precioF, desc como reales;
	//Le preguntamos al cliente que nos diga el precio
	Escribir "¿Cuánto cuesta el kilo de manzanas? : ";
	Leer precioK;
	//Que nos diga cuantos kilos ha comprado
	Escribir "¿Cuántos kilos de manzanas ha comprado? :";
	Leer compraKilos;
	
	precioI <- precioK*compraKilos;
	
	//Dependiendo de cuantos kilos compre, así será el descuento
	Si compraKilos >=0 y compraKilos <= 2 Entonces
		desc <- 0;
	Sino
		Si compraKilos > 2.01 y compraKilos <= 5 Entonces
			desc <- precioI*0.1;
		Sino
			Si compraKilos > 5.01 y compraKilos <= 10 Entonces
				desc <- precioI*0.15;
			Sino
				desc <- precioI*0.2;
				
			FinSi	
		FinSi
		
	FinSi
	
	precioF <-precioI-desc;
	Escribir "El precio final es :",precioF;
FinProceso
