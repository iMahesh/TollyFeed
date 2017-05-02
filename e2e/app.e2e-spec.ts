import { TollyfeedPage } from './app.po';

describe('tollyfeed App', () => {
  let page: TollyfeedPage;

  beforeEach(() => {
    page = new TollyfeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
