import { FlashcardsWebPage } from './app.po';

describe('flashcards-web App', function() {
  let page: FlashcardsWebPage;

  beforeEach(() => {
    page = new FlashcardsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
