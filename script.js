AOS.init();

var aaa = document.getElementById("form").addEventListener("submit",
function (event){ 
    event.preventDefault();

var nome = document.getElementById("nome").value;
var tel = document.getElementById("telefone").value;
var rua = document.getElementById("rua").value;
var bairro = document.getElementById("bairro").value;
var procedimento = document.getElementById("procedimento").value;
var endereço = rua +" "+ bairro;

alert("Olá " + nome + " suas informações foram coletadas, agora é só clicar e enviar.")

const mensagem = `Olá Vanessa, gostaria de saber os hórarios disponíveis para fazer ${ procedimento}. Meu nome é ${ nome}, moro na ${ endereço}, meu whatsApp é ${ tel}, fico no aguardo! :) `;

 const phonesalao = "+5585998413315";

 const whatsappLink = `https://api.whatsapp.com/send?phone=${phonesalao}&text=${encodeURIComponent(mensagem)}`;

 window.location.href = whatsappLink;

var nome = document.getElementById("nome").value="";
var tel = document.getElementById("telefone").value="";
var rua = document.getElementById("rua").value="";
var bairro = document.getElementById("bairro").value="";
var procedimento = document.getElementById("procedimento").value="";

}
);


