/// <reference types="cypress"/>

describe('Post transactions', () => {
  before(function () {
    cy.fixture('accounts').then(function (data) {
      // this.data = data;
      globalThis.data = data
    });
  });
      it('Post $200.00 credit to transaction', function () {
          cy.request({
              method: 'POST',
              url: 'http://localhost:8000/api/transactions',
              body: {
                  type: "credit",
                  amount: data.credit
              }
          })
          .then((response) => {
              cy.log(JSON.stringify(response.body))
              expect(response.status).eq(200)
              expect(response.body.type).to.eq("credit")
              expect(response.body.amount).to.eq(data.credit)
          });
      });

      it('Post $30.00 debit to transaction',function () {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8000/api/transactions',
            body: {
                type: "debit",
                amount: data.debit[0]
            }
        })
        .then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).eq(200)
            expect(response.body.type).to.eq("debit")
            expect(response.body.amount).to.eq(data.debit[0])
          });
      });

    it('Post $70.00 debit to transaction', () => {
      cy.request({
          method: 'POST',
          url: 'http://localhost:8000/api/transactions',
          body: {
              type: "debit",
              amount: data.debit[1]
          }
      })
      .then((response) => {
          cy.log(JSON.stringify(response.body))
          expect(response.status).eq(200)
          expect(response.body.type).to.eq("debit")
          expect(response.body.amount).to.eq(data.debit[1])
      });
  });

  it('Post invalid transaction', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/api/transactions',
        failOnStatusCode: false,
        body: {
            type: "debit",
            amount: data.invalid
        }
    })
    .then((response) => {
        //cy.log(JSON.stringify(response.body))
        expect(response.status).eq(400)
        expect(response.body).to.eq("Invalid input")
    });
  });

  // it('Get account balance', () => {
  //   cy.request({
  //       method: 'GET',
  //       url: 'http://localhost:8000/api/',

  //   })
  //   .then((response) => {
  //       expect(response.status).eq(400)
  //   });
});


