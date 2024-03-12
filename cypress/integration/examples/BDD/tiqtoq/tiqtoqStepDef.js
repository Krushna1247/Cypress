/// <reference types="Cypress" />

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import TiqtoqPage from "../../../../support/pageObjects/TiqtoqPage";

const tiqtoqPage=new TiqtoqPage()


Given('I open Tiqtoq Page',()=>{

cy.visit(Cypress.env('url'))

})

When('I am verifying the tabs on that page',()=>{

tiqtoqPage.getTestPage().click()


})

Then('I am verifying the links of that page',(dataTable)=>{

    tiqtoqPage.getEditBox().type(dataTable.rawTable[1][0])
    tiqtoqPage.getCheckBox().click()
    tiqtoqPage.getRadioButton().click()
    tiqtoqPage.getButton().click()
    tiqtoqPage.getDropDown().select('Option 2')
    tiqtoqPage.getDate().click()
    tiqtoqPage.getUserName().type(dataTable.rawTable[1][0])
    tiqtoqPage.getPassWord().type(dataTable.rawTable[1][1])
    tiqtoqPage.getLogin().click()
})
  