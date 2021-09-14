function display(...conteudo) {
    console.log(conteudo);
}

// querySelector aceita tags, classes e id, na maneira como é usado no CSS
const titulo = document.querySelector(".titulo");			
// textContent retorna todo o conteúdo de texto do elemento
console.log(titulo.textContent);
// Assim é possível mudar o conteúdo textual de um elemtnto HTML
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {

    const paciente = pacientes[i];

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
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3) {        
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoValido && alturaValida) {
        var imc = calculaIMC(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaIMC(peso, altura) {
    imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
