import { RepLogPage } from './app.po';

describe('rep-log App', function() {
  let page: RepLogPage;

  beforeEach(() => {
    page = new RepLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
