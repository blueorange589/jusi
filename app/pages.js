jusi.pages.index = jusi.layouts.default([
  pageHeader({
    title: 'Homepage',
    actions: [
          button({ text: 'Get Posts', events: { click: events.getPosts } }),
          button({ text: 'Filter', events: { click: events.filterPosts } })
        ]
  }),
  jusi.els.gridFilter,
  jusi.els.pageContent
])

jusi.pages.about = jusi.layouts.default([
  pageHeader({
    title: 'About',
    actions: []
  }),
  jusi.els.userAddForm
])

jusi.pages.login = jusi.layouts.login([
  jusi.els.loginForm
])