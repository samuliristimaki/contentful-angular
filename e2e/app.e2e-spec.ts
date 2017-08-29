import { ContentfulAngularPage } from './app.po';

describe('contentful-angular App', function() {
  let page: ContentfulAngularPage;

  beforeEach(() => {
    page = new ContentfulAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
