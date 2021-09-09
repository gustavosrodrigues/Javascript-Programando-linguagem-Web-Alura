function display(...conteudo) {
    console.log(conteudo);
}

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

//peso = 800;
//altura = 4;

pesoValido = true;
alturaValida = true;

if (peso <= 0 || peso >= 750) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida!")
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
}

if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}


console.log(imc);

display("Fui carregado de um arquivo externo.");

// querySelector aceita tags, classes e id, na maneira como é usado no CSS
const titulo = document.querySelector(".titulo");			
// textContent retorna todo o conteúdo de texto do elemento
console.log(titulo.textContent);
// Assim é possível mudar o conteúdo textual de um elemtnto HTML
titulo.textContent = "Aparecida Nutricionista";