

jusi.layouts = {}
jusi.layouts.default = (fields) => {
  return [
    jusi.header,
    main({
      contains: [
        container({
          contains: fields
        })
      ]
    }),
    jusi.footer
  ]
}

jusi.layouts.login = (fields) => {
  return [
    main({
      contains: fields
    })
  ]
}

jusi.pages = {}
jusi.pages.index = jusi.layouts.default([
  jusi.pageHeader,
  jusi.gridFilter,
  jusi.pageContent
])

jusi.pages.login = jusi.layouts.login([
  jusi.loginForm
])

jusi.page.push('login')