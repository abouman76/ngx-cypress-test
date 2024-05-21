/// <reference types="cypress" />

describe('First test suite', () => {

  it('first test', () => {

    cy.visit('/')
    cy.contains('Forms')
      .click()

    cy.contains('Form Layouts')
      .click()


    // find by tag
    cy.get('input');

    // find by ID
    cy.get('#inputEmail1');

    // by class value
    cy.get('.input-full-width');

    // by attribute name
    cy.get('[fullwidth]');

    // by attribute and value
    cy.get('[placeholder="Email"]')

    // by entire class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    // by two attributes
    cy.get('[placeholder="Email"][fullwidth]')

    // BY CYPRESS TEST ID 
    cy.get('[data-cy="imputEmail1"]')


  });

});
