#language: pt
@aluno
Funcionalidade: Cadastro de Aluno

  @FE
  Esquema do Cenario: Cadastro de Aluno - Bug
    Dado que efetuei login com dados validos
    E estou na tela de cadastro de aluno
    E efetuo cadastro de aluno com os campos:
      | codigo | <codigo> |
      | nome   | <nome>   |
    Mas altero os valores do cadastro do aluno:
      | codigo | <codigoAlterado> |
      | nome   | <nomeAlterado>   |
    Quando clico em gravar aluno
    Entao o sistema processa o cadastro do aluno:
      | sucesso      | <sucesso>      |
      | codigo       | <codigo>       |
      | nome         | <nome>         |
      | mensagemErro | <mensagemErro> |

    Exemplos:
      | codigo | nome              | codigoAlterado | nomeAlterado      | sucesso | mensagemErro                     |
      | 12     | Teste de cadastro |                |                   | false   | Os campos devem ser preenchidos! |
      | 12     | Teste de cadastro | 12             |                   | false   | Os campos devem ser preenchidos! |
      | 12     | Teste de cadastro |                | Teste de cadastro | false   | Os campos devem ser preenchidos! |
