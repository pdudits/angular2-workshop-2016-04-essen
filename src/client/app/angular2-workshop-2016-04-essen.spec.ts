import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2Workshop201604EssenApp} from '../app/angular2-workshop-2016-04-essen';

beforeEachProviders(() => [Angular2Workshop201604EssenApp]);

describe('App: Angular2Workshop201604Essen', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2Workshop201604EssenApp], (app: Angular2Workshop201604EssenApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2Workshop201604EssenApp], (app: Angular2Workshop201604EssenApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

