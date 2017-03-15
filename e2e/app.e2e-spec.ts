import { Angular2GithubPage } from './app.po';

describe('angular2-github App', () => {
  let page: Angular2GithubPage;

  beforeEach(() => {
    page = new Angular2GithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
