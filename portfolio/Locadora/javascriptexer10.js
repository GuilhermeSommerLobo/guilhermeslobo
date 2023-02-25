function validaForm(){
	let validaAnimal = document.forms["cadastrar"]["Animal"].value;
	let validaDono = document.forms["cadastrar"]["Dono"].value;
	let validaContato = document.forms["cadastrar"]["Contato"].value;
	let validaAgenda = document.forms["cadastrar"]["Agenda"].value;
}

if (validaAnimal == ""){
		alert("Nome do animal deve ser preenchido!");
		return false;
	}
if (validaDono == ""){
		alert("Nome do dono deve ser preenchido!");
		return false;
	}
if (validaContato == ""){
		alert("Telefone para contato deve ser preenchido!");
		return false;
	}
if (validaAgenda == ""){
		alert("Dia do agendamento deve ser preenchido!");
		return false;
	}

function insere(){

	let animal = document.forms["cadastrar"]["Animal"].value;
	let dono = document.forms["cadastrar"]["Dono"].value;
	let contato = document.forms["cadastrar"]["Contato"].value;
	let agenda = document.forms["cadastrar"]["Agenda"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${codi}</th>`
	inserir.innerHTML += `<th>${animal} </th>`
	inserir.innerHTML += `<th>${dono} </th>`
	inserir.innerHTML += `<th>${contato} </th>`
	inserir.innerHTML += `<th>${agenda} </th>`
}