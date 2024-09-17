jusi.pages.index = jusi.layouts.default([
  pageHeader({
    title: 'Homepage',
    actions: [
          button({ text: 'Get Posts', events: { click: events.getPosts } }),
          button({ text: 'Filter', events: { click: events.fillTable } })
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
  jusi.els.formPostEdit
])

jusi.pages.login = jusi.layouts.login([
  jusi.els.loginForm
])