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
Given('I open Madison page', () => {
  cy.visit(url);
  Then(`I see Accounting Notebook in the title`, () => {
    cy.title().should('include', 'Accounting Notebook');
  });
});

Then('Get the second Debit transaction', () => {
  // Select the second debit transaction
  cy.get('p.transaction-debit').eq(1).click();
  let amount = '';
  let date = '';

  cy.get('.transaction-body')
    .eq(2)
    .find('p')
    .eq(1)
    .then((el) => {
      amount = parseInt(el.text().split(' ')[1]);
      expect(amount).to.eq(data.debit[1]);
    });

  cy.get('.transaction-body')
    .eq(2)
    .find('p')
    .eq(2)
    .then((el) => {
      date = el.text().split(' ')[1].substr(0, 10).trim();
      expect(compareDates(date)).to.eq(true);
    });
});
