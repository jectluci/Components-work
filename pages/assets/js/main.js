async function cargarDatos() {
	let datos = await fetch("http://localhost:3000/");
	let datosjson = await datos.json();
	sessionStorage.dato = JSON.stringify(datosjson);
	controllador();
}
sessionStorage.pagecoun = 0;
const numxPag = 10;

function controllador() {
	let datos = sessionStorage.dato;
	let datosJ = JSON.parse(datos);
	maxPag = datosJ.length - numxPag;
	let pagHere = parseInt(sessionStorage.pagecoun, 10);
	console.log(pagHere);
	let datosTrabajo = datosJ.slice(pagHere, pagHere + numxPag);
	let btnplus = document.getElementById("snext");
	let btnless = document.getElementById("sprev");
	if (pagHere == 0) {
		btnless.disabled = true;
		btnplus.disabled = false;
	} else if (pagHere == maxPag) {
		btnless.disabled = false;
		btnplus.disabled = true;
	} else {
		btnless.disabled = false;
		btnplus.disabled = false;
	}

	llenadoTabla(datosTrabajo);
}

function llenadoTabla(datosJ) {
	let tbdy = document.getElementById("tabladatos");
	let datosTabla = ``;
	for (let i = 0; i < datosJ.length; i++) {
		let colums = `
		<tr>
			<td>${datosJ[i].id}</td>
			<td>${datosJ[i].title}</td>
			<td>${datosJ[i].body}</td>
		</tr>
		`;
		datosTabla += colums;
	}
	tbdy.innerHTML = datosTabla;
}

function paginationplus() {
	let number = sessionStorage.pagecoun;
	let newPag = parseInt(number, 10) + numxPag;
	sessionStorage.pagecoun = newPag;
	controllador();
}

function paginationless() {
	let number = sessionStorage.pagecoun;
	let newPag = parseInt(number, 10) - numxPag;
	sessionStorage.pagecoun = newPag;
	controllador();
}
