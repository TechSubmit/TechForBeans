package com.studentbeans.steps;

import com.studentbeans.pages.HomePage;
import com.studentbeans.pages.OfferPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class OfferStepDef {
    @When("^I click on Top 20 link$")
    public void iClickOnTopLink()
    {
        new HomePage().clickOnTop20Link();
    }

    @Then("^I should able to click 6th discount with in Top 20 offer list$")
    public void iShouldAbleToClickThDiscountWithInTopOfferList() {
       new HomePage().clickOn6thDiscount();
    }

    @And("^I should navigate to relevant page$")
    public void iShouldNavigateToRelevantPage() {
        String exp= "20% Student Discount + Free Chromebook on selected devices and plans";
        String actual=new OfferPage().verifyOnOfferPage();
        Assert.assertEquals(exp,actual);
    }
}
