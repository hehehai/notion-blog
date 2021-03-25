module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'd4f80e48851b4770a4f913d7bd462779',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '河河海的开发笔记',
  domain: 'hehehai.cn',
  author: '河河海',

  // open graph metadata (optional)
  description: '一名全栈程序员的开发笔记',
  socialImageTitle: '河河海',
  socialImageSubtitle: '你好啊 👋',

  // social usernames (optional)
  twitter: 'hehehai',
  github: 'hehehai',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'hehehai/notion-blog',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // show github share button
  // set github link
  githubShareButton: null
}
