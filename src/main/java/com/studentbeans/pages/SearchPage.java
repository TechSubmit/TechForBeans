package com.studentbeans.pages;

import com.studentbeans.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SearchPage extends Utility {
    public SearchPage() {
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//body//div[@class='_i24b1r']//a")
    List<WebElement> allSamsungItems;
    public void clickOn4ThSamsungItem(){

        int size=allSamsungItems.size();
       for(int i=1;i<=size;i++){
           if(i==3){
               allSamsungItems.get(i).click();
           }
       }
    }
}
