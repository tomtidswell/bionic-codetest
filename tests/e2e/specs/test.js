// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {

  beforeEach(() => cy.visit('/'))

  it("On load, can see the chatbot avatar", () => {
    cy.contains("div.avatar", "m")
  })
  
  it("On load, can see the thinking elipsis", () => {
    cy.get('div.thinking div.bubble').should('have.length', 3)
  })
  
  it("The thinking elipsis disappears after 1s", () => {
    cy.wait(1000)
    cy.get('div.thinking div.bubble').should('have.length', 0)
  })

  it("The chatbot text appears after 1s", () => {
    cy.wait(1000)
    cy.contains(".message .text", "Hello! Please choose from one of the options below:")
  })

  it("The chatbot avatar should appear after 2s", () => {
    cy.wait(2000)
    cy.contains("div.avatar", "Me")
  })

  it("Three user options should appear after 2s", () => {
    cy.wait(2000)
    cy.get('.message .options .option').should('have.length', 3)
  })

  it("Clicking option A should produce a response elipsis", () => {
    cy.wait(2000)
    cy.get('.message .options .option:first').click()
    cy.get('div.thinking div.bubble').should('have.length', 3)
  })

  it("Clicking option A should produce an acknowledgement", () => {
    cy.wait(2000)
    cy.get('.message .options .option:first').click()
    cy.contains(".message .text", "Option A?")
  })

  it("Changing choice should recreate acknowledgement with preceding elipsis", () => {
    cy.wait(2000)
    cy.contains(".message .option", "Option A").click()
    cy.contains(".message .text", "Option A?")
    cy.contains(".message .option", "Option C").click()
    cy.get('div.thinking div.bubble').should('have.length', 3)
    cy.contains(".message .text", "Option C?")
  })

});
