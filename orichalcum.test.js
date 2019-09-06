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

    it('action should add a review', () => {
      const actualAction = addReview(['brett', 'this is dope']);
      const expectedAction = { type: "ADD_REVIEW", payload: ['brett', 'this is dope'] };
      expect(actualAction).toEqual(expectedAction);
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