let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        let erro = document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erro.classList.add("invisivel");
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            
            removePaciente(pacientes);
            pacientes.forEach(function(paciente) {
                addPacienteTabela(paciente);
            });
        } else {
            console.log(`Erro: ${xhr.status}` );                        
            erro.classList.remove("invisivel");
        }        
    })
    xhr.send();
})