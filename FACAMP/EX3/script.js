function Enviar() {
  const formulario = document.getElementById('form');
  const nome = formulario.elements['nome'].value;
  const ra = formulario.elements['ra'].value;
  const email = formulario.elements['email'].value;
  const senha = formulario.elements['senha'].value;
  const ano = ra.substring(0, 4);

  if (ra.length == 9 && Number.isInteger(parseInt(ra))) {
    if (1999 <= parseInt(ano) && parseInt(ano) <= 2021) { // 201910645 --> 1999 < 4 num < 2021
      if (validarCampos()) {
        if (separarNome(nome)) {
          if (email.includes("@")) {
            if (senha.length >= 10) {
              var dados = {
                'nome': nome,
                'ra': ra,
                'email': email,
                'senha': senha
              };
              console.log(JSON.stringify(dados));
              alert("Dados enviados com sucesso!")
              Limpar();
            } else {
              alert("Por favor insira uma senha com 10 ou mais caracteres.");
            }
          } else {
            alert("Por favor insira um e-mail válido.");
          }
        } else {
          alert("Por favor insira seu nome completo.");
        }
      } else {
        alert("Por favor preencha todos os campos do formulário.");
      }
    } else {
      alert("Por favor cheque se os 4 primeiros dígitos do seu RA estão entre 1999 e 2021.");
    }
  } else {
    alert("Por favor cheque se seu RA possui 9 caracteres numéricos.");
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

function separarNome(_nome) {

  var nomeSeparado = _nome.split(" ");

  if (nomeSeparado.length >= 2) {
    return true;
  } else {
    return false;
  }
}

function Limpar() {
  document.getElementById("form").reset();
}