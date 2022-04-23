
function Enviar() {
    const formulario = document.getElementById('form');
    const ra = formulario.elements['ra'].value;
    const ano = ra.substring(0, 2);

    if (ra.length == 9 && Number.isInteger(parseInt(ra))) {
        if (19 < parseInt(ano) && parseInt(ano) <= 20) {
            if (validarCampos()) {

                console.log(JSON.stringify(dados));
                alert("Dados enviados com sucesso!")
                Limpar();

            } else {
                alert("RA não pode ser vazio, deve começar com 20 e conter apenas números e seu tamanho deve ser de 9 caracteres");
            }
        }
    }

    function validarCampos() {
        var formulario = document.getElementById('form');

        for (i = 0; i < formulario.length; i++) {
            if (formulario[i].type == 'text') {
                if (formulario[i].value == '') {
                    return false;
                }
            }
        }
        return true;
    }
}
