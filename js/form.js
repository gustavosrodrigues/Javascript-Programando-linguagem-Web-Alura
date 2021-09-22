let botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let paciente = obtemPacienteDoFormulario(form);
    
    let pacienteTr = montaTr(paciente);

    let erros = validaPaciente(paciente);
    if (erros.length > 0) {
        apagaMensagensErro();
        exibeMensgensDeErro(erros);        
        return;
    }
    
    addPacienteTabela(pacienteTr);
   // form.reset();
    apagaMensagensErro();
})

function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }    
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome")
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);   

    return td;
}

function addPacienteTabela(pacienteTr) {
    let tabela = document.querySelector("#tabela-pacientes");        
    tabela.appendChild(pacienteTr);
}

function validaPaciente(paciente) {
    let erro = [];

    if (!validaPeso(paciente.peso)) {
        erro.push("Peso é inválido");
    }
    if (!validaAltura(paciente.altura)) {
        erro.push("Altura é inválida");
    }
    if (!validaNome(paciente.nome)) {
        erro.push("O campo 'Nome' está vazio.")
    }
    if (!validaGordura(paciente.gordura)) {
        erro.push("O campo 'Gordura' está vazio.")
    }

    return erro;    
}

function exibeMensgensDeErro(erros) {
    let ul = document.querySelector("#mostra-mensagens");
    erros.forEach(function(erro) {
        let li = document.createElement("li");    
        li.textContent = erro;
        ul.appendChild(li);
    })    
}

function apagaMensagensErro() {
    let ul = document.querySelector("#mostra-mensagens");
    ul.innerHTML = "";    
}