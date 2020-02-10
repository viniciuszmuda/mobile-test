package page;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;
import setup.AppiumDriver;

import java.util.List;

public class AlunoPage extends AppiumDriver {
    public AlunoPage() {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc='codigo']")
    public MobileElement codigoField;

    @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc='aluno']")
    public MobileElement alunoField;

    @AndroidFindBy(xpath = "//android.widget.TextView[@text='Salvar']")
    public MobileElement salvarButton;

    @AndroidFindBy(xpath = "//android.widget.TextView[@text='Cancelar']")
    public MobileElement cancelarButton;

    @AndroidFindBy(xpath = "//android.widget.TextView")
    public List<AndroidElement> alunos;

    @AndroidFindBy(xpath = "//android.widget.TextView")
    public List<AndroidElement> failMessage;

    public void setCodigo(String codigo) {
        codigoField.sendKeys(codigo);
    }

    public void setAluno(String aluno) {
        alunoField.sendKeys(aluno);
    }

    public void salvar() {
        salvarButton.click();
    }

    public void cancelar() {
        cancelarButton.click();
    }

    public Boolean isAlunoPage() {
        return codigoField.isDisplayed() || alunoField.isDisplayed();
    }
}
