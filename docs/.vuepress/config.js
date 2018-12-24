let versioning = require('./lib/versioning.js')

module.exports = {
  title: 'Tea Commerce',
  description: 'eCommerce for Umbraco',head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    editLinks: true,                                //  "Edit this page" at the bottom of each page
    lastUpdated: 'Last Updated',                    //  "Last Updated" at the bottom of each page
    repo: 'teacommerce/tea-commerce-docs', 
    docsDir: 'docs/',
    versions: {
      selected: versioning.versions.current,
      next: versioning.versions.next,
      current: versioning.versions.current,
      previous: versioning.versions.previous,
      all: versioning.versions.all
    },
    search: true,
    nav: [
      { text: "Docs", link: '/' },
      { text: "Changelog", link: '/changelog/3.x/' },
    ],
    sidebar: { 
      '/changelog/': require('../changelog/sidebar.js'),
      '/versions/': require('../versions/sidebar.js'),
      ...versioning.sidebars
    }
  }
}