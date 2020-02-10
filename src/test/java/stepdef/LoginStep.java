package stepdef;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.junit.jupiter.api.Assertions;
import page.AlunoPage;
import page.LoginPage;
import setup.AppiumDriver;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class LoginStep extends AppiumDriver {

    LoginPage loginPage = new LoginPage();

    @Dado("^que efetuei login com dados validos$")
    public void que_efetuei_login_com_dados_validos() throws Throwable {
        loginPage.setUserField("teste@teste.com");
        loginPage.setPassField("123456");
        Hook.screenShotEmbed("preLoginLogin");
        loginPage.entrar();
    }

    @Dado("^que estou na tela de login$")
    public void que_estou_na_tela_de_login() throws Throwable {
        Assertions.assertTrue(loginPage.loginButton.isDisplayed());
        Hook.screenShotEmbed("preLoginPage");
    }

    @Dado("^preencho os campos:$")
    public void preencho_os_campos(Map<String, String> arg1) throws Throwable {
        loginPage.setUserField(arg1.get("email"));
        loginPage.setPassField(arg1.get("senha"));
    }

    @Quando("^clico em entrar$")
    public void clico_em_entrar() throws Throwable {
        loginPage.loginButton.click();
    }

    @Entao("^o sistema processa o login:$")
    public void o_sistema_processa_o_login(Map<String, String> arg1) throws Throwable {
        Hook.screenShotEmbed("postLoginPage");
        assertTrue(Boolean.parseBoolean(arg1.get("sucesso")) ?
                new AlunoPage().alunoField.isDisplayed() :
                arg1.get("mensagemErro").equals(loginPage.failMessage.getText())
        );
    }

}