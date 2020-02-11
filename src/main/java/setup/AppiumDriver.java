package setup;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class AppiumDriver {
    static String APP = "ifood-test.apk";
    protected static AndroidDriver<AndroidElement> driver;

    public void setUp() throws MalformedURLException {
/*        File f = new File("src");
        File fs = new File(f, APP);*/
        File fs = new File(APP);
        DesiredCapabilities cap = new DesiredCapabilities();
        cap.setCapability(MobileCapabilityType.DEVICE_NAME, "ZmudaTeste");
        cap.setCapability(MobileCapabilityType.APP, fs.getAbsolutePath());
        driver = new AndroidDriver<>(new URL("http://127.0.0.1:4723/wd/hub"), cap);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    public static void tearDown() {
        driver.quit();
    }
}
