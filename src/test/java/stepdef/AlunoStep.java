package stepdef;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import io.appium.java_client.android.AndroidElement;
import page.AlunoPage;
import setup.AppiumDriver;

import java.util.Arrays;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class AlunoStep extends AppiumDriver {
    AlunoPage alunoPage = new AlunoPage();

    @Dado("^estou na tela de cadastro de aluno$")
    public void estou_na_tela_de_cadastro_de_aluno() throws Throwable {
        assertTrue(alunoPage.alunoField.isDisplayed());
        Hook.screenShotEmbed("preAlunoPage");
    }

    @Quando("^efetuo cadastro de aluno com os campos:$")
    public void efetuo_cadastro_de_aluno_com_os_campos(Map<String, String> arg1) throws Throwable {
        alunoPage.setCodigo(arg1.get("codigo"));
        alunoPage.setAluno(arg1.get("nome"));
    }

    @Dado("^altero os valores do cadastro do aluno:$")
    public void altero_os_valores_do_cadastro_do_aluno(Map<String, String> arg1) throws Throwable {
        alunoPage.codigoField.clear();
        alunoPage.alunoField.clear();
        efetuo_cadastro_de_aluno_com_os_campos(arg1);
    }

    @Quando("^clico em gravar aluno$")
    public void clico_em_gravar_aluno() throws Throwable {
        alunoPage.salvar();
    }

    @Entao("^o sistema processa o cadastro do aluno:$")
    public void o_sistema_processa_o_cadastro_do_aluno(Map<String, String> arg1) throws Throwable {
        Hook.screenShotEmbed("postAlunoPage");
        assertTrue(Boolean.parseBoolean(arg1.get("sucesso")) ?
                Arrays.stream(
                        alunoPage.alunos.toArray()).anyMatch(
                        alunos -> ((AndroidElement) alunos).getText().equals(
                                arg1.get("codigo") + " - " + arg1.get("nome")
                        )
                ) :
                alunoPage.failMessage.get(0).getText().equals(arg1.get("mensagemErro")));
    }
}
