package com.studentbeans.pages;

import com.studentbeans.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {


    public LoginPage() {
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//div[@class='recaptcha-checkbox-border']")
    WebElement captcha;

    @FindBy(xpath = "//body/div[@id='authorisation_root']/div[1]/div[1]/div[2]/div[4]/form[1]/div[4]/div[1]/button[1]")
    WebElement loginButton;
    @FindBy(xpath = "//p[contains(text(),'The password you entered is incorrect. Please try again.')]")
    WebElement errorMessage;
    @FindBy(xpath = " //input[@id='email']")
    WebElement email;
    @FindBy(xpath = " //input[@id='password']")
    WebElement password;

    public void enterUsername(String str){
        sendTextToElement(email,str);
    }
    public void enterPassWord(String str){
        sendTextToElement(password,str);
    }
    public String actualMessage(){
        return errorMessage.getText();
    }
    public void clickOnLoginButton() {

        clickOnElement(loginButton);
    }
    public void clickOnCaptcha()  {
       driver.switchTo().frame(0);
        clickOnElement(captcha);
    }



}
