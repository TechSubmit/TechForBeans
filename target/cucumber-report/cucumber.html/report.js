$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Offer.feature");
formatter.feature({
  "line": 2,
  "name": "Offer Selection",
  "description": "",
  "id": "offer-selection",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8866873200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a user I i should pick 6th discount offer form Top 20 offer filed",
  "description": "",
  "id": "offer-selection;as-a-user-i-i-should-pick-6th-discount-offer-form-top-20-offer-filed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Top 20 link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should able to click 6th discount with in Top 20 offer list",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to relevant page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 602242600,
  "status": "passed"
});
formatter.match({
  "location": "OfferStepDef.iClickOnTopLink()"
});
formatter.result({
  "duration": 2214505400,
  "status": "passed"
});
formatter.match({
  "location": "OfferStepDef.iShouldAbleToClickThDiscountWithInTopOfferList()"
});
formatter.result({
  "duration": 1815074900,
  "status": "passed"
});
formatter.match({
  "location": "OfferStepDef.iShouldNavigateToRelevantPage()"
});
formatter.result({
  "duration": 49341900,
  "status": "passed"
});
formatter.after({
  "duration": 850420100,
  "status": "passed"
});
formatter.uri("Sample.feature");
formatter.feature({
  "line": 2,
  "name": "Simple Search",
  "description": "",
  "id": "simple-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4579167400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a user I want to search for a brand on studentbeans.com so that I can see if I can get a discount on that brand",
  "description": "",
  "id": "simple-search;as-a-user-i-want-to-search-for-a-brand-on-studentbeans.com-so-that-i-can-see-if-i-can-get-a-discount-on-that-brand",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the studentbeans homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open the search bar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Samsung\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should select the fourth Samsung search listing",
  "keyword": "Then "
});
formatter.match({
  "location": "sampleStepDef.iAmOnTheStudentbeansHomepage()"
});
formatter.result({
  "duration": 719089300,
  "status": "passed"
});
formatter.match({
  "location": "sampleStepDef.iOpenTheSearchBar()"
});
formatter.result({
  "duration": 933615100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 9
    }
  ],
  "location": "sampleStepDef.iEnter(String)"
});
formatter.result({
  "duration": 419062500,
  "status": "passed"
});
formatter.match({
  "location": "sampleStepDef.iShouldSelectTheFourthSamsungSearchListing()"
});
formatter.result({
  "duration": 3135387000,
  "status": "passed"
});
formatter.after({
  "duration": 873019800,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4106922900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a User I should not login successfully with invalid credentials",
  "description": "",
  "id": "login-functionality;as-a-user-i-should-not-login-successfully-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter valid user name \"test@test.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid password \"testingStuff\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see error message display next to password field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 118314500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2988544800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.iEnterValidUserName(String)"
});
formatter.result({
  "duration": 212024000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testingStuff",
      "offset": 26
    }
  ],
  "location": "LoginStepDef.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 114790000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "duration": 11323251900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //body/div[@id\u003d\u0027authorisation_root\u0027]/div[1]/div[1]/div[2]/div[4]/form[1]/div[4]/div[1]/button[1]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.174\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.studentbeans.utility.Utility.clickOnElement(Utility.java:22)\r\n\tat com.studentbeans.pages.LoginPage.clickOnLoginButton(LoginPage.java:37)\r\n\tat com.studentbeans.steps.LoginStepDef.iClickOnLoginButton(LoginStepDef.java:47)\r\n\tat ???.And I click on login button(login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.iShouldSeeErrorMessageDisplayNextToPasswordField()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12607600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d98.0.4758.102)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.174\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [cd722a30993b2623803a3c2d9f2102f5, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58763}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58763/devtoo..., se:cdpVersion: 98.0.4758.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cd722a30993b2623803a3c2d9f2102f5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.studentbeans.utility.Utility.getScreenshot(Utility.java:32)\r\n\tat com.studentbeans.BaseClass.tearDown(BaseClass.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});