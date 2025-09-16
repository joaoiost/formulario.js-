const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");
const datadenascimento = document.getElementById("dataNascimento");

e.preventDefault();

if (nome.value.trim().length < 3) {
 alert("O nome deve ter pelo menos 3 caracteres.");
 return;
 }

 if (!email.value.includes("@")) {
    alert("Por favor, insira um email válido.");
 }
{

if (telefone.value.replace(/\D/g, "").length < 10) {
 alert("Digite um telefone válido.");
 return;
}

if (cpf.value.replace(/\D/g, "").length !== 11) {
 alert("Digite um CPF válido com 11 números.");
 return;
 }

 alert("Formulário enviado com sucesso!");
};

telefone.addEventListener("input", e => {
let valor = e.target.value.replace(/\D/g, "");
valor = valor.length <= 10 ?
valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3") :
valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
e.target.value = valor;
});
cpf.addEventListener("input", e => {
let valor = e.target.value.replace(/\D/g, "");
valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/,
"$1.$2.$3-$4");
e.target.value = valor;
});

