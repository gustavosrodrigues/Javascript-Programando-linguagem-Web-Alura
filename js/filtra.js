let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    let texto = this.value;
    pacientes.forEach(function(paciente){
        let tdNome = paciente.querySelector(".info-nome");
        let nome = tdNome.textContent;
    })
})