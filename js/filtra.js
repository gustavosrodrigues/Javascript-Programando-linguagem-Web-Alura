
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    let pacientes = document.querySelectorAll(".paciente");    
    var textoDigitado = this.value;
    if (textoDigitado.length > 0) {
        
        pacientes.forEach(function(paciente){
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            if (nome.toLowerCase() != textoDigitado.toLowerCase()) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        })
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    }
})