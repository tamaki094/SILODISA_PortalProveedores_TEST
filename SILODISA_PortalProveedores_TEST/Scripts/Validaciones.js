function validarCampo(identificador_input, identificador_submit) {
    var cantidad_caracteres = document.getElementById(identificador_input.id).value.length;
    if (cantidad_caracteres == 0) {
        document.getElementById(identificador_input.id).style.backgroundColor = "#BF5A5A";
        document.getElementById(identificador_submit.id).disabled = true;
    }
    else {
        document.getElementById(identificador_input.id).style.backgroundColor = "#FFFFFF";
        document.getElementById(identificador_submit.id).disabled = false;
    }
    
}