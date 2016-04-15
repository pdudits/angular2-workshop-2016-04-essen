import { Angular2Workshop201604EssenPage } from './app.po';

describe('angular2-workshop-2016-04-essen App', function() {
  let page: Angular2Workshop201604EssenPage;

  beforeEach(() => {
    page = new Angular2Workshop201604EssenPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-workshop-2016-04-essen Works!');
  });
});
