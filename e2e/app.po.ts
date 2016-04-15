export class Angular2Workshop201604EssenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-workshop-2016-04-essen-app p')).getText();
  }
}
