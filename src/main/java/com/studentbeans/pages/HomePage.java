package com.studentbeans.pages;

import com.studentbeans.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//div[@class='_1whzvnz']//span[contains(text(),'Top 20')]")
    WebElement top20;
    @FindBy(xpath = "//div//article[1]//a[1]")
    List<WebElement> allDiscount;
    @FindBy(xpath = "//h4[@title='20% Student Discount']")
    WebElement sixDiscount;
    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement lonInButton;
    @FindBy(xpath = "//body/div//input[@class='_tf5swf']")
    WebElement homeScreenSearchField;
    @FindBy(xpath = "//body/div//input[@class='_1g5dvk1']")
    WebElement searchField;
    @FindBy(xpath = "//button[@id='onetrust-accept-btn-handler']")
    WebElement cookies;
    public void acceptCookies(){
        clickOnElement(cookies);
    }
    public void enterTextInSearchField(String str){

        sendTextToElement(searchField,str);
    }
    public void openSearchBar(){
        clickOnElement(homeScreenSearchField);
    }

    public void clickOnLoginButton(){
        clickOnElement(lonInButton);
    }

    public void clickOnTop20Link(){
        clickOnElement(top20);

    }
    public void clickOn6thDiscount(){
        int size= allDiscount.size();
        for(int i=0;i<=size;i++){
            if (i == 5) {
                allDiscount.get(i).click();
            }
        }
    }







}
