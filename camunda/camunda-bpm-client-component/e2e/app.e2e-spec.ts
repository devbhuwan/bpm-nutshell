import { CamundaBpmClientComponentPage } from './app.po';

describe('camunda-bpm-client-component App', () => {
  let page: CamundaBpmClientComponentPage;

  beforeEach(() => {
    page = new CamundaBpmClientComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
