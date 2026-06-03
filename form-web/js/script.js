/*
    criando variáveis
*/

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

const button = document.querySelector("button");
const lista = document.querySelector(".lista");



/*
    criando função
*/

button.addEventListener("click", function(event) {
    event.preventDefault();

    

    const inputNome = nome.value;
    const inputEmail = email.value;
    const inputTelefone = telefone.value;

    console.log("Nome:", inputNome);
    console.log("Email:", inputEmail);
    console.log("Telefone:", inputTelefone);

    lista.innerHTML += `
        <li>
            Nome: ${inputNome}<br>
            E-mail: ${inputEmail}<br>
            Telefone: ${inputTelefone}
        </li>
    `;

    nome.value = "";
    email.value = "";
    telefone.value = "";
});