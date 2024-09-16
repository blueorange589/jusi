jusi.pages.index = jusi.layouts.default([
  jusi.els.pageHeader,
  jusi.els.gridFilter,
  jusi.els.pageContent
])

jusi.pages.about = jusi.layouts.default([
  jusi.els.pageHeader,
  jusi.els.userAddForm
])



jusi.pages.login = jusi.layouts.login([
  jusi.els.loginForm
])