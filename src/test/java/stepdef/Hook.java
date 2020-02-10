package stepdef;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import setup.AppiumDriver;

import java.io.IOException;
import java.net.MalformedURLException;

public class Hook extends AppiumDriver {

    private static Scenario scenario;

    @Before
    public void setUp(Scenario scenario) throws MalformedURLException {
        setUp();
        Hook.scenario = scenario;
    }

    public static void screenShotEmbed(String nome) {
        byte[] f = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(f, nome + ".jpg");
    }

    public static void putLog(String texto) {
        scenario.write(texto);
        System.out.println(texto);
    }


    @After
    public void closeConnection() throws IOException {
        tearDown();
    }
}
