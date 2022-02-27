package com.studentbeans.steps;

import com.studentbeans.pages.HomePage;
import com.studentbeans.pages.SearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class sampleStepDef {
    @Given("^I am on the studentbeans homepage$")
    public void iAmOnTheStudentbeansHomepage() {
        new HomePage().acceptCookies();
    }

    @And("^I open the search bar$")
    public void iOpenTheSearchBar() {
        new HomePage().openSearchBar();
    }

    @When("^I enter \"([^\"]*)\"$")
    public void iEnter(String str) {
        new HomePage().enterTextInSearchField(str);

    }

    @Then("^I should select the fourth Samsung search listing$")
    public void iShouldSelectTheFourthSamsungSearchListing() {
        new SearchPage().clickOn4ThSamsungItem();
    }
}
