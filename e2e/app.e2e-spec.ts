import { ApmAppPage } from './app.po';

describe('apm-app App', () => {
  let page: ApmAppPage;

  beforeEach(() => {
    page = new ApmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
