// alert('Ola Javascript')

// -----------------
// function exibirAlerta(valor){
// alert(valor)

// }

// exibirAlerta("Este é um alerta feito por função")


// ----------------------
// EVENTO

// let exibirAlerta = function(valor){
// alert(valor)

// }

// exibirAlerta("exibir mensagem função de expressão")

// -----------------------


// let exibirAlerta = (valor)=>{
// alert(valor)

// }

// exibirAlerta("exibir mensagem de função de expressão ARROW")

// --------------
// avaliar onde esta o erro no meu codigo abaixo

// var f = document.forms[0];
// f.addEventListener("submit", function (e) {
//     alert(f.a.value)
//     return false;
// })

// // codigo abaixo imprime digitado como  alert


// f.addEventListener("keyup", function (e) {
//     f.a.value = f.a.value.toUpperCase();

// })

// var f = document.forms[0];
// f.addEventListener("submit", function(e){
//     alert(f.a.value)
//     return false;
// })


// //
// f.addEventListener("keyup", function(e){
//     f.a.value=f.a.value.toUpperCase();
// })

// var a=1;
// var b=2;


// alert(a + b)

// lista e array é a mesma coisa

// var professor = "derli"
// var estrutura2 =`
// <table>
// <tr>
//     <td>${professor}</td>
//     <td></td>
//     <td></td>
// </tr>

// </table>
// `;

// alert(` Meu nome é ${professor} e tenho 37 anos`)

// Esse é um exemplo vai rodar com erro






let post = {
    title: 'Titulo do valor',
    except: 'Excessao do valor ',
    body: 'Corpo do valor',
    tags: [
        'Primeira linha',
        'Segunda linha',
        'Terceira linha'

    ]


}

let { title, except, body, tags } = post;
var postHTML = `<artile>
<header>


</header>
<section>
<div>${except}</div>
<div>${body}</div>

</section>
<footer>

<ul>${tags.map(tag => `<li>${tag}</li>`).join('\n')}</ul>
</footer >
`;


var div = document.querySelector('div');

div.innerHTML = postHTML;
