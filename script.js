const btn = document.querySelector("#button");

btn.addEventListener("click", function(e) {

    e.preventDefault();

let inputName = document.querySelector('#nome');
let inputSobrenome = document.querySelector('#sobrenome');
let inputEstudo = document.querySelector('#estudo');
let inputAnoString = document.querySelector('#idade');
let inputAno = parseInt(inputAnoString.value);

var formValue = {                                 
    nome: inputName.value,
    sobrenome: inputSobrenome.value,
    estudo: inputEstudo.value, 
    idade: inputAno.value, 
    }

console.log(formValue);

alert("Recruta cadastrado com sucesso");

alert(
    "Nome Completo: " + inputName + " " + inputSobrenome +
    "\nCampo de Estudo: " +  inputEstudo +
    "\nIdade do Recruta: " + (2023 - inputAno)
);
});
