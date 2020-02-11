# Solução
Teste funcional para plataforma Android 
- Java8
- Appium 
- Cucumber
- Report - plugin cucumber report do jenkins

# Como executar
Necessário startar o server do appium 

***gradle clean test***

# Cenários
- Login válido
- Login inválido
- Cadastro de aluno válido
- Cadastro de aluno inválido
- Bug no cadastro de aluno

# Defeitos encontratos:
```Criticidade: Alta
Prioridade: Alta
Cadastro de Aluno - Sistema está permitindo efetuar cadastro sem código e sem nome
1 - Login valido
2 - Preencher o campo codigo e aluno
3 - apagar os valores do campo codigo e aluno
4 - salvar

Criticidade: Baixa
Priodidade: Media
Cadastro de Aluno - Mensagem de erro de cadastro em duplicidade do aluno não sai após cancelar a persitencia do registro
1 - Login valido
2 - Cadastrar um aluno
3 - Cadastrar com o mesmo código informado anteriormente
4 - Cancelar

Criticidade: Media
Prioridade: Baixa
Cadastro de Aluno - Cadastro com código existente sem critica
1 - Login valido
2 - Cadastrar um código já existente (que não seja o último)
3 - Sistema não apresenta critica (critica só é exibida quando informado o último código da lista)

Criticidade: Baixa
Prioridade: Baixa
Login - Mensagem de erro do login se mantém após efetuado login com sucesso
1 - Login invalido
2 - Login válido
3 - Logoff

Criticidade: Baixa
Prioridade: Baixa
Login - Tela de login parece ficar remontando ao ficar alternando entre os campos de usuario e senha
1 - Clicar no campo de senha
2 - Clicar no campo do usuario
3 - Ficar alternando entre os campos e analisar o comportamento do sistema 
```

# itens para analisar com o PO/Analista
```Criticidade: Media
Prioridade: Media 
Cadastro de Aluno - Verificar documentação para tipo de campo (texto, numérico) e tamanho do mesmo para codigo e aluno
Atualmente está aceitando texto (inclusive emoji e espaço) no código, sem limite de caracteres
Atualmente está sem limite de caracteres no campo aluno, além de estar aceitando emoji

Criticidade: Media
Prioridade: Baixa
Cadastro de Aluno - Verificar funcionalidade de exclusão de código (perfil de acesso, etc.)
Como o crude não possui nenhuma validação, existe a possibilidade de cadastro incorreto, onde é necessário exclusão do mesmo.
```
# TODO
<p>validar Jenkinsfile </p>
inserir Dockerfile