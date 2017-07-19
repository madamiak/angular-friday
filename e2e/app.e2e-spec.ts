import { AngularFridayPage } from './app.po';

describe('angular-friday App', () => {
  let page: AngularFridayPage;

  beforeEach(() => {
    page = new AngularFridayPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
