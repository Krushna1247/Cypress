class TiqtoqPage
{


    getTestPage()
{
    return cy.get('body > div:nth-child(2) > div:nth-child(1) > header:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)')
}

getEditBox()
{
    return cy.get('#sample-textbox')
}

getCheckBox()
{
    return cy.get('#sample-checkbox')

}
getRadioButton()
{
  return  cy.get('#sample-radio1')
}

getButton()
{
   return cy.get('#sample-button')
}
getDropDown()
{
    return  cy.get('#sample-dropdown')
}
getDate()
{
    return  cy.get('#sample-date')
}
getRangeBar()
{
    return  cy.get('#sample-range')
}
getUserName()
{
    return  cy.get('#username')
}
getPassWord()
{
    return  cy.get('#password')
}
getLogin()
{
    return  cy.get('#login-button')
}
}

export default TiqtoqPage;
