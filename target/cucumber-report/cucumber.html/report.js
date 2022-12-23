$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;:-search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Any Model",
        "Any Location",
        "$30,000"
      ],
      "line": 18,
      "id": "search-functionality;:-search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Audi",
        "Any Model",
        "Any Location",
        "$30,000"
      ],
      "line": 19,
      "id": "search-functionality;:-search-the-buy-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13192056401,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 250923501,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 847492099,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 20207832300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DIYA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [eedc0d44051e7f474b3ab0d21d7a9756, clickElement {id\u003dc199f55c-65ed-4a6c-adf0-2b792f570bbb}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50437}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50437/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (eedc0d44051e7f474b3ab0d21d7a9756)] -\u003e xpath: //a[contains(text(),\u0027Search Cars\u0027)]]\nSession ID: eedc0d44051e7f474b3ab0d21d7a9756\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat au.com.carguide.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat au.com.carguide.pages.HomePage.clickOnSearchCar(HomePage.java:33)\r\n\tat au.com.carguide.steps.HomePageSteps.iClickSearchCarsLink(HomePageSteps.java:23)\r\n\tat ✽.And I click ‘Search Cars’ link(buy.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1649201900,
  "status": "passed"
});
formatter.before({
  "duration": 8340496400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 684362100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 938149600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 2376371999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 189501101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 235279600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 163047900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 162271201,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 24259627799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 39553700,
  "status": "passed"
});
formatter.after({
  "duration": 1016211400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 35,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Cherokee",
        "ACT-All",
        "$20,000"
      ],
      "line": 36,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "Any Model",
        "ACT - All",
        "$15,000"
      ],
      "line": 37,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Audi",
        "Any Model",
        "Any Location",
        "$25,000"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Toyota",
        "Avensis",
        "NSW - All",
        "$20,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "Any Location",
        "$15,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6563216900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"Cherokee\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"ACT-All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36399,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 465977199,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2894750399,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 24599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 189879900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cherokee",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 163695000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT-All",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 166322401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 164457300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 23036970200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 83692599,
  "status": "passed"
});
formatter.after({
  "duration": 959581401,
  "status": "passed"
});
formatter.before({
  "duration": 6955245001,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1784490500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1096839300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 10733117300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 184127000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 164774999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 154765700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 24284447400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 50424901,
  "status": "passed"
});
formatter.after({
  "duration": 993617400,
  "status": "passed"
});
formatter.before({
  "duration": 7062834500,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"$25,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 79800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1333107100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1143848399,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 5708619399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 361927500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 244666200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 214551399,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 26855960800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 46776801,
  "status": "passed"
});
formatter.after({
  "duration": 938013999,
  "status": "passed"
});
formatter.before({
  "duration": 18797344500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"Toyota\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"Avensis\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"Toyota\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41601,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 512716700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 3580911599,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 218158100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avensis",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 182574200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 161423801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 205092900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 25500602999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40251700,
  "status": "passed"
});
formatter.after({
  "duration": 966711599,
  "status": "passed"
});
formatter.before({
  "duration": 10812149100,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1033475400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 4339651600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 22900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 226266399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qashqai",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 241460800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 245931300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 190535000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 26427126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 44535500,
  "status": "passed"
});
formatter.after({
  "duration": 958954100,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11124805599,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names dealersName are display on page",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 10
    },
    {
      "cells": [
        "1 Stop Auto Group"
      ],
      "line": 11
    },
    {
      "cells": [
        "101 Auto Centre"
      ],
      "line": 12
    },
    {
      "cells": [
        "1477 Cars Pty Ltd"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 52100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2832614599,
  "status": "passed"
});
formatter.match({
  "location": "CardealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 20215644400,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DIYA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c2785a91f3e4c78e9c015b44ff3c1634, clickElement {id\u003d2e1dfcee-f7e6-4576-b463-874e51f78698}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52284}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52284/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (c2785a91f3e4c78e9c015b44ff3c1634)] -\u003e xpath: //a[contains(text(),\u0027Find a Dealer\u0027)]]\nSession ID: c2785a91f3e4c78e9c015b44ff3c1634\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat au.com.carguide.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat au.com.carguide.pages.CarDealersPage.clickOnCarDealer(CarDealersPage.java:30)\r\n\tat au.com.carguide.steps.CardealerSteps.iClickFindADealer(CardealerSteps.java:14)\r\n\tat ✽.And I click ‘Find a Dealer’(finddealers.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CardealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CardealerSteps.iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1259980301,
  "status": "passed"
});
});