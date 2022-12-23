package au.com.carguide.steps;

import au.com.carguide.pages.CarDealersPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class CardealerSteps {
    @And("^I click ‘Find a Dealer’$")
    public void iClickFindADealer() {
        new CarDealersPage().clickOnCarDealer();
    }

    @Then("^I navigate to ‘car-dealers’ page$")
    public void iNavigateToCarDealersPage() {

    }


    @And("^I should see the dealer names dealersName are display on page$")
    public void iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage(DataTable dataTable) {
        List<String> expectedList = dataTable.asList(String.class);
        for (String data : expectedList) {
            while (new CarDealersPage().gettingNameOfDealers(data) == null) {
                new CarDealersPage().clickOnNextbutton();
            }
            Assert.assertEquals("Dealer name not found!!", data, new CarDealersPage().gettingNameOfDealers(data));
        }
    }

}
