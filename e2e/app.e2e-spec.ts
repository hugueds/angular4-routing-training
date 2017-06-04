import { TrainingNg2RoutesPage } from './app.po';

describe('training-ng2-routes App', () => {
  let page: TrainingNg2RoutesPage;

  beforeEach(() => {
    page = new TrainingNg2RoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
