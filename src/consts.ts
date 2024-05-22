export const consts = Object.freeze({
  SITE_TITLE: 'Beastz',
  SITE_DESCRIPTION: 'Welcome to beastz, openc source application bundle!',
  PORTFOLIO_LINK: 'https://portfolio.beastz.dev',

  GITHUB_ORG_LINK: 'https://github.com/beastzdotdev',
  GITHUB_PROFILE_LINK: 'https://github.com/GiorgiKumelashvili',
  LINKEDIN_LINK: 'https://www.linkedin.com/in/giorgi-kumelashvili-5869a2210/',

  get BLOGS_LINK() {
    return this.PORTFOLIO_LINK + '/blogs';
  },
});
