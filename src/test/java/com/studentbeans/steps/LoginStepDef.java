package com.studentbeans.steps;

import com.studentbeans.pages.HomePage;
import com.studentbeans.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginStepDef {
    @Given("^I am on the homepage$")
    public void iAmOnTheHomepage() {
        new HomePage().acceptCookies();
    }

    @When("^I click on Login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginButton();
    }

    @Then("^I enter valid user name \"([^\"]*)\"$")
    public void iEnterValidUserName(String email)  {
        new LoginPage().enterUsername(email);

    }

    @And("^I enter invalid password \"([^\"]*)\"$")
    public void iEnterInvalidPassword(String password)  {
        new LoginPage().enterPassWord(password);

    }


    @Then("^I should see error message display next to password field$")
    public void iShouldSeeErrorMessageDisplayNextToPasswordField() {
        String expected="The password you entered is incorrect. Please try again.";
        String actual=new LoginPage().actualMessage();
        Assert.assertEquals(expected,actual);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() throws InterruptedException {
        new LoginPage().clickOnCaptcha();
        Thread.sleep(3000);
        new LoginPage().clickOnLoginButton();
    }
}
