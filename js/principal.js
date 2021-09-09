function display(...conteudo) {
    console.log(conteudo);
}

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura); // 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25

console.log(imc);

display("Fui carregado de um arquivo externo.");

// querySelector aceita tags, classes e id, na maneira como é usado no CSS
const titulo = document.querySelector(".titulo");			
// textContent retorna todo o conteúdo de texto do elemento
console.log(titulo.textContent);
// Assim é possível mudar o conteúdo textual de um elemtnto HTML
titulo.textContent = "Aparecida Nutricionista";