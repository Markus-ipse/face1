import { browser, element, by } from 'protractor';

export class Face1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('f1-root h1')).getText();
  }
}
