function mask_date() {
    var n_char = document.getElementById("txtNascimento").value.length;
    if (n_char == 2) {
        document.getElementById("txtNascimento").value = document.getElementById("txtNascimento").value + "/";
    } else if (n_char == 5) {
        document.getElementById("txtNascimento").value = document.getElementById("txtNascimento").value + "/";

    }

}

function mask_cep() {
    var n_char = document.getElementById("txtCep").value.length;
    if (n_char == 5) {
        document.getElementById("txtCep").value = document.getElementById("txtCep").value + "-";
    }

}

function mask_fone() {
    var n_char = document.getElementById("txtFone").value.length;
    if (n_char == 2) {

        document.getElementById("txtFone").value = "(" + document.getElementById("txtFone").value + ") ";
    } else if (n_char == 10) {
        document.getElementById("txtFone").value = document.getElementById("txtFone").value + "-";
    }

}

function mensagem(){
    alert('Cadastro realizado com sucesso!!')
}
