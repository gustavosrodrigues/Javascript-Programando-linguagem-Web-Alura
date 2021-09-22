function removePacienteDblClick(pacientes) {
    let tabela = document.querySelector("#tabela-pacientes");

    tabela.addEventListener("dblclick", function(event) {
        let alvoAtual = event.target;
        let alvoPai = alvoAtual.parentNode;
        alvoPai.classList.add("fade-out");
        setTimeout(function() {
            alvoPai.remove();
        }, 500);
    })
}

function removePaciente(pacienteJson) {
    let tabela = document.querySelector("#tabela-pacientes");
    let pacientesNaTabela = tabela.querySelectorAll(".paciente");
    
    pacienteJson.forEach(function(pJson){
        pacientesNaTabela.forEach(function(pTabela){
            let imc = pTabela.querySelector(".info-imc");
            if(imc.textContent == pJson.imc) {            
                pTabela.remove();
            }
        })     
    })
}

removePacienteDblClick(pacientes);
