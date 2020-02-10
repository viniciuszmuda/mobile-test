package page;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;
import setup.AppiumDriver;

public class LoginPage extends AppiumDriver {
    public LoginPage() {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc='email']")
    public MobileElement userField;

    @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc='senha']")
    public MobileElement passField;

    @AndroidFindBy(xpath = "//android.widget.TextView[@text='Entrar']")
    public MobileElement loginButton;

    @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc='lognFail']")
    public MobileElement failMessage;

    public String getUserField() {
        return userField.getText();
    }

    public void setUserField(String userField) {
        this.userField.sendKeys(userField);
    }

    public String getPassField() {
        return this.passField.getText();
    }

    public void setPassField(String passField) {
        this.passField.sendKeys(passField);
    }

    public void entrar() {
        loginButton.click();
    }
}
