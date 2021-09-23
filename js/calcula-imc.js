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
    
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    
    if (!pesoValido) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaValida) {
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoValido && alturaValida) {
        var imc = calculaIMC(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso <= 850) {
        return true;
    }
    
    return false;    
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3) {
        return true;
    }

    return false;
}

function validaNome(nome) {
    if (nome.length > 0) {
        return true;
    }

    return false;
}

function validaGordura(gordura) {
    if (gordura > 0) {
        return true;
    }

    return false;
}

function calculaIMC(peso, altura) {
    imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
