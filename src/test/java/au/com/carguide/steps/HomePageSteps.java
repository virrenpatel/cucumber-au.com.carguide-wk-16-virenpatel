package au.com.carguide.steps;

import au.com.carguide.pages.HomePage;
import au.com.carguide.pages.NewAndusedCarsearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class HomePageSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().clickOnBuySell();
    }

    @And("^I click ‘Search Cars’ link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnSearchCar();
    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        String actualText = new NewAndusedCarsearchPage().newAndUsedCarText();
        String expectedText = "New & Used Car Search - carsguide";
        Assert.assertEquals(expectedText,actualText);
    }



    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndusedCarsearchPage().clickOnFindMyNextCar();
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
        new NewAndusedCarsearchPage().clickOnMake(make);


    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
        new NewAndusedCarsearchPage().clickOnModel(model);


    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
        new NewAndusedCarsearchPage().clickOnLocation(location);


    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
        new NewAndusedCarsearchPage().clickOnprice(price);


    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make) {
        String expectedResult= new NewAndusedCarsearchPage().resultText();
        boolean actualResult = expectedResult.contains(make);
        //boolean result = new NewAndusedCarsearchPage().resultText().contains(make);
       // Assert.assertEquals(expectedResult,actualResult);
        Assert.assertTrue(actualResult);


    }

    @And("^I click ‘Used’ link$")
    public void iClickUsedLink() {
        new HomePage().clickOnusedCar();
    }

    @Then("^I navigate to ‘Used Cars For Sale’ page$")
    public void iNavigateToUsedCarsForSalePage() {

    }
}
