//V A R I A B L E S
var button = document.getElementById("boton");
var espacio = document.getElementById("cajon"),clicks=0;
var mas = document.getElementById("mas");
var b = document.getElementById("caja");

//F U N C I O N E S
/*Aqui creamos la nota*/
function generarPostIt(event) {
	if (clicks < 4){
	clicks++;
	var nota = document.createElement('div');
	nota.setAttribute('class',"nota");
	/*Color*/
	var x = Math.round( Math.random() * 255 );
	var y = Math.round( Math.random() * 255 );
	var z = Math.round( Math.random() * 255 );
	var bg = "background:rgb("+x+", "+y+", "+z+");";
	nota.style = bg;
	/*nuestra nota contendra varios atributos*/
		/*Funcionalidades*/
			/*Botones*/
			var botones = document.createElement('div');
				botones.setAttribute('class',"botones");
			/*Checkbox*/
			var checar = document.createElement('input');
				checar.type = "checkbox";
			/*Boton de color*/
			var botonc = document.createElement('a');
				botonc.class = "btnc";
				botonc.innerHTML = "COLOR";
			/*Boton de eliminacion*/
			var botonelim = document.createElement('a');
				botonelim.class = "btnelim";
				botonelim.innerHTML = "X";
			botones.appendChild(checar);
			botones.appendChild(botonc);
			botones.appendChild(botonelim);
		/*Titulo*/
		var titulo = document.createElement('input');
			titulo.type = "text";
			titulo.placeholder = "Asunto";
		/*Contenido*/
		var mensaje = document.createElement('textarea');
			mensaje.class = "ctn";
			mensaje.placeholder = "Descripcion";
		/*Fecha*/
		var dia = document.createElement('select');
			dia.placeholder = "Seleccione el dia";
		var dom = document.createElement('option');
			dom.innerHTML="Domingo";
		var lun = document.createElement('option');
			lun.innerHTML="Lunes";
		var mar = document.createElement('option');
			mar.innerHTML="Martes";
		var mie = document.createElement('option');
			mie.innerHTML="Miercoles";
		var jue = document.createElement('option');
			jue.innerHTML="Jueves";
		var vie = document.createElement('option');
			vie.innerHTML="Viernes";
		var sab = document.createElement('option');
			sab.innerHTML="Sabado";
		dia.appendChild(dom);dia.appendChild(lun);dia.appendChild(mar);
		dia.appendChild(mie);dia.appendChild(jue);dia.appendChild(vie);
		dia.appendChild(sab);

	nota.appendChild(botones);
	nota.appendChild(titulo);
	nota.appendChild(mensaje);
	nota.appendChild(dia);
	espacio.appendChild(nota);

	/*Aqui dammos aviso de marcado*/
	checar.addEventListener("click",function(){
		if (checar.checked == true){
			alert("La nota fue realizada");
		}
		else{
			alert("La nota fue desmarcada");
		}
	});
	/*Aqui cambiamos el color de la nota*/
	botonc.addEventListener("click",function(){
		var x = Math.round( Math.random() * 255 );
		var y = Math.round( Math.random() * 255 );
		var z = Math.round( Math.random() * 255 );
		var bg = "background:rgb("+x+", "+y+", "+z+");";
		nota.style = bg;
	});
	/*Aqui eliminamos la nota*/
	botonelim.addEventListener("click",function(){
		var ch = prompt("¿Ya realizo lo que tenia pendiente?");
			if(ch == "si" || ch == "Si" || ch == "SI" || ch == "sI"){
				alert("Se borrara su Post-It!");
				espacio.removeChild(nota);
				clicks--;
			}
			else if(ch == "no" || ch == "No" || ch == "NO" || ch == "nO"){
				alert("Ok, el Post-It seguira activo");
				checar.checked = false;
			}
			else{
				alert("Ingrese una respuesta valida o llene el espacio");
			}
	});
	}
	else if(clicks == 4){
		alert("Temporalmente no puede ingresar mas notas");
	}
}
/*Aqui creamos las cajas*/
function cajas(event) {
	var caja = document.createElement('div');
	caja.setAttribute('class',"box");
		/*Botones*/
		var botones2 = document.createElement('div');
			botones2.setAttribute('class',"botones");
		/*Boton de color*/
		var bmas = document.createElement('a');
			bmas.class = "mas";
			bmas.innerHTML = "+";
		/*Boton de eliminacion*/
		var bmenos = document.createElement('a');
			bmenos.innerHTML = "X";
		botones2.appendChild(bmas);
		botones2.appendChild(bmenos);
		caja.appendChild(botones2);
	b.appendChild(caja);

	bmas.addEventListener("click",function(){
		var caja2 = document.createElement('div');
		caja2.setAttribute('class',"box");
		/*Botones*/
		var botones22 = document.createElement('div');
			botones22.setAttribute('class',"botones");
		/*Boton de color*/
		var bmas2 = document.createElement('a');
			bmas2.class = "mas";
			bmas2.innerHTML = "+";
		/*Boton de eliminacion*/
		var bmenos2 = document.createElement('a');
			bmenos2.innerHTML = "X";
		botones22.appendChild(bmas2);
		botones22.appendChild(bmenos2);
		caja2.appendChild(botones22);
		caja.appendChild(caja2);
	});
	bmenos.addEventListener("click",function(){
		b.removeChild(caja);
	})
}

//E V E N T O S

window.addEventListener("load",function () {
	button.addEventListener("click",generarPostIt);
	mas.addEventListener("click",cajas);
});