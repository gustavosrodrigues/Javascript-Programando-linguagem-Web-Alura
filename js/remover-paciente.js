function removePaciente(pacientes) {
    let tabela = document.querySelector("#tabela-pacientes");

    tabela.addEventListener("dblclick", function(event) {
        let alvoAtual = event.target;
        let alvoPai = alvoAtual.parentNode;
        alvoPai.remove();
    })
}

removePaciente(pacientes);
