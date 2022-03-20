module.exports = {
    title: 'OpenUAS',
    description: 'Testing the capabilities of vuepress',
    themeConfig: {
        logo: 'logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Intro', link: '/intro/' },
          ],
        sidebar: 'auto',
        searchPlaceholder: 'Search',
        lastUpdated: 'Last Updated',
        
        //Details for repo link in nav bar and edit this page link at bottom of all pages
        repo: 'c-glick/vuepress-test',
        docsDir: 'docs',
        docsBranch:'main',
        editLinks: true,
      },
      markdown: {
        lineNumbers: true
      }
  }