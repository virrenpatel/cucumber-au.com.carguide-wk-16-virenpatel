package au.com.carguide.pages;

import au.com.carguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewAndusedCarsearchPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public NewAndusedCarsearchPage() {
        PageFactory.initElements(driver, this);
    }


    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement newAndUsedCarSearchTextField;

    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeField;

    @FindBy(xpath = "//select[@id='models']")
    WebElement modelField;

    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationField;

    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceField;

    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findmyNextCarField;

    @FindBy(css = "div.container.search-results-container:nth-child(4) div.search-results-page.ng-scope:nth-child(1) div.row div.listing-col.listing-col-title.col-sm-16.col-md-12.col-lg-13.col.location-set:nth-child(3) > h1.listing-search-title")
    WebElement resultTextField;


    public String newAndUsedCarText() {
        log.info("newAndUsedCarText : " + newAndUsedCarSearchTextField.toString());
        return getTextFromElement(newAndUsedCarSearchTextField);
    }

    public void clickOnMake(String make) {
        sendTextToElement(makeField, make);
        log.info("clickOnMake : " + makeField.toString());
    }

    public void clickOnModel(String model) {
        sendTextToElement(modelField, model);
        log.info("clickOnModel : " + modelField.toString());
    }

    public void clickOnLocation(String location) {
        sendTextToElement(locationField, location);
        log.info("clickOnLocation : " + locationField.toString());
    }

    public void clickOnprice(String price) {
        sendTextToElement(priceField, price);
        log.info("clickOnprice : " + priceField.toString());
    }

    public void clickOnFindMyNextCar() {
        clickOnElement(findmyNextCarField);
        log.info("clickOnFindMyNextCar : " + findmyNextCarField.toString());
    }

    public String resultText() {
        log.info("resultText : " + resultTextField.toString());
        return getTextFromElement(resultTextField);

    }
}

