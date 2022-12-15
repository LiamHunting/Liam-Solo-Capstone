import { NinjaPage } from "./ninjaPage";
import { until } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";

const  ninjaPage = new NinjaPage();
const fs = require('fs')

class UserLogin {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    };
};


let newUserLogin: Array<UserLogin> = [
    new UserLogin("testdummy1@testing.com", "Password#1"),
    new UserLogin("testdummy2@testing.com", "Password#2"),
    new UserLogin("testdummy3@testing.com", "Password#3"),
    new UserLogin("testdummy4@testing.com", "Password#4"),
    new UserLogin("testdummy5@testing.com", "Password#5")
]

let login = async (newUserLogin) => {
    await ninjaPage.click(ninjaPage.myAccountDropdown);
    await ninjaPage.click(ninjaPage.loginPageBtn);
    await ninjaPage.driver.wait(until.elementLocated(ninjaPage.emailInput));
    await ninjaPage.click(ninjaPage.emailInput);
    await ninjaPage.driver.findElement(ninjaPage.emailInput).sendKeys(newUserLogin.email);
    console.log(newUserLogin.email);
    await ninjaPage.click(ninjaPage.passwordInput);
    await ninjaPage.driver.findElement(ninjaPage.passwordInput).sendKeys(newUserLogin.password);
    console.log(newUserLogin.password);
    await ninjaPage.click(ninjaPage.loginBtn);
    await ninjaPage.driver.wait(until.elementLocated(ninjaPage.logoutBtn));
    await ninjaPage.click(ninjaPage.logoutBtn);

};


describe("Testing suite for tutorialninja WebApp", () => {
    beforeEach(async () => {
        await ninjaPage.navigate();
    });

    afterAll(async () => {
        await ninjaPage.driver.quit();
    });

    test("Currency Tab Euro", async () => {
        await ninjaPage.click(ninjaPage.CurrencyTab);
        await ninjaPage.click(ninjaPage.euroBtn);
        await ninjaPage.click(ninjaPage.featMacBook);
        let Euro = await ninjaPage.getText(ninjaPage.macPriceEuro);
        expect(Euro).toContain("472.33€");
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.CurrencyTab);
        await ninjaPage.click(ninjaPage.poundBtn);
        await ninjaPage.click(ninjaPage.featMacBook);
        let Pound = await ninjaPage.getText(ninjaPage.macPricePound);
        expect(Pound).toContain("£368.73");
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.CurrencyTab);
        await ninjaPage.click(ninjaPage.usDollarBtn);
        await ninjaPage.click(ninjaPage.featMacBook);
        let USDP = await ninjaPage.getText(ninjaPage.macPriceUSD);
        expect(USDP).toContain("$602.00");
    });

    test("Dropdown Tabs With Screenshots", async () => {
        await ninjaPage.click(ninjaPage.desktopsTab);
        await ninjaPage.click(ninjaPage.desktopsTabShowAll);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.homeBtn));
        await fs.writeFile(`${__dirname}/desktop.png`,
         await ninjaPage.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.laptopsNotebookTab);
        await ninjaPage.click(ninjaPage.laptopsNotebookTabShowAll);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.homeBtn));
        await fs.writeFile(`${__dirname}/LaptopsNotebooks.png`,
         await ninjaPage.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.componentsTab);
        await ninjaPage.click(ninjaPage.componentsTabShowAll);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.homeBtn));
        await fs.writeFile(`${__dirname}/components.png`,
         await ninjaPage.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.tabletsTab);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.homeBtn));
        await fs.writeFile(`${__dirname}/tablets.png`,
         await ninjaPage.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.softwareTab);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.homeBtn));
        await fs.writeFile(`${__dirname}/software.png`,
         await ninjaPage.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.phonePDATab);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.homeBtn));
        await fs.writeFile(`${__dirname}/phonesPDA.png`,
         await ninjaPage.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.camerasTab);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.homeBtn));
        await fs.writeFile(`${__dirname}/cameras.png`,
         await ninjaPage.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        await ninjaPage.click(ninjaPage.homeBtn);
        await ninjaPage.click(ninjaPage.mp3Tab);
        await ninjaPage.click(ninjaPage.mp3TabShowAll);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.homeBtn));
        await fs.writeFile(`${__dirname}/mp3.png`,
         await ninjaPage.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        await ninjaPage.click(ninjaPage.homeBtn);
        
    });

    test("Logging in Loop", async () => {
        for(let i = 0; i < newUserLogin.length; i++) {
            await login(newUserLogin[i]);
        };
    });

    test("Search Bar With Text File", async () => {
        await ninjaPage.driver.findElement(ninjaPage.searchBar).sendKeys("Apple Cinema 30");
        await ninjaPage.click(ninjaPage.searchSubmitBtn);
        await ninjaPage.click(ninjaPage.appCin30);
        await ninjaPage.driver.wait(until.elementLocated(ninjaPage.appCin30Results));
        let text = await ninjaPage.driver.findElement(ninjaPage.appCin30Results).getText();
        expect(text).toContain("Apple Cinema 30");
        await fs.writeFile(`${__dirname}/appleCinema30.txt`, text, (e) => {
            if (e) console.error(e)
            else console.log('save Succesful')
        });
    });

});