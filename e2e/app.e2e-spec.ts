import { MyTreePage } from './app.po';

describe('my-tree App', () => {
  let page: MyTreePage;

  beforeEach(() => {
    page = new MyTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
