function removePaciente(pacientes) {
    pacientes.forEach(function(paciente) {
        paciente.addEventListener("dblclick", function() {
            this.remove();
        })
    }) 
}

removePaciente(pacientes);
