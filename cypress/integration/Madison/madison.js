import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import * as data from '../../fixtures/accounts.json';

const compareDates = (date) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  // console.log(date, today)
  return date.trim() === today.trim();
};


const url = 'http://localhost:3000';
Given('Opens the app UI', () => {
  cy.visit(url);
  Then(`Check the Tile`, () => {
    cy.title().should('include', 'Accounting Notebook');
  });
});

Given('Access second debit transaction', () => {
  Then('Compare with user data entry', () => {
  // Select the second debit transaction
    cy.get('p.transaction-debit').eq(1).click();
    let amount = '';

    cy.get('.transaction-body').eq(2).find('p').eq(1).then((el) => {
        amount = parseInt(el.text().split(' ')[1]);
        expect(amount).to.eq(data.debit[1]);
      });
  });
});


Given('Access second debit transaction date', () => {
  Then('Confirm date is equal todays date', () => {
  // Select the second debit transaction
    // cy.get('p.transaction-debit').eq(1).click();
    let date = '';

    cy.get('.transaction-body').eq(2).find('p').eq(2).then((el) => {
        date = el.text().split(' ')[1].substr(0, 10).trim();
        expect(compareDates(date)).to.eq(true);
      });
  });

});



