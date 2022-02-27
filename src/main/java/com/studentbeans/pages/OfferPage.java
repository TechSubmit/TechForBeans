package com.studentbeans.pages;

import com.studentbeans.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OfferPage extends Utility {

    public OfferPage() {
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//div[contains(text(),'20% Student Discoun')]")
    WebElement offerPage;
    public String verifyOnOfferPage(){
        return offerPage.getText();

    }
}
