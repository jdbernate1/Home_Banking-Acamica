//Declaración de variables

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

var nombreUsuario = "";
var codigoCuenta= "1234"
var saldoCuenta = 0;
var limiteExtraccion= 5000;
var montoAgua=350;
var montoLuz=210;
var montoInternet=570;
var montoTelefono=425;
var destinatarios=["1 - Pepito Perez","2 - Armando Casas"];
var serviciosN=["1 - Internet", "2 - Agua", "3 - Luz","4 - Teléfono"]

function sumarDinero(monto){
	var importe = Number(monto);
	saldoCuenta+=importe;

}

function restarDinero(monto){
	var importe = Number(monto);
	saldoCuenta-=importe;

}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	var input=prompt("Ingrese el nuevo limite de extraccion");
	if (input==""){
		alert("Este campo no puede estar vacio");
	} else if(isNaN(input)){
		alert("Ingrese un valor numerico")
	} else{ 
		limiteExtraccion=Number(input);
		actualizarLimiteEnPantalla();
		alert("Su nuevo limite de extracción son "+input)
	}

}

function extraerDinero() {
	var input=prompt("Ingrese el monto a extraer");
	input= parseInt(input);
	if (input==""){
		alert("Este campo no puede estar vacio");
	} else if(isNaN(input)){
		alert("Ingrese un valor numerico");
		} else if (Number(input)>saldoCuenta){ 
			alert("No posees saldo suficiente");
			} else if( (input%100)>0){
				alert("Solo se pueden extraer billetes de 100");
				} else if (Number(input)>limiteExtraccion){
				alert("Tu limite de extraccion son "+limiteExtraccion);
				} else {
					var saldoant=saldoCuenta;
					restarDinero(input);
				    actualizarSaldoEnPantalla();
				    alert("Se han extraido "+input+" de su cuenta."+"\n"+"Saldo Anterior: "+saldoant+ "\n"+"Nuevo Saldo: "+saldoCuenta)
				}			
		}



function depositarDinero() {
	var input=prompt("Ingrese el monto a depositar");
	if (input==""){
		alert("Este campo no puede estar vacio");
	} else if(isNaN(input)){
		alert("Ingrese un valor numerico");
		} else{
			var saldoant=saldoCuenta;
			sumarDinero(input);
			actualizarSaldoEnPantalla();
			alert("Se han depositado "+input+" en su cuenta."+"\n"+ "Saldo anterior:"+saldoant+"\n"+ "Nuevo Saldo:"+saldoCuenta)
			}
		
}

function pagoServicio(montoServicio){
	if(montoServicio>saldoCuenta){
		alert("Su Saldo es insuficiente");
	} else {
		saldoant=saldoCuenta;
		saldoCuenta= saldoCuenta-montoServicio;
		actualizarSaldoEnPantalla();
		alert("Se pago el servicio seleccionado por un valor de "+montoServicio+"\n"+ "Saldo Anterior: "
			+saldoant+"\n"+"Nuevo Saldo: "+saldoCuenta)
	}
}

function pagarServicio() {
	var input= prompt( 
        "Ingrese el numero que corresponda al servicio que quiere pagar:" + "\n" + "\n" +
        serviciosN.join('\n'))
	var servicios = [1,2,3,4,5];
	if(!(input in servicios)){
		alert("Ingrese el numero de uno de los servicios listados");
	}else{
		input=Number(input);
		switch (input) {
			case 1:
				pagoServicio(montoInternet);
				break;
			case 2:
				pagoServicio(montoAgua);
				break;
			case 3:
				pagoServicio(montoLuz);
				break;
			case 4:
				pagoServicio(montoTelefono);
				break;
			default:
				alert("El servicio no esta asociado a su cuenta");
				break;
						}		
		  }

}



function transferirDinero() {
	var input= prompt("Ingrese el monto a Transferir:");
	var max=destinatarios.length;
	input=Number(input)
	if (input==""){
		alert("Este campo no puede estar vacio");
		} else if(isNaN(input)){
			alert("Ingrese un valor numerico")
			} else if (Number(input)>saldoCuenta) {
					alert("No posee saldo suficiente")
				}else{
					var dest=prompt("Ingrese el numero que corresponda al destinario que quiere transfeir:" + "\n" + "\n" +destinatarios.join('\n'));
					dest=parseInt(dest);
					if(dest=="" || dest==null || dest>max || isNaN(dest)){
					alert("Ingrese un numero que corresponda a un destinario")
					}else {
					var saldoant=saldoCuenta;
					switch (dest) {
						case 1:
							restarDinero(input);
							actualizarSaldoEnPantalla();
							alert("Se han transferido "+input+" a Pepito Perez"+"\n"
								+"Saldo Anterior: "+saldoant+"\n"+"Nuevo Saldo: "+saldoCuenta);
							break;
						case 2:
							restarDinero(input);
							actualizarSaldoEnPantalla();
							alert("Se han transferido "+input+" a Armando Casas"+"\n"
								+"Saldo Anterior: "+saldoant+"\n"+"Nuevo Saldo: "+saldoCuenta);
						default:
							Alert("El destinatario no esta asociado a su cuenta")
							break;
					}
				}

			}

}


function iniciarSesion() {
	var usuario = prompt("Ingrese su codigo de cuenta:");
	nombreUsuario = usuario;
	if(usuario==codigoCuenta){
		alert("Bienvenido/a a Home Banking Juan Diego Bernate V. Ya puedes comenzar a realizar operaciones.");
	} else { 
		alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad")
	}
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}