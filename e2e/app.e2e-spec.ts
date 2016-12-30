import { Face1Page } from './app.po';

describe('face1 App', function() {
  let page: Face1Page;

  beforeEach(() => {
    page = new Face1Page();
  });

  it('should display message saying Face1', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Face1');
  });
});
