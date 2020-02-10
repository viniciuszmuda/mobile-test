#language: pt
@aluno
Funcionalidade: Cadastro de Aluno

  @FB
  Esquema do Cenario: Cadastro de Aluno
    Dado que efetuei login com dados validos
    E estou na tela de cadastro de aluno
    E efetuo cadastro de aluno com os campos:
      | codigo | <codigo> |
      | nome   | <nome>   |
    Quando clico em gravar aluno
    Entao o sistema processa o cadastro do aluno:
      | sucesso      | <sucesso>      |
      | codigo       | <codigo>       |
      | nome         | <nome>         |
      | mensagemErro | <mensagemErro> |

    Exemplos:
      | codigo | nome              | sucesso | mensagemErro                     |
      | 12     | Teste de cadastro | true    |                                  |
      |        | Teste de cadastro | false   | Os campos devem ser preenchidos! |
      | 12     |                   | false   | Os campos devem ser preenchidos! |