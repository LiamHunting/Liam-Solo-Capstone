import {BasePage} from "./basePage";
import { By } from "selenium-webdriver";

export class NinjaPage extends BasePage {
    CurrencyTab: By = By.xpath('//button[@class="btn btn-link dropdown-toggle"]')
    euroBtn: By = By.xpath('//button[text() = "€ Euro"]')
    poundBtn: By = By.xpath('//button[text() = "£ Pound Sterling"]')
    usDollarBtn: By = By.xpath('//button[text() = "$ US Dollar"]')
    macPriceUSD: By = By.xpath('//h2[text() = "$602.00"]')
    macPriceEuro: By = By.xpath('//h2[text() = "472.33€"]')
    macPricePound: By = By.xpath('//h2[text() = "£368.73"]')

    homeBtn: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=common/home"])[2]')

    desktopsTab: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=20"])[1]')
    desktopsTabShowAll: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=20"])[2]')
    laptopsNotebookTab: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=18"])[1]')
    laptopsNotebookTabShowAll: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=18"])[2]')
    componentsTab: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=25"])[1]')
    componentsTabShowAll: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=25"])[2]')
    tabletsTab: By = By.xpath('//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=57"]')
    softwareTab: By = By.xpath('//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=17"]')
    phonePDATab: By = By.xpath('//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=24"]')
    camerasTab: By = By.xpath('//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=33"]')
    mp3Tab: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=34"])[1]')
    mp3TabShowAll: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/category&path=34"])[2]')

    myAccountDropdown: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=account/account"])[1]')
    loginPageBtn: By = By.xpath('//a[@href="http://tutorialsninja.com/demo/index.php?route=account/login"]')
    emailInput: By = By.xpath('//input[@name="email"]')
    passwordInput: By = By.xpath('//input[@id="input-password"]')
    loginBtn: By = By.xpath('//input[@value="Login"]')
    logoutBtn: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=account/logout"])[2]')

    searchBar: By = By.xpath('//input[@name="search"]')
    searchSubmitBtn: By = By.xpath('//button[@class="btn btn-default btn-lg"]')
    appCin30: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/product&product_id=42&search=Apple+Cinema+30"])[1]')
    appCin30Results: By = By.xpath('//div[@id="product-product"]')


    featMacBook: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/product&product_id=43"])[1]')
    featAppCin30: By = By.xpath('(//a[@href="http://tutorialsninja.com/demo/index.php?route=product/product&product_id=42"])[1]')


    constructor() {
        super({url: "http://tutorialsninja.com/demo/"})
    };

};