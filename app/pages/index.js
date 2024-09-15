



jusi.pages.index = jusi.layouts.default([
  jusi.pageHeader,
  jusi.gridFilter,
  jusi.pageContent
])

jusi.pages.login = jusi.layouts.login([
  jusi.loginForm
])

jusi.page.push('login')