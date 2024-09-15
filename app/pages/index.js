

app.layouts = {}
app.layouts.default = (fields) => {
  return [
    app.header,
    main({
      contains: [
        container({
          contains: fields
        })
      ]
    }),
    app.footer
  ]
}

app.layouts.login = (fields) => {
  return [
    main({
      contains: fields
    })
  ]
}

app.pages = {}
app.pages.index = app.layouts.default([
  app.pageHeader,
  app.gridFilter,
  app.pageContent
])

app.pages.login = app.layouts.login([
  app.loginForm
])

jusi.page.push('login', app.pages.login)