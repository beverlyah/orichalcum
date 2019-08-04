import puppeteer from 'puppeteer';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import addReview from './client/src/actions/addReview.js';
import addReviewReducer from './client/src/reducers/addReviewReducer.js';

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
  describe('reducers', () => {
    it('should return the initial state', () => {
      expect(addReviewReducer(undefined, {})).toEqual({reviews: ['Leave a review']});
    });
    it('should add a new review on initial state', () => {
      const action = {
        type: 'ADD_REVIEW',
        payload: 'these jeans are boss'
      }
      expect(addReviewReducer(undefined, action)).toEqual({reviews: ['Leave a review', 'these jeans are boss']})
    });
    it('should add multiple reviews', () => {
      const action1 = {
        type: 'ADD_REVIEW',
        payload: 'these jeans are boss'
      }
      const action2 = {
        type: 'ADD_REVIEW',
        payload: 'best jeans I ever had'
      }
      const state = {reviews: ['Leave a review']}
      addReviewReducer(state, action1);
      expect(addReviewReducer(state, action2)).toEqual({reviews: ['Leave a review', 'these jeans are boss', 'best jeans I ever had']})
    });
    
  })
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