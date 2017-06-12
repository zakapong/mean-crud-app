import { MeanCrudAppPage } from './app.po';

describe('mean-crud-app App', () => {
  let page: MeanCrudAppPage;

  beforeEach(() => {
    page = new MeanCrudAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
