const camposInputs = document.querySelector('[required]')

function validacaoInput(campoInput) {
  function verificaErro() {
    let erroEncontrado = false

    for(const erro in campoInput.validity) {
      if(campoInput.validity[erro] && !campoInput.validity.valid) {
        erroEncontrado = erro
      }
    }

    return erroEncontrado
  }

  function mensagemCustomizada(tipoErro) {
    const mensagens = {
      email: {
        valueMissing: 'Please fill in this field',
        typeMismatch: 'Please provide a valid email',
      },
    }

    return mensagens[campoInput.type][tipoErro]
  }

  function conjuntoMensagemCustomizada(mensagem) {
    const spanErroActive = campoInput.parentNode.querySelector('span.span-erro')
    const inputDiv = document.querySelector('div.input')

    if(mensagem) {
      campoInput.style.border = '2px solid hsl(0, 93%, 68%)'
      inputDiv.classList.add('active')
      spanErroActive.classList.add('active')
      spanErroActive.innerHTML = mensagem
    } else {
      inputDiv.classList.remove('active')
      spanErroActive.classList.remove('active')
      spanErroActive.innerHTML = ''
    }
  }

  return function() {
    const erro = verificaErro()

    if(erro) {
      const mensagem = mensagemCustomizada(erro)
      conjuntoMensagemCustomizada(mensagem)
    } else {
      conjuntoMensagemCustomizada()
    }
  }
}

function validacaoPersonalizada(event) {

  const campoInput = event.target
  const validacao = validacaoInput(campoInput)

  validacao()
}

camposInputs.addEventListener('invalid', event => {
  event.preventDefault()
  validacaoPersonalizada(event)
})



// const input = document.querySelector('.input')
// const form = document.getElementById('form')
// function checkValidationEmail(event) {
//   const email = document.querySelector('#email-input').value
//   // const emailPattern;
//   if (!email === emailPattern) {
//     input.classList.add('ativo')
//   }

//   event.preventDefault()
// }

// form.addEventListener('submit', checkValidationEmail)