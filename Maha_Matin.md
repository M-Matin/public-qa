# Madison Instructions:

---

Hi Team,

Sorry for the delay, it was very busy and crazy week for me, (trip to LA, Prod Issue, so many home assignment ...). It was very straightforward task and was not complicated at all. I spend **3 hours** in 2 days to complete this task.

Here are the steps that I did to solve this problem.

- [x] Clone GitHub - `FedericoAmura/Agile2020AccountingNotebook`
- [x] Add `Cypress` and `Cucumber` to the project
- [x] Create a test input JSON file in the project for your tests
- [x] Check the postman collection at backend/tests and write an API test with Cypress to post (validate the responses):
  - [x] 1 credit transaction
  - [x] 2 debit transactions
  - [x] 1 invalid transaction
  - [x] write an API test to check the account balance

- [x] write an e2e test with Cucumber that:
  - [x] opens the app UI
  - [x] go to the 2nd debit transaction
  - [x] get amount and date:
  - [x] compare the amount with the test input value used by the previous test
  - [x] compare the date with today’s date

# Run the Test
- Go to root of the application and run the project `$ npm run start`
- Then run the Cypress test with `$ npm run cypress:run` or `$ npm run cypress:open` to run manually.

# Result

![alt](./Snapshot.gif)
