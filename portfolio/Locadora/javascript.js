function validaForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;
	let validaDat = document.forms["cadastrar"]["data"].value;
	let validaTit = document.forms["cadastrar"]["titulo"].value;
	let validaDir = document.forms["cadastrar"]["diretor"].value;
	let validaAto = document.forms["cadastrar"]["ator"].value;
	let validaNot = document.forms["cadastrar"]["nota"].value;
	let validaRad = document.forms["cadastrar"]["radio"].value;

	if (validaCod == ""){
		alert("O código deve ser preenchido!");
		return false;
	}
	if (validaDat == ""){
		alert("A data deve ser preenchida!");
		return false;
	}
	if (validaTit == ""){
		alert("O título deve ser preenchido!");
		return false;
	}
	if (validaDir == ""){
		alert("O diretor deve ser preenchido!");
		return false;
	}
	if (validaAto == ""){
		alert("O ator/atriz deve ser preenchido!");
		return false;
	}
	if (validaNot == ""){
		alert("A nota deve ser preenchido!");
		return false;
	}
	if (validaRad == ""){
		alert("O gênero deve ser preenchido!");
		return false;
	}

}

function insere(){
	let codi = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let titu = document.forms["cadastrar"]["titulo"].value;
	let dire = document.forms["cadastrar"]["diretor"].value;
	let ator = document.forms["cadastrar"]["ator"].value;
	let nota = document.forms["cadastrar"]["nota"].value;
	let radi = document.forms["cadastrar"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${codi}</th>`
	inserir.innerHTML += `<th>${data} </th>`
	inserir.innerHTML += `<th>${titu} scope="row"> 12 </th>`
	inserir.innerHTML += `<th>${dire} scope="row"> 12 </th>`
	inserir.innerHTML += `<th>${ator} scope="row"> 12 </th>`
	inserir.innerHTML += `<th>${nota} scope="row"> 12 </th>`
	inserir.innerHTML += `<th>${radi} scope="row"> 12 </th>`
					
}