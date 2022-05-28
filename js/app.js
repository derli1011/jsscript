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






// let post = {
//     title: 'Titulo do valor',
//     except: 'Excessao do valor ',
//     body: 'Corpo do valor',
//     tags: [
//         'Primeira linha',
//         'Segunda linha',
//         'Terceira linha'

//     ]


// }

// let { title, except, body, tags } = post;
// var postHTML = `<artile>
// <header>


// </header>
// <section>
// <div>${except}</div>
// <div>${body}</div>

// </section>
// <footer>

// <ul>${tags.map(tag => `<li>${tag}</li>`).join('\n')}</ul>
// </footer >
// `;


// var div = document.querySelector('div');

// div.innerHTML = postHTML;




// operador de atibuição

// var nome ="diego";
// // nome +="Bracellos"

// var nome2 = "Diego"

// alert(nome == nome2) -> confirm,para se tem valores iguais

v1 = 10;
v2 = 30;

// alert(v1 > v2)  verifica se v1 é maior que v2
// alert(v1 < v2)   verifica se v1 é menor que v2

// alert(v1 >= v2)   verifica se v1 é maior ou igual que v2

// alert(v1 <= v2)   verifica se v1 é menor ou igual que v2


// if else

// if (v1 > v2){
// alert('verdadeiro')

// }else if(v1 == v2){

//     alert('false')
// }


// ------------------

// switch serva pra fazer verificações multiplas




// var destino = "Navegantes";
// switch (destino) {

//     case "Navegantes":
//         alert('o voo vai para navegantes');

//         break;

//         case "sao paulo":
//             alert('o voo vai para SP');
//             break;

//             case "curitiba":
//             alert('o voo vai para curitiba');
//             break;


//     default:
//         alert('selecione um destino');
//         break;
// }

// ---------------


// laços de repetição

// for (let index = 0; index <= 100; index++) {
//    console.log(index)

// }

// for (let index = 100; index >= 0; index--) {
//     console.log(index)

//  }
// ---------------------

// var listaClientes = [
//     "jose",
//     "maria",
//     "jonas",
//     "joao",
// ];
// for(clientes in listaClientes){ clientes recebe o indexedDB(posição do objeto)
// console.log(clientes)

// }

// imprime a lista de clientes

// for(clientes in listaClientes){
//     console.log(listaClientes[clientes])

//     }

// codigo abaixo imprime a posição[clientes] e o nome da lista maria, joao ...

// for(clientes in listaClientes){
//     console.log(`${clientes} => ${listaClientes[clientes]}`)

//     }

// ---------------------------

// laço condicional, enquanto não for verdadeiro o valor ele continua executando
//     var inc = 0
//     while (inc < 10){
//         console.log(inc);
//         inc++;

//     }
// ----------------

// do while:


// var inc=0;
// do{
// console.log(inc);
// inc++;

// }while(inc < 10)

// -------------------------


// for (let index = 0; index < listaClientes.length; index++) {
//    console.log (listaClientes[index])

// }


// --------------------

$(function () {
    var estados = {
        '12': 'Acre',
        '27': 'Alagoas',
        '16': 'Amapá',
        '13': 'Amazonas',
        '29': 'Bahia',
        '23': 'Ceará',
        '53': 'Distrito Federal',
        '32': 'Espírito Santo',
        '52': 'Goías',
        '21': 'Maranhão',
        '51': 'Mato Grosso',
        '50': 'Mato Grosso do Sul',
        '31': 'Minas Gerais',
        '15': 'Pará',
        '25': 'Paraíba',
        '41': 'Paraná',
        '26': 'Pernambuco',
        '22': 'Piauí',
        '33': 'Rio de Janeiro',
        '24': 'Rio Grande do Norte',
        '43': 'Rio Grande do Sul',
        '11': 'Rondônia',
        '14': 'Roraíma',
        '42': 'Santa Catarina',
        '35': 'São Paulo',
        '28': 'Sergipe',
        '17': 'Tocantins'
    }
    let options = `<option value="">Selecione um estado</option>`
    for (index in estados) {

        options += `<option value="${index}">${estados[index]}</option>`;

    }

    $('select[name="estados"]').html(options);


    $('.estados').change(function () {
        let estado = $(this).val();
        $(this).addClass('estados do Brasil');
        // adclas adiciona uma classe ao elemento

        //     $(this).attr('data-id',10)
        //     // ler o valor de um atributo

        //     var nomeSelect = $(this).attr('data-desc');
        //    alert(nomeSelect);

        //    verificar se uma classe existe no elemento

        var existeClass = $(this).hasClass('estadosBasileiros');
        alert(existeClass)


        //   atribuindo um seletor em uma variavel
        let seletor = ".preencher";
        // injetar conteudo dentro de um elemento(textos, tags, qualquer coisa)
        //  ${variavel} > chamar variavel dentro de string literal com crase
        $(seletor).html(`O estado selecionado é ${estados[estado]}`);
        // Na linhs 323 o segundo $ é uma variavel que esta sendo chamada 
        // numa string literal o promeiro $ é o seletor do jquery

        // remover atributo de um elemento
        $(this).removeAttr('data-desc');


        // remover uma classe especifica...preencher é um seletor

        // $('.preencher').removeClass('vermelho')

        // trocar classe no elemento

        // .toggleClass() troca uma classe por outra

        $('.preencher').toggleClass(['vermelho', 'verde']);

        //trocar/ dicionar propriedades css em um elemento
        $('h1').css({
            'background-color': 'yellow',
            'font-size': '50px'
        })

        // controlsr altura de um elemento

        // $('.preencher').height(150)
// -------------------------
        // $('.preencher').delay(1000).animate({
        //     'height': '150',
        //     'opacity': '0'
        // }, 1000, 'swing')
// ---------------------

// sumir e aparece denovo
// $('.preencher').fadeOut('slow').delay(2000).fadeIn('slow')


$('.preencher').fadeTo('slow', 0.5).fadeTo(1);
        // não foi rodado porque não tm tanto conteudo no site

        $('.preencher').fadeTo('slow', 0.5, function(){
            $(this).delay(2000).fadeTo('slow',1)

        });

    })

    // rolar para um determinado ponto
    $('.goTop').click(function () {
        $(document).scrollTop(400);
        return false;



    })

    // trocar cor a cada um segundo atravez do comando setinterval

    // setInterval(() =>{

    // $('.preencher').toggleClass(['vermelho', 'verde', 'azul'])


    // }, 600);

})

// -----------------------attr adiciona atributos ao HTML....escopo do jquery é $