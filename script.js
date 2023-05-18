const btn = document.querySelector("#button");

btn.addEventListener("click", function(e) {

    e.preventDefault();

let inputName = document.querySelector('#nome');
let inputSobrenome = document.querySelector('#sobrenome');
let inputEstudo = document.querySelector('#estudo');

var formValue = {                                 
    nome: inputName.value,
    sobrenome: inputSobrenome.value,
    estudo: inputEstudo.value, 
    }

    console.log(formValue);

    alert("Nome: " + inputName.value);
    alert("Sobrenome: " + inputSobrenome.value);
    alert("Campo de Estudo: " + inputEstudo.value);
});
