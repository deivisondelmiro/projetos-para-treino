const inputs = document.querySelectorAll('[required]')
const form = document.querySelector('.form')
// console.log(divInputs)

function inputValidez(input) {
  // lógica para verificar se existem erros
  function verificaErros() {
    let encontraErro = false

    for(let erro in input.validity) {
      // se houver algum erro, e o valid for falso, verifica se tem erro
      if(input.validity[erro] && !input.validity.valid) {
        encontraErro = erro
      }
    }

    return encontraErro
  }

  function novasMensagensErros(tipoErro) {
    const mensagens = {
      text: {
        valueMissing: `${input.placeholder} cannot be empty`
      },
      email: {
        valueMissing: `${input.placeholder} cannot be empty`,
        typeMismatch: `Looks like this is not an ${input.placeholder}`
      },
      password: {
        valueMissing: `Password cannot be empty`,
        tooShort: `Password with a minimum of 8 characters`
      }
    }
    return mensagens[input.type][tipoErro]
  }

  function mensagemErroCustomizada(mensagem) {
    const mensagemErro = input.parentNode.querySelector('span.erro')

    if(mensagem) {
      mensagemErro.classList.add('active')
      mensagemErro.innerHTML = mensagem
    } else {
      mensagemErro.classList.remove('active')
      mensagemErro.innerHTML = ''
    }
  }

  return function() {

    const erro = verificaErros()
    const mensagemErro = input.parentNode.querySelector('span.erro')

    if(erro) {
      const mensagem = novasMensagensErros(erro)
      input.classList.add('active')
      input.style.borderColor = 'red'
      mensagemErro.classList.add('active')
      mensagemErroCustomizada(mensagem)
    } 
    else {
      input.classList.remove('active')
      input.style.borderColor = 'green'
      mensagemErro.classList.remove('active')
      mensagemErroCustomizada()
    }
  }
}

function inputInvalido(event) {
  const input = event.target
  const validacao = inputValidez(input)

  validacao()

  // console.log('Erro existente: ', erro)

  // caso queira somento mudar a mensagem. sem esquecer do customErro no if da função verificaErros()
  // if(erro) {
  //   // troca mensagem de required
  //   input.setCustomValidity('Erro')
  // } else {
  //   input.setCustomValidity('')
  // }
}

inputs.forEach((input) => {
  input.addEventListener('invalid', (event) => {
    // Elimina a caixa de mensagem padrão de erro do input. E só existe quando o input está invalidado
    event.preventDefault()
    inputInvalido(event)
  });
  input.addEventListener('blur', inputInvalido)
  console.log(input)
})

form.addEventListener('submit', event => {
  event.preventDefault()
})