import puppeteer from 'puppeteer';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import addReview from './client/src/actions/addReview.js';

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('redux', () => {
  const mockStore = configureStore([thunk]);

  describe('dispatch actions', () => {

    let store;

    beforeEach(() => {
      const initialState = {};
      store = mockStore(initialState);
    });

    it('should added a review correctly', () => {
      store.dispatch(addReview('this is dope'));
      const action = store.getActions();
      const expectedPayload = { type: "ADD_REVIEW", payload: "this is dope"};
      expect(action).toEqual([expectedPayload]);
    });

  });
});

// describe('end-to-end tests', () => {

//   beforeEach(async () => {
//     await page.goto('http://localhost:8866');
//   });

//   test('can run e2e tests', async () => {
//     let selector = '#app';
//     let text = await page.$eval(selector, el => {
//       return el !== undefined;
//     });
//     expect(text).toEqual(true);
//   });
// });