// alert('Ola Javascript')

// -----------------
// function exibirAlerta(valor){
// alert(valor)

// }

// exibirAlerta("Este é um alerta feito por função")


// ----------------------


// let exibirAlerta = function(valor){
// alert(valor)

// }

// exibirAlerta("exibir mensagem função de expressão")

// -----------------------


// let exibirAlerta = (valor)=>{
// alert(valor)

// }

// exibirAlerta("exibir mensagem de função de expressão ARROW")


var f = document.forms[0];
addEvent(f, "submit", function(e){
alert(f.a.value)
return false;
})



