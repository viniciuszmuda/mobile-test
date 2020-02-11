#language: pt
@login
Funcionalidade: Login

  Esquema do Cenario: Login
    Dado que estou na tela de login
    E preencho os campos:
      | email | <email> |
      | senha | <senha> |
    Quando clico em entrar
    Entao o sistema processa o login:
      | sucesso      | <sucesso>      |
      | mensagemErro | <mensagemErro> |

    Exemplos:
      | email           | senha  | sucesso | mensagemErro      |
      | teste@teste.com | 123456 | true    |                   |
      | teste@teste.com | 12345  | false   | Erro no login! :( |
      |                 | 12345  | false   | Erro no login! :( |
      | teste@teste.com |        | false   | Erro no login! :( |